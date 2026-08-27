---
name: administrative-decision
description: >
  Drafting and reviewing a Finnish administrative decision under the Administrative
  Procedure Act (hallintolaki 434/2003): the requirements of good administration,
  handling of the matter, hearing a party, disqualification, the duty to give reasons
  and appeal instructions. Use this skill when the user drafts or reviews a decision by
  an authority, an administrative decision (hallintopäätös), an official's decision or
  another ruling in an administrative matter, or asks about hearing a party,
  disqualification (esteellisyys), the duty to give reasons, good administration or the
  formal requirements for a decision.
---

# Administrative decision — drafting and review (hallintolaki 434/2003)

This skill helps you draft and review an administrative decision so that it meets the
Administrative Procedure Act (hallintolaki 434/2003) and the requirements of good
administration. In administrative procedure a **procedural error can lead to the decision
being annulled** on appeal, so the procedure matters as much as the substantive outcome.

> **Disclaimer:** a draft or assessment for review — not legal advice. The authority answers
> for its own decision. See `administrative-law/AGENTS.md`. Fundamentals: `references/administrative-law-fundamentals.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law and the basis for competence at source
Look up the provisions of the Administrative Procedure Act (434/2003) and of the applicable
**special statute** (which confers the competence and sets the substantive conditions) with the
**`legal-core:legal-research` skill**. Also check the authority's competence (kuntalaki 410/2015,
administrative rules) — an administrative decision made without competence is void.

## The requirements of good administration (hallintolaki 6 §)
Keep these in mind throughout: **equality, purpose limitation, objectivity, proportionality and
the protection of legitimate expectations.** The decision must rest on law and on proper grounds,
not on improper motives.

## Checklist

### Handling the matter
- **Competence:** does the deciding authority or official have competence in this matter?
- **Disqualification:** is the person handling the matter disqualified (an interest, a close relation, an earlier role)? A disqualified person may not take part.
- **Investigation of the matter:** has the matter been investigated sufficiently (the duty to investigate)?
- **Hearing a party:** has the party been heard before the decision, where the decision may affect their interest or right? Failure to hear a party is a common ground for annulment — establish the basis if no hearing is held.

### Content and form of the decision
- **Identification:** the deciding authority, the matter, the parties, the outcome.
- **Reasons:** the decision **must be reasoned** — which facts and evidence carried weight and which provisions were applied. Inadequate reasoning is a risk of annulment.
- **Provisions applied:** name them (statute plus section), checked at source.
- **Appeal instructions:** attach the correct instructions — request for rectification or appeal, to whom, within what time, and how (see the `administrative-appeal` skill). Wrong or missing instructions are an error.
- **Service:** how and when the decision is served (this affects when the appeal period starts).

## Workflow
1. Establish: the matter, the parties, the applicable special statute and the basis for competence, and what has already been done (hearing, evidence).
2. Look up the provisions with the `legal-research` skill.
3. Draft or review the decision against the checklist above. Raise any procedural errors (failure to hear a party, disqualification, missing reasons or instructions) → a risk of annulment.
4. Produce the decision (a new one: the `docx` skill; editing an existing one with tracked changes: the `adeu` MCP). Mark the passages that need completing and add `[confirm — requires an administrative-law specialist's assessment]`.

## Report
Produce the decision or assessment with source references (the Administrative Procedure Act plus
the special statute, sections checked). Keep the substantive outcome, its reasoning and the
assessment of the procedure clearly apart. Highlight any risks of annulment.

## What this skill does NOT do
- **It does not make the authority's decision and does not replace the authority's responsibility.** It produces a draft for review; the authority answers for its decision and for its lawfulness.
- **It does not confirm the basis for competence or any time limit from memory.** Competence (the special statute, kuntalaki 410/2015, administrative rules) and appeal time limits are looked up at source, statute by statute.
- **It does not settle the substantive legal question conclusively.** Conditions open to interpretation and the assessment of evidence are the responsibility of an administrative-law specialist.
- **It does not draft an appeal or assess an appeal's prospects** — that belongs to the `administrative-appeal` skill.
- **It does not make a public-access or confidentiality decision** on documents connected with the decision; that belongs to the `public-access-and-information-requests` skill.
- **Finnish administrative law only.** It does not apply to administrative procedure in other countries or to private-law matters.

## Continue from here
- If the decision is appealed → /administrative-law:administrative-appeal
- Checking statutes and time limits → /legal-core:legal-research
- Checking the language and formal requirements of the decision before service → /legal-core:document-review
- If documents connected with the decision are requested or released → /administrative-law:public-access-and-information-requests
