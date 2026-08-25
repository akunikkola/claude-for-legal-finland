# Tietosuoja

Henkilötietojen käsittelyn tietosuoja EU:n yleisen tietosuoja-asetuksen ((EU) 2016/679,
GDPR) ja kansallisen tietosuojalain (1050/2018) mukaan.

> **Arviot, selosteet ja vastausluonnokset ovat tarkistettavia luonnoksia – ei
> oikeudellista neuvontaa.** Korkean riskin käsittely, arkaluonteiset tiedot ja DPIA:t
> kuuluvat tietosuojavastaavan/juristin arvioon. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **tietosuoja-arviointi** | Käsittelyperuste (6/9 art), käsittelyn periaatteet (5 art) ja vaikutustenarvioinnin (DPIA, 35 art) tarpeen arviointi. Sisältää referenssin tietosuojan perusteista. |
| **tietosuojaseloste** | Tietosuojaseloste / informointi rekisteröidylle (13–14 art) ja sisäinen seloste käsittelytoimista (30 art). |
| **rekisteroidyn-pyynnot** | Rekisteröidyn oikeuksien toteuttaminen ja tietopyyntöihin vastaaminen (15–22 art), kuukauden määräaika ja poikkeukset. |

## Perustana varmistetut säädökset

Lähteestä (oik.ai/Finlex) varmistettu: **tietosuojalaki (1050/2018)** täsmentää ja
täydentää **EU:n tietosuoja-asetusta (2016/679)**; työelämässä sovelletaan **lakia
yksityisyyden suojasta työelämässä (759/2004)**. GDPR-artiklat: EUR-Lex. Kansallisen lain
pykälät tarkistetaan `juristi:oikeustutkimus`-skillillä.

## Suositeltu työkalu: PII Shield (anonymisointi)

[**PII Shield**](https://github.com/gregmos/PII-Shield) anonymisoi dokumentit
**paikallisesti ennen kuin malli näkee ne** (`John Smith → <PERSON_1>`) ja palauttaa
oikeat tiedot jälkikäteen – *henkilötieto ei mene API:in*. Erinomainen pari tietosuojatyöhön
ja luottamuksellisuuteen. Se on erillinen Claude-laajennus (`.mcpb`) / CLI, jonka asennat itse.

**🇫🇮 Suomalaiset tunnisteet** (HETU + Y-tunnus) **kuuluvat virallisiin paketteihin
versiosta v2.2.0** alkaen (28.5.2026) – kontribuoitu tämän projektin kautta
([gregmos/PII-Shield#4](https://github.com/gregmos/PII-Shield/pull/4), mergattu).

**Asennus – valitse:**

**A) Claude Desktop / Cowork** (suositeltavin): lataa `pii-shield-v2.2.0-*.mcpb`
PII Shieldin [releaseista](https://github.com/gregmos/PII-Shield/releases/latest) ja
asenna Claude Desktopiin: **Settings → Extensions → Advanced settings → Install extension**.

**B) CLI mille tahansa LLM:lle** (paikallinen anonymisointityökalu): `npm install -g pii-shield`
(v2.2.0+). Ks. `pii-shield --help`.

**C) Claude Code -paikallinen MCP-palvelin** (kehittäjille, npx-tyylinen): rakenna palvelin
ja rekisteröi paikallisena stdio-MCP:nä:

```bash
git clone https://github.com/gregmos/PII-Shield.git
cd PII-Shield/nodejs-v2 && npm ci && npm run build:server
claude mcp add pii-shield --transport stdio -- node /ABSOLUUTTINEN/POLKU/PII-Shield/nodejs-v2/dist/server.bundle.mjs
```

> Huom: vaihtoehto C on **paikallinen, koneeseesi sidottu** asetus (absoluuttinen polku),
> ei osa siirrettävää plugaria. Siksi PII Shieldiä ei ole kytketty tämän plugarin
> `.mcp.json`:iin – virallinen `.mcpb` (A) on suositelluin reitti.

## Liittyy

- **`legal-core`-plugari** – `oikeustutkimus` (kansallisen lain tarkistus) ja `asiakirjan-tarkistus`.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install tietosuoja@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
