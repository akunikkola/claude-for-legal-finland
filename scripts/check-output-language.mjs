#!/usr/bin/env node
// Output-language gate.
//
// Run: node scripts/check-output-language.mjs
//
// Before translation, no skill in this repository stated an output language.
// That was safe by accident: the instructions were Finnish, so the model
// produced Finnish. Translating to English removes that signal with no error
// surface — an agent reading an English employment-contract/SKILL.md will
// produce an English employment contract and nothing will look wrong.
//
// So the declaration has to be explicit and machine-checked. This script reads
// the declared category for every skill from references/output-language-matrix.md
// and asserts that each SKILL.md carries the matching statement:
//
//   filing          -> must say the filed version has to be Finnish or Swedish
//   document        -> must state English default and Finnish on request
//   analysis        -> no requirement (no filed or signed artifact)
//   language-exempt -> no requirement (subject is the language itself)
//
// Reading the expectation from a committed file rather than inferring it means
// the check can catch MIScategorisation, not merely absence.

import { existsSync, readFileSync } from 'node:fs';
import { basename, join, relative } from 'node:path';

import { ROOT, listDirs, readJSON } from './lib.mjs';

const MATRIX = 'references/output-language-matrix.md';

const errors = [];
const err = (file, msg) => errors.push({ file, msg });

// ---------------------------------------------------------------------------
// Read declared categories from the matrix
// ---------------------------------------------------------------------------

const VALID = new Set(['filing', 'document', 'analysis', 'language-exempt']);

function parseMatrix() {
  const path = join(ROOT, MATRIX);
  if (!existsSync(path)) {
    console.error(`\n✗ ${MATRIX} is missing — it declares what every skill must say.\n`);
    process.exit(1);
  }

  const declared = new Map();
  let domain = null;

  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const heading = line.match(/^##\s+([a-z0-9-]+)\s*$/);
    if (heading) {
      domain = heading[1];
      continue;
    }
    if (/^##\s+Templates\s*$/.test(line)) {
      domain = null;
      continue;
    }

    // | `skill-name` | category | basis |
    const row = line.match(/^\|\s*`([^`]+)`\s*\|\s*([a-z-]+)\s*\|/);
    if (!row) continue;

    const [, name, category] = row;
    if (!VALID.has(category)) continue;

    // Template rows carry a full path; skill rows carry a bare name.
    if (name.includes('/')) declared.set(name, category);
    else if (domain) declared.set(`${domain}/skills/${name}`, category);
  }

  return declared;
}

// ---------------------------------------------------------------------------
// Required statements
//
// Matched on intent, not on exact wording, so a translator can phrase the
// paragraph naturally. Every pattern below must appear.
// ---------------------------------------------------------------------------

const FILING_PATTERNS = [
  {
    re: /\b(finnish or swedish|swedish or finnish)\b/i,
    what: 'must name Finnish or Swedish as the required filing language',
  },
  {
    re: /\bkielilaki\b|\boikeudenkäymiskaari\b|\boikeudenkaymiskaari\b/i,
    what: 'must cite kielilaki 423/2003 or oikeudenkäymiskaari as the basis',
  },
  {
    re: /\b(fil(e|ed|ing)|submit(ted)?|lodg(e|ed))\b/i,
    what: 'must refer to the filed or submitted version',
  },
];

const DOCUMENT_PATTERNS = [
  {
    re: /\benglish\b/i,
    what: 'must state that output is English by default',
  },
  {
    re: /\bfinnish\b/i,
    what: 'must state that Finnish is available on request',
  },
];

// A heading or bolded lead-in, so the statement is visible rather than buried.
const DECLARATION_HEADER = /output language/i;

// ---------------------------------------------------------------------------
// Check every skill
// ---------------------------------------------------------------------------

const declared = parseMatrix();
const marketplace = readJSON(join(ROOT, 'marketplace.json'));

let checked = 0;
let required = 0;
const undeclared = [];

for (const entry of marketplace.plugins) {
  const domain = entry.source.replace(/^\.\//, '');

  for (const skillDir of listDirs(join(ROOT, domain, 'skills'))) {
    const skillPath = `${domain}/skills/${basename(skillDir)}`;
    const skillMd = join(skillDir, 'SKILL.md');
    if (!existsSync(skillMd)) continue;

    checked++;

    const category = declared.get(skillPath);
    if (!category) {
      undeclared.push(skillPath);
      continue;
    }

    if (category === 'analysis' || category === 'language-exempt') continue;

    required++;
    const text = readFileSync(skillMd, 'utf8');
    const where = relative(ROOT, skillMd).replace(/\\/g, '/');

    if (!DECLARATION_HEADER.test(text)) {
      err(where, `${category}: no "Output language" statement found`);
      continue;
    }

    const patterns = category === 'filing' ? FILING_PATTERNS : DOCUMENT_PATTERNS;
    for (const { re, what } of patterns) {
      if (!re.test(text)) err(where, `${category}: ${what}`);
    }
  }
}

// Templates listed in the matrix are checked the same way.
for (const [path, category] of declared) {
  if (!path.endsWith('.md')) continue;
  const full = join(ROOT, path);
  if (!existsSync(full)) {
    err(path, 'listed in the matrix but the file does not exist');
    continue;
  }
  if (category === 'analysis' || category === 'language-exempt') continue;

  required++;
  const text = readFileSync(full, 'utf8');
  if (!DECLARATION_HEADER.test(text)) {
    err(path, `${category}: no "Output language" statement found`);
    continue;
  }
  const patterns = category === 'filing' ? FILING_PATTERNS : DOCUMENT_PATTERNS;
  for (const { re, what } of patterns) {
    if (!re.test(text)) err(path, `${category}: ${what}`);
  }

  // Placement, for templates only.
  //
  // Presence is not enough here. A template is a skeleton that gets filled in
  // and then sent — to a seller, an authority, or a court. An "Output language:
  // drafts are produced in English by default" heading sitting inside the
  // document body travels with it and is read as part of the filing.
  //
  // This was fixed by hand once, in four templates, and nothing stopped it
  // coming back: a translation branch based on the pre-fix text reintroduced it
  // in two of them while this gate still reported green, because the block was
  // present — just in the wrong place. Presence was the only thing measured.
  //
  // Every template separates its authoring preamble from the document body with
  // a horizontal rule. The declaration is authoring guidance, so it belongs
  // above that line.
  if (/(^|\/)templates\//.test(path)) {
    const lines = text.split('\n');
    const blockAt = lines.findIndex((l) => /output language/i.test(l));
    const bodyAt = lines.findIndex((l) => /^---\s*$/.test(l));

    if (bodyAt !== -1 && blockAt > bodyAt) {
      err(
        path,
        `${category}: the output-language declaration is inside the document body ` +
          `(line ${blockAt + 1}, body starts at line ${bodyAt + 1}) — it would be sent with the filled-in document`,
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

console.log('\noutput-language gate');
console.log(`  skills checked: ${checked}, declarations required: ${required}\n`);

for (const path of undeclared) {
  console.log(`  ✗  ${path}: not listed in ${MATRIX}`);
}
for (const e of errors) {
  console.log(`  ✗  ${e.file}: ${e.msg}`);
}

const total = errors.length + undeclared.length;

if (total === 0) {
  console.log('\n✓ Every document-producing and filing skill declares its output language.\n');
  process.exit(0);
}

console.log(`\n✗ ${total} problem(s).`);
console.log(`  See references/glossary.md section 1 for the required wording.\n`);
process.exit(1);
