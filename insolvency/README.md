# Insolvency

Finnish insolvency law for situations of inability to pay: choosing the procedure
(bankruptcy, restructuring of an enterprise, debt adjustment of a private individual), the
bankruptcy procedure from the creditor's and the debtor's point of view, and the collection
of claims, limitation and enforcement.

> **Assessments and drafts are to be checked – not legal advice.**
> Deadlines are fatal in this field: every date is verified from the source and calendar
> responsibility sits with a human. See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **insolvency-assessment** | Framing the situation and choosing the procedure: late payment or insolvency; for a company settlement / early or basic restructuring (47/1993) / bankruptcy; for a private individual settlement / debt adjustment (57/1993). Risks for the management of a company in crisis (recovery to the estate, liability). Includes the reference on the fundamentals of insolvency law. |
| **bankruptcy-proceedings** | The course of a bankruptcy (konkurssilaki 120/2004): conditions, applying, the estate administrator, lodging claims, the distribution list and the order of priority of creditors (1578/1992), recovery to the estate (758/1991) – checklists for the creditor and for the debtor. |
| **debt-collection** | The life cycle of a claim: voluntary collection under good collection practice (513/1999), managing and interrupting limitation (728/2003), judicial collection and enforcement (705/2007). |

## Statutes verified as the basis

Verified from the source (Finlex): the **Bankruptcy Act (konkurssilaki 120/2004)**, the
**Restructuring of Enterprises Act (laki yrityksen saneerauksesta 47/1993)** – which
includes the early and basic restructuring procedures introduced in the 2022 reform – the
**Act on the Adjustment of the Debts of a Private Individual (laki yksityishenkilön
velkajärjestelystä 57/1993)**, the **Enforcement Code (ulosottokaari 705/2007)**, the **Act
on the Limitation of Debts (laki velan vanhentumisesta 728/2003)**, the **Debt Collection
Act (laki saatavien perinnästä 513/1999)**, the **Act on the Order of Priority of Creditors
(laki velkojien maksunsaantijärjestyksestä 1578/1992)** and the **Act on the Recovery of
Assets to a Bankruptcy Estate (laki takaisinsaannista konkurssipesään 758/1991)**. Content
at section level and the time limits are checked in use with the
`legal-core:legal-research` skill.

## Related

- **`legal-core` domain** – `legal-research`, `document-review` and `engagement-intake`
  (deadline scan).
- **`company-law` domain** – directors' liability and the solvency test on distribution of
  assets in a company in crisis.
- **`dispute-resolution` domain** – a disputed claim is resolved in court proceedings before
  enforcement.
- **`employment-law` domain** – employment-related claims and pay security in the employer's
  insolvency.

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install insolvency@agent-skills-for-finnish-law
```

oik.ai connector: see [QUICKSTART.md](../QUICKSTART.md) at the repository root.
