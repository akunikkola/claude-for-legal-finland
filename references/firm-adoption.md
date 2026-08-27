# Adoption in an organisation – decisions to take before production use

This guide is for the person responsible in a law firm, legal department, government agency or
municipality who is adopting the collection for **professional use**. For the technical install see
[`QUICKSTART.md`](../QUICKSTART.md). This guide covers what has to be decided and documented
**before** material is taken into the tool. For the liability and security mechanisms see
[`liability-and-security.md`](liability-and-security.md).

## 1. Decide what material may go to the model

Write down a policy with three baskets:

| Basket | Example | Policy |
|---|---|---|
| Open | public statutes, your own templates, anonymised material | may be processed |
| Conditional | engagement material, draft contracts | only once the contractual and anonymisation conditions are met (sections 2 and 3) |
| Prohibited | particularly sensitive data, material you have no right to process | never |

Record the policy in your organisation's guidance and in a practice profile using the
`legal-core:practice-profile` skill.

## 2. Get the contractual and confidentiality basis in place

- **Processing agreement (GDPR Article 28)** with the provider before any personal data is
  processed; also check the data location and training-use terms (API and workspace-level settings).
- **Legal professional privilege and confidentiality**: assess whether the engagement agreement and
  the professional-ethics rules permit the material to be processed with the chosen tool — and
  document the assessment. Where it is unclear: obtain the client's consent, or anonymise.
- **Public administration**: the confidentiality grounds in the Act on the Openness of Government
  Activities and the requirements of the Act on Information Management are assessed before adoption.

## 3. Anonymisation as a workflow, not an exception

- Install **PII Shield** (see the `data-protection` domain README) and make it the default:
  personal data is replaced with placeholders locally before analysis and restored afterwards.
  Finnish identifiers (HETU, Y-tunnus) have been supported since version 2.2.0.
- Define when anonymisation is mandatory (for example always in material concerning private
  clients) and who confirms it.

## 4. Connectors and least privilege

- **The oik.ai/Finlex MCP is the backbone of source discipline** – without it the skills mark
  citations as coming from memory. Decide whose account the connector runs on and with what scope.
- Local MCP servers (Adeu, EU AI Act) require no account but do require Node.js — include it in the
  standard workstation build.
- Principle: **only the connectors you need** – do not wire systems into the tool that the skills do
  not use. In agent recipes, follow the reader/analyser/writer model
  ([`../agent-recipes/README.md`](../agent-recipes/README.md)).

## 5. The human review gate – name it

Every output is a draft that needs checking. Make that a process:

- **Who checks what**: for example, an experienced lawyer always checks 🔴-rated risk assessments
  and everything that goes out; the responsible person walks through time-limit calculations
  against the calendar.
- **References are checked against the source** before anything is sent – the `legal-core` domain's
  `source-checker` agent makes this a single step: run it on every statement and written
  submission.
- Record the review chain in the practice profile, so that the skills remind you of it.

## 6. Tailoring and piloting

1. Install `legal-core` plus two or three of your own core areas – not everything at once.
2. Run `legal-core:practice-profile` and record the house policies.
3. Pilot with the [example fixtures](../examples/) before real material – they come with assessment
   criteria that show you whether the skills behave as expected in your own environment.
4. Train users on two things: (a) the output is a draft, and (b) the certainty markings
   (`Verified / Needs checking / [model calculation — check]`) mean exactly what they say.

## 7. Continuing maintenance

- **Statutory changes**: use `agent-recipes/statute-watch` to monitor the statutes that matter to
  your organisation and the acts named in the practice profile.
- **Case law**: `agent-recipes/precedent-watch` for your own subject areas.
- **Version updates**: the collection's releases (GitHub) bring new skills and fixes – review the
  changelog before updating if you have tailored the profiles.
- **Feedback and evaluation**: collect error reports from users (citation errors especially) and
  report them to the repository – the quality of the whole collection improves.

## Division of responsibility in brief

| Responsible for | Who |
|---|---|
| The correctness and use of the output | the reviewing lawyer or expert |
| Meeting the time limits | a named responsible person, and the calendar |
| The lawfulness of processing the material | the organisation (the controller) |
| The content of the skills and their safeguards | this open community project – no warranty; see [LICENSE](../LICENSE) |
