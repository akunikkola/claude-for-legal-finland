// Covers the three gates added for rules the repository stated but never
// checked: manifest description language, output-language block PLACEMENT in
// templates, and the existence of every command AGENTS.md documents.
//
// Fixtures are synthetic rather than copies of the repository. The live tree
// changes continuously, so asserting against it would make these fail for
// reasons unrelated to the gates — the same reasoning as citation-gate.test.mjs.

import { cpSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import assert from 'node:assert/strict';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const EN_DESC =
  'Finnish employment law: drafting and reviewing an employment contract ' +
  '(tyosopimuslaki 55/2001). Use this skill when assessing the grounds for ending ' +
  'an employment relationship.';

// English prose that embeds a Finnish statute name — the case a naive
// Finnish-word detector gets wrong, and the reason this gate tests for the
// ABSENCE of English rather than the presence of Finnish.
const EN_WITH_FINNISH_NAME =
  'Finnish consumer law in transactions between a trader and a consumer ' +
  '(kuluttajansuojalaki 38/1978): defect liability and remedies, sekä the right of ' +
  'withdrawal. Use this skill when a consumer reports a defect.';

const FI_DESC =
  'Suomen tyooikeus: tyosopimuksen laatiminen ja tarkistus (tyosopimuslaki 55/2001), ' +
  'tyosuhteen paattamisen perusteen arviointi seka yhteistoiminta.';

const SKILL_MD = (description) =>
  ['---', 'name: employment-contract', `description: ${description}`, '---', '', '# Skill', ''].join('\n');

function makeDescriptionFixture({ collection, domainDescriptions }) {
  const root = mkdtempSync(join(tmpdir(), 'manifest-gate-'));
  mkdirSync(join(root, 'scripts'), { recursive: true });

  for (const script of ['check-descriptions.mjs', 'lib.mjs']) {
    cpSync(join(ROOT, 'scripts', script), join(root, 'scripts', script));
  }

  const plugins = domainDescriptions.map((description, i) => ({
    name: `domain-${i}`,
    displayName: `Domain ${i}`,
    source: `./domain-${i}`,
    description,
  }));

  for (const [i, description] of domainDescriptions.entries()) {
    const dir = join(root, `domain-${i}`);
    mkdirSync(join(dir, 'skills', 'employment-contract'), { recursive: true });
    writeFileSync(join(dir, 'plugin.json'), JSON.stringify({ name: `domain-${i}`, description }, null, 2));
    writeFileSync(join(dir, 'skills', 'employment-contract', 'SKILL.md'), SKILL_MD(EN_DESC));
  }

  writeFileSync(
    join(root, 'marketplace.json'),
    JSON.stringify({ name: 'fixture', displayName: 'Fixture', description: collection, plugins }, null, 2),
  );
  return root;
}

function run(root, script) {
  const r = spawnSync(process.execPath, [`scripts/${script}`], { cwd: root, encoding: 'utf8' });
  return { status: r.status, output: r.stdout + r.stderr };
}

function withFixture(build, script) {
  const root = build();
  try {
    return run(root, script);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

// ---------------------------------------------------------------------------
// Manifest description language
// ---------------------------------------------------------------------------

test('an English manifest passes', () => {
  const { status, output } = withFixture(
    () => makeDescriptionFixture({ collection: EN_DESC, domainDescriptions: [EN_DESC, EN_DESC] }),
    'check-descriptions.mjs',
  );

  assert.equal(status, 0, output);
  assert.doesNotMatch(output, /not in English/);
});

test('English prose embedding a Finnish statute name is not flagged', () => {
  // The whole reason the gate tests for absence of English: Finnish statute
  // names stay Finnish inside English descriptions by design, so any detector
  // keyed on Finnish words fires on every correct description.
  const { status, output } = withFixture(
    () =>
      makeDescriptionFixture({
        collection: EN_WITH_FINNISH_NAME,
        domainDescriptions: [EN_WITH_FINNISH_NAME, EN_DESC],
      }),
    'check-descriptions.mjs',
  );

  assert.equal(status, 0, output);
  assert.doesNotMatch(output, /not in English/);
});

test('a Finnish collection description is an error once every domain is English', () => {
  const { status, output } = withFixture(
    () => makeDescriptionFixture({ collection: FI_DESC, domainDescriptions: [EN_DESC, EN_DESC] }),
    'check-descriptions.mjs',
  );

  assert.equal(status, 1, output);
  assert.match(output, /collection description is not in English/);
});

test('it only warns while a domain is still Finnish, so no one sees red they cannot fix', () => {
  // Conditional severity, the same reasoning as the practice-profile rule: a
  // gate that goes red for something outside the committer's control trains
  // people to route around it.
  const { status, output } = withFixture(
    () => makeDescriptionFixture({ collection: FI_DESC, domainDescriptions: [EN_DESC, FI_DESC] }),
    'check-descriptions.mjs',
  );

  assert.equal(status, 0, output);
  assert.match(output, /warning while domains are still being translated/);
});

test('a vendor slug does not disguise a Finnish description as English', () => {
  // Regression test for a real false negative. The only English-looking token
  // in the Finnish collection description was the `for` inside
  // `claude-for-legal-kokoelmalle`, so the vendor name this gate also exists to
  // remove was single-handedly making the description look translated.
  const disguised = `${FI_DESC} Suomalainen vastine Anthropicin claude-for-legal-kokoelmalle.`;
  const { status, output } = withFixture(
    () => makeDescriptionFixture({ collection: disguised, domainDescriptions: [EN_DESC, EN_DESC] }),
    'check-descriptions.mjs',
  );

  assert.equal(status, 1, output);
  assert.match(output, /collection description is not in English/);
});

// ---------------------------------------------------------------------------
// Output-language declaration PLACEMENT in templates
// ---------------------------------------------------------------------------

const DECLARATION = [
  '## Output language',
  '',
  'Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.',
  '',
].join('\n');

const BODY = ['---', '', '**Recipient:** [name and address]', '', '### Details', ''].join('\n');

const MATRIX = [
  '# Output language matrix',
  '',
  '## Templates',
  '',
  '| Path | Category | Basis |',
  '|---|---|---|',
  '| `domain-0/templates/notice.md` | document | fixture |',
  '',
].join('\n');

function makeTemplateFixture(templateBody) {
  const root = mkdtempSync(join(tmpdir(), 'placement-gate-'));
  mkdirSync(join(root, 'scripts'), { recursive: true });
  mkdirSync(join(root, 'references'), { recursive: true });
  mkdirSync(join(root, 'domain-0', 'templates'), { recursive: true });
  mkdirSync(join(root, 'domain-0', 'skills'), { recursive: true });

  for (const script of ['check-output-language.mjs', 'lib.mjs']) {
    cpSync(join(ROOT, 'scripts', script), join(root, 'scripts', script));
  }

  writeFileSync(join(root, 'references/output-language-matrix.md'), MATRIX);
  writeFileSync(
    join(root, 'marketplace.json'),
    JSON.stringify(
      { name: 'fixture', plugins: [{ name: 'domain-0', source: './domain-0', description: EN_DESC }] },
      null,
      2,
    ),
  );
  writeFileSync(join(root, 'domain-0/templates/notice.md'), templateBody);
  return root;
}

test('a template declaring its output language above the body passes', () => {
  const { status, output } = withFixture(
    () => makeTemplateFixture(`# Template\n\n${DECLARATION}${BODY}`),
    'check-output-language.mjs',
  );

  assert.equal(status, 0, output);
});

test('a declaration inside the document body is an error, not merely present', () => {
  // Presence was the only thing measured before, and a translation branch based
  // on pre-fix text reintroduced this in two templates while the gate stayed
  // green. A template is filled in and then sent, so the declaration travels
  // with it into the filing.
  const { status, output } = withFixture(
    () => makeTemplateFixture(`# Template\n\n${BODY}\n${DECLARATION}`),
    'check-output-language.mjs',
  );

  assert.equal(status, 1, output);
  assert.match(output, /inside the document body/);
});
