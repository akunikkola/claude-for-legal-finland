#!/usr/bin/env bash
# Verifies that the generated files in the working tree are up to date:
#  - SKILLS.md (scripts/generate-skills-md.mjs)
#  - the harness adapters (scripts/generate-adapters.mjs): the Claude and Codex
#    marketplaces, the domain manifests, the .mcp.json shims and the openai.yamls
# The sources are marketplace.json, <domain>/plugin.json and <domain>/mcp.json.
# The same check runs in CI (validate.yml, release.yml) and can be run locally
# before committing: bash scripts/check-generated.sh
set -euo pipefail

node scripts/generate-skills-md.mjs
git diff --exit-code -- SKILLS.md || {
  echo "SKILLS.md is out of date. Run: node scripts/generate-skills-md.mjs"
  exit 1
}

CODEX_PATHS=(
  .claude-plugin/marketplace.json
  .agents/plugins/marketplace.json
  '*/.claude-plugin/plugin.json'
  '*/.codex-plugin/plugin.json'
  '*/.codex-plugin/mcp.json'
  '*/.mcp.json'
  '*/skills/*/agents/openai.yaml'
)

node scripts/generate-adapters.mjs
git diff --exit-code -- "${CODEX_PATHS[@]}" || {
  echo "The adapters are out of date. Run: node scripts/generate-adapters.mjs"
  exit 1
}
untracked="$(git ls-files --others --exclude-standard -- "${CODEX_PATHS[@]}")"
if [ -n "$untracked" ]; then
  echo "Generating the adapters created files that are missing from the commit:"
  echo "$untracked"
  echo "Run: node scripts/generate-adapters.mjs and add the files to the commit."
  exit 1
fi

echo "✓ Generated files are up to date."
