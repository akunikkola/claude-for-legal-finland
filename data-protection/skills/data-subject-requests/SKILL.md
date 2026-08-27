---
name: data-subject-requests
description: >
  Giving effect to the rights of the data subject and responding to their requests under the
  EU General Data Protection Regulation (Articles 15 to 22) and the Data Protection Act
  (tietosuojalaki 1050/2018): the right of access, rectification, erasure, restriction of
  processing, data portability, the right to object and automated decisions. Use this skill
  when the user has received a request or claim from a data subject, wants to respond to it
  or to assess whether it must be granted, or mentions a subject access request, a request
  for erasure, the "right to be forgotten", asking for one's own data, or the rights of the
  data subject.
---

# Data subject requests — giving effect to the rights

This skill helps you handle a request made by a data subject and draft a response under the EU
General Data Protection Regulation. The rights are not absolute — most of them have conditions
and exceptions.

> **Disclaimer:** a draft response for review — not legal advice.
> An adverse decision and an exception open to more than one reading belong to the data protection
> officer or a lawyer. Fundamentals: `../data-protection-assessment/references/data-protection-fundamentals.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

---

## Step 1: Identify the request and the requester

- **Which right** is at issue (see below)? A request need not take any particular form — read the substance, not the heading.
- **Identify the requester** reliably, so that data is not disclosed to the wrong person (but do not demand unreasonable additional information).
- **Record the date of receipt** — the time limit runs from it.

## Step 2: The time limit

Respond **without undue delay and at the latest within one month** of receiving the request
(Article 12(3)). The time limit may be extended by at most **two further months** where the
requests are complex or numerous — in that case the data subject must be informed of the delay
and of the reason for it within one month. Action is in principle free of charge.

## Step 3: Assess the right and its conditions

| Right | Article | Key conditions and exceptions |
|---|---|---|
| **Right of access** | 15 | The right to obtain a copy of the data processed and information about the processing. It must not adversely affect the rights of others. |
| **Rectification** | 16 | Correcting inaccurate data and completing incomplete data. |
| **Erasure ("to be forgotten")** | 17 | For example the data is no longer needed, consent has been withdrawn, the processing is unlawful. **Does not apply** where the processing is necessary for, among other things, a legal obligation or a legal claim. |
| **Restriction of processing** | 18 | For example the accuracy of the data is contested — the processing is frozen while the matter is investigated. |
| **Data portability** | 20 | Only where the processing is based on **consent or a contract** and is carried out by automated means. A structured, commonly used, machine-readable format. |
| **Right to object** | 21 | In particular processing based on legitimate interests or on the public interest; **direct marketing may always be objected to**. |
| **Automated decisions** | 22 | The right not to be subject to a decision based solely on automated processing which produces legal effects (subject to exceptions). |

Check the national specifications and any exceptions in a special statute (the Data Protection
Act (tietosuojalaki 1050/2018); sector-specific legislation) with the `legal-research` skill in
the `legal-core` domain.

## Step 4: Draft the response

- **Granting the request:** carry out the measure and describe what was done. For a subject access request: gather the data and the information about the processing required by Article 15; make sure the copy does not reveal third parties' data.
- **Refusing it in whole or in part:** give reasons, stating the exception on which the decision rests, and tell the data subject about the **right to lodge a complaint with the Office of the Data Protection Ombudsman** and about the remedies available. Do not refuse without a basis.
- **A manifestly unfounded or excessive (particularly a repetitive) request:** a reasonable fee may be charged, or the request refused (Article 12(5)) — but this is an exception to be used sparingly and with reasons.

Write the response in a matter-of-fact and plain style (`legal-core:finnish-language`). Produce
the draft response and, where needed, a list of the measures to take. Mark `[confirm — requires
the data protection officer's assessment]` wherever the application of an exception is open to
interpretation.

## Remember

If the request reveals a wider problem (for example data kept for too long, or a missing legal
basis), raise it — a single request can be a symptom of a defect in the processing, and putting
that right belongs to the `data-protection-assessment` skill.

## What this skill does NOT do

- **It does not replace the assessment of a data protection officer or a lawyer.** An adverse or partial decision and the application of an exception open to interpretation belong to a specialist.
- **It does not confirm GDPR articles (15 to 22) or sections of the Data Protection Act from memory.** The conditions for the rights, the exceptions and the limits set by special statutes are checked at source.
- **It does not decide whether to refuse a request and does not identify the requester for you.** It produces a draft response; the measures and the identification remain with the controller.
- **It does not gather the data for a subject access request and does not check whether the copy reveals third parties' data** — that has to be done manually in the systems.
- **It does not handle a request to an authority under the Act on the Openness of Government Activities.** That is a different matter from a data subject's GDPR request → /administrative-law:public-access-and-information-requests.
- **It does not notify the supervisory authority for you.** It tells the data subject about the right to lodge a complaint with the Office of the Data Protection Ombudsman, but it does not deal with the authority.

## Continue from here

- A defect in the processing revealed by the request (legal basis, retention period) → /data-protection:data-protection-assessment
- Updating the information given or the notice as a result of the request → /data-protection:privacy-notice
- An information request to an authority under the Act on the Openness of Government Activities (not a GDPR request) → /administrative-law:public-access-and-information-requests
- The tone and plain language of the response → /legal-core:finnish-language
- Checking the sections on the rights and the exceptions in special statutes → /legal-core:legal-research
