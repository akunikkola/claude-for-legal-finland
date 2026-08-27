---
name: residential-property-sale
description: >
  Sale of housing-company shares in Finland under the Housing Transactions Act
  (asuntokauppalaki 843/1994). Use this skill when the user is preparing or
  reviewing the purchase or sale of a dwelling, assessing the purchase of a
  new-build (an RS property), assessing a defect that emerged after the sale
  (moisture damage, an error in the floor area, a concealed need for
  renovation, the company's finances), drafting a notice of defect
  (reklamaatio) or a claim, or assessing the estate agent's liability. Triggers
  on: sale of a dwelling, buying a flat, selling a flat, housing-company
  shares, new-build, RS property, manager's certificate, latent defect, floor
  area error, economic defect, notice of defect, price reduction, estate
  agent's liability, condition survey, asuntokauppa, isännöitsijäntodistus.
---

# Sale of a dwelling — new-build, used dwelling and defect liability

This skill sets out the sale of housing-company shares under the Housing Transactions Act
(asuntokauppalaki 843/1994). Fundamentals and the line between real property and housing-company
shares: `../real-property-conveyance/references/real-property-fundamentals.md`. If the object is
real property → the `real-property-conveyance` skill; questions about the relationship with the
housing company → the `housing-company` skill.

> **Disclaimer:** the drafts are for review — not legal advice. See
> `real-estate-and-housing/AGENTS.md`. In a consumer sale the protection given by the Housing
> Transactions Act is mandatory — check what is mandatory from the source.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law from the source

Retrieve the provisions of the Housing Transactions Act (defect, notice of defect, liability
periods, RS protection) **with the `legal-core:legal-research` skill**, and the practice of KKO and
of kuluttajariitalautakunta from the source. Identifying the type of sale governs everything:
**construction phase / new dwelling / used dwelling** — each has its own set of rules on defects.

## New-build (construction phase and a new dwelling)

- **The RS system**: the protection system for the construction phase — the security documents held
  at a bank, the securities (for the construction phase and for the period after it), the meeting of
  share purchasers and the auditor or construction works inspector — the details from the source.
- **The annual inspection**: reliance on defects is channelled through the annual inspection —
  failing to report a defect may forfeit the right (exceptions from the source). Draw up a list of
  defects for the buyer for the annual inspection, with the due dates `[model calculation —
  check]`.
- **The liability of the founding shareholder (the developer)** and the release of the securities:
  the significance of the buyer's consent — do not sign off a release as a matter of routine.

## Sale of a used dwelling

1. **The seller's duty to disclose**: known faults, renovations carried out and decided on, and the
   company's financial position — including what the seller "ought to know". Concealment → a defect
   plus damages, and at its most serious, fraud (this is not assisted — AGENTS.md).
2. **The buyer's pre-purchase inspection**: what was obvious and on view cannot be the subject of a
   notice of defect; recommendations for further investigation in a condition survey trigger a
   particular duty to investigate — the practice from the source.
3. **The manager's certificate (isännöitsijäntodistus) with its annexes** is the core of the
   information in the sale: the charges, the share of the company loan, upcoming renovations (the
   maintenance needs assessment), and the company's finances. An out-of-date or incomplete
   certificate → a question of defect and of liability (including towards the managing agent).
4. **Types of defect**: a general defect (the condition differs from what was agreed or could be
   expected; the materiality threshold for a latent defect from the source), a defect in the
   information given, and an **economic defect** (the company's debts or liabilities are greater
   than stated) — an error in the floor area is assessed according to the case law.
5. **The division of maintenance liability** (central in wet-room damage): this is checked from the
   Limited Liability Housing Companies Act **and from the articles of association** — do not divide
   liability between the company and the shareholder without seeing the articles of association →
   the `housing-company` skill.

## Notice of defect and remedies

- **A reasonable time from discovery plus an absolute long-stop period** `[periods — check from the
  source; different from those for real property]`. Identify the defect and the claim specifically;
  add a reservation as to supplementing them.
- **Securing the evidence**: before continuing with repair or demolition work, document the damage
  and give **the seller** (and where necessary the housing company and the insurer) an opportunity
  to inspect it — repairing it before the inspection weakens the evidence and may narrow the
  buyer's rights.
- Remedies: price reduction, damages, rescission (materiality). Comparable case law (KKO,
  kuluttajariitalautakunta) from the source.
- Whether the parties are a consumer and a trader changes the available remedies
  (kuluttajariitalautakunta becomes available) — identify the roles.

## Liability of the estate agent and of others

- **The liability of the brokerage firm (1074/2000)**: the duty to disclose and the duty to
  investigate; an incorrect marketing statement may make the agent liable towards the buyer as well
  — a claim can be directed at the seller and the agent in parallel.
- The condition surveyor's liability towards the party who commissioned the survey, on a
  contractual basis.

## What this skill does NOT do

- **It does not assess the structural condition of a building** — it sets out the legal
  significance of the reports.
- **It cannot see the manager's certificate or the company's documents** — it draws up a list of
  documents to obtain and to check.
- **It does not confirm the periods for notice of defect or for liability from memory** — from the
  source or `[check]`.
- **It does not assist in concealing faults or the need for renovation** — refuse, and explain the
  risk.
- **It does not carry out a valuation** and does not take a view on the level of the purchase price.

## Continue from here

- Maintenance liability and alterations in the housing company → /real-estate-and-housing:housing-company
- The object turns out to be real property → /real-estate-and-housing:real-property-conveyance
- Checking a provision or case law → /legal-core:legal-research
- Taking a defect dispute further → /dispute-resolution:statement-of-claim
- The language and structure of the notice of defect → /legal-core:document-review
