#!/usr/bin/env bash
# Triggeritestit: ajaa evals/skenaariot.json-skenaariot headless-Claudella ja
# tarkistaa stream-json-lokista, kutsuiko malli odotettua skilliä.
#
# Vaatii: claude CLI (kirjautuneena) ja jq. HUOM: jokainen skenaario on oikea
# malliajo ja maksaa tokeneita — tätä EI ajeta CI:ssä, vaan käsin skillien
# kuvausmuutosten jälkeen. Ks. evals/README.md.
#
# Käyttö:
#   bash evals/aja-triggeritestit.sh                  # kaikki skenaariot
#   bash evals/aja-triggeritestit.sh pikakorjaus-viittaus   # yksi skenaario id:llä
#   EVAL_MODEL=claude-sonnet-5 bash evals/aja-triggeritestit.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SCEN="$ROOT/evals/skenaariot.json"
MODEL="${EVAL_MODEL:-}"        # tyhjä = ympäristön oletusmalli
MAXTURNS="${EVAL_MAX_TURNS:-3}"
VAIN_ID="${1:-}"

command -v claude >/dev/null || { echo "claude CLI puuttuu"; exit 2; }
command -v jq >/dev/null || { echo "jq puuttuu"; exit 2; }

pass=0; fail=0; hukat=0
count=$(jq '.skenaariot | length' "$SCEN")

for i in $(seq 0 $((count - 1))); do
  s=$(jq -c ".skenaariot[$i]" "$SCEN")
  id=$(jq -r .id <<<"$s")
  [ -n "$VAIN_ID" ] && [ "$id" != "$VAIN_ID" ] && continue

  plugari=$(jq -r .plugari <<<"$s")
  odotettu=$(jq -r .odotettu_skill <<<"$s")
  prompt=$(jq -r .prompt <<<"$s")
  tunnettu=$(jq -r '.tunnettu_hukka // false' <<<"$s")

  args=(-p --plugin-dir "$ROOT/$plugari" --strict-mcp-config
        --output-format stream-json --verbose --max-turns "$MAXTURNS")
  [ -n "$MODEL" ] && args+=(--model "$MODEL")

  out=$(claude "${args[@]}" "$prompt" 2>/dev/null || true)

  # Ajovirhe (esim. 401-autentikointi) ei ole triggerihukka — keskeytä heti,
  # muuten koko ajo raportoisi valheellisia hukkia.
  if jq -e 'select(.type? == "result") | .is_error == true' <<<"$out" >/dev/null 2>&1 \
     || grep -q "Failed to authenticate" <<<"$out"; then
    echo "  💥 $id — ajo epäonnistui (autentikointi/API-virhe), ei triggeritulos"
    echo "✗ Aja kirjautuneessa ympäristössä (claude toimii interaktiivisesti samassa terminaalissa)."
    exit 2
  fi

  # Poimi kaikki Skill-työkalukutsut striimistä (nimi voi olla plugari:skill).
  kutsutut=$(jq -r 'select(.type? == "assistant")
                    | .message.content[]?
                    | select(.type == "tool_use" and .name == "Skill")
                    | .input.skill' <<<"$out" 2>/dev/null | sort -u | paste -sd ' ' - || true)

  if [[ " ${kutsutut:-} " == *"$odotettu"* ]]; then
    pass=$((pass + 1))
    echo "  ✅ $id — triggeröityi: $kutsutut"
  elif [ "$tunnettu" = "true" ]; then
    hukat=$((hukat + 1))
    echo "  ⚠️  $id — tunnettu hukka toistui (kutsutut: ${kutsutut:-ei mitään})"
  else
    fail=$((fail + 1))
    echo "  ❌ $id — odotettu '$odotettu', kutsutut: ${kutsutut:-ei mitään}"
  fi
done

echo
echo "✅ $pass triggeröityi · ⚠️ $hukat tunnettua hukkaa · ❌ $fail odottamatonta hukkaa"
if [ "$fail" -gt 0 ]; then
  echo "✗ Odottamattomia triggerihukkia — tarkista skillien kuvaukset (SKILL.md description)."
  exit 1
fi
