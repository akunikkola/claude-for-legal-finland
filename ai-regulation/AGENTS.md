# AI regulation — shared guardrails and operating principles

The instructions in this file apply to **every** skill in this domain. SKILL.md says
*what* is done; this file is the **safety net**.

> **Design principle:** AI Act doctrine belongs in SKILL.md and the references. These
> guardrails are the life insurance.

---

## A draft that a human reviews

Risk classifications, lists of obligations, penalty calculations and FRIA drafts are
**first assessments to be checked** — not legal advice. The final classification and the
compliance decisions belong to a specialist. The MCP itself repeats this reservation
("General guidance, not legal advice"). Mark points open to interpretation
`[confirm — requires a specialist's assessment]`.

## From the source, not from memory

This domain relies on the **`eu-ai-act` MCP** (deterministic, based on EUR-Lex). When it is
available:
- **Do not classify, list obligations, calculate penalties or state deadlines from memory** —
  call the corresponding tool (`euaiact_classify_system`, `euaiact_get_obligations`,
  `euaiact_calculate_penalty`, `euaiact_check_deadlines`,
  `euaiact_check_gpai_systemic_risk`, `euaiact_annex_iv_checklist`,
  `euaiact_assess_art6_3_exception`).
- Base article references on the EUR-Lex links from the `euaiact_get_article` tool.
- If the MCP is not available, say so and mark the assessment
  `[could not be checked in the source]`.

## The deadlines and the figures are fixed — not estimates

The transitional periods for application and the maximum amounts of the penalties come from
the Regulation. Fetch them with the tools and do not round them from memory. If some change
(for example the Digital Omnibus) is still only a proposal, say so clearly: the dates in
force are decisive until the change has been adopted and published in the Official Journal
of the European Union.

## Prohibited practices first

If the classification lands on the prohibited practices in Article 5, raise it immediately:
the system may not be placed on the market or put into service. Do not move on to the list
of obligations as though this were a permitted high-risk system.

## GDPR runs in parallel

The AI Act **does not replace** the General Data Protection Regulation. Profiling,
automated decision-making (GDPR Article 22), a DPIA (Article 35) and special categories of
data often fall to be assessed at the same time. Steer the user to the `data-protection`
domain where necessary.

## The national layer is still taking shape — do not invent it

As an EU regulation the AI Act is directly applicable in Finland, but **the national
competent authorities, the procedures and any supplementary legislation are still taking
shape.** Do not present designations of authorities or national provisions as verified.
Check the position in force with the `legal-core:legal-research` skill (oik.ai/Finlex) and
on the authorities' official pages; mark uncertain points
`[confirm — national regulation still taking shape]`.

## Shared standards

For statute, case-law and preparatory-works references, follow the marketplace's shared source standard [`references/citation-style.md`](../references/citation-style.md): three-tier certainty marking (Verified / Needs checking / Do not use), the source hierarchy and the correct forms for case identifiers. In short: attach the source to the number, do not present something unchecked as verified, and never assert what a decision says without having checked the decision in the source.

On liability, professional ethics (confidentiality, disqualification, who may represent) and data handling (GDPR Article 28 processing agreement, anonymisation before analysis): [`references/liability-and-security.md`](../references/liability-and-security.md). **A disclaimer alone is not protection** — protection comes from source verification, certainty marking, checking the premises, the negative scope limit and the human review gate.

## Practice profile (optional)

The organisation's register of AI systems, its roles and its standard practices can be
recorded here under the heading `## Practice profile`. Empty by default — do not invent it,
ask the user.
