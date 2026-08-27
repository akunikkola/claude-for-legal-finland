---
name: debt-collection
description: >
  The life cycle of collecting a claim under Finnish law: voluntary collection
  and good collection practice (perintälaki 513/1999), managing and
  interrupting the limitation of a debt (728/2003), judicial collection and
  enforcement (ulosottokaari 705/2007). Use this skill when the user is
  collecting a claim or defending against collection: payment reminder,
  demand for payment, collection costs, tratta, interrupting limitation,
  payment agreement, summary proceedings for a debt, application for
  enforcement or the limits of enforcement. Triggers on: debt collection,
  perintä, payment reminder, maksumuistutus, demand for payment,
  maksuvaatimus, collection costs, perintäkulut, overdue invoice, erääntynyt
  lasku, velkomus, limitation, vanhentuminen, interruption, katkaisu, tratta,
  enforcement, ulosotto, attachment, ulosmittaus, payment default entry,
  maksuhäiriömerkintä.
---

# Debt collection — from voluntary collection to enforcement

This skill sets out the stages of collecting a claim and produces the drafts
(reminder, demand for payment, notice interrupting limitation, payment agreement)
from the point of view of both parties. Fundamentals:
`../insolvency-assessment/references/insolvency-fundamentals.md`.

> **Disclaimer:** the drafts are to be checked — not legal advice. Sending them and
> the time limits are the responsibility of a human. See `insolvency/AGENTS.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Stage 0: The state of the claim

Before any collection measure, confirm the premises:

- **Basis and amount** — contract, invoice, itemisation; interest and penalty
  interest (under korkolaki — check the reference rate in force from the source,
  not from memory).
- **Disputed or undisputed?** A disputed claim may not be collected from a consumer
  by voluntary collection under the Debt Collection Act — a disputed claim is
  resolved in court proceedings → `dispute-resolution:statement-of-claim`.
- **Limitation (728/2003)** — the general limitation period is three years and it
  can be interrupted; check the special periods (after a judgment, final
  limitation, the period for an enforcement order) from the source. **Document
  every act of interruption with its date.**
- **Consumer or business?** In consumer claims the cost caps and time limits in the
  Debt Collection Act are mandatory — fetch the maximum amounts in force from the
  source (they have changed; do not use figures from memory).

## Stage 1: Voluntary collection (513/1999)

- The course: payment reminder → demand for payment → (in business claims a
  **tratta** is possible) → payment agreement or transfer to judicial collection.
- **Good collection practice** (hyvä perintätapa): no false or misleading
  information, no unreasonable costs, no unnecessary harm, the debtor's right to
  information. Check the details in the source.
- On the debtor's side: check that the collection costs are lawful, demand an
  itemisation, dispute an unfounded claim in writing and raise the possibility of a
  payment plan.

## Stage 2: Judicial collection

- **Undisputed claim**: summary application for a summons to the käräjäoikeus →
  default judgment → enforcement order. Drafting:
  `dispute-resolution:statement-of-claim` (summary form).
- **Disputed claim**: full civil proceedings → `dispute-resolution` domain.
- Weigh the cost risk against the amount of the claim and the debtor's ability to
  pay — a judgment against an insolvent debtor produces no payment (→
  `insolvency-assessment`).

## Stage 3: Enforcement (705/2007)

- Application for enforcement on the basis of an enforcement order (a judgment or
  equivalent); claims that are directly enforceable (taxes among others) separately.
- Protection of the debtor: the **protected portion** (suojaosuus) in the attachment
  of wages and the right to retain essentials — the amounts are checked from the
  source (they are re-confirmed regularly).
- Alternatives within enforcement: payment plan, postponement, free months — the
  conditions from the source.
- **The time limit on an enforcement order** and the final limitation of the debt:
  check the periods from the source before you conclude that a claim can no longer
  be collected.

## The debtor's overall problem

If the debtor has several creditors and is permanently insolvent, a single
collection arrangement is not enough → steer the user to the
`insolvency-assessment` skill (company: restructuring or bankruptcy; private
individual: debt adjustment plus financial and debt counselling).

## What this skill does NOT do

- **It does not send collection letters and does not file applications** — the
  drafts go to a human.
- **It does not confirm the maximum collection costs, the reference rate, the
  protected portion or the special limitation periods from memory** — from the
  source or `[check]`.
- **It does not carry out coercive collection or collection contrary to good
  collection practice** — no threats, no misleading, no artificial inflation of
  costs.
- **It does not collect a disputed consumer claim as voluntary collection** — a
  disputed matter is taken to court.
- **It does not make credit decisions or payment default entries**.

## Continue from here

- The debtor's overall situation and the choice of procedure → /insolvency:insolvency-assessment
- Debtor in bankruptcy: lodging the claim → /insolvency:bankruptcy-proceedings
- Summary or disputed proceedings for a debt → /dispute-resolution:statement-of-claim
- Checking a limitation provision in the source → /legal-core:legal-research
- Finalising a draft payment agreement → /contracts:contract-drafting
