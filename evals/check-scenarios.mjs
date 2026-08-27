#!/usr/bin/env node
// Offline validator for evals/scenarios.json.
//
// A scenario that names a skill which no longer exists never triggers, and it
// never fails either — the runner just reports a miss that nobody can act on.
// This check catches that without spending a single token, so it is the one
// part of evals/ that belongs in CI.
//
// Run:  node evals/check-scenarios.mjs
//       node evals/check-scenarios.mjs --list [en|fi|en,fi]   # TSV for the runner
//
// --list validates first and then prints one tab-separated row per scenario and
// language: id, domain, expected_skill, lang, known_miss, prompt. The runner
// consumes this instead of parsing JSON itself, so a broken scenarios.json can
// never turn into a false trigger miss.
//
// EVAL_SCENARIOS overrides the scenario file (used by the tests); domains and
// skills are always resolved against this repository.

import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

import { ROOT, readJSON } from '../scripts/lib.mjs';

const SCENARIOS = process.env.EVAL_SCENARIOS || join(ROOT, 'evals', 'scenarios.json');
const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const KNOWN_KEYS = new Set([
  'id',
  'domain',
  'expected_skill',
  'prompt',
  'prompt_fi',
  'known_miss',
  'note',
]);

const args = process.argv.slice(2);
const listIndex = args.indexOf('--list');
const listMode = listIndex !== -1;
const requestedLangs = (listMode ? args[listIndex + 1] : '') || 'en,fi';

const errors = [];
const err = (msg) => errors.push(msg);

function isDir(path) {
  return existsSync(path) && statSync(path).isDirectory();
}

// ---------------------------------------------------------------------------
// Load
// ---------------------------------------------------------------------------

if (!existsSync(SCENARIOS)) {
  console.error('evals/scenarios.json is missing.');
  process.exit(1);
}

let data;
try {
  data = readJSON(SCENARIOS);
} catch (e) {
  console.error(`evals/scenarios.json does not parse: ${e.message}`);
  process.exit(1);
}

const marketplaceDomains = readJSON(join(ROOT, 'marketplace.json')).plugins.map((p) => p.name);

if (typeof data.description !== 'string' || data.description.trim() === '') {
  err('top level: description is missing or empty.');
}
if (!Array.isArray(data.scenarios) || data.scenarios.length === 0) {
  err('top level: scenarios must be a non-empty array.');
}

const scenarios = Array.isArray(data.scenarios) ? data.scenarios : [];

// ---------------------------------------------------------------------------
// Per-scenario checks
// ---------------------------------------------------------------------------

const seenIds = new Set();
const domainsWithScenario = new Set();
const domainsWithFinnish = new Set();

for (const [index, s] of scenarios.entries()) {
  const where = `scenarios[${index}]${s && s.id ? ` (${s.id})` : ''}`;

  if (!s || typeof s !== 'object' || Array.isArray(s)) {
    err(`${where}: not an object.`);
    continue;
  }

  // Unknown keys catch a Finnish key surviving the rename (plugari, odotettu_skill, ...).
  for (const key of Object.keys(s)) {
    if (!KNOWN_KEYS.has(key)) {
      err(`${where}: unknown key '${key}' (allowed: ${[...KNOWN_KEYS].join(', ')}).`);
    }
  }

  if (typeof s.id !== 'string' || !KEBAB.test(s.id)) {
    err(`${where}: id is missing or not kebab-case.`);
  } else if (seenIds.has(s.id)) {
    err(`${where}: duplicate id.`);
  } else {
    seenIds.add(s.id);
  }

  const domainOk = typeof s.domain === 'string' && isDir(join(ROOT, s.domain));
  if (!domainOk) {
    err(`${where}: domain '${s.domain}' does not resolve to a directory.`);
  } else {
    if (!marketplaceDomains.includes(s.domain)) {
      err(`${where}: domain '${s.domain}' is not listed in marketplace.json.`);
    }
    domainsWithScenario.add(s.domain);

    if (typeof s.expected_skill !== 'string' || !s.expected_skill) {
      err(`${where}: expected_skill is missing.`);
    } else if (!isDir(join(ROOT, s.domain, 'skills', s.expected_skill))) {
      err(`${where}: expected_skill '${s.expected_skill}' does not exist in ${s.domain}/skills/.`);
    }
  }

  for (const [key, lang] of [['prompt', 'en'], ['prompt_fi', 'fi']]) {
    if (s[key] === undefined) {
      if (key === 'prompt') err(`${where}: prompt is required.`);
      continue;
    }
    const value = s[key];
    if (typeof value !== 'string' || value.trim() === '') {
      err(`${where}: ${key} must be a non-empty string.`);
      continue;
    }
    // The runner reads scenarios as TSV, so a tab or newline would silently
    // split one prompt into two fields.
    if (/[\t\n\r]/.test(value)) {
      err(`${where}: ${key} must be a single line without tabs.`);
    }
    // A prompt that names the skill tests string matching, not the description.
    if (typeof s.expected_skill === 'string' && value.includes(s.expected_skill)) {
      err(`${where}: ${key} contains the skill name '${s.expected_skill}' — write a real user request instead.`);
    }
    if (lang === 'fi' && domainOk) domainsWithFinnish.add(s.domain);
  }

  if (s.known_miss !== undefined) {
    if (typeof s.known_miss !== 'boolean') {
      err(`${where}: known_miss must be a boolean.`);
    } else if (s.known_miss && (typeof s.note !== 'string' || s.note.trim() === '')) {
      // README.md explains why each known miss exists; an unexplained one
      // decays into a permanently ignored failure.
      err(`${where}: known_miss requires a note explaining why the miss is tolerated.`);
    }
  }

  if (s.note !== undefined && typeof s.note !== 'string') {
    err(`${where}: note must be a string.`);
  }
}

// ---------------------------------------------------------------------------
// Coverage checks
// ---------------------------------------------------------------------------

for (const domain of marketplaceDomains) {
  if (!domainsWithScenario.has(domain)) {
    err(`coverage: domain '${domain}' has no scenario.`);
  } else if (!domainsWithFinnish.has(domain)) {
    err(`coverage: domain '${domain}' has no prompt_fi — Finnish keywords go unmeasured.`);
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

if (errors.length > 0) {
  console.error('\nevals/scenarios.json\n');
  for (const e of errors) console.error(`  x  ${e}`);
  console.error(`\nx ${errors.length} error(s).\n`);
  process.exit(1);
}

if (listMode) {
  const langs = requestedLangs.split(',').map((l) => l.trim()).filter(Boolean);
  for (const lang of langs) {
    if (lang !== 'en' && lang !== 'fi') {
      console.error(`Unknown language '${lang}' (supported: en, fi).`);
      process.exit(1);
    }
  }
  const rows = [];
  for (const s of scenarios) {
    for (const lang of langs) {
      const prompt = lang === 'en' ? s.prompt : s.prompt_fi;
      if (!prompt) continue;
      rows.push([s.id, s.domain, s.expected_skill, lang, s.known_miss ? '1' : '0', prompt].join('\t'));
    }
  }
  process.stdout.write(`${rows.join('\n')}\n`);
  process.exit(0);
}

const finnish = scenarios.filter((s) => s.prompt_fi).length;
const knownMisses = scenarios.filter((s) => s.known_miss).length;

console.log('\nevals/scenarios.json\n');
console.log(`  scenarios: ${scenarios.length}`);
console.log(`  domains covered: ${domainsWithScenario.size}/${marketplaceDomains.length}`);
console.log(`  Finnish variants: ${finnish}`);
console.log(`  known misses: ${knownMisses}`);
console.log(`  model calls for a full run: ${scenarios.length + finnish}`);
console.log('\nok Every scenario resolves to a real domain and skill.\n');
