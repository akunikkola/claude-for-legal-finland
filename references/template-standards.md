# Template standard

A shared convention for every document template in this collection
(`<domain>/templates/*.md`). It plays the same role for templates as
[`citation-style.md`](citation-style.md) does for citations — one standard that every template
rests on.

## Principle: a skeleton, not statutory text

A template is a **structural skeleton**: headings, mandatory parts and completion instructions. It
**contains no ready-made statutory text, no section citations and no boilerplate clauses** that
would tempt anyone into using material recalled from memory as it stands. The content is produced
by a skill that retrieves the provisions from a source (`legal-core:legal-research`) — the template
only says *which parts* the document must contain and *where* the content of each part is verified
from.

## Field conventions

| Marking | Purpose | Example |
|---|---|---|
| `[Field name]` | Information to be filled in | `[Plaintiff's name and domicile]` |
| `[… — check against the source]` | Content must be retrieved from a source before filling in, not from memory | `[time limit for a request for rectification — check the instructions attached to the decision]` |
| **(mandatory)** / *(optional)* | The status of a section | after the heading |
| `<!-- note: … -->` | A completion instruction, removed from the finished document | a comment |

## Mandatory elements in every template

1. **A header block**: which document the template is for, which skill uses it, and where the list
   of mandatory parts has been verified from.
2. **A draft footer** at the end of the finished document:
   *"Draft. Needs checking before use; not legal advice."*
3. **For documents subject to formal requirements** (a will, a prenuptial agreement) a checklist of
   the formal requirements, each item pointing to its source — a defect of form can make the
   document invalid.

## Use in tools

- Markdown is the source. **To produce a Word document**: the docx skill renders the completed
  template. **To edit an existing document**: the Adeu MCP (Track Changes) — do not generate a new
  document from the template if the counterparty's version is already on the table.
- A skill points at the template (`templates/<document>.md`) and fills it in according to its own
  workflow; the template does not replace the skill's instructions.

## Limits

- A template takes no position on content or strategy — it prevents a *missing part*, not wrong
  content.
- No client-specific or organisation-specific boilerplate in templates; that belongs in the
  practice profile (`legal-core:practice-profile`).
- Citations in templates follow [`citation-style.md`](citation-style.md) (placeholders, three-tier
  certainty).
