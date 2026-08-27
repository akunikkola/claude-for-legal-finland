# Taxation

Finnish taxation for legal and finance professionals: tax procedure and appeals,
corporate taxation including reorganisations, and value added tax.

> **Analyses and drafts are for review – not tax advice.**
> Tax rates, euro amounts and time limits change annually, so they are always
> fetched from the source and never from memory. Where a matter is genuinely
> open to interpretation, the right instrument is a binding advance ruling.
> See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **tax-procedure-and-appeals** | Tax procedure (VML 1558/1995): the duty to report, the punitive tax increase, a request for rectification to the Assessment Adjustment Board, an appeal to the administrative court and to KHO, and advance rulings (Verohallinto/KVL). Includes the tax fundamentals reference. |
| **corporate-taxation** | Business taxation (EVL 360/1968): taxability of income and deductibility of expenditure, group contribution (825/1986), tax neutrality of reorganisations (EVL sections 52–52 a), disguised dividend (VML section 29), transfer pricing (VML section 31) and the tax-avoidance risk assessment (VML section 28). |
| **value-added-tax** | Value added tax (AVL 1501/1993): liability to tax, the right of deduction, the reverse charge, the basic situations in international trade, and the special questions around real property – tax rates always from the source. |

## Statutes verified as the basis

Verified from the source (Finlex): the **Act on Assessment Procedure (laki
verotusmenettelystä 1558/1995)** – section headings 28 tax avoidance, 29
disguised dividend, 31 transfer pricing adjustment, 32 punitive tax increase,
64 the time limit for a request for rectification – the **Business Income Tax
Act (laki elinkeinotulon verottamisesta 360/1968)** including the provisions on
reorganisations (sections 52–52 a), the **Value Added Tax Act
(arvonlisäverolaki 1501/1993)**, the **Income Tax Act (tuloverolaki
1535/1992)**, the **Act on the Assessment Procedure for Self-Assessed Taxes
(laki oma-aloitteisten verojen verotusmenettelystä 768/2016)**, the **Transfer
Tax Act (varainsiirtoverolaki 931/1996)**, the **Inheritance and Gift Tax Act
(perintö- ja lahjaverolaki 378/1940)**, the **Prepayment Act (ennakkoperintälaki
1118/1996)**, the **Act on Group Contributions in Taxation (laki
konserniavustuksesta verotuksessa 825/1986)** and the **Act on the Finnish Tax
Administration (laki Verohallinnosta 503/2010)**. Section-level content and the
annual figures are checked in use with the `legal-core:legal-research` skill and
from vero.fi.

## Related

- **`legal-core` domain** – `legal-research` (KHO's tax case law) and
  `document-review`.
- **`company-law` domain** – the company-law lawfulness of a distribution of
  assets, and the company-law procedure for reorganisations.
- **`administrative-law` domain** – a tax appeal is administrative procedure
  (808/2019).
- **`insolvency` domain** – tax debts in insolvency.

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install taxation@agent-skills-for-finnish-law
```

oik.ai connector: see [QUICKSTART.md](../QUICKSTART.md) at the repository root.
