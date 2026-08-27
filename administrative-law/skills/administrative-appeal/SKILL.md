---
name: administrative-appeal
description: >
  Appealing against a Finnish administrative decision: request for rectification
  (oikaisuvaatimus), administrative appeal to the administrative court and appeal to the
  Supreme Administrative Court (KHO) under the Act on Judicial Procedure in Administrative
  Matters (laki oikeudenkäynnistä hallintoasioissa 808/2019) — the right of appeal, time
  limits, the content of the appeal and leave to appeal. Use this skill when the user is
  appealing or considering an appeal against an authority's decision, drafts a request for
  rectification or an appeal, or asks about the appeal period, the right of appeal, the
  grounds for leave to appeal or which appeal route applies.
---

# Appealing against an administrative decision

This skill helps you appeal against an authority's decision by the right procedure and within
the time limit. **The appeal period is absolute** — a late appeal is dismissed without being
examined, so the time limit must be established at once.

> **Disclaimer:** a draft or assessment for review — not legal advice. See
> `administrative-law/AGENTS.md`. Fundamentals: `../administrative-decision/references/administrative-law-fundamentals.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the appeal route, the time limit and the law at source
- Read the **appeal instructions attached to the decision** first — they give the route, the recipient and the time limit.
- Confirm the Act on Judicial Procedure in Administrative Matters (808/2019) and the applicable **special statute** (which may change the time limit, the need for leave to appeal or the appeal route) with the **`legal-core:legal-research` skill**.
  **Do not state a time limit from memory** — look it up and record the source; if you cannot check it, mark it `[check the time limit]`.

> **Template:** [`templates/request-for-rectification.md`](../../templates/request-for-rectification.md) — the structural skeleton of a request for rectification (time limit first).

## Step 1: Identify the correct appeal route
- **Request for rectification (oikaisuvaatimus)** — in many matters a mandatory first stage, to the same authority, before an appeal. Check whether the matter requires a request for rectification first.
- **Administrative appeal to the administrative court** — the main route against an administrative decision; the grounds of appeal are broad (legality plus expediency, unless restricted).
- **Municipal appeal (kunnallisvalitus)** — municipal matters have their own route (kuntalaki 410/2015); the grounds of appeal are narrower (an appeal on legality: the decision is unlawful, was made in the wrong order, or the authority exceeded its competence).
- **Appeal to the Supreme Administrative Court** — against a decision of the administrative court; **leave to appeal** is often required (check the grounds for leave).

## Step 2: Check the right of appeal
Is the author of the document, or the client, a **party** or someone else with a right of appeal
(the decision is directed at them or affects their right, interest or obligation directly)? In a
municipal appeal the right of appeal is wider (any member of the municipality).

## Step 3: Draft the request for rectification or the appeal
Include the following (check the precise content requirements in 808/2019):
1. **Which decision** is being appealed against (identification: the authority, the date, the matter or case number).
2. **In what respect** the decision is challenged and **what change** is sought (the claim).
3. **Grounds** — why the decision is wrong (unlawfulness, procedural error, wrong facts). Refer to the law and to the evidence.
4. **The appellant's details** and contact information; any representative and power of attorney.
5. **Appendices** (the decision appealed against, the evidence).
6. Delivery to the correct authority or court within the time limit.

## Step 4: Report
Produce the draft request for rectification or appeal together with an **appeal checklist** (the
route, the time limit with its source, the right of appeal, the content requirements, the
appendices, how it is delivered). Mark it `[confirm — the appeal period and any need for leave to
appeal must be verified]` and stress that the time limit is absolute. Attach the sources
(808/2019 plus the special statute plus any KHO case law found with the `legal-research` skill).

The document can be produced with the `docx` skill (a new one) or an existing one edited with the
`adeu` MCP (tracked changes). Do not present the likelihood of success as a final assessment.

## What this skill does NOT do
- **It does not make the decision of an authority or a court and does not replace the responsibility of a representative or specialist.** It produces a draft request for rectification or appeal for review.
- **It does not confirm the appeal period, the appeal route or the need for leave to appeal from memory.** These are looked up at source, statute by statute (laki oikeudenkäynnistä hallintoasioissa 808/2019 plus the special statute); a late appeal is dismissed without being examined.
- **It does not assess the likelihood that an appeal will succeed as a final position.** Interpretation and the sufficiency of the evidence belong to a specialist.
- **It does not draft the original administrative decision** — that belongs to the `administrative-decision` skill.
- **It does not cite the repealed Administrative Judicial Procedure Act (hallintolainkäyttölaki 586/1996)** as being in force; 808/2019 is the act in force.
- **Finnish administrative judicial procedure only.** It does not cover appeals in the general courts (civil or criminal matters) or procedure in other countries.

## Continue from here
- If the decision under appeal needs to be understood, or its procedure assessed → /administrative-law:administrative-decision
- Checking the appeal period, the appeal route and the need for leave to appeal, and KHO case law → /legal-core:legal-research
- Checking the language and formal requirements of the request for rectification or appeal before it is filed → /legal-core:document-review
- If the matter is a decision refusing an information request that is being appealed → /administrative-law:public-access-and-information-requests
