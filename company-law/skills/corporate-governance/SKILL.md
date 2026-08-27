---
name: corporate-governance
description: >
  Corporate governance of a Finnish limited liability company: incorporation,
  governing bodies and the liability of management under the Limited Liability
  Companies Act (osakeyhtiölaki 624/2006). Use this skill when the user is
  forming a limited company, drafting or amending articles of association
  (yhtiöjärjestys), preparing a general meeting or a board meeting (notice,
  agenda, minutes), assessing the duties and liability of a board member or the
  managing director, planning a dividend or another distribution of assets, or
  asking about minority shareholder rights. Triggers on: corporate governance,
  limited liability company, Oy, articles of association, general meeting,
  shareholders meeting, board meeting, directors' liability, managing director,
  dividend, distribution of assets, share issue, minority shareholder, trade
  register, osakeyhtiö, yhtiöjärjestys, yhtiökokous, varojenjako, SVOP,
  kaupparekisteri, PRH.
---

# Corporate governance — incorporation, governing bodies, distributions and liability

This skill helps with governance situations across the life cycle of a limited liability company
under the Limited Liability Companies Act (osakeyhtiölaki 624/2006). Fundamentals and a verified
chapter map of the Act: `references/company-law-fundamentals.md` — read it at the start of the task.

> **Disclaimer:** the outputs are drafts for review — not legal advice. Corporate decisions are
> made by the governing bodies and filings are signed by a human. See `company-law/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law from the source

Retrieve the applicable provision of the Act (section level, time limits, majority requirements)
**with the `legal-core:legal-research` skill** before presenting it as verified. The chapter-level
structure is verified in the reference; the content of individual sections changes.

## Incorporation

1. **Memorandum of association and articles of association** (OYL chapter 2) — the minimum content
   is checked from the source; the mandatory provisions of the articles of association
   (yhtiöjärjestys) are narrow (among others the trade name, domicile and line of business), and
   the rest is design: redemption and consent clauses, share classes, provisions on representation.
2. **Subscription and payment of shares** — a private limited company has no minimum share capital
   (confirmed); if capital is subscribed, its payment and any contribution in kind (apportti) are
   documented in accordance with the Act.
3. **Registration** — a trade register filing to PRH (Trade Register Act, kaupparekisterilaki
   564/2023); the company comes into existence on registration. Remember the notification of
   beneficial owners and the registrations with Verohallinto.
4. **Name** — the distinctiveness and confusability requirements of the Trade Name Act
   (toiminimilaki 128/1979); the relationship between the trade name and a trade mark → the IPR
   angle.

## The general meeting and board work

- **Notice and quorum**: check the notice period, the form of the meeting (including remote
  meetings) and the decision requirement (simple majority versus qualified majority) from the
  source — not from memory.
- **Minutes**: draw up precise minutes of the resolutions. For a distribution of assets record the
  solvency assessment, for related-party transactions record the assessment of equal treatment
  (OYL 1:7), and record dissenting opinions — documentation is management's best protection
  against liability claims (chapter 22).
- **Disqualification**: check whether a board member or the managing director is disqualified
  (esteellisyys) in the matter being dealt with.
- **Risk of challenge (chapter 21)**: a resolution that was adopted improperly or that infringes
  equal treatment can be challenged — raise the risk before the decision is taken.

## Duties and liability of management

- Management must **promote the interests of the company with due care** (OYL 1:8, wording
  confirmed): a duty of care and a duty of loyalty owed to the company — not to an individual
  shareholder.
- What matters in assessing due care is the **decision-making process**: sufficient information,
  proper handling, a reasoned business decision, and documentation.
- **Liability in damages (chapter 22)**: the liability of a member of management towards the
  company, a shareholder and others for loss caused in breach of the Act or the articles of
  association — check the conditions for liability and the presumptions of negligence from the
  source. Distinguish company-law liability, criminal liability (chapter 25) and tax liabilities.

## Distribution of assets

**Always** work through the two-part test (`references/company-law-fundamentals.md`):

1. **The balance-sheet test** — distributable funds from the adopted financial statements.
2. **The solvency test (OYL 13:2, confirmed)** — the assessment and its documentation at the time
   of the decision; take known future obligations into account.

Identify the form of the distribution (dividend, repayment from the reserve for invested
unrestricted equity (SVOP), acquisition of own shares, reduction of share capital, group
contribution) — each has its own procedure and tax treatment `[confirm — requires a tax
specialist's assessment]`. Consequences of an unlawful distribution: return of the assets plus
liability.

## Protection of the minority shareholder

Where the user represents a minority or the arrangement affects the minority, map out: the
principle of equal treatment (1:7), the minority dividend (chapter 13, check the conditions from
the source), a special audit (chapter 7), the right to ask questions at the general meeting,
challenge of a resolution (chapter 21) and redemption situations (chapters 18 and 23). Note the
time limits for each remedy from the source.

## What this skill does NOT do

- **It does not make trade register filings and does not deal with PRH** — it prepares the drafts;
  a human files and signs them.
- **It does not confirm majority requirements, notice periods or time limits from memory** — these
  are retrieved from the source or marked `[check]`.
- **It does not give a binding view on the liability of management** in an individual case — 🔴
  liability questions go to a company-law lawyer.
- **It does not present a tax treatment as verified** — tax points go to a tax specialist.
- **It does not prepare financial statements and does not assess whether the accounts are
  correct** — it uses adopted financial statements as an input.

## Continue from here

- Checking a section or a time limit from the source → /legal-core:legal-research
- Drafting or reviewing a shareholders' agreement → /company-law:shareholders-agreement
- Merger, demerger or an acquisition → /company-law:corporate-transactions
- Quality check of a draft of articles of association or minutes → /legal-core:document-review
- Solvency is faltering or the distribution is close to insolvency → /insolvency:insolvency-assessment
