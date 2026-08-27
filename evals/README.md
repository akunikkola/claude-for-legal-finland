# Evaluation — trigger tests and quality grading

Two levels:

1. **Trigger tests** (this directory): does the right skill fire when a user
   makes a typical request?
2. **Quality grading** ([`../examples/`](../examples/)): once a skill fires, does
   the output meet the grading criteria?

A skill's `description` is the only signal a harness has for selecting it. That
makes rewriting descriptions the change most likely to break the collection
silently: the skill still exists, still validates, and simply stops being
chosen. These trigger tests are the only thing that measures it for real.

> **Cost warning:** both levels make real model calls and cost tokens. They are
> **not** run in CI. Run them by hand after changing a `description` or making a
> larger content change.
>
> The one part that *is* in CI is [`check-scenarios.mjs`](check-scenarios.mjs),
> which is entirely offline.

## Files

| File | Runs a model? | Purpose |
|---|---|---|
| [`scenarios.json`](scenarios.json) | – | The scenarios |
| [`check-scenarios.mjs`](check-scenarios.mjs) | no | Offline validation and coverage gate (**in CI**) |
| [`read-transcript.mjs`](read-transcript.mjs) | no | Turns a harness transcript into "which skill was invoked" |
| [`run-trigger-tests.sh`](run-trigger-tests.sh) | **yes** | The runner (**never in CI**) |

## Offline check

```sh
node evals/check-scenarios.mjs
```

Catches the failure mode that would otherwise be invisible: a scenario naming a
skill or domain that no longer exists never triggers, and never fails either —
the runner just reports a miss nobody can act on. The check verifies that

- every `domain` resolves to a directory and is listed in `marketplace.json`;
- every `expected_skill` resolves to `<domain>/skills/<skill>/`;
- ids are unique kebab-case and no unknown keys survive (this is what catches a
  Finnish key such as `plugari` outliving the rename);
- every domain has at least one scenario, and at least one `prompt_fi`;
- a `known_miss` carries a `note` saying why the miss is tolerated;
- a prompt never contains the skill name, so the test measures the description
  rather than string matching.

## Running the trigger tests

```sh
bash evals/run-trigger-tests.sh                        # every scenario
bash evals/run-trigger-tests.sh quick-fix-citation     # one scenario by id
EVAL_DRY_RUN=1 bash evals/run-trigger-tests.sh         # print the plan, call nothing
```

| Variable | Default | Meaning |
|---|---|---|
| `EVAL_RUNNER` | first harness found on `PATH` | `claude`, `codex` or `copilot` |
| `EVAL_LANGS` | `en,fi` | Which prompt languages to run |
| `EVAL_MODEL` | the harness default | Model override |
| `EVAL_MAX_TURNS` | `3` | Turn cap where the harness supports one |
| `EVAL_DRY_RUN` | unset | Print the plan and exit |

Exit codes: `0` no unexpected misses, `1` at least one unexpected miss, `2`
nothing could be measured. `2` is deliberately distinct from `1` — "the harness
never ran" must never be read as "the descriptions regressed".

**Run it from a logged-in terminal**, one where the harness already works
interactively. In an isolated environment a headless run fails with a `401`
because the login does not follow the config directory. The runner detects that,
stops, and says so instead of reporting a screenful of false misses.

### Harness adapters

The collection is vendor-neutral, so the eval harness is too. Each adapter
answers one question — *given a prompt and a loaded domain, which skill did the
model invoke?* — through three shell functions:

```
runner_available_<name>              exit 0 if the binary is on PATH
runner_preflight_<name> <domain>     echo a blocking reason, or nothing
runner_invoke_<name> <dir> <prompt>  print the raw transcript
```

Nothing outside the adapter block knows which harness is running. Detection is
shared, in `read-transcript.mjs`, because harnesses differ in how they are
launched and how they load a domain — not in what counts as evidence that a
skill was invoked.

| Harness | Loads a domain | Transcript | Notes |
|---|---|---|---|
| `claude` | `--plugin-dir`, per run | `stream-json` | Nothing to pre-install |
| `copilot` | `--plugin-dir`, per run | `--output-format json` | Needs `--allow-all-tools` for non-interactive mode, so run it from a scratch checkout |
| `codex` | installed ahead of time | `codex exec --json` | No per-run plugin flag, so the adapter checks `codex plugin list` first |

Codex is the case worth understanding: because it cannot load a domain per run,
the adapter reports **"not ready, here is the install command"** and skips,
rather than running against an unloaded domain and blaming the description for
the miss. Skipped scenarios are counted and called out separately in the
summary — a skip is not a pass.

Detection reports a confidence level. A structured tool call naming a skill is
`high`. If a harness emits no structured events at all, a plain-text fallback
reports `low`, marked in the output.

The fallback is deliberately hard to satisfy. Every harness lists its available
skills in the system prompt, so a naive "this line names a skill" match reports
the entire domain as triggered — that happened for real against a copilot
transcript, turning a miss into a nine-skill pass. The fallback therefore skips
anything that looks like a catalogue (`<skill>`, `<name>`, several skill names
on one line), requires wording that looks like an action rather than a listing,
and discards its own result entirely if it matches more than two skills, saying
so via a `note=` line. A false pass would hide the very regression these tests
exist to catch, so ambiguity resolves to "no trigger".

**Adding a harness:** write the three functions and add the name to `RUNNERS`.
If its transcript uses a shape `read-transcript.mjs` does not recognise, extend
the shared reader rather than the adapter.

### Scenario format

```json
{
  "id": "probation-dismissal-by-text",
  "domain": "employment-law",
  "expected_skill": "termination-of-employment",
  "prompt": "My employer ended my employment during the trial period by text message and gave no reasons. Was that lawful?",
  "prompt_fi": "Työnantajani purki työsuhteeni koeajalla tekstiviestillä ilman perusteluja. Oliko tämä laillista?"
}
```

`prompt` is English; `prompt_fi` is the Finnish variant. Both are measured
because descriptions keep Finnish legal terms as secondary keywords — a
description that reads well in English but has lost `koeaikapurku` still looks
fine to a reviewer and stops matching how a Finnish lawyer actually types. Every
domain carries at least one Finnish variant; the offline check enforces it.

A good scenario is a real user request, not a restatement of the skill name.
The point of the test is that the description catches genuine phrasing.

### Known misses

In the June 2026 evaluation, triggering worked on substantive questions (8/10),
but two scenarios systematically skipped the skill in headless mode on both
Sonnet 4.6 and Opus 4.8:

| Scenario | State | Note |
|---|---|---|
| Quick fix ("fix this reference") | Description tightened — `quick-fix-citation` now stands as a regression guard | If it misses again, a description change is not enough |
| "A document arrived, where do I start" | **Open** — flagged `known_miss: true` | The most dangerous miss: `engagement-intake` maps the deadlines first, and a direct answer can burn an appeal window. The domain `AGENTS.md` is the backstop, and the deadlines were in fact noticed in the evaluation even without the skill |

`known_miss: true` scenarios are reported as a warning, not a failure — they
tell you whether a known problem still exists. When one is fixed, drop the flag
and the scenario becomes a regression guard. The offline check requires a `note`
on every known miss, so none of them decays into a permanently ignored failure.

## Quality grading with grader agents

Three messy practice datasets with grading criteria:
[`../examples/`](../examples/). Recipe:

1. Copy the dataset files into a working directory **without** the grading
   criteria file (the model must not see the criteria).
2. Run the task with the skill (for example an engagement plus the material).
3. Grade the output with a **separate grader agent**, given the output and the
   grading criteria. The criteria are behaviour checklists — does it raise the
   contradictions, does it mark calculations for checking, does it leave
   sections unconfirmed rather than citing from memory — not model answers.

## Installation smoke test

In a clean environment:

```sh
claude plugin marketplace add <path to repo>
claude plugin install legal-core@agent-skills-for-finnish-law --scope user
```

**Note:** the login does not follow the config directory (macOS keychain), so
headless runs do not work in a clean directory. The smoke test only verifies
that installation works; trigger tests are run in your own default environment
with `--plugin-dir`.

## Earlier findings (worth keeping)

- **The `[check]` loophole:** an instruction saying "fetch from the source OR
  mark it `[check]`" let the model present an out-of-date threshold with a
  caveat (the FCCA's 2023 merger-control thresholds). Fix: forbid presenting the
  number at all without a source lookup. Worth checking for in new skills.
- **The domain `AGENTS.md` is a backstop:** even when a skill does not trigger,
  its guardrails (deadlines, citation form) still apply. That is why the
  guardrails belong in `AGENTS.md` and not only in the skill.
- **Always-on cost:** loading all 24 domains at once costs roughly 10 000 tokens
  of context. That is another reason the trigger tests load one domain at a
  time.
