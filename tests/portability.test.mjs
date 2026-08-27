// Tests for the portability claim in AGENTS.md.
//
// The first two tests exercise scripts/check-portability.mjs itself — a guard
// that cannot fail is worthless, so we prove it bites.
//
// The last two test the CLAIM rather than the script: they build a fixture that
// contains one domain and nothing else from the repository, and check whether
// the skills' references still resolve. That is the only honest way to know
// whether "copy `<domain>/` and it works" is true.

import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import assert from 'node:assert/strict';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SCRIPT = 'scripts/check-portability.mjs';

function copyRepoFixture() {
  const fixtureRoot = mkdtempSync(join(tmpdir(), 'portability-'));
  cpSync(ROOT, fixtureRoot, {
    recursive: true,
    filter: (source) => {
      const normalized = source.replace(/\\/g, '/');
      return !normalized.endsWith('/.git') && !normalized.includes('/node_modules/');
    },
  });
  return fixtureRoot;
}

function run(cwd) {
  return spawnSync(process.execPath, [SCRIPT], { cwd, encoding: 'utf8' });
}

// Reduce a fixture to a single domain plus the tooling the guard needs to run.
// `keepRepoLevel: false` also removes the repo-level supplementary material, so a
// green result means the domain really is self-contained.
function isolateDomain(fixtureRoot, domain, { keepRepoLevel = false, skillsOnly = false } = {}) {
  const mpPath = join(fixtureRoot, 'marketplace.json');
  const mp = JSON.parse(readFileSync(mpPath, 'utf8'));
  const keep = mp.plugins.filter((p) => p.name === domain);
  assert.equal(keep.length, 1, `domain ${domain} not found in marketplace.json`);

  for (const plugin of mp.plugins) {
    if (plugin.name !== domain) rmSync(join(fixtureRoot, plugin.source), { recursive: true, force: true });
  }
  if (!keepRepoLevel) {
    for (const dir of ['references', 'agent-recipes']) {
      rmSync(join(fixtureRoot, dir), { recursive: true, force: true });
    }
    rmSync(join(fixtureRoot, 'QUICKSTART.md'), { force: true });
  }
  if (skillsOnly) {
    // Reproduce the discarded claim: copy only `<domain>/skills/*`.
    for (const entry of ['AGENTS.md', 'CLAUDE.md', 'README.md', 'agents', 'templates']) {
      rmSync(join(fixtureRoot, domain, entry), { recursive: true, force: true });
    }
  }

  mp.plugins = keep;
  writeFileSync(mpPath, `${JSON.stringify(mp, null, 2)}\n`);
}

test('portability guard passes on the repository as it stands', () => {
  const result = run(ROOT);
  assert.equal(result.status, 0, result.stdout + result.stderr);
});

test('both workflows run the portability guard', () => {
  for (const workflow of ['.github/workflows/validate.yml', '.github/workflows/release.yml']) {
    const text = readFileSync(join(ROOT, workflow), 'utf8');
    assert.match(text, /scripts\/check-portability\.mjs/, `${workflow}: siirrettävyysportti puuttuu`);
  }
});

test('portability guard fails on a backticked reference that resolves nowhere', () => {
  const fixtureRoot = copyRepoFixture();
  try {
    const skillPath = join(fixtureRoot, 'legal-core/skills/legal-writing/SKILL.md');
    writeFileSync(
      skillPath,
      `${readFileSync(skillPath, 'utf8')}\n\nLue \`references/does-not-exist.md\`.\n`,
    );

    const result = run(fixtureRoot);

    assert.equal(result.status, 1, 'guard should reject a dangling reference');
    assert.match(result.stdout, /references\/does-not-exist\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test('portability guard fails on a reference that escapes the domain', () => {
  const fixtureRoot = copyRepoFixture();
  try {
    const skillPath = join(fixtureRoot, 'taxation/skills/tax-fundamentals/SKILL.md');
    const target = existsSync(skillPath)
      ? skillPath
      : join(fixtureRoot, 'legal-core/skills/legal-writing/SKILL.md');
    // Resolves in the full repository, but is not in the same domain.
    writeFileSync(target, `${readFileSync(target, 'utf8')}\n\nKs. \`contracts/AGENTS.md\`.\n`);

    const result = run(fixtureRoot);

    assert.equal(result.status, 1, 'guard should reject a cross-domain reference');
    assert.match(result.stdout, /escapes the portability unit/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test('a whole <domain>/ directory is self-contained on its own', () => {
  const fixtureRoot = copyRepoFixture();
  try {
    isolateDomain(fixtureRoot, 'real-estate-and-housing');

    const result = run(fixtureRoot);

    assert.equal(
      result.status,
      0,
      `real-estate-and-housing should resolve with nothing else present:\n${result.stdout}${result.stderr}`,
    );
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test('<domain>/skills/* alone is NOT self-contained — the discarded claim', () => {
  const fixtureRoot = copyRepoFixture();
  try {
    isolateDomain(fixtureRoot, 'real-estate-and-housing', { skillsOnly: true });

    const result = run(fixtureRoot);

    assert.equal(result.status, 1, 'skills/ alone must not be reported as portable');
    // The domain's shared guardrails are the reference that breaks first.
    assert.match(result.stdout, /real-estate-and-housing\/AGENTS\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
