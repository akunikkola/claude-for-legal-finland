# AI regulation

Compliance with the EU Artificial Intelligence Act (Regulation (EU) 2024/1689, the "AI
Act") in a Finnish context.

> **Risk classifications, obligations, penalty calculations and FRIA drafts are first
> assessments to be checked – not legal advice.** See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **ai-classification** | Risk classification (prohibited / high / limited / minimal), the Annex III category, the role and the relevant articles. Includes the reference on the fundamentals of the AI Act plus the Finnish layer. |
| **ai-obligations** | The obligations by role (provider/deployer) and risk class, plus the Annex IV technical documentation. |
| **ai-compliance** | The deadlines for application, the penalties (Article 99), the threshold for systemic risk in a GPAI model (10²⁵ FLOPs) and the fundamental rights impact assessment (FRIA, Article 27). |

## Data source (`.mcp.json`)

- **EU AI Act MCP** ([`@lexbeam-software/eu-ai-act-mcp`](https://github.com/lexbeam-software/eu-ai-act-mcp)) –
  open (MIT), **deterministic** (no LLM in the loop), citations based on EUR-Lex.
  Runs **locally with npx and requires no account**. Provides nine tools for the AI Act
  (classification, obligations, deadlines, penalties, GPAI, FRIA).
- **oik.ai** – for checking the national implementation and the competent authorities
  (requires an oik.ai account).

## Related

- **`data-protection` domain** – the AI Act and the GDPR run in parallel (profiling,
  automated decisions, DPIA).
- **`legal-core` domain** – `legal-research` for checking the national layer.

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install ai-regulation@agent-skills-for-finnish-law
```

The EU AI Act MCP starts automatically with npx (requires Node.js). oik.ai connector: see
[QUICKSTART.md](../QUICKSTART.md) at the repository root.
