# Liability, professional ethics and information security

**Version 1.0 – 4 June 2026.** This is the shared liability and information-security standard for
the whole `agent-skills-for-finnish-law` collection. It complements the source standard in
[`references/citation-style.md`](citation-style.md).

> **Starting point: a disclaimer is not a protection.** A closing note saying "not legal advice"
> prevents no error and transfers no liability. It tells the reader where they stand, but the
> protection itself comes from the **mechanisms** built into the skills and into these standards.
> This file collects them and describes what compliance the use of these tools requires.

---

## 1. The layers of protection (this is the "more than a disclaimer" part)

Every output passes through five mechanisms. The disclaimer is only the sixth, and the least of
them.

1. **Source verification.** Statutes and case law are retrieved from a source (oik.ai/Finlex), not
   from the model's memory. See each domain's `AGENTS.md` and `legal-core:legal-research`.
2. **Three-tier certainty marking.** Every claim is either *Verified*, *Needs checking*
   or *Do not use* — and the marking sits next to the number.
   See [`citation-style.md`](citation-style.md).
3. **Premise checking.** An incorrect legal fact stated by the user is not taken as given; a
   material premise is checked before the analysis.
4. **Negative scoping.** Every skill states, in a *What this skill does NOT do* section, what it
   takes no position on and what it does not replace — this bounds hallucination and liability risk
   concretely.
5. **Human review gate.** Nothing is sent, filed with a court, signed or published until a
   competent human has reviewed and approved it and carries professional responsibility for the
   result.
6. **Disclaimer.** Marked on the output — but only after the fifth mechanism, never instead of it.

**Design rule:** if an error could get through without one of mechanisms 1–5 stopping it, the fault
is in the skill — fix the skill, do not rely on the disclaimer.

---

## 2. The professional-ethics layer

The tools produce drafts; professional responsibility and obligations remain with the user. The
main points (check the current rules against a source):

- **Confidentiality.** An advocate's duty of confidentiality (Advocates Act, laki asianajajista
  496/1958, and the Finnish Bar Association's code of conduct, hyvä asianajajatapa) and other
  statutory confidentiality obligations bind regardless of the tool. A client's confidential
  information is not taken into a tool that does not meet the requirements for confidential
  processing. See section 3.
- **Disqualification and conflicts of interest.** The tool does not detect conflicts of interest
  between engagements. Assessing them is the user's responsibility.
- **Who may act as counsel.** Acting as counsel in the general courts is restricted (Code of
  Judicial Procedure, oikeudenkäymiskaari 4/1734, chapter 15): as a rule an advocate, a public
  legal aid attorney or a licensed legal counsel (laki luvan saaneista oikeudenkäyntiavustajista
  715/2011). A draft written submission produced by a skill does not make anyone eligible to act as
  counsel.
- **Non-lawyers.** Unlike in some countries, giving legal advice outside court is relatively
  unrestricted in Finland, but responsibility for the advice given remains. A draft produced by a
  non-lawyer is not professional legal advice and does not replace it.
- **Good professional conduct.** Acknowledge uncertainty openly, do not present an interpretation
  as more certain than it is, and refer the matter to a competent expert where necessary.

---

## 3. Data processing and information security

Taking client data into an AI tool is processing of personal data and often processing of
confidential information. Before documents are entered:

- **Processing agreement (GDPR Article 28).** If personal data is processed in an external
  tool or cloud service, there must be a data processing agreement (DPA) with the provider. Also
  confirm the **retention policy** (for example how long the model provider retains inputs) and any
  transfer of data outside the EU (transfer basis).
- **Anonymise first.** Where personal data does not need to reach the model, anonymise it locally
  before analysis. The recommended tool is **PII Shield** (see the `data-protection` domain
  README): it replaces personal data with placeholders locally and restores them afterwards — the
  personal data never reaches the API. This implements data minimisation.
- **Confidentiality and the cloud.** Assess separately whether confidential or sensitive material
  (Articles 9 and 10) may be taken into the tool at all. Where it is unclear: do not take it in —
  anonymise it or process it locally.
- **Legal framework:** the General Data Protection Regulation (2016/679), the Data Protection Act
  (tietosuojalaki 1050/2018) and privacy in working life (laki yksityisyyden suojasta työelämässä
  759/2004). See the `data-protection` domain. *Statute numbers must be checked in Finlex before
  final use.*

---

## 4. AI transparency about the tool itself

- These domains steer a general-purpose AI assistant. **Outputs are AI-generated drafts** — make
  this visible when you pass an output on. The transparency obligation in the EU AI Act
  (asetus (EU) 2024/1689, Article 50) requires the user to know they are dealing with an AI.
- **Risk class.** As an aid to a lawyer's drafting, the tool is not in principle a high-risk AI
  system. In particular situations the class may change — for example where a judicial authority
  uses AI to assist in applying the law to the facts (Annex III to the Regulation). Assess the use
  case individually with the `ai-regulation` domain; do not assume the class.

---

## 5. Application

- Each domain's `AGENTS.md` points at this file and at
  [`citation-style.md`](citation-style.md).
- When you produce a significant legal output, confirm that mechanisms 1–5 have actually run before
  you add the disclaimer.
- This file is not legal advice about compliance obligations; it is a practical checklist. Your
  organisation's own data-protection and professional-ethics guidance takes precedence over it.

*Update the version number and date when the standard changes.*
