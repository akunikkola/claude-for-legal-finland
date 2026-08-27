---
name: inheritance-and-wills
description: >
  Succession, wills and the administration of a deceased person's estate in
  Finland (perintökaari 40/1965). Use this skill when working out the order of
  succession, drafting or interpreting a will, assessing the compulsory share
  of a direct heir, structuring an estate inventory or a distribution of an
  estate, clarifying the position of a surviving spouse, or assessing a
  challenge to a will or to a distribution. Triggers on: inheritance, heir,
  direct heir, succession, will, compulsory share, distribution of an estate,
  estate inventory, deed of estate inventory, administration of an estate,
  estate distributor, surviving spouse, right of possession, estate,
  contesting a will, perintö, perillinen, rintaperillinen, testamentti,
  lakiosa, perinnönjako, perunkirjoitus, perukirja, pesänjakaja, leski,
  hallintaoikeus, jäämistö, testamentin moite, parenteeli.
---

# Inheritance and wills — succession, the compulsory share and administering an estate

This skill sets out succession, wills and the administration of an estate.
The concepts and structure of inheritance law are in
`references/inheritance-code-fundamentals.md` — read it at the start of the task.

> **Disclaimer:** drafts and analyses are for review — not legal advice.
> The form of a will, the time limits and the taxes are checked against the
> source; inheritance tax does not belong here. See
> `family-and-inheritance/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the statute and the case law against the source

Retrieve the provisions of the Code of Inheritance (perintökaari 40/1965) with the
**`legal-core:legal-research` skill**. Take KKO case law on the interpretation of
wills, on the compulsory share, on the position of the surviving spouse and on
challenges to a distribution from the source. **The formal requirements for a will**
(written form and two disqualification-free witnesses present at the same time) are
always checked against the statute — a defect of form can render a will void.

> **Template:** [`templates/will.md`](../../templates/will.md) — the skeleton of a will together with its checklist on form (a document subject to a prescribed form).

## Step 1: The order of succession where there is no will

1. **The parentela classes** (the order of succession under the Code of
   Inheritance): first the direct heirs (children, with grandchildren taking
   their place), then the parents and siblings, then the grandparents. The State
   last of all.
2. **The position of the surviving spouse**: the spouse's right of inheritance
   where there are no direct heirs; the spouse's right to keep the estate
   undivided and the **right of possession of the joint home** — check the
   conditions against the source.
3. **A cohabiting partner has no right of inheritance** — only under a will.
   This is a common misconception; raise it.

## Step 2: The will

- **Purpose and type**: a universal disposition or a specific disposition (a
  legacy); full ownership, a right of possession (for example to the surviving
  spouse) or a right to the yield. Work out what the testator is trying to
  achieve.
- **Form**: written, dated, signed by the testator and attested by **two
  disqualification-free witnesses** simultaneously — `[check the formal
  requirements and the disqualification of witnesses against the source]`. An
  emergency will is an exception with conditions of its own.
- **Taking the compulsory share into account**: a will cannot override the
  compulsory share of a direct heir (see step 3); allow for this in drafting.
- **Invalidity and challenge**: a defect of form, the testator's capacity, duress
  or mistake → the heir has a period in which to bring a challenge `[check]`.

## Step 3: The compulsory share

- **The compulsory share (lakiosa) of a direct heir** is half of the statutory
  share of the inheritance — mandatory and independent of any will.
- **The compulsory share must be claimed** by notice to the beneficiary under the
  will within a time limit running from the death or from becoming aware of it —
  `[check the time limit]`; failure to claim can result in loss of the right.
- Supplementing the compulsory share, and the advancements and gifts to be taken
  into account (a gift made to favour one heir) — the calculation from the source.

## Step 4: Administration of the estate and the estate inventory

1. **The estate inventory (perunkirjoitus)** must be carried out within a time
   limit running from the death (`[check the time limit]`); the deed of estate
   inventory lists the assets, the debts and the parties to the estate, and
   serves among other things as the tax return to Verohallinto.
2. **The parties to the estate**: the heirs, the beneficiaries under a universal
   disposition and the surviving spouse (before the division of matrimonial
   property). The estate is administered jointly unless an estate administrator
   is appointed.
3. **Administration of the estate**: establishing and paying the debts before any
   distribution.

## Step 5: Division of matrimonial property and distribution of the estate

- **On death the division of matrimonial property comes first**, with the
  surviving spouse (→ `marriage-and-division-of-property`), **and the
  distribution of the inheritance after it**, among the heirs. Keep the stages
  apart.
- An agreed distribution (unanimity of the parties to the estate, a formal
  requirement) or a distribution carried out by an estate distributor where there
  is a dispute.
- A challenge to the distribution within a time limit `[check]`.

## Step 6: Taxes

- **Inheritance tax** and any gift tax are determined on the basis of the deed of
  estate inventory and by Verohallinto — **do not calculate inheritance tax and
  do not state tax brackets and thresholds from memory** → the `taxation` domain
  and Verohallinto.

## What this skill does NOT do

- **Does not confirm the formal requirements for a will or the time limits from memory**
  — from the statute, or `[check]`.
- **Does not calculate inheritance tax** → `taxation`.
- **Does not override the compulsory share** when a will is drafted.
- **Does not act as an estate distributor and does not settle a dispute over a
  distribution** — that is for the estate distributor and the court.
- **Does not assume a right of inheritance for a cohabiting partner** — only
  under a will.

## Continue from here

- The division of matrimonial property on death and the surviving spouse's equalisation payment → /family-and-inheritance:marriage-and-division-of-property
- Planning ahead: the continuing power of attorney → /family-and-inheritance:guardianship-and-powers-of-attorney
- Inheritance tax and gift tax → /taxation:tax-procedure-and-appeals
- Contesting a distribution or a will before a court → /dispute-resolution:statement-of-claim
- Checking a provision or KKO case law → /legal-core:legal-research
