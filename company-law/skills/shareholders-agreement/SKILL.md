---
name: shareholders-agreement
description: >
  Drafting a shareholders' agreement and reviewing its risks under Finnish law.
  Use this skill when the user is drafting, negotiating, reviewing or
  interpreting a shareholders' agreement (osakassopimus) or its clauses:
  decision-making and board seats, restrictions on the transfer of shares,
  rights of first refusal, drag along and tag along, vesting and leaver terms,
  non-compete, dividend policy, financing rounds, deadlock, exit and dispute
  resolution. Governed by the Contracts Act (oikeustoimilaki 228/1929)
  alongside osakeyhtiölaki 624/2006. Triggers on: shareholders agreement, SHA,
  osakassopimus, drag along, tag along, vesting, good leaver, bad leaver,
  redemption, right of first refusal, deadlock, founder shareholder, investor,
  term sheet.
---

# Shareholders' agreement — drafting and risk review

This skill drafts and reviews shareholders' agreements. A shareholders' agreement (osakassopimus)
is a **contract** (the Contracts Act, oikeustoimilaki 228/1929) between shareholders — it
supplements the Limited Liability Companies Act (osakeyhtiölaki 624/2006) and the articles of
association, but it binds only the parties to it.

> **Disclaimer:** drafts and risk assessments are for review — not legal advice. See
> `company-law/AGENTS.md`. Company-law fundamentals:
> `../corporate-governance/references/company-law-fundamentals.md`.
> General contract mechanics and a clause library: the `contracts` domain.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Three instruments — keep the division of labour clear

| Instrument | Binds | Enforcement |
|---|---|---|
| Limited Liability Companies Act | everyone | mandatory core: protection of creditors, equal treatment, minority protection |
| Articles of association | the company, its governing bodies, all shareholders | company law: challenge of a resolution, registration |
| Shareholders' agreement | only the parties to the agreement | contract law: contractual penalty, damages, arbitration |

Always check: **is the provision in the right instrument?** For example, a redemption clause or a
consent clause takes effect as a matter of company law only in the articles of association (OYL
chapter 3); a contractual right of first refusal binds only the contracting parties. A new
shareholder is not a party to the agreement without an adherence undertaking — make sure there is a
mechanism.

## Drafting — work through at least these

1. **Parties and purpose** — who is bound (the company itself as well?), and the relationship to
   any earlier agreements.
2. **Decision-making** — composition of the board and rights of nomination, matters requiring a
   qualified majority or the consent of all (reserved matters) — do not make the list so broad that
   it paralyses the company.
3. **Dealings in shares** — transfer restrictions, right of first refusal, consent requirement,
   **drag along** (the majority can force a sale) and **tag along** (the minority can join the
   sale); the price mechanism and valuation in a dispute.
4. **Retention** — the vesting schedule, **good leaver / bad leaver** terms and the redemption
   price under each; the link between employment and shareholding (note the mandatory nature of
   employment law → `employment-law`).
5. **Non-compete and confidentiality** — duration, geography, sector; reasonableness (section 36 of
   the Contracts Act) and the relationship to the trade secrets act.
6. **Financing and changes in ownership** — new rounds, dilution, any preferential rights (note
   equal treatment and share classes in the articles of association).
7. **Dividend policy** — objectives go into the agreement; a binding distribution is nevertheless
   made within the limits of the two-part test in OYL chapter 13.
8. **Deadlock** — a deadlock mechanism (escalation, redemption procedures such as a shotgun
   clause) — a missing deadlock term is the biggest risk in a 50/50 company.
9. **Life cycle of the agreement** — term, termination on exit, amendment, adherence undertaking,
   entire agreement clause.
10. **Consequences of breach and dispute resolution** — contractual penalty (easing the burden of
    proof), damages, arbitration (the Arbitration Act, laki välimiesmenettelystä 967/1992;
    confidentiality) versus the ordinary courts.

## Risk review (an existing agreement)

Work through the agreement clause by clause and classify it (in the manner of the
`contracts:contract-review` skill):

- **🟢 GREEN** — balanced, enforceable, in the right instrument.
- **🟡 YELLOW** — unclear or incomplete: no price mechanism for redemption, drag without a minimum
  price, vesting without a definition of bad leaver, a conflict with the articles of association,
  no adherence mechanism.
- **🔴 RED** — unreasonable or ineffective: bad leaver redemption at a clear undervalue in a wide
  range of situations (a risk under section 36 of the Contracts Act), an unlimited non-compete, a
  structure that circumvents equal treatment or the protection of creditors, no deadlock provision
  in a 50/50 shareholding → a company-law lawyer's assessment.

An agreement in Word format: read and comment on it with the `adeu` MCP as native Track Changes
(`read_docx`, `process_document_batch`).

## What this skill does NOT do

- **It does not replace the articles of association** — provisions that need to take effect as a
  matter of company law are placed in the articles of association, not in the agreement.
- **It does not confirm the enforceability of a clause in a binding way** — the assessment of
  reasonableness and validity (section 36 of the Contracts Act) belongs to a lawyer.
- **It does not assess tax treatment** (for example the line between an employee option and a
  share, or the taxation of a redemption) — `[confirm — requires a tax specialist's assessment]`.
- **It does not sign and does not send** — a draft always goes to a human for review.
- **It does not agree employment terms to the detriment of the employee** contrary to mandatory
  law.

## Continue from here

- A general clause library and drafting technique → /contracts:contract-drafting
- A systematic risk pass over a finished agreement → /contracts:contract-review
- Amendments to the articles of association and decisions of governing bodies → /company-law:corporate-governance
- An exit or a share deal is on the table → /company-law:corporate-transactions
- Non-compete in an employment relationship → /employment-law:employment-contract
