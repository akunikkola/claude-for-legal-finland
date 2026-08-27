---
name: value-added-tax
description: >
  Value added tax in Finland (the Value Added Tax Act, arvonlisäverolaki
  1501/1993). Use this skill when the user is assessing whether a sale is
  subject to VAT or which rate applies, the right to deduct input VAT,
  the reverse charge (construction sector, EU acquisitions), the VAT
  treatment of international trade (intra-Community supply, export,
  supply of services, distance selling), VAT questions concerning real
  property (opting to register, the adjustment of real property
  investments) or VAT registration and reporting. Triggers on: VAT,
  value added tax, tax rate, right of deduction, reverse charge,
  intra-Community supply, intra-Community acquisition, export, import,
  distance selling, OSS, VAT on real property, opting to register,
  margin scheme, arvonlisävero, ALV, käännetty verovelvollisuus.
---

# Value added tax — liability, deductions and international trade

This skill structures VAT questions under the Value Added Tax Act
(arvonlisäverolaki 1501/1993). The procedure (reporting, correction,
appeal) follows the Act on the Assessment Procedure for Self-Assessed
Taxes (laki oma-aloitteisten verojen verotusmenettelystä 768/2016).
Fundamentals: `../tax-procedure-and-appeals/references/tax-fundamentals.md`.

> **Disclaimer:** analyses are for review — not tax advice.
> **Tax rates and thresholds are always fetched from the source** — they
> have changed several times in recent years. See `taxation/AGENTS.md`.

## Check the Act and the tax rates from the source

Fetch the provisions of AVL with the **`legal-core:legal-research`
skill** and the **tax rates, lower limits and the small-business
threshold in force from vero.fi** — never from memory. At EU level the
VAT Directive and the case law of the Court of Justice of the European
Union steer the interpretation — raise the EU connection in
cross-border and interpretatively open situations.

## Basic structure — always work through these

1. **Who is selling?** Liability to tax: a sale made in the form of
   business activity; the small-business threshold (the euro amount from
   the source); the duty to register and voluntary registration.
2. **What is being sold?** Goods or services — this determines the
   country of supply and the tax rate; exempt sectors (among others
   healthcare, finance, real property — the boundaries from the source).
3. **Where is it sold?** The place-of-supply rules: domestic, the EU
   (intra-Community supply and acquisition, the main rules for services
   B2B/B2C, distance selling and OSS), outside the EU (export/import).
4. **Who pays the tax?** The main rule is the seller; the **reverse
   charge** applies among other things to construction services and to
   EU acquisitions — the conditions of application from the source.
5. **Which tax rate?** The standard and the reduced rates — the
   percentages in force and their scope always from the source
   `[check the value for the tax year — vero.fi]`.

## Right of deduction

- The main rule: a deduction for acquisitions made for taxable business
  activity; the **restrictions on deduction** (among others
  entertainment, private use) from the source.
- **Apportionment**: acquisitions used partly for taxable and partly for
  exempt purposes — the basis of apportionment must be documented.
- **Invoice particulars** are a formal condition of the deduction —
  check the requirements from the source; a defective invoice puts the
  deduction at risk.
- **The adjustment procedure for real property investments** —
  adjustment of deductions when the use changes; the adjustment period
  and the mechanics from the source.

## Real property — a special area

The sale and letting of real property is as a starting point exempt,
but: **opting to register** as liable to tax for the transfer of a right
of use of real property (the conditions from the source), own use of a
construction service, the reverse charge in the construction sector and
the adjustment procedure form a whole in which an error is expensive —
recommend looking at it as a whole and, where necessary, an advance
ruling.

## Reporting and correction (OVML 768/2016)

- The tax periods, the reporting and payment dates and the consequences
  of late filing from the source.
- **Voluntary correction of an error** mitigates the consequences —
  structure the correction route (adjustment of the tax period vs.
  correction of the return).
- Appeals: request for rectification and appeal →
  `tax-procedure-and-appeals`.

## What this skill does NOT do

- **Does not confirm tax rates, lower limits or euro amounts from
  memory** — from the source or `[check the value for the tax year —
  vero.fi]`.
- **Does not prepare or submit VAT returns** — calculations are
  `[model calculation — check]`, the reporting is done by a human.
- **Does not resolve complex cross-border structures** (triangulation,
  call-off stock arrangements, the platform economy) with binding
  effect — for those, go to a tax specialist and, where needed, an
  advance ruling.
- **Does not assist with VAT fraud** — trading in receipts, carousel
  fraud or fabricated invoices → refuse (see the negative scope in
  AGENTS.md).
- **Does not replace financial systems** in defining tax codes — it
  structures the legal assessment.

## Continue from here

- Correcting a reporting error, or an appeal → /taxation:tax-procedure-and-appeals
- The income tax question in the same transaction → /taxation:corporate-taxation
- A property or company transaction as a whole → /company-law:corporate-transactions
- Checking a provision or the case law → /legal-core:legal-research
- VAT clauses in a contract → /contracts:contract-drafting
