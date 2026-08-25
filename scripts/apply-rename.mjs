#!/usr/bin/env node
// Applies scripts/rename-map.json to the working tree.
//
//   node scripts/apply-rename.mjs --dry-run   # print the plan, touch nothing
//   node scripts/apply-rename.mjs             # git mv + rewrite references
//
// Two passes:
//   1. Move every tracked file to its new path (longest-prefix match, so a file
//      rule always beats its parent directory rule). git mv keeps history.
//   2. Rewrite textual references inside every text file.
//
// Pass 2 is deliberately conservative. A bare domain name like "juristi" is
// also an ordinary Finnish word ("lawyer") that appears throughout the prose,
// so replacing it unconditionally would corrupt the content. Only these forms
// are rewritten:
//   - anything containing '/', i.e. an actual path
//   - a backticked bare name, e.g. `legal-core`
//   - a same-directory relative markdown link to a renamed file
// Everything else is left for the translation phase, and the validator's
// dead-link check is the backstop.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, posix, relative } from 'node:path';

import { ROOT } from './lib.mjs';

const DRY_RUN = process.argv.includes('--dry-run');

const TEXT_EXT = new Set(['.md', '.json', '.yaml', '.yml', '.sh', '.mjs', '.js', '.html', '.txt']);

const map = JSON.parse(readFileSync(join(ROOT, 'scripts/rename-map.json'), 'utf8'));

// Longest first: a file rule must win over its parent directory rule.
const rules = [...map.paths].sort((a, b) => b.from.length - a.from.length);

const git = (args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' });

function trackedFiles() {
  return git(['ls-files']).split('\n').map((s) => s.trim()).filter(Boolean);
}

/** Longest-prefix rewrite of a repo-relative path. Returns null if unchanged. */
function rewritePath(p) {
  for (const rule of rules) {
    if (p === rule.from) return rule.to;
    if (p.startsWith(`${rule.from}/`)) return `${rule.to}${p.slice(rule.from.length)}`;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Pass 1 — move files
// ---------------------------------------------------------------------------

const files = trackedFiles();
const moves = [];

for (const from of files) {
  const to = rewritePath(from);
  if (to && to !== from) moves.push({ from, to });
}

const collisions = moves
  .map((m) => m.to)
  .filter((v, i, a) => a.indexOf(v) !== i);
if (collisions.length) {
  console.error(`\n✗ destination collision: ${[...new Set(collisions)].join(', ')}\n`);
  process.exit(1);
}

console.log(`\nPass 1 — move ${moves.length} of ${files.length} tracked files`);
if (DRY_RUN) {
  for (const m of moves.slice(0, 15)) console.log(`  ${m.from}\n    -> ${m.to}`);
  if (moves.length > 15) console.log(`  ... and ${moves.length - 15} more`);
} else {
  for (const { from, to } of moves) {
    mkdirSync(join(ROOT, dirname(to)), { recursive: true });
    git(['mv', from, to]);
  }
  console.log(`  moved ${moves.length} files`);
}

// ---------------------------------------------------------------------------
// Pass 2 — rewrite references
// ---------------------------------------------------------------------------

// Path-shaped rules are safe as plain substrings.
const pathRules = rules.filter((r) => r.from.includes('/'));

// Bare top-level names are only rewritten inside backticks.
const bareRules = rules.filter((r) => !r.from.includes('/'));

// Same-directory relative links: map old basename -> new basename, scoped to
// the directory the rule lives in, so `[x](lahteet.md)` is fixed too.
const basenameByDir = new Map();
for (const rule of rules) {
  if (!rule.from.includes('/')) continue;
  const fromBase = basename(rule.from);
  const toBase = basename(rule.to);
  if (fromBase === toBase) continue;
  const dir = dirname(rule.from);
  if (!basenameByDir.has(dir)) basenameByDir.set(dir, []);
  basenameByDir.get(dir).push({ from: fromBase, to: toBase });
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Resolves a repo-relative POSIX path, collapsing '.' and '..'.
function resolveRepoPath(fromDir, target) {
  const segments = fromDir === '.' ? [] : fromDir.split('/');
  for (const part of target.split('/')) {
    if (part === '' || part === '.') continue;
    if (part === '..') segments.pop();
    else segments.push(part);
  }
  return segments.join('/');
}

function relativeRepoPath(fromDir, target) {
  const a = fromDir === '.' ? [] : fromDir.split('/');
  const b = target.split('/');
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  const up = Array(a.length - i).fill('..');
  const down = b.slice(i);
  return [...up, ...down].join('/') || '.';
}

const MD_LINK = /(\[[^\]]*\]\()([^)\s]+)((?:\s+"[^"]*")?\))/g;

/**
 * Rewrites every relative markdown link by resolving it against the file's
 * ORIGINAL directory, mapping the result through the rename rules, then
 * re-relativising against the file's NEW directory.
 *
 * Plain substring replacement cannot do this: a link like `../../pohjat/x.md`
 * or `references/y.md` shares no text with the absolute rule that renames it.
 */
function rewriteLinks(text, originalPath, newPath) {
  const oldDir = dirname(originalPath).replace(/\\/g, '/');
  const newDir = dirname(newPath).replace(/\\/g, '/');

  return text.replace(MD_LINK, (match, open, target, close) => {
    if (/^(https?:|mailto:|tel:|#)/i.test(target)) return match;

    const hashIndex = target.indexOf('#');
    const anchor = hashIndex === -1 ? '' : target.slice(hashIndex);
    const pathPart = hashIndex === -1 ? target : target.slice(0, hashIndex);
    if (!pathPart) return match;

    const trailingSlash = pathPart.endsWith('/');
    const oldAbs = resolveRepoPath(oldDir, pathPart);
    if (!oldAbs) return match;

    const newAbs = rewritePath(oldAbs) ?? oldAbs;
    let rebased = relativeRepoPath(newDir, newAbs);
    if (trailingSlash && !rebased.endsWith('/')) rebased += '/';

    return `${open}${rebased}${anchor}${close}`;
  });
}

function rewriteText(text, originalPath, newPath) {
  let out = text;

  for (const rule of pathRules) {
    out = out.split(rule.from).join(rule.to);
  }

  for (const rule of bareRules) {
    out = out.replace(new RegExp('`' + escapeRe(rule.from) + '`', 'g'), '`' + rule.to + '`');
  }

  // same-directory backticked filenames, using the file's ORIGINAL directory
  const localRenames = basenameByDir.get(dirname(originalPath).replace(/\\/g, '/'));
  if (localRenames) {
    for (const { from, to } of localRenames) {
      out = out.replace(new RegExp('`' + escapeRe(from) + '`', 'g'), '`' + to + '`');
    }
  }

  if (originalPath.endsWith('.md')) {
    out = rewriteLinks(out, originalPath, newPath);
  }

  for (const id of map.identifiers) {
    out = out.split(id.from).join(id.to);
  }

  return out;
}

// After pass 1 the files live at their new paths; keep the original path so the
// same-directory rules resolve against where the file used to be.
const moveByTo = new Map(moves.map((m) => [m.to, m.from]));
const livePaths = DRY_RUN ? files : trackedFiles();

let rewritten = 0;
for (const live of livePaths) {
  const ext = live.slice(live.lastIndexOf('.'));
  if (!TEXT_EXT.has(ext)) continue;

  const full = join(ROOT, live);
  if (!existsSync(full)) continue;

  const original = moveByTo.get(live) ?? live;
  const before = readFileSync(full, 'utf8');
  const after = rewriteText(before, original, live);

  if (after !== before) {
    rewritten++;
    if (!DRY_RUN) writeFileSync(full, after);
  }
}

console.log(`Pass 2 — ${DRY_RUN ? 'would rewrite' : 'rewrote'} references in ${rewritten} files`);

// ---------------------------------------------------------------------------
// Pass 3 — manifest identifiers and SKILL.md frontmatter
//
// These are not path-shaped, so pass 2 cannot see them: marketplace `name` and
// `source`, plugin.json `name`, and the `name:` in each SKILL.md frontmatter.
// The validator requires frontmatter name == directory name, so missing this
// would fail the gate 78 times.
// ---------------------------------------------------------------------------

const domainRenames = new Map();
const skillRenames = new Map(); // newDomain/skills/newSkill -> { oldSkill, newSkill }

for (const rule of map.paths) {
  if (!rule.from.includes('/') && !rule.to.includes('/')) {
    domainRenames.set(rule.from, rule.to);
  }
  const m = rule.from.match(/^([^/]+)\/skills\/([^/]+)$/);
  if (m) {
    const toSkill = rule.to.split('/').pop();
    skillRenames.set(rule.to, { from: m[2], to: toSkill });
  }
}

let manifestsFixed = 0;

function fixJSONNames(relPath, mutate) {
  const full = join(ROOT, relPath);
  if (!existsSync(full)) return;
  const before = readFileSync(full, 'utf8');
  const value = JSON.parse(before);
  mutate(value);
  const after = `${JSON.stringify(value, null, 2)}\n`;
  if (after !== before) {
    manifestsFixed++;
    if (!DRY_RUN) writeFileSync(full, after);
  }
}

fixJSONNames('marketplace.json', (mp) => {
  for (const p of mp.plugins) {
    const renamed = domainRenames.get(p.name);
    if (renamed) p.name = renamed;
    const src = p.source.replace(/^\.\//, '');
    const renamedSrc = domainRenames.get(src);
    if (renamedSrc) p.source = `./${renamedSrc}`;
  }
});

for (const newDomain of domainRenames.values()) {
  fixJSONNames(`${newDomain}/plugin.json`, (pj) => {
    pj.name = newDomain;
  });
}

let frontmatterFixed = 0;
for (const [skillDir, { from, to }] of skillRenames) {
  const skillMd = join(ROOT, skillDir, 'SKILL.md');
  if (!existsSync(skillMd)) continue;
  const before = readFileSync(skillMd, 'utf8');
  // only the frontmatter `name:` line, not any occurrence in the body
  const after = before.replace(
    new RegExp(`^(name:\\s*)${escapeRe(from)}\\s*$`, 'm'),
    `$1${to}`,
  );
  if (after !== before) {
    frontmatterFixed++;
    if (!DRY_RUN) writeFileSync(skillMd, after);
  }
}

console.log(
  `Pass 3 — ${DRY_RUN ? 'would fix' : 'fixed'} ${manifestsFixed} manifests and ${frontmatterFixed} SKILL.md frontmatter names`,
);

// ---------------------------------------------------------------------------
// Clean up directories emptied by the move
// ---------------------------------------------------------------------------

function pruneEmptyDirs(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    if (entry === '.git' || entry === 'node_modules') continue;
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) pruneEmptyDirs(p);
  }
  if (dir !== ROOT && readdirSync(dir).length === 0) rmdirSync(dir);
}

if (!DRY_RUN) pruneEmptyDirs(ROOT);

console.log(
  DRY_RUN
    ? '\nDry run — nothing changed. Re-run without --dry-run to apply.\n'
    : '\n✓ Rename applied. Next: node scripts/validate.mjs\n',
);
