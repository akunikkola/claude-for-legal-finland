---
name: ai-compliance
description: >
  Supporting tasks for compliance with the AI Act (EU 2024/1689): the deadlines
  and transitional periods for application, the size of the penalties (fines), the
  threshold for systemic risk in a GPAI model (10^25 FLOPs) and the fundamental
  rights impact assessment (FRIA, Article 27). Use this skill when the user asks
  when the obligations take effect, what the fine for an infringement is, whether
  an AI model exceeds the systemic risk threshold, whether a FRIA is needed, or
  when the user mentions deadlines, transitional periods, sanctions, GPAI or the
  fundamental rights impact assessment.
---

# AI Act compliance — deadlines, penalties, GPAI, FRIA

This skill supports the timing of compliance and the assessment of risk under the EU
Artificial Intelligence Act.

> **Disclaimer:** a first assessment to be checked — not legal advice. The final
> assessment of the penalties and of the classification belongs to a specialist. See
> `ai-regulation/AGENTS.md`.
> Fundamentals: `../ai-classification/references/ai-act-fundamentals.md`.

## Use the EU AI Act MCP — do not guess figures or dates

- **`euaiact_check_deadlines`** — the milestones for application, the days remaining, the
  `next_milestone` quick answer and the `only_upcoming` filter. **Always fetch the dates
  from here**, do not state them from memory; the Regulation applies in stages and the
  position changes.
- **`euaiact_calculate_penalty`** — the maximum fine by type of infringement, turnover and
  SME status (Article 99), the reduction for SMEs and start-ups (Article 99(6)) and a
  comparison of SME against non-SME.
- **`euaiact_check_gpai_systemic_risk`** — whether a GPAI model exceeds the 10²⁵ FLOPs
  threshold; it returns the baseline obligations under Article 53 plus the systemic risk
  obligations under Article 55 and the notification obligation under Article 52.
- **`euaiact_assess_art6_3_exception`** — working through the Article 6(3) "no significant
  risk" exception (with the profiling warning and the reminders on Article 6(4) and
  Article 49(2)).

If the MCP is not available, say so and do not present figures or dates as verified.

---

## Tasks

### Deadlines and transitional periods
Call `euaiact_check_deadlines`. Present the milestones that bear on the user's situation
and the next deadline. If some change in the position (for example the Digital Omnibus) is
only a proposal and not law in force, say so clearly — the dates in force are decisive in
advising until the change has been adopted and published in the Official Journal.

### Penalties
Call `euaiact_calculate_penalty` with the type of infringement, the turnover and the SME
status. Present the maximum fine and the SME reduction as a comparison. Stress that this is
a **maximum amount**, not a prediction of the actual sanction.

### Systemic risk in a GPAI model
Call `euaiact_check_gpai_systemic_risk` with the model's compute figure or details. Report
whether the model exceeds the threshold, and the obligations that follow under Articles 53
and 55 as well as the notification under Article 52.

### FRIA — fundamental rights impact assessment (Article 27)
Establish whether the deployer is obliged to carry out a FRIA (including Annex III(5)(b)
creditworthiness and credit scoring and (5)(c) risk assessment and pricing in life and
health insurance; Annex III(2) critical infrastructure is exempt). If a FRIA is required,
guide the user on its content: a description of the process of use, the effects on
fundamental rights, the risks and the mitigating measures. A FRIA and a DPIA under the GDPR
overlap — steer the user to the `data-protection` domain where necessary.

### Reporting
Produce a clear summary of the figures and dates fetched, **with the source marked** (MCP /
EUR-Lex), and mark points open to interpretation
`[confirm — requires a specialist's assessment]`. Remind the user to check the national
layer (the competent authorities, the national implementation).

## What this skill does NOT do

- **It does not make the final compliance or classification decision.** It supports timing and risk assessment with first assessments to be checked; the binding assessment belongs to a specialist.
- **It does not state deadlines or penalties from memory.** The transitional periods for application and the maximum sanctions for infringements are always fetched with the tools of the eu-ai-act MCP (`euaiact_check_deadlines`, `euaiact_calculate_penalty`) directly from the Regulation.
- **It does not predict the actual sanction.** `euaiact_calculate_penalty` gives the **maximum amount** under Article 99, not an estimate of the fine an authority would in fact impose.
- **It does not confirm designations of national authorities or the details of implementation.** The Finnish competent authorities and the procedures are still taking shape — mark this `[confirm — national regulation still taking shape]`.
- **It does not treat proposals as law in force.** Changes of the Digital Omnibus type are indicative only until they have been adopted and published in the Official Journal of the European Union — the dates in force are decisive.
- **It does not write the FRIA or the DPIA for you.** It identifies the FRIA obligation (Article 27) and guides the structure, but drafting the assessment itself is left to the organisation.

## Continue from here

- If the risk class is still open, start from the classification → /ai-regulation:ai-classification
- Compiling the exact obligations by role and class, plus Annex IV → /ai-regulation:ai-obligations
- The overlap of FRIA and DPIA, profiling and automated decision-making → /data-protection:data-protection-assessment
- Checking the national deadlines, authorities and implementation → /legal-core:legal-research
