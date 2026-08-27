---
name: privacy-notice
description: >
  Drafting a privacy notice (tietosuojaseloste — the information given to the data subject,
  GDPR Articles 13 and 14) and a record of processing activities (GDPR Article 30) under the
  EU General Data Protection Regulation and the Data Protection Act (tietosuojalaki
  1050/2018). Use this skill when the user drafts or updates a privacy notice, a privacy
  policy, an information document or a record of processing activities, or asks what a data
  subject has to be told about the processing of their personal data.
---

# Privacy notice and record of processing activities

This skill produces two different documents that are often confused:
- **The privacy notice / information to the data subject (Articles 13 and 14)** — a public,
  plain-language description given to the data subject of how their data is processed.
- **The record of processing activities (Article 30)** — the controller's internal documentation
  of its processing operations (accountability); not published, but shown to the supervisory
  authority on request.

Establish first **which document** the user needs (or whether both are needed).

> **Disclaimer:** a draft for review — not legal advice. Statutory references are checked at
> source. Fundamentals: `../data-protection-assessment/references/data-protection-fundamentals.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

---

## A. Privacy notice (information, Articles 13 and 14)

Gather the details of the processing (use the `data-protection-assessment` skill where needed)
and draft a notice that contains at least:

1. **The controller** and its contact details (and the contact details of the data protection officer, if one is designated).
2. **The purposes of the processing** and the **legal basis** (Article 6; for special categories also Article 9). If the basis is legitimate interests, state which interest.
3. **The categories of personal data** (in particular where the data was not obtained from the data subject, Article 14) and the **sources of the data**.
4. **The recipients** or categories of recipient (including processors).
5. **Transfers outside the EU or the EEA** and the safeguards, if data is transferred.
6. **The retention period** or the criteria used to determine it.
7. **The rights of the data subject** (access, rectification, erasure, restriction, portability, objection) and the **right to withdraw consent**, if the processing is based on consent.
8. **The right to lodge a complaint** with the supervisory authority (the Office of the Data Protection Ombudsman).
9. Whether providing the data is a **statutory or contractual requirement** and what follows from not providing it.
10. **Automated decision-making and profiling** (Article 22) and the logic involved, if there is any.

**Write in plain language** — the information must be concise, transparent, intelligible and
easily accessible (Article 12). Use the `finnish-language` skill in the `legal-core` domain for
clarity of language. Avoid legal jargon; describe the processing concretely.

## B. Record of processing activities (Article 30)

Draft an internal record that contains, for each processing operation:
- The details of the controller (and of any joint controller, representative or data protection officer).
- The **purposes** of the processing.
- The **categories of data subject** and the **categories of personal data**.
- The **categories of recipient** (including recipients in third countries).
- **Transfers to third countries** and the safeguards.
- The **retention periods**, so far as they can be determined.
- A general description of the **technical and organisational security measures**.

A processor's record is narrower (Article 30(2)). The exemption for a small organisation
(Article 30(5)) is narrow — do not assume it applies without checking.

## Output format

Produce a **new** document in editable form (Markdown, or .docx with the `docx` skill). If you are
**updating an existing** notice held as a Word file, use the `adeu` MCP, which makes the changes
as native Word tracked changes without breaking the formatting. Mark the passages that need
completing in square brackets. Keep the public privacy notice and the internal record of
processing activities clearly apart. Add: *"A draft — must be verified before publication or
use."*

## What this skill does NOT do

- **It does not replace the assessment of a data protection officer or a lawyer.** Whether the notice is legally sufficient and fit to publish must be verified by a specialist.
- **It does not confirm GDPR articles (12 to 14 and 30) or sections of the Data Protection Act from memory.** Statutory references and national specifications are checked at source.
- **It does not determine the legal basis for processing and does not assess whether a DPIA is needed** — the notice assumes that these have already been settled (`data-protection-assessment`).
- **It does not replace the actual definition of information security or retention periods.** It records in the notice only what the user provides; it does not invent retention periods or security measures.
- **It does not notify the supervisory authority for you.** The record of processing activities is shown to the Office of the Data Protection Ombudsman only on request — this skill does not submit it.
- **It does not assess whether the small-organisation exemption in Article 30(5) applies** without a separate check — the exemption is narrow.

## Continue from here

- Establishing the legal basis and the need for a DPIA before the notice → /data-protection:data-protection-assessment
- Giving effect to the rights of the data subject in practice → /data-protection:data-subject-requests
- Final polishing of the plain language and intelligibility of the notice → /legal-core:finnish-language
- Checking the statutory references and the national sections → /legal-core:legal-research
