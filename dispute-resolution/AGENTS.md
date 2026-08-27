# Dispute resolution — shared guardrails and operating principles

The instructions in this file apply to **every** skill in this domain. SKILL.md says
*what* to do; this file is the **safety net**.

> **Design principle:** procedural doctrine belongs in SKILL.md and the references. These guardrails are life insurance.

---

## A draft that an advocate or another human reviews

Applications for a summons, appeals, evidence plans and procedural assessments are **drafts that need checking** — not legal advice and not an assessment of whether the case will succeed. The advocate or lawyer handling the engagement is responsible for the outcome. Mark `[confirm — requires the advocate's or lawyer's assessment]`.

## Do not predict the outcome

Do not present the probability of success, the sufficiency of the evidence or the outcome of the judgment as certain. Describe the strengths, the weaknesses and the risks even-handedly, for review.

## Time limits and procedure are critical — take them from the source

In litigation **time limits are absolute** and the procedural stages binding:
- **Notice of dissatisfaction (tyytymättömyyden ilmoitus)** in the käräjäoikeus before an appeal to the hovioikeus — failing to give it can bar the appeal.
- **Leave for continued consideration (jatkokäsittelylupa)** (hovioikeus, OK chapter 25 a) and **leave to appeal (valituslupa)** (KKO, OK chapter 30) — identify the grounds for leave and argue them.
- **Limitation of the claim** and other preclusive effects.
Retrieve every time limit, ground for leave and content requirement with the **`legal-core:legal-research` skill** (oik.ai/Finlex). Do not state them from memory — mark anything unchecked `[check]`.

## From the source, not from memory

Verified against the source: the general statute on procedure is the **Code of Judicial Procedure (oikeudenkäymiskaari 4/1734)** and the courts are governed by the **Courts Act (tuomioistuinlaki 673/2016)**. Retrieve the applicable chapters and sections and the substantive law from the source. Do not invent section numbers or case identifiers; case law is retrieved with the `legal-research` skill (KKO, the hovioikeus courts).

## Weigh settlement and ADR

Before bringing an action and while it is pending, assess whether **a settlement, court-annexed mediation or arbitration** (laki välimiesmenettelystä 967/1992) would be in the client's interest. Litigation is slow and carries a costs risk (as a rule the losing party pays the winner's costs). Raise the alternatives.

## Confidentiality

The material handled may contain sensitive personal data and trade secrets. Consider anonymising before analysis (→ the PII Shield guidance in the `data-protection` domain) and check who the output is going to (`legal-core/AGENTS.md` → confidentiality).

## Shared standards

For references to statutes, case law and preparatory works, follow the marketplace's shared source standard [`references/citation-style.md`](../references/citation-style.md): the three-tier certainty marking (Verified / Needs checking / Do not use), the source hierarchy and the correct forms of case identifiers. In short: attach the source to the number, never present something unchecked as verified, and never assert what a decision says without having checked the decision against the source.

On liability, professional ethics (confidentiality, disqualification, who may represent whom) and data handling (the GDPR Article 28 processing agreement, anonymisation before analysis): [`references/liability-and-security.md`](../references/liability-and-security.md). **A disclaimer alone is not protection** — protection comes from source verification, certainty marking, checking the premises, stating what is out of scope, and the human review gate.

## Practice profile (optional)

A firm's standard templates (application for a summons, appeal) and procedural practices can be recorded here under the heading `## Practice profile`. Empty by default — do not invent one; ask the user.
