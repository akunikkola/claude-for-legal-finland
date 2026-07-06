#!/usr/bin/env node
// Poimii repon markdown-tiedostoista kaikki säädösnumeroviittaukset (NNN/VVVV)
// konteksteineen ja ryhmittelee ne numeroittain viittausauditointia varten.
// Resepti: agentti-reseptit/viittausauditointi/README.md
//
// Aja:
//   node scripts/viittausinventaario.mjs            # koko inventaario stdoutiin
//   node scripts/viittausinventaario.mjs 7 /tmp/audit  # jaa 7 erätiedostoon

import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

import { ROOT } from './lib.mjs';

const SKIP = new Set(['node_modules', 'docs', 'dist']);
const NUMERO = /\b\d{1,4}\/(?:19|20)\d{2}\b/g;

function* mdFiles(dir) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || SKIP.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* mdFiles(path);
    // SKILLS.md on generoitu frontmattereista — samat viittaukset ovat jo lähteissä.
    else if (name.endsWith('.md') && name !== 'SKILLS.md') yield path;
  }
}

const viittaukset = {};
for (const file of mdFiles(ROOT)) {
  const rel = relative(ROOT, file);
  readFileSync(file, 'utf8').split('\n').forEach((text, index) => {
    for (const numero of new Set(text.match(NUMERO) || [])) {
      (viittaukset[numero] ||= []).push({
        file: rel,
        line: index + 1,
        text: text.trim().slice(0, 300),
      });
    }
  });
}

const numerot = Object.keys(viittaukset).sort();
const eria = Number(process.argv[2] || 0);

if (eria > 1) {
  const kohde = process.argv[3] || '.';
  mkdirSync(kohde, { recursive: true });
  const erat = Array.from({ length: eria }, () => ({}));
  numerot.forEach((numero, i) => { erat[i % eria][numero] = viittaukset[numero]; });
  erat.forEach((era, i) => {
    writeFileSync(join(kohde, `viittaus-era-${i + 1}.json`), `${JSON.stringify(era, null, 1)}\n`);
  });
  console.log(`${numerot.length} säädösnumeroa jaettu ${eria} erään: ${kohde}/viittaus-era-*.json`);
} else {
  console.log(JSON.stringify({ saadoksia: numerot.length, viittaukset }, null, 1));
}
