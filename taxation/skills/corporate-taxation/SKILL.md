---
name: corporate-taxation
description: >
  Corporate taxation in Finland (the Business Income Tax Act, laki
  elinkeinotulon verottamisesta 360/1968). Use this skill when the user
  is assessing whether a company's income is taxable or an expense
  deductible, is planning a group contribution, the taxation of a
  dividend distribution or the tax treatment of a reorganisation (merger,
  demerger, transfer of business, share exchange), is assessing the risk
  of a disguised dividend or of tax avoidance, is dealing with transfer
  pricing or the use of losses, or is preparing a business succession.
  Triggers on: business taxation, EVL, deductibility, group contribution,
  dividend taxation, taxation of a reorganisation, tax neutral, disguised
  dividend, transfer pricing, use of losses, business succession,
  shareholder loan, interest deduction, yritysverotus, peitelty osinko,
  sukupolvenvaihdos.
---

# Corporate taxation — EVL, reorganisations and the risk provisions

This skill structures corporate tax questions in the light of the
Business Income Tax Act (laki elinkeinotulon verottamisesta 360/1968)
and the risk provisions of the Act on Assessment Procedure.
Fundamentals: `../tax-procedure-and-appeals/references/tax-fundamentals.md`.

> **Disclaimer:** analyses are for review — not tax advice. Tax rates
> and euro amounts always from the source. In a significant arrangement
> the right instrument is an advance ruling. See `taxation/AGENTS.md`.

## Check the Act from the source

Fetch the applicable provisions of EVL, TVL and VML with the
**`legal-core:legal-research` skill** and KHO's case law from the source.
In corporate taxation, KHO's yearbook decisions and Verohallinto's
in-depth guidance refine almost every borderline — keep the Act, KHO and
Verohallinto's position apart from one another.

## Basic structure: income, expenditure, timing

1. **Source of income and applicable Act** — does EVL (business
   activity) or TVL apply; the division into sources of income for
   corporate entities has changed — check the current position from the
   source.
2. **Taxability of income** — the main rule is broad; the exceptions
   (among others the tax-exempt transfer of fixed-asset shares on the
   conditions in EVL section 6 b — the conditions are strict, fetch them
   from the source).
3. **Deductibility of expenditure** — expenses incurred in acquiring or
   maintaining income; the restrictions (among others entertainment
   expenses, fines, the interest deduction limitation in EVL section
   18 a) from the source.
4. **Timing** — the accrual principle, depreciation, provisions;
   depreciation percentages from the source.

## Group

- **Group contribution (825/1986)** — evening out the result within a
  Finnish group: the ownership, time and booking conditions are checked
  from the source; the contribution is deductible for the giver and
  taxable for the recipient only if the conditions are met.
- **Transfer pricing (VML section 31, heading confirmed: transfer
  pricing adjustment)** — related-party transactions on the arm's length
  principle; the thresholds and content of the documentation obligation
  from the source. In cross-border situations, bring in the tax treaties
  and EU law alongside.
- **Losses** — the order and time limits for using them, and the effect
  of a change of ownership (and the exemption procedure) from the
  source.

## Reorganisations (EVL sections 52–52 a, existence confirmed)

The continuity provisions of EVL cover mergers, demergers, transfers of
business and share exchanges:

- **Tax neutrality requires precise compliance with the provisions** —
  the nature and amount of the consideration, the transferring going
  concern, the continuity principle. A single deviation can bring the
  neutrality down; the conditions always from the source.
- **The special anti-avoidance provision** in reorganisations: if the
  sole or main purpose of the arrangement is to obtain a tax benefit,
  the benefits may be denied — document the business reasons before
  implementation.
- The company-law procedure (OYL Chapters 16–17) runs alongside →
  `company-law:corporate-transactions`; transfer tax questions
  (931/1996) are checked separately.
- Prefer an **advance ruling** before a significant arrangement.

## Shareholder and company — the risk provisions

- **Disguised dividend (VML section 29, heading confirmed)** — a benefit
  received by a shareholder in the form of divergent pricing: transfers
  to the shareholder at undervalue, purchases from the shareholder at
  overvalue, unjustified benefits. The consequences and the valuation
  from the source.
- **Shareholder loans** — the tax treatment is checked from the source
  (TVL).
- **Tax avoidance (VML section 28, heading confirmed)** — an overall
  assessment of the business reasons for the arrangement; a series of
  transactions is assessed as a whole.
- **Dividend distribution** — company-law lawfulness first
  (`company-law:corporate-governance`), then the tax treatment (unlisted
  or listed, the mathematical value — the calculation parameters from
  vero.fi).

## Business succession

Structure it in three layers: the sale/gift/inheritance structure, the
**reliefs** (the business succession relief in the Inheritance and Gift
Tax Act 378/1940 and the capital gains relief in TVL — the conditions
are strict, from the source) and the corporate reorganisations before
the succession. An advance ruling is a standard tool in business
successions — propose it.

## What this skill does NOT do

- **Does not calculate tax with binding effect** and does not replace an
  accounting firm or an auditor — calculations are
  `[model calculation — check]`.
- **Does not confirm tax rates, depreciation percentages or euro amounts
  from memory** — from the source or `[check the value for the tax year
  — vero.fi]`.
- **Does not promise tax neutrality** — only precise compliance with the
  provisions, and where needed an advance ruling, secures it.
- **Does not design arrangements whose only substance is a tax
  benefit** — the risk under VML section 28 is raised, not hidden.
- **Does not cover the special questions of international taxation in
  depth** (permanent establishment, withholding taxes, the tax treaty
  network) — for those, go to a tax specialist.

## Continue from here

- An appeal or an advance ruling application → /taxation:tax-procedure-and-appeals
- The VAT angle on the same arrangement → /taxation:value-added-tax
- The company-law implementation of the arrangement → /company-law:corporate-transactions
- The lawfulness of the distribution before its tax treatment → /company-law:corporate-governance
- Checking a provision or a KHO decision → /legal-core:legal-research
