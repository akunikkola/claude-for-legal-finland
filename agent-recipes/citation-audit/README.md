# citation-audit — periodic adversarial check of the repository's references

Checks **this repository's** statute numbers and case identifiers against the source: does the
number match the act it is claimed to be, is the act still in force, are the identifiers in examples
placeholders or real — and if real, do they assert something about a decision that has not been
checked.

> **This is a cookbook, not a finished product.** See [`../README.md`](../README.md).
> Unlike the other recipes, this one audits the repository's own content (trusted material), so the
> three-tier reader split is not needed — but the checking agents' adversarial assumption is the
> same: **a reference is wrong until the source shows otherwise.**

## Why statute-watch is not enough

[`statute-watch`](../statute-watch/) and the monthly CI run
(`.github/workflows/statute-watch.yml`) compare the **names** of the statutes in the register against
Finlex. That catches a change of name (MRL → alueidenkäyttölaki) but **not a repeal**: the name of a
repealed act does not change in Finlex. The July 2026 audit found exactly that — isyyslaki (11/2015)
and äitiyslaki (253/2018) were presented as being in force even though vanhemmuuslaki (775/2022)
repealed them on 1 January 2023, and the name watch had not raised the alarm. The audit also found
two uses of a genuine bill identifier on the wrong subject in example texts, and one wrong amending
act number — none of which name comparison can detect.

## Process

1. **Inventory** (a deterministic script, no model):

   ```sh
   node scripts/citation-inventory.mjs 7 /tmp/audit
   ```

   It extracts every `NNN/YYYY` reference with its contexts and splits them into batch files. Case
   identifiers (KKO:YYYY:NN and the rest) are inventoried separately:
   `grep -rnoE '(KKO|KHO|MAO|TT|VakO)[: ][0-9]{4}[:-][0-9]+' --include='*.md' .`

2. **Checking** — one [`source-checker`](../../legal-core/agents/source-checker.md) agent per batch,
   in parallel. For each number: (a) infer from the contexts which act the number is claimed to be;
   (b) fetch it from Finlex and compare; (c) check the repeal and replacement position; (d) return a
   verdict: `OK` / `NAME_MISMATCH` / `REPEALED` / `NOT_FOUND` / `UNCERTAIN` with reasons. The agent
   may not accept a reference from memory — every number is fetched.

3. **Case identifiers** — a separate checker, which classifies every occurrence: is it an example of
   form or an assertion about content; has the placeholder rule been followed
   ([`references/citation-style.md`](../../references/citation-style.md), section 4); and if the
   identifier is genuine and a content assertion is attached to it, the assertion is checked against
   the decision.

4. **Fixes** — `UNCERTAIN` is not on its own a ground for a fix: verify the uncertain ones with a
   second independent search, or with a human, before changing anything. Remember to regenerate
   SKILLS.md and the harness manifests if a frontmatter description changes
   (`bash scripts/check-generated.sh`), and to update `tracking/statutes.json` if the set of verified
   statutes changes.

## Rhythm

- **Quarterly**, and before any major release or marketing push.
- Whenever statute-watch raises a change of name (it signals a wider reform, in the course of which
  other things may also have changed).
- After a new domain is added, before merging.

## Known limitations

- Finlex's new interface renders with JavaScript — title information is visible to searches, but the
  wording of repealing provisions is not always. Where the oik.ai or laki.ai MCP is available, use it
  as the primary source; without it some verdicts will remain `UNCERTAIN` and need a human.
- The audit does not cover section-level assertions about content (what 7 § says) at the number
  level — those belong to the skills' own source discipline.

## Point of comparison

An audit of 3 228 case identifiers in the German sister project: about 58 % pointed to the wrong
matter, could not be found, or were unverified. This repository's July 2026 audit (137 statute
numbers and 6 case identifiers): 4 items to fix and 0 invented identifiers — the difference comes
from source discipline, and this recipe maintains it.
