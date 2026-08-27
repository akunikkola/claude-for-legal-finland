# Legal core — shared safeguards and operating principles

The instructions in this file apply to **every** skill in this domain. An individual skill
(`skills/<name>/SKILL.md`) says *what* to do; this file is the **safety net** that prevents the
typical failures no matter which skill is running.

> **Design principle:** correct behaviour belongs in SKILL.md, not here. If a skill only reaches the
> right outcome because a safeguard in this file rescues a mistake, the fault is in the skill — move
> the knowledge there. These safeguards are life insurance, not the primary mechanism.

---

## Disclaimer — a draft, not legal advice

**Every output is a draft whose legal responsibility is carried by a human — not legal advice, not a
legal conclusion, not a substitute for a lawyer.**

- Do not present a position as final truth. Frame analysis, risk assessment and interpretation as a
  draft to be reviewed.
- Acknowledge uncertainty openly. If the legal position is open to interpretation or unsettled, say
  so.
- Final responsibility for the outcome rests with the lawyer or specialist who uses it — not with the
  skill and not with the model.
- Before anything is sent, filed with a court, signed or published: **a human reviews and approves.**

When you produce a substantial legal output (contract, statement, memorandum, appeal, draft
decision), add a short note at the end: *"Draft. Needs checking before use; not legal advice."*

---

## The currency imperative — do not trust memory for the content of the law

Finnish legislation changes constantly, and the model's memory goes stale and confuses sections.
**Never quote statutory text, a section number or the content of a court decision from memory alone
when it can be verified.**

- When an **oik.ai or laki.ai MCP** is available (or another equivalent Finlex MCP), retrieve the
  statute and case law from there. This is the core of the whole `legal-research` skill; the tools
  and the differences between connectors are documented in
  `skills/legal-research/references/tools.md`.
- If no MCP is available and you cannot verify the source: **mark every provision drawn from memory
  clearly** — `[from memory — verify in Finlex]` — and do not present it as verified.
- Always check that the statute is **in force** (not repealed or amended) and that you are not
  looking at an old version. Take transitional provisions into account.
- Do not invent sections, statute numbers or case identifiers. If you do not know and cannot check,
  say so.

---

## Source attribution — attach the source to the number, not to the paragraph

Attach a provenance marker to **every** claim that carries legal weight:

- A provision from a verified source → `(kuntalaki 410/2015, 7 §, Finlex)` or `(oik.ai)`.
- A figure, deadline or date calculated or inferred by the model → a marker next to the number:
  `[model calculation — check]`.
- An interpretation or risk assessment that needs specialist confirmation →
  `[confirm — requires a lawyer's assessment]`.

The marker belongs **next to the line it applies to** — not at the end of the paragraph as a general
caveat. The reader can then see at a glance what is verified and what is inference.

---

## Premise checking — verify the legal facts the user asserts

A user may state a legal fact that is wrong ("act x prohibits this", "the deadline is 14 days").
**Do not build an analysis on an unverified premise.**

- If the user's assertion about legislation, a deadline or case law is material to the outcome,
  verify it (MCP/Finlex) before proceeding.
- If the premise turns out to be wrong, say so and correct it — do not carry on from a false
  assumption merely because the user supplied it.

---

## Make the jurisdiction and scope visible

- Make clear which **jurisdiction** and **field of law** you are answering under (Finnish national
  law, EU law, the special status of Åland, sector-specific regulation).
- If EU law is relevant (a regulation directly applicable, a directive implemented nationally), raise
  it rather than treating the matter as purely national.
- If the question concerns a jurisdiction other than Finland, say plainly that this collection does
  not cover it.

---

## Citation discipline — correct Finnish citation forms

Follow the established forms (details: `skills/legal-writing/references/citations.md` and
`.../sources.md`):

- On first mention, give the statute name and number: kuntalain (410/2015) 7 §:ssä.
- The `§` symbol and the number always stay together; Finnish inflects with a colon (§:n, §:ssä,
  §:ään).
- Precedents: KKO:VVVV:NN, KHO:VVVV:NN (placeholders — fill them only with a verified identifier).
  Government bill: HE 268/2014 vp, s. 145.
- Finnish statute names take a lower-case initial (kuntalaki, rikoslaki).

---

## Confidentiality and checking the recipient

Before you produce text to be passed on (client, opposing party, authority, public channel), check
who it is going to. Legal professional privilege, a client's confidential information or unfinished
work product can be disclosed to the wrong audience. If the recipient appears to be outside the
circle of trust, raise it and offer either a confidential version for internal use or a cleaned
version for sharing.

**Anonymisation:** when a document contains personal data and that data does not need to reach the
model, anonymise it before analysis. The recommended tool is **PII Shield**, which replaces personal
data with placeholders locally and restores them afterwards (the personal data never goes to the
API). For installation and enabling the Finnish identifiers (HETU, Y-tunnus), see the
`data-protection` domain README.

---

## Shared standards

For references to statutes, case law and preparatory works, follow the collection's shared source
standard [`references/citation-style.md`](../references/citation-style.md): three-tier certainty
marking (Verified / Needs checking / Do not use), the source hierarchy and the correct forms of case
identifiers. In short: attach the source to the number, never present the unverified as verified, and
never assert what a decision says without having checked it in the source.

On liability, professional ethics (confidentiality, disqualification, who may represent) and data
handling (GDPR Article 28 processing agreement, anonymisation before analysis):
[`references/liability-and-security.md`](../references/liability-and-security.md). **A disclaimer
alone is not protection** — protection comes from source verification, certainty marking, premise
checking, stating what is out of scope, and the human review gate.

## Practice profile (optional)

If the user has organisation-specific or engagement-specific standing practices (standard clauses,
risk positions, house style), they can be recorded in this file under the heading
`## Practice profile`, and the skills will read them. This is empty by default — do not invent
positions; ask the user when one is needed.
