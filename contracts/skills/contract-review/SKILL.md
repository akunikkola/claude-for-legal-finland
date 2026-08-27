---
name: contract-review
description: >
  A clause-by-clause risk assessment of a contract under Finnish law, with a classification
  (GREEN / YELLOW / RED). Use this skill when the user wants to review, assess or comment on a
  contract they have received or drafted, to look for risks in it, for one-sided or unfair
  terms, limitations of liability, or problems in confidentiality or termination or
  intellectual-property clauses, or to decide whether the contract can be signed. Triggers when
  the user asks for contract terms to be assessed or asks "can I sign this" or "what are the
  risks in this contract". Covers oikeustoimilaki 228/1929 section 36 and kuluttajansuojalaki
  38/1978.
---

# Contract review — a clause-by-clause risk assessment

This skill assesses a contract from the point of view of Finnish contract law and classifies it
quickly, so that attention goes to the right places. The skill carries the contract doctrine:
which clauses are risky and why.

> **Disclaimer:** this is a risk assessment for review — not legal advice, and not a final
> position on the validity of the contract. A high-risk or RED contract belongs with a lawyer
> before signature. See `contracts/AGENTS.md`.

## Background material

- The fundamentals of contract law and the key statutes: `../contract-drafting/references/contract-law.md`.
- Checking legislative references: the `legal-research` skill in the `legal-core` domain (oik.ai/Finlex). Check the key statute and section references against the source.
- A thorough structural going-over: the `document-review` skill in the `legal-core` domain (8 stages). This skill concentrates on contract-specific substantive risk.

---

## Stage 1: Position the contract

Establish first:
- **The type of contract** (supply, services, NDA, licence, lease, employment and so on).
- **Whose point of view** the assessment is from (who is the user)? Risk looks different to a supplier and to a customer.
- **Is one of the parties a consumer or an employee?** If so, mandatory legislation (the Consumer Protection Act (kuluttajansuojalaki 38/1978), the Employment Contracts Act (työsopimuslaki)) limits the terms, and terms derogating to the detriment of the consumer or employee may be invalid → always raise this.

## Stage 2: Work through the clauses

Check at least the following and mark the risk level of each. Typical flag points:

| Clause | Check | Typical risk |
|---|---|---|
| **Subject matter / scope** | Is the performance defined unambiguously? | Room for interpretation → disputes |
| **Price and payment terms** | Payment period, interest on late payment, one-sided price increases | An open right to raise the price |
| **Liability and limitation of liability** | Is liability limited unreasonably? Have intent and gross negligence been left outside the limitation? | Limiting liability for gross negligence too = invalid; a one-sided limitation |
| **Damages** | Are direct and indirect loss distinguished? Is the cap clear? | Unlimited liability or an unclear division |
| **Contractual penalty** | Is the penalty reasonable? | An unreasonable penalty → adjustment (section 36 of oikeustoimilaki) |
| **Intellectual property rights** | To whom do rights arise or transfer? What is the scope of the licence? | Unintended transfer of rights |
| **Confidentiality** | Are the scope and duration and exceptions symmetrical? | A one-sided or unending obligation |
| **Non-compete / non-solicitation** | Duration, geographic scope, compensation | An unreasonable restriction → adjustment or invalidity |
| **Termination and rescission** | Are the rights symmetrical? Notice period, grounds for rescission, protection of the consumer or employee | A one-sided exit, lock-in |
| **One-sided right of amendment** | May one party change the terms or the price alone? | An open right of amendment to the detriment of the weaker party |
| **Applicable law and dispute resolution** | Is it Finnish law? Is the district court identified, or is it arbitration (cost)? | An unfavourable forum, a missing choice of law |
| **Annexes and order of precedence** | Has precedence in the event of conflict been defined? | Contradictory documents |

The general flag for adjustment: a blatantly one-sided term to the detriment of the weaker party
is exposed to adjustment (**section 36 of the Contracts Act (oikeustoimilaki 228/1929)**; in
consumer contracts the Consumer Protection Act).

## Stage 3: Classify

- **🟢 GREEN — can proceed to signature.** The terms are balanced, the limitations of liability appropriate, no problems with mandatory law, no unfair terms to the detriment of the party being advised.
- **🟡 YELLOW — points to negotiate / a lawyer's glance at one or two places.** Individual unfavourable or unclear terms that are worth negotiating or making precise. Name them and propose a wording.
- **🔴 RED — do not sign without a lawyer's assessment.** Serious problems: unlimited or unreasonably one-sided liability, a consumer or employment term contrary to mandatory law, unintended loss of rights, lock-in with no right of exit, limitation of liability for gross negligence.

## Stage 4: Report

Produce:
1. **The classification** (🟢/🟡/🔴) and a one-sentence reason.
2. **The key findings** as a table: clause · risk · severity · proposed fix.
3. **Concrete proposed amendments** to the most critical points (ready replacement wording, see `../contract-drafting/references/contract-clauses.md`).
4. **What requires a lawyer's assessment** — mark it `[confirm — requires a lawyer's assessment]`.

Attach the source to every legislative reference and mark the points open to interpretation. Do
not present an assessment of validity as a final legal conclusion.

**Redline into a .docx contract:** if the contract is a Word file, you can take the proposed
amendments straight into the document as **native tracked changes and comments** with the `adeu`
MCP (`read_docx` first — including `appendix` mode for checking defined terms and
cross-references — then `process_document_batch`). The reviewer then sees the proposals in the
familiar Track Changes form. Set `author_name` clearly.

## What this skill does NOT do

- **It does not decide whether the contract can be signed.** It gives a clause-by-clause risk assessment and a classification; 🔴 RED and the final position on the validity of the contract belong to a lawyer's assessment before signature.
- **It does not replace a lawyer's review and does not carry responsibility for the assessment.** This is a risk assessment that needs checking, not legal advice.
- **It does not confirm sections of the applicable law from memory.** The statute number and wording of section 36 of oikeustoimilaki, of kuluttajansuojalaki and the rest are checked against the source; points open to interpretation are marked.
- **It does not carry out a thorough structural going-over.** It concentrates on contract-specific substantive risk; the 8-stage check of language and structure and references belongs to the `document-review` skill in the `legal-core` domain.
- **It does not draft a contract or missing clauses from scratch.** It assesses existing text and proposes replacement wording; building a new contract belongs to the drafting skill.
- **It does not replace dispute resolution.** If the contract is already in dispute or has been breached, procedural steps belong to the dispute-resolution material.

## Continue from here

- Drafting corrected or missing clauses with ready wording → /contracts:contract-drafting
- Checking statute and section references (e.g. oikeustoimilaki 228/1929 section 36) against the source → /legal-core:legal-research
- A thorough structural quality and language check (8 stages) → /legal-core:document-review
- A data protection assessment of the personal-data terms of the contract → /data-protection:data-protection-assessment
- If the contract is in dispute or has been breached → /dispute-resolution:statement-of-claim
- The particular questions of a shareholders' agreement (drag/tag, vesting, deadlock) → /company-law:shareholders-agreement
- The counterparty's solvency is uncertain → /insolvency:insolvency-assessment
