---
name: tax-procedure-and-appeals
description: >
  Tax procedure and appeals against taxation in Finland (the Act on
  Assessment Procedure, laki verotusmenettelystä 1558/1995). Use this
  skill when the user has received an assessment decision, a
  reassessment or punitive tax increase decision or a tax audit report
  and is considering an appeal, is drafting a request for rectification
  to the Assessment Adjustment Board or an appeal to the administrative
  court or to KHO, is preparing an advance ruling application
  (Verohallinto or the Central Tax Board), or is responding to a request
  for information or a hearing letter from Verohallinto. Triggers on:
  assessment decision, request for rectification, tax appeal,
  reassessment, punitive tax increase, tax audit, request for
  information, advance ruling, KVL, Tax Recipients' Legal Services Unit,
  suspension of enforcement, oikaisuvaatimus, verovalitus,
  ennakkoratkaisu.
---

# Tax procedure and appeals

This skill structures the stages of tax procedure and drafts the appeal
documents. The fundamentals and the tiers of appeal:
`references/tax-fundamentals.md` — read it at the start of the task.

> **Disclaimer:** drafts are for review — not tax advice. Time limits
> and euro amounts are fetched from the source; responsibility for the
> calendar and for reporting rests with a human. See
> `taxation/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the Act and the time limits from the source

Fetch the applicable provisions of VML (1558/1995) and **especially the
time limits** (request for rectification VML section 64, appeal periods,
Verohallinto's powers to amend) with the
**`legal-core:legal-research` skill**. The tax year determines which
version applies — check which year's assessment is at issue. KHO's
yearbook case law is fetched from the source, with identifiers.

## Step 1: Situation assessment

Establish before taking any action:

- **Which decision, and for which tax year?** Regular assessment,
  reassessment to the taxpayer's detriment, punitive tax increase, an
  advance ruling — each has its own appeal route.
- **What stage is the process at?** A request for information or hearing
  (still open to influence before the decision!), the decision issued,
  the appeal period running `[model calculation — check]`.
- **The interest at stake and the evidence** — the euro amount in
  dispute, the documentation available, and the weak points in
  Verohallinto's reasoning.
- **Enforcement** — does the tax fall due despite the appeal; is a
  prohibition or suspension of enforcement needed (the conditions from
  the source).

## Step 2: Responding to a request for information or a hearing

The most effective point of influence is **before the decision**:

- Answer precisely what was asked; do not open new fronts.
- Document the facts with annexes; keep the facts and the legal
  assessment apart.
- Make the business reasons visible if the arrangement is suspected of
  being tax avoidance (VML section 28) or a disguised dividend (VML
  section 29).
- The risk of a punitive tax increase (VML section 32): voluntary
  correction of the error and co-operation are mitigating factors —
  raise this.

## Step 3: Request for rectification

Draft it with this structure:

1. **The decision being challenged** (tax year, date of decision,
   reference).
2. **The claims** — precisely, in euros and by reference to the basis of
   assessment.
3. **The grounds** — facts, evidence, legal assessment (provisions +
   KHO case law from the source, with three-tier certainty marking).
4. **Annexes** and the authorisation.

Remember: the Assessment Adjustment Board is a mandatory first instance
in income taxation — as a rule you cannot appeal directly to the
administrative court. VOVA may also appeal against a decision made in
the taxpayer's favour — be prepared for an opposing party.

## Step 4: Appeal to the administrative court and to KHO

- The general doctrine of administrative procedure:
  `administrative-law:administrative-appeal` (808/2019). This skill adds
  the tax-specific parts: specifying the claims by reference to the
  basis of assessment, the allocation of the burden of proof, and the
  grounds for leave to appeal to KHO in tax matters.
- An advance ruling by KVL is appealed directly to KHO.

## Advance ruling — managing uncertainty in advance

Where the tax treatment is open to interpretation and implementation
lies ahead:

- **An advance ruling from Verohallinto** — a matter for an individual
  taxpayer.
- **An advance ruling from KVL** — questions of general significance.
- The core of the application: **a precise question, a complete
  statement of facts and the planned implementation** — an advance
  ruling binds only in the circumstances described. Draft the
  application so that nothing material is left out; an incomplete
  statement of facts destroys its binding effect.

## What this skill does NOT do

- **Does not calculate the amount of tax with binding effect** and does
  not complete tax returns — calculations are
  `[model calculation — check]`.
- **Does not confirm time limits, interest rates or euro amounts from
  memory** — from the source or `[check the value for the tax year —
  vero.fi]`.
- **Does not guarantee an outcome** — only a binding advance ruling
  binds Verohallinto.
- **Does not assist with concealing income or evading the duty to
  report** — see the negative scope in AGENTS.md.
- **Does not file applications or appeals** — a human signs and is
  responsible for the time limits.

## Continue from here

- Checking a provision or a KHO decision from the source → /legal-core:legal-research
- The substantive corporate tax question behind the dispute → /taxation:corporate-taxation
- The VAT question behind the dispute → /taxation:value-added-tax
- General requirements of administrative procedure → /administrative-law:administrative-appeal
- The language and structure of the request for rectification → /legal-core:document-review
