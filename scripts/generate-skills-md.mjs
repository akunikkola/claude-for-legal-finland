#!/usr/bin/env node
// Generoi SKILLS.md — selattava hakemisto kaikista plugareista ja skilleistä.
// Lukee .claude-plugin/marketplace.json (plugarijärjestys) ja kunkin
// SKILL.md:n frontmatterin. Idempotentti: ylikirjoittaa SKILLS.md:n.
// Aja: node scripts/generate-skills-md.mjs

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { basename, join, relative } from 'node:path';

import { ROOT, listDirs, parseFrontmatter, readJSON, truncate } from './lib.mjs';

function fmValue(file, key) {
  return parseFrontmatter(readFileSync(file, 'utf8')).values[key] || '';
}

const trunc = (s, n = 240) => truncate(s, n);

const mp = readJSON(join(ROOT, '.claude-plugin', 'marketplace.json'));

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
    const skillDirs = listDirs(skillsDir).sort();
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
