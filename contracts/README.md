# Contracts

Drafting and reviewing contracts under Finnish law.

> **A draft contract and a risk assessment are drafts for review – not legal
> advice.** A high-risk or 🔴 RED contract belongs with a lawyer.
> See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **contract-drafting** | Drafts a contract under Finnish law: structure, an annotated clause library and the fundamentals of contract law (freedom of contract, mandatory regulation, adjustment of unfair terms, liability). |
| **contract-review** | A clause-by-clause risk assessment and classification (🟢 GREEN / 🟡 YELLOW / 🔴 RED), with flags for adjustment of unfair terms and for mandatory law. |

## Agents

| Agent | What it does |
|---|---|
| **deviation-checker** | Compares a draft contract against the organisation's own risk positions and standard clauses (practice profile or a supplied playbook) and returns a clause-by-clause deviation table (✅/🟡/🔴/⚪) with escalation proposals. Stops if there is no yardstick. Read-only. |

## Statutes verified as the foundation

The content rests on statutes verified against the source (oik.ai/Finlex): the Contracts Act
(oikeustoimilaki 228/1929, including the adjustment of unfair terms under section 36), the Sale of
Goods Act (kauppalaki 355/1987) and the Consumer Protection Act (kuluttajansuojalaki 38/1978).
Other legislative references must be checked with the `legal-core:legal-research` skill.

## Related

- **`legal-core` domain** – `legal-research` (checking legislative references against the source) and `document-review` (a thorough multi-stage review).

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install contracts@agent-skills-for-finnish-law
```

oik.ai connector: see [QUICKSTART.md](../QUICKSTART.md) in the repository root.
