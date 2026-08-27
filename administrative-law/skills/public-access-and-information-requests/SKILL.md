---
name: public-access-and-information-requests
description: >
  Public access to official documents and responding to information requests under the Act
  on the Openness of Government Activities (laki viranomaisten toiminnan julkisuudesta
  621/1999): the principle of openness, the grounds for confidentiality, answering a request
  for a document, time limits and an adverse decision. Use this skill when the user has
  received or is drafting a request for a document held by an authority, assesses whether a
  document is public or confidential, responds to an information request, or mentions
  julkisuuslaki, public access to documents, confidentiality (salassapito) or a request for
  information.
---

# Public access to documents and information requests (julkisuuslaki 621/1999)

This skill helps you assess whether a document is public and respond to an information request
under the Act on the Openness of Government Activities (621/1999). **The starting point is
openness:** documents held by an authority are public unless otherwise separately provided by law
(verified at source, 1 §).

> **Disclaimer:** an assessment or draft response for review — not legal advice.
> An adverse decision and any confidentiality assessment belong to the authority and, where needed, to a lawyer.
> See `administrative-law/AGENTS.md`. Fundamentals: `../administrative-decision/references/administrative-law-fundamentals.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law at source
Look up the grounds for confidentiality, the time limits and the procedure in the Act on the
Openness of Government Activities (621/1999), together with any confidentiality provisions in a
special statute, with the **`legal-core:legal-research` skill**. Do not state a ground for
confidentiality or a time limit from memory.

## Step 1: Identify the request
- Which document or information is being requested? Who is asking (a party or someone else)? A party may have a wider right of access in their own matter.
- Is the document a **document held by an authority**, and is it already **public** (for example the decision has been made, or the document has been completed)?

## Step 2: Assess openness against confidentiality
- **Main rule:** the document is public → it is released.
- **Confidentiality** only on a basis laid down in law (julkisuuslaki 24 § and special statutes): for example the protection of privacy, a trade secret, security. Confidentiality is the **exception** and is construed narrowly.
- **Partial openness:** if part of the document is confidential, the public part is released (the confidential passages redacted). Where personal data is involved, take data protection into account (→ the `data-protection` domain); openness and data protection must be reconciled, and neither automatically overrides the other.

## Step 3: Answer within the time limit
An information request must be answered **without delay**, within the time laid down in the Act
on the Openness of Government Activities (look up the precise time limit at source). If the
request is refused or release is delayed, the matter must at the requester's request be referred
to the authority for decision, and an **appealable decision** with appeal instructions must be
issued (→ the `administrative-appeal` skill).

## Step 4: Draft the response
- **Positive:** release the document (in part where necessary, with the confidential passages redacted) and describe what was released.
- **Adverse or partial:** give reasons, stating the provision on which the confidentiality rests, and issue an **appealable decision** with appeal instructions. Do not refuse without a statutory basis.

## Step 5: Report
Produce the public-access assessment and the draft response with source references (the Act on the
Openness of Government Activities plus any special statute, sections checked). Mark anything open
to interpretation `[confirm — requires the authority's or a lawyer's assessment]`. Stress the
presumption of openness and the narrow construction of confidentiality.

The response or decision can be produced with the `docx` skill (a new one) or an existing one
edited with the `adeu` MCP; if personal data is redacted from a document for sharing, consider
anonymisation (the PII Shield guidance in the `data-protection` domain).

## What this skill does NOT do
- **It does not make the authority's public-access or confidentiality decision and does not replace the responsibility of the authority or a lawyer.** It produces an assessment and draft response for review; an adverse decision belongs to the authority.
- **It does not confirm a ground for confidentiality or a response time limit from memory.** These are looked up at source (julkisuuslaki 621/1999 plus the confidentiality provisions of special statutes), statute by statute.
- **It does not make a final assessment of the release of personal data.** Reconciling openness with data protection has to be done case by case; the rights of the data subject and the legal basis for release belong to a data protection assessment.
- **It does not anonymise the document itself** — the actual redaction of personal data is done by PII Shield (the `data-protection` domain).
- **It does not draft the substance of an appeal against a refusal of an information request**; that belongs to the `administrative-appeal` skill.
- **Finnish public-access legislation only.** It does not cover access-to-information rules in other countries or requests made by private parties to other private parties.

## Continue from here
- When the request concerns personal data and openness has to be reconciled with data protection → /data-protection:data-protection-assessment
- If an adverse or partial decision on an information request is appealed → /administrative-law:administrative-appeal
- Checking the grounds for confidentiality and the response time limit → /legal-core:legal-research
- Checking the language and formal requirements of the response or adverse decision → /legal-core:document-review
