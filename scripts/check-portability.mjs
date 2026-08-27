#!/usr/bin/env node
// Portability guard for agent-skills-for-finnish-law.
// Dependency-free (Node standard library only). Run: node scripts/check-portability.mjs
//
// WHY THIS EXISTS
// ---------------
// AGENTS.md makes a load-bearing promise about how much of this repository an
// adopter has to copy for a skill to keep working. That promise is easy to break
// silently: SKILL.md points at supporting files with backticked paths such as
// `references/tools.md` or `legal-core/AGENTS.md`, and those are NOT markdown
// links, so the dead-link check in scripts/validate.mjs never looks at them.
// They resolve fine inside the full repository and dangle outside it.
//
// THE DECLARED PORTABILITY UNIT IS `<domain>/` — NOT `<domain>/skills/*`.
// A skill bundle reaches outside its own directory in three legitimate ways:
//   1. `<domain>/AGENTS.md`     — shared guardrails, ~70 references
//   2. `<domain>/agents/*.md`   — subagents the skills hand work to
//   3. `<domain>/templates/*.md` and sibling skills' `references/*.md`
// All three live inside `<domain>/`, none inside `<domain>/skills/`.
//
// WHAT IT ENFORCES
//   - every path-like reference in a skill bundle resolves somewhere; and
//   - the file it resolves to lives inside that skill's own domain directory,
//     unless it is declared repo-level supplementary material (see REPO_LEVEL).
//
// Use `--report` for the tier breakdown that backs the wording in AGENTS.md.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

import { ROOT, listDirs, readJSON } from './lib.mjs';

const REPORT = process.argv.includes('--report');

const posix = (p) => p.replace(/\\/g, '/');
const rel = (p) => posix(relative(ROOT, p)) || '.';

// ---------------------------------------------------------------------------
// Repo-level supplementary material
// ---------------------------------------------------------------------------
// These paths sit at the repository root, so a `<domain>/` copy does not include
// them. Every current reference to them is optional context — background reading
// or an automation recipe — never material a skill needs in order to run. Adding
// an entry here is a deliberate statement that the reference is optional; if a
// skill ever *depends* on repo-level material, move the material into the domain
// instead of widening this list.
const REPO_LEVEL = [
  'references/',    // cross-cutting notes: citation style, template standards, glossary
  'agent-recipes/', // optional scheduled-agent recipes
  'QUICKSTART.md',  // install instructions, referenced as "the root QUICKSTART.md"
];

const isRepoLevel = (relPath) =>
  REPO_LEVEL.some((entry) => (entry.endsWith('/') ? relPath.startsWith(entry) : relPath === entry));

// Vendor pointer shims (`<domain>/CLAUDE.md`) are NOT checked here. That rule
// lives in scripts/check-invariants.mjs, rule 8, and belongs there: a CLAUDE.md
// reference resolves fine and sits inside its own domain, so it satisfies both
// properties this file is about. It is wrong for a different reason — the shim
// holds none of the guardrails. That rule also has a second half this file could
// never enforce (the shims must stay contentless, which is what makes the first
// half correct), and it matches bare prose mentions, not just path-like tokens.
// Duplicating half of it here would mean two error messages for one problem and
// two places to keep in step. tests/invariants.test.mjs covers it.

// ---------------------------------------------------------------------------
// Reference extraction
// ---------------------------------------------------------------------------

const LINK = /\[[^\]]*\]\(([^)]+)\)/g;
const BACKTICK = /`([^`\n]+)`/g;

// Anything with a scheme, an anchor, or an absolute/command-ish leading slash is
// not a repository path. `/legal-core:document-review` is a slash command.
const NOT_A_PATH = /^(?:[a-z][a-z0-9+.-]*:|#|\/)/i;
// Finnish statute citations (`55/2001`, `2016/679`) are the single biggest source
// of slash-bearing tokens in this repository and are never file paths.
const STATUTE = /^\d+\/\d{4}[a-z]?$/i;
const FILE_EXT = /\.(?:md|markdown|json|ya?ml|mjs|cjs|js|sh|txt|csv|toml)$/i;
const RELATIVE_PREFIX = /^\.\.?\//;
// A bare extension (`.csv`, `.md`) is prose about a file format, not a path.
const BARE_EXT = /^\.[A-Za-z0-9]+$/;

function extract(text) {
  const out = [];
  let m;
  while ((m = LINK.exec(text)) !== null) out.push(m[1].trim().split(/\s+/)[0]);
  while ((m = BACKTICK.exec(text)) !== null) out.push(m[1].trim());
  return out;
}

// Returns null when the token is not a repository path at all.
function normalize(raw) {
  if (!raw || /\s/.test(raw)) return null;
  if (NOT_A_PATH.test(raw)) return null;
  const clean = raw.split('#')[0].replace(/[.,;:)]+$/, '');
  if (!clean || STATUTE.test(clean) || BARE_EXT.test(clean)) return null;
  const definite = FILE_EXT.test(clean) || RELATIVE_PREFIX.test(clean);
  if (!definite && !clean.includes('/')) return null;
  return { clean, definite };
}

function walkMd(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.')) continue;
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walkMd(p, acc);
    else if (entry.endsWith('.md')) acc.push(p);
  }
  return acc;
}

// ---------------------------------------------------------------------------
// Check
// ---------------------------------------------------------------------------

const errors = [];
const tiers = { skill: 0, skills: 0, domain: 0, repo: 0 };
const escapes = new Map();

const mp = readJSON(join(ROOT, 'marketplace.json'));
let skillCount = 0;

for (const plugin of mp.plugins) {
  const domainDir = join(ROOT, plugin.source);
  const skillsDir = join(domainDir, 'skills');
  if (!existsSync(skillsDir)) continue;

  for (const skillDir of listDirs(skillsDir)) {
    if (!existsSync(join(skillDir, 'SKILL.md'))) continue;
    skillCount++;

    for (const md of walkMd(skillDir)) {
      const text = readFileSync(md, 'utf8');
      for (const raw of extract(text)) {
        const norm = normalize(raw);
        if (!norm) continue;

        // Resolve against the bases a reader would plausibly use, narrowest
        // first: the containing file's own directory, then the skill bundle
        // root, then the domain, then the repository.
        let target = null;
        for (const base of [dirname(md), skillDir, domainDir, ROOT]) {
          const candidate = resolve(base, norm.clean);
          if (existsSync(candidate)) { target = candidate; break; }
        }

        if (!target) {
          // Only complain about tokens that are unambiguously paths; a bare
          // `foo/bar` that resolves nowhere is far more likely to be prose.
          if (norm.definite) {
            errors.push({ file: rel(md), msg: `reference resolves nowhere: \`${raw}\`` });
          }
          continue;
        }

        const relTarget = rel(target);
        const insideSkill = !posix(relative(skillDir, target)).startsWith('..');
        const insideSkills = !posix(relative(skillsDir, target)).startsWith('..');
        const insideDomain = !posix(relative(domainDir, target)).startsWith('..');

        if (insideSkill) tiers.skill++;
        else if (insideSkills) tiers.skills++;
        else if (insideDomain) tiers.domain++;
        else if (isRepoLevel(relTarget)) {
          tiers.repo++;
          if (!escapes.has(relTarget)) escapes.set(relTarget, []);
          escapes.get(relTarget).push(rel(md));
        } else {
          errors.push({
            file: rel(md),
            msg: `reference escapes the portability unit \`${plugin.source}/\`: \`${raw}\` -> ${relTarget}`,
          });
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

console.log('\nagent-skills-for-finnish-law — portability guard');
console.log(`  portability unit: <domain>/   (skills checked: ${skillCount})\n`);

if (REPORT) {
  const total = tiers.skill + tiers.skills + tiers.domain + tiers.repo;
  console.log('  Resolved references by tier:');
  console.log(`    inside the skill directory          ${String(tiers.skill).padStart(4)}`);
  console.log(`    sibling skill under skills/         ${String(tiers.skills).padStart(4)}`);
  console.log(`    elsewhere in <domain>/              ${String(tiers.domain).padStart(4)}`);
  console.log(`    repo-level supplementary (allowed)  ${String(tiers.repo).padStart(4)}`);
  console.log(`    ${'-'.repeat(36)} ${String(total).padStart(4)}`);
  console.log(`\n  => copying <domain>/skills/* alone would break ${tiers.domain + tiers.repo} reference(s).`);
  if (escapes.size) {
    console.log('\n  Repo-level supplementary material referenced from skills:');
    for (const [target, from] of [...escapes].sort()) {
      console.log(`    ${target}`);
      for (const f of [...new Set(from)].sort()) console.log(`      <- ${f}`);
    }
  }
  console.log('');
}

for (const e of errors) console.log(`  ✗  ${e.file}: ${e.msg}`);

if (errors.length === 0) {
  console.log('✓ Every skill reference resolves inside its domain.\n');
  process.exit(0);
}
console.log(`\n✗ ${errors.length} portability error(s).\n`);
process.exit(1);
