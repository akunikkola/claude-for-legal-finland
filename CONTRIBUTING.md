# Contributing

Short instructions for anyone writing or editing the skills and domains in this repository. This is
not a style guide; these are the principles that matter most to the quality and safety of the
output.

## Design principle: SKILL.md encodes the correct behaviour, AGENTS.md is the safety net

Each domain contains two layers of instructions:

1. **`<domain>/skills/<skill>/SKILL.md`** – what this skill does, step by step. A narrow,
   task-specific structure.
2. **`<domain>/AGENTS.md`** – shared guardrails and the practice profile. Source marking, the
   requirement to be current, premise checking, the disclaimer, jurisdiction kept visible. A broad,
   domain-level safety net.

**If a skill's correct outcome depends on an `AGENTS.md` guardrail rescuing a mistake that SKILL.md
would have made, that is a design error.** Move the knowledge into SKILL.md. The guardrail stays in
place as life insurance, but the skill carries the knowledge it needs itself.

## Concrete rules

- **Rest on genuine sources.** The value of this repository is that its instructions rest on real
  Finnish sources: Finlex, oik.ai, Lainkirjoittajan opas, the drafting instructions for government
  bills, Kielitoimiston ohjepankki, statutes and case law. Do not invent sections, case identifiers
  or rules. Mark the source.
- **Attach the provenance marking to the number, not the paragraph.** `[model calculation — check]`
  next to the figure; `(410/2015, 7 §, Finlex)` after the provision.
- **Check the law against a source, not from memory.** Where the oik.ai/Finlex MCP is available,
  use it. Claims made from memory are clearly marked.
- **The disclaimer stays.** The output is always a draft that needs checking; human review
  before use is mandatory, and the human carries responsibility for the result.
- **Language.** Finnish-language skills follow the rules of Finnish usage and legal language (see
  the `finnish-language` and `legal-writing` skills in the `legal-core` domain). Each
  document-producing skill declares its output language; see
  [`references/glossary.md`](references/glossary.md) and
  [`references/output-language-matrix.md`](references/output-language-matrix.md).
- **Follow the shared citation standard.** For statutory, case law and preparatory-works citations:
  [`references/citation-style.md`](references/citation-style.md) (three-tier certainty marking,
  source hierarchy, the forms of case identifiers, discipline in examples). Never assert the content
  of a decision without checking it against the source.

## Adding a skill

1. Put the skill under the right domain: `<domain>/skills/<name>/SKILL.md`.
2. Write a clear `description` in the frontmatter: when the skill should trigger (Finnish triggers,
   statute numbers, the `§` symbol, document types). The frontmatter may contain **only `name` and
   `description`** – no other fields. `name` = kebab-case = the directory name.
3. Split detail into `references/` files where necessary and read them on demand.
4. Update the domain README and, if the set of domains changed, the root `marketplace.json`.
5. **Update the generated files:** `bash scripts/check-generated.sh` runs both generators
   (`generate-skills-md.mjs` → `SKILLS.md`, `generate-adapters.mjs` → the harness manifests) and
   confirms that nothing was left uncommitted. Do not hand-edit generated files (`SKILLS.md`,
   `.claude-plugin/`, `.codex-plugin/plugin.json`, `.mcp.json`, `agents/openai.yaml`).
6. **Run the validator and the tests before pushing:**
   - `node scripts/validate.mjs`
   - `node scripts/check-invariants.mjs`
   - `node scripts/check-portability.mjs` — every skill's references must resolve
     inside its own `<domain>/` directory; the unit of portability is the whole
     domain directory, not `skills/*`. `--report` prints a breakdown of where the
     references land (skill / sibling skill / domain / repository).
   - `node scripts/check-output-language.mjs`
   - `node scripts/check-safety-mechanisms.mjs`
   - `node scripts/check-citations.mjs`
   - `node scripts/check-descriptions.mjs`
   - `node evals/check-scenarios.mjs`
   - `node --test tests/*.test.mjs`
7. **If you changed a skill's `description`**, run the trigger evals
   (`bash evals/run-trigger-tests.sh`, see [evals/README.md](evals/README.md)) — the description is
   the only signal a skill triggers on, and bad wording loses the skill silently. Note: this makes
   real model calls, so it is not in CI. If you added or renamed a skill, also update
   [evals/scenarios.json](evals/scenarios.json).
8. **If the statistics change** (the number of domains, skills or subagents, the size of the statute
   register, the version), update the overview pages (`docs/index.html` (EN, the default) and
   `docs/fi/index.html`) and regenerate the OG share images — instructions and rendering commands:
   [docs/og-source.html](docs/og-source.html).

CI runs exactly the same checks (the validator, the gates, `check-generated.sh` and the tests), so
green locally means green in CI.

## Translation

The repository is being translated from Finnish to English.
[`references/glossary.md`](references/glossary.md) is the binding translation contract: terminology,
statute-name conventions, the do-not-translate list, certainty and risk markers, and the
digit-comma trap. Read it before translating anything, and follow it rather than reinventing terms.

## Licence

By contributing you agree that your work is published under the [MIT](LICENSE) licence.
