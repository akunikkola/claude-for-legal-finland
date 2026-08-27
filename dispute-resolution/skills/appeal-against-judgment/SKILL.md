---
name: appeal-against-judgment
description: >
  Appealing against a judgment of a general court under the Code of Judicial Procedure
  (oikeudenkäymiskaari 4/1734): an appeal from a judgment of the käräjäoikeus to the
  hovioikeus and leave for continued consideration, an appeal to the Supreme Court and leave
  to appeal, the notice of dissatisfaction, the time limits and the content of the appeal.
  Use this skill when the user is appealing or considering an appeal against a judgment of
  the käräjäoikeus or the hovioikeus in a civil case, is drafting an appeal, or asks about
  leave for continued consideration (jatkokäsittelylupa), leave to appeal (valituslupa) or
  the time limit for appealing.
---

# Appeal against a judgment (oikeudenkäymiskaari)

This skill helps to appeal against a judgment in a civil case by the right procedure and
within the time limit. **An appeal begins already in the käräjäoikeus, with the notice of
dissatisfaction** — failing to give it can bar the appeal, so the timing is critical.

> **Disclaimer:** a draft or assessment for review — not legal advice and not an assessment
> of whether the case will succeed. See `dispute-resolution/AGENTS.md`. The fundamentals:
> `../statement-of-claim/references/dispute-resolution-fundamentals.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the procedure, the time limits and the grounds for leave against the source
Retrieve the appeal provisions of the Code of Judicial Procedure (from the käräjäoikeus to the hovioikeus: chapter 25, and leave for continued consideration chapter 25 a; the KKO and leave to appeal chapter 30) with the **`legal-core:legal-research` skill**. **Do not state time limits or grounds for leave from memory** — retrieve them and record the source; if you cannot check them, mark `[check the time limit / ground for leave]`.

## Step 1: Notice of dissatisfaction (käräjäoikeus)
When an appeal is brought against a judgment of the käräjäoikeus, **dissatisfaction must generally be announced first**, within a time limit running from the pronouncement or the giving of the judgment. Confirm this immediately — without it the right of appeal can be lost. The time limit for the appeal begins after that.

## Step 2: Appeal to the hovioikeus + leave for continued consideration
- Draft the **appeal** to the hovioikeus within the time limit: which judgment is appealed against and in what respect, **what change is sought**, the **grounds** (why the judgment is wrong — the evaluation of the evidence, the application of the law, a procedural error), and the evidence relied on.
- **Leave for continued consideration (OK chapter 25 a):** in many matters the hovioikeus examines the case in full only if leave is granted. Identify the grounds for leave (among others reason to change, the precedent ground, a weighty reason) and argue in the appeal that the conditions for leave are met.

## Step 3: Appeal to the Supreme Court + leave to appeal
- Appealing to the KKO requires **leave to appeal (OK chapter 30)** as a rule. Leave is granted sparingly — the central ground is the **precedent ground** (the law is not clear elsewhere, the case law is inconsistent) or another weighty reason.
- Direct the application for leave to appeal at those grounds; mere dissatisfaction with the outcome is not enough.

## Step 4: Draft the submission and the checklist
Produce the appeal or application for leave to appeal and an **appeal checklist** (notice of dissatisfaction given, the time limit for appealing with its source, the grounds for leave for continued consideration or leave to appeal, the claims, the grounds, the evidence). Produce the document with the `docx` skill (new) or edit an existing one with the `adeu` MCP. Mark `[confirm — the time limit and the ground for leave: needs checking]`.

## Report
Emphasise that the time limits are absolute and that the thresholds for leave are high. Attach the sources (OK chapters 25, 25 a and 30 as checked, and any KKO case law). Do not present the probability of success as final.

## What this skill does NOT do
- **Does not replace the responsibility of the agent or advocate.** The appeal and the application for leave to appeal are a draft that needs checking; the person handling the matter is responsible for the appeal and its timing.
- **Does not predict whether the case will succeed or what the judgment will be.** It does not assess whether leave for continued consideration or leave to appeal will be granted or whether the judgment will be changed — it describes the grounds even-handedly.
- **Does not confirm time limits for appealing, the time limit for the notice of dissatisfaction or the grounds for leave from memory.** The time limits are absolute (failing to observe one can bar the appeal) and are taken from the source; anything unchecked is marked `[check the time limit / ground for leave]`.
- **Does not track or calculate time limits from a calendar.** It does not replace arranging proper case supervision and deadline monitoring.
- **Does not confirm the grounds for leave for continued consideration (OK 25 a) or leave to appeal (OK 30) from memory** — the grounds for leave and their interpretation are checked against the source.
- **Does not settle finally whether a notice of dissatisfaction is required** without the procedure being checked against the source; the wrong procedure can lose the right of appeal.

## Continue from here
- Planning the evidence relied on in the appeal → /dispute-resolution:evidence
- Checking the time limit for appealing, the grounds for leave and KKO case law → /legal-core:legal-research
- Quality-checking the appeal or application for leave to appeal before filing → /legal-core:document-review
