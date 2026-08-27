---
name: document-review
description: >
  Systematic multi-stage quality review of a legal document in the Finnish
  context. Use this skill when a legal document has to be reviewed before it
  is used: a contract, a statement, an appeal, an administrative decision, a
  memorandum, a draft agreement, rules of procedure or any other legal
  document. It triggers when the user asks for a legal text to be reviewed,
  proofread or quality-assured, for risks or gaps to be found, or for a
  document to be checked before signature, before it is sent, or before it is
  filed with an authority or a court. The review covers citation correctness
  against Finlex and the mandatory content required by statutes such as
  hallintolaki 434/2003 and oikeustoimilaki 228/1929.
---

# Document review — multi-stage legal quality review

This skill reviews a legal document systematically in several stages. The aim
is to find the errors, the gaps and the risks before the document is put to
use. **Thoroughness comes before speed** — a careful review saves many times
over the time it takes.

> **Disclaimer:** this is a quality-assurance aid that **supplements** but does
> not replace human legal judgement. The final assessment of the quality of the
> document, of whether to accept the risk and of whether to use it is always
> made by a competent human. See `legal-core/AGENTS.md` → *Disclaimer*.

---

## Source checking is mandatory

Whenever the document refers to an act, a section or case law and the accuracy
of the reference matters, **use the `legal-research` skill** and check the
provision in the oik.ai/Finlex MCP. Do not confirm a statutory reference from
memory. If the source cannot be checked, mark the finding
`[could not be checked in the source]`.

For a one-off check of all the citations in a document you can use this
domain's **`source-checker` agent** (`agents/source-checker.md`): it extracts
every reference, verifies them against the source and returns a verification
table (✅/⚠️/❌) — worth running as a separate stage before the document is
sent.

## Word documents (.docx)

If the document that needs checking is a Word file, use the `adeu` MCP (where
available): `read_docx` reads the text together with its tracked changes and
comments, and `mode: "appendix"` reveals the **defined terms, the anchors and
the targets of cross-references** — make use of this in stages 3–4 (language,
structure, definitions). When you want to take the findings back into the
document, use `process_document_batch`, which writes the corrections as
**native Word tracked changes and comments** without breaking the formatting.
Set `author_name` clearly. Always read the IDs (`Chg:N`/`Com:N`) with a fresh
`read_docx` call before any accept, reject or reply action.

---

## The finding schema

Report every finding in this form, so that they can be traced:

```
ID: [stage#-severity-running number]
SEVERITY: [Critical / Significant / Minor]
STAGE: [1–8]
LOCATION: [section/item/page]
TYPE: [the class used in that stage]
DESCRIPTION: [what the problem is]
WHY IT MATTERS: [effect and risk]
SUGGESTED CORRECTION: [a concrete fix]
CONFIDENCE: [High / Medium / Low]
STATUS: [Open / Referred for specialist review]
```

Each stage states a **confidence level** and any **stop conditions** (critical
problems that must be resolved before going on).

---

## Stage 1 — Understanding the document and its context

Establish before reviewing:
- **Type of document**: a contract, a statement, an appeal or request for
  rectification, an administrative decision, a memorandum, rules of procedure
  or standing orders, a draft agreement, a draft bill or statute, a will, a
  power of attorney and so on. What are the established requirements for this
  type?
- **Jurisdiction and field of law**: Finnish national law, EU law, the special
  status of Åland, sector-specific regulation. Which acts are relevant?
- **Parties and audience**: who are the parties, who reads it, what is their
  legal competence and their bargaining position (e.g. consumer vs. trader,
  employer vs. employee, authority vs. party)?
- **Purpose**: what is the document meant to achieve?
- **Stakes and risk**: the financial, legal and reputational consequences if
  the document fails.

**Stop condition:** if the type of document or the jurisdiction cannot be
determined → ask the user before going on.

---

## Stage 2 — Usability and whether the structure serves its purpose

Do the form and the structure of the document serve its actual use?
- Is the form right for the content and the audience? Can the reader find what
  matters (headings, table of contents, clear items)?
- Are the obligations, rights, deadlines and actions clearly marked? Does the
  reader know what to do and when?
- **Financial commitments** (where the document involves payments): are the
  prices, the termination and cancellation terms, the automatic renewals and
  the escalation mechanisms clearly and visibly presented — not buried in a
  footnote?

---

## Stage 3 — Clarity of language and expression

Identify the linguistic problems before checking the substance (corrections
change the text).
- **Use the `legal-writing` skill and its references**
  (`../legal-writing/references/legal-language.md`,
  `../legal-writing/references/finnish-language.md`): compound words,
  punctuation, the form of section references, the 3-3-3 rule, consistent
  terminology.
- **Ambiguity**: vague expressions ("kohtuullinen aika", "viipymättä",
  "olennainen") — have they been defined or tied to their context?
- **Consistent terminology**: the same term for the same thing, no synonyms. A
  term that varies creates a dispute about interpretation.
- **False precision**: does the text promise an accuracy that cannot be
  delivered ("within 24 hours", when the real capacity is 2–3 working days)? Do
  lists of examples look exhaustive when they are only examples (add "muun
  muassa")?

---

## Stage 4 — Structural integrity

- **Internal references**: do the references to items and annexes point to
  items that exist? No orphans and no circular references.
- **Numbering and headings**: running and consistent, with no duplicates.
- **Definitions**: has every defined term actually been defined and used
  consistently? Are there unused or conflicting definitions?
- **External references**: if essential content sits only behind an external
  link or a separately referenced document that can change unilaterally — that
  is fragile. Mark it.
- **Completeness**: are the annexes that were promised included, and are the
  signature blocks and the parties complete?

---

## Stage 5 — Substantive correctness

Divide this into two levels according to what can reliably be checked.

### Level 1 — internal correctness (high confidence)
- **Internal consistency**: do the items contradict each other on the facts?
- **Defined terms**: are they used in accordance with their definition?
- **Calculations and dates**: do the sums, the percentages and the deadline
  calculations add up? Are the dates logical? **Check the calculation of the
  time limits** (e.g. working days vs. calendar days; public holidays; a due
  date falling at a weekend).
- **Currency**: does the document refer to a repealed act, an outdated
  standard, an authority that no longer exists or an old name (e.g. from before
  a reorganisation)?

### Level 2 — external sources of law (requires checking in the source)
**Check these with the `legal-research` skill (oik.ai/Finlex), not from
memory:**
- Statutory references: are the statute number, the section and the subsection
  correct and in force?
- Case references: is the case identifier correct, and does the decision
  support the claim?
- Mandatory legislation: does a term conflict with a mandatory provision (e.g.
  työsopimuslaki, kuluttajansuojalaki)?
- References to government bills: are the number and the page correct?

Mark every point that needs checking in the source as a finding with
`CONFIDENCE: Low` and `STATUS: Referred for specialist review`, unless it could
be checked in the MCP.

**Stop condition:** more than 5 level 1 correctness errors → correct them
before going on. Key statutory references could not be checked → refer to a
specialist.

---

## Stage 6 — Completeness and gap analysis

- **Coverage**: has everything necessary been dealt with? Are standard clauses
  missing (e.g. governing law, dispute resolution, term, termination,
  limitation of liability)?
- **Silence that hurts**:
  - **Allocation of responsibility**: is it clear who does what? Is there an
    obligation with nobody responsible for it?
  - **Consequences**: what happens if an obligation is breached? Is there a
    right with no means of enforcement?
  - **Order of precedence**: which term prevails in a conflict? Has an order of
    precedence been applied?
  - **Transition mechanics**: how do you get from state A to state B — who
    approves, who notifies, who acts, and in what order?
- **Scenario testing**: what happens in the key situations (breach of contract,
  delay, force majeure, termination)?
- **The mandatory parts for the type of document**: for a contract, the
  requirements for a contract to come into being; for an appeal, the claims,
  the grounds and the time limit; for an administrative decision, the reasons
  and the appeal instructions (Administrative Procedure Act, hallintolaki
  434/2003).

---

## Stage 7 — Risk and validity (risk signals, not conclusions)

**Every finding in this stage is a risk signal that needs a specialist's
assessment — not a final legal conclusion.**

- **Validity and enforceability**: could a term be invalid or open to
  adjustment? Finnish points of reference: adjustment under section 36 of the
  Contracts Act (oikeustoimilaki 228/1929), mandatory consumer protection, the
  mandatory nature of employment law, the limits on non-competition clauses,
  the reasonableness of a contractual penalty. **Check the relevant provisions
  with the `legal-research` skill.**
- **Logical and conditional errors**:
  - "If X then Y" structures where the condition has been deleted or is
    impossible.
  - A "mutual" obligation that is not in fact symmetrical.
  - An exception that swallows the main rule ("except as permitted by item X",
    where X permits everything).
- **Substantive inconsistencies**: a standard of care that varies, different
  thresholds or time limits in comparable situations, a right that is granted
  and then taken away elsewhere.
- **Balance and one-sidedness**: symmetry of termination and exit rights,
  unreasonable contractual penalties, a unilateral right of amendment.
  Particular attention to the protection of the weaker party (a consumer, an
  employee, a small business under standard terms).

**Recommendation** on the scale: *Proceed with reservations / Specialist review
recommended / Specialist review mandatory / Do not use without significant
correction.*

**Stop condition:** critical risk signals → refer to a specialist before going
on.

---

## Stage 8 — Readiness for use

- **Fitness for purpose**: does the document do its job? Are there any
  [COMPLETE THIS] items or placeholders left?
- **Professionalism and form**: is the formatting consistent? Are there
  spelling mistakes?
- **Readiness for signature and filing**: are the signature blocks, the parties
  and the dates in order? Does the document meet the formal requirements of the
  authority or the court (e.g. the content of an appeal and its annexes)?
- **Tone and ethics**: is the tone appropriate? Is anything misleading?
- **The critical findings from the earlier stages**: have they been resolved?

**Final recommendation**: *Ready for use / Ready subject to [X] / Not ready —
critical problems remain.*

---

## The closing report

Produce a concise summary at the end:

```
========================================
LEGAL DOCUMENT REVIEW REPORT
========================================
Document: [name/type]
Date: [date]
Reviewer: AI-assisted — needs checking by a human

SUMMARY OF FINDINGS
| ID | Severity | Stage | Location | Problem |
|---|---|---|---|---|

At a glance: Critical [X] · Significant [Y] · Minor [Z]

OVERALL ASSESSMENT: [Ready / Ready with reservations / Not ready / Requires significant correction]

CRITICAL FINDINGS: [list with IDs]

POINTS REQUIRING SPECIALIST REVIEW:
- [verification of statutory references in oik.ai/Finlex]
- [questions of validity and reasonableness]
- [legal positions open to interpretation]

NEXT STEPS: [prioritised list]

DISCLAIMER: This review was carried out by AI and supplements, it does not
replace, human legal judgement. The user is responsible for the outcome.
========================================
```

---

## What this skill does NOT do

- **Does not replace the final review by a competent human and does not carry
  responsibility for putting the document to use.** The skill surfaces the
  findings; accepting the risk and approving the document is always done by a
  human.
- **Does not confirm statutory references, case identifiers or government bill
  numbers from memory.** Level 2 findings are checked against the source with
  the `legal-research` skill; otherwise they are marked
  `[could not be checked in the source]`.
- **Does not reach final legal conclusions.** The observations in stage 7 are
  risk signals that need a specialist's assessment — not decisions on validity
  or enforceability.
- **Does not draft or correct the document for you.** It identifies the errors,
  the gaps and the risks and suggests corrections; the drafting itself is done
  by the subject-specific skill and by a human.
- **Does not guarantee that every risk is found.** However thorough it is, the
  review is an aid, not a guarantee of coverage; the most important points need
  a specialist's eye.
- **Does not cover the law of other countries.** Only Finnish law (with the
  relevant EU law noted separately); the special status of Åland and other
  jurisdictions must be stated separately.

## Continue from here

- The finding concerns a statutory reference, case law or whether a provision is in force → /legal-core:legal-research
- The linguistic findings from stage 3 need correcting and the text needs polishing → /legal-core:finnish-language or /legal-core:legal-writing
- The document under review is a contract whose terms need a deeper pass → /contracts:contract-review
- The document is a statement of claim, an appeal or another procedural document → /dispute-resolution:statement-of-claim or /administrative-law:administrative-appeal
- The document concerns termination of employment or data protection → /employment-law:termination-of-employment or /data-protection:privacy-notice
