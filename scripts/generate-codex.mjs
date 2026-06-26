#!/usr/bin/env node
// Generoi Codex-yhteensopivat manifestit olemassa olevasta Claude-markkinapaikasta.
// Aja: node scripts/generate-codex.mjs
//
// Lähde pysyy edelleen .claude-plugin/marketplace.json:ssa ja kunkin plugarin
// .claude-plugin/plugin.json:ssa. Tämä skripti kirjoittaa:
//  - .agents/plugins/marketplace.json
//  - <plugari>/.codex-plugin/plugin.json
//  - <plugari>/skills/<skill>/agents/openai.yaml

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const REPOSITORY = 'https://github.com/akunikkola/claude-for-legal-finland';
const MARKETPLACE_NAME = 'legal-for-finland';
const MARKETPLACE_DISPLAY_NAME = 'Legal for Finland';
const CATEGORY = 'Legal';

function readJSON(path) {
  return JSON.parse(readFileSync(join(ROOT, path), 'utf8'));
}

function writeJSON(path, value) {
  const fullPath = join(ROOT, path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, `${JSON.stringify(value, null, 2)}\n`);
}

function writeText(path, value) {
  const fullPath = join(ROOT, path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, value);
}

function truncate(text, maxLength) {
  if (!text || text.length <= maxLength) return text || '';
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

function oneLine(text) {
  return String(text || '').replace(/\s+/g, ' ').trim();
}

function listDirs(path) {
  if (!existsSync(path)) return [];
  return readdirSync(path)
    .filter((name) => !name.startsWith('.'))
    .map((name) => join(path, name))
    .filter((entry) => statSync(entry).isDirectory());
}

function serverMapFromClaudeMcp(path) {
  const value = readJSON(path);
  return value.mcpServers || value.mcp_servers || value;
}

function readSkillMetadata(skillText, fallbackName) {
  const normalizedSkillText = skillText.replace(/\r\n?/g, '\n');
  const metadata = {
    name: fallbackName,
    description: fallbackName,
  };

  if (!normalizedSkillText.startsWith('---\n')) return metadata;

  const end = normalizedSkillText.indexOf('\n---', 4);
  if (end === -1) return metadata;

  const frontmatter = normalizedSkillText.slice(4, end).split('\n');

  for (let index = 0; index < frontmatter.length; index += 1) {
    const line = frontmatter[index];
    const nameMatch = line.match(/^name:\s*(.+)\s*$/);
    if (nameMatch) {
      metadata.name = nameMatch[1].replace(/^["']|["']$/g, '').trim() || fallbackName;
      continue;
    }

    const descriptionMatch = line.match(/^description:\s*(.*)\s*$/);
    if (!descriptionMatch) continue;

    const inline = descriptionMatch[1].trim();
    if (inline && !/^[>|][+-]?$/.test(inline)) {
      metadata.description = inline.replace(/^["']|["']$/g, '').trim();
      continue;
    }

    const parts = [];
    for (let cursor = index + 1; cursor < frontmatter.length; cursor += 1) {
      const next = frontmatter[cursor];
      if (/^\S/.test(next)) break;
      const value = next.trim();
      if (value) parts.push(value);
      index = cursor;
    }
    if (parts.length > 0) {
      metadata.description = oneLine(parts.join(' '));
    }
  }

  metadata.description = oneLine(metadata.description) || metadata.name;
  return metadata;
}

function detectSkillDependencies(skillText, serverNames, skillPath) {
  const text = skillText.toLocaleLowerCase('fi-FI');
  const dependencies = [];
  const skipOikAi = skillPath === 'juristi/skills/suomen-kieli';

  if (
    !skipOikAi &&
    serverNames.includes('oik-ai') &&
    (
      text.includes('oik.ai') ||
      text.includes('finlex-mcp') ||
      text.includes('oikeustutkimus') ||
      text.includes('hankintalaki') ||
      text.includes('osakeyhtiölaki') ||
      text.includes('osakeyhtiolaki') ||
      text.includes('oyl ') ||
      text.includes('oiktl') ||
      text.includes('tarkista laki lähteestä') ||
      text.includes('tarkista laki lahteesta')
    )
  ) {
    dependencies.push('oik-ai');
  }

  if (serverNames.includes('adeu') && text.includes('adeu')) {
    dependencies.push('adeu');
  }

  if (
    serverNames.includes('eu-ai-act') &&
    (
      text.includes('eu ai act') ||
      text.includes('euaiact') ||
      text.includes('tekoälyasetuksen') ||
      text.includes('tekoalyasetuksen')
    )
  ) {
    dependencies.push('eu-ai-act');
  }

  return dependencies;
}

function yamlQuote(value) {
  return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function dependencyDescription(name, server) {
  if (name === 'oik-ai') return 'Suomalainen lainsäädäntö, oikeuskäytäntö ja oikeuslähteet.';
  if (name === 'adeu') return 'Paikallinen Word-asiakirjojen luku ja natiivien jälkimuutosten kirjoitus.';
  if (name === 'eu-ai-act') return 'Paikallinen EU AI Act -MCP riskiluokitteluun, velvoitteisiin ja määräaikoihin.';
  return server.description || name;
}

function renderOpenAIYaml(dependencies, serverMap, skillMetadata) {
  const lines = [
    '# Generated by scripts/generate-codex.mjs. Do not edit by hand.',
    'interface:',
    `  display_name: ${yamlQuote(skillMetadata.name)}`,
    `  short_description: ${yamlQuote(truncate(skillMetadata.description, 160))}`,
    '',
    'dependencies:',
    '  tools:',
  ];

  for (const name of dependencies) {
    const server = serverMap[name];
    lines.push('    - type: "mcp"');
    lines.push(`      value: ${yamlQuote(name)}`);
    lines.push(`      description: ${yamlQuote(dependencyDescription(name, server))}`);

    if (server.type === 'http' || server.url) {
      lines.push('      transport: "streamable_http"');
      lines.push(`      url: ${yamlQuote(server.url)}`);
    } else if (server.command) {
      lines.push('      transport: "stdio"');
      lines.push(`      command: ${yamlQuote(server.command)}`);
      if (Array.isArray(server.args) && server.args.length > 0) {
        lines.push('      args:');
        for (const arg of server.args) {
          lines.push(`        - ${yamlQuote(arg)}`);
        }
      }
    }
  }

  return `${lines.join('\n')}\n`;
}

function writeSkillDependencyMetadata(pluginRoot, serverMap) {
  const serverNames = Object.keys(serverMap);
  const skillsDir = join(ROOT, pluginRoot, 'skills');

  for (const skillDir of listDirs(skillsDir)) {
    const skillName = basename(skillDir);
    const openAIYaml = `${pluginRoot}/skills/${skillName}/agents/openai.yaml`;
    const skillMd = join(skillDir, 'SKILL.md');
    if (!existsSync(skillMd)) {
      removeGeneratedText(openAIYaml);
      continue;
    }

    const skillText = readFileSync(skillMd, 'utf8');
    const skillPath = `${pluginRoot}/skills/${skillName}`;
    const dependencies = detectSkillDependencies(skillText, serverNames, skillPath);

    if (dependencies.length === 0) {
      removeGeneratedText(openAIYaml);
      continue;
    }

    const skillMetadata = readSkillMetadata(skillText, skillName);
    writeText(
      openAIYaml,
      renderOpenAIYaml(dependencies, serverMap, skillMetadata),
    );
  }
}

function removeGeneratedText(path) {
  const fullPath = join(ROOT, path);
  if (!existsSync(fullPath)) return;
  const text = readFileSync(fullPath, 'utf8');
  if (!text.startsWith('# Generated by scripts/generate-codex.mjs.')) return;
  unlinkSync(fullPath);
}

function removeGeneratedSkillDependencyMetadata(pluginRoot) {
  const skillsDir = join(ROOT, pluginRoot, 'skills');

  for (const skillDir of listDirs(skillsDir)) {
    const skillName = basename(skillDir);
    removeGeneratedText(`${pluginRoot}/skills/${skillName}/agents/openai.yaml`);
  }
}

const marketplace = readJSON('.claude-plugin/marketplace.json');

const codexMarketplace = {
  name: MARKETPLACE_NAME,
  interface: {
    displayName: MARKETPLACE_DISPLAY_NAME,
  },
  plugins: [],
};

for (const entry of marketplace.plugins) {
  const pluginRoot = entry.source.replace(/^\.\//, '');
  const claudeManifest = readJSON(`${pluginRoot}/.claude-plugin/plugin.json`);
  const hasMcp = existsSync(join(ROOT, pluginRoot, '.mcp.json'));
  const serverMap = hasMcp ? serverMapFromClaudeMcp(`${pluginRoot}/.mcp.json`) : null;

  const codexManifest = {
    name: claudeManifest.name,
    version: claudeManifest.version,
    description: claudeManifest.description,
    author: claudeManifest.author,
    homepage: `${REPOSITORY}/tree/main/${pluginRoot}`,
    repository: REPOSITORY,
    license: 'MIT',
    keywords: ['legal', 'finland', 'finnish-law', entry.name],
    skills: './skills/',
    interface: {
      displayName: entry.displayName || entry.name,
      shortDescription: truncate(claudeManifest.description, 160),
      longDescription: entry.description || claudeManifest.description,
      developerName: entry.author?.name || claudeManifest.author?.name || marketplace.owner?.name,
      category: CATEGORY,
      capabilities: hasMcp ? ['Skills', 'MCP'] : ['Skills'],
      defaultPrompt: [
        truncate(`Käytä ${entry.displayName || entry.name} -plugaria Suomen oikeuden tehtävään.`, 120),
      ],
    },
  };

  if (hasMcp) {
    codexManifest.mcpServers = './.mcp.json';
    const staleCodexMcpPath = join(ROOT, pluginRoot, '.codex-plugin/mcp.json');
    if (existsSync(staleCodexMcpPath)) {
      unlinkSync(staleCodexMcpPath);
    }
    writeSkillDependencyMetadata(pluginRoot, serverMap);
  } else {
    removeGeneratedSkillDependencyMetadata(pluginRoot);
  }

  writeJSON(`${pluginRoot}/.codex-plugin/plugin.json`, codexManifest);

  codexMarketplace.plugins.push({
    name: entry.name,
    source: {
      source: 'local',
      path: entry.source,
    },
    policy: {
      installation: 'AVAILABLE',
      authentication: 'ON_INSTALL',
    },
    category: CATEGORY,
  });
}

writeJSON('.agents/plugins/marketplace.json', codexMarketplace);
console.log(`Codex-manifestit generoitu: ${codexMarketplace.plugins.length} plugaria.`);
