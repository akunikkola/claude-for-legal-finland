# Agent recipes – background agents for Finnish legal work

These are **cookbooks, not finished products.** Each recipe is a starting point for a background
(headless or scheduled) agent that rests on the same source discipline and the same guardrails as
the domains in this repository. Adapt the recipe to your own document management, calendar,
notification channel and review rhythm — without that adaptation the recipes do not work, and that
is deliberate.

| Agent | What it watches | Leaf agents |
|---|---|---|
| [`deadline-watch`](deadline-watch/) | A document or calendar source, for time limits (appeal period, limitation of an action, co-operation periods, GDPR response time) | material-reader · deadline-calculator · **alert-writer** |
| [`precedent-watch`](precedent-watch/) | New KKO/KHO/MAO/TT/VakO decisions on defined subjects (oik.ai/Finlex MCP) | decision-fetcher · relevance-assessor · **digest-writer** |
| [`statute-watch`](statute-watch/) | Changes to named statutes, entries into force and pending government bills | statute-monitor · impact-analyser · **report-writer** |
| [`citation-audit`](citation-audit/) | This repository's own statutory and case references (repeals, identifier collisions, placeholder discipline) — quarterly | inventory script · `source-checker` batches · a human fixes |

The leaf agent in **bold** is the only one with `Write` permission.

## Security model – legal documents are untrusted input

A document may contain text that tries to steer the model ("ignore previous instructions…"). Each
recipe therefore splits the work into **three tiers** with separate permissions:

1. **The reader** touches untrusted documents and has only `Read`/`Grep` – no MCP, no `Write`, no
   network. It returns length-limited, structured JSON. An instruction embedded in a document is
   **data, not a command.**
2. **The analyser** receives the reader's JSON, applies the rules from the user's configuration and
   may have MCP **read access** for verification (oik.ai/Finlex). No `Write`.
3. **The writer** produces the final output and is the **only** tier with `Write`. It never sees the
   raw documents.

The orchestrator neither writes nor reads raw documents – it only passes messages between the tiers.
Named agents do not call each other directly; they send a `handoff` request that the event bus
routes.

## Liability and confidentiality

Everything these agents produce is **a draft that needs checking** – not legal advice. The agent
watches, extracts and drafts; **a human review confirms and decides.** Time-limit calculations are
leads, not binding dates – see each recipe's "What this does NOT do".

When processing client data, follow
[`../references/liability-and-security.md`](../references/liability-and-security.md): the data
processing agreement (GDPR Article 28), anonymisation before analysis, and the confidentiality
assessment before material is taken into any tool.

## What you get and what you do not

- **You get:** a working manifest structure, sensible security tiers, instructions that rest on
  source discipline, and an example of the control events – adapted to Finnish sources (Finlex,
  oik.ai, KKO/KHO) and Finnish procedural law.
- **You do not get:** a production-ready agent. Connect the connectors to your own systems, define
  the rhythm, configure the notifications and run your own evaluation before you trust the output.
- **You certainly do not get:** a replacement for a lawyer.
