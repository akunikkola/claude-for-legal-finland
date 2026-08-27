#!/usr/bin/env node
// Upstream drift bridge.
//
//   node scripts/check-upstream-drift.mjs                  # report drift since the last ported commit
//   node scripts/check-upstream-drift.mjs --since <ref>    # override the base ref
//   node scripts/check-upstream-drift.mjs --to <ref>       # override the head ref (default upstream/main)
//   node scripts/check-upstream-drift.mjs --fetch          # git fetch upstream first
//   node scripts/check-upstream-drift.mjs --json           # machine-readable, for the workflow
//   node scripts/check-upstream-drift.mjs --port-statutes  # apply the mechanical statute-registry port
//   node scripts/check-upstream-drift.mjs --upstream-url   # print the upstream URL from AGENTS.md
//
// This is a hard fork: upstream prose is Finnish, this fork's is English, and
// every path was renamed. `git merge upstream/main` will never be the right
// move again. But upstream still fixes STATUTE REFERENCES, and a fork that
// silently cites a repealed act is the single biggest ongoing risk of forking
// (the repository's own example: MRL -> alueidenkäyttölaki, kaupparekisterilaki
// 129/1979 -> 564/2023). So drift is surfaced rather than merged.
//
// Three layers, cheapest signal first:
//
//   Layer 3  citations changed upstream. Statute numbers (NNN/YYYY) and case
//            identifiers added or removed in the diff, listed FIRST. Highest
//            signal, lowest volume: a changed citation is a legal-correctness
//            problem even when the surrounding Finnish prose is irrelevant here.
//
//   Layer 1  the statute registry. tracking/statutes.json holds Finnish statute
//            names because check-statutes.mjs matches them against Finlex page
//            titles - which also makes it language-independent, so it is the one
//            file that can be ported mechanically. --port-statutes does it.
//
//   Layer 2  everything else: each changed upstream path mapped through
//            scripts/rename-map.json onto its fork path, so a human can port the
//            prose. Paths that did NOT exist at the fork point are flagged
//            explicitly - without that warning the mapper would silently drop
//            files the rename map was never built to know about.
//
// State lives in the root AGENTS.md "Fork provenance" table, not in a second
// file: the `Last ported upstream commit` row is the base ref, and porting work
// must update that row in the same commit.
//
// Dependency-free (Node standard library only) and degrades to a warning when
// the upstream remote is absent or unfetched, so a shallow CI clone cannot
// crash it.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

import { ROOT, readJSON } from './lib.mjs';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const UPSTREAM_REMOTE = 'upstream';
const DEFAULT_HEAD = 'upstream/main';
const AGENTS_MD = 'AGENTS.md';
const RENAME_MAP = 'scripts/rename-map.json';

// The one file whose CONTENT is language-independent, so upstream changes to it
// can be ported without a translator. Everything else upstream touches is
// Finnish prose and needs a human.
const STATUTE_REGISTRY_UPSTREAM = 'seuranta/saadokset.json';

// Citation forms worth flagging on their own. Deliberately duplicated from
// scripts/check-citations.mjs rather than shared: that script is a gate over the
// fork's own tree, this one reads upstream diffs, and coupling them would make
// one script's tuning silently change the other's verdict. Keep them in sync.
const CITATION_PATTERNS = [
  /\b\d{1,4}\/(?:19|20)\d{2}\b/g, // statute number: 55/2001, 2016/679
  /\b(?:KKO|KHO|MAO|KVL|EUT|EIT):\d{2,4}[:/]\d+\b/g, // case id: KKO:2019:42
  /\bHE\s+\d+\/\d{4}\s*vp\b/g, // preparatory works: HE 268/2014 vp
  /\b\(EU\)\s*\d{4}\/\d+\b/g, // EU instrument: (EU) 2024/1689
];

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function flagValue(argv, name) {
  const i = argv.indexOf(name);
  if (i === -1) return null;
  const value = argv[i + 1];
  if (!value || value.startsWith('--')) {
    fail(`${name} needs a value, e.g. ${name} upstream/main`);
  }
  return value;
}

function fail(message) {
  console.error(`\n✗ ${message}\n`);
  process.exit(2);
}

// ---------------------------------------------------------------------------
// git helpers - every call is allowed to fail; nothing here may crash CI
// ---------------------------------------------------------------------------

function git(args) {
  return execFileSync('git', ['-c', 'core.quotepath=false', ...args], {
    cwd: ROOT,
    encoding: 'utf8',
    maxBuffer: 128 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function gitTry(args) {
  try {
    return git(args);
  } catch {
    return null;
  }
}

const hasRemote = (name) =>
  (gitTry(['remote']) ?? '').split('\n').map((s) => s.trim()).includes(name);

const resolveRef = (ref) => gitTry(['rev-parse', '--verify', '--quiet', `${ref}^{commit}`])?.trim() ?? null;

const shortSha = (sha) => (sha ? sha.slice(0, 7) : '?');

// ---------------------------------------------------------------------------
// State: the base ref comes from the AGENTS.md provenance table
// ---------------------------------------------------------------------------

const PORTED_ROW = /^\|\s*Last ported upstream commit\s*\|\s*`([0-9a-f]{7,40})`\s*\|/m;
const UPSTREAM_ROW = /^\|\s*Upstream\s*\|\s*`([^`]+)`\s*\|/m;

function readProvenance() {
  const file = join(ROOT, AGENTS_MD);
  if (!existsSync(file)) return { text: null, lastPorted: null, upstreamUrl: null };
  const text = readFileSync(file, 'utf8');
  return {
    text,
    lastPorted: text.match(PORTED_ROW)?.[1] ?? null,
    upstreamUrl: text.match(UPSTREAM_ROW)?.[1] ?? null,
  };
}

/** Rewrites the `Last ported upstream commit` row in place. */
function writeLastPorted(sha) {
  const file = join(ROOT, AGENTS_MD);
  const text = readFileSync(file, 'utf8');
  const updated = text.replace(
    PORTED_ROW,
    (row) => row.replace(/`[0-9a-f]{7,40}`/, `\`${sha}\``),
  );
  if (updated === text) return false;
  writeFileSync(file, updated);
  return true;
}

// ---------------------------------------------------------------------------
// Path mapping - same longest-prefix resolution as scripts/apply-rename.mjs,
// so the two never disagree about where an upstream file lands.
// ---------------------------------------------------------------------------

function loadRenameMap() {
  const file = join(ROOT, RENAME_MAP);
  if (!existsSync(file)) fail(`${RENAME_MAP} is missing - the drift bridge cannot map upstream paths.`);
  return readJSON(file);
}

function makeMapper(rules) {
  // Longest first: a file rule must win over its parent directory rule.
  const sorted = [...rules].sort((a, b) => b.from.length - a.from.length);
  return (path) => {
    for (const rule of sorted) {
      if (path === rule.from) return rule.to;
      if (path.startsWith(`${rule.from}/`)) return `${rule.to}${path.slice(rule.from.length)}`;
    }
    return null;
  };
}

/**
 * Classifies one changed upstream path.
 *
 *   mapped            a rename rule matched and the fork file exists
 *   same-path         no rule matched, but the path exists here too (README.md, scripts/, .github/)
 *   deleted-upstream  upstream removed the file; the fork's counterpart may now be orphaned
 *   new-upstream      the path did not exist at the fork point - rename-map.json was never
 *                     built to know about it, so it needs an explicit decision
 *   missing-in-fork   the map produced a target that is not in this tree (deleted here, or stale rule)
 */
function classify(upstreamPath, change, mapPath, forkPointFiles) {
  const mapped = mapPath(upstreamPath);
  const forkPath = mapped ?? upstreamPath;
  const existsHere = existsSync(join(ROOT, forkPath));

  // A deletion is never a "new path", however the fork-point tree looks.
  if (change === 'D') return { forkPath: existsHere ? forkPath : null, status: 'deleted-upstream' };

  if (existsHere) return { forkPath, status: mapped ? 'mapped' : 'same-path' };
  // forkPointFiles is null in a shallow clone: we cannot tell "new upstream file"
  // from "deleted in the fork", so report the weaker claim rather than a wrong one.
  if (forkPointFiles && !forkPointFiles.has(upstreamPath)) return { forkPath: null, candidate: mapped, status: 'new-upstream' };
  if (!forkPointFiles && !mapped) return { forkPath: null, candidate: null, status: 'new-upstream' };
  return { forkPath, status: 'missing-in-fork' };
}

// ---------------------------------------------------------------------------
// Layer 3 - citations added or removed upstream
// ---------------------------------------------------------------------------

function citationsIn(text) {
  const found = [];
  for (const pattern of CITATION_PATTERNS) {
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) found.push(match[0].replace(/\s+/g, ' '));
  }
  return found;
}

/**
 * Reads a -U0 diff and returns the net citation change per token.
 *
 * -U0 emits no context lines, so every +/- line is a real edit. A token that
 * appears on both sides is line churn (a sentence rewritten around an unchanged
 * statute number) and is dropped; only tokens that genuinely arrived or left are
 * reported.
 */
function citationDelta(diffText) {
  const added = new Map(); // token -> Set(upstream file)
  const removed = new Map();

  let file = null;
  for (const line of diffText.split('\n')) {
    if (line.startsWith('diff --git ')) {
      // "diff --git a/<path> b/<path>" - take the b-side, which is the post-change path
      file = line.replace(/^diff --git a\/.* b\//, '') || null;
      continue;
    }
    if (line.startsWith('+++') || line.startsWith('---') || line.startsWith('@@')) continue;

    const target = line.startsWith('+') ? added : line.startsWith('-') ? removed : null;
    if (!target) continue;

    for (const token of citationsIn(line.slice(1))) {
      if (!target.has(token)) target.set(token, new Set());
      if (file) target.get(token).add(file);
    }
  }

  const net = (a, b) =>
    [...a.entries()]
      .filter(([token]) => !b.has(token))
      .map(([token, files]) => ({ token, files: [...files].sort() }))
      .sort((x, y) => x.token.localeCompare(y.token));

  return { added: net(added, removed), removed: net(removed, added) };
}

// ---------------------------------------------------------------------------
// Layer 1 - the mechanical statute-registry port
// ---------------------------------------------------------------------------

/**
 * Ports upstream's statute ENTRIES into this fork's registry.
 *
 * Deliberately not a file copy. The fork owns the description field (it points
 * at scripts/check-statutes.mjs, upstream's points at its Finnish filename) and
 * may have renamed the JSON keys per rename-map.json `dataKeys`, while the
 * entries themselves - Finnish statute name plus number - are the
 * language-independent legal payload. So: take upstream's entries, express them
 * with whatever key names this fork currently uses, keep everything else.
 */
function portStatuteEntries(forkJson, upstreamJson, keyMap) {
  const forkKey = (upstreamKey, sample) => {
    if (sample && Object.prototype.hasOwnProperty.call(sample, upstreamKey)) return upstreamKey;
    const renamed = keyMap[upstreamKey];
    if (renamed && sample && Object.prototype.hasOwnProperty.call(sample, renamed)) return renamed;
    return renamed ?? upstreamKey;
  };

  const upstreamArrayKey = Object.keys(upstreamJson).find((k) => Array.isArray(upstreamJson[k]));
  if (!upstreamArrayKey) return { ok: false, reason: 'upstream registry has no array of statutes' };

  const targetArrayKey = forkKey(upstreamArrayKey, forkJson);
  const sampleEntry = (forkJson[targetArrayKey] ?? [])[0] ?? null;

  const entries = upstreamJson[upstreamArrayKey].map((entry) => {
    const out = {};
    for (const [k, v] of Object.entries(entry)) out[forkKey(k, sampleEntry)] = v;
    return out;
  });

  const ported = {};
  for (const key of Object.keys(forkJson)) ported[key] = key === targetArrayKey ? entries : forkJson[key];
  if (!Object.prototype.hasOwnProperty.call(ported, targetArrayKey)) ported[targetArrayKey] = entries;

  return { ok: true, ported, arrayKey: targetArrayKey, before: forkJson[targetArrayKey] ?? [], after: entries };
}

/** Identity of a registry entry, whichever key naming is in force. */
const entryNumber = (e) => e.numero ?? e.number ?? JSON.stringify(e);
const entryName = (e) => e.nimi ?? e.name ?? '';

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function run(argv) {
  const asJSON = argv.includes('--json');
  const doFetch = argv.includes('--fetch');
  const doPort = argv.includes('--port-statutes');
  const sinceFlag = flagValue(argv, '--since');
  const toFlag = flagValue(argv, '--to');

  // Lets the workflow read the upstream URL without reimplementing the
  // AGENTS.md table parser in shell, where a backtick is a command
  // substitution waiting to happen.
  if (argv.includes('--upstream-url')) {
    const url = readProvenance().upstreamUrl;
    if (!url) fail(`${AGENTS_MD} has no "Upstream" row.`);
    process.stdout.write(`${url}\n`);
    return 0;
  }

  const notes = [];
  const say = (line = '') => {
    if (!asJSON) console.log(line);
  };

  // --- preconditions, all non-fatal -----------------------------------------

  if (!gitTry(['rev-parse', '--git-dir'])) {
    return unavailable(asJSON, 'not a git repository - nothing to compare against.');
  }

  const provenance = readProvenance();
  const base = sinceFlag ?? provenance.lastPorted;
  if (!base) {
    return unavailable(
      asJSON,
      `${AGENTS_MD} has no "Last ported upstream commit" row and no --since was given.`,
    );
  }

  if (!sinceFlag && !toFlag && !hasRemote(UPSTREAM_REMOTE)) {
    return unavailable(
      asJSON,
      `no '${UPSTREAM_REMOTE}' remote. Add it:\n` +
        `      git remote add ${UPSTREAM_REMOTE} ${provenance.upstreamUrl ?? '<upstream url>'}`,
    );
  }

  if (doFetch && hasRemote(UPSTREAM_REMOTE)) {
    const fetched = gitTry(['fetch', '--no-tags', '--quiet', UPSTREAM_REMOTE]);
    if (fetched === null) notes.push(`could not fetch '${UPSTREAM_REMOTE}' - comparing against what is already local.`);
  }

  const head = toFlag ?? DEFAULT_HEAD;
  const headSha = resolveRef(head);
  if (!headSha) {
    return unavailable(
      asJSON,
      `ref '${head}' is not available locally (shallow clone, or upstream never fetched).\n` +
        `      Fetch it: git fetch ${UPSTREAM_REMOTE}`,
    );
  }

  const baseSha = resolveRef(base);
  if (!baseSha) {
    return unavailable(
      asJSON,
      `base commit '${base}' is not in this clone (shallow clone?).\n` +
        `      Deepen it: git fetch --unshallow ${UPSTREAM_REMOTE}`,
    );
  }

  // --- collect the diff -----------------------------------------------------
  //
  // --no-renames on purpose: for porting, "this upstream path is gone and this
  // new one appeared" is more actionable than a similarity score, and it keeps
  // numstat one-path-per-line.

  const numstat = gitTry(['diff', '--no-renames', '--numstat', `${baseSha}..${headSha}`]);
  if (numstat === null) {
    return unavailable(asJSON, `could not diff ${shortSha(baseSha)}..${shortSha(headSha)}.`);
  }

  // A/M/D per path, so an upstream deletion is never mistaken for a new file.
  const changeKind = new Map();
  for (const line of (gitTry(['diff', '--no-renames', '--name-status', `${baseSha}..${headSha}`]) ?? '').split('\n')) {
    const [status, ...rest] = line.split('\t');
    if (!status || !rest.length) continue;
    changeKind.set(rest.join('\t'), status.trim()[0]);
  }

  const changes = numstat
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [added, deleted, ...rest] = line.split('\t');
      const path = rest.join('\t');
      return {
        path,
        change: changeKind.get(path) ?? 'M',
        added: added === '-' ? null : Number(added), // '-' means binary
        deleted: deleted === '-' ? null : Number(deleted),
      };
    })
    .filter((c) => c.path);

  const commits = (gitTry(['log', '--oneline', '--no-decorate', `${baseSha}..${headSha}`]) ?? '')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);

  // Tree at the fork point, used to tell "new upstream file" apart from
  // "deleted in this fork". Absent in a shallow clone - handled in classify().
  const map = loadRenameMap();
  const forkCommit = map.forkedFrom?.commit ?? null;
  const forkListing = forkCommit ? gitTry(['ls-tree', '-r', '--name-only', forkCommit]) : null;
  const forkPointFiles = forkListing
    ? new Set(forkListing.split('\n').map((s) => s.trim()).filter(Boolean))
    : null;
  if (!forkPointFiles && changes.length) {
    notes.push('fork-point tree unavailable - "new upstream path" detection is approximate.');
  }

  const mapPath = makeMapper(map.paths);

  const files = changes.map((change) => ({
    ...change,
    ...classify(change.path, change.change, mapPath, forkPointFiles),
    autoPortable: change.path === STATUTE_REGISTRY_UPSTREAM && change.change !== 'D',
  }));

  const diffText = gitTry(['diff', '--no-renames', '-U0', `${baseSha}..${headSha}`]) ?? '';
  const citations = citationDelta(diffText);

  const statuteChange = files.find((f) => f.autoPortable) ?? null;
  const unmapped = files.filter((f) => f.status === 'new-upstream' || f.status === 'missing-in-fork');
  const autoPortableOnly = files.length > 0 && files.every((f) => f.autoPortable);

  if (provenance.upstreamUrl && hasRemote(UPSTREAM_REMOTE)) {
    const remoteUrl = (gitTry(['remote', 'get-url', UPSTREAM_REMOTE]) ?? '').trim().replace(/\.git$/, '');
    if (remoteUrl && remoteUrl !== provenance.upstreamUrl.replace(/\.git$/, '')) {
      notes.push(`${AGENTS_MD} names upstream as ${provenance.upstreamUrl}, but the remote is ${remoteUrl}.`);
    }
  }

  const result = {
    base: baseSha,
    head: headSha,
    headRef: head,
    commits,
    files,
    citations,
    autoPortableOnly,
    unmappedCount: unmapped.length,
    drift: files.length > 0,
    notes,
  };

  // --- port mode ------------------------------------------------------------

  if (doPort) {
    return portStatutes({ result, statuteChange, map, headSha, asJSON });
  }

  if (asJSON) {
    console.log(JSON.stringify(result, null, 2));
    return result.drift ? 1 : 0;
  }

  // --- report ---------------------------------------------------------------

  say();
  say(`upstream drift — ${provenance.upstreamUrl ?? head}`);
  say(
    `  ${shortSha(baseSha)}..${shortSha(headSha)}  ·  ${commits.length} commit(s)  ·  ${files.length} file(s)`,
  );

  if (!files.length) {
    say();
    say('✓ No upstream drift. The fork is level with the last ported commit.');
    for (const note of notes) say(`  ⚠︎  ${note}`);
    say();
    return 0;
  }

  // Layer 3 first: a changed citation is the legally material signal.
  if (citations.added.length || citations.removed.length) {
    say();
    say('citations changed upstream — check these first');
    for (const { token, files: where } of citations.added) {
      say(`  +  ${token.padEnd(18)}${where.join(', ') || '(unknown file)'}`);
    }
    for (const { token, files: where } of citations.removed) {
      say(`  −  ${token.padEnd(18)}${where.join(', ') || '(unknown file)'}`);
    }
  }

  // Layer 1: the one mechanically portable file.
  if (statuteChange) {
    say();
    say('statute registry — mechanically portable');
    say(
      `  ${statuteChange.path}\n    → ${statuteChange.forkPath ?? '(unmapped)'}   ${counts(statuteChange)}`,
    );
    say('    port it: node scripts/check-upstream-drift.mjs --port-statutes');
  }

  // Layer 2: everything else, mapped for a human.
  const prose = files.filter((f) => !f.autoPortable);
  if (prose.length) {
    say();
    say('changed upstream files — port by hand');
    for (const file of prose) {
      say(`  ${file.path}`);
      if (file.status === 'new-upstream') {
        const hint = file.candidate ? ` (candidate: ${file.candidate})` : '';
        say(`    → NO MAPPING — new upstream path${hint}; extend ${RENAME_MAP}   ${counts(file)}`);
      } else if (file.status === 'deleted-upstream') {
        const here = file.forkPath ? `${file.forkPath} still exists here` : 'no counterpart here';
        say(`    → DELETED UPSTREAM — ${here}   ${counts(file)}`);
      } else if (file.status === 'missing-in-fork') {
        say(`    → ${file.forkPath} — MAPPED BUT ABSENT here (deleted in the fork, or stale rule)   ${counts(file)}`);
      } else if (file.status === 'same-path') {
        say(`    → ${file.forkPath} (same path — not renamed)   ${counts(file)}`);
      } else {
        say(`    → ${file.forkPath}   ${counts(file)}`);
      }
    }
  }

  if (commits.length) {
    say();
    say('upstream commits in range');
    for (const commit of commits) say(`  ${commit}`);
  }

  for (const note of notes) {
    say();
    say(`  ⚠︎  ${note}`);
  }

  say();
  say(`✗ ${files.length} upstream file(s) changed since ${shortSha(baseSha)}.`);
  if (unmapped.length) {
    say(`  ${unmapped.length} of them have no usable mapping — extend ${RENAME_MAP} before porting.`);
  }
  if (autoPortableOnly) {
    say('  Every change is in the statute registry: node scripts/check-upstream-drift.mjs --port-statutes');
  }
  say(`  After porting, set "Last ported upstream commit" in ${AGENTS_MD} to ${shortSha(headSha)} in the same commit.`);
  say();
  return 1;
}

const counts = (file) =>
  file.added === null ? '[binary]' : `[+${file.added} −${file.deleted}]`;

function unavailable(asJSON, message) {
  if (asJSON) {
    console.log(JSON.stringify({ available: false, drift: false, reason: message }, null, 2));
  } else {
    console.log(`\nupstream drift — not checked`);
    console.log(`  ⚠︎  ${message}`);
    console.log('\n✓ Skipped, not failed: an unavailable upstream is not a drift signal.\n');
  }
  return 0;
}

// ---------------------------------------------------------------------------
// --port-statutes
// ---------------------------------------------------------------------------

function portStatutes({ result, statuteChange, map, headSha, asJSON }) {
  const forkFile = join(ROOT, 'tracking/statutes.json');

  if (!statuteChange) {
    console.log('\nnothing to port — the statute registry did not change upstream in this range.\n');
    return 0;
  }
  if (!existsSync(forkFile)) {
    console.error(`\n✗ tracking/statutes.json is missing from this fork.\n`);
    return 2;
  }

  const upstreamText = gitTry(['show', `${headSha}:${STATUTE_REGISTRY_UPSTREAM}`]);
  if (upstreamText === null) {
    console.error(`\n✗ could not read ${STATUTE_REGISTRY_UPSTREAM} at ${shortSha(headSha)}.\n`);
    return 2;
  }

  const keyMap = map.dataKeys?.find((d) => d.file === 'tracking/statutes.json')?.keys ?? {};
  const forkJson = readJSON(forkFile);
  const port = portStatuteEntries(forkJson, JSON.parse(upstreamText), keyMap);
  if (!port.ok) {
    console.error(`\n✗ ${port.reason}\n`);
    return 2;
  }

  const before = new Map(port.before.map((e) => [entryNumber(e), entryName(e)]));
  const after = new Map(port.after.map((e) => [entryNumber(e), entryName(e)]));

  const addedEntries = [...after.keys()].filter((n) => !before.has(n));
  const removedEntries = [...before.keys()].filter((n) => !after.has(n));
  const renamedEntries = [...after.entries()]
    .filter(([n, name]) => before.has(n) && before.get(n) !== name)
    .map(([n, name]) => ({ number: n, from: before.get(n), to: name }));

  const next = `${JSON.stringify(port.ported, null, 2)}\n`;
  const changed = next !== readFileSync(forkFile, 'utf8').replace(/\r\n/g, '\n');
  if (changed) writeFileSync(forkFile, next);

  console.log('\nstatute registry port');
  console.log(`  ${STATUTE_REGISTRY_UPSTREAM} @ ${shortSha(headSha)} → tracking/statutes.json`);
  console.log(`  ${port.before.length} → ${port.after.length} statutes\n`);
  for (const n of addedEntries) console.log(`  +  ${n}  ${after.get(n)}`);
  for (const n of removedEntries) console.log(`  −  ${n}  ${before.get(n)}`);
  for (const r of renamedEntries) console.log(`  ~  ${r.number}  "${r.from}" → "${r.to}"`);
  if (!addedEntries.length && !removedEntries.length && !renamedEntries.length) {
    console.log('  (entries identical — only formatting or key naming differed)');
  }

  // Advancing the provenance pointer is only honest when this port covers the
  // WHOLE range. If upstream also changed prose, the fork is not level yet.
  let pointerMoved = false;
  if (result.autoPortableOnly) {
    pointerMoved = writeLastPorted(headSha.slice(0, 7));
    console.log(
      pointerMoved
        ? `\n  ${AGENTS_MD}: "Last ported upstream commit" → ${shortSha(headSha)}`
        : `\n  ${AGENTS_MD}: pointer already at ${shortSha(headSha)}`,
    );
  } else {
    console.log(
      `\n  ⚠︎  ${AGENTS_MD} pointer NOT advanced — this range also changes prose that needs a human port.`,
    );
  }

  console.log(
    changed || pointerMoved
      ? '\n✓ Working tree updated. Review the diff, then commit.\n'
      : '\n✓ Nothing to write — the registry was already up to date.\n',
  );

  if (asJSON) console.log(JSON.stringify({ ported: changed, pointerMoved }, null, 2));
  return 0;
}

// ---------------------------------------------------------------------------

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) process.exit(run(process.argv.slice(2)));

export { CITATION_PATTERNS, citationDelta, classify, makeMapper, portStatuteEntries };
