---
name: contract-drafting
description: >
  Drafting a contract under Finnish law: structure, the key clauses and the fundamentals of
  contract law. Use this skill when the user is drafting, outlining or completing a contract –
  supply, services, non-disclosure, employment, lease, engagement, licence or any other
  contract – or asks about the wording of a contract clause, the parts of a contract, a
  limitation of liability, a contractual penalty, termination, the applicable law or dispute
  resolution. Triggers when the user mentions a contract, a contract term, a clause, the
  parties or the obligations, or wants a contract template. Covers oikeustoimilaki 228/1929
  and kauppalaki 355/1987 and kuluttajansuojalaki 38/1978.
---

# Drafting a contract under Finnish law

This skill helps produce a clear, balanced contract that complies with Finnish contract law.
The starting point is **freedom of contract**: the parties may as a rule agree the content
freely, but mandatory legislation (particularly in consumer and employment relationships) and
the rules on adjustment of unfair terms set the limits.

> **Disclaimer:** a draft contract needs checking before signature — this is not legal
> advice. For significant or high-risk contracts a lawyer's review is necessary. See
> `contracts/AGENTS.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the applicable law against the source

When the contract rests on legislation (kauppalaki, kuluttajansuojalaki, työsopimuslaki,
korkolaki and so on) or you cite a section, **use the `legal-research` skill in the `legal-core`
domain** and confirm the wording in force from the oik.ai/Finlex MCP. Do not confirm a
legislative reference from memory. For the fundamentals of contract law and the key statutes,
read `references/contract-law.md`.

---

## Stage 1: Establish the basis of the contract

Ask the user, unless it is already clear:
1. **Type and purpose of the contract** (what is being agreed, what is being sold or supplied).
2. **The parties** — official names and business IDs (y-tunnus); is either of them a consumer? (In a consumer contract the mandatory consumer protection rules limit what may be agreed.)
3. **The key commercial terms** — price, payment terms, timetable, duration.
4. **Risks and priorities** — what particularly concerns the party (liability, IPR, confidentiality, exit).
5. **Whether there is an existing template or earlier contract** to use as a model.

If either party is a consumer, or the matter concerns an employment relationship, raise the
limits set by mandatory legislation before drafting the terms.

## Stage 2: Structure

Use the established structure (adapt it to the type of contract):

1. **Title and parties** — official names, business IDs, short names ("hereinafter the *Supplier*").
2. **Background and purpose** (where needed) — what the contract is intended to achieve.
3. **Definitions** — the key terms, marked with an initial capital.
4. **Subject matter of the contract** — what is supplied or done, the scope, the quality requirements.
5. **Price and payment terms** — price, VAT, invoicing, payment period, interest on late payment (korkolaki).
6. **The parties' obligations** — each party's performance clearly separated.
7. **Intellectual property rights** (where relevant) — to whom rights arise or are transferred.
8. **Confidentiality** — scope, duration, exceptions.
9. **Liability and limitation of liability** — damages, the cap on liability, indirect loss, force majeure.
10. **Breach and its consequences** — contractual penalty, rescission, cure.
11. **Term and termination** — duration, termination with notice, grounds for rescission, the effects of termination.
12. **Applicable law and dispute resolution** — Finnish law; the general courts (identify the district court) or arbitration.
13. **Other terms** — amendments in writing, assignment, notices, the annexes to the contract and their order of precedence.
14. **Signatures** — date, number of counterparts or electronic signature.

Ready-made, annotated model clauses: read `references/contract-clauses.md`.

## Stage 3: Principles of drafting

- **Identify the parties precisely** (official names, business IDs) and use the short name consistently throughout the contract.
- **Unambiguity:** avoid room for interpretation. "A reasonable time" → define it in days. "Without delay" → make it precise.
- **Consistent terminology:** the same term for the same thing (use the `legal-core` skill to check the language).
- **Balance:** one-sided terms may be exposed to adjustment (section 36 of oikeustoimilaki 228/1929) — particularly to the detriment of the weaker party. In a consumer contract, terms that derogate to the consumer's detriment may be invalid.
- **Limitation of liability:** distinguish direct and indirect loss, set the cap on liability clearly; note that liability cannot be limited in respect of intent or gross negligence.
- **Section references:** use the citation forms of legislative language (the `legal-core` skill); check the numbers with the `legal-research` skill.

## Stage 4: Output format

Produce a **new** contract as an editable Word document (.docx) with the `docx` skill (read its
SKILL.md first), or in Markdown or plain text on request. If the task is **editing an existing
contract**, use the `adeu` MCP: it writes the changes as native Word tracked changes (Track
Changes) without breaking the formatting — do not recreate the document. Mark the points to be
completed clearly in square brackets: `[name of the party]`, `[price]`, `[date]`. Add a note at
the end: *"Draft — needs checking before signature."*

## Stage 5: Recommend a review

For an extensive or high-risk contract, suggest the `contract-review` skill (a clause-by-clause
risk assessment) and, for a thorough going-over, the `document-review` skill in the `legal-core`
domain.

## What this skill does NOT do

- **It does not replace a lawyer's review and does not carry responsibility for the draft.** It produces a draft for review; a significant or high-risk contract belongs with a lawyer before signature.
- **It does not confirm sections of the applicable law from memory.** The statute number and wording of kauppalaki, kuluttajansuojalaki, työsopimuslaki, korkolaki and the rest are checked against the source; an unchecked reference is marked `[from memory — verify in Finlex]`.
- **It does not decide whether a finished contract can be signed.** It drafts and formulates the terms; clause-by-clause risk classification and 🔴 RED belong to the review skill and to a lawyer.
- **It does not draft a term contrary to mandatory law** merely because the parties "agreed it" — a term derogating to the detriment of a consumer or an employee is raised, not buried in the contract.
- **It does not replace the special rules on employment relationships.** The details of an employment contract (probationary period, protection against dismissal, the collective agreement) belong to the employment-law material.
- **It does not recreate an existing document.** An amendment to a contract in force is made as tracked changes (the `adeu` MCP), not as a replacement version.

## Continue from here

- Clause-by-clause risk assessment of a finished draft (🟢/🟡/🔴) → /contracts:contract-review
- Checking the sections and statute numbers of the applicable law → /legal-core:legal-research
- Drafting an employment contract under Finnish employment law → /employment-law:employment-contract
- Processing of personal data in the contract (processing agreement, data protection terms) → /data-protection:data-protection-assessment
- A thorough quality and language check of finished contract text → /legal-core:document-review
- A shareholders' agreement or a company-law connection → /company-law:shareholders-agreement
- An NDA or terms protecting trade secrets → /intellectual-property:trade-secrets
