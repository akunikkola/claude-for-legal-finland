import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function readJSON(path) {
  return JSON.parse(readFileSync(join(ROOT, path), 'utf8'));
}

test('codex marketplace mirrors the Claude marketplace', () => {
  const claudeMarketplace = readJSON('.claude-plugin/marketplace.json');
  const codexMarketplace = readJSON('.agents/plugins/marketplace.json');

  assert.equal(codexMarketplace.name, 'legal-for-finland');
  assert.equal(codexMarketplace.interface.displayName, 'Legal for Finland');
  assert.deepEqual(
    codexMarketplace.plugins.map((plugin) => plugin.name),
    claudeMarketplace.plugins.map((plugin) => plugin.name),
  );

  for (const plugin of codexMarketplace.plugins) {
    const claudePlugin = claudeMarketplace.plugins.find((item) => item.name === plugin.name);

    assert.equal(plugin.source.source, 'local');
    assert.equal(plugin.source.path, claudePlugin.source);
    assert.equal(plugin.policy.installation, 'AVAILABLE');
    assert.equal(plugin.policy.authentication, 'ON_INSTALL');
    assert.equal(plugin.category, 'Legal');
  }
});

test('each Claude plugin has an equivalent Codex plugin manifest', () => {
  const marketplace = readJSON('.claude-plugin/marketplace.json');

  for (const entry of marketplace.plugins) {
    const pluginRoot = entry.source.replace(/^\.\//, '');
    const claudeManifest = readJSON(`${pluginRoot}/.claude-plugin/plugin.json`);
    const codexManifest = readJSON(`${pluginRoot}/.codex-plugin/plugin.json`);

    assert.equal(codexManifest.name, claudeManifest.name);
    assert.equal(codexManifest.version, claudeManifest.version);
    assert.equal(codexManifest.description, claudeManifest.description);
    assert.deepEqual(codexManifest.author, claudeManifest.author);
    assert.equal(codexManifest.skills, './skills/');
    assert.equal(codexManifest.repository, 'https://github.com/akunikkola/claude-for-legal-finland');
    assert.equal(codexManifest.license, 'MIT');
    assert.equal(codexManifest.interface.displayName, entry.displayName);
    assert.equal(codexManifest.interface.developerName, entry.author.name);
    assert.equal(codexManifest.interface.category, 'Legal');
    assert.ok(Array.isArray(codexManifest.interface.defaultPrompt));
    assert.ok(codexManifest.interface.defaultPrompt.length > 0);
    assert.ok(codexManifest.interface.shortDescription.length <= 160);

    if (existsSync(join(ROOT, pluginRoot, '.mcp.json'))) {
      assert.deepEqual(codexManifest.interface.capabilities, ['Skills', 'MCP']);
      assert.equal(codexManifest.mcpServers, './.mcp.json');

      const claudeMcp = readJSON(`${pluginRoot}/.mcp.json`);
      const codexMcpSidecar = join(ROOT, pluginRoot, '.codex-plugin/mcp.json');

      assert.equal(typeof claudeMcp.mcpServers, 'object');
      assert.equal(existsSync(codexMcpSidecar), false);
    } else {
      assert.deepEqual(codexManifest.interface.capabilities, ['Skills']);
      assert.equal(codexManifest.mcpServers, undefined);
    }
  }
});

test('codex repo guidance and setup docs exist', () => {
  assert.ok(existsSync(join(ROOT, 'CODEX.md')));
});

test('mcp-dependent skills declare Codex tool dependencies', () => {
  const legalResearch = readFileSync(
    join(ROOT, 'juristi/skills/oikeustutkimus/agents/openai.yaml'),
    'utf8',
  );
  assert.match(legalResearch, /interface:/);
  assert.match(legalResearch, /display_name:\s+"oikeustutkimus"/);
  assert.match(legalResearch, /short_description:/);
  assert.match(legalResearch, /Suomalaisen voimassa olevan/);
  assert.match(legalResearch, /value:\s+"oik-ai"/);
  assert.match(legalResearch, /transport:\s+"streamable_http"/);
  assert.match(legalResearch, /url:\s+"https:\/\/oik\.ai\/mcp"/);

  const contractReview = readFileSync(
    join(ROOT, 'sopimukset/skills/sopimuksen-tarkistus/agents/openai.yaml'),
    'utf8',
  );
  assert.match(contractReview, /value:\s+"adeu"/);
  assert.match(contractReview, /value:\s+"oik-ai"/);

  const aiAct = readFileSync(
    join(ROOT, 'tekoalysaantely/skills/tekoaly-velvoitteet/agents/openai.yaml'),
    'utf8',
  );
  assert.match(aiAct, /value:\s+"eu-ai-act"/);

  const publicTender = readFileSync(
    join(ROOT, 'julkiset-hankinnat/skills/tarjouspyynto-ja-tarjous/agents/openai.yaml'),
    'utf8',
  );
  assert.match(publicTender, /value:\s+"oik-ai"/);

  const shareholderAgreement = readFileSync(
    join(ROOT, 'yhtiooikeus/skills/osakassopimus/agents/openai.yaml'),
    'utf8',
  );
  assert.match(shareholderAgreement, /value:\s+"adeu"/);
  assert.match(shareholderAgreement, /value:\s+"oik-ai"/);
});

test('skills without MCP dependencies do not retain stale generated metadata', () => {
  const practiceProfile = join(ROOT, 'juristi/skills/kaytantoprofiili/agents/openai.yaml');
  const finnishLanguage = join(ROOT, 'juristi/skills/suomen-kieli/agents/openai.yaml');

  assert.equal(existsSync(practiceProfile), false);
  assert.equal(existsSync(finnishLanguage), false);
});

test('source-verification handoffs still declare source-tool dependencies', () => {
  const debtCollection = readFileSync(
    join(ROOT, 'insolvenssi/skills/saatavien-perinta/agents/openai.yaml'),
    'utf8',
  );
  assert.match(debtCollection, /value:\s+"oik-ai"/);

  const billDrafting = readFileSync(
    join(ROOT, 'lainvalmistelu/skills/lainkirjoittajan-opas/agents/openai.yaml'),
    'utf8',
  );
  assert.match(billDrafting, /value:\s+"oik-ai"/);

  const aiCompliance = readFileSync(
    join(ROOT, 'tekoalysaantely/skills/tekoaly-vaatimustenmukaisuus/agents/openai.yaml'),
    'utf8',
  );
  assert.match(aiCompliance, /value:\s+"eu-ai-act"/);
  assert.match(aiCompliance, /value:\s+"oik-ai"/);
});

test('workflows fail on untracked generated Codex files', () => {
  for (const workflow of ['.github/workflows/validate.yml', '.github/workflows/release.yml']) {
    const text = readFileSync(join(ROOT, workflow), 'utf8');

    assert.match(text, /git ls-files --others --exclude-standard/);
    assert.match(text, /Codex-generointi loi commitista puuttuvia tiedostoja/);
    assert.match(text, /\*\/skills\/\*\/agents\/openai\.yaml/);
    assert.match(text, /\*\/\.codex-plugin\/plugin\.json/);
  }
});
