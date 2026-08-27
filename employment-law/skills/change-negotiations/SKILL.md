---
name: change-negotiations
description: >
  Co-operation and change negotiations under the Finnish Act on Co-operation within
  Undertakings (yhteistoimintalaki 1333/2021): continuous dialogue, the conditions
  for and course of change negotiations, the negotiation proposal, time limits and
  scope of application. Use this skill when the user is planning or assessing change
  negotiations, personnel effects, lay-offs or terminations on collective grounds, or
  asks about co-operation obligations, the duty to negotiate or the co-operation
  procedure. Triggers when co-operation, YT negotiations, change negotiations,
  continuous dialogue or a negotiation proposal is mentioned.
---

# Co-operation and change negotiations (Act on Co-operation within Undertakings, yhteistoimintalaki 1333/2021)

This skill helps map the obligations under the Act on Co-operation within Undertakings (yhteistoimintalaki 1333/2021). The act **replaced
the old co-operation act (334/2007)** and introduced, among other things, **continuous dialogue**, as well as reforming
change negotiations. Do not cite the repealed act (334/2007) as being in force.

> **Disclaimer:** this is an assessment that needs checking — not legal advice. The correctness of the
> procedure and the time limits must be confirmed from the source and, where necessary, with an employment lawyer.
> See `employment-law/AGENTS.md`. Fundamentals: `../employment-contract/references/employment-law-fundamentals.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law from the source — the time limits and size thresholds are fixed
Retrieve the provisions in force of the Act on Co-operation within Undertakings (yhteistoimintalaki 1333/2021) with the **`legal-core:legal-research`
skill** (scope of application/size threshold, the content of the negotiation proposal and when it must be given,
negotiation periods, personnel representation). **Do not state the size threshold, time limits or negotiation periods
from memory** — retrieve them and record the source. If you cannot check, mark `[check the Act on
Co-operation within Undertakings]`.

## Two main components

### 1. Continuous dialogue
Regular dialogue between the employer and the personnel on the state of the undertaking, the situation of the
personnel, competence needs and wellbeing at work, and on developing the work community. Establish
from the user whether the dialogue has been arranged in the manner required by law and whether the
**development plan for the work community** is up to date.

### 2. Change negotiations
Must be held before the employer decides on measures that may lead to
- a **reduction in the workforce** (termination on collective grounds, lay-off, transfer to part-time work), or
- material **changes** to duties, working hours or other material terms.

The key stages (check the exact content and time limits from the source):
1. **The negotiation proposal** in writing before the negotiations begin, within the period laid down in law, containing the required information (the grounds, the subject, personnel numbers, the negotiation period).
2. **Provision of information** to the personnel representatives.
3. **The negotiations** in accordance with the minimum period and content laid down in law; alternatives to reduction must also be dealt with.
4. **An account** of the results of the negotiations and the decisions.
Only after this may the employer decide on a reduction → see the `termination-of-employment` skill.

## Workflow
1. Establish: the number of personnel in the undertaking (does the act apply?), the planned measure and its personnel effects, the timetable, personnel representation.
2. Retrieve the applicable provisions and time limits with the `legal-research` skill.
3. Produce a **procedural checklist** and a timeline (negotiation proposal → information → negotiations → account → decision), marking the statutory basis of each stage.
4. Raise the risks: a decision taken too early (before the negotiations) = a material defect → liability in damages; a missing or late negotiation proposal; an insufficient negotiation period. Mark `[confirm — requires an employment lawyer's assessment]`.

## Report
Produce the checklist and timeline with source markings. Emphasise that change negotiations must be
**genuinely held before the decision** — a negotiation is not a formality. Include a reference to
the `termination-of-employment` skill where the negotiations lead to terminations.

## What this skill does NOT do
- **Does not replace the employer's decision or an employment lawyer's assessment.** It produces a procedural assessment and timeline that need checking, not a final position on the lawfulness of the procedure.
- **Does not confirm the size threshold for the scope of application, when the negotiation proposal must be given, negotiation periods or other time limits from memory** — these are retrieved from the Act on Co-operation within Undertakings in force (1333/2021). Do not cite the repealed act (334/2007) as being in force.
- **Does not make the decision to reduce the workforce and does not itself prepare terminations, lay-offs or transfers to part-time work** — only the procedure for the duty to negotiate.
- **Does not assess the grounds for terminating an individual employee** (collective or personal grounds) — that belongs to the termination skill.
- **Does not draft employment contracts or their terms.**
- **Finnish employment law and the Act on Co-operation within Undertakings only** — not the co-operation or information and consultation obligations of other countries.

## Continue from here
- Where the negotiations lead to termination on collective grounds, lay-off or transfer to part-time work → /employment-law:termination-of-employment
- Where the personnel effect concerns the terms of employment contracts (a material change) → /employment-law:employment-contract
- Checking the provisions, time limits or case law of the Act on Co-operation within Undertakings from the source → /legal-core:legal-research
- Quality check of a negotiation proposal or account before sending → /legal-core:document-review
