---
name: case-summarization
description: >
  Case summarization for Finnish court decisions: extracting the essential
  content of a precedent or other decision into a structured form
  (identifying details, legal question, facts, outcome, the core of the
  reasoning or ratio, significance). Use this skill when a decision of the
  KKO, the KHO, a court of appeal, the market court or another court has to
  be summarised, when assessing whether a decision applies to your own case,
  or when compiling the case law on a topic. Triggers on: summarise a
  decision, summarise a judgment, precedent, KKO, KHO, ratio decidendi, rule
  of law, the significance of a decision, prejudicate, court case, case law,
  what did the KKO hold.
---

# Case summarization — the core of a decision in structured form

This skill structures the essential content of a court decision so that it
can be used and assessed reliably. **The summary is based only on the actual
text of the decision**, not on memory and not on the headnote alone.

> **Disclaimer:** the summary is a draft that needs checking — not legal
> advice. The content of a decision is never presented from memory.
> See `legal-core/AGENTS.md`.

## Retrieve the decision from the source first

Retrieve the **actual text** of the decision with the
`legal-core:legal-research` skill (oik.ai/Finlex,
`get_decision`/`search_decisions`), or read the decision the user has
supplied. **Do not summarise a decision on the basis of its identifier or a
recollection alone** — the headnote of a case report is not the same as the
reasoning. If you cannot obtain the decision from the source, say so and do
not invent the content.

## Step 1: Identifying details

- The **case identifier** in the correct form (KKO:VVVV:NN, KHO:VVVV:NN), the
  date of the decision, the court and the composition (e.g. plenary session,
  division), and any vote (a decision reached by vote).

## Step 2: The legal question

- What **legal question** does the decision answer? Formulate it precisely —
  this governs the whole summary.

## Step 3: Facts and procedural history

- The material facts in summary (only those that matter for the decision) and
  the decisions of the lower instances in outline (district court → court of
  appeal → KKO; or administrative court → KHO).

## Step 4: Outcome

- What the court **decided** (e.g. the appeal was allowed or dismissed, the
  lower decision was upheld or overturned). Separate the outcome from the
  reasoning.

## Step 5: The core of the reasoning (ratio decidendi)

- The **rule of law** the court laid down as the basis of the decision — what
  makes the decision significant.
- **Separate ratio and obiter**: not everything stated in the reasoning is the
  operative rule. Mark what is the core of the decision and what is an aside.
- Refer to the paragraphs of the reasoning if they are numbered; quote
  precisely and keep direct quotation separate from your own summary.
- **Where the decision was reached by vote**, separate the reasoning of the
  majority from the positions of the dissenting members.

## Step 6: Significance and applicability

- **Precedential value**: what the rule of law generalises to and what it does
  not.
- **Applicability to your own case**: which facts are alike and which
  distinguish it. Do not over-read — the rule in a single decision is tied to
  the question that was put.
- **Is the decision still current?** The legislation may have changed since
  the decision — check that the rule of law does not rest on a repealed
  provision (`legal-research`).

## Step 7: The assembled summary

Produce a structured summary under the headings above. Keep it precise and
mark what is the text of the decision itself and what is your own reading of
its applicability. When you compile several decisions, present them in the
same structure and bring out the line of authority together with any
departures from it.

## What this skill does NOT do

- **Does not summarise a decision from memory or from the headnote alone** —
  it works from the actual text in the source.
- **Does not conflate ratio and obiter**, and does not present an aside as the
  operative rule of law.
- **Does not assert the content of a decision without checking** it in the
  source.
- **Does not over-read precedential value** beyond the question the decision
  addressed.

## Continue from here

- Retrieving a decision and the provision in force → /legal-core:legal-research
- Explaining a decision to a client in plain language → /legal-core:plain-language
- Checking citation forms and a written submission → /legal-core:document-review
- Testing the argument from the opposing party's perspective → /dispute-resolution:opposing-counsel
