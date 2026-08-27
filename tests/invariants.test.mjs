// Tests for scripts/check-invariants.mjs, rule 8 — the pointer-shim rules.
//
// This file exists because of a deconfliction. check-portability.mjs briefly
// carried its own vendor-shim rule; check-invariants.mjs rule 8 does it better
// and is now the single owner, so the duplicate was removed. But rule 8 was
// wired into CI untested, and an unenforced check is exactly the failure mode
// check-invariants.mjs was written to prevent — so the coverage moved here
// rather than disappearing with the duplicate.
//
// Rule 8 has two halves and they only work as a pair:
//   a. no file under */skills/* may name CLAUDE.md as a place to find guidance
//   b. every <domain>/CLAUDE.md must stay a contentless pointer at AGENTS.md
// Without (b), (a) is arbitrary: a shim that grew guidance would make a
// reference to it correct again. Both halves are tested.

import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import assert from 'node:assert/strict';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SCRIPT = 'scripts/check-invariants.mjs';

function copyRepoFixture() {
  const fixtureRoot = mkdtempSync(join(tmpdir(), 'invariants-'));
  cpSync(ROOT, fixtureRoot, {
    recursive: true,
    filter: (source) => {
      const normalized = source.replace(/\\/g, '/');
      return !normalized.endsWith('/.git') && !normalized.includes('/node_modules/');
    },
  });

  // check-invariants.mjs enumerates files with `git ls-files`, so the fixture has
  // to be a real repository with a populated index or the gate throws instead of
  // reporting. Staging is enough — nothing here needs a commit, so no identity
  // configuration is required.
  const git = (...args) => {
    const r = spawnSync('git', args, { cwd: fixtureRoot, encoding: 'utf8' });
    assert.equal(r.status, 0, `git ${args.join(' ')} failed: ${r.stderr}`);
  };
  git('init', '-q');
  git('add', '-A');

  return fixtureRoot;
}

const run = (cwd) => spawnSync(process.execPath, [SCRIPT], { cwd, encoding: 'utf8' });

const SKILL = 'legal-core/skills/legal-writing/SKILL.md';
const SHIM = 'legal-core/CLAUDE.md';

test('invariants gate passes on the repository as it stands', () => {
  const result = run(ROOT);
  assert.equal(result.status, 0, result.stdout + result.stderr);
});

test('rule 8a rejects a backticked CLAUDE.md reference inside a skill', () => {
  const fixtureRoot = copyRepoFixture();
  try {
    const p = join(fixtureRoot, SKILL);
    writeFileSync(p, `${readFileSync(p, 'utf8')}\n\nKs. \`CLAUDE.md\` → Vastuuvapaus.\n`);

    const result = run(fixtureRoot);

    assert.equal(result.status, 1, 'a CLAUDE.md reference must fail the gate');
    assert.match(result.stdout, new RegExp(`guardrail reference: ${SKILL}`));
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

// The regression that made rule 8 necessary was prose, not a link: 17 references
// across 15 files named CLAUDE.md as the home of the negatiivirajaus. No
// link-resolving gate can see those, which is why the rule matches plain text.
test('rule 8a rejects a bare prose mention, not just a path-like reference', () => {
  const fixtureRoot = copyRepoFixture();
  try {
    const p = join(fixtureRoot, SKILL);
    writeFileSync(p, `${readFileSync(p, 'utf8')}\n\nLue plugarin CLAUDE.md -tiedoston negatiivirajaus.\n`);

    const result = run(fixtureRoot);

    assert.equal(result.status, 1, 'a bare prose mention must fail the gate');
    assert.match(result.stdout, new RegExp(`guardrail reference: ${SKILL}`));
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test('rule 8b rejects a shim that grew guidance', () => {
  const fixtureRoot = copyRepoFixture();
  try {
    const p = join(fixtureRoot, SHIM);
    // Still points at AGENTS.md, so only the size half can catch this.
    writeFileSync(p, `${readFileSync(p, 'utf8')}\n${'Vastuuvapaus: tarkistettava luonnos. '.repeat(40)}\n`);

    const result = run(fixtureRoot);

    assert.equal(result.status, 1, 'a shim carrying guidance must fail the gate');
    assert.match(result.stdout, new RegExp(`pointer shim: ${SHIM} is \\d+ bytes`));
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test('rule 8b rejects a shim that stops pointing at AGENTS.md', () => {
  const fixtureRoot = copyRepoFixture();
  try {
    writeFileSync(join(fixtureRoot, SHIM), '# CLAUDE.md\n\nKs. juristi-plugarin ohjeet.\n');

    const result = run(fixtureRoot);

    assert.equal(result.status, 1, 'a shim that points nowhere must fail the gate');
    assert.match(result.stdout, new RegExp(`pointer shim: ${SHIM} does not point at AGENTS\\.md`));
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

// Guards the deconfliction itself: if the rule is ever re-added to
// check-portability.mjs, one problem starts reporting two errors from two files
// that have to be kept in step.
test('the shim rule has exactly one owner', () => {
  const portability = readFileSync(join(ROOT, 'scripts/check-portability.mjs'), 'utf8');
  const enforcing = portability
    .split('\n')
    .filter((line) => !line.trimStart().startsWith('//'))
    .join('\n');

  assert.doesNotMatch(
    enforcing,
    /CLAUDE\.md/,
    'check-portability.mjs must not re-implement the shim rule — check-invariants.mjs rule 8 owns it',
  );
});

test('both workflows run the invariants gate', () => {
  for (const workflow of ['.github/workflows/validate.yml', '.github/workflows/release.yml']) {
    const text = readFileSync(join(ROOT, workflow), 'utf8');
    assert.match(text, /scripts\/check-invariants\.mjs/, `${workflow}: invarianttiportti puuttuu`);
  }
});
