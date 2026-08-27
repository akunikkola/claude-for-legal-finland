# Data protection — shared guardrails and operating principles

The instructions in this file apply to **every** skill in this domain. SKILL.md says
*what* to do; this file is the **safety net**.

> **Design principle:** data protection doctrine belongs in SKILL.md and in the references. These guardrails are life insurance.

---

## A draft that a human reviews

A data protection assessment, a privacy notice and a draft response are **drafts for review** — not legal advice. High-risk processing, special categories of data, DPIAs, adverse decisions on a data subject's request and exceptions open to interpretation belong to the data protection officer and, where needed, to a lawyer. Mark these `[confirm — requires the data protection officer's or a lawyer's assessment]`.

## The right regulatory framework

- The applicable rules are the **EU General Data Protection Regulation (EU) 2016/679 (GDPR)**, which the **Data Protection Act (tietosuojalaki 1050/2018)** specifies and supplements (verified at source). Do not treat the matter as purely national — the GDPR is directly applicable.
- Do not cite the **repealed Personal Data Act** (henkilötietolaki 523/1999) as being in force — it was repealed by the Data Protection Act.
- In working life, take account of the **Act on the Protection of Privacy in Working Life (laki yksityisyyden suojasta työelämässä 759/2004)**: mandatory rules binding on the employer; consent is a weak basis because of the imbalance in the employment relationship.

## From source, not from memory

Check the sections of national law with the **`legal-research` skill in the `legal-core` domain** (oik.ai/Finlex) and the GDPR articles in EUR-Lex before citing them. Do not invent section or article numbers. Mark an unchecked reference `[from memory — check]`.

## Special categories and high risk

Special categories of personal data (Article 9) and criminal-offence data (Article 10): processing is prohibited in principle without an express exception. Always raise this. Large-scale processing of special categories, systematic monitoring and automated decision-making are DPIA flags (Article 35).

## Time limits and notifications

- Requests from a data subject: a response within **one month** (extendable by at most two further months, with reasons).
- A personal data breach to the supervisory authority within **72 hours** (Article 33); a high-risk breach also to the data subject (Article 34).
Do not present a time limit as an estimate — these are fixed periods laid down in the Regulation.

## Anonymisation before analysis

Where a document to be processed contains personal data and that data does not need to reach the
model, **anonymise it first**. The recommended tool is **PII Shield** (see the README): it
replaces personal data with placeholders locally before the text leaves for the model, and
restores the real values afterwards — *the personal data never reaches the API*. This implements
data minimisation and supports safe sharing.

> **Finnish identifiers:** PII Shield **v2.2.0** (28 May 2026) supports Finnish identifiers
> natively — `FI_HETU` (personal identity code) and `FI_BUSINESS_ID` (Y-tunnus). Make sure you
> are running v2.2.0 or later. Automatic detection is still not perfect — check the result,
> especially with unusual formatting.

## Shared standards

For statute, case-law and preparatory-works references, follow the collection's shared source standard [`references/citation-style.md`](../references/citation-style.md): three-tier certainty marking (Verified / Needs checking / Do not use), the source hierarchy and the correct forms of case identifiers. In short: attach the source to the number, never present something unchecked as verified, and never assert what a decision holds without having checked the decision at source.

On liability, professional ethics (confidentiality, disqualification, who may represent a client) and data handling (the GDPR Article 28 processing agreement, anonymisation before analysis): [`references/liability-and-security.md`](../references/liability-and-security.md). **A disclaimer alone is not protection** — protection comes from source verification, certainty marking, checking the premises, stating the negative scope and the human review gate.

## Practice profile (optional)

An organisation's registers, the details of its data protection officer and its standard
practices can be stored here under the heading `## Practice profile`. Empty by default — do not
invent anything; ask the user.
