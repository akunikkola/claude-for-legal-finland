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
Finlex. Each domain is a self-contained bundle — copy `<domain>/skills/*` into any harness that
reads the Agent Skills format and it works, with no plugin system required.

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

---

## Commands

```bash
node scripts/validate.mjs        # structure, frontmatter, dead links, Unicode
node --test tests/*.test.mjs     # note: `node --test tests/` fails; the glob is required
bash scripts/check-generated.sh  # regenerate and fail if the tree drifted
```

No dependencies. Node standard library only — there is deliberately no `package.json`, so a
reviewer can clone and run the checks without installing anything.

CI runs exactly these three, so locally green means green in CI.

Generators:

```bash
node scripts/generate-codex.mjs      # all harness adapters
node scripts/generate-skills-md.mjs  # SKILLS.md
```

Maintenance:

```bash
node scripts/check-statutes.mjs      # monthly Finlex name check
node scripts/citation-inventory.mjs  # every NNN/YYYY reference, grouped
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

---

## Adding or changing a skill

1. Put it at `<domain>/skills/<name>/SKILL.md`. Exactly one level under `skills/`, so any harness
   can copy the directory verbatim.
2. Write a `description` that says **what it does and when to use it**, with concrete trigger
   keywords. The description is the only signal a harness has for selecting the skill.
3. Push detail into `references/*.md` and let the agent read them on demand — keep `SKILL.md` under
   about 500 lines.
4. Update the domain `README.md` and, if the domain set changed, `marketplace.json`.
5. Regenerate: `bash scripts/check-generated.sh`.
6. Verify: `node scripts/validate.mjs` and `node --test tests/*.test.mjs`.
7. If you changed a `description`, run the trigger evals (`evals/`). They cost real model calls and
   are not in CI, but a badly worded description loses the skill silently.

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

When you port upstream work, update **Last ported upstream commit** in this table in the same
commit. It is the only record of where the fork stands.

---

## Harness setup

### Claude Code

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install legal-core@agent-skills-for-finnish-law
```

### Codex

```bash
node scripts/generate-codex.mjs
codex plugin marketplace add .
codex plugin add legal-core@agent-skills-for-finnish-law
```

If a domain's `mcp.json` declares the `oik-ai` server, check its status and sign in:

```bash
codex mcp list --json
codex mcp login oik-ai
```

### Any other harness

Copy `<domain>/skills/*` into the harness's skills directory. `SKILL.md` is plain Agent Skills
format with no vendor extensions. If the harness supports MCP, point it at `<domain>/mcp.json`.
