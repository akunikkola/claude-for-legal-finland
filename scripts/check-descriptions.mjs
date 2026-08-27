#!/usr/bin/env node
// Description lint.
//
// Run: node scripts/check-descriptions.mjs
//
// A skill's `description` is the only signal a harness has for selecting it.
// Rewriting all 78 descriptions into English is therefore the change most
// likely to break the collection silently: the skill still exists, still
// validates, and simply stops being chosen.
//
// The trigger evals in evals/ measure this properly, but they cost real model
// calls and are not in CI. This check is the free, offline half - it cannot
// prove a description triggers, but it catches the mechanical damage that
// makes triggering impossible.

import { existsSync, readFileSync } from 'node:fs';
import { basename, join, relative } from 'node:path';

import { ROOT, listDirs, parseFrontmatter, readJSON } from './lib.mjs';

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push({ file, msg });
const warn = (file, msg) => warnings.push({ file, msg });

// The Cowork marketplace validator crashes on digit-comma-digit, and English
// reintroduces it constantly via thousands separators and enumerations.
const DIGIT_COMMA = /\d\s*,\s*\d/;

// "Use when ..." style clause. The Agent Skills guidance is that a description
// must say what the skill does AND when to use it; without the second half a
// harness has nothing to match a user's request against.
const WHEN_CLAUSE = /\b(use (this )?(skill )?(when|for)|trigger(s|ed)? (when|on)|käytä tätä|triggeröi)\b/i;

// Citation forms that must be preserved as secondary keywords so the skill
// still triggers on a Finnish statute reference after translation.
//
// The year pattern deliberately allows 17xx-18xx as well as 19xx/20xx.
// rikoslaki 39/1889 and oikeudenkäymiskaari 4/1734 are both in force and are
// the central statutes of criminal law and civil procedure respectively. A
// 19xx/20xx-only pattern warned that descriptions citing them carried "no
// Finnish statute number", which is the opposite of the truth. Keep this in
// step with the same pattern in check-citations.mjs.
const FINNISH_ANCHOR = /\b\d{1,4}\/(?:1[78]|19|20)\d{2}\b|\b(KKO|KHO|MAO|KVL|TES|HE|Finlex|oik\.ai)\b/;

const MIN_LENGTH = 80;
const MAX_LENGTH = 1024;

const marketplace = readJSON(join(ROOT, 'marketplace.json'));
let checked = 0;

for (const entry of marketplace.plugins) {
  const domain = entry.source.replace(/^\.\//, '');

  for (const skillDir of listDirs(join(ROOT, domain, 'skills'))) {
    const skillMd = join(skillDir, 'SKILL.md');
    if (!existsSync(skillMd)) continue;

    checked++;
    const where = relative(ROOT, skillMd).replace(/\\/g, '/');
    const name = basename(skillDir);
    const { values } = parseFrontmatter(readFileSync(skillMd, 'utf8'));
    const description = values.description || '';

    if (!description) {
      err(where, 'description is empty');
      continue;
    }

    if (DIGIT_COMMA.test(description)) {
      const sample = description.match(/\S*\d\s*,\s*\d\S*/)?.[0] ?? '';
      err(where, `digit-comma-digit "${sample}" — write "1 000" or "2 and 3" instead`);
    }

    if (description.length > MAX_LENGTH) {
      err(where, `description too long (${description.length} > ${MAX_LENGTH})`);
    }

    if (description.length < MIN_LENGTH) {
      warn(where, `description is very short (${description.length} chars) — weak trigger signal`);
    }

    if (!WHEN_CLAUSE.test(description)) {
      warn(where, 'description does not say WHEN to use the skill');
    }

    // The skill's own subject words should appear, or a harness matching on the
    // name will not find it.
    const nameWords = name.split('-').filter((w) => w.length > 3);
    const lower = description.toLowerCase();
    const present = nameWords.filter((w) => lower.includes(w));
    if (nameWords.length > 0 && present.length === 0) {
      warn(where, `description contains none of its own name words (${nameWords.join(', ')})`);
    }

    if (!FINNISH_ANCHOR.test(description)) {
      warn(
        where,
        'description has no Finnish statute number or source abbreviation — it will not trigger on a Finnish citation',
      );
    }
  }
}

console.log('\ndescription lint');
console.log(`  descriptions checked: ${checked}\n`);

for (const w of warnings) console.log(`  ⚠︎  ${w.file}: ${w.msg}`);
for (const e of errors) console.log(`  ✗  ${e.file}: ${e.msg}`);

if (errors.length === 0) {
  console.log(`\n✓ Description lint green${warnings.length ? ` (${warnings.length} warning(s))` : ''}.\n`);
  process.exit(0);
}

console.log(`\n✗ ${errors.length} error(s), ${warnings.length} warning(s).`);
console.log('  See references/glossary.md section 6 for the digit-comma trap.\n');
process.exit(1);
