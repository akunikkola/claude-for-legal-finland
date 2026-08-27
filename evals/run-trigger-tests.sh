#!/usr/bin/env bash
# Trigger tests: run the scenarios in evals/scenarios.json against a coding
# harness and check which skill the model invoked.
#
# A skill's description is the only signal a harness has for selecting it, so
# this is the only thing that measures whether the collection still works after
# a description change. Every scenario is a real model call and costs tokens —
# this is NOT run in CI. The offline part that is safe for CI is
# evals/check-scenarios.mjs.
#
# Harness-neutral by design: one adapter per harness, each answering the same
# question — given a prompt and a loaded domain, which skill did the model
# invoke? Add a harness by writing three runner_* functions and listing it in
# RUNNERS below. Nothing outside the adapter block knows which harness runs.
#
# Requires: bash, node (the repository has no other dependencies) and at least
# one supported harness on PATH. Deliberately no jq: node already ships with
# the repository's toolchain, so the eval runs wherever the validators do.
#
# Usage:
#   bash evals/run-trigger-tests.sh                        # every scenario
#   bash evals/run-trigger-tests.sh quick-fix-citation     # one scenario by id
#   EVAL_RUNNER=copilot bash evals/run-trigger-tests.sh    # pick the harness
#   EVAL_LANGS=en bash evals/run-trigger-tests.sh          # English only
#   EVAL_MODEL=claude-sonnet-5 bash evals/run-trigger-tests.sh
#   EVAL_DRY_RUN=1 bash evals/run-trigger-tests.sh         # plan only, no calls
#
# Exit codes:
#   0  no unexpected misses (known misses and skips are warnings)
#   1  at least one unexpected trigger miss
#   2  could not measure (no harness, harness not ready, run failed)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SCENARIOS="$ROOT/evals/scenarios.json"
CHECK="$ROOT/evals/check-scenarios.mjs"
READ_TRANSCRIPT="$ROOT/evals/read-transcript.mjs"

MODEL="${EVAL_MODEL:-}"            # empty = the harness default model
MAX_TURNS="${EVAL_MAX_TURNS:-3}"
LANGS="${EVAL_LANGS:-en,fi}"
DRY_RUN="${EVAL_DRY_RUN:-}"
ONLY_ID="${1:-}"

RUNNERS="claude codex copilot"

case "${ONLY_ID:-}" in
  -h|--help)
    awk 'NR > 1 { if ($0 !~ /^#/) exit; sub(/^# ?/, ""); print }' "$0"
    exit 0
    ;;
esac

command -v node >/dev/null 2>&1 || { echo "node is required (it reads scenarios.json)"; exit 2; }

# ---------------------------------------------------------------------------
# Adapters
#
# Contract, per harness <name>:
#   runner_available_<name>              exit 0 if the binary is on PATH
#   runner_preflight_<name> <domain>     echo a blocking reason, or nothing
#   runner_invoke_<name> <dir> <prompt>  print the raw transcript on stdout
#
# preflight is what keeps a half-configured harness from being reported as a
# collection regression: it says "not ready, here is why" instead of "missed".
# ---------------------------------------------------------------------------

# --- claude ----------------------------------------------------------------
# Loads one domain per run with --plugin-dir and emits stream-json.
runner_available_claude() { command -v claude >/dev/null 2>&1; }
runner_preflight_claude() { :; }
runner_invoke_claude() {
  local dir="$1" prompt="$2"
  local args
  args=(-p --plugin-dir "$dir" --strict-mcp-config
        --output-format stream-json --verbose --max-turns "$MAX_TURNS")
  [ -n "$MODEL" ] && args+=(--model "$MODEL")
  claude "${args[@]}" "$prompt" 2>&1 || true
}

# --- copilot ---------------------------------------------------------------
# Loads one domain per run with --plugin-dir and emits JSONL.
# --allow-all-tools is required for non-interactive mode, so run this from a
# scratch checkout: it grants the harness tool permissions for the session.
runner_available_copilot() { command -v copilot >/dev/null 2>&1; }
runner_preflight_copilot() { :; }
runner_invoke_copilot() {
  local dir="$1" prompt="$2"
  local args
  args=(--prompt "$prompt" --plugin-dir "$dir"
        --output-format json --allow-all-tools --no-color --log-level none)
  [ -n "$MODEL" ] && args+=(--model "$MODEL")
  copilot "${args[@]}" 2>&1 || true
}

# --- codex -----------------------------------------------------------------
# Codex has no per-run plugin flag, so the domain has to be installed first.
# That is a real difference between harnesses: the adapter reports it rather
# than running anyway and blaming the description for the miss.
runner_available_codex() { command -v codex >/dev/null 2>&1; }
runner_preflight_codex() {
  local domain="$1" installed
  if ! installed="$(codex plugin list 2>/dev/null)"; then
    return 0  # this codex build cannot be introspected; let the run proceed
  fi
  if ! printf '%s\n' "$installed" | grep -q -- "$domain"; then
    echo "plugin '$domain' is not installed (codex plugin marketplace add . && codex plugin add $domain@$MARKETPLACE)"
  fi
}
runner_invoke_codex() {
  local prompt="$2" args
  args=(exec --json --skip-git-repo-check --cd "$ROOT")
  [ -n "$MODEL" ] && args+=(--model "$MODEL")
  codex "${args[@]}" "$prompt" 2>&1 || true
}

# ---------------------------------------------------------------------------
# Runner selection
# ---------------------------------------------------------------------------

MARKETPLACE="$(node -e 'const fs=require("node:fs");process.stdout.write(JSON.parse(fs.readFileSync(process.argv[1],"utf8")).name)' "$ROOT/marketplace.json")"

RUNNER="${EVAL_RUNNER:-}"
if [ -z "$RUNNER" ]; then
  for candidate in $RUNNERS; do
    if "runner_available_$candidate"; then RUNNER="$candidate"; break; fi
  done
fi

if [ -z "$RUNNER" ]; then
  echo "No supported harness found on PATH — nothing was measured."
  echo "  supported: $RUNNERS"
  echo "  install one, or set EVAL_RUNNER=<name> once it is available."
  echo "  the offline check still works: node evals/check-scenarios.mjs"
  exit 2
fi

case " $RUNNERS " in
  *" $RUNNER "*) ;;
  *) echo "Unknown EVAL_RUNNER '$RUNNER' (supported: $RUNNERS)"; exit 2 ;;
esac

if ! "runner_available_$RUNNER"; then
  echo "EVAL_RUNNER=$RUNNER but '$RUNNER' is not on PATH — nothing was measured."
  echo "  install it, or choose another: $RUNNERS"
  exit 2
fi

# ---------------------------------------------------------------------------
# Plan
# ---------------------------------------------------------------------------

# check-scenarios.mjs validates before it lists, so a stale scenario fails here
# instead of turning into a wall of trigger misses nobody can act on.
if ! PLAN="$(node "$CHECK" --list "$LANGS")"; then
  echo "x evals/scenarios.json did not validate — fix it before spending tokens."
  exit 2
fi

if [ -n "$ONLY_ID" ]; then
  PLAN="$(printf '%s\n' "$PLAN" | awk -F '\t' -v id="$ONLY_ID" '$1 == id')"
  if [ -z "$PLAN" ]; then
    echo "No scenario with id '$ONLY_ID' in $SCENARIOS"
    exit 2
  fi
fi

PLANNED="$(printf '%s\n' "$PLAN" | grep -c . || true)"
echo "runner: $RUNNER   languages: $LANGS   model: ${MODEL:-<harness default>}"
echo "$PLANNED model call(s) planned — this costs tokens."
echo

if [ -n "$DRY_RUN" ]; then
  printf '%s\n' "$PLAN" | awk -F '\t' '{printf "  . %s [%s] -> %s/%s\n", $1, $4, $2, $3}'
  echo
  echo "dry run: no model was called."
  exit 0
fi

# ---------------------------------------------------------------------------
# Run
# ---------------------------------------------------------------------------

pass=0; fail=0; known=0; skipped=0
PREFLIGHT_CACHE=""   # "domain<TAB>reason" lines; plain string keeps bash 3.2 happy

preflight_for() {
  local domain="$1" cached
  cached="$(printf '%s\n' "$PREFLIGHT_CACHE" | awk -F '\t' -v d="$domain" '$1 == d { print "hit\t" $2; exit }')"
  if [ -n "$cached" ]; then
    printf '%s' "${cached#hit$'\t'}"
    return 0
  fi
  local reason
  reason="$("runner_preflight_$RUNNER" "$domain" || true)"
  PREFLIGHT_CACHE="$(printf '%s\n%s\t%s' "$PREFLIGHT_CACHE" "$domain" "$reason")"
  printf '%s' "$reason"
}

while IFS=$'\t' read -r id domain expected lang known_miss prompt; do
  if [ -z "${id:-}" ]; then continue; fi
  label="$id [$lang]"
  domain_dir="$ROOT/$domain"

  blocked="$(preflight_for "$domain")"
  if [ -n "$blocked" ]; then
    skipped=$((skipped + 1))
    echo "  -  $label - skipped: $blocked"
    continue
  fi

  # Candidates are the real directories in the domain, so the transcript reader
  # never guesses and a renamed skill cannot be mistaken for a pass. Kept as a
  # plain string rather than an array: skill names are kebab-case, and empty
  # arrays under 'set -u' are a portability trap on older bash.
  candidates=""
  for skill_dir in "$domain_dir/skills"/*/; do
    if [ -d "$skill_dir" ]; then candidates="$candidates $(basename "$skill_dir")"; fi
  done
  if [ -z "${candidates// /}" ]; then
    skipped=$((skipped + 1))
    echo "  -  $label - skipped: $domain has no skills/ directory"
    continue
  fi

  transcript="$("runner_invoke_$RUNNER" "$domain_dir" "$prompt")"
  # shellcheck disable=SC2086  # candidate names are kebab-case, word splitting is intended
  report="$(printf '%s' "$transcript" | node "$READ_TRANSCRIPT" $candidates)"

  status="$(printf '%s\n' "$report" | sed -n 's/^status=//p')"
  reason="$(printf '%s\n' "$report" | sed -n 's/^reason=//p')"
  confidence="$(printf '%s\n' "$report" | sed -n 's/^confidence=//p')"
  detect_note="$(printf '%s\n' "$report" | sed -n 's/^note=//p')"
  invoked="$(printf '%s\n' "$report" | sed -n 's/^skills=//p')"

  # An infrastructure failure is not a trigger miss. Stop rather than report a
  # run full of misses that only means the terminal is logged out.
  if [ "$status" = "error" ]; then
    echo "  !  $label - run failed: $reason"
    echo
    echo "x The harness did not run, so nothing was measured."
    echo "  Run trigger tests from a terminal where '$RUNNER' already works interactively."
    exit 2
  fi

  marker=""
  if [ "$confidence" = "low" ]; then marker=" (low confidence: plain-text transcript)"; fi
  if [ -n "$detect_note" ]; then marker="$marker (detection note: $detect_note)"; fi

  if printf ' %s ' "$invoked" | grep -q -- " $expected "; then
    pass=$((pass + 1))
    echo "  ok $label - triggered: ${invoked}${marker}"
  elif [ "$known_miss" = "1" ]; then
    known=$((known + 1))
    echo "  ~  $label - known miss repeated (invoked: ${invoked:-nothing})"
  else
    fail=$((fail + 1))
    echo "  x  $label - expected '$expected', invoked: ${invoked:-nothing}${marker}"
  fi
done <<< "$PLAN"

# ---------------------------------------------------------------------------
# Report
# ---------------------------------------------------------------------------

echo
echo "$pass triggered - $known known miss(es) - $fail unexpected miss(es) - $skipped skipped"

if [ "$skipped" -gt 0 ]; then
  echo "! $skipped scenario(s) were skipped, so those domains are unmeasured — that is not a pass."
fi

if [ "$fail" -gt 0 ]; then
  echo "x Unexpected trigger misses — check the description in the SKILL.md frontmatter."
  exit 1
fi
