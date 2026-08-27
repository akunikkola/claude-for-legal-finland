#!/usr/bin/env node
// Extracts every statute-number reference (NNN/YYYY) from the repository's
// markdown with its surrounding context, grouped by number for a citation
// audit. Recipe: agent-recipes/citation-audit/README.md
//
// Run:
//   node scripts/citation-inventory.mjs            # whole inventory to stdout
//   node scripts/citation-inventory.mjs 7 /tmp/audit  # split into 7 batch files

import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

import { ROOT } from './lib.mjs';

const SKIP = new Set(['node_modules', 'docs', 'dist']);

// The year pattern allows 17xx-18xx as well as 19xx/20xx. rikoslaki 39/1889 and
// oikeudenkäymiskaari 4/1734 are both in force and are the central statutes of
// criminal law and civil procedure. A 19xx/20xx-only pattern silently omitted
// them from an audit whose whole purpose is completeness. Keep this in step
// with the same pattern in check-citations.mjs and check-descriptions.mjs.
const NUMBER = /\b\d{1,4}\/(?:1[78]|19|20)\d{2}\b/g;

function* mdFiles(dir) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || SKIP.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* mdFiles(path);
    // SKILLS.md is generated from frontmatter — the same references are already
    // in the sources.
    else if (name.endsWith('.md') && name !== 'SKILLS.md') yield path;
  }
}

const citations = {};
for (const file of mdFiles(ROOT)) {
  const rel = relative(ROOT, file);
  readFileSync(file, 'utf8').split('\n').forEach((text, index) => {
    for (const number of new Set(text.match(NUMBER) || [])) {
      (citations[number] ||= []).push({
        file: rel,
        line: index + 1,
        text: text.trim().slice(0, 300),
      });
    }
  });
}

const numbers = Object.keys(citations).sort();
const batchCount = Number(process.argv[2] || 0);

if (batchCount > 1) {
  const target = process.argv[3] || '.';
  mkdirSync(target, { recursive: true });
  const batches = Array.from({ length: batchCount }, () => ({}));
  numbers.forEach((number, i) => { batches[i % batchCount][number] = citations[number]; });
  batches.forEach((batch, i) => {
    writeFileSync(join(target, `citation-batch-${i + 1}.json`), `${JSON.stringify(batch, null, 1)}\n`);
  });
  console.log(`${numbers.length} statute numbers split into ${batchCount} batches: ${target}/citation-batch-*.json`);
} else {
  console.log(JSON.stringify({ statutes: numbers.length, citations }, null, 1));
}
