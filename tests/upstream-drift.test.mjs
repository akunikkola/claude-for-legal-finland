import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

import { ROOT, readJSON } from '../scripts/lib.mjs';
import {
  citationDelta,
  classify,
  makeMapper,
  portStatuteEntries,
} from '../scripts/check-upstream-drift.mjs';

const map = readJSON(join(ROOT, 'scripts/rename-map.json'));
const mapPath = makeMapper(map.paths);

// Longest-prefix resolution must agree with scripts/apply-rename.mjs, or the
// drift report would point a human at a path the rename never produced.
test('upstream paths map onto fork paths by longest prefix', () => {
  assert.equal(
    mapPath('juristi/skills/juristi/references/lahteet.md'),
    'legal-core/skills/legal-writing/references/sources.md',
  );
  // directory rule applies to a file the map does not name explicitly
  assert.equal(mapPath('tyooikeus/README.md'), 'employment-law/README.md');
  assert.equal(mapPath('seuranta/saadokset.json'), 'tracking/statutes.json');
  // not renamed at all
  assert.equal(mapPath('README.md'), null);
});

test('changed upstream paths are classified for porting', () => {
  const forkPoint = new Set([
    'juristi/skills/juristi/SKILL.md',
    'README.md',
    'CODEX.md',
    'seuranta/saadokset.json',
  ]);

  assert.equal(
    classify('juristi/skills/juristi/SKILL.md', 'M', mapPath, forkPoint).status,
    'mapped',
  );
  assert.equal(classify('README.md', 'M', mapPath, forkPoint).status, 'same-path');

  // CODEX.md exists upstream but was folded into AGENTS.md here: mapped-but-absent,
  // NOT "new upstream path".
  assert.equal(classify('CODEX.md', 'M', mapPath, forkPoint).status, 'missing-in-fork');

  // Added upstream after the fork point: the rename map was never built to know
  // about it, so it must be flagged rather than silently dropped.
  const added = classify('esimerkkiaineistot/uusi-case/README.md', 'A', mapPath, forkPoint);
  assert.equal(added.status, 'new-upstream');
  assert.equal(added.candidate, 'examples/uusi-case/README.md');

  // A deletion is never a new path, whatever the fork-point tree looks like.
  assert.equal(
    classify('esimerkkiaineistot/vanha-case/README.md', 'D', mapPath, forkPoint).status,
    'deleted-upstream',
  );
});

test('citation delta reports arrivals and departures, not line churn', () => {
  const diff = [
    'diff --git a/yhtiooikeus/skills/kaupparekisteri/SKILL.md b/yhtiooikeus/skills/kaupparekisteri/SKILL.md',
    '--- a/yhtiooikeus/skills/kaupparekisteri/SKILL.md',
    '+++ b/yhtiooikeus/skills/kaupparekisteri/SKILL.md',
    '@@ -1 +1 @@',
    '-Katso kaupparekisterilaki (129/1979) ja KKO:2024:15.',
    '+Katso kaupparekisterilaki (564/2023).',
    '@@ -9 +9 @@',
    '-Perustuslaki 731/1999 sanoo.',
    '+Suomen perustuslaki 731/1999 toteaa.',
  ].join('\n');

  const { added, removed } = citationDelta(diff);

  assert.deepEqual(added.map((c) => c.token), ['564/2023']);
  assert.deepEqual(removed.map((c) => c.token), ['129/1979', 'KKO:2024:15']);
  // 731/1999 sits on both sides: the sentence was rewritten around it, so it is
  // not a citation change and must not be reported.
  assert.ok(!added.concat(removed).some((c) => c.token === '731/1999'));
  assert.deepEqual(added[0].files, ['yhtiooikeus/skills/kaupparekisteri/SKILL.md']);
});

// The statute registry is the one file that ports mechanically, but it is not a
// file copy: the fork owns the description and may have renamed the JSON keys.
test('statute port takes upstream entries and keeps fork-owned fields', () => {
  const keys = { kuvaus: 'description', saadokset: 'statutes', numero: 'number', nimi: 'name' };

  const fork = {
    kuvaus: 'Fork description pointing at scripts/check-statutes.mjs',
    saadokset: [
      { numero: '731/1999', nimi: 'Suomen perustuslaki' },
      { numero: '132/1999', nimi: 'Maankäyttö- ja rakennuslaki' },
    ],
  };
  const upstream = {
    kuvaus: 'Upstream description pointing at scripts/tarkista-saadokset.mjs',
    saadokset: [
      { numero: '132/1999', nimi: 'Alueidenkäyttölaki' },
      { numero: '564/2023', nimi: 'Kaupparekisterilaki' },
    ],
  };

  const result = portStatuteEntries(fork, upstream, keys);

  assert.equal(result.ok, true);
  assert.equal(result.ported.kuvaus, fork.kuvaus, 'fork description must survive the port');
  assert.deepEqual(result.ported.saadokset, upstream.saadokset);
});

test('statute port expresses entries with the key names the fork uses', () => {
  const keys = { kuvaus: 'description', saadokset: 'statutes', numero: 'number', nimi: 'name' };

  // A fork whose dataKeys rename has already been applied.
  const fork = {
    description: 'Fork description',
    statutes: [{ number: '731/1999', name: 'Suomen perustuslaki' }],
  };
  const upstream = {
    kuvaus: 'Upstream description',
    saadokset: [{ numero: '564/2023', nimi: 'Kaupparekisterilaki' }],
  };

  const result = portStatuteEntries(fork, upstream, keys);

  assert.equal(result.ok, true);
  assert.deepEqual(result.ported.statutes, [{ number: '564/2023', name: 'Kaupparekisterilaki' }]);
  assert.equal(result.ported.saadokset, undefined, 'must not reintroduce upstream key names');
  assert.equal(result.ported.description, 'Fork description');
});

// An unfetched or absent upstream must be a warning, never a crash: CI can run
// in a shallow clone.
test('an unavailable upstream ref degrades to a clean skip', () => {
  const result = spawnSync(
    process.execPath,
    ['scripts/check-upstream-drift.mjs', '--to', 'upstream/definitely-not-a-ref'],
    { cwd: ROOT, encoding: 'utf8' },
  );

  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.match(result.stdout, /not checked/);
  assert.match(result.stdout, /Skipped, not failed/);
});

test('the provenance table drives the check and matches the rename map', () => {
  const agents = readFileSync(join(ROOT, 'AGENTS.md'), 'utf8');

  const upstream = agents.match(/^\|\s*Upstream\s*\|\s*`([^`]+)`\s*\|/m);
  const forkedAt = agents.match(/^\|\s*Forked at\s*\|\s*`([0-9a-f]{7,40})`\s*\|/m);
  const lastPorted = agents.match(/^\|\s*Last ported upstream commit\s*\|\s*`([0-9a-f]{7,40})`\s*\|/m);

  assert.ok(upstream, 'AGENTS.md has no parseable Upstream row');
  assert.ok(forkedAt, 'AGENTS.md has no parseable Forked at row');
  assert.ok(lastPorted, 'AGENTS.md has no parseable Last ported upstream commit row');

  // Both files record the fork point; they must not disagree.
  assert.equal(upstream[1], map.forkedFrom.repository);
  assert.ok(
    map.forkedFrom.commit.startsWith(forkedAt[1]) || forkedAt[1].startsWith(map.forkedFrom.commit),
    `AGENTS.md forked at ${forkedAt[1]}, rename-map says ${map.forkedFrom.commit}`,
  );
});

test('the drift workflow exists and runs the check', () => {
  const workflow = join(ROOT, '.github/workflows/upstream-drift.yml');
  assert.ok(existsSync(workflow), '.github/workflows/upstream-drift.yml is missing');

  const text = readFileSync(workflow, 'utf8');
  assert.match(text, /scripts\/check-upstream-drift\.mjs/);
  assert.match(text, /node-version: '24'/, 'must pin the same Node as the other workflows');
  assert.match(text, /schedule:/, 'the drift bridge is only useful if it is scheduled');
});
