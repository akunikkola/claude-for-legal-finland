// Jaetut apurit scripts/-skripteille ja testeille.
// Yksi toteutus hakemistolistaukselle, JSON-luvulle ja SKILL.md-frontmatterin
// jäsennykselle, jotta generaattorit, validaattori ja testit näkevät saman
// metadatan — kolme rinnakkaista parseria ajautuisi ennen pitkää erilleen.

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const REPOSITORY = 'https://github.com/akunikkola/claude-for-legal-finland';
export const MARKETPLACE_NAME = 'legal-for-finland';
export const MARKETPLACE_DISPLAY_NAME = 'Legal for Finland';

export function listDirs(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => !name.startsWith('.'))
    .map((name) => join(dir, name))
    .filter((entry) => statSync(entry).isDirectory());
}

export function readJSON(file) {
  return JSON.parse(readFileSync(file, 'utf8'));
}

export function oneLine(text) {
  return String(text || '').replace(/\s+/g, ' ').trim();
}

export function truncate(text, maxLength) {
  if (!text || text.length <= maxLength) return text || '';
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

// Jäsentää SKILL.md:n YAML-frontmatterin (vain top-level-avaimet).
// Tukee tyylejä: key: arvo | key: "arvo" | key: > (folded/literal block).
// Palauttaa { error, topKeys, values }; error on 'missing' | 'unclosed' | null.
// Sulkeva '---' tunnistetaan vain omalla rivillään, joten arvon sisään
// upotettu '---' ei katkaise jäsennystä.
export function parseFrontmatter(text) {
  const lines = String(text).replace(/\r\n?/g, '\n').split('\n');
  if (lines[0].trim() !== '---') return { error: 'missing', topKeys: [], values: {} };

  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') { end = i; break; }
  }
  if (end === -1) return { error: 'unclosed', topKeys: [], values: {} };

  const fmLines = lines.slice(1, end);
  const topKeys = [];
  const values = {};
  for (let i = 0; i < fmLines.length; i++) {
    const m = fmLines[i].match(/^([A-Za-z][\w-]*):(.*)$/); // top-level (ei sisennystä)
    if (!m) continue;
    const key = m[1];
    topKeys.push(key);
    let val = m[2].trim();
    if (val === '>' || val === '|' || val === '>-' || val === '|-') {
      // folded/literal block: kerää sisennetyt rivit
      const block = [];
      for (let j = i + 1; j < fmLines.length; j++) {
        if (/^\s+\S/.test(fmLines[j]) || fmLines[j].trim() === '') block.push(fmLines[j].trim());
        else break;
      }
      val = block.join(' ');
    } else {
      // poista ympäröivät lainausmerkit
      val = val.replace(/^["']/, '').replace(/["']$/, '');
    }
    values[key] = oneLine(val);
  }
  return { error: null, topKeys, values };
}
