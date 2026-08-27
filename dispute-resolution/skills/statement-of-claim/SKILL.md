---
name: statement-of-claim
description: >
  Drafting and checking an application for a summons (haastehakemus) in a civil case under
  the Code of Judicial Procedure (oikeudenkäymiskaari 4/1734): the plaintiff's claims, their
  grounds, the evidence, the costs of the proceedings, jurisdiction and the address for
  service. Use this skill when the user is bringing or drafting a civil action in the
  käräjäoikeus, writing an application for a summons, asking what an action must set out or
  how a claim should be worded, or mentions a haastehakemus, a statement of claim, the
  plaintiff (kantaja), the defendant (vastaaja) or bringing an action.
---

# Application for a summons — a civil action in the käräjäoikeus

This skill helps to draft and check an application for a summons in a civil case
under the Code of Judicial Procedure (oikeudenkäymiskaari 4/1734). The application for a
summons is the document by which a civil case is brought before the käräjäoikeus.

> **Disclaimer:** a draft or assessment for review — not legal advice and not an
> assessment of whether the case will succeed. Professional responsibility rests with the
> person handling the engagement. See
> `dispute-resolution/AGENTS.md`. The fundamentals: `references/dispute-resolution-fundamentals.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Mandatory content (oikeudenkäymiskaari chapter 5 section 2)

Verified against the source (oik.ai/Finlex, OK 5:2 §) — an application for a summons must state:

1. **The plaintiff's specified claim** — what is being demanded of the court, precisely (for example a particular sum of money with interest).
2. **The facts on which the claim is based** — the grounds of the action (the legally operative facts).
3. **The evidence so far as possible** — what evidence the plaintiff intends to present and **what each piece of evidence is intended to prove** (the theme).
4. **A claim for the costs of the proceedings**, where appropriate.
5. **The ground of jurisdiction**, if it is not otherwise apparent.

In addition: **the name of the court**, the names and places of residence of the parties, the contact details of the legal representative or agent, the **address for service** (a postal address for summonses and notices), and telephone numbers. If the defendant's contact details are not known, the application must state what has been done to establish them. **Signature** (the party or the drafter; the drafter's occupation and place of residence).

> Check the wording in force and any amendments with the `legal-core:legal-research` skill
> before final use; summary (undisputed) matters may follow a lighter procedure.

> **Template:** [`templates/statement-of-claim.md`](../../templates/statement-of-claim.md) — a structural skeleton (the parts required by OK 5:2 §). Conventions: [`references/template-standards.md`](../../../references/template-standards.md).

## Workflow

1. **Establish the case:** what is being claimed and from whom, what the claim is based on, what evidence there is, which käräjäoikeus has jurisdiction (the defendant's place of residence or another ground).
2. **Check the legal position against the source:** retrieve the substantive provisions (contract law, the law of damages and so on) and the supporting case law with the `legal-research` skill. The claim must rest on the legally operative facts and on a legal ground.
3. **Draft the application for a summons** following the structure above:
   - The claims numbered and precise.
   - The grounds set out in order (events → legal ground).
   - The evidence with its themes (documentary evidence, witnesses).
   - The claims for interest and costs.
4. **Check** before filing: are the requirements of OK 5:2 § met, is jurisdiction made out, are the claim and the grounds consistent, does each piece of evidence have a theme.

## Output format

Produce the application for a summons as an editable document (new: the `docx` skill; editing an existing one with subsequent changes: the `adeu` MCP). Mark the passages to be completed in square brackets and with
`[confirm — needs checking by the advocate or lawyer]`. Do not state the probability of success.

## Report

Produce the application for a summons plus a checklist (the requirements of OK 5:2 § done or missing) with source markings (the substantive statute and section via the `legal-research` skill, and any case law). Remind the user of time limits and limitation (check the limitation period against the source, where relevant).

## What this skill does NOT do
- **Does not replace the responsibility of the agent or advocate.** The output is a draft that needs checking; the person handling the matter is responsible for the content of the action and for filing it.
- **Does not predict whether the case will succeed or what the judgment will be.** It describes the strengths and risks of the claim even-handedly, not the probability of winning.
- **Does not confirm limitation periods, provisions on jurisdiction or the wording of OK 5:2 § from memory.** Time limits and procedural provisions are absolute and are taken from the source.
- **Does not confirm the substantive legal ground from memory.** The provisions of contract law, the law of damages and so on, and the case law, are checked against the source.
- **Does not decide whether an action is the best route.** Weighing a settlement, court-annexed mediation and arbitration is left to the client and the agent.
- **Does not draft the lighter procedure for a summary (undisputed) matter** without a separate check — this skill concentrates on a contested action.

## Continue from here
- Planning the evidence for the themes of the action → /dispute-resolution:evidence
- Checking the substantive law and the case law → /legal-core:legal-research
- Quality-checking the application for a summons before filing → /legal-core:document-review
- Checking the background documents in a contract dispute → /contracts:contract-review
- Anonymising sensitive material → /data-protection:data-protection-assessment
