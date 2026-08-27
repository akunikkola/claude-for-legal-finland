---
name: damages
description: >
  Assessing liability in damages under Finnish law (vahingonkorvauslaki
  412/1974). Use this skill when the user is assessing whether liability in
  damages has arisen or is defending against a claim for damages: negligence,
  causation, the heads of damage and the amount of compensation, the line
  between contractual and non-contractual liability, an employer's vicarious
  liability, strict liability under special statutes (product liability,
  environmental damage) or the adjustment of compensation. Triggers on:
  damages, liability in damages, negligence, causation, vicarious liability,
  damage to property, personal injury, pure economic loss, strict liability,
  product liability, adjustment of compensation, contributory negligence,
  liability insurance, vahingonkorvaus, korvausvastuu, tuottamus, syy-yhteys,
  isännänvastuu, puhdas varallisuusvahinko, ankara vastuu, tuotevastuu.
---

# Damages — assessing liability and structuring the claim

This skill sets out the general doctrine of liability in damages
(vahingonkorvauslaki 412/1974) from both perspectives: the claimant's and the
defendant's. Procedure (the action, the evidence) → the other skills in this
domain; compensation based on an offence → `criminal-procedure:injured-party-rights`.

> **Disclaimer:** the assessments are for review — not legal advice.
> The amounts of compensation are justified from the sources (KKO, the
> Finnish Advisory Board on Personal Injury Matters), not from memory. See
> `dispute-resolution/AGENTS.md`.

## Check the statute against the source

Retrieve the provisions of the Tort Liability Act (VahL 412/1974) and the
liability provisions of any applicable special statute with the
**`legal-core:legal-research` skill**; take KKO case law (the assessment of
negligence, causation, amounts) from the source with the identifiers.
Limitation (728/2003: three years from becoming aware — the special periods
from the source) is checked immediately →
`insolvency:debt-collection` for the mechanics of interrupting it.

## Step 0: Which ground of liability?

Drawing this line governs the whole analysis — work through it in order:

1. **Contractual liability** — there is a contract between the parties:
   liability is determined by the contract and by the statute governing that
   type of contract (typically exculpatory, that is a reversed burden of proof;
   limitations of liability are effective within their limits) →
   `contracts:contract-review`.
   **As a rule VahL does not apply to a contractual relationship.**
2. **Tort liability (VahL)** — no contractual relationship: liability for
   negligence as the main rule.
3. **Strict liability** — special statutes with no requirement of negligence:
   the product liability act (694/1990), environmental damage (737/1994 →
   `environment-and-planning:environmental-liability`), motor insurance,
   patient injuries and so on — check the applicable special statute first; it
   displaces the general doctrine.

## Step 1: The conditions of liability (tort liability)

Set out and document each one separately:

1. **The damage** — the head of damage governs recoverability: personal injury,
   damage to property, the financial loss connected with them — and **pure
   economic loss**, which is compensated under VahL only on special conditions
   (an offence, the exercise of public authority, especially weighty reasons
   — from the source). This distinction defeats many claims.
2. **Negligence** — the standard of care: what a careful actor would have done;
   breach of a norm as an indication; the significance of the degree of fault
   (adjustment, insurance, the breaking through of limitations of liability).
3. **Causation** — conditio sine qua non plus sufficient foreseeability; the
   burden of proof is on the claimant (the exceptions from the source).
4. **Whom liability attaches to** — **vicarious liability**: an employer is
   liable for an employee's fault (the employee's own liability is limited —
   the channelling from the source); a public body's liability for the exercise
   of public authority on conditions of its own; liability of a company organ as
   against OYL chapter 22 → `company-law`.

## Step 2: The amount of compensation

- **The principle of full compensation** and the prohibition on enrichment; the
  claimant's duty to mitigate the damage.
- Personal injury: the heads as in the
  `criminal-procedure:injured-party-rights` skill (the recommendations of the
  Advisory Board on Personal Injury Matters from the source).
- Damage to property: repair costs as against diminution in value as against
  market value; deductions for age from the case law.
- **Adjustment**: on grounds of reasonableness (VahL) and **contributory
  negligence** — the defendant's most important defences after denying
  negligence.
- Interest on the claim (633/1982) `[check]`.

## Step 3: The practical route

1. **Letter of claim** — the facts, the ground of liability, the heads with
   their justifications, a time limit; interrupting limitation, documented.
2. **Map the insurance** — the liability insurance (of the person causing the
   damage), one's own insurance (subrogation); the notification periods from the
   policy terms `[check]`. Many cases are resolved in the insurer's claims
   handling — FINE and the boards are alternatives.
3. **Settlement or action** — the costs risk against the amount at stake and the
   strength of the evidence → the `statement-of-claim` and `evidence` skills.

## What this skill does NOT do

- **Does not promise an amount of compensation** — the levels are taken from the
  case law from the source; the court exercises discretion.
- **Does not apply VahL to a contractual relationship** without checking the
  line — contractual liability is assessed through the contract.
- **Does not confirm limitation periods or insurance notification periods
  from memory** — from the source, or `[check]`.
- **Does not make a medical or technical assessment of causation** — it sets out
  the legal framework; expert opinions are separate.
- **Does not draft unfounded or oppressive claims** — the claim must correspond
  to the ground of liability as set out.

## Continue from here

- Bringing the action and wording the claims → /dispute-resolution:statement-of-claim
- Planning the evidence (causation, negligence) → /dispute-resolution:evidence
- Compensation based on an offence → /criminal-procedure:injured-party-rights
- Assessing contractual liability → /contracts:contract-review
- Environmental damage → /environment-and-planning:environmental-liability
- Checking a provision or KKO case law → /legal-core:legal-research
