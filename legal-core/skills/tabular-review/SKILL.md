---
name: tabular-review
description: >
  Tabular review of legal documents: side-by-side comparison of several
  documents or structured tabulation of a single document, so that every cell
  is sourced to a place in the document. Use this skill when documents of the
  same type have to be compared as a table (one row per document, one column
  per point of comparison) — a contract portfolio, the terms of a set of
  leases, non-competition clauses in employment contracts (työsopimuslaki
  55/2001), due diligence material, a batch of administrative decisions — or
  when a structured table is extracted from one document (payment schedule,
  ownership table, lease abstract, list of annexes). Every cell gets a source
  reference and a confidence level; missing information is marked "not
  mentioned", never blank. Triggers on: tabulate, tabular review, compare
  the contracts, several contracts, row per document, contract portfolio,
  contract comparison, lease abstract, payment schedule, abstract, due
  diligence, comparative review, extract a table, batch of documents, .xlsx.
---

# Tabular review — multi-document comparison and structured extraction, sourced cell by cell

This skill turns a set of documents into a table that can be checked: **every cell says which place in the document it came from, and how certain the extraction is**. The end product is not a memorandum but a table (or several) — the way an experienced lawyer or notary produces a contract portfolio summary, a lease abstract or a due diligence matrix.

> **Disclaimer:** the table is a draft that needs checking — not legal advice. It says *what the documents contain*; what follows from that, and whether the terms are valid, is assessed by a competent human. See `legal-core/AGENTS.md` → *Disclaimer*.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## The principle: every cell is sourced

The whole value of the table is **traceability**. Every cell gets three things:

1. **A value** — word for word when the cell is text; a number as a number; a date in the form YYYY-MM-DD; a sum of money with its amount and currency.
2. **A source** — the place in the document the value came from: `5.2 §`, `annex 1 item 3`, `p. 4 second paragraph`. If the value was inferred, the source is `inferred from item 9.1` — **never blank**.
3. **A confidence** — a number from 0.0 to 1.0. Anything below 0.7 is raised for human checking.

**Missing information is marked `not mentioned`** — not left as a blank cell. A blank cell hides the fact that something is missing from the document that ought to be there; "not mentioned" turns the gap into a finding.

Source discipline is the core of the whole collection: see `references/citation-style.md` (three-tier certainty marking). Here it is taken down to the level of the individual cell.

---

## Reference files

| Reference | File | Use when |
|---|---|---|
| Column templates by document type | `references/column-templates.md` | You are designing the columns for a known document type (lease, employment, supplier and shareholders' agreements, real property sale, administrative decision). Contains the Finnish points of comparison and references to the provisions. |

**Guidance:** when the document type being compared is a known one, read `references/column-templates.md` and tailor the set of columns from there. For an unknown type, derive the columns from the document itself (Stage 1).

---

## Two modes of use

**Mode A — multi-document comparison (one table, one row per document).** Documents of the same type side by side: the columns are the points of comparison (notice period, limitation of liability, governing law…), the rows are the documents. The power of the table is in **seeing the outlier** — the one contract where a term differs from the others or is missing.

**Mode B — structured extraction from a single document (several tables).** The table-like structures are extracted from one document: the payment schedule, the ownership or redemption table, the lease abstract, the list of annexes and encumbrances. **Several tables, not one** — if the document has five separate annexes, produce five tables.

---

## Stage 1 — Finding the schema and designing the columns

- **Mode A:** determine the document type being compared and choose the columns. Read `references/column-templates.md` if the type is there; otherwise derive the points of comparison from what matters in this type of document (parties, subject matter, term, termination, liabilities, governing law, dispute resolution).
- **Mode B:** go through the document and identify **every** table-like structure: numbered annexes, structured lists, mechanics tied to clauses (instalments, escalation formulas). Propose all the tables to be produced before filling them in.
- **Faithful column headings:** if the document uses the term "vastike", do not name the column "vuokra". Use the document's own term and add a definition row where needed.

**Stop condition:** if the document type or the set to be compared cannot be determined, ask before going on.

---

## Stage 2 — Filling in, with per-cell provenance

Fill the table in cell by cell and give every cell a value, a source and a confidence (see *The principle*).

- **Word for word:** when the cell is text (e.g. the wording of a term), quote the document, do not paraphrase.
- **No padding of rows:** if the document has three parties, the table has three rows — no "other / TBD" filler rows.
- **Defined terms:** if the document uses an abbreviation or a defined term, add a definitions table (`term → meaning → source`) so the reader can unpack it.
- **Sums of money and dates:** always include the currency, even if the document says only "€"; where it is unclear, lower the confidence. Time limits with their units (days / months / years / working days).

---

## Stage 3 — Two levels of correctness

Keep what can reliably be established from the document clearly separate from what has to be checked in the source.

- **Level 1 — what the document says (high confidence).** The value of the cell is extracted from the document. This is the skill's core territory.
- **Level 2 — whether a term is valid or lawful (needs the source).** If a column "lawful?" or "valid?" is wanted in the table, **do not assess it from memory.** Use the `legal-research` skill (oik.ai/Finlex) and mark the cell `confidence: low` with the check as its source, or leave the assessment to a separate finding. For example, in a non-competition column for employment contracts, "does it hold up in law" is a level 2 question (Employment Contracts Act, työsopimuslaki 55/2001, chapter 3 section 5; the obligation to pay compensation was added by act 1018/2021) — tabulate the *content* of the term at level 1, but the assessment of validity at level 2.

---

## Stage 4 — Raising the outliers and the gaps

The power of the table is in the comparison. Produce a short list of outliers after the table:

- **The outlier row:** the document whose term differs materially from the others (e.g. one contract with a 12-month notice period when the others have 3 months).
- **A missing mandatory column:** a row that says `not mentioned` at a point this type of document ought to cover (e.g. governing law or dispute resolution missing).
- **An internal contradiction:** a cell that conflicts with another cell in the same document.

An outlier is a **risk signal**, not a conclusion — it says what a human should look at first.

---

## Output

- **A markdown table** in the reply is the default; keep the source and confidence information with it (either as columns of their own or after the cell).
- **`.xlsx`** as a multi-sheet file when the material is large or is wanted for further use: one sheet per table and **a separate source column for every value** (or a "Sources" sheet of its own). Use a spreadsheet tool if one is available; otherwise produce `.csv`.
- Do not repeat the same table both as markdown and as a file without a reason — choose the form of presentation according to how it will be used.

---

## Closing summary

```
========================================
TABULAR REVIEW
========================================
Material: [documents / type]   Mode: [A multi-document comparison / B extraction]
Date: [date]

TABLES: [headings]
ROWS / CELLS: [number]   ·   UNSOURCED CELLS: 0

OUTLIERS AND GAPS:
- [outlier row / missing item / contradiction]

NEEDS CHECKING (confidence below 0.7 or a level 2 assessment of validity):
- [cell + why]

DISCLAIMER: The extraction into this table was carried out by AI and supplements,
it does not replace, checking by a human. Every value needs checking against the
document; validity against the source.
========================================
```

---

## Word and spreadsheet files

If the source documents are in Word format, use the `adeu` MCP (where available) to read them with their structure (`read_docx`; `mode: "appendix"` reveals the defined terms and the anchors, which makes the columns and the source references easier to identify). The table output is exported to `.xlsx` or `.csv` where needed.

---

## What this skill does NOT do

- **Does not leave a cell without a source.** Every cell refers to a place in the document; missing information is `not mentioned`, not blank.
- **Does not assess validity or lawfulness from memory.** Level 2 columns are checked with the `legal-research` skill or marked as needing checking.
- **Does not pad the rows and does not invent columns** that the documents do not support.
- **Does not reach final legal conclusions.** The outliers are risk signals for a human to assess.
- **Does not replace a deep review of an individual document** → /legal-core:document-review.
- **Does not cover the law of other countries.** Only Finnish law (with the relevant EU law separately).

## Continue from here

- An individual document needs a deep review as well as the tabulation → /legal-core:document-review
- A "valid?" or "lawful?" column has to be checked in the source → /legal-core:legal-research
- The material being compared is contracts whose terms are assessed by risk → /contracts:contract-review
- The material being compared is consumer contracts → /consumer-law:consumer-sales-liability
- The table brings up material for a dispute or for proceedings → /dispute-resolution:evidence
