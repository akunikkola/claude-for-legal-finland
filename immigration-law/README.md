# Immigration law

Finnish immigration law from the perspective of the employer and of counsel: work-based
residence permits, the employer's obligations and sanctions, and the routes of an EU citizen,
a family member and permanent residence, up to citizenship.

> **Structured assessments and drafts need checking – not legal advice.**
> A complete reform of the Aliens Act is in preparation, and income thresholds, time limits and
> processing times change frequently – they are always taken from the source (Finlex, migri.fi).
> Matters of international protection are not covered by this domain.
> See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **work-based-residence-permits** | Choosing the permit type and structuring the application (Aliens Act, ulkomaalaislaki 301/2004): an employee's residence permit with the labour market test, a specialist, the EU Blue Card, a growth entrepreneur, seasonal work, extended permits and the extent of the right to work. Includes the immigration-law fundamentals reference. |
| **employer-obligations** | The employer's obligations to confirm, retain and report, the sanctions (penalty payment, criminal liability), posted workers (447/2016) and a compliance checklist for the recruitment process. |
| **eu-and-family-based-residence** | Registration of an EU citizen's right of residence and family members, family reunification with the income requirement, a permanent residence permit and the status of a long-term resident third-country national, and the conditions for citizenship (359/2003). |

## Statutes verified as the basis

Verified from the source (Finlex): **the Aliens Act (ulkomaalaislaki 301/2004)** – including the terms
employee's residence permit, specialist, Blue Card, growth entrepreneur,
the employer's obligations and the penalty payment – **laki työntekijöiden
lähettämisestä (447/2016)**, on posting workers, and **the Nationality Act (kansalaisuuslaki 359/2003)**. Income thresholds,
processing times and the details of permit types are checked in use with the
`legal-core:legal-research` skill and from migri.fi.

## Related

- **`employment-law` domain** – the terms of the employment relationship are the same as for a Finnish employee
  (TES, mandatory employment legislation); underpayment is also a permit risk.
- **`legal-core` domain** – `legal-research` (KHO case law) and `engagement-intake`.
- **`administrative-law` domain** – Migri's decisions are administrative decisions:
  appeal (808/2019).
- **`criminal-procedure` domain** – criminal suspicions concerning the use of unauthorised foreign
  labour.

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install immigration-law@agent-skills-for-finnish-law
```

oik.ai connector: see [QUICKSTART.md](../QUICKSTART.md) at the root.
