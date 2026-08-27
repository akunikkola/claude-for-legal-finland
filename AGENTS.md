# AGENTS.md — Agent Skills for Finnish Law

Repository-wide guidance for coding agents and for any harness that loads these skills.
Per-domain guidance lives in `<domain>/AGENTS.md` and, per the [AGENTS.md convention](https://agents.md),
the closest file to the work wins.

> **Status: translation in progress.** The skill content in this repository is currently Finnish
> and is being translated to English. Until that lands, expect Finnish prose inside `SKILL.md`
> bodies and `references/`. The structure, tooling and manifests are already vendor-neutral.

---

## What this is

A collection of [Agent Skills](https://agentskills.io/specification.md) for Finnish legal work:
24 practice-area domains, 78 skills, 6 subagents and a registry of statutes verified against
Finlex. **The portable unit is a whole `<domain>/` directory** — copy one into any harness that
reads the Agent Skills format and it works, with no plugin system required. See
**Portability** below for what that does and does not include.

This is a hard fork of [`akunikkola/claude-for-legal-finland`](https://github.com/akunikkola/claude-for-legal-finland),
translated to English and de-vendored. See **Fork provenance** below.

---

## Non-negotiable rules for legal content

These apply to every change in this repository. They are not style preferences — they are what
keeps the output safe to put in front of a lawyer.

1. **Never invent a statute, section number or case identifier.** If you cannot verify it, say so.
   `[muistinvarainen — tarkista Finlexistä]` is an acceptable output; a fabricated `55/2001` is not.
2. **Keep the authoritative Finnish identifier.** Statute numbers (`55/2001`), court abbreviations
   (`KKO`, `KHO`, `MAO`, `KVL`), preparatory works (`HE 268/2014 vp`) and case identifiers
   (`KKO:2019:42`) are never translated — they are what is actually citable in Finlex.
3. **Attach provenance to the number, not the paragraph.** `(kuntalaki 410/2015, 7 §, Finlex)` next
   to the claim it supports, not a blanket caveat at the end of a section.
4. **Every disclaimer stays.** Translate `Vastuuvapaus:` lines and human-review gates; never delete
   one. A disclaimer alone is not protection — source verification, certainty marking, premise
   checking and the human review gate are.
5. **Jurisdiction stays visible.** This is Finnish law. Nothing here may read as generic legal
   guidance.
6. **`tracking/statutes.json` values stay Finnish.** `scripts/check-statutes.mjs` matches them
   against Finlex page titles. Translating them breaks the monthly watch, and breaks it silently.

---

## Repository layout — sources vs. generated adapters

The rule: **one vendor-neutral source, harness-specific adapters generated from it.**
Never hand-edit an adapter; change the source and regenerate.

| Path | Role |
|---|---|
| `marketplace.json` | **SOURCE** — the collection manifest |
| `<domain>/plugin.json` | **SOURCE** — domain manifest |
| `<domain>/mcp.json` | **SOURCE** — MCP servers, standard `mcpServers` schema |
| `<domain>/AGENTS.md` | **SOURCE** — shared guardrails for every skill in the domain |
| `<domain>/skills/<skill>/SKILL.md` | **SOURCE** — the skill itself |
| `.claude-plugin/marketplace.json` | generated |
| `.agents/plugins/marketplace.json` | generated |
| `<domain>/.claude-plugin/plugin.json` | generated |
| `<domain>/.codex-plugin/plugin.json` | generated |
| `<domain>/.mcp.json` | generated — Claude Code discovery shim |
| `<domain>/skills/<skill>/agents/openai.yaml` | generated — MCP-dependent skills only |
| `SKILLS.md` | generated index |

**On MCP naming:** MCP standardises the protocol, not a config filename. The neutral part is the
schema — an `mcpServers` map of stdio (`command`, `args`) or http (`url`) entries — which is what
`mcp.json` holds. `.mcp.json` exists only because Claude Code looks for that exact filename at
plugin root, so it is generated rather than authored.

**Why keep the plugin adapters at all?** The Agent Skills spec needs none of them — a conforming
harness works by copying skill directories. The adapters are kept for one reason that is not
convenience: `.mcp.json` is what wires Claude Code to the oik.ai/Finlex MCP server. That connection
is the premise of this collection — "never quote a statute from memory when it can be verified."
Without it a user installs the skills, gets no source verification, and the model silently falls
back to memory, which looks like it is working. The adapters are also generated, so the marginal
cost of keeping them is one script rather than 150 hand-maintained files. Supporting a third
harness means adding a function to `scripts/generate-adapters.mjs`, not restructuring the
repository.

---

## Portability

**The unit of portability is `<domain>/`, not `<domain>/skills/*`.**

An earlier version of this file claimed the narrower unit. It was not true, and the failure was
silent: skills point at their supporting files with backticked paths such as
`` `legal-core/AGENTS.md` `` or `` `../legal-writing/references/citations.md` ``, and those are not
markdown links, so the dead-link check in `scripts/validate.mjs` never looked at them. They resolve
inside the full repository and dangle outside it. Copying `real-estate-and-housing/skills/` on its
own breaks 4 references; copying `consumer-law/skills/` breaks 7. Copying the whole domain breaks
none.

A skill bundle reaches outside its own directory in three legitimate ways, and all three land
inside `<domain>/` rather than inside `<domain>/skills/`:

| What | Where it lives | Why a skill needs it |
|---|---|---|
| Shared guardrails | `<domain>/AGENTS.md` | disclaimer, source discipline, jurisdiction, review gate |
| Subagents | `<domain>/agents/*.md` | work the skill hands off, such as a source checker |
| Document templates | `<domain>/templates/*.md` | the skeleton a drafting skill fills in |

Skills also reference each other's `references/*.md` across `skills/`, so a **single** skill
directory is not portable either — `<domain>/skills/` is the smallest set that keeps those intact,
and it still misses the three rows above.

**The one caveat.** A handful of skills also point at repo-level supplementary material —
`references/`, `agent-recipes/` and the root `QUICKSTART.md`. That material does not travel with a
domain copy. Every current reference to it is optional context (background reading or an automation
recipe), never something the skill needs in order to run, so a domain copy still works. The set is
declared in `REPO_LEVEL` in `scripts/check-portability.mjs`; adding to it is a deliberate statement
that the reference is optional. If a skill ever *depends* on repo-level material, move the material
into the domain instead of widening the list.

`node scripts/check-portability.mjs` enforces all of this, and `--report` prints the tier
breakdown that this section is based on.

---

## Commands

```bash
node scripts/validate.mjs                 # structure, frontmatter, dead links, Unicode
node scripts/check-invariants.mjs         # stated AGENTS.md rules that have a mechanical check
node scripts/check-portability.mjs        # every skill reference resolves inside its domain
node scripts/check-output-language.mjs
node scripts/check-safety-mechanisms.mjs
node scripts/check-citations.mjs
node scripts/check-descriptions.mjs
node evals/check-scenarios.mjs            # every eval scenario resolves to a real domain and skill
bash scripts/check-generated.sh           # regenerate and fail if the tree drifted
node --test tests/*.test.mjs              # note: `node --test tests/` fails; the glob is required
```

No dependencies. Node standard library only — there is deliberately no `package.json`, so a
reviewer can clone and run the checks without installing anything.

CI runs exactly these, so locally green means green in CI. The trigger evals themselves
(`bash evals/run-trigger-tests.sh`) are the deliberate exception: each scenario is a real model
call, so they are run by hand and never in CI.

Generators:

```bash
node scripts/generate-adapters.mjs      # all harness adapters
node scripts/generate-skills-md.mjs  # SKILLS.md
```

Maintenance:

```bash
node scripts/check-statutes.mjs         # monthly Finlex name check
node scripts/check-upstream-drift.mjs   # what changed upstream since the last port
node scripts/citation-inventory.mjs     # every NNN/YYYY reference, grouped
node scripts/apply-rename.mjs --dry-run
```

---

## Validator traps

`scripts/validate.mjs` enforces these, and they bite during translation:

- **`/\d\s*,\s*\d/` in any `description` is a hard error.** English reintroduces it constantly via
  thousands separators and enumerations. Write `1 000`, not `1,000`; `sections 2 and 3`, not
  `sections 2, 3`.
- Frontmatter may contain **only** `name` and `description`. The Agent Skills spec also permits
  `license`, `compatibility`, `metadata` and `allowed-tools`; this repository rejects them so that
  licence and compatibility have one answer for the whole collection. Relaxing that is a deliberate
  decision that must also update `tests/`.
- `name` must be kebab-case, ≤64 characters, and **exactly equal to the parent directory name**.
- `description` ≤1024 characters, non-empty.
- Dead relative markdown links are errors. Every rename must update its cross-references.
- Zero-width, bidi and Cyrillic-homoglyph scanning.

The dead-link check covers **markdown links only**. A backticked path such as
`` `references/tools.md` `` is invisible to it — that is what `scripts/check-portability.mjs` is
for, and it is why 14 references survived the rename to English pointing at files that no longer
existed. Run both.

---

## Adding or changing a skill

1. Put it at `<domain>/skills/<name>/SKILL.md`. Exactly one level under `skills/`, so a harness can
   load every skill in the domain from one directory.
2. Write a `description` that says **what it does and when to use it**, with concrete trigger
   keywords. The description is the only signal a harness has for selecting the skill.
3. Push detail into `references/*.md` and let the agent read them on demand — keep `SKILL.md` under
   about 500 lines.
4. Keep every path the skill mentions inside its own `<domain>/` — see **Portability**. A reference
   to another domain, or to repo-level material the skill actually needs, is a portability bug.
5. Update the domain `README.md` and, if the domain set changed, `marketplace.json`.
6. Regenerate: `bash scripts/check-generated.sh`.
7. Verify: `node scripts/validate.mjs`, `node scripts/check-portability.mjs` and
   `node --test tests/*.test.mjs`.
8. If the skill is new or renamed, add or update its scenario in
   [`evals/scenarios.json`](evals/scenarios.json) and run `node evals/check-scenarios.mjs`. That
   check is offline and in CI; it exists because a scenario pointing at a skill that no longer
   exists never triggers and never fails either.
9. If you changed a `description`, run the trigger evals (`bash evals/run-trigger-tests.sh`, see
   [`evals/README.md`](evals/README.md)). They cost real model calls and are not in CI, but a badly
   worded description loses the skill silently.

---

## Fork provenance

| | |
|---|---|
| Upstream | `https://github.com/akunikkola/claude-for-legal-finland` |
| Forked at | `6294330` |
| Last ported upstream commit | `6294330` |

Upstream prose is Finnish and this fork's is English, so `git merge upstream/main` will never be
the right move. Upstream still fixes statute references, and that matters legally, so drift is
handled deliberately:

- `scripts/rename-map.json` maps every upstream path to its fork path. It is the single source of
  truth for the rename and is reused to translate upstream diffs into fork paths.
- `scripts/check-upstream-drift.mjs` reports what changed upstream since **Last ported upstream
  commit** above, mapped through that table, and flags upstream paths that have no mapping yet.
- Changes to `tracking/statutes.json` are language-independent and can be ported mechanically;
  prose changes are reviewed by hand.
- `.github/workflows/upstream-drift.yml` runs the check weekly. A statute-only change opens a pull
  request; anything else opens one issue per upstream head.

### Porting procedure

```bash
git fetch upstream
node scripts/check-upstream-drift.mjs
```

The report is ordered by signal, cheapest first.

1. **Citations changed upstream** come first: statute numbers and case identifiers that upstream
   added or removed. A changed citation is a legal-correctness problem even when the Finnish prose
   around it is irrelevant here, so read this section even if you port nothing else.
2. **Statute registry.** If the diff touches only `tracking/statutes.json`, run
   `node scripts/check-upstream-drift.mjs --port-statutes`. It takes upstream's statute entries,
   keeps this fork's own description and key naming, and — because that range contains nothing
   else — advances **Last ported upstream commit** for you. Review the numbers before committing.
3. **Everything else** is listed with its fork path already resolved. Port it by hand. A path marked
   `NO MAPPING` did not exist at the fork point: decide where it belongs and add a rule to
   `scripts/rename-map.json` before porting it, or it will be silently dropped every run from now on.

Then update **Last ported upstream commit** in the table above **in the same commit as the port**.
It is the only record of where the fork stands; a port that does not move it will be reported as
drift forever.

An absent or unfetched `upstream` remote is a warning, not a failure — the check is skipped rather
than crashing a shallow CI clone.

---

## Harness setup

### Claude Code

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install legal-core@agent-skills-for-finnish-law
```

### Codex

```bash
node scripts/generate-adapters.mjs
codex plugin marketplace add .
codex plugin add legal-core@agent-skills-for-finnish-law
```

If a domain's `mcp.json` declares the `oik-ai` server, check its status and sign in:

```bash
codex mcp list --json
codex mcp login oik-ai
```

### Any other harness

Copy the whole `<domain>/` directory. Point the harness's skill loader at `<domain>/skills/`;
`SKILL.md` is plain Agent Skills format with no vendor extensions. The rest of the directory has to
come along because skills reference it — see **Portability** above. If the harness supports MCP,
point it at `<domain>/mcp.json`.
