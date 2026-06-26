#!/usr/bin/env node
// Generoi SKILLS.md — selattava hakemisto kaikista plugareista ja skilleistä.
// Lukee .claude-plugin/marketplace.json (plugarijärjestys) ja kunkin
// SKILL.md:n frontmatterin. Idempotentti: ylikirjoittaa SKILLS.md:n.
// Aja: node scripts/generate-skills-md.mjs

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { basename, join, dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function fmValue(file, key) {
  const text = readFileSync(file, 'utf8');
  if (!text.startsWith('---')) return '';
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  let end = -1;
  for (let i = 1; i < lines.length; i++) if (lines[i].trim() === '---') { end = i; break; }
  if (end === -1) return '';
  const fm = lines.slice(1, end);
  for (let i = 0; i < fm.length; i++) {
    const m = fm[i].match(new RegExp(`^${key}:(.*)$`));
    if (!m) continue;
    let val = m[1].trim();
    if (val === '>' || val === '|' || val === '>-' || val === '|-') {
      const block = [];
      for (let j = i + 1; j < fm.length; j++) {
        if (/^\s+\S/.test(fm[j]) || fm[j].trim() === '') block.push(fm[j].trim());
        else break;
      }
      val = block.join(' ');
    } else {
      val = val.replace(/^["']/, '').replace(/["']$/, '');
    }
    return val.replace(/\s+/g, ' ').trim();
  }
  return '';
}

const trunc = (s, n = 240) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s);

const mp = JSON.parse(readFileSync(join(ROOT, '.claude-plugin', 'marketplace.json'), 'utf8'));

let out = `# Skillit\n\n`;
out += `> Autogeneroitu \`scripts/generate-skills-md.mjs\`-skriptillä \`.claude-plugin/marketplace.json\`:sta\n`;
out += `> ja kunkin \`SKILL.md\`:n frontmatterista. Älä muokkaa käsin – aja skripti uudelleen.\n\n`;
out += `Markkinapaikalla on **${mp.plugins.length} plugaria**. Asennus: ks. [QUICKSTART.md](QUICKSTART.md).\n\n`;

let totalSkills = 0;
const sections = [];

for (const p of mp.plugins) {
  const skillsDir = join(ROOT, p.source, 'skills');
  const rows = [];
  if (existsSync(skillsDir)) {
    const skillDirs = readdirSync(skillsDir)
      .filter((n) => !n.startsWith('.'))
      .map((n) => join(skillsDir, n))
      .filter((d) => statSync(d).isDirectory())
      .sort();
    for (const d of skillDirs) {
      const md = join(d, 'SKILL.md');
      if (!existsSync(md)) continue;
      const name = fmValue(md, 'name') || basename(d);
      const desc = trunc(fmValue(md, 'description'));
      const relPath = relative(ROOT, md).replace(/\\/g, '/');
      rows.push(`| [\`${name}\`](${relPath}) | ${desc} |`);
      totalSkills++;
    }
  }
  const title = p.displayName || p.name;
  let sec = `## ${title}\n\n`;
  sec += `\`/plugin install ${p.name}@${mp.name}\` – [\`${p.source}/\`](${p.source}/)\n\n`;
  if (p.description) sec += `${p.description}\n\n`;
  if (rows.length) {
    sec += `| Skill | Kuvaus |\n|---|---|\n${rows.join('\n')}\n`;
  } else {
    sec += `_Ei skillejä._\n`;
  }
  sections.push(sec);
}

out = out.replace('**' + mp.plugins.length + ' plugaria**', `**${mp.plugins.length} plugaria** ja **${totalSkills} skilliä**`);
out += sections.join('\n');
out += `\n---\n\n*Päivitä tämä tiedosto ajamalla \`node scripts/generate-skills-md.mjs\`.*\n`;

writeFileSync(join(ROOT, 'SKILLS.md'), out);
console.log(`SKILLS.md generoitu: ${mp.plugins.length} plugaria, ${totalSkills} skilliä.`);
