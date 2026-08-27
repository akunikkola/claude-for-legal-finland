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

// Is this description written in English?
//
// The obvious test — look for Finnish — does not work here, and I measured it
// failing rather than assuming. Finnish statute names stay Finnish inside
// English descriptions by design (references/glossary.md), so "ja" matches all
// 24 English descriptions and "sekä" matches 19. Any Finnish-word detector is
// therefore all false positives.
//
// Inverting it works. Finnish has no articles, and embedding a Finnish statute
// name in English prose cannot remove the surrounding English function words.
// Measured against 24 domain descriptions once translated — 14 of which embed a
// Finnish statute name — this gives zero false positives and flags every
// untranslated one.
//
// The hyphen exclusion is not cosmetic. Without it the only "English" token in
// the Finnish collection description was the `for` inside
// `claude-for-legal-kokoelmalle` — so the vendor name this gate also exists to
// remove was single-handedly disguising the description as English. A function
// word only counts when it stands alone, not when it is a fragment of a
// hyphenated compound or a product slug.
const ENGLISH_FUNCTION_WORD =
  /(?<![\p{L}-])(the|and|of|for|with|when|under|from|that|which)(?![\p{L}-])/iu;

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

// ---------------------------------------------------------------------------
// The collection manifest's OWN descriptions
//
// This file already read marketplace.json above — but only as an index, to
// locate the skill directories. It never looked at the manifest's own text.
// The result was that the collection description and all 24 domain
// descriptions stayed Finnish through nine green gates: validate.mjs
// cross-checks `name` and `displayName` between marketplace.json and each
// plugin.json, and stops there.
//
// That manifest is the storefront — it is what a user reads when browsing
// before installing anything. It is the most-read text in the repository and
// was the least checked.
// ---------------------------------------------------------------------------

const manifestDescriptions = [
  { where: 'marketplace.json', description: marketplace.description || '', label: 'collection' },
];

for (const entry of marketplace.plugins) {
  const domain = entry.source.replace(/^\.\//, '');
  manifestDescriptions.push({
    where: `marketplace.json → ${entry.name}`,
    description: entry.description || '',
    label: 'domain',
  });

  const pluginPath = join(ROOT, domain, 'plugin.json');
  if (!existsSync(pluginPath)) continue;
  manifestDescriptions.push({
    where: `${domain}/plugin.json`,
    description: readJSON(pluginPath).description || '',
    label: 'domain',
  });
}

// Severity for the language rule is conditional, for the same reason the
// practice-profile heading rule is: a gate that goes red for something the
// committer cannot fix trains people to route around it. While domains are
// still being translated on separate branches, a translator working on one
// domain cannot fix marketplace.json, so this warns. Once every domain
// plugin.json reads as English the rule becomes actionable by whoever touches
// the manifest next, and it hardens to an error on its own — no follow-up
// commit needed to promote it.
const domainPluginDescriptions = manifestDescriptions.filter(
  (d) => d.where.endsWith('/plugin.json'),
);
const allDomainsEnglish =
  domainPluginDescriptions.length > 0 &&
  domainPluginDescriptions.every((d) => ENGLISH_FUNCTION_WORD.test(d.description));

for (const { where, description, label } of manifestDescriptions) {
  if (!description) {
    err(where, 'description is empty');
    continue;
  }

  checked++;

  if (DIGIT_COMMA.test(description)) {
    const sample = description.match(/\S*\d\s*,\s*\d\S*/)?.[0] ?? '';
    err(where, `digit-comma-digit "${sample}" — write "1 000" or "2 and 3" instead`);
  }

  if (description.length > MAX_LENGTH) {
    err(where, `description too long (${description.length} > ${MAX_LENGTH})`);
  }

  if (!ENGLISH_FUNCTION_WORD.test(description)) {
    const msg =
      `${label} description is not in English — this is the manifest a user reads before installing`;
    if (allDomainsEnglish) err(where, msg);
    else warn(where, `${msg} (warning while domains are still being translated)`);
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
