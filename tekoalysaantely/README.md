# Tekoälysääntely

EU:n tekoälyasetuksen (asetus (EU) 2024/1689, "AI Act") noudattaminen suomalaisessa
kontekstissa. Ajan tasalla tekoälyä koskevan digitaalialan koontiasetuksen
(asetus (EU) 2026/1744, voimassa 27.7.2026) ja lain eräiden tekoälyjärjestelmien
valvonnasta (1377/2025, voimassa 1.1.2026) osalta. Lähteet tarkistettu 11.10.2026.

> **Riskiluokittelu, velvoitteet, sakkolaskelmat ja FRIA-luonnokset ovat tarkistettavia
> ensiarvioita – ei oikeudellista neuvontaa.** Katso [`CLAUDE.md`](CLAUDE.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **tekoaly-kartoitus** | Aloita tästä. Organisaation tekoälyjärjestelmien kartoitus ja tekoälyrekisteri: rooli, riskiluokka, valvova viranomainen ja priorisoitu toimenpidelista. |
| **tekoaly-avoimuus** | 50 artiklan avoimuusvelvoitteet: chatbot-ilmoitus, synteettisen sisällön merkintä, syväväärennökset ja yleistä etua koskeva teksti. Ilmoitustekstien luonnokset. |
| **tekoaly-hallintamalli** | Tekoälypolitiikka ja hallintamalli: roolit, tekoälylukutaito (4 art), elinkaari, käyttöönottajan prosessit (26 art), toimittajat ja henkilöstön käyttöohje. |
| **tekoaly-luokittelu** | Riskiluokittelu (kielletty / suuririskinen / rajoitettu / minimaalinen), liitteen III kategoria, rooli, relevantit artiklat ja Suomessa valvova viranomainen. Sisältää AI Act -perusteiden referenssin ja Suomi-kerroksen (1377/2025). |
| **tekoaly-velvoitteet** | Velvoitteet roolin (tarjoaja/käyttöönottaja) ja riskiluokan mukaan, kansalliset seuraamusmaksuperusteet rooleittain ja liitteen IV tekninen dokumentaatio. |
| **tekoaly-vaatimustenmukaisuus** | Soveltamisen määräajat koontiasetuksen jälkeen, seuraamukset (99 art ja Suomen seuraamusmaksumenettely), GPAI:n systeemisen riskin kynnys (10²⁵ FLOPs) ja perusoikeuksia koskeva vaikutustenarviointi (FRIA, 27 art) DPIA-ristiviittauksineen. |

## Pohjat (`pohjat/`)

Rakenteelliset luurangot [mallipohjien standardin](../references/mallipohjat-standardi.md) mukaan.

| Pohja | Käyttävä skill |
|---|---|
| [`tekoalyrekisteri.md`](pohjat/tekoalyrekisteri.md) | tekoaly-kartoitus |
| [`tekoalyn-hallintamalli.md`](pohjat/tekoalyn-hallintamalli.md) | tekoaly-hallintamalli |
| [`fria.md`](pohjat/fria.md) | tekoaly-vaatimustenmukaisuus |

DPIA:n tekoälylisäosa on `tietosuoja`-plugarissa: [`dpia-tekoalylisaosa.md`](../tietosuoja/pohjat/dpia-tekoalylisaosa.md).

## Tietolähde (`.mcp.json`)

- **EU AI Act MCP** ([`@lexbeam-software/eu-ai-act-mcp`](https://github.com/lexbeam-software/eu-ai-act-mcp)) –
  avoin (MIT), **deterministinen** (ei LLM:ää silmukassa), EUR-Lex-pohjaiset sitaatit.
  Pyörii **paikallisesti npx:llä, ei vaadi tiliä**. Versio on lukittu vähintään 1.7:ään,
  joka seuraa koontiasetuksella muutettua tekstiä. Antaa 10 työkalua tekoälyasetukseen
  (luokittelu, järjestelmäarvio, velvoitteet, määräajat, sakot, GPAI, 6(3)-poikkeus,
  liite IV, artiklat, FAQ).
- **oik.ai** – lain 1377/2025 ja muun kansallisen sääntelyn tarkistukseen
  (vaatii oik.ai-tilin).

## Viranomaisohjeet

- **Traficom** – toimijoiden velvollisuudet ja 50 artiklan avoimuusohje
  ([traficom.fi/fi/tekoalyn-saantely](https://www.traficom.fi/fi/tekoalyn-saantely)).
- **DVV / VAHTI** – tekoälyn hallintamalli ja käyttöönoton työkalut, mm. FRIA ja DPIA:n
  tekoälylisäkysymykset
  ([kehittajille.suomi.fi](https://kehittajille.suomi.fi/palvelut/digiturva/tietoturva/tekoaly/tekoalyn-kayttoonoton-tyokalut)).

## Liittyy

- **`tietosuoja`-plugari** – tekoälyasetus ja GDPR ovat rinnakkaisia (profilointi, automaattiset päätökset, DPIA).
- **`juristi`-plugari** – `oikeustutkimus` kansallisen kerroksen tarkistukseen.

## Asennus

```
/plugin marketplace add akunikkola/claude-for-legal-finland
/plugin install tekoalysaantely@claude-for-legal-finland
```

EU AI Act -MCP käynnistyy automaattisesti npx:llä (vaatii Node.js:n). oik.ai-konnektori:
katso juuren [QUICKSTART.md](../QUICKSTART.md).
