# Criminal procedure

Finnish criminal procedure for the work of legal counsel: pre-trial investigation and coercive
measures, the charge and the defence, and the position of the injured party with their civil
claims.

> **The outputs are support for counsel's work – not legal advice, and not instructions on how
> to defend yourself without counsel.** The presumption of innocence and the privilege against
> self-incrimination govern everything; no assistance whatever is given with destroying evidence
> or influencing witnesses. See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **pre-trial-investigation-and-coercive-measures** | Pre-trial investigation (805/2011): the position of the suspect and of the injured party, preparation for questioning, restricting the investigation, the closing statement. Coercive measures (806/2011): apprehension, arrest and detention, searches and seizure, covert measures – assessing the conditions and the remedies. Includes a reference on the fundamentals of criminal procedure. |
| **charges-and-response** | Consideration of charges and the application for a summons (ROL 689/1997), structuring the defendant's response and the defence, evidence (chapter 17 of the Code of Judicial Procedure), the judgment-proposal procedure (ROL chapter 5 b), the main hearing and appeals. |
| **injured-party-rights** | The rights of the injured party: civil claims in criminal proceedings, damages (412/1974) and compensation under the Criminal Injuries Act (1204/2005), the secondary right to prosecute, counsel and a support person, and the restraining order (898/1998). |

## Statutes verified as the basis

Verified at source (Finlex): the **Criminal Procedure Act (laki oikeudenkäynnistä rikosasioissa
689/1997, "ROL")** including the judgment-proposal procedure in chapter 5 b, the **Pre-Trial
Investigation Act (esitutkintalaki 805/2011)**, the **Coercive Measures Act (pakkokeinolaki
806/2011)**, the **Criminal Code (rikoslaki 39/1889)**, the **Legal Aid Act (oikeusapulaki
257/2002)**, the **Tort Liability Act (vahingonkorvauslaki 412/1974)**, the **Criminal Injuries
Act (rikosvahinkolaki 1204/2005)** and the **Restraining Order Act (laki lähestymiskiellosta
898/1998)**. The elements of offences, the sentencing ranges, the limitation periods and the
conditions for coercive measures are always checked in use with the `legal-core:legal-research`
skill.

## Related

- **the `legal-core` domain** – `legal-research` (the precedents of KKO),
  `engagement-intake` (disqualification, deadline scanning) and `document-review`.
- **the `dispute-resolution` domain** – the general doctrine of evidence (chapter 17 of the Code
  of Judicial Procedure) and the mechanics of appealing against a judgment.
- **the `data-protection` domain** – processing and anonymising personal data relating to criminal
  convictions and offences.
- **the `insolvency` domain** – debtor's offences in economic crime matters.

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install criminal-procedure@agent-skills-for-finnish-law
```

oik.ai connector: see [QUICKSTART.md](../QUICKSTART.md) at the repository root.
