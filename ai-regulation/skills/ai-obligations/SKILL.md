---
name: ai-obligations
description: >
  Establishing the obligations under the AI Act (EU 2024/1689) by role
  (provider/deployer) and risk class, and compiling the technical documentation
  for a high-risk system (Annex IV). Use this skill when the risk class of an AI
  system is known and the user wants to know what obligations apply to it, what
  documentation is required, what the provider or the deployer has to do, or when
  the user mentions Annex IV, technical documentation, quality management or GPAI
  obligations.
---

# AI Act obligations by role and risk class

This skill compiles the obligations that apply to an AI system once the risk class is known
(if it is not, use the `ai-classification` skill first).

> **Disclaimer:** the lists of obligations are drafts to be checked — not legal
> advice. See `ai-regulation/AGENTS.md`. Fundamentals: `../ai-classification/references/ai-act-fundamentals.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Use the EU AI Act MCP

- **`euaiact_get_obligations`** — give the **role** (provider/deployer) and the **risk
  class**; it returns the concrete obligations, including GPAI (Articles 51-56) and the
  general AI literacy obligation (Article 4).
- **`euaiact_annex_iv_checklist`** — returns the nine points of the technical documentation
  for a high-risk system, as a markdown checklist if desired, with a note on the relief for
  small enterprises.
- **`euaiact_get_article`** — the summary of an article and the EUR-Lex link for the
  citation.

Do not list obligations from memory when the MCP is available.

---

## Workflow

### 1. Confirm the role and the risk class
- The **provider** develops the system or places it on the market under its own name.
- The **deployer** uses the system in the course of its professional activity.
- The same organisation can be both, for different systems. A substantial modification of a
  high-risk system can turn a deployer into a provider (Article 25) — raise this.

### 2. Fetch the obligations
Call `euaiact_get_obligations` with the role and the risk class. Typical high-risk
obligations:
- **Provider:** risk management system (Article 9), data governance (Article 10), technical
  documentation (Article 11 plus Annex IV), logging (Article 12), transparency and
  instructions (Article 13), human oversight (Article 14), accuracy, robustness and
  cybersecurity (Article 15), quality management (Article 17), conformity assessment
  (Article 43) and registration (Article 49).
- **Deployer:** use in accordance with the instructions and human oversight (Article 26),
  and in certain cases a **fundamental rights impact assessment, FRIA (Article 27)**.

### 3. Compile the technical documentation (high risk)
Use `euaiact_annex_iv_checklist`. Go through the nine points and identify what the
organisation already has and what is missing. Produce a checklist.

### 4. GPAI obligations
For general-purpose models, fetch the obligations with the role "provider" and take account
of the additional obligations for systemic risk (Article 55) — check the threshold with the
`euaiact_check_gpai_systemic_risk` tool in the `ai-compliance` skill.

### 5. Report
Produce the list of obligations grouped by role (provider / deployer), the article
references with EUR-Lex links, and the Annex IV checklist in a high-risk case. Distinguish
**what already exists** from **what is missing**. Mark points open to interpretation
`[confirm — requires a specialist's assessment]`. Where relevant, remind the user that the
GDPR runs in parallel (the `data-protection` domain) and that the national layer has to be
checked.

## What this skill does NOT do

- **It does not make the final compliance decision.** It compiles a draft list of obligations by role and risk class, to be checked; the binding assessment of whether the obligations are met belongs to a specialist.
- **It does not determine the risk class.** It requires the class and the role (provider/deployer) to be known already — the classification is done in a separate skill.
- **It does not calculate deadlines or penalties from memory.** The transitional periods for the obligations to take effect and the maximum sanctions for infringements are fetched with the tools of the eu-ai-act MCP (`euaiact_check_deadlines`, `euaiact_calculate_penalty`) → `ai-compliance`.
- **It does not resolve the systemic risk threshold for a GPAI model.** The 10²⁵ FLOPs threshold and the additional obligations under Article 55 are checked with the `euaiact_check_gpai_systemic_risk` tool.
- **It does not confirm designations of national authorities or the details of registration.** The Finnish competent authorities and the procedures are still taking shape — mark this `[confirm — national regulation still taking shape]`.
- **It does not draft the technical documentation for you.** It produces the Annex IV checklist and identifies the missing parts, but writing the content is left to the organisation.

## Continue from here

- If the risk class or the role is still open, go back to the classification → /ai-regulation:ai-classification
- The deadlines for entry into force, the maximum penalties, the GPAI threshold and the need for a FRIA → /ai-regulation:ai-compliance
- A parallel assessment of the processing of personal data, profiling or a DPIA → /data-protection:data-protection-assessment
- Checking the national regulatory position and the designation of authorities → /legal-core:legal-research
