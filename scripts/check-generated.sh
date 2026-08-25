#!/usr/bin/env bash
# Varmistaa, että generoidut tiedostot ovat ajan tasalla työpuussa:
#  - SKILLS.md (scripts/generate-skills-md.mjs)
#  - harnessiadapterit (scripts/generate-codex.mjs): Claude- ja Codex-
#    markkinapaikat, plugarimanifestit, .mcp.json-kuoret ja openai.yamlit
# Lähteet ovat marketplace.json, <plugari>/plugin.json ja <plugari>/mcp.json.
# Sama tarkistus ajetaan CI:ssä (validate.yml, release.yml) ja sen voi ajaa
# paikallisesti ennen committia: bash scripts/check-generated.sh
set -euo pipefail

node scripts/generate-skills-md.mjs
git diff --exit-code -- SKILLS.md || {
  echo "SKILLS.md ei ole ajan tasalla. Aja: node scripts/generate-skills-md.mjs"
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

node scripts/generate-codex.mjs
git diff --exit-code -- "${CODEX_PATHS[@]}" || {
  echo "Adapterit eivät ole ajan tasalla. Aja: node scripts/generate-codex.mjs"
  exit 1
}
untracked="$(git ls-files --others --exclude-standard -- "${CODEX_PATHS[@]}")"
if [ -n "$untracked" ]; then
  echo "Adapterien generointi loi commitista puuttuvia tiedostoja:"
  echo "$untracked"
  echo "Aja: node scripts/generate-codex.mjs ja lisää tiedostot committiin."
  exit 1
fi

echo "✓ Generoidut tiedostot ajan tasalla."
