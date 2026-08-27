#!/usr/bin/env node
// Reads a harness transcript on stdin and answers the one question every
// adapter in run-trigger-tests.sh has to answer: which skill did the model
// invoke, and did the run actually work?
//
// Keeping this out of the runner is what makes the runner harness-neutral.
// Adapters differ in how they launch a harness and how they load a domain;
// they do not differ in what counts as evidence of a skill invocation, so
// there is exactly one implementation of that here.
//
// Usage:  <transcript> | node evals/read-transcript.mjs <candidate-skill>...
//
// Prints key=value lines:
//   status=ok | error
//   reason=<free text>          (only when status=error)
//   confidence=high | low | none
//   skills=<space separated>
//
// confidence=high  a structured tool call naming a skill was found.
// confidence=low   no structured events at all, but the plain-text transcript
//                  shows a skill name on a line that mentions a skill. Reported
//                  so the operator can tell a real trigger from an echo.
//
// A false pass is worse than a false miss: it hides the regression the eval
// exists to catch. So the text fallback only runs when there is nothing
// structured to read.

const candidates = process.argv.slice(2).filter(Boolean);

const chunks = [];
for await (const chunk of process.stdin) chunks.push(chunk);
const raw = Buffer.concat(chunks).toString('utf8');

// ---------------------------------------------------------------------------
// Structured pass
// ---------------------------------------------------------------------------

const SKILL_TOOL = /^(?:mcp__)?skill(?:s)?(?:__.*)?$/i;
const SKILL_ARG_KEYS = ['skill', 'skill_name', 'skillName', 'name', 'id', 'path'];

const found = new Set();
let sawStructuredEvent = false;

function asObject(value) {
  if (value && typeof value === 'object') return value;
  if (typeof value === 'string') {
    // Some harnesses put tool arguments in a JSON-encoded string.
    try {
      const parsed = JSON.parse(value);
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch {
      return null;
    }
  }
  return null;
}

function matchCandidate(value) {
  if (typeof value !== 'string') return null;
  // Names arrive as 'legal-writing', 'legal-core:legal-writing' or a path.
  const tail = value.split(/[/:\\]/).filter(Boolean).pop();
  for (const candidate of candidates) {
    if (value === candidate || tail === candidate) return candidate;
  }
  return null;
}

function recordFromArgs(args) {
  const obj = asObject(args);
  if (!obj) return false;
  for (const key of SKILL_ARG_KEYS) {
    const hit = matchCandidate(obj[key]);
    if (hit) {
      found.add(hit);
      return true;
    }
  }
  return false;
}

function walk(node) {
  if (Array.isArray(node)) {
    for (const item of node) walk(item);
    return;
  }
  if (!node || typeof node !== 'object') return;

  const toolName = node.name ?? node.tool_name ?? node.toolName ?? node.tool;
  if (typeof toolName === 'string') {
    if (SKILL_TOOL.test(toolName)) {
      sawStructuredEvent = true;
      const recorded =
        recordFromArgs(node.input) ||
        recordFromArgs(node.arguments) ||
        recordFromArgs(node.parameters) ||
        recordFromArgs(node.args) ||
        recordFromArgs(node.params);
      // A harness may expose one tool per skill instead of a generic Skill tool.
      if (!recorded) {
        const hit = matchCandidate(toolName);
        if (hit) found.add(hit);
      }
    } else {
      // Tool-per-skill shape, e.g. name == 'legal-core:legal-writing'.
      const hit = matchCandidate(toolName);
      if (hit) {
        sawStructuredEvent = true;
        found.add(hit);
      }
    }
  }

  for (const value of Object.values(node)) walk(value);
}

const lines = raw.split(/\r?\n/);
let sawJson = false;
for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) continue;
  let parsed;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    continue;
  }
  sawJson = true;
  walk(parsed);
}

if (!sawJson && raw.trim().startsWith('{')) {
  // Whole transcript is one pretty-printed JSON document.
  try {
    walk(JSON.parse(raw));
    sawJson = true;
  } catch {
    /* not JSON after all */
  }
}

// ---------------------------------------------------------------------------
// Text fallback (only when there was nothing structured to read)
// ---------------------------------------------------------------------------

// Every harness puts a catalogue of available skills in the system prompt, so
// a naive "line mentions a skill name" match reports the whole domain as
// triggered. That happened in practice against a real copilot transcript, and
// a false pass is worse than a false miss: it hides the regression these evals
// exist to catch. So the fallback must see something that looks like an
// *action*, and must refuse anything that looks like a listing.
const CATALOGUE = /<\/?skill\b|<\/?available_skills\b|<name>|<description>/i;
const INVOCATION = /\b(?:invok|call|run|ran|us|load|activat|trigger|launch|select|appl)\w*\b/i;
const MAX_FALLBACK_HITS = 2;

let confidence = found.size > 0 ? 'high' : 'none';
let note = '';

if (found.size === 0 && !sawJson) {
  for (const line of lines) {
    if (!/skill/i.test(line)) continue;
    if (CATALOGUE.test(line)) continue;
    if (!INVOCATION.test(line)) continue;

    const onThisLine = candidates.filter((candidate) => line.includes(candidate));
    // Several names on one line is a list, not an invocation.
    if (onThisLine.length !== 1) continue;
    found.add(onThisLine[0]);
  }

  if (found.size > MAX_FALLBACK_HITS) {
    // A whole domain's worth of matches is a catalogue that slipped through.
    // Report nothing rather than a pass nobody can trust.
    note = `text fallback matched ${found.size} skills and was discarded as a catalogue`;
    found.clear();
  }

  if (found.size > 0) confidence = 'low';
}

// ---------------------------------------------------------------------------
// Run health
// ---------------------------------------------------------------------------

// An infrastructure failure is not a trigger miss. Reporting it as one would
// turn a logged-out terminal into a wall of red that looks like a regression.
const ERROR_PATTERNS = [
  [/failed to authenticate|authentication failed|not (?:logged in|authenticated)/i, 'not authenticated'],
  [/\b401\b|\bunauthorized\b|\bforbidden\b|\b403\b/i, 'authorization rejected (401/403)'],
  [/rate.?limit|429 Too Many/i, 'rate limited'],
  [/quota (?:exceeded|exhausted)|insufficient_quota|credit balance/i, 'quota exhausted'],
  [/command not found|is not recognized as|ENOENT/i, 'harness binary failed to start'],
  [/unknown option|unrecognized (?:option|argument)|invalid option/i, 'harness rejected a runner flag'],
];

let status = 'ok';
let reason = '';

if (raw.trim() === '') {
  status = 'error';
  reason = 'harness produced no output';
} else if (sawStructuredEvent === false && found.size === 0) {
  for (const [pattern, label] of ERROR_PATTERNS) {
    if (pattern.test(raw)) {
      status = 'error';
      reason = label;
      break;
    }
  }
}

if (status === 'ok') {
  // Explicit error results in a structured stream, e.g. {"type":"result","is_error":true}.
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('{')) continue;
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed && parsed.is_error === true && found.size === 0) {
        status = 'error';
        reason = typeof parsed.result === 'string' ? parsed.result.slice(0, 200) : 'harness reported is_error';
        break;
      }
    } catch {
      /* ignore */
    }
  }
}

process.stdout.write(`status=${status}\n`);
if (status === 'error') process.stdout.write(`reason=${reason.replace(/\s+/g, ' ')}\n`);
process.stdout.write(`confidence=${confidence}\n`);
// A discarded catalogue must be visible: silently reporting no trigger would
// look identical to a genuine miss, and the two need different fixes.
if (note) process.stdout.write(`note=${note.replace(/\s+/g, ' ')}\n`);
process.stdout.write(`skills=${[...found].join(' ')}\n`);
