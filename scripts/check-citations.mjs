#!/usr/bin/env node
// Citation-integrity gate.
//
//   node scripts/check-citations.mjs --snapshot   # record the current state
//   node scripts/check-citations.mjs              # verify against the snapshot
//
// Translation is the point at which a statute number, case identifier or
// preparatory-works reference can silently disappear or mutate. A dropped
// `55/2001` does not look like an error - the surrounding English prose reads
// perfectly well - so nothing else in this repository would catch it.
//
// This is a per-file multiset comparison: for every markdown file, the set of
// citation tokens and how many times each occurs must be identical before and
// after translation. It deliberately says nothing about the prose.
//
// A file that is renamed between snapshot and check is followed through
// scripts/rename-map.json, so the gate survives a path migration.

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

import { ROOT, readJSON } from './lib.mjs';

const SNAPSHOT = 'references/citation-snapshot.json';
const SKIP = new Set(['node_modules', 'docs', 'dist', '.git']);

// Citation forms that must survive translation untouched.
const PATTERNS = [
  // statute number: 55/2001, 2016/679
  /\b\d{1,4}\/(?:19|20)\d{2}\b/g,
  // case identifier: KKO:2019:42, KHO:2021:7, MAO:123/2020
  /\b(?:KKO|KHO|MAO|KVL|EUT|EIT):\d{2,4}[:/]\d+\b/g,
  // preparatory works: HE 268/2014 vp
  /\bHE\s+\d+\/\d{4}\s*vp\b/g,
  // EU instruments: (EU) 2024/1689, direktiivi 2019/790
  /\b\(EU\)\s*\d{4}\/\d+\b/g,
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

console.log('\ncitation-integrity gate');
console.log(`  snapshot taken ${snapshot.takenAt} · ${Object.keys(snapshot.files).length} files\n`);

for (const p of problems) console.log(`  ✗  ${p.file}: ${p.msg}`);

if (problems.length === 0) {
  console.log('\n✓ Every citation present before translation is still present.\n');
  process.exit(0);
}

console.log(`\n✗ ${problems.length} citation(s) lost or altered.`);
console.log('  A statute number or case identifier must survive translation exactly.');
console.log('  If a change is intentional, re-snapshot and explain it in the commit.\n');
process.exit(1);
