---
name: data-protection-assessment
description: >
  A data protection assessment of the processing of personal data: the legal basis for
  processing, the principles of processing and whether a data protection impact assessment
  (DPIA) is needed under the EU General Data Protection Regulation (2016/679) and the
  national Data Protection Act (tietosuojalaki 1050/2018). Use this skill when the user is
  planning new processing of personal data, a new system, service or register and asks
  whether the data may be processed and on what basis, whether an impact assessment (DPIA)
  is required, whether special categories of data are involved, or mentions the GDPR, data
  protection, personal data, the controller, the processor, consent, legitimate interest or
  profiling.
---

# Data protection assessment — legal basis and DPIA

This skill assesses the data protection requirements of processing personal data: whether the
processing has a lawful basis, whether the principles of processing are met and whether an impact
assessment is needed. The applicable rules are the **EU General Data Protection Regulation
(EU) 2016/679 (GDPR)**, which the **Data Protection Act (tietosuojalaki 1050/2018)** specifies and
supplements nationally. Processing in working life is also subject to the **Act on the Protection
of Privacy in Working Life (laki yksityisyyden suojasta työelämässä 759/2004)**.

> **Disclaimer:** this is an assessment that needs checking, not legal advice. High-risk
> processing, special categories of data and DPIAs belong to the data protection officer and,
> where needed, to a lawyer. See `data-protection/AGENTS.md`.

The fundamentals and the articles in summary: read `references/data-protection-fundamentals.md`.
Check the sections of national law with the `legal-research` skill in the `legal-core` domain; the
GDPR articles in EUR-Lex.

---

## Step 1: Describe the processing

Establish:
1. **What personal data** is processed and about whom (the categories of data subjects)?
2. **For what purpose**, and what is the context of the processing?
3. **Who is the controller** and are there processors (subcontractors, cloud services)?
4. **Is data transferred outside the EU or the EEA?**
5. **Are special categories of data involved** (health, ethnic origin, convictions or beliefs, trade union membership, biometric or genetic data, sexual orientation) or criminal-offence data?

## Step 2: Determine the legal basis (GDPR Article 6)

Every processing operation must have at least one basis:
- **Consent** (Article 6(1)(a)) — freely given, specific, informed and revocable. A weak basis in an employment relationship (imbalance of power).
- **Contract** (Article 6(1)(b)) — processing necessary to perform a contract.
- **Legal obligation** (Article 6(1)(c)).
- **Vital interests** (Article 6(1)(d)).
- **Public interest or official authority** (Article 6(1)(e)) — the activity of a public authority.
- **Legitimate interests** (Article 6(1)(f)) — requires a balancing test; not available to a public authority in the performance of its tasks.

**Special categories (Article 9):** processing is prohibited in principle unless one of the
exceptions in Article 9(2) applies (for example explicit consent, obligations in employment law,
substantial public interest). Also check the national specifications in the Data Protection Act
(tietosuojalaki 1050/2018) with the `legal-research` skill.

Record the basis chosen and give reasons. If the basis is consent or legitimate interests,
document that consent is freely given, or the balancing test.

## Step 3: Check the principles of processing (GDPR Article 5)

Work through: lawfulness, fairness and transparency; purpose limitation; **data minimisation**;
accuracy; **storage limitation** (define a retention period); integrity and confidentiality
(information security); **accountability** (documentation). Raise it if any principle is not met.

## Step 4: Assess whether a DPIA is needed (GDPR Article 35)

**An impact assessment (DPIA) must be carried out where the processing is likely to result in a
high risk** to the rights of data subjects. The typical flags:
- Large-scale processing of special categories of data.
- Systematic and extensive monitoring (for example profiling, or automated decision-making with legal effects, Article 22).
- Systematic monitoring of people in a public area.
- New technologies, a large body of data subjects, vulnerable groups (children, employees, patients).

Also check the **list published by the Office of the Data Protection Ombudsman** of processing
operations that require a DPIA. If a DPIA is needed, guide the user to its structure (description,
necessity and proportionality, risks, measures) and mention the possible prior consultation
(Article 36) where the residual risk is high.

## Step 5: Conclusion

Produce a concise assessment:
1. **May the data be processed?** The basis (Article 6 or 9) and the reasoning.
2. **Whether the principles are met** and any gaps found.
3. **Whether a DPIA is needed:** yes / no / borderline, with reasons.
4. **Next steps:** what must be documented (the record of processing activities, Article 30 → the `privacy-notice` skill), what must be communicated (Articles 13 and 14) and what requires the assessment of the data protection officer or a lawyer (`[confirm]`).

## What this skill does NOT do

- **It does not replace the assessment of a data protection officer or a lawyer.** High-risk processing, special categories of data (Article 9) and the conclusions of a DPIA belong to a specialist.
- **It does not confirm GDPR articles or sections of the Data Protection Act from memory.** The legal basis (Articles 6 and 9) and the national specifications are checked at source.
- **It does not produce a finished impact assessment (DPIA) or a prior consultation (Article 36).** It assesses only whether a DPIA is needed and guides the user to its structure.
- **It does not draft a privacy notice or a record of processing activities.** It identifies the need to document but directs the user to a separate skill.
- **It does not notify the supervisory authority (the Office of the Data Protection Ombudsman) for you** and does not replace the 72-hour breach notification (Article 33).
- **It does not assess the technical implementation of information security.** It identifies the need for safeguards as a principle, but the technical implementation is someone else's responsibility.

## Continue from here

- The information document and the record of processing activities (Article 30) → /data-protection:privacy-notice
- Handling a request made by a data subject → /data-protection:data-subject-requests
- Profiling and automated decision-making in an AI system → /ai-regulation:ai-classification
- Checking the sections on the legal basis and the national specifications → /legal-core:legal-research
