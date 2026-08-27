# Column templates by document type

Starting comparison columns for **Mode A** of the `tabular-review` skill
(multi-document comparison, one row per document). The templates are a
**starting point, not a formula** — tailor them to the material and the
engagement. Every cell still always gets a **value, a source and a confidence
level**, and missing information is marked `not mentioned`.

> **The references to provisions are indicative points of reference** that say
> *why the column matters and where its validity is checked* — they are not
> ready-made assessments. Whether a statute or a section is in force, and what
> it says, is always checked with the `legal-research` skill (oik.ai/Finlex).
> An assessment of validity is a level 2 question (see SKILL.md, Stage 3), not a
> level 1 extraction.

---

## General columns (almost any contract)

Start from these and add the type-specific columns after them.

| Column | What is extracted |
|---|---|
| Parties | The contracting parties and their roles (e.g. lessor/lessee) |
| Subject matter | What the contract concerns |
| Entry into force and term | Start date; fixed-term or until further notice; end date |
| Termination with notice / summary termination | Notice period and grounds; grounds for summary termination |
| Governing law and dispute resolution | Choice of law; court or arbitration; venue |
| Limitation of liability | Cap on liability; excluded heads of damage |
| Contractual penalty | Amount and the breach that triggers it |
| Confidentiality | Whether there is one; duration |

---

## Leases

Residential premises: laki asuinhuoneiston vuokrauksesta (481/1995). Business
premises: laki liikehuoneiston vuokrauksesta (482/1995). Note that these are
mandatory in particular for the lease of residential premises.

| Column | What is extracted |
|---|---|
| Rent | Amount and payment period |
| Term of the lease | Fixed-term (end date) or until further notice |
| Notice period | The lessee's and the lessor's periods separately |
| Security | Amount and form |
| Index or escalation clause | The basis and the mechanism of the increase |
| Maintenance liability | The division between lessor and lessee |
| Subletting / assignment | Permitted, prohibited or subject to consent |
| Permitted use | The use allowed (material for business premises) |

---

## Employment contracts

Employment Contracts Act (työsopimuslaki 55/2001). Non-competition: chapter 3
section 5; the obligation to pay compensation was amended by act 1018/2021 (the
employer must pay compensation for the period of the non-competition
undertaking; up to 6 months → at least 40 % of pay, over 6 months → at least
60 %). Whether the compensation and the duration are lawful is a level 2
assessment.

| Column | What is extracted |
|---|---|
| Type of contract | Until further notice or fixed-term; the ground for the fixed term |
| Probationary period | Length; conditions |
| Notice period | As agreed, or a reference to the collective agreement (TES) or to the act |
| Non-competition | Whether there is one; duration; compensation; geographical and functional scope |
| Confidentiality | Whether there is one; whether it extends beyond the employment |
| Working time | The form (full-time/part-time/flexible arrangements) |
| Pay | Amount and basis; any bonus scheme |
| Applicable TES | Which collective agreement is referred to |

---

## Supplier and service agreements, and non-disclosure agreements (NDA)

General contract law; for consumer sales see the `consumer-law` domain. Where
personal data is processed, check the data processing annex (DPA) →
the `data-protection` domain.

| Column | What is extracted |
|---|---|
| Contract period | Duration; automatic renewal |
| Termination | Notice period; termination for material breach |
| Limitation of liability | Cap (e.g. 12 months' fees); excluded losses |
| Contractual penalty / sanctions | Amount and basis |
| Service level (SLA) | The measurable levels and the credits |
| IPR | Ownership and rights of use |
| Duration of confidentiality | In years; scope |
| Personal data | Whether there is a DPA annex; the processor's role |
| Governing law and dispute resolution | Choice of law; court or arbitration; venue |

---

## Shareholders' agreements (SHA)

Limited Liability Companies Act (osakeyhtiölaki 624/2006) in the background; a
shareholders' agreement binds the parties, and does not bind the company in the
same way as the articles of association — the relationship to the articles
needs checking.

| Column | What is extracted |
|---|---|
| Shareholding | Number of shares and percentage |
| Redemption clause | The situations that trigger it; pricing |
| Tag-along / drag-along | Whether there is one; threshold; conditions |
| Right of first refusal | Whether there is one; procedure |
| Decision-making powers | The matters requiring a qualified majority |
| Non-competition | Whether there is one; duration |
| Dividend policy | The principle agreed |
| Dispute resolution | Usually arbitration; the rules and the venue |

---

## Real property and housing transactions

Real property: Code of Real Estate (maakaari 540/1995). Shares in a housing
company: asuntokauppalaki (843/1994). The rules on defects in quality and on
notice of defect differ between the two — check which applies.

| Column | What is extracted |
|---|---|
| Subject matter | Property or share identifier; area |
| Purchase price | Amount; payment terms |
| Transfer of possession | Date |
| Liability for defects | Liability for defects in quality; limitations of liability |
| Time limit for notice of defect | As agreed or under statute |
| Encumbrances and mortgages | List; source (title and encumbrance certificate) |
| Right of disposal | Restrictions |
| Annexes | Condition survey, house manager's certificate and the like |

---

## Administrative decisions (a batch)

Administrative Procedure Act (hallintolaki 434/2003). What matters: the giving
of reasons for the decision (45 §) and the attachment of appeal instructions.
The **absence** of either is itself a finding.

| Column | What is extracted |
|---|---|
| Maker of the decision | The authority and the body |
| Matter | What the decision concerns |
| Decision | The outcome (granted/refused/not examined) |
| Reasons | Whether there are proper reasons (yes / no / inadequate) |
| Provisions applied | The provisions cited |
| Appeal instructions | Whether they are there; request for rectification or appeal; to whom |
| Time limit | The time limit for appeal |
| Service | Date and method |

---

*Add new types as needed on the same pattern: the general columns + the points
of comparison specific to the type + a reference to a provision, whose force is
checked in the source.*
