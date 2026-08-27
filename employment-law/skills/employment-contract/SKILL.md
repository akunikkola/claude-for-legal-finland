---
name: employment-contract
description: >
  Drafting and reviewing an employment contract under Finnish employment law
  (Employment Contracts Act, työsopimuslaki 55/2001). Use this skill when the user
  is drafting or reviewing an employment contract, or asks about the terms of an
  employment relationship, fixed-term status, the probationary period, a non-compete
  clause, confidentiality, the effect of the collective agreement (TES), notice
  periods or an employee's minimum terms. Triggers when an employment contract,
  employment relationship, fixed-term contract, probationary period, non-compete
  agreement or collective agreement is mentioned.
---

# Employment contract — drafting and review

This skill helps draft and review an employment contract under Finnish employment law.
The starting point differs from general contract law: **employment legislation is mandatory
in the employee's favour**, and collective agreements (TES) set minimum terms which cannot
be departed from to the employee's detriment.

> **Disclaimer:** a draft or assessment that needs checking — not legal advice.
> See `employment-law/AGENTS.md`. Fundamentals: `references/employment-law-fundamentals.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the mandatory regulation and the TES first

- **The applicable collective agreement:** establish whether a generally binding (yleissitova) or
  normally binding TES applies in the sector. A TES may govern pay, working time, holidays and other
  matters more bindingly than the employment contract. Do not draft a
  term that falls below the minimum level of the TES or of mandatory law to the employee's detriment.
- Check the provisions in force of the Employment Contracts Act (työsopimuslaki 55/2001) and other acts
  with the **`legal-research` skill in the `legal-core` domain** (oik.ai/Finlex). General contract mechanics:
  the `contracts` domain.

## The key terms of an employment contract

Go through at least:
1. **The parties** and the date work begins.
2. **Duties** and the place of work.
3. **Duration of the contract:** indefinite or **fixed-term**. A fixed term requires **justified grounds** (työsopimuslaki 55/2001); repeated fixed-term contracts without grounds may be regarded as being in force indefinitely. A fixed term without grounds, made on the employer's initiative, is a risk → mark it.
4. **Probationary period (koeaika):** permitted within the limits laid down in law; the length and conditions must be checked from the source. During the probationary period the contract can be terminated on lighter grounds, but not on discriminatory or improper grounds.
5. **Pay** and the pay period (note the minimum pay under the TES).
6. **Working time** (työaikalaki) and **annual holiday** (vuosilomalaki) — check the figures with the `legal-research` skill.
7. **Non-compete agreement (kilpailukieltosopimus):** permitted only for a **particularly weighty reason**, limited in duration, and **compensation** must as a rule be paid for it (following the 2022 reform of the Employment Contracts Act). A non-compete clause without grounds or one that is too wide is partly ineffective → mark it and check the provision in force from the source.
8. **Confidentiality**, intellectual property rights and other terms.
9. **Notice periods (irtisanomisajat)** (law/TES) and the grounds for ending the relationship (see the `termination-of-employment` skill).

## Workflow

- **Drafting:** assemble the terms as set out above; mark points to be completed in square brackets; confirm compatibility with the TES. Produce a new contract with the `docx` skill, or edit an existing one with the `adeu` MCP (tracked changes).
- **Review:** go through the terms from the point of view of mandatory law and the TES; raise terms that fall below the minimum level or that are ineffective to the employee's detriment (a fixed term without grounds, an excessively wide non-compete clause without compensation, a probationary period term beyond what is permitted). Mark `[confirm — requires an employment lawyer's assessment]`.

## Report

Produce the contract or assessment with source markings (statute + section checked with the `legal-research` skill,
the applicable TES named). Distinguish clearly between the mandatory minimum level, a TES term and
a term within the scope of freedom of contract.

## What this skill does NOT do
- **Does not replace the employer's decision or an employment lawyer's assessment.** It produces a draft or assessment that needs checking, not a final position on the validity of the contract.
- **Does not confirm notice periods, the maximum length of a probationary period, annual holiday or working time figures, or TES provisions from memory.** These are retrieved from the law in force and from the applicable collective agreement.
- **Does not decide the validity of a non-compete clause or the amount of compensation with binding effect** — it only assesses the risk and directs the user to check the provision in force in chapter 3 of the Employment Contracts Act.
- **Does not prepare the ending of an employment relationship** (termination with notice, summary termination, termination during the probationary period) — only the establishment of the relationship and its terms.
- **Does not deal with reductions on collective grounds or with the obligation to hold change negotiations.**
- **Finnish employment law only** — not the employment legislation of other countries and not cross-border employment relationships.

## Continue from here
- Ending an employment relationship, termination during the probationary period or the grounds for termination with notice → /employment-law:termination-of-employment
- Reductions on collective grounds or establishing the co-operation obligation → /employment-law:change-negotiations
- Checking the Employment Contracts Act, the TES or case law from the source → /legal-core:legal-research
- Quality check of a completed draft employment contract before signature → /legal-core:document-review
