// Tests for the eval tooling in evals/.
//
// The trigger evals themselves cost real model calls and never run in CI, so
// the parts that CAN be checked offline are checked here: does the scenario
// validator actually reject a broken scenario, and does the transcript reader
// recognise each harness shape without inventing a pass?
//
// A false pass in either place is worse than a false miss, because it hides the
// regression the evals exist to catch.

import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import assert from 'node:assert/strict';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

import { readJSON } from '../scripts/lib.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = join(ROOT, 'evals', 'check-scenarios.mjs');
const READER = join(ROOT, 'evals', 'read-transcript.mjs');
const RUNNER = join(ROOT, 'evals', 'run-trigger-tests.sh');

function runCheck(scenarios, args = []) {
  const dir = mkdtempSync(join(tmpdir(), 'eval-scenarios-'));
  const file = join(dir, 'scenarios.json');
  try {
    writeFileSync(file, JSON.stringify(scenarios, null, 2));
    return spawnSync(process.execPath, [CHECK, ...args], {
      cwd: ROOT,
      encoding: 'utf8',
      env: { ...process.env, EVAL_SCENARIOS: file },
    });
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

function readTranscript(transcript, candidates) {
  const result = spawnSync(process.execPath, [READER, ...candidates], {
    cwd: ROOT,
    encoding: 'utf8',
    input: transcript,
  });
  assert.equal(result.status, 0, result.stderr);
  return Object.fromEntries(
    result.stdout
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const i = line.indexOf('=');
        return [line.slice(0, i), line.slice(i + 1)];
      }),
  );
}

// A minimal file that passes everything except the coverage gate, so each test
// can introduce exactly one defect.
function oneScenario(overrides = {}) {
  return {
    description: 'test fixture',
    scenarios: [
      {
        id: 'fixture-scenario',
        domain: 'legal-core',
        expected_skill: 'legal-research',
        prompt: 'What does the Employment Contracts Act say about non-compete clauses?',
        prompt_fi: 'Mitä työsopimuslaki sanoo kilpailukiellosta?',
        ...overrides,
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// The real scenario file
// ---------------------------------------------------------------------------

test('every domain in marketplace.json has an English and a Finnish scenario', () => {
  const domains = readJSON(join(ROOT, 'marketplace.json')).plugins.map((p) => p.name);
  const { scenarios } = readJSON(join(ROOT, 'evals', 'scenarios.json'));

  const withEnglish = new Set(scenarios.filter((s) => s.prompt).map((s) => s.domain));
  const withFinnish = new Set(scenarios.filter((s) => s.prompt_fi).map((s) => s.domain));

  for (const domain of domains) {
    assert.ok(withEnglish.has(domain), `${domain} has no English scenario`);
    assert.ok(withFinnish.has(domain), `${domain} has no Finnish scenario`);
  }
});

test('the checked-in scenario file passes its own validator', () => {
  const result = spawnSync(process.execPath, [CHECK], { cwd: ROOT, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.match(result.stdout, /domains covered: 24\/24/);
});

// ---------------------------------------------------------------------------
// The validator rejects what would otherwise fail silently
// ---------------------------------------------------------------------------

test('scenario validator rejects a skill that no longer exists', () => {
  const result = runCheck(oneScenario({ expected_skill: 'renamed-away' }));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /renamed-away' does not exist/);
});

test('scenario validator rejects a domain that no longer exists', () => {
  const result = runCheck(oneScenario({ domain: 'juristi' }));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /does not resolve to a directory/);
});

test('scenario validator rejects a Finnish key that outlived the rename', () => {
  const scenarios = oneScenario();
  scenarios.scenarios[0].plugari = 'legal-core';
  const result = runCheck(scenarios);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /unknown key 'plugari'/);
});

test('scenario validator rejects a known_miss with no explanation', () => {
  const result = runCheck(oneScenario({ known_miss: true }));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /known_miss requires a note/);
});

test('scenario validator rejects a prompt that names the skill', () => {
  const result = runCheck(oneScenario({ prompt: 'run legal-research for me' }));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /contains the skill name/);
});

test('scenario validator reports uncovered domains', () => {
  const result = runCheck(oneScenario());
  assert.equal(result.status, 1);
  assert.match(result.stderr, /coverage: domain 'taxation' has no scenario/);
});

// ---------------------------------------------------------------------------
// --list is the contract between the validator and the runner
// ---------------------------------------------------------------------------

test('--list emits one tab-separated row per scenario and language', () => {
  const result = spawnSync(process.execPath, [CHECK, '--list', 'en,fi'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  assert.equal(result.status, 0, result.stderr);

  const rows = result.stdout.trim().split('\n');
  const { scenarios } = readJSON(join(ROOT, 'evals', 'scenarios.json'));
  const expected = scenarios.length + scenarios.filter((s) => s.prompt_fi).length;
  assert.equal(rows.length, expected);

  for (const row of rows) {
    const fields = row.split('\t');
    assert.equal(fields.length, 6, `row does not have 6 fields: ${row}`);
    assert.match(fields[3], /^(en|fi)$/);
    assert.match(fields[4], /^[01]$/);
    assert.notEqual(fields[5].trim(), '');
  }
});

test('--list honours a single language', () => {
  const result = spawnSync(process.execPath, [CHECK, '--list', 'en'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  assert.equal(result.status, 0, result.stderr);
  const langs = new Set(result.stdout.trim().split('\n').map((r) => r.split('\t')[3]));
  assert.deepEqual([...langs], ['en']);
});

// ---------------------------------------------------------------------------
// Transcript reading — one implementation, several harness shapes
// ---------------------------------------------------------------------------

const CANDIDATES = ['legal-research', 'legal-writing', 'plain-language'];

test('reader recognises a Claude stream-json Skill call', () => {
  const line = JSON.stringify({
    type: 'assistant',
    message: { content: [{ type: 'tool_use', name: 'Skill', input: { skill: 'legal-writing' } }] },
  });
  const report = readTranscript(line, CANDIDATES);
  assert.equal(report.status, 'ok');
  assert.equal(report.confidence, 'high');
  assert.equal(report.skills, 'legal-writing');
});

test('reader unwraps namespaced names and JSON-encoded arguments', () => {
  const line = JSON.stringify({
    type: 'tool_call',
    name: 'skill',
    arguments: JSON.stringify({ skill: 'legal-core:legal-research' }),
  });
  const report = readTranscript(line, CANDIDATES);
  assert.equal(report.confidence, 'high');
  assert.equal(report.skills, 'legal-research');
});

test('reader handles a harness that exposes one tool per skill', () => {
  const line = JSON.stringify({ type: 'tool_use', name: 'legal-core:plain-language' });
  const report = readTranscript(line, CANDIDATES);
  assert.equal(report.confidence, 'high');
  assert.equal(report.skills, 'plain-language');
});

test('reader reports nothing when a structured transcript shows no skill call', () => {
  const line = JSON.stringify({
    type: 'assistant',
    message: { content: [{ type: 'text', text: 'Here is the answer about legal-research.' }] },
  });
  const report = readTranscript(line, CANDIDATES);
  assert.equal(report.status, 'ok');
  assert.equal(report.confidence, 'none');
  assert.equal(report.skills, '');
});

test('reader falls back to text only when there is nothing structured, and says so', () => {
  const report = readTranscript('Invoking skill legal-writing to fix the citation.', CANDIDATES);
  assert.equal(report.confidence, 'low');
  assert.equal(report.skills, 'legal-writing');
});

test('reader does not treat prose that merely names a skill as a trigger', () => {
  const report = readTranscript('The answer draws on legal-writing conventions.', CANDIDATES);
  assert.equal(report.skills, '');
});

// This is the failure that actually happened against a real copilot transcript:
// every harness lists its available skills in the system prompt, and a naive
// text match reported the whole domain as triggered. A false pass hides the
// regression the evals exist to catch, so it must stay impossible.
test('reader does not read a skill catalogue as a wall of triggers', () => {
  const catalogue = [
    '<available_skills>',
    ...CANDIDATES.map((c) => `<skill>\n  <name>${c}</name>\n  <description>Use this skill when...</description>\n</skill>`),
    '</available_skills>',
  ].join('\n');
  const report = readTranscript(catalogue, CANDIDATES);
  assert.equal(report.skills, '');
  assert.equal(report.confidence, 'none');
});

test('reader discards a fallback match set large enough to be a catalogue', () => {
  const lines = CANDIDATES.map((c) => `Loading skill ${c} into the session.`).join('\n');
  const report = readTranscript(lines, CANDIDATES);
  assert.equal(report.skills, '');
  assert.match(report.note ?? '', /catalogue/);
});

test('reader ignores a line that lists several skills at once', () => {
  const report = readTranscript(`Available skills to run: ${CANDIDATES.join(', ')}`, CANDIDATES);
  assert.equal(report.skills, '');
});

test('a real structured transcript is never routed through the text fallback', () => {
  // JSON present but no skill call: the catalogue inside the system prompt must
  // not be able to leak in through the fallback.
  const line = JSON.stringify({
    type: 'model.messages_snapshot',
    data: {
      messages: [
        {
          role: 'system',
          content: `<available_skills><skill><name>legal-writing</name></skill><skill><name>legal-research</name></skill></available_skills>`,
        },
      ],
    },
  });
  const report = readTranscript(line, CANDIDATES);
  assert.equal(report.skills, '');
  assert.equal(report.confidence, 'none');
});

test('reader separates infrastructure failure from a trigger miss', () => {
  for (const [transcript, expected] of [
    ['Failed to authenticate with the API', /not authenticated/],
    ['error: 401 Unauthorized', /401/],
    ['', /no output/],
    [JSON.stringify({ type: 'result', is_error: true, result: 'Invalid API key' }), /Invalid API key/],
  ]) {
    const report = readTranscript(transcript, CANDIDATES);
    assert.equal(report.status, 'error', `expected error for: ${transcript}`);
    assert.match(report.reason, expected);
  }
});

test('reader does not call a run an error when the skill did trigger', () => {
  const transcript = [
    JSON.stringify({
      type: 'assistant',
      message: { content: [{ type: 'tool_use', name: 'Skill', input: { skill: 'legal-research' } }] },
    }),
    'warning: rate limit headers present',
  ].join('\n');
  const report = readTranscript(transcript, CANDIDATES);
  assert.equal(report.status, 'ok');
  assert.equal(report.skills, 'legal-research');
});

// ---------------------------------------------------------------------------
// Runner shape
// ---------------------------------------------------------------------------

test('runner declares an adapter trio for every harness it lists', () => {
  const source = readFileSync(RUNNER, 'utf8');
  for (const harness of ['claude', 'codex', 'copilot']) {
    for (const fn of ['available', 'preflight', 'invoke']) {
      assert.match(
        source,
        new RegExp(`runner_${fn}_${harness}\\(\\)`),
        `runner_${fn}_${harness} is missing`,
      );
    }
  }
  const listed = source.match(/^RUNNERS="([^"]+)"/m);
  assert.ok(listed, 'RUNNERS is not declared');
  assert.deepEqual(listed[1].split(' ').sort(), ['claude', 'codex', 'copilot']);
});

// The runner must never be wired into CI: every scenario is a real model call.
test('the eval runner is not referenced by any workflow', () => {
  const workflowDir = join(ROOT, '.github', 'workflows');
  const files = readdirSync(workflowDir).filter((f) => f.endsWith('.yml') || f.endsWith('.yaml'));
  assert.ok(files.length > 0, 'no workflows found');
  for (const file of files) {
    const text = readFileSync(join(workflowDir, file), 'utf8');
    assert.doesNotMatch(text, /run-trigger-tests/, `${file} runs the trigger evals`);
  }
});

// ...and the offline check must stay wired in, or a stale scenario goes unseen.
test('the offline scenario check runs in CI', () => {
  const text = readFileSync(join(ROOT, '.github', 'workflows', 'validate.yml'), 'utf8');
  assert.match(text, /node evals\/check-scenarios\.mjs/);
});
