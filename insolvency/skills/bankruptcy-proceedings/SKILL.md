---
name: bankruptcy-proceedings
description: >
  The course of bankruptcy proceedings under the Finnish Bankruptcy Act
  (konkurssilaki 120/2004), from the creditor's and the debtor's point of
  view. Use this skill when the user is preparing or assessing a bankruptcy
  petition, has learned that a counterparty has gone bankrupt, is lodging a
  claim in a bankruptcy (valvontakirjelmä), is assessing a dividend or the
  order of priority of creditors, is handling a claim for recovery to the
  estate, or is dealing with the estate administrator, the creditors'
  committee or the creditors' meeting. Triggers on: bankruptcy, konkurssi,
  bankruptcy petition, konkurssihakemus, estate administrator, pesänhoitaja,
  bankruptcy estate, konkurssipesä, bar date, valvontapäivä, lodging a claim,
  valvontakirjelmä, distribution list, jakoluettelo, dividend, jako-osuus,
  creditors' meeting, velkojainkokous, recovery to the estate, takaisinsaanti,
  lapse of bankruptcy, konkurssin raukeaminen, julkisselvitys.
---

# Bankruptcy proceedings — course, lodging of claims and distribution

This skill sets out the stages of a bankruptcy (konkurssilaki 120/2004) and produces
checklists for the creditor and for the debtor. Fundamentals:
`../insolvency-assessment/references/insolvency-fundamentals.md`.

> **Disclaimer:** the drafts and lists are to be checked — not legal advice.
> Applications and claims are filed by a human within the time limit; calendar
> responsibility sits with a human. See `insolvency/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law in the source

Fetch the applicable provisions of the Bankruptcy Act (conditions, time limits,
procedural stages) with the **`legal-core:legal-research` skill** before you present
them as verified. This skill describes the structure; the sections and the periods
change.

## The arc of the procedure

1. **Petition** — by the debtor itself or by a creditor (the grounds for a creditor's
   petition, including the presumptions of insolvency and the use of a demand for
   payment under threat of bankruptcy: check the conditions in the source).
2. **Adjudication** — the court adjudicates the debtor bankrupt and appoints an
   **estate administrator** (pesänhoitaja); the debtor's power to dispose of its
   assets passes to the estate.
3. **Estate inventory and debtor's report** — drawn up by the estate administrator;
   the debtor has a duty to contribute.
4. **Lodging of claims** — the estate administrator sets the **bar date**
   (valvontapäivä); a creditor must lodge its claim in writing (the conditions for
   late lodging and the fee from the source). **This is the creditor's most critical
   date.**
5. **Distribution list** — the estate administrator's proposal, objections,
   confirmation by the court.
6. **Realisation and distribution** — the order of priority of creditors (1578/1992):
   as a rule creditors rank equally, with exceptions (pledge, floating charge,
   subordinated claims) from the source.
7. **Conclusion** — final accounts; or **lapse** for want of assets; or transfer to
   **public receivership** (julkisselvitys, konkurssiasiamies).

## Creditor's checklist

- [ ] Basis and amount of the claim documented (contract, invoices, interest, penalty
      interest itemised separately)
- [ ] Security and its standing established (the separate position of a secured
      creditor)
- [ ] **Bar date in the calendar** and the written claim prepared in good time
      `[model calculation — check]`
- [ ] Any right of set-off checked in the source
- [ ] Exposure to recovery assessed (payments received during the critical period —
      758/1991)
- [ ] Draft distribution list reviewed, need to object and the time limit for it
- [ ] Decision-making power and voting at the creditors' meeting: own position
      prepared

You produce the draft written claim with this skill; for Word formatting and revisions
use the `adeu` MCP.

## Checklist for the debtor (and its management)

- [ ] Duty to contribute: information and material to the estate administrator
- [ ] Accounts handed over up to date
- [ ] Confirmation of the estate inventory (affirmation of correctness)
- [ ] Questions of continuing or transferring the business, with the estate
- [ ] Employment relationships: termination in bankruptcy and **pay security**
      (palkkaturva) for employees → `employment-law`
- [ ] Mapping of environmental and contractual liabilities
- [ ] The management's own position: recovery to the estate, damages (Limited
      Liability Companies Act (osakeyhtiölaki) chapter 22), debtor's offences —
      refer them to their own counsel where necessary

## Recovery to the estate (758/1991)

The estate administrator or a creditor may demand that a transaction be set aside.
Frame the claim or the defence: the transaction to be set aside, the **critical
period** counted backwards from the reference date (the periods from the source;
longer for related parties), the ground for recovery (general / setting aside of a
payment / gift and so on) and the extent of the duty to return. Mark the questions of
evidence.

## What this skill does NOT do

- **It does not file a petition, a claim or an objection** — the drafts go to a human,
  who is responsible for the time limits.
- **It does not confirm the bar date, the conditions for late lodging or the periods
  for objecting from memory** — from the source or `[check]`.
- **It does not predict a dividend as a figure** without the estate administrator's
  information — it frames the order of priority.
- **It does not act as estate administrator** and does not replace that person's
  statutory duties.
- **It does not assist in hiding assets from the estate** (see the negative scope
  limit in `insolvency/AGENTS.md`).

## Continue from here

- Choice of procedure before bankruptcy → /insolvency:insolvency-assessment
- Collecting a claim and interrupting limitation before bankruptcy → /insolvency:debt-collection
- Checking a provision or a time limit → /legal-core:legal-research
- Court proceedings on a disputed claim → /dispute-resolution:statement-of-claim
- Language and structure of the written claim → /legal-core:document-review
