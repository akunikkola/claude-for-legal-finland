import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { basename, join } from 'node:path';

import {
  MARKETPLACE_DISPLAY_NAME,
  MARKETPLACE_NAME,
  REPOSITORY,
  ROOT,
  listDirs,
  readJSON as readJSONFile,
} from '../scripts/lib.mjs';

function readJSON(path) {
  return readJSONFile(join(ROOT, path));
}

// Neutraali marketplace.json on lähde; molemmat markkinapaikkatiedostot ovat
// siitä generoituja adaptereita.
test('neutral marketplace is the source and both harness marketplaces mirror it', () => {
  const neutral = readJSON('marketplace.json');
  const claude = readJSON('.claude-plugin/marketplace.json');
  const codex = readJSON('.agents/plugins/marketplace.json');

  assert.equal(neutral.name, MARKETPLACE_NAME);
  assert.equal(neutral.displayName, MARKETPLACE_DISPLAY_NAME);

  // Claude-adapteri: sama sisältö + Anthropicin $schema, jota neutraali
  // lähde ei kanna.
  assert.equal(claude.$schema, 'https://anthropic.com/claude-code/marketplace.schema.json');
  assert.equal(neutral.$schema, undefined);
  assert.equal(claude.name, neutral.name);
  assert.deepEqual(
    claude.plugins.map((p) => p.name),
    neutral.plugins.map((p) => p.name),
  );

  // Codex-adapteri
  assert.equal(codex.name, MARKETPLACE_NAME);
  assert.equal(codex.interface.displayName, MARKETPLACE_DISPLAY_NAME);
  assert.deepEqual(
    codex.plugins.map((plugin) => plugin.name),
    neutral.plugins.map((plugin) => plugin.name),
  );

  for (const plugin of codex.plugins) {
    const entry = neutral.plugins.find((item) => item.name === plugin.name);
    assert.equal(plugin.source.source, 'local');
    assert.equal(plugin.source.path, entry.source);
    assert.equal(plugin.policy.installation, 'AVAILABLE');
    assert.equal(plugin.policy.authentication, 'ON_INSTALL');
    assert.equal(plugin.category, 'Legal');
  }
});

test('each neutral plugin.json has matching Claude and Codex manifests', () => {
  const marketplace = readJSON('marketplace.json');

  for (const entry of marketplace.plugins) {
    const pluginRoot = entry.source.replace(/^\.\//, '');
    const neutral = readJSON(`${pluginRoot}/plugin.json`);
    const claudeManifest = readJSON(`${pluginRoot}/.claude-plugin/plugin.json`);
    const codexManifest = readJSON(`${pluginRoot}/.codex-plugin/plugin.json`);

    assert.equal(neutral.name, entry.name);
    assert.equal(neutral.displayName, entry.displayName);

    assert.equal(claudeManifest.name, neutral.name);
    assert.equal(claudeManifest.version, neutral.version);
    assert.equal(claudeManifest.description, neutral.description);
    assert.deepEqual(claudeManifest.author, neutral.author);

    assert.equal(codexManifest.name, neutral.name);
    assert.equal(codexManifest.version, neutral.version);
    assert.equal(codexManifest.description, neutral.description);
    assert.deepEqual(codexManifest.author, neutral.author);
    assert.equal(codexManifest.skills, './skills/');
    assert.equal(codexManifest.repository, REPOSITORY);
    assert.equal(codexManifest.license, 'MIT');
    assert.equal(codexManifest.interface.displayName, entry.displayName);
    assert.equal(codexManifest.interface.developerName, entry.author.name);
    assert.equal(codexManifest.interface.category, 'Legal');
    assert.ok(Array.isArray(codexManifest.interface.defaultPrompt));
    assert.ok(codexManifest.interface.defaultPrompt.length > 0);
    assert.ok(codexManifest.interface.shortDescription.length <= 160);

    // mcp.json on lähde; .mcp.json on siitä generoitu Claude-kuori.
    if (existsSync(join(ROOT, pluginRoot, 'mcp.json'))) {
      assert.deepEqual(codexManifest.interface.capabilities, ['Skills', 'MCP']);
      assert.equal(codexManifest.mcpServers, './.mcp.json');

      const neutralMcp = readJSON(`${pluginRoot}/mcp.json`);
      const shim = readJSON(`${pluginRoot}/.mcp.json`);

      assert.equal(typeof neutralMcp.mcpServers, 'object');
      assert.deepEqual(shim, neutralMcp, `${pluginRoot}: .mcp.json ei vastaa mcp.json-lähdettä`);
      assert.equal(existsSync(join(ROOT, pluginRoot, '.codex-plugin/mcp.json')), false);
    } else {
      assert.deepEqual(codexManifest.interface.capabilities, ['Skills']);
      assert.equal(codexManifest.mcpServers, undefined);
      assert.equal(existsSync(join(ROOT, pluginRoot, '.mcp.json')), false);
    }
  }
});

// Vendor-neutraalius: AGENTS.md on lähde, CLAUDE.md pelkkä osoitin.
test('AGENTS.md is the source of guidance and CLAUDE.md only points at it', () => {
  assert.ok(existsSync(join(ROOT, 'AGENTS.md')), 'juuren AGENTS.md puuttuu');
  assert.ok(existsSync(join(ROOT, 'CLAUDE.md')), 'juuren CLAUDE.md-osoitin puuttuu');
  assert.equal(existsSync(join(ROOT, 'CODEX.md')), false, 'CODEX.md pitäisi olla sulautettu AGENTS.md:hen');

  const rootAgents = readFileSync(join(ROOT, 'AGENTS.md'), 'utf8');
  assert.match(rootAgents, /Forked at/, 'AGENTS.md ei kerro fork-pistettä');
  assert.match(rootAgents, /Last ported upstream commit/, 'AGENTS.md ei kerro viimeksi portattua committia');

  const marketplace = readJSON('marketplace.json');
  for (const entry of marketplace.plugins) {
    const pluginRoot = entry.source.replace(/^\.\//, '');
    assert.ok(
      existsSync(join(ROOT, pluginRoot, 'AGENTS.md')),
      `${pluginRoot}/AGENTS.md puuttuu`,
    );

    const pointer = readFileSync(join(ROOT, pluginRoot, 'CLAUDE.md'), 'utf8');
    assert.match(pointer, /AGENTS\.md/, `${pluginRoot}/CLAUDE.md ei osoita AGENTS.md:hen`);
    assert.ok(
      pointer.length < 800,
      `${pluginRoot}/CLAUDE.md ei ole ohut osoitin — ohjeet kuuluvat AGENTS.md:hen`,
    );
  }
});

// Käy läpi KAIKKI generoidut agents/openai.yaml-tiedostot marketplacesta
// johdettuna — uudet skillit saavat kattavuuden automaattisesti ilman
// käsin listattuja polkuja.
test('every generated openai.yaml is structurally valid and matches its plugin mcp.json', () => {
  const marketplace = readJSON('marketplace.json');
  let generatedCount = 0;

  for (const entry of marketplace.plugins) {
    const pluginRoot = entry.source.replace(/^\.\//, '');
    const hasMcp = existsSync(join(ROOT, pluginRoot, 'mcp.json'));
    const servers = hasMcp ? readJSON(`${pluginRoot}/mcp.json`).mcpServers : {};

    for (const skillDir of listDirs(join(ROOT, pluginRoot, 'skills'))) {
      const yamlPath = join(skillDir, 'agents', 'openai.yaml');
      if (!existsSync(yamlPath)) continue;
      generatedCount += 1;

      const where = `${pluginRoot}/skills/${basename(skillDir)}/agents/openai.yaml`;
      assert.ok(hasMcp, `${where}: openai.yaml plugarissa, jolla ei ole mcp.json-tiedostoa`);

      const text = readFileSync(yamlPath, 'utf8');
      assert.match(text, /^# Generated by scripts\/generate-codex\.mjs/, `${where}: generointiotsake puuttuu`);
      assert.match(text, /interface:/, where);
      assert.match(text, /display_name:\s+"/, where);
      assert.match(text, /short_description:\s+"/, where);

      const blocks = text.split(/^ {4}- type: "mcp"$/m).slice(1);
      assert.ok(blocks.length > 0, `${where}: ei yhtään työkaluriippuvuutta`);

      for (const block of blocks) {
        const name = block.match(/value:\s+"([^"]+)"/)?.[1];
        assert.ok(name, `${where}: riippuvuudelta puuttuu value`);
        const server = servers[name];
        assert.ok(server, `${where}: riippuvuus '${name}' puuttuu plugarin mcp.json:sta`);

        // stdio ja http ovat toisensa poissulkevat
        assert.ok(
          Boolean(server.url) !== Boolean(server.command),
          `${where}: palvelimella '${name}' on oltava joko url tai command, ei kumpaakin`,
        );

        if (server.url) {
          assert.match(block, /transport:\s+"streamable_http"/, `${where}: ${name}`);
          assert.ok(block.includes(`url: "${server.url}"`), `${where}: ${name}: url ei vastaa mcp.json:ia`);
        } else {
          assert.match(block, /transport:\s+"stdio"/, `${where}: ${name}`);
          assert.ok(block.includes(`command: "${server.command}"`), `${where}: ${name}: command ei vastaa mcp.json:ia`);
        }
      }
    }
  }

  assert.ok(generatedCount > 0, 'yhtään generoitua openai.yaml-tiedostoa ei löytynyt');
});

// Tarkoitusankkurit: nämä skillit EDELLYTTÄVÄT kyseisiä työkaluriippuvuuksia.
// Rakennetesti yllä ei huomaa, jos tunnistus lakkaa löytämästä riippuvuutta
// (tiedosto vain katoaa) — tämä taulu huomaa. Uusi kriittinen skilli: lisää rivi.
// Polut päivittyvät Vaiheen 2 nimenmuutoksessa.
const EXPECTED_DEPENDENCIES = {
  'juristi/skills/oikeustutkimus': ['oik-ai'],
  'sopimukset/skills/sopimuksen-tarkistus': ['adeu', 'oik-ai'],
  'tekoalysaantely/skills/tekoaly-velvoitteet': ['eu-ai-act'],
  'julkiset-hankinnat/skills/tarjouspyynto-ja-tarjous': ['oik-ai'],
  'yhtiooikeus/skills/osakassopimus': ['adeu', 'oik-ai'],
  // lähdevarmistuksen luovutuspisteet
  'insolvenssi/skills/saatavien-perinta': ['oik-ai'],
  'lainvalmistelu/skills/lainkirjoittajan-opas': ['oik-ai'],
  'tekoalysaantely/skills/tekoaly-vaatimustenmukaisuus': ['eu-ai-act', 'oik-ai'],
};

test('mcp-dependent skills declare Codex tool dependencies', () => {
  for (const [skillPath, expected] of Object.entries(EXPECTED_DEPENDENCIES)) {
    const yamlPath = join(ROOT, skillPath, 'agents', 'openai.yaml');
    assert.ok(
      existsSync(yamlPath),
      `${skillPath}: agents/openai.yaml puuttuu — onko skilli siirretty tai riippuvuustunnistus rikki?`,
    );
    const text = readFileSync(yamlPath, 'utf8');
    for (const dependency of expected) {
      assert.match(
        text,
        new RegExp(`value:\\s+"${dependency}"`),
        `${skillPath}: odotettu riippuvuus '${dependency}' puuttuu`,
      );
    }
  }
});

// Nämä skillit eivät saa MCP-riippuvuuksia, vaikka teksti sivuaa oikeuslähteitä.
const FORBIDDEN_GENERATED_METADATA = [
  'juristi/skills/kaytantoprofiili',
  'juristi/skills/suomen-kieli',
];

test('skills without MCP dependencies do not retain stale generated metadata', () => {
  for (const skillPath of FORBIDDEN_GENERATED_METADATA) {
    const yamlPath = join(ROOT, skillPath, 'agents', 'openai.yaml');
    assert.equal(existsSync(yamlPath), false, `${skillPath}: odottamaton generoitu openai.yaml`);
  }
});

test('workflows run the shared generated-files check', () => {
  for (const workflow of ['.github/workflows/validate.yml', '.github/workflows/release.yml']) {
    const text = readFileSync(join(ROOT, workflow), 'utf8');
    assert.match(text, /scripts\/check-generated\.sh/, `${workflow}: yhteinen drift-tarkistus puuttuu`);
  }

  const script = readFileSync(join(ROOT, 'scripts/check-generated.sh'), 'utf8');
  assert.match(script, /generate-skills-md\.mjs/);
  assert.match(script, /generate-codex\.mjs/);
  assert.match(script, /git ls-files --others --exclude-standard/);
  assert.match(script, /\*\/skills\/\*\/agents\/openai\.yaml/);
  assert.match(script, /\*\/\.codex-plugin\/plugin\.json/);
  assert.match(script, /\.claude-plugin\/marketplace\.json/);
  assert.match(script, /\*\/\.mcp\.json/);
});
