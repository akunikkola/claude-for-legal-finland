# The EU Artificial Intelligence Act — fundamentals and the Finnish layer

A summary of the points that matter for classification and for the obligations. **Check the
articles with the `euaiact_get_article` tool of the `eu-ai-act` MCP (EUR-Lex links) and the
national regulation with the `legal-core:legal-research` skill before you rely on them.**

## The applicable regulation
- **The EU Artificial Intelligence Act, Regulation (EU) 2024/1689 (the "AI Act")** — a
  directly applicable EU regulation. It does not need national implementation to be in
  force, but the Member States designate the national authorities and supplement the
  procedures.
- Application is **staged** (2025-2027). Check the deadlines in force with the
  `euaiact_check_deadlines` tool — do not state dates from memory.

## The risk-based framework
- **Prohibited practices (Article 5)** — for example harmful manipulation, social scoring,
  certain uses of biometric identification.
- **High risk (Article 6)** — two routes: Annex I (a safety component of a regulated
  product) and **Annex III** (a list of fields: biometrics, critical infrastructure,
  education, employment, essential services, law enforcement, migration and borders, the
  administration of justice). Extensive obligations (Articles 9-17 for the provider;
  Articles 26-27 for the deployer).
- **Limited risk (Article 50)** — transparency obligations (notification of a chatbot,
  marking of synthetic content).
- **Minimal risk** — no specific obligations.
- **GPAI (Articles 51-56)** — general-purpose models; the systemic risk threshold is 10²⁵
  FLOPs (`euaiact_check_gpai_systemic_risk`).
- **AI literacy (Article 4)** — a general obligation for all providers and deployers.

## Key instruments of obligation
- **Annex IV** — the technical documentation for a high-risk system
  (`euaiact_annex_iv_checklist`).
- **FRIA, the fundamental rights impact assessment (Article 27)** — for certain deployers;
  Annex III(5)(b) (creditworthiness and credit scoring) and (5)(c) (risk assessment and
  pricing in life and health insurance) trigger it. Annex III(2) (critical infrastructure)
  is the only Annex III category exempt from a FRIA.
- **Conformity assessment (Article 43)** — mainly internal control (Annex VI); the
  involvement of a notified body on the Annex III(1) biometrics route among others.
- **Penalties (Article 99)** — administrative fines; a reduction for SMEs and start-ups
  (Article 99(6)). Calculate with the `euaiact_calculate_penalty` tool.

## The relationship to the GDPR
The AI Act and the General Data Protection Regulation run **in parallel** — the AI Act
requirements do not replace the GDPR obligations. Profiling and automated decision-making
(GDPR Article 22), a DPIA (Article 35) and special categories of data (Article 9) often fall
to be assessed at the same time. → the `data-protection` domain.

## The Finnish layer (to be checked)
As an EU regulation the AI Act is directly applicable in Finland. **The national
implementation (the competent supervisory authorities, the procedures and any supplementary
provisions) is still taking shape — do not present designations of authorities or national
provisions as verified.** Check the position in force with the `legal-core:legal-research`
skill (oik.ai/Finlex) and on the authorities' official pages, and mark uncertain points
`[confirm — national regulation still taking shape]`. Take account also of
sector-specific supervision (in the financial sector, healthcare and data protection, for
example).
