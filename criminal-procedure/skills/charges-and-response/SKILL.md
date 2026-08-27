---
name: charges-and-response
description: >
  The court stage of a criminal matter in Finland (laki oikeudenkäynnistä
  rikosasioissa 689/1997): consideration of charges, the application for a summons,
  the defendant's response and the structure of the defence, evidence, the
  judgment-proposal procedure and the main hearing. Use this skill when a charge has
  been brought or a summons received and a response is being drafted, when the
  defence or the evidence is being structured, when the conditions for a judgment
  proposal (plea negotiation) are assessed, when preparing for the main hearing, or
  when considering an appeal against a criminal judgment. Use it also for assessing a
  decision not to prosecute. Triggers on: charge, application for a summons in a
  criminal matter, response to a charge, defence, written procedure, judgment
  proposal, plea negotiation, main hearing, sentencing demand, non-prosecution,
  criminal judgment, appeal to the court of appeal.
---

# Charges and response — structuring the court stage

This skill structures a criminal matter from the bringing of the charge to judgment
(ROL 689/1997). The fundamentals and the arc of the process:
`../pre-trial-investigation-and-coercive-measures/references/criminal-procedure-fundamentals.md`.

> **Disclaimer:** the outputs are support for counsel's work — not
> instructions on defending yourself without counsel, and not a prediction of the outcome.
> See `criminal-procedure/AGENTS.md` (the presumption of innocence, the negative scope).

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law at source

Look up the provisions of ROL, the **elements and the sentencing range of the offence
named in the charge from the Criminal Code**, and the precedents of KKO on the standard
of proof and on sentencing, with the **`legal-core:legal-research` skill**. Limitation of
the right to prosecute is checked in the Criminal Code at source — it is an absolute
procedural prerequisite.

## The outcomes of the consideration of charges

Establish what the prosecutor has decided and what follows from it:

- **A charge** — an application for a summons to the court.
- **Non-prosecution** — procedural (no evidence, no right to prosecute) or discretionary
  (triviality, equity and so on — the grounds from the source). The injured party's
  remedies: a request for reconsideration to the Prosecutor General and the **secondary
  right to prosecute** → `injured-party-rights`.
- **A judgment proposal (ROL chapter 5 b, existence verified)** — a confession trial: a
  confession and a mitigated sentencing range; the scope, the conditions and whether the
  injured party's consent is needed from the source. Structure the weighing up for the
  client: the mitigation and the speed against the finality of a confession —
  **the decision is always the client's**.

## Analysing the application for a summons (for defence counsel)

Break the charge into parts before responding:

1. **The description of the act** — what precisely is alleged to have been done: the act,
   the time, the place, intent or negligence. The court is bound by the description of
   the act (**being bound by the charge**) — the defence is built against that, not
   against the heading.
2. **The elements of the offence** — does every element of the description correspond to
   the elements of the offence (from the source)? What is left unproven?
3. **The evidence** — the prosecutor's evidence and what each item is offered to prove;
   the gaps and the alternative explanations; procedural errors in the investigation and
   the prohibition on using evidence (the conditions from the source).
4. **The claims** — the sentencing demand, forfeiture, a business prohibition, a driving
   ban and other ancillary claims, together with the injured party's civil claims — each
   must be answered separately.

## The structure of the response

Draft the response in the form the court has requested:

- **The position on the charge**: is it contested or admitted, and **to what extent** —
  tied precisely to the parts of the description of the act (for example the act is
  admitted, intent is contested; or a lesser characterisation is sought).
- **The grounds for contesting** — the facts and the legal grounds separately.
- **The position on the civil claims** — the basis and the amount separately (the amount
  may be admitted as reasonable even though the basis is contested).
- **Own evidence** — the items of evidence and what each is offered to prove.
- **Positions on procedure** — the written procedure (the conditions from the source),
  the arrangements for the main hearing, requests for confidentiality.

## Evidence (chapter 17 of the Code of Judicial Procedure)

The general doctrine: `dispute-resolution:evidence` (the burden of proof, the standard of
proof, the prohibition on using evidence). The emphases specific to criminal matters: the
prosecutor's burden of proof and **in dubio pro reo**, the defendant's right not to
contribute, the right of a close relative to remain silent, anonymous evidence and the
limits on using a statement from the investigation at the main hearing (the conditions
from the source).

## The main hearing and the sentence

- The course of the main hearing and the principle of concentration; prepare with topics
  for questioning, not with scripts.
- **Determining the sentence**: the choice of type and the measurement (the general
  provisions of the Criminal Code from the source), mitigating and aggravating grounds,
  previous offending, grounds for reducing the sentence — structure a position on
  sentencing with comparable practice (KKO from the source).
- Give a position on the sanction in the alternative as well ("if the charge is upheld")
  — this does not weaken the contesting of the charge.

## Appeals

Notice of dissatisfaction and the appeal within the time limits `[check at
source]`; whether leave for continued consideration is needed in the court of appeal (the
scope from the source) and leave to appeal to KKO. The mechanics:
`dispute-resolution:appeal-against-judgment` — the differences in a criminal matter (among
others the prohibition of reformatio in peius where the prosecutor is satisfied) are
checked at the source.

## What this skill does NOT do

- **It does not decide the line** (contesting, admitting, a judgment proposal) — the
  decision is the client's and counsel's.
- **It does not predict the judgment or the sentence** — an assessment of sentencing is
  always `[confirm — requires a criminal lawyer's assessment]` and tied to practice taken
  from the source.
- **It does not construct untruthful accounts** and does not align the evidence — an
  absolute refusal.
- **It does not confirm sentencing ranges, limitation periods or appeal periods from
  memory** — from the source or `[check]`.
- **It does not handle the injured party's claims in the defendant's matter** — a
  conflict of interest; see `injured-party-rights` and AGENTS.md.

## Continue from here

- The investigation material and the closing statement → /criminal-procedure:pre-trial-investigation-and-coercive-measures
- Handling the injured party's claims → /criminal-procedure:injured-party-rights
- Checking the elements of an offence, a sentencing range or KKO practice → /legal-core:legal-research
- The general doctrine of evidence → /dispute-resolution:evidence
- The language and structure of the written response → /legal-core:document-review
