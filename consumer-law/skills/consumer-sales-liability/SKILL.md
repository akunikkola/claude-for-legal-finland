---
name: consumer-sales-liability
description: >
  The consumer's rights where goods or a service are defective (kuluttajansuojalaki
  38/1978). Use this skill when a consumer gives notice of a defective product or
  service, when it is being assessed whether there is a defect, when a remedy is
  chosen (repair, replacement, price reduction, cancellation of the sale, damages),
  when a notice of defect is drafted or answered, or when the relationship between a
  guarantee and liability for defects is assessed. Triggers on: notice of defect,
  reklamaatio, defective goods, defective service, faulty product, guarantee, price
  reduction, cancellation of the sale, liability for defects, remedy, consumer rights,
  refund, replacement, repair.
---

# Consumer sales liability — the defect, the remedy and the notice

This skill structures the consumer's rights where goods or a service that have been
bought are defective. The map and the concepts of consumer law:
`references/consumer-law-fundamentals.md` — read it at the start of the task.

> **Disclaimer:** drafts are for review — not legal
> advice. The Consumer Protection Act is mandatory in the consumer's favour; the time
> limits and the duration of a guarantee are checked at source. See `consumer-law/AGENTS.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law and the decision practice at source

Look up the provisions on defects and remedies in the Consumer Protection Act (38/1978)
in the right chapter with the **`legal-core:legal-research` skill** — the chapter
structure has changed in the EU reforms (the sale of goods, digital content and
services), so confirm the chapter in force. The decisions of the Consumer Disputes
Board on comparable cases from the source.

## Step 0: Is this a consumer sale?

Check that the seller is a trader and the buyer a consumer (B2C). If this is a sale
between private individuals or B2B, the Sale of Goods Act and general contract law
apply → `contracts`.

> **Template:** [`templates/complaint-notice.md`](../../templates/complaint-notice.md) — the structural skeleton of a notice of defect.

## Step 1: Is there a defect?

1. **The concept of a defect**: the goods or the service do not correspond to what was
   agreed, to the requirements of the law, or to what the consumer may justifiably
   expect (quality, characteristics, information given, fitness for purpose).
2. **Information and marketing**: incomplete or misleading information and marketing
   promises can also amount to a defect.
3. **Installation and instructions**: defective installation or user instructions.
4. **Digital content and services**: these have their own rules (among other things
   updates, interoperability) — check the applicable chapter at source.
5. **The passing of risk** and whether the defect existed at the time of delivery; the
   presumptions for a defect appearing within a certain period — from the source.

## Step 2: Notice of defect in time

- The consumer must give notice of the defect **within a reasonable time** of noticing
  it or of when they ought to have noticed it — `[check the minimum period and the long
  stop at source]`. A notice given too late may forfeit the rights.
- Draft the notice: identify the product or service, describe the defect, state the
  remedy demanded, give a deadline for a reply, and attach the annexes (receipt,
  photographs).

## Step 3: The remedies in their proper order

1. **First, repair or the delivery of goods free of defects** (the seller's choice
   within limits; no unreasonable cost or inconvenience to the consumer).
2. **Second, a price reduction or cancellation of the sale**, if the remedy fails, is
   unreasonably delayed, or the defect is material (cancellation).
3. **Damages** for loss caused by the defect, separately and on its own conditions.
4. **The right to withhold payment** to the extent corresponding to the defect.

Set the remedies out in order and mark which conditions require checking at source.

## Step 4: Guarantee versus statutory liability for defects

- **A guarantee is a voluntary additional undertaking** and does not limit statutory
  liability for defects. Statutory liability applies regardless of any guarantee.
- The guarantor is liable according to the terms of the guarantee; the consumer may
  always rely on the law as well. Do not present a guarantee as the consumer's only
  remedy.

## Step 5: If the seller disputes it

- Direct the consumer to free advice (consumer advisory services / KKV) and, where
  needed, to the Consumer Disputes Board → `consumer-disputes-and-collection`.
- When drafting a trader's reply: assess the claim of defect honestly; mandatory rights
  cannot be disputed by a contract term.

## What this skill does NOT do

- **It does not confirm periods for giving notice, the duration of a guarantee or any
  other time limit from memory** — from the law or `[check]`.
- **It does not apply the Consumer Protection Act to B2B or private sales** → `contracts`.
- **It does not draft terms that weaken the consumer's rights** — such terms are void.
- **It does not give the Consumer Disputes Board's decision** — that is within the
  Board's competence.

## Continue from here

- Distance selling, off-premises selling and the right of withdrawal → /consumer-law:distance-selling-and-withdrawal
- Taking a dispute to the Board, and debt collection → /consumer-law:consumer-disputes-and-collection
- A defect in a B2B or private sale (the Sale of Goods Act) → /contracts:contract-review
- Checking a provision or the decision practice → /legal-core:legal-research
