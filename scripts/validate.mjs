#!/usr/bin/env node
// Rakenne- ja laatuvalidaattori claude-for-legal-finland -markkinapaikalle.
// Riippuvuudeton (vain Node:n vakiokirjasto). Aja: node scripts/validate.mjs
//
// Tarkistaa:
//  - marketplace.json  <->  jokaisen plugarin .claude-plugin/plugin.json yhtenäisyys
//  - SKILL.md-frontmatter: vain name + description; kebab-case; kansio == name
//  - description: ei tyhjä, <= 1024 merkkiä, ei "numero,numero" (Cowork-validaattorin ansa)
//  - plugin.json: semver-versio, kebab-case name, description ilman "numero,numero"
//  - kuolleet suhteelliset markdown-linkit (.md-tiedostoissa)
//  - näkymättömät / harhaanjohtavat unicode-merkit (zero-width, bidi, kyrilliset homoglyfit)
//
// Tämä portti on "henkivakuutus": se ei korvaa lähdekuria, vaan estää
// markkinapaikan rikkovat ja hiljaa hajoavat virheet ennen julkaisua.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { basename, join, dirname, relative, resolve } from 'node:path';

import {
  ROOT,
  listDirs,
  parseFrontmatter as parseFrontmatterText,
  readJSON as readJSONStrict,
} from './lib.mjs';

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push({ file: rel(file), msg });
const warn = (file, msg) => warnings.push({ file: rel(file), msg });
const rel = (p) => relative(ROOT, p) || '.';

// ---------------------------------------------------------------------------
// Apurit
// ---------------------------------------------------------------------------

const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SEMVER = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;
// "numero (väli) pilkku (väli) numero" — esim. 1,5 tai "BGHZ 217, 129".
// Suomalainen desimaalipilkku ja monet sitaattinumerot laukaisevat tämän;
// Coworkin markkinapaikkavalidaattori kaatuu siihen. Käytä pistettä tai sanaa.
const DIGIT_COMMA = /\d\s*,\s*\d/;
const ZERO_WIDTH = /[​-‍﻿⁠]/;
const BIDI = /[‪-‮⁦-⁩]/;
const CYRILLIC = /[Ѐ-ӿ]/;

function readJSON(file) {
  try {
    return readJSONStrict(file);
  } catch (e) {
    err(file, `JSON ei jäsenny: ${e.message}`);
    return null;
  }
}

// Jäsennys on jaettu lib.mjs:ssä (sama toteutus generaattoreissa ja testeissä);
// tämä kääre raportoi puuttuvan tai sulkemattoman frontmatterin virheenä.
function parseFrontmatter(file) {
  const fm = parseFrontmatterText(readFileSync(file, 'utf8'));
  if (fm.error === 'missing') {
    err(file, 'SKILL.md ei ala YAML-frontmatterilla (---).');
    return null;
  }
  if (fm.error === 'unclosed') {
    err(file, 'Frontmatteria ei suljeta (--- puuttuu).');
    return null;
  }
  return fm;
}

function checkUnicode(file, text, label) {
  if (ZERO_WIDTH.test(text)) err(file, `${label}: näkymätön zero-width-merkki.`);
  if (BIDI.test(text)) err(file, `${label}: bidi-ohjausmerkki (mahdollinen huijaus).`);
  if (CYRILLIC.test(text)) warn(file, `${label}: kyrillinen merkki (homoglyfiriski?).`);
}

// ---------------------------------------------------------------------------
// 1. marketplace.json + plugin.json -yhtenäisyys
// ---------------------------------------------------------------------------

const mpPath = join(ROOT, '.claude-plugin', 'marketplace.json');
let pluginNames = [];
if (!existsSync(mpPath)) {
  err(mpPath, 'marketplace.json puuttuu.');
} else {
  const mp = readJSON(mpPath);
  if (mp) {
    if (!Array.isArray(mp.plugins) || mp.plugins.length === 0) {
      err(mpPath, 'plugins-kentän on oltava ei-tyhjä taulukko.');
    } else {
      const seen = new Set();
      for (const p of mp.plugins) {
        const where = `${mpPath} (${p.name ?? '?'})`;
        if (!p.name || !KEBAB.test(p.name)) err(mpPath, `pluginin name ei ole kebab-case: ${p.name}`);
        if (seen.has(p.name)) err(mpPath, `duplikaatti plugin-name: ${p.name}`);
        seen.add(p.name);
        if (!p.source || !p.source.startsWith('./')) err(mpPath, `${p.name}: source ei ala './'`);
        else {
          const dir = join(ROOT, p.source);
          if (!existsSync(dir)) err(mpPath, `${p.name}: source-hakemistoa ei ole: ${p.source}`);
        }
        if (!p.description) err(mpPath, `${p.name}: description puuttuu.`);
        else {
          if (DIGIT_COMMA.test(p.description)) err(where, 'description sisältää "numero,numero" (Cowork-ansa).');
          if (p.description.length > 1024) err(where, `description liian pitkä (${p.description.length} > 1024).`);
          checkUnicode(mpPath, p.description, `${p.name} description`);
        }
        // ristiintarkista plugin.json
        const pjPath = join(ROOT, p.source || '', '.claude-plugin', 'plugin.json');
        if (existsSync(pjPath)) {
          const pj = readJSON(pjPath);
          if (pj) {
            if (pj.name !== p.name) err(pjPath, `plugin.json name (${pj.name}) != marketplace name (${p.name}).`);
            if (pj.version && !SEMVER.test(pj.version)) err(pjPath, `version ei ole semver: ${pj.version}`);
            if (pj.description && DIGIT_COMMA.test(pj.description)) err(pjPath, 'description sisältää "numero,numero" (Cowork-ansa).');
          }
        } else err(mpPath, `${p.name}: .claude-plugin/plugin.json puuttuu.`);
      }
      pluginNames = mp.plugins.map((p) => p.name);
    }
  }
}

// ---------------------------------------------------------------------------
// 2. Jokaisen plugarin SKILL.md-tiedostot
// ---------------------------------------------------------------------------

const ALLOWED_FM = new Set(['name', 'description']);
let skillCount = 0;

for (const name of pluginNames) {
  const skillsDir = join(ROOT, name, 'skills');
  if (!existsSync(skillsDir)) { warn(skillsDir, `plugarilla ${name} ei ole skills/-hakemistoa.`); continue; }
  for (const sdir of listDirs(skillsDir)) {
    const skillName = basename(sdir);
    const skillMd = join(sdir, 'SKILL.md');
    if (!existsSync(skillMd)) { err(sdir, 'SKILL.md puuttuu skill-hakemistosta.'); continue; }
    skillCount++;
    const fm = parseFrontmatter(skillMd);
    if (!fm) continue;
    // vain name + description
    for (const k of fm.topKeys) {
      if (!ALLOWED_FM.has(k)) err(skillMd, `kielletty frontmatter-kenttä: '${k}' (sallitut: name, description).`);
    }
    // name
    const nm = fm.values.name;
    if (!nm) err(skillMd, 'name puuttuu frontmatterista.');
    else {
      if (!KEBAB.test(nm)) err(skillMd, `name ei ole kebab-case: ${nm}`);
      if (nm.length > 64) err(skillMd, `name liian pitkä (${nm.length} > 64).`);
      if (nm !== skillName) err(skillMd, `name ('${nm}') != kansion nimi ('${skillName}').`);
    }
    // description
    const ds = fm.values.description;
    if (!ds) err(skillMd, 'description puuttuu tai on tyhjä.');
    else {
      if (ds.length > 1024) err(skillMd, `description liian pitkä (${ds.length} > 1024).`);
      if (DIGIT_COMMA.test(ds)) err(skillMd, 'description sisältää "numero,numero" (Cowork-ansa): käytä pistettä, sanaa tai ":".');
      checkUnicode(skillMd, ds, 'description');
    }
  }
}

// ---------------------------------------------------------------------------
// 3. Kuolleet suhteelliset markdown-linkit + unicode-skannaus md-tiedostoissa
// ---------------------------------------------------------------------------

function walkMd(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.git')) continue;
    if (entry === 'node_modules') continue;
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walkMd(p, acc);
    else if (entry.endsWith('.md')) acc.push(p);
  }
  return acc;
}

const LINK = /\[[^\]]*\]\(([^)]+)\)/g;
for (const md of walkMd(ROOT)) {
  const text = readFileSync(md, 'utf8');
  if (ZERO_WIDTH.test(text)) err(md, 'tiedostossa näkymätön zero-width-merkki.');
  if (BIDI.test(text)) err(md, 'tiedostossa bidi-ohjausmerkki.');
  let m;
  while ((m = LINK.exec(text)) !== null) {
    let target = m[1].trim().split(/\s+/)[0]; // pudota mahdollinen "title"
    if (/^(https?:|mailto:|#|tel:)/i.test(target)) continue; // ulkoiset/ankkurit
    target = target.split('#')[0];
    if (!target) continue;
    const resolved = resolve(dirname(md), target);
    if (!existsSync(resolved)) err(md, `kuollut linkki: ${m[1]}`);
  }
}

// ---------------------------------------------------------------------------
// Raportti
// ---------------------------------------------------------------------------

console.log(`\nclaude-for-legal-finland — validaattori`);
console.log(`  plugareita: ${pluginNames.length}, skillejä: ${skillCount}\n`);

for (const w of warnings) console.log(`  ⚠︎  ${w.file}: ${w.msg}`);
for (const e of errors) console.log(`  ✗  ${e.file}: ${e.msg}`);

if (errors.length === 0) {
  console.log(`\n✓ Validaattori vihreä${warnings.length ? ` (${warnings.length} varoitus(ta))` : ''}.\n`);
  process.exit(0);
} else {
  console.log(`\n✗ ${errors.length} virhe(ttä), ${warnings.length} varoitus(ta).\n`);
  process.exit(1);
}
