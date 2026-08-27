# Legal core

The cross-cutting foundation for Finnish legal work. This domain is the base that the
practice-area domains (legislative drafting, consultation statements, contracts, employment law,
data protection, administrative law, dispute resolution) build on.

> **Every output is a draft that needs checking – not legal advice.** Final responsibility rests
> with the human who uses it. See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **legal-writing** | General assistant for Finnish legal language and legislation: the structure of statutes, the correct form of section references, the writing rules of legal Finnish, contracts and sources of law. Starts automatically when you work with legal content. |
| **engagement-intake** | Opening a new matter and taking control of the material: deadline scan first, then the engagement interview, a disqualification checklist and the workspace structure for the matter folder. Includes the silent-upload protocol – a document arriving with no instruction is taken in deadlines first. |
| **legal-research** | Retrieves the law in force and case law from the oik.ai/Finlex MCP, reads them and cites them correctly. Prevents sections and case identifiers recalled from memory or invented. |
| **document-review** | Multi-stage quality review of a legal document in the Finnish context: context, usability, language, structure, correctness (source checking), completeness, risk and readiness for use. |
| **finnish-language** | Finnish spelling, grammar and style guidance (Kielitoimiston ohjepankki). The legal-writing skill refers to this for language editing. |
| **practice-profile** | Tailors the collection to an organisation: interviews the house practices (templates, risk positions, collective agreements, review chains) and writes them into the Practice profile sections of the domains, which the skills read. Safeguards cannot be weakened by a profile. |
| **plain-language** | Explaining legal text to a lay reader in clear plain Finnish: a section, a term or a decision is opened up into a form the client can understand without distorting its meaning – preserving the material terms, reservations and deadlines. Separates explanation from advice. |
| **case-summarization** | Structuring a court decision into a structured form (identifying details, legal question, facts, outcome, ratio decidendi, significance) from the actual text of the decision – separates ratio from obiter and does not summarise from memory or from the headnote. |
| **tabular-review** | Side-by-side comparison of several documents (one row per document) or structured extraction from a single document as a table, so that every cell is sourced to a place in the document and carries a confidence level; missing information is "not mentioned", not blank. Surfaces outlier rows and missing items. Includes Finnish column templates by document type (lease, employment, supplier and shareholders' agreements, real property sale, administrative decision). |

## Agents

| Agent | What it does |
|---|---|
| **source-checker** | Adversarial citation checker: extracts every statute, section and case reference in a draft, verifies each against the source (oik.ai/Finlex) and returns a verification table (✅ Verified / ⚠️ Needs checking / ❌ Error) with suggested corrections. Read-only – it does not edit the document. Run it on every statement and written submission that goes out. |
| **deadline-scanner** | Deadline scanner for a body of material: extracts every due date and every period that needs calculating, calculates them on the cautious principle (150/1930), and returns a deadline table together with any conflicts in the start dates. Read-only – calendar responsibility stays with the human. |

## Data sources (`.mcp.json`)

- **oik.ai** (`https://oik.ai/mcp`) – Finnish case law and up-to-date legislation programmatically.
  Requires an oik.ai account; OAuth sign-in when connecting.
- **Adeu** ([`@adeu/mcp-server`](https://github.com/dealfluence/adeu)) – non-destructive redlining of
  Word documents (.docx) as native tracked changes. `document-review` uses it to read an existing
  .docx and write corrections into it. Runs locally via npx, no account required.

- **laki.ai** (`https://api.laki.ai/mcp/claude`) – an alternative Finnish legal-source MCP: Finlex
  statutes, government bills, case law (KKO, KHO, HO, HAO, MAO, TT, VAKO) and Verohallinto
  guidance. OAuth sign-in; a free account is created on first sign-in. Instructions:
  <https://laki.ai/fi/claude>.

Use **either oik.ai or laki.ai** (or another compatible Finlex MCP) – the `legal-research` skill
knows both. Choosing and installing a connector: [QUICKSTART.md](../QUICKSTART.md) at the root.

## Installation

Add this repository as a marketplace and enable the domain in Claude Code:

```
/plugin marketplace add <repo-url or path>
/plugin install legal-core@agent-skills-for-finnish-law
```

Then connect the oik.ai connector (custom connector → URL `https://oik.ai/mcp` → sign in).
