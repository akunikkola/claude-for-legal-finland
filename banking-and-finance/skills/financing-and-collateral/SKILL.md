---
name: financing-and-collateral
description: >
  Finance agreements and collateral under Finnish law (velkakirjalaki
  622/1947; takauslaki 361/1999; korkolaki 633/1982). Use this skill when
  the user is drafting or reviewing a promissory note, a loan agreement or
  a finance agreement with covenants, is planning or assessing security
  (a pledge, a real property pledge, a business mortgage, a guarantee, a
  third-party pledge, a pledge of receivables), is assessing acceleration
  or a breach of covenant, or is structuring a group's financing and
  collateral. Triggers on: promissory note, loan agreement, covenant,
  acceleration, cross default, pledge, business mortgage, guarantee,
  absolute guarantee, third-party pledge, security agent, syndicated
  loan, default interest, negative pledge, velkakirja, takaus,
  yrityskiinnitys, kovenantti.
---

# Financing and collateral — agreements, the collateral package and the risks

This skill structures finance agreements and collateral arrangements.
The fundamentals, the collateral map and the risk points:
`references/finance-fundamentals.md` — read it at the start of the task.

> **Disclaimer:** drafts are for review — not legal advice and not credit
> or investment decisions. See `banking-and-finance/AGENTS.md` — among
> other things, whether an authorisation is required is checked first if
> the user is themselves granting credit.

## Check the Act from the source

Fetch the provisions of the Promissory Notes Act (velkakirjalaki
622/1947), the Interest Act (korkolaki 633/1982) and the Act on
Guarantees and Third-Party Pledges (takauslaki 361/1999) with the
**`legal-core:legal-research` skill**; the reference rate and the limits
on consumer credit `[check — Suomen Pankki/source]`. KKO's case law on
security and guarantees from the source.

## Step 1: Structuring the arrangement

- **Parties and roles**: the debtor, the creditor(s), the guarantors, the
  pledgors — in a group also who receives the consideration (upstream
  security and the connection to related-party and distribution rules in
  OYL → `company-law:corporate-governance`).
- **Protection of the weaker party**: a consumer (the mandatory credit
  provisions of KSL) or a **private guarantor or private pledgor**
  (361/1999 mandatory protection: information before the commitment,
  notifications about the servicing of the debt, limitations of
  liability — the details from the source). A failure here can bring the
  security down.
- **Type of promissory note**: ordinary or negotiable — transferability
  and the right to raise defences differ (622/1947, from the source).

## Step 2: Loan documentation

Work through at least these (both when drafting and when reviewing):

1. **Financial terms** — interest (reference rate + margin; the
   mechanism for changing the rate), the repayment schedule, early
   repayment and its costs, default interest (633/1982 — the amount from
   the source).
2. **Covenants** — calibrate the consequences of a breach in stages
   (waiver, negotiation, margin increase, acceleration); define the
   calculation basis precisely (which accounting standard it is tied
   to).
3. **Grounds for acceleration** — payment default, breach of covenant, a
   material adverse change (MAC), cross-default — assess reasonableness
   (OikTL section 36) especially in wide MAC and cross-default clauses.
4. **Information and other undertakings** — reporting, negative pledge,
   change of control.
5. **Transferability** — the creditor's right to transfer, the debtor's
   consent.

## Step 3: The collateral package

1. **Select the security** from the collateral map (the reference)
   according to the asset and the debtor; check for overlaps and gaps.
2. **Get the perfection right** — a pledge binds third parties only if it
   is created in the correct way (delivery, registration, notice to the
   debtor) — this is the most common error in security law; the
   requirements from the source.
3. **Order of priority** — the ranking between the securities and the
   position of a business mortgage in bankruptcy (1578/1992 →
   `insolvency`).
4. **Recovery risk** — security given for an old debt or close to
   insolvency (758/1991) → `insolvency:insolvency-assessment`.
5. **Security agent and syndicate** — the agent's authority, the
   decision-making thresholds, the sharing of security.

## Step 4: A distress situation

A breach of covenant or a payment default: the facts first (has a breach
actually occurred on the agreed calculation basis), then the escalation
ladder (a waiver request and its documentation, a standstill, a
restructuring) — and if the debtor is insolvent, the whole package →
`insolvency:insolvency-assessment` (from the creditor's perspective:
realising the security vs. restructuring).

## What this skill does NOT do

- **Does not make credit decisions and does not assess
  creditworthiness** — it structures the law.
- **Does not confirm reference rates, interest rate caps or the order of
  priority from memory** — from the source or `[check]`.
- **Does not override the mandatory protection of a private guarantor or
  a consumer** — an ineffective term is pointed out, not hidden.
- **Does not design ways around an authorisation requirement** — whether
  an authorisation is required is established first (AGENTS.md).
- **Does not replace a tax or accounting assessment** (interest deduction
  limitations → `taxation:corporate-taxation`).

## Continue from here

- Contract mechanics and adjustment → /contracts:contract-review
- Group distribution and related-party questions → /company-law:corporate-governance
- The debtor's insolvency and recovery → /insolvency:insolvency-assessment
- Registration of real property security → /real-estate-and-housing:real-property-conveyance
- Checking a provision or KKO case law → /legal-core:legal-research
