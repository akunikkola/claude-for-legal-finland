#!/usr/bin/env node
// Citation-integrity gate - checks both directions.
//
//   node scripts/check-citations.mjs --snapshot   # record the current state
//   node scripts/check-citations.mjs              # verify against the snapshot
//
// Translation is the point at which a statute number, case identifier or
// preparatory-works reference can silently disappear, mutate - or be invented.
// Neither failure looks like an error: the surrounding English prose reads
// perfectly well either way, and a fabricated `999/2099` is indistinguishable
// from a real statute number to anyone who is not holding Finlex open. Nothing
// else in this repository would catch either one.
//
// Both directions are measured against references/citation-snapshot.json, a
// per-file multiset of citation tokens taken before translation. The gate
// deliberately says nothing about the prose.
//
// LOST - always an error
//   A token the snapshot recorded for a file occurs fewer times there now.
//   Something was dropped or rewritten.
//
// ADDED - graded, because a gate that cries wolf gets ignored
//   A token occurs in a file the snapshot did not record it for. Translation
//   legitimately moves citations between files and legitimately repeats a
//   number already used elsewhere, so severity depends on whether the number
//   itself is new to the repository:
//
//     - the token exists somewhere else in the snapshot         WARNING
//       it moved or was reused; the number was already here
//     - the token is new to the snapshot but is listed in
//       tracking/statutes.json                                  WARNING
//       a statute someone verified against Finlex
//     - the token appears in neither                            ERROR
//       nothing in this repository has ever cited it, so the most likely
//       explanation is that a translator invented it
//
// A token the snapshot already records for a file is not reported when it now
// occurs MORE often there. Repeating a citation cannot introduce a new number,
// and English routinely spells out a reference where the Finnish inflected a
// short form - counting that as an addition would be pure noise.
//
// A file that is renamed between snapshot and check is followed through
// scripts/rename-map.json, so the gate survives a path migration.
//
// Known blind spot: PATTERNS below only recognise years 1900-2099, so pre-1900
// statutes - rikoslaki 39/1889, oikeudenkaari 4/1734 - are invisible to the
// gate in BOTH directions. Widening the year range would be correct, but every
// such token is by definition absent from the current snapshot, so it would
// land as a wave of false "invented" errors until the snapshot is retaken.
// Close it together with the next deliberate re-snapshot, not before.

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

import { ROOT, readJSON } from './lib.mjs';

const SNAPSHOT = 'references/citation-snapshot.json';
const STATUTES = 'tracking/statutes.json';
const SKIP = new Set(['node_modules', 'docs', 'dist', '.git']);

// How many warnings to print before collapsing the rest into a count.
const MAX_WARNINGS_SHOWN = 25;

// Citation forms that must survive translation untouched.
const PATTERNS = [
  // Finnish statute number: NUMBER/YEAR — 55/2001, 410/2015
  /\b\d{1,4}\/(?:19|20)\d{2}\b/g,
  // Historical Finnish statutes, still in force and heavily cited:
  // rikoslaki 39/1889 and oikeudenkäymiskaari 4/1734 (Swedish-era). The
  // 19xx/20xx pattern above misses both, which left 33 references to two of
  // the most fundamental statutes in Finnish law completely untracked — a
  // translator could have deleted every Criminal Code citation and this gate
  // would still have reported green. Bounded to 17xx-18xx so it does not
  // start matching fractions or version strings.
  /\b\d{1,4}\/1[78]\d{2}\b/g,
  // EU instruments: YEAR/NUMBER — the REVERSE of the Finnish order.
  // (EU) 2016/679, 2024/1689, direktiivi 2019/790.
  //
  // These need their own pattern for two reasons, and the previous one caught
  // nothing at all:
  //   1. `\b\(EU\)` can never match — \b before '(' requires a word character
  //      immediately before it, so the anchor was unsatisfiable.
  //   2. Requiring a literal "(EU)" prefix misses the many references written
  //      as a bare 2016/679 or in prose as "tietosuoja-asetus (2016/679)".
  // The effect was that all 27 GDPR and AI Act references in the collection —
  // the two most-cited EU instruments here — were invisible to this gate.
  //
  // Year bounded to 19xx/20xx and the sequence number to 1-4 digits, so this
  // does not swallow ordinary fractions.
  /\b(?:19|20)\d{2}\/\d{1,4}\b/g,
  // case identifier: KKO:2019:42, KHO:2021:7, MAO:123/2020
  /\b(?:KKO|KHO|MAO|KVL|EUT|EIT):\d{2,4}[:/]\d+\b/g,
  // preparatory works: HE 268/2014 vp
  /\bHE\s+\d+\/\d{4}\s*vp\b/g,
];

function* mdFiles(dir) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || SKIP.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* mdFiles(path);
    // SKILLS.md is generated from frontmatter; the same citations are in the sources.
    else if (name.endsWith('.md') && name !== 'SKILLS.md') yield path;
  }
}

/** Returns { token: count } for one file. */
function citationsIn(text) {
  const counts = {};
  for (const pattern of PATTERNS) {
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) {
      // collapse internal whitespace so "HE 268/2014 vp" compares stably
      const token = match[0].replace(/\s+/g, ' ');
      counts[token] = (counts[token] || 0) + 1;
    }
  }
  return counts;
}

function collect() {
  const files = {};
  for (const full of mdFiles(ROOT)) {
    const rel = relative(ROOT, full).replace(/\\/g, '/');
    const counts = citationsIn(readFileSync(full, 'utf8'));
    if (Object.keys(counts).length > 0) files[rel] = counts;
  }
  return files;
}

/**
 * Statute numbers someone has verified against Finlex, from tracking/statutes.json.
 * A citation new to the snapshot but present here is far more likely to be a real
 * statute the translation pulled in than an invention, so it is only a warning.
 */
function verifiedStatutes() {
  const path = join(ROOT, STATUTES);
  if (!existsSync(path)) return new Set();
  const registry = readJSON(path);
  // The registry keeps its Finnish keys (see AGENTS.md); accept English ones too
  // so a future rename of the registry cannot silently disarm this cross-check.
  const entries = registry.saadokset ?? registry.statutes ?? [];
  return new Set(entries.map((entry) => entry.numero ?? entry.number).filter(Boolean));
}

// ---------------------------------------------------------------------------
// Snapshot mode
// ---------------------------------------------------------------------------

if (process.argv.includes('--snapshot')) {
  const files = collect();
  const totalTokens = Object.values(files).reduce(
    (n, counts) => n + Object.values(counts).reduce((a, b) => a + b, 0),
    0,
  );

  writeFileSync(
    join(ROOT, SNAPSHOT),
    `${JSON.stringify(
      {
        description:
          'Per-file multiset of citation tokens, taken before translation. ' +
          'scripts/check-citations.mjs diffs the live tree against this so a statute ' +
          'number, case identifier or preparatory-works reference that is dropped or ' +
          'altered during translation fails CI instead of shipping. Regenerate only ' +
          'when a citation is INTENTIONALLY changed, and say why in the commit.',
        takenAt: new Date().toISOString().slice(0, 10),
        files,
      },
      null,
      2,
    )}\n`,
  );

  console.log(
    `\n✓ Citation snapshot written: ${Object.keys(files).length} files, ${totalTokens} citations.\n`,
  );
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Check mode
// ---------------------------------------------------------------------------

const snapshotPath = join(ROOT, SNAPSHOT);
if (!existsSync(snapshotPath)) {
  console.error(`\n✗ ${SNAPSHOT} is missing. Run: node scripts/check-citations.mjs --snapshot\n`);
  process.exit(1);
}

const snapshot = readJSON(snapshotPath);
const live = collect();

// Follow renames so a path migration does not read as a lost citation.
const renamed = new Map();
const mapPath = join(ROOT, 'scripts/rename-map.json');
if (existsSync(mapPath)) {
  const rules = [...readJSON(mapPath).paths].sort((a, b) => b.from.length - a.from.length);
  for (const [oldPath] of Object.entries(snapshot.files)) {
    for (const rule of rules) {
      if (oldPath === rule.from) { renamed.set(oldPath, rule.to); break; }
      if (oldPath.startsWith(`${rule.from}/`)) {
        renamed.set(oldPath, `${rule.to}${oldPath.slice(rule.from.length)}`);
        break;
      }
    }
  }
}

const problems = [];
const warnings = [];

// Every citation token the repository was known to use, and where it came from.
// A token that is absent from this set has never been cited here, which is what
// separates "this moved" from "someone made this up".
const knownTokens = new Map();
for (const [oldPath, counts] of Object.entries(snapshot.files)) {
  const nowPath = renamed.get(oldPath) ?? oldPath;
  for (const token of Object.keys(counts)) {
    if (!knownTokens.has(token)) knownTokens.set(token, []);
    knownTokens.get(token).push(nowPath);
  }
}

// Snapshot expectations keyed by the path the file lives at now, so live files
// with no snapshot entry at all can be told apart from renamed ones.
const expectedByLivePath = new Map();
for (const [oldPath, counts] of Object.entries(snapshot.files)) {
  const nowPath = renamed.get(oldPath) ?? oldPath;
  const merged = expectedByLivePath.get(nowPath) ?? {};
  for (const [token, count] of Object.entries(counts)) {
    merged[token] = (merged[token] || 0) + count;
  }
  expectedByLivePath.set(nowPath, merged);
}

const verified = verifiedStatutes();

// --- direction 1: citations that were lost ---------------------------------

for (const [oldPath, expected] of Object.entries(snapshot.files)) {
  const nowPath = renamed.get(oldPath) ?? oldPath;
  const actual = live[nowPath];

  if (!actual) {
    problems.push({
      file: nowPath,
      msg: `file has no citations any more (snapshot had ${Object.keys(expected).length})`,
    });
    continue;
  }

  for (const [token, count] of Object.entries(expected)) {
    const now = actual[token] || 0;
    if (now < count) {
      problems.push({
        file: nowPath,
        msg: `citation "${token}" appeared ${count}× before, ${now}× now`,
      });
    }
  }
}

// --- direction 2: citations that were added --------------------------------
//
// A number nobody wrote before translation is the dangerous case: a fabricated
// `999/2099` reads exactly like a real statute. Grade it by whether the number
// itself is new to the repository, so that moved citations stay warnings.

for (const [path, actual] of Object.entries(live)) {
  const expected = expectedByLivePath.get(path);

  for (const token of Object.keys(actual)) {
    // Already cited in this file before translation. A higher count is not an
    // addition - it cannot introduce a number that was not already here.
    if (expected?.[token]) continue;

    const origins = knownTokens.get(token);

    if (origins) {
      const [first] = origins;
      const elsewhere = origins.length > 1 ? ` and ${origins.length - 1} other file(s)` : '';
      warnings.push({
        file: path,
        msg: `citation "${token}" is new to this file (snapshot had it in ${first}${elsewhere})`,
      });
      continue;
    }

    if (verified.has(token)) {
      warnings.push({
        file: path,
        msg: `citation "${token}" is new to the snapshot but is a verified statute in ${STATUTES}`,
      });
      continue;
    }

    problems.push({
      file: path,
      msg: `citation "${token}" appears nowhere in the snapshot and is not in ${STATUTES} — invented?`,
    });
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

console.log('\ncitation-integrity gate');
console.log(`  snapshot taken ${snapshot.takenAt} · ${Object.keys(snapshot.files).length} files\n`);

for (const p of problems) console.log(`  ✗  ${p.file}: ${p.msg}`);

if (problems.length > 0 && warnings.length > 0) console.log('');

for (const w of warnings.slice(0, MAX_WARNINGS_SHOWN)) console.log(`  !  ${w.file}: ${w.msg}`);
if (warnings.length > MAX_WARNINGS_SHOWN) {
  console.log(`  !  … and ${warnings.length - MAX_WARNINGS_SHOWN} more moved citation(s).`);
}

if (problems.length === 0) {
  console.log(
    `\n✓ Every citation present before translation is still present, and no citation was invented.`,
  );
  if (warnings.length > 0) {
    console.log(
      `  ${warnings.length} citation(s) moved between files or were reused — review, but not a failure.`,
    );
  }
  console.log('');
  process.exit(0);
}

console.log(`\n✗ ${problems.length} citation problem(s).`);
console.log('  A statute number or case identifier must survive translation exactly,');
console.log('  and a number this repository has never cited must not appear from nowhere.');
console.log('  Verify against Finlex. If a change is intentional, re-snapshot and say why');
console.log('  in the commit; if a statute is genuinely new, add it to tracking/statutes.json.\n');
process.exit(1);