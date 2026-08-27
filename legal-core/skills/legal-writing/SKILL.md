---
name: legal-writing
description: >
  General assistant for Finnish law and legal writing. Use this skill ALWAYS
  when the user works with acts, sections, statutes, contracts or other legal
  documents — whether or not the user is a lawyer. It triggers when the user
  mentions a section, a subsection, an act, a decree, a statute, a contract,
  legal text, a statutory reference, legal language or a legal document, or
  wants to understand, interpret, analyse or write legal content in Finnish.
  It also triggers when the user supplies legal text or asks for it to be
  read, refers to a statute number (e.g. "365/1995"), uses the section symbol
  (§), mentions a government bill (HE), or asks for the language or structure
  of a legal text to be checked. Use this skill too when the user is drafting
  terms, obligations, liability clauses or other texts of a legal character,
  even if they never use the word "legal". Use it for quick tasks as well
  (fixing a single reference) — do not answer without the skill, because the
  citation standard lives in it.
---

# Legal writing — Finnish legal language and legislation

This skill helps you work with Finnish legislation and legal documents. It
covers the structure of statutes, the correct form of section references, the
writing rules of legal Finnish, the particular demands Finnish makes in a legal
context, the drafting of contracts and the use of the sources of law.

The skill serves both lawyers (for whom precision and professionalism are a
given) and non-lawyers (who need clear guidance in understanding and producing
legal content).

**The rules and examples below are Finnish and stay Finnish.** They describe
how legal Finnish is written; rendering an example into English would destroy
the very thing it demonstrates.

---

## Reference files

The detailed guidance for this skill is split into reference files. **Read the
reference you need with the Read tool whenever the task calls for it.**

| Reference | File | Use when |
|---|---|---|
| The structure of statutes | `references/structure.md` | The user asks about the structure or hierarchy of a statute, the numbering of sections, subsections, the headings of chapters or sections, or the title of a statute |
| Section references | `references/citations.md` | The user is formulating a reference to a section, a subsection or a statute, or is checking whether a reference is correct |
| Legal language and Finnish | `references/legal-language.md` | The user is writing or checking legal text, or asks about the writing rules, compound words, punctuation or the style of legal Finnish |
| Contracts | `references/contracts.md` | The user is drafting, reviewing or analysing a contract or another legal document |
| Sources and case law | `references/sources.md` | The user is looking for the law in force, case law or government bills, or needs the citation forms for the sources of law |
| Finnish | `references/finnish-language.md` | Quick guide to legal Finnish: legal compound words, section notation, initial capitals, the rules on numbers and abbreviations by text type, the model's typical mistakes. For a full language check: the `finnish-language` skill |

**Guidance:** read one or more of the reference files at the start of the task.
For most tasks 1–2 references are enough. Read them all only if the task is a
large one (e.g. checking a whole statutory text). Read
`references/finnish-language.md` whenever you produce or check legal text in
Finnish; for a thorough language check, use the `finnish-language` skill as
well.

---

## Core rules (always available)

### Quick guide to section references

- The § symbol and the number **always together**: `2 §:ssä` (not: `pykälässä 2`)
- Without a number, the word `pykälä`: `tässä pykälässä` (not: `tässä §:ssä`)
- Inflected with a colon: `§:n`, `§:ssä`, `§:ään`, `§:stä`, `§:llä`
- The singular is used even for several sections: `2 ja 4 §:ssä` (not: `§:issä`)
- A range of sections takes an en dash: `2–4 §` (not a hyphen)
- On first mention, the name and number of the statute: `kuntalain (410/2015) 7 §:ssä`

### The central principles of legal language

- **Yleiskielisyys, tarkkuus, yhdenmukaisuus, selkeys** — everyday language,
  precision, consistency, clarity
- **The 3-3-3 rule**: at most 3 subsections per section, 3 sentences per
  subsection, 3 clauses per sentence
- **Always the same term** for the same thing — no synonyms
- A sentence **is never begun with a numeral**
- In statutory text the numbers 1–10 are written out in words and 11 upwards in
  figures
- Percentages and units of currency are written out in statutory text:
  `20 prosenttia`, `50 euroa`

### Quick checklist for Finnish

- Compound words: `oikeusturva`, `hallintopäätös`, `voimaantulo` (not written as
  two words)
- Participle expressions written as two words: `voimassa oleva`,
  `edellä mainittu`
- Always a comma before a subordinate clause
- The names of acts take a lower-case initial: `kuntalaki`, `rikoslaki`
- No Oxford comma

---

## Checklist for a legal text

When you write or check a legal text, work through the following:

### Structure and content
- Is the structure logical and consistent?
- Are the definitions adequate and unambiguous?
- Are the references to other statutes exact and complete?
- Does the text follow the 3-3-3 rule?
- Do the introductory paragraph and the items together form a grammatically
  complete sentence?
- Is the punctuation between the items correct (semicolon, conjunction, full
  stop)?

### References to sections and subsections
- Is the § symbol always with a number (and the other way round)?
- Are the inflected forms correct (`§:n`, `§:ssä`, `§:ään`)?
- Is the statute number (e.g. 410/2015) included on the first reference?
- Are the references to subsections exact (section + subsection)?
- Has an en dash (–) been used rather than a hyphen (-) in ranges of sections?
- Have the a-sections been taken into account in the ranges?

### Legal language
- Is the text in everyday language and understandable?
- Is the same term used consistently for the same thing?
- Has a sentence been begun with a numeral? (it must not be)
- Are the numbers, percentages and units of currency in the right form?

### Finnish
- Are the compound words right (`oikeusturva`, `hallintopäätös`)?
- Are the participle expressions written as two words (`voimassa oleva`,
  `edellä mainittu`)?
- Is the punctuation right, particularly in subordinate clauses?
- Is the style matter-of-fact rather than grandiose?

### Sources and currency
- Has the reference been made to the act in force (not to one repealed or
  amended)?
- Has the current version in Finlex been checked?
- Have the case references used the correct form of identifier (KKO:VVVV:NN)?
- Are the number and the year of the government bill (HE) correct?
- Have any transitional provisions been taken into account?

---

## What this skill does NOT do

- **Does not replace review by a competent lawyer and does not carry
  responsibility for the outcome.** The output is a draft that needs checking;
  the final legal assessment and the responsibility rest with a human.
- **Does not confirm sections, statute numbers or case identifiers from
  memory.** The quick guidance in this skill concerns the *form* of references —
  the content and the currency must always be retrieved from the source
  (`legal-research`).
- **Does not reach a final legal conclusion and does not give legal advice.**
  Interpretation and risk assessment are presented as something to be checked,
  not as a binding position.
- **Does not cover the law of other countries.** Only Finnish law (with the
  relevant EU law raised separately); for other jurisdictions it must be said
  that this does not cover them.
- **Does not produce a finished document on its own.** The skill guides the
  language, the structure and the references; the contract, statement or appeal
  itself is produced with the subject-specific skills and under human direction.
- **Does not replace a systematic quality review.** The checklist is a light
  self-assessment, not a multi-stage risk analysis.

## Continue from here

- A new engagement begins or the user supplies material with no instruction → /legal-core:engagement-intake (deadline scan first)
- The content of the law, whether it is in force, or the case law has to be verified in the source → /legal-core:legal-research
- A finished legal document has to be checked systematically before use → /legal-core:document-review
- Finnish text has to be proofread and polished → /legal-core:finnish-language
- The task is to draft or review a contract → /contracts:contract-drafting or /contracts:contract-review
- The matter concerns employment, an administrative matter or a civil dispute → /employment-law:employment-contract, /administrative-law:administrative-decision or /dispute-resolution:statement-of-claim
