# Citation and source standard

**Version 1.0 – 4 June 2026.** This is the **shared, binding source standard** for the whole
`agent-skills-for-finnish-law` collection. Every domain's `AGENTS.md` points at this file, and
every skill follows it when it cites a statute, case law or preparatory works.

> **Principle:** source verification and making uncertainty visible are this collection's most
> important protection — not disclaimers. A closing note saying "not legal advice" protects
> nobody. What protects is that every claim carrying legal weight has either been **checked
> against a source** or been **clearly marked as needing checking.**

Detailed rules for Finnish usage and section references live in the `legal-core` domain:
[`legal-core/skills/legal-writing/references/citations.md`](../legal-core/skills/legal-writing/references/citations.md)
and [`.../sources.md`](../legal-core/skills/legal-writing/references/sources.md). This file is the
**common minimum standard** sitting above them.

---

## 1. Three-tier certainty marking (mandatory)

Every claim carrying legal weight belongs to one of three classes. The reader must see the class
**at a glance**, next to the claim.

| Class | When | How it is marked |
|---|---|---|
| **Verified** | The provision or decision has been retrieved and checked against a source (oik.ai/Finlex) in this session. | Source after the number: `(kuntalaki 410/2015, 7 §, Finlex)` or `(oik.ai)`. |
| **Needs checking** | Plausible but unverified: a provision recalled from memory, a figure or time limit the model calculated, an interpretation that requires an expert. | Flag next to the claim: `[from memory — verify in Finlex]`, `[model calculation — check]`, `[confirm — requires a lawyer's assessment]`. |
| **Do not use** | Cannot be checked and cannot be presented as certain: an invented case identifier, statute number or bill number, an unsourced quotation. | **Not produced at all.** If the information is essential, say that it must be checked — do not invent an identifier. |

**Never** present information in the Needs checking class as Verified. A general formulation
("under the settled case law of the Supreme Court…") is better than an invented precise identifier.

---

## 2. Source hierarchy

1. **Primary, official, verifiable:** Finlex (consolidated statutes, original statutes, case law),
   the oik.ai MCP, the Parliament of Finland's web service (government bills, committee reports),
   the courts' own publications, EUR-Lex (EU legislation), curia.europa.eu (CJEU).
2. **Secondary, indicative:** literature, commentaries, articles — only if the user supplies the
   source or a licensed live search confirms it.
3. **Not a source:** the model's memory alone. Information recalled from memory is always in the
   Needs checking class (see section 1).

**Always check that the statute is in force** (not repealed or amended) and that you have the
correct, current version. Take transitional provisions into account.

---

## 3. Citation forms

**Statutes**
- On first mention, name + number: *kuntalain (410/2015) 7 §:ssä*.
- The `§` symbol and the number **always together**: `7 §` (not "pykälä 7"); Finnish inflects with
  a colon: `§:n`, `§:ssä`, `§:ään`. In English write `section 7` or `7 §` — never `§7`.
- A range of sections takes an en dash: `2–4 §` (not a hyphen). Account for a-sections.
- Finnish statute names take a lower-case initial: *kuntalaki, rikoslaki*.

**Case law** — the case identifier exactly:
- Supreme Court: `KKO:YYYY:NN`. Supreme Administrative Court: `KHO:YYYY:NN` (four-digit year,
  running number without leading zeros).
- Court of appeal, Market Court, Labour Court, Insurance Court: each court's established identifier
  form; where there is no precedent number, use the docket number and the date of the decision.
- Court of Justice of the European Union: case `C-123/22` and the date of the judgment.
- **Never** attach a claim about a decision's content unless you have checked the decision against
  the source. The existence of an identifier is not enough — the same identifier may cover an
  entirely different matter (the commonest form of hallucination).

**Preparatory works**
- Government bill: `HE 268/2014 vp, s. 145` (`vp` = parliamentary session; page where a specific
  passage is cited).
- Committee reports by their established abbreviation (e.g. `PeVL`, `LaVM`).

**EU legislation**
- Regulation: *asetus (EU) 2024/1689* (number/year in the Union's style).
- Directive: *direktiivi (EU) 2019/790*. Name the national implementing act where there is one.

---

## 4. Discipline in examples (a lesson from the sister project)

An audit of 3 228 case identifiers in the German sister project found that roughly 58 % pointed to
the wrong matter, could not be found, or were unverified — and **identifiers embedded in example
texts leaked into real output.** Therefore:

- **In reference material and model texts use obvious placeholders:** `KKO:YYYY:NN`,
  `KHO:YYYY:NN`, `HE n/yyyy vp`, `[statute x/yyyy]`.
- If an example looks like a real identifier, **mark the whole example as invented**
  ("illustrative model, not a real decision").
- Never write a sentence into a model example that asserts the content of a particular real
  decision ("in KKO:2024:15 it was held that…") unless it is a checked quotation. Use either a
  placeholder or an open formulation: "…it was held in that decision that…".

---

## 5. Provenance attaches to the number, not the paragraph

The marking belongs **next to the line it applies to** — not at the end of the paragraph as a
general caveat. The reader then sees at a glance what has been checked and what is inference. Do
not collect all the caveats at the end of the text.

---

*Update the version number and date when the standard changes. The validator
(`scripts/validate.mjs`) polices the technical form of citations (including the digit-comma trap);
this file polices content and certainty.*
