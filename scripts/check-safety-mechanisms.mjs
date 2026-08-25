#!/usr/bin/env node
// Safety-mechanism integrity gate.
//
//   node scripts/check-safety-mechanisms.mjs --snapshot   # record current state
//   node scripts/check-safety-mechanisms.mjs              # verify against snapshot
//
// The repository's safety properties are carried by a small number of textual
// mechanisms: the disclaimer on every skill, the inline certainty flags, the
// risk colour coding, and the human-review gates. AGENTS.md states the rule
// plainly: "Every disclaimer stays. Translate, never delete."
//
// Nothing enforced that. Verified by experiment: deleting the `Vastuuvapaus:`
// block from employment-law/skills/employment-contract/SKILL.md passes the
// validator, the citation gate, the output-language gate and the description
// lint, all green. A translator working through 117k words can drop one and
// no gate notices.
//
// This is a per-file COUNT comparison, deliberately language-aware: each
// mechanism is matched by its Finnish OR English form, so the count survives
// translation while a deletion does not. Translating `Vastuuvapaus:` to
// `Disclaimer:` keeps the count at 1; removing the line drops it to 0.

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

import { ROOT, readJSON } from './lib.mjs';

const SNAPSHOT = 'references/safety-snapshot.json';
const SKIP = new Set(['node_modules', 'docs', 'dist', '.git']);

// Each mechanism matches its Finnish and English forms with one regex, so the
// count is invariant under translation. Adding a language variant here is how
// you teach the gate a new phrasing — do not add a second mechanism for it.
const MECHANISMS = [
  {
    id: 'disclaimer',
    // Vastuuvapaus: / Disclaimer:
    re: /\b(vastuuvapaus|disclaimer)\s*[::]/gi,
    what: 'disclaimer line',
  },
  {
    id: 'certainty-flag',
    // [tarkista] [varmista — ...] [muistinvarainen — ...] [mallin laskelma — ...]
    // [check] [confirm — ...] [from memory — ...] [model calculation — ...]
    re: /\[(?:tarkista|varmista|muistinvarainen|mallin laskelma|check|confirm|from memory|model calculation)\b[^\]]*\]/gi,
    what: 'inline certainty flag',
  },
  {
    id: 'risk-colour',
    re: /\b(VIHREÄ|KELTAINEN|PUNAINEN|GREEN|YELLOW|RED)\b/g,
    what: 'risk colour marker',
  },
  {
    id: 'certainty-tier',
    // Varmistettu / Tarkistettava / Älä käytä -> Verified / Needs checking / Do not use
    re: /\b(varmistettu|tarkistettava|älä käytä|ala kayta|verified|needs checking|do not use)\b/gi,
    what: 'three-tier certainty marker',
  },
  {
    id: 'human-review-gate',
    // "ihminen tarkistaa", "human reviews", "requires a lawyer's assessment"
    re: /\b(ihminen (tarkistaa|vastaa|hyväksyy)|human (review|approv)|juristin (arvioitava|tarkistettava)|lawyer'?s assessment)\b/gi,
    what: 'human-review gate',
  },
];

function* mdFiles(dir) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || SKIP.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* mdFiles(path);
    // SKILLS.md is generated from frontmatter — the sources already carry these.
    else if (name.endsWith('.md') && name !== 'SKILLS.md') yield path;
  }
}

function countIn(text) {
  const counts = {};
  for (const m of MECHANISMS) {
    m.re.lastIndex = 0;
    const n = (text.match(m.re) || []).length;
    if (n > 0) counts[m.id] = n;
  }
  return counts;
}

function collect() {
  const files = {};
  for (const full of mdFiles(ROOT)) {
    const rel = relative(ROOT, full).replace(/\\/g, '/');
    const counts = countIn(readFileSync(full, 'utf8'));
    if (Object.keys(counts).length > 0) files[rel] = counts;
  }
  return files;
}

// ---------------------------------------------------------------------------
// Snapshot mode
// ---------------------------------------------------------------------------

if (process.argv.includes('--snapshot')) {
  const files = collect();
  const total = Object.values(files).reduce(
    (n, counts) => n + Object.values(counts).reduce((a, b) => a + b, 0),
    0,
  );

  writeFileSync(
    join(ROOT, SNAPSHOT),
    `${JSON.stringify(
      {
        description:
          'Per-file counts of the safety mechanisms that carry this repository\'s ' +
          'safety properties: disclaimers, inline certainty flags, risk colour coding, ' +
          'three-tier certainty markers and human-review gates. Matched by Finnish OR ' +
          'English form, so the count survives translation while a deletion does not. ' +
          'AGENTS.md: "Every disclaimer stays. Translate, never delete." Regenerate ' +
          'only when a mechanism is INTENTIONALLY removed, and say why in the commit.',
        takenAt: new Date().toISOString().slice(0, 10),
        files,
      },
      null,
      2,
    )}\n`,
  );

  console.log(`\n✓ Safety snapshot written: ${Object.keys(files).length} files, ${total} mechanisms.\n`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Check mode
// ---------------------------------------------------------------------------

const snapshotPath = join(ROOT, SNAPSHOT);
if (!existsSync(snapshotPath)) {
  console.error(`\n✗ ${SNAPSHOT} is missing. Run: node scripts/check-safety-mechanisms.mjs --snapshot\n`);
  process.exit(1);
}

const snapshot = readJSON(snapshotPath);
const live = collect();

// Follow renames so a path migration does not read as a lost mechanism.
const renamed = new Map();
const mapPath = join(ROOT, 'scripts/rename-map.json');
if (existsSync(mapPath)) {
  const rules = [...readJSON(mapPath).paths].sort((a, b) => b.from.length - a.from.length);
  for (const oldPath of Object.keys(snapshot.files)) {
    for (const rule of rules) {
      if (oldPath === rule.from) { renamed.set(oldPath, rule.to); break; }
      if (oldPath.startsWith(`${rule.from}/`)) {
        renamed.set(oldPath, `${rule.to}${oldPath.slice(rule.from.length)}`);
        break;
      }
    }
  }
}

const byId = Object.fromEntries(MECHANISMS.map((m) => [m.id, m.what]));
const problems = [];

for (const [oldPath, expected] of Object.entries(snapshot.files)) {
  const nowPath = renamed.get(oldPath) ?? oldPath;
  const actual = live[nowPath] || {};

  for (const [id, count] of Object.entries(expected)) {
    const now = actual[id] || 0;
    if (now < count) {
      problems.push({
        file: nowPath,
        msg: `${byId[id] || id}: ${count} before, ${now} now`,
      });
    }
  }
}

console.log('\nsafety-mechanism gate');
console.log(`  snapshot taken ${snapshot.takenAt} · ${Object.keys(snapshot.files).length} files\n`);

for (const p of problems) console.log(`  ✗  ${p.file}: ${p.msg}`);

if (problems.length === 0) {
  console.log('\n✓ Every disclaimer, certainty flag and review gate is still in place.\n');
  process.exit(0);
}

console.log(`\n✗ ${problems.length} safety mechanism(s) lost.`);
console.log('  These are matched in Finnish OR English, so translating one keeps the count.');
console.log('  A drop means the mechanism was deleted, not translated.');
console.log('  See references/glossary.md section 4.\n');
process.exit(1);
