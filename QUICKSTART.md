# Quick start

The collection is vendor-neutral. Each domain is a self-contained Agent Skills bundle, so it works
in any harness that reads the [Agent Skills format](https://agentskills.io/specification.md).
Claude Code and Codex have generated adapters; anything else installs by copying skill directories.

Pick the section for your harness, then continue from **4. Attach the source connector**, which is
the same for all of them.

## 1. Claude Code

Add the marketplace and install the domain:

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install legal-core@agent-skills-for-finnish-law
```

For local development, add the marketplace from a path instead:

```
/plugin marketplace add /path/to/agent-skills-for-finnish-law
```

When asked "this project / all projects", **choose user scope.** Otherwise the domain may not read
files outside the project folder (a contract in Downloads, for instance). User scope gives no extra
access to your files — it simply works from any folder.

Then **restart Claude Code**: close it and open it again. The domain is not active until you do.

## 2. Codex

Generate the adapters, then add the marketplace from the repository root:

```bash
node scripts/generate-adapters.mjs
codex plugin marketplace add .
codex plugin add legal-core@agent-skills-for-finnish-law
```

If the domain's `mcp.json` declares the `oik-ai` server, check its status and sign in:

```bash
codex mcp list --json
codex mcp login oik-ai
```

## 3. Any other harness

Copy `<domain>/skills/*` into the harness's skills directory. `SKILL.md` is plain Agent Skills
format with no vendor extensions, so nothing else is required. If the harness supports MCP, point
it at `<domain>/mcp.json`, which uses the standard `mcpServers` schema.

## Which domains to install

`legal-core` is the cross-cutting foundation and is worth installing always. Install your own
practice areas on top of it using the same pattern (`<domain>@agent-skills-for-finnish-law`):
`legislative-drafting`, `legislative-consultation`, `contracts`, `employment-law`,
`data-protection`, `ai-regulation`, `administrative-law`, `dispute-resolution`, `company-law`,
`insolvency`, `intellectual-property`, `taxation`, `public-procurement`, `criminal-procedure`,
`environment-and-planning`, `real-estate-and-housing`, `competition-law`, `banking-and-finance`,
`immigration-law`, `family-and-inheritance`, `consumer-law`, `criminal-law` and
`bilingual-legal-language`. The full list with skills: [SKILLS.md](SKILLS.md).

## 4. Attach the source connector (oik.ai or laki.ai)

The `legal-research` skill in the `legal-core` domain retrieves the law in force and case law from a
Finnish legal-source MCP. **Two options are supported — choose either** (or any compatible Finlex
MCP):

**Option A – oik.ai** (the default in each domain's `mcp.json`)

- **Desktop and web clients:** Settings → Connectors → Add custom connector → URL
  `https://oik.ai/mcp` → sign in (OAuth).
- **Claude Code:** the domain's generated `.mcp.json` already points at oik.ai; accept the
  connector and sign in when prompted.

**Option B – laki.ai** (Finlex, government bills, KKO/KHO/HO/HAO/MAO/TT/VAKO and Tax
Administration guidance; a free account is created on first sign-in)

- **Desktop and web clients:** Settings → Connectors → Add custom connector → URL
  `https://api.laki.ai/mcp/claude` → sign in (OAuth). Instructions: <https://laki.ai/fi/claude>.
- **Claude Code:** replace the `oik-ai` connector in the domain's `.mcp.json` with this:

  ```json
  "laki-ai": { "type": "http", "url": "https://api.laki.ai/mcp/claude" }
  ```

Both bring the same thing: the law in force and case law from a source — only the tool names
differ, and the `legal-research` skill handles either. Without an MCP connection the skills still
work, but they mark statutory references as coming from memory and tell you to verify them in
Finlex.

**Local MCP servers (no account):** some domains use local MCP servers launched with npx that need
no sign-in — **Adeu** (`@adeu/mcp-server`, redlining Word documents as tracked changes) in the
document domains, and **EU AI Act** (`@lexbeam-software/eu-ai-act-mcp`) in the `ai-regulation`
domain. They require Node.js on the machine.

## 5. Try it

- "I have been sent this document, what do I do?" → `engagement-intake` (time-limit scan first)
- "Review this contract" → `document-review`
- "What does kuntalaki say about delegating powers? Is there KHO case law?" → `legal-research`
- "Fix the form of this section reference" → `legal-core:legal-writing`
- "Draft an amendment to 7 § of kuntalaki with reasoning in bill form" → `legislative-drafting`
- "Go through this draft shareholders' agreement" → `shareholders-agreement`
- "A client is not paying invoices — what are the options?" → `debt-collection` /
  `insolvency-assessment`

## For organisational use

Before you put client or engagement material into the tool, work through the
[adoption guide](references/firm-adoption.md): the material policy, the processing agreement
(GDPR Article 28), anonymisation (PII Shield), the review chain and piloting with the
[example fixtures](examples/). House practices are recorded with the
`legal-core:practice-profile` skill.

## Remember

Every output is a draft that needs checking — not legal advice. The human is responsible for the
result.
