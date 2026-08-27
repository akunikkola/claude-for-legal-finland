---
name: termination-of-employment
description: >
  Assessment of the ending of an employment relationship under Finnish employment law
  (Employment Contracts Act, työsopimuslaki 55/2001): termination with notice
  (irtisanominen, on grounds relating to the person and on financial and
  production-related grounds), summary termination (purkaminen), termination during
  the probationary period, the procedure, notice periods and risk classification.
  Use this skill when the user is considering or assessing the termination, summary
  termination, lay-off or probationary-period dismissal of an employee, asks whether
  the grounds are sufficient or what the correct procedure is, or mentions
  termination, summary termination, a warning, a hearing or the notice period.
---

# Ending an employment relationship — assessing the grounds and the procedure

This skill assesses the substantive grounds and the procedure for ending an employment relationship under Finnish
employment law and classifies the risk. **An employee's protection against termination is mandatory
law** — ending a relationship without grounds or by a defective procedure leads to liability in damages.

> **Disclaimer:** this is a risk assessment that needs checking — not legal advice and not
> a final position on the lawfulness of the termination. The decision to terminate belongs to the employer and its
> legal assessment to an employment lawyer. See `employment-law/AGENTS.md`. Fundamentals:
> `../employment-contract/references/employment-law-fundamentals.md`.

## Check the law and the TES from the source
Retrieve the provisions of the Employment Contracts Act (työsopimuslaki 55/2001) on ending a relationship and the notice periods, together with the provisions of the
applicable TES, with the **`legal-core:legal-research` skill**. Where needed, retrieve the relevant
case law (for example KKO, Työtuomioistuin). Do not assess from memory.

## Step 1: Identify the way of ending and the grounds
- **Termination with notice on grounds relating to the person (irtisanominen)** — requires **proper and weighty
  grounds** (for example a material breach or neglect of employment obligations). As a rule this requires
  a **warning**, a **hearing** and an opportunity to correct the conduct before termination.
- **Termination with notice on financial and production-related (collective) grounds** — a **material
  and permanent reduction** in work; the **obligation to offer work and to provide training** must be met; no
  substitute work available; an obligation to re-employ may apply.
- **Summary termination (purkaminen)** — immediate ending; requires **exceptionally weighty grounds** (a still
  higher threshold than termination with notice).
- **Termination during the probationary period (koeaikapurku)** — lighter, but the grounds must **not be discriminatory or improper**.
- **Lay-off (lomautus)** — temporary; it has its own conditions and procedure.

Identify also any **specially protected groups** (for example a person who is pregnant or on family leave, a shop steward or
elected representative): heightened protection → automatically raise the risk and mark it.

If a fact underlying the calculation (the start date of the employment relationship, the length of the probationary period,
the duration of the contract) is **contradictory** in the material, calculate all scenarios in parallel
and mark each one `[model calculation — check]` — do not silently choose one interpretation,
even if one source appears the strongest. In a probationary-period dismissal, always assess the prohibition of discrimination
and special protection as a separate question, even if the dismissal appears to fail already on the time limit.

## Step 2: Assess the procedure
- Has a **warning** been given (on grounds relating to the person, where required)?
- Has the employee been **heard** before the decision?
- Have **change negotiations** (yhteistoimintalaki 1333/2021) been held, where the matter concerns
  collective grounds and the undertaking exceeds the size threshold? → the `change-negotiations` skill.
- Has the **obligation to offer work and to provide training** been established (collective grounds)?
- Has the **notice period (irtisanomisaika)** been observed (law/TES)?
- Was the decision made within the time limit (summary termination) and given in writing with reasons on request?
- Is the content and manner of delivery of the **notice of termination** in accordance with the law — check from the source.

## Step 3: Classify the risk
- **🟢 GREEN** — the grounds appear proper and weighty, the procedure meets the requirements, nothing infringing special protection.
- **🟡 YELLOW** — the grounds are possible, but there are gaps in the procedure or the evidence (a missing warning or hearing, thin documentation) → to be put right before the decision.
- **🔴 RED** — the grounds are probably insufficient, the procedure is materially defective, there is a suspicion of discrimination or an infringement of a specially protected group → do not decide without an employment lawyer's assessment.

## Step 4: Report
Produce: the classification + reasoning, the way of ending and the grounds applied, a procedural checklist
(done/missing), the notice period, and concrete corrective steps. Attach the sources
(statute + section with the `legal-research` skill, the TES named, any case law) and
mark points open to interpretation `[confirm — requires an employment lawyer's assessment]`. Do not present lawfulness
as a final conclusion.

A letter or notice of termination can be drafted (new: the `docx` skill; editing an existing one
with tracked changes: the `adeu` MCP), but only once the grounds and the procedure have been assessed.

## What this skill does NOT do

- **Does not make the decision to terminate and does not choose a strategy.** The decision and the responsibility belong to the employer; the legal assessment to an employment lawyer.
- **Does not confirm notice periods or time limits with binding effect.** These are retrieved from the law and the applicable TES and checked case by case — do not rely on a figure produced from this skill's memory.
- **Does not replace change negotiations and does not assess the content of the co-operation procedure** — that belongs to the `change-negotiations` skill.
- **Does not give a final assessment of discrimination or special protection.** A suspicion of discrimination and the situation of a specially protected group (pregnancy/family leave, shop steward) raise the risk and belong to a lawyer.
- **Does not prepare a finished letter of termination** before the grounds and the procedure have been assessed — a draft could otherwise entrench incorrect grounds.
- **Does not assess the employment law of other countries.** Finnish employment law only; in cross-border situations, say so.

## Continue from here

- Collective grounds and the undertaking exceeds the co-operation size threshold → `/employment-law:change-negotiations`
- Checking the statutory text, notice periods and case law from the source → `/legal-core:legal-research`
- Quality check of a draft letter or notice of termination → `/legal-core:document-review`
- If a dispute arises from the termination and an action in a general court is being considered → `/dispute-resolution:statement-of-claim` (note: a dispute on the interpretation of a collective agreement is heard in the Labour Court, which is outside the scope of this skill)
