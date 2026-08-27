---
name: legal-research
description: >
  Legal research into Finnish law: retrieving, reading and correctly citing
  the legislation in force and the case law through the oik.ai, laki.ai or
  Finlex MCP. Use this skill when you need up-to-date statutory text, the
  content of a section, a precedent of the KKO or the KHO, a decision of a
  court of appeal, the market court, the labour court or the insurance court,
  or the reasoning of a government bill. Triggers on: what does the law say,
  is there case law on this, what is the section in force, legal research,
  check this in Finlex, and on any statute number (e.g. 410/2015) or case
  identifier (KKO:2024:15). It also triggers always before you quote a section
  or a case from memory — check it in the source first.
---

# Legal research — the law in force and the case law from the source

This skill makes sure that legal claims rest on **real, currently valid**
statutory text and on **genuine** court decisions — not on the model's memory.
Finnish legislation changes constantly, and sections and case identifiers
recalled from memory often go wrong. Retrieve the source whenever you can.

> **Basic principle:** before you quote a section, a statute number or a case,
> retrieve it from the source. If no source is available, mark the claim as
> coming from memory and do not present it as verified. See
> `legal-core/AGENTS.md` → *The currency imperative*.

---

## Tools to use

This skill uses the **oik.ai MCP** or, alternatively, the **laki.ai MCP** (or
another equivalent Finlex MCP). Both provide the same thing: the law in force,
the case law and the preparatory works from the source — only the tool names
differ. Use whichever connector is attached. For detailed search strategies,
the tools and the laki.ai equivalents, read `references/tools.md`.
Installation: `QUICKSTART.md` at the root.

| Tool | Use |
|---|---|
| `get_legislation` | Retrieve a statute in force, or part of one. Parameters: `year` + `number` (e.g. 2015 / 410), optional `part` / `chapter` / `section`, `language` (`fin`/`swe`). Leave the parts out → the whole act; `chapter` alone → the whole chapter. Supports letter suffixes (e.g. `226b`). |
| `search_decisions` | Search for cases by search terms. Parameters: `query`, optional `court` (Korkein oikeus, Korkein hallinto-oikeus, Hallinto-oikeudet, Hovioikeudet, Markkinaoikeus, Työtuomioistuin, Vakuutusoikeus), `limit`, `offset`. Returns text extracts and a `document_path` value. |
| `get_decision` | Retrieve the full text of a decision using the `document_path` value obtained from a `search_decisions` result. |

**If no MCP is available:** tell the user that the source could not be checked
and that the answer rests on memory. Mark every provision
`[from memory — verify in Finlex/oik.ai]`. Do not present a provision recalled
from memory as verified.

---

## Workflow

### 1. Identify what is being sought
- **A particular section or act** → `get_legislation` by statute number. If the
  user gives only the name of the act, work out the statute number (check it by
  searching; do not guess the number).
- **A legal question with no known section** → `search_decisions` with
  descriptive search terms, narrowing by `court` where needed; identify the
  relevant act from the decisions and then retrieve the section with
  `get_legislation`.
- **A particular precedent** (e.g. KKO:2024:15) → `search_decisions` by the
  identifier, then `get_decision`.

### 2. Retrieve and read
- Retrieve the version **in force**, not the original statute. Check that the
  section has not been repealed or amended.
- Read the actual text of the section — do not settle for a search extract when
  the content matters.
- For cases, read the **outcome and the reasoning** from the full text
  (`get_decision`), not the headnote or the search extract alone. A search
  extract can be misleading without its context.

### 3. Confirm that it is current
- Is the act in force? Has the section been amended recently? Are there
  transitional provisions?
- Has more recent case law changed the interpretation since the precedent?
- Note: the current version in Finlex or oik.ai may be a few weeks behind the
  latest amendments. If the matter is recent, state that reservation.

### 4. Cite correctly
Use the established Finnish citation forms (full guidance:
`../legal-writing/references/citations.md` and
`../legal-writing/references/sources.md`):

- **A statute**, on first mention name + number: *kuntalain (410/2015) 7 §:n 1 momentin mukaan…*
- **A precedent**: *Korkein oikeus on ratkaisussaan KKO:VVVV:NN katsonut, että…* (the identifier is a placeholder — fill it only with a decision checked in the source)
- **A lower court** (not a precedent): *Helsingin hovioikeuden tuomio 15.3.2024 nro 312 (S 23/1234)*
- **A government bill**: *HE 268/2014 vp, s. 145*

### 5. Mark the source
Attach a source marker to every section and decision you quote: `(oik.ai)`,
`(laki.ai)` or `(Finlex, ajantasainen)`. Distinguish clearly:
- what is **content taken directly from the source**,
- what is **your interpretation or summary**, and
- what needs **specialist confirmation** (`[confirm — requires a lawyer's assessment]`).

---

## What NOT to do

- **Do not invent** a section, a statute number, a subsection or a case
  identifier. If you cannot find it, say so.
- **Do not quote** a search extract as if it were the whole section or the
  outcome of a decision.
- **Do not present** a repealed or amended provision as being in force.
- **Do not reach** a final legal conclusion — the output is a draft that needs
  checking (`AGENTS.md` → *Disclaimer*).

---

## Example

> **User:** What does the Local Government Act say about a municipality's
> purpose, and may the council delegate its powers?

1. `get_legislation` (year 2015, number 410) → retrieve the relevant chapters
   (e.g. the tasks of a municipality, its bodies and the transfer of powers).
2. Read the actual sections; extract the provision on the transfer of powers
   precisely.
3. `search_decisions` (query "kunnan toimivallan siirtäminen delegointi", court
   "Korkein hallinto-oikeus") → identify the relevant KHO case law;
   `get_decision` for the full text.
4. Answer: quote the section with a source marker, summarise the line taken by
   the KHO, and mark clearly the points that are open to interpretation as
   needing checking.

---

## What this skill does NOT do

- **Does not replace a lawyer's legal assessment and does not carry
  responsibility for the outcome.** The skill puts the source on the table;
  applying it to the case and the final responsibility belong to a competent
  human.
- **Does not confirm a section or a case identifier from memory.** If no MCP is
  available, every provision is marked
  `[from memory — verify in Finlex/oik.ai]` — it is not presented as verified.
- **Does not guarantee absolute currency.** The current version in Finlex or
  oik.ai may be weeks behind the most recent amendments; for recent changes
  that reservation must be stated.
- **Does not reach a final legal conclusion from the source.** The output keeps
  direct source content, your own summary, and interpretation needing
  specialist confirmation separate from one another.
- **Does not read a search extract as the whole section or as the outcome of a
  decision.** The essential content is read from the actual text of the section
  or the decision.
- **Does not cover the law of other countries or general legal literature.**
  Only Finnish law in force and Finnish case law (together with the relevant EU
  law) from the MCP sources.

## Continue from here

- Citation forms, inflection or the rules of legal language need checking → /legal-core:legal-writing
- The checked sources need to be assembled into a document quality review → /legal-core:document-review
- The source search continues into drafting or reviewing a contract term → /contracts:contract-drafting or /contracts:contract-review
- The case law retrieved concerns termination of employment or a civil dispute → /employment-law:termination-of-employment or /dispute-resolution:evidence
- The source concerns an administrative decision or an appeal → /administrative-law:administrative-decision or /administrative-law:administrative-appeal
