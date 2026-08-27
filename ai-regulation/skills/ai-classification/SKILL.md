---
name: ai-classification
description: >
  Risk classification of an AI system under the EU Artificial Intelligence Act
  (Regulation (EU) 2024/1689, the "AI Act"): prohibited, high risk, limited risk
  (transparency obligations) or minimal risk. Use this skill when the user wants to
  establish whether an AI system falls within the scope of the AI Act, what its risk
  class is, whether it is an Annex III high-risk system, whether a prohibition
  (Article 5) or a transparency obligation (Article 50) applies to it, or when the
  user mentions the AI Act, tekoälyasetus, GPAI, AI risk classification, biometrics
  or profiling.
---

# Risk classification of an AI system (EU AI Act)

This skill classifies an AI system under the risk-based framework of the EU Artificial
Intelligence Act (Regulation (EU) 2024/1689) and identifies the applicable Annex III
category, the role (provider/deployer) and the relevant articles.

> **Disclaimer:** this is a first assessment to be checked — not legal advice.
> The final classification and the compliance decisions belong to a specialist.
> See `ai-regulation/AGENTS.md`.

## Use the EU AI Act MCP

This skill relies on the **`eu-ai-act` MCP** (lexbeam, deterministic, based on EUR-Lex).
Do not classify from memory when the MCP is available.

- **`euaiact_classify_system`** — give the description of the system
  (`description`/`use_case`) and, where possible, **structured `signals`** (for example
  `domain`, `uses_biometrics`, `biometric_realtime`,
  `is_safety_component_of_regulated_product`, `generates_synthetic_content`,
  `targets_children_or_vulnerable`). Structured signals take precedence over text search
  and give a deterministic answer. It returns the risk class, the Annex III category, the
  role, the signals matched and missing, and follow-up questions.
- **`euaiact_get_article`** — fetch the operative summary of an article and the
  **EUR-Lex link** to base the citation on.
- **`euaiact_assess_art6_3_exception`** — use before relying on the Article 6(3) "no
  significant risk" exception (note: it does not apply to systems that carry out
  profiling).
- The resources `euaiact://annex/iii` and `euaiact://risk-levels` give the full categories.

If the MCP is not available, say so and mark the assessment
`[could not be checked in the source]`.
Fundamentals and the Finnish layer: read `references/ai-act-fundamentals.md`.

---

## Workflow

### 1. Gather the signals
Establish with the user: what the system does, in what context, who is the **provider**
and who is the **deployer**, whether biometric data are processed, whether profiling or
automated decisions are made, whether it is directed at vulnerable groups, whether it is a
safety component of a regulated product, and whether it generates synthetic content.

### 2. Classify
Call `euaiact_classify_system` with structured signals. Read `matched_signals`,
`missing_signals` and `next_questions` from the response — put the missing questions to the
user if the classification remains uncertain.

### 3. Interpret the class
- **🚫 Prohibited (Article 5)** — for example certain manipulative uses, social scoring or
  prohibited uses of biometric identification. → The system may not be placed on the market
  or put into service.
- **⚠️ High risk (Article 6 plus Annex III or Annex I)** — extensive obligations
  (Articles 9-17; for the deployer Articles 26-27). → Steer the user to the
  `ai-obligations` skill.
- **ℹ️ Limited risk (Article 50)** — transparency obligations (for example the user must be
  told that they are dealing with a chatbot; synthetic content must be marked).
- **✅ Minimal risk** — no specific obligations; voluntary codes of conduct.
- **GPAI (Articles 51-56)** — general-purpose AI models: check systemic risk with the
  `euaiact_check_gpai_systemic_risk` tool (the `ai-compliance` skill).

Note the **general AI literacy obligation (Article 4)**, which applies to all providers and
deployers regardless of the risk class.

### 4. Report
Produce: the risk class plus the reasoning, the Annex III category (if high risk), the role
(provider/deployer), the relevant articles **with EUR-Lex links** (`euaiact_get_article`),
and the next steps. Mark points open to interpretation
`[confirm — requires a specialist's assessment]`. If the Article 6(3) exception is in
issue, base the position on the `euaiact_assess_art6_3_exception` tool, not on an
assumption.

### 5. Connections
- **Data protection:** if the system processes personal data or carries out profiling or
  automated decisions, steer the user to the `data-protection` domain as well (GDPR
  Article 22, DPIA).
- **The national layer:** the Finnish supervisory authorities and the national
  implementation → `references/ai-act-fundamentals.md`; check the position in force with
  the `legal-core:legal-research` skill.

## What this skill does NOT do

- **It does not make the final risk classification.** It gives a first assessment of the applicable class, the Annex III category and the role; the binding classification belongs to a specialist.
- **It does not calculate deadlines or penalties from memory.** The transitional periods for application and the maximum amounts of the penalties are fetched with the tools of the eu-ai-act MCP (`euaiact_check_deadlines`, `euaiact_calculate_penalty`) → `ai-compliance`.
- **It does not confirm designations of national authorities.** The Finnish competent supervisory authorities and any supplementary national regulation are still taking shape — mark this `[confirm — national regulation still taking shape]`.
- **It does not resolve the Article 6(3) exception by assumption.** The "no significant risk" exception must be worked through with the `euaiact_assess_art6_3_exception` tool; it does not apply to systems that carry out profiling.
- **It does not compile lists of obligations or Annex IV documentation.** The class is established here; the obligations by role belong to a separate skill.
- **It does not assess the processing of personal data, profiling or the need for a DPIA.** The AI Act does not replace the GDPR — the GDPR assessment is made in the data protection domain.

## Continue from here

- Once the risk class and the role are clear, the obligations by role → /ai-regulation:ai-obligations
- The deadlines for application, the maximum penalties, the GPAI threshold and the need for a FRIA → /ai-regulation:ai-compliance
- A parallel assessment of the processing of personal data, profiling or a DPIA → /data-protection:data-protection-assessment
- Checking the national regulatory position and the designation of authorities → /legal-core:legal-research
