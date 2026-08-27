# Legal research tools — search strategies and troubleshooting

This reference expands on the workflow in `SKILL.md`: how to use the MCP tools effectively and what to do when a search produces nothing.

## oik.ai / Finlex MCP tools

### `get_legislation` — a statute in force
Parameters:
- `year` (number, e.g. 2015) and `number` (number, e.g. 410) — the statute identifier 410/2015.
- `part` (osa, roman-numeral OSA), `chapter` (luku, e.g. `3` or `26a`), `section` (pykälä, e.g. `1` or `226b`) — optional.
- `language`: `fin` (default) or `swe`.

How to use it:
- **The whole act**: leave `part`/`chapter`/`section` out. Use this when you do not know the section number or you need an overview.
- **A single chapter**: give `chapter` only. A good way to locate the right section in a large act.
- **A single section**: give `chapter` + `section` (or `section` alone if the act is not divided into chapters).
- **Letter suffixes** (sections inserted later): `section: "226b"`, `chapter: "26a"`.

If you do not know the statute number: do not guess. Search for the act by name first (if the tool supports name search), or locate the number through a `search_decisions` search (decisions cite statute numbers), and then confirm it with `get_legislation`.

### `search_decisions` — case law
Parameters: `query` (required), `court`, `limit` (1–50, default 10), `offset` (paging).

`court` values: `Korkein oikeus`, `Korkein hallinto-oikeus`, `Hallinto-oikeudet`, `Hovioikeudet`, `Markkinaoikeus`, `Työtuomioistuin`, `Vakuutusoikeus`.

Search strategy:
- Start with **descriptive subject terms** that describe the legal question, not everyday language (e.g. "sopimuksen kohtuullistaminen OikTL 36 §" rather than "epäreilu sopimus").
- Narrow with `court` when you know the instance (e.g. taxation → Korkein hallinto-oikeus).
- If there are too many results or too few, adjust the search terms: add the provision, drop a term that is too narrow, try a synonym.
- Use `offset` + `limit` for paging when you work through several hits.
- Searching by identifier: put the case identifier in the `query` field (e.g. "KKO:2024:15") to find a particular decision.

The result contains a `document_path` — pass it to the `get_decision` tool.

### `get_decision` — the full text of a decision
Parameter: `document_path` (from a `search_decisions` result).

Always read the whole decision when the outcome or the reasoning matters. Extract: the nature of the matter, the legal question, the outcome, the key reasoning and the provisions applied. A search extract on its own can mislead.

## laki.ai MCP tools (alternative connector)

If the source connector is **laki.ai** (MCP address `https://api.laki.ai/mcp/claude`, OAuth sign-in) instead of oik.ai, the workflow is the same but the tools have different names. laki.ai covers Finlex statutes, government bills (1980→), case law (KKO, KHO, HO, HAO, MAO, TT, VAKO) and Verohallinto's in-depth tax guidance.

| laki.ai tool | Equivalent in oik.ai | Use |
|---|---|---|
| `search_legal_sources` | `search_decisions` (broader) | Search statutes, case law, preparatory works and Verohallinto guidance by search terms. |
| `read_document` | `get_legislation` / `get_decision` | Open the full text of a statute, a decision or a government bill. |
| `get_table_of_contents` | — | Browse the chapter and section structure of a source to locate the right place. |
| `search_within_documents` | — | Search for exact terms within known sources. |
| `get_statute_section_history` | — | Read the version history of a section and its earlier wordings — useful when checking currency and amendments. |

The same discipline applies whatever the connector: read the actual text, not the search extract; confirm that it is current (with laki.ai, `get_statute_section_history` helps); mark the source — `(laki.ai)`. Installation: `QUICKSTART.md` at the root and <https://laki.ai/fi/claude>.

## Reading case identifiers
- `KKO:VVVV:NN` — a precedent of the Supreme Court (general courts: criminal, civil and petitionary matters).
- `KHO:VVVV:NN` — a precedent of the Supreme Administrative Court (administrative matters: taxation, environment, planning, health and social services, and so on).
- Before the year 2000, with a space: `KKO VVVV:NN`, `KHO VVVV:NN`.
- Decisions of the lower courts are not precedents; cite them with the court, the date and the docket number.

## When a search produces nothing
1. **No hits**: broaden the search terms, drop the `court` restriction, try the provision both in numbers and in words.
2. **Wrong act**: if you doubt the statute number, retrieve the whole act and check the name and the scope before citing a section.
3. **MCP unavailable**: tell the user that the source could not be checked. Mark the answer as coming from memory (`[from memory — check]`) or ask the user to attach the source.
4. **Conflict between sources**: if the version in force and a recent amendment do not line up, raise the conflict rather than quietly picking one.

## Other Finnish sources (not necessarily in an MCP)
Document these and point the user to them where needed:
- **Finlex** (finlex.fi) — the official, free statutory database; legislation in force, original statutes, case law, treaties.
- **EUR-Lex** (eur-lex.europa.eu) — EU regulations, directives, decisions of the Court of Justice of the EU.
- **Eduskunta** (eduskunta.fi) — government bills, committee reports, plenary records.
- **Lausuntopalvelu** (lausuntopalvelu.fi) — open consultation rounds.
- **Edilex** (edilex.fi) — commercial, with broader legal literature and news coverage (subscription).
- **Eduskunnan oikeusasiamies** (oikeusasiamies.fi) and **oikeuskansleri** (okv.fi) — the decision practice of the oversight of legality.
