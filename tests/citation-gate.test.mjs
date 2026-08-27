// Covers scripts/check-citations.mjs in both directions: a citation that is
// LOST during translation, and one that is INVENTED. The added-citation half is
// graded, so the tests pin the grading too - a gate that reported every moved
// citation as an error would be turned off within a week.
//
// The fixture is synthetic rather than a copy of the repository. The live tree
// is being translated continuously, so asserting against it would make these
// tests fail for reasons that have nothing to do with the gate.

import { cpSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import assert from 'node:assert/strict';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const SNAPSHOT = {
  description: 'Fixture snapshot.',
  takenAt: '2026-01-01',
  files: {
    'domain/a.md': { '55/2001': 2, 'KKO:2019:42': 1 },
    'domain/b.md': { '410/2015': 1 },
  },
};

// One verified statute that the snapshot does NOT contain, so the
// tracking/statutes.json cross-check can be exercised on its own.
const STATUTES = { saadokset: [{ numero: '38/1978', nimi: 'Kuluttajansuojalaki' }] };

const FILE_A = [
  '# A',
  '',
  'Employment Contracts Act (tyosopimuslaki 55/2001) applies.',
  'See KKO:2019:42 and tyosopimuslaki 55/2001 again.',
  '',
].join('\n');

const FILE_B = ['# B', '', 'Local Government Act (kuntalaki 410/2015).', ''].join('\n');

/** Builds a throwaway repository containing just what the gate reads. */
function makeFixture() {
  const root = mkdtempSync(join(tmpdir(), 'citation-gate-'));
  mkdirSync(join(root, 'scripts'), { recursive: true });
  mkdirSync(join(root, 'references'), { recursive: true });
  mkdirSync(join(root, 'tracking'), { recursive: true });
  mkdirSync(join(root, 'domain'), { recursive: true });

  for (const script of ['check-citations.mjs', 'lib.mjs']) {
    cpSync(join(ROOT, 'scripts', script), join(root, 'scripts', script));
  }

  writeFileSync(join(root, 'references/citation-snapshot.json'), JSON.stringify(SNAPSHOT, null, 2));
  writeFileSync(join(root, 'tracking/statutes.json'), JSON.stringify(STATUTES, null, 2));
  writeFileSync(join(root, 'domain/a.md'), FILE_A);
  writeFileSync(join(root, 'domain/b.md'), FILE_B);
  return root;
}

function runGate(root) {
  const result = spawnSync(process.execPath, ['scripts/check-citations.mjs'], {
    cwd: root,
    encoding: 'utf8',
  });
  return { status: result.status, output: result.stdout + result.stderr };
}

/** Runs `mutate` against a fresh fixture and returns the gate's verdict. */
function withFixture(mutate) {
  const root = makeFixture();
  try {
    mutate(root);
    return runGate(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

function writeA(root, body) {
  writeFileSync(join(root, 'domain/a.md'), body);
}

test('unchanged tree passes', () => {
  const { status, output } = withFixture(() => {});

  assert.equal(status, 0, output);
  assert.match(output, /no citation was invented/);
});

test('citation dropped from a file is an error', () => {
  const { status, output } = withFixture((root) => {
    writeA(root, FILE_A.replace('tyosopimuslaki 55/2001 again', 'the same Act again'));
  });

  assert.equal(status, 1, output);
  assert.match(output, /domain\/a\.md: citation "55\/2001" appeared 2/);
});

test('case identifier dropped from a file is an error', () => {
  const { status, output } = withFixture((root) => {
    writeA(root, FILE_A.replace('KKO:2019:42', 'the precedent'));
  });

  assert.equal(status, 1, output);
  assert.match(output, /citation "KKO:2019:42" appeared 1/);
});

test('statute number found nowhere in the snapshot is an error', () => {
  const { status, output } = withFixture((root) => {
    writeA(root, `${FILE_A}\nSee also laki 999/2099.\n`);
  });

  assert.equal(status, 1, output);
  assert.match(output, /citation "999\/2099" appears nowhere in the snapshot/);
  assert.match(output, /invented\?/);
});

test('case identifier found nowhere in the snapshot is an error', () => {
  const { status, output } = withFixture((root) => {
    writeA(root, `${FILE_A}\nSee KKO:2099:99.\n`);
  });

  assert.equal(status, 1, output);
  assert.match(output, /citation "KKO:2099:99" appears nowhere in the snapshot/);
});

test('invented citation in a file the snapshot never recorded is an error', () => {
  const { status, output } = withFixture((root) => {
    writeFileSync(join(root, 'domain/c.md'), '# C\n\nUnder laki 999/2099 the rule is different.\n');
  });

  assert.equal(status, 1, output);
  assert.match(output, /domain\/c\.md: citation "999\/2099" appears nowhere/);
});

test('citation that moved from another file is a warning and does not fail', () => {
  const { status, output } = withFixture((root) => {
    writeA(root, `${FILE_A}\nCompare kuntalaki 410/2015.\n`);
  });

  assert.equal(status, 0, output);
  assert.match(output, /citation "410\/2015" is new to this file/);
  assert.match(output, /snapshot had it in domain\/b\.md/);
});

test('citation new to the snapshot but verified in the registry is a warning', () => {
  const { status, output } = withFixture((root) => {
    writeA(root, `${FILE_A}\nSee kuluttajansuojalaki 38/1978.\n`);
  });

  assert.equal(status, 0, output);
  assert.match(output, /citation "38\/1978" is new to the snapshot but is a verified statute/);
});

test('repeating a citation the file already had is not reported at all', () => {
  const { status, output } = withFixture((root) => {
    writeA(root, `${FILE_A}\nAnd once more, tyosopimuslaki 55/2001.\n`);
  });

  assert.equal(status, 0, output);
  assert.doesNotMatch(output, /55\/2001/);
  assert.doesNotMatch(output, /moved between files/);
});

test('a lost citation and an invented one are reported together', () => {
  const { status, output } = withFixture((root) => {
    writeA(root, `${FILE_A.replace('KKO:2019:42', 'the precedent')}\nUnder laki 999/2099.\n`);
  });

  assert.equal(status, 1, output);
  assert.match(output, /citation "KKO:2019:42" appeared 1/);
  assert.match(output, /citation "999\/2099" appears nowhere/);
  assert.match(output, /2 citation problem\(s\)/);
});
