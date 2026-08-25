# Tekoälysääntely

EU:n tekoälyasetuksen (asetus (EU) 2024/1689, "AI Act") noudattaminen suomalaisessa
kontekstissa.

> **Riskiluokittelu, velvoitteet, sakkolaskelmat ja FRIA-luonnokset ovat tarkistettavia
> ensiarvioita – ei oikeudellista neuvontaa.** Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **tekoaly-luokittelu** | Riskiluokittelu (kielletty / korkea / rajoitettu / minimaalinen), Annex III -kategoria, rooli ja relevantit artiklat. Sisältää AI Act -perusteiden referenssin + Suomi-kerroksen. |
| **tekoaly-velvoitteet** | Velvoitteet roolin (tarjoaja/käyttöönottaja) ja riskiluokan mukaan + Annex IV tekninen dokumentaatio. |
| **tekoaly-vaatimustenmukaisuus** | Soveltamisen määräajat, seuraamukset (Art. 99), GPAI:n systeemisen riskin kynnys (10²⁵ FLOPs) ja perusoikeusvaikutusten arviointi (FRIA, Art. 27). |

## Tietolähde (`.mcp.json`)

- **EU AI Act MCP** ([`@lexbeam-software/eu-ai-act-mcp`](https://github.com/lexbeam-software/eu-ai-act-mcp)) –
  avoin (MIT), **deterministinen** (ei LLM:ää silmukassa), EUR-Lex-pohjaiset sitaatit.
  Pyörii **paikallisesti npx:llä, ei vaadi tiliä**. Antaa 9 työkalua tekoälyasetukseen
  (luokittelu, velvoitteet, määräajat, sakot, GPAI, FRIA).
- **oik.ai** – kansallisen täytäntöönpanon ja toimivaltaisten viranomaisten tarkistukseen
  (vaatii oik.ai-tilin).

## Liittyy

- **`data-protection`-plugari** – tekoälyasetus ja GDPR ovat rinnakkaisia (profilointi, automaattiset päätökset, DPIA).
- **`legal-core`-plugari** – `oikeustutkimus` kansallisen kerroksen tarkistukseen.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install tekoalysaantely@agent-skills-for-finnish-law
```

EU AI Act -MCP käynnistyy automaattisesti npx:llä (vaatii Node.js:n). oik.ai-konnektori:
katso juuren [QUICKSTART.md](../QUICKSTART.md).
