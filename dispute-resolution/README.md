# Dispute resolution

Resolving a civil case in the general courts (oikeudenkäymiskaari 4/1734):
bringing an action, evidence and appeals.

> **Drafts and assessments are for review – not legal advice and not an assessment
> of whether the case will succeed.** The advocate handling the engagement is responsible for the outcome. See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **statement-of-claim** | Drafting and checking an application for a summons (haastehakemus) in a civil case (OK 5:2 §): the claims, their grounds, the evidence, the costs, jurisdiction and the address for service. Includes the reference on the fundamentals of dispute resolution. |
| **evidence** | Planning and assessing evidence (OK chapter 17): the burden of proof, the means of proof, the themes of proof, the restrictions, and the evidence plan. |
| **appeal-against-judgment** | Appeal to the hovioikeus (leave for continued consideration, OK chapters 25 and 25 a) and to the Supreme Court (leave to appeal, OK chapter 30): the notice of dissatisfaction, the time limits, the written submissions. |
| **damages** | The general doctrine of liability in damages (vahingonkorvauslaki 412/1974): drawing the line between the grounds of liability (contract, tort, strict liability), negligence, causation, the heads of damage including pure economic loss, vicarious liability, adjustment, and structuring the claim. |

## Agents

| Agent | What it does |
|---|---|
| **opposing-counsel** | A simulator of the opposing party's counsel: attacks a draft submission in earnest (procedural objections, gaps in the evidence, alternative accounts of events, arguments on quantum) and returns a table of weaknesses plus the top three fixes before filing. Read-only. |

## Statutes verified as the basis

Verified against the source (oik.ai/Finlex): the **Code of Judicial Procedure
(oikeudenkäymiskaari 4/1734)** – among other things the content of an application for a
summons (5:2 §), retrieved verbatim – and the **Courts Act (tuomioistuinlaki 673/2016)**.
The substantive law and other statutes (among them laki välimiesmenettelystä 967/1992)
are checked with the `legal-core:legal-research` skill.

## Related

- **`legal-core` domain** – `legal-research` (procedural provisions, substantive law and KKO and hovioikeus case law) and `document-review`.
- **`contracts` domain** – the substantive basis of contract disputes.
- **`data-protection` domain** – anonymising material (PII Shield) before processing.

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install dispute-resolution@agent-skills-for-finnish-law
```

oik.ai connector: see [QUICKSTART.md](../QUICKSTART.md) at the repository root.
