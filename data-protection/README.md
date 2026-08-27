# Data protection

Data protection in the processing of personal data under the EU General Data Protection
Regulation ((EU) 2016/679, GDPR) and the national Data Protection Act (tietosuojalaki 1050/2018).

> **Assessments, notices and draft responses are drafts for review – not legal advice.**
> High-risk processing, special categories of data and DPIAs belong to the data protection
> officer or a lawyer. See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **data-protection-assessment** | The legal basis for processing (Articles 6 and 9), the principles of processing (Article 5) and whether a data protection impact assessment (DPIA, Article 35) is needed. Includes a reference on the fundamentals of data protection. |
| **privacy-notice** | The privacy notice (tietosuojaseloste) informing the data subject (Articles 13 and 14) and the internal record of processing activities (Article 30). |
| **data-subject-requests** | Giving effect to the rights of the data subject and responding to their requests (Articles 15 to 22), the one-month time limit and the exceptions. |

## Statutes verified as the basis

Verified at source (oik.ai/Finlex): the **Data Protection Act (tietosuojalaki 1050/2018)**
specifies and supplements the **EU General Data Protection Regulation (2016/679)**; in working
life the **Act on the Protection of Privacy in Working Life (laki yksityisyyden suojasta
työelämässä 759/2004)** also applies. GDPR articles: EUR-Lex. The sections of national law are
checked with the `legal-core:legal-research` skill.

## Recommended tool: PII Shield (anonymisation)

[**PII Shield**](https://github.com/gregmos/PII-Shield) anonymises documents **locally before the
model sees them** (`John Smith → <PERSON_1>`) and restores the real values afterwards – *the
personal data never reaches the API*. An excellent companion for data protection work and for
confidentiality. It is a separate Claude extension (`.mcpb`) or CLI that you install yourself.

**🇫🇮 Finnish identifiers** (HETU and Y-tunnus) **are part of the official packages from
v2.2.0** onwards (28 May 2026) – contributed through this project
([gregmos/PII-Shield#4](https://github.com/gregmos/PII-Shield/pull/4), merged).

**Installation – choose one:**

**A) Claude Desktop / Cowork** (recommended): download `pii-shield-v2.2.0-*.mcpb` from
PII Shield's [releases](https://github.com/gregmos/PII-Shield/releases/latest) and install it in
Claude Desktop: **Settings → Extensions → Advanced settings → Install extension**.

**B) CLI for any LLM** (a local anonymisation tool): `npm install -g pii-shield`
(v2.2.0 or later). See `pii-shield --help`.

**C) A local MCP server for Claude Code** (for developers, npx style): build the server and
register it as a local stdio MCP:

```bash
git clone https://github.com/gregmos/PII-Shield.git
cd PII-Shield/nodejs-v2 && npm ci && npm run build:server
claude mcp add pii-shield --transport stdio -- node /ABSOLUTE/PATH/PII-Shield/nodejs-v2/dist/server.bundle.mjs
```

> Note: option C is a **local setup tied to your own machine** (an absolute path), not part of a
> portable domain. That is why PII Shield is not wired into this domain's `.mcp.json` – the
> official `.mcpb` (A) is the recommended route.

## Related

- **the `legal-core` domain** – `legal-research` (checking national law) and `document-review`.

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install data-protection@agent-skills-for-finnish-law
```

oik.ai connector: see [QUICKSTART.md](../QUICKSTART.md) at the repository root.
