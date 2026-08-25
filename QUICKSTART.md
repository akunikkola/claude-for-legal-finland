# Pika-aloitus

Plugarit toimivat sekä **Claude Codessa** (terminaali) että **Claude Coworkissa**
(työpöytäsovellus). Molemmissa käytetään samoja slash-komentoja; Coworkissa
datakonnektorit (oik.ai) lisätään lisäksi asetuksista.

## 1. Lisää markkinapaikka

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
```

tai kehityskäytössä paikallisesta polusta:

```
/plugin marketplace add /polku/agent-skills-for-finnish-law
```

## 2. Asenna plugari – valitse user scope

```
/plugin install juristi@agent-skills-for-finnish-law
```

`legal-core` on läpileikkaava perusta, joka kannattaa asentaa aina. Sen päälle
asennetaan oman alan plugarit samalla kaavalla
(`<plugari>@agent-skills-for-finnish-law`): `legislative-drafting`, `legislative-consultation`,
`contracts`, `employment-law`, `data-protection`, `ai-regulation`, `administrative-law`,
`dispute-resolution`, `company-law`, `insolvency`, `intellectual-property`,
`taxation`, `public-procurement`, `criminal-procedure`, `environment-and-planning`,
`real-estate-and-housing`, `competition-law`, `banking-and-finance`,
`immigration-law`, `family-and-inheritance`, `consumer-law`, `criminal-law` ja
`bilingual-legal-language`.
Koko luettelo skilleineen: [SKILLS.md](SKILLS.md).

Kun kysytään "this project / all projects", **valitse user scope.** Muuten plugari
ei saa lukea projektikansion ulkopuolisia tiedostoja (esim. sopimusta Downloadsissa).
User scope ei anna plugarille ylimääräistä pääsyä tiedostoihisi – se vain toimii
mistä tahansa kansiosta.

## 3. Käynnistä uudelleen

- **Claude Code:** sulje ja avaa uudelleen.
- **Cowork:** käynnistä sovellus uudelleen. **Tämä vaihe on pakollinen** – plugari
  ei ole päällä ennen uudelleenkäynnistystä.

## 4. Liitä lähdekonnektori (oik.ai tai laki.ai)

`legal-core`-plugarin `legal-research`-skill hakee voimassa olevan lain ja
oikeuskäytännön suomalaisesta oikeuslähde-MCP:stä. Tuettuna on **kaksi
vaihtoehtoa – valitse jompikumpi** (tai mikä tahansa yhteensopiva Finlex-MCP):

**Vaihtoehto A – oik.ai** (plugarien `.mcp.json`:n oletus)

- **Cowork / Claude Desktop / Claude.ai:** Asetukset → Connectors → Add custom
  connector → URL `https://oik.ai/mcp` → kirjaudu (OAuth).
- **Claude Code:** plugarin `.mcp.json` viittaa oik.ai:hin valmiiksi; hyväksy
  konnektori ja kirjaudu pyydettäessä.

**Vaihtoehto B – laki.ai** (Finlex, hallituksen esitykset, KKO/KHO/HO/HAO/MAO/TT/VAKO
ja Verohallinnon ohjeet; ilmainen tunnus syntyy ensimmäisellä kirjautumisella)

- **Cowork / Claude Desktop / Claude.ai:** Asetukset → Connectors → Add custom
  connector → URL `https://api.laki.ai/mcp/claude` → kirjaudu (OAuth).
  Ohjeet: <https://laki.ai/fi/claude>.
- **Claude Code:** korvaa plugarin `.mcp.json`:n `oik-ai`-konnektori tällä:

  ```json
  "laki-ai": { "type": "http", "url": "https://api.laki.ai/mcp/claude" }
  ```

Molemmat tuovat saman: ajantasaisen lain ja oikeuskäytännön lähteestä – vain
työkalujen nimet eroavat, ja `legal-research`-skill osaa kummatkin. Ilman
MCP-yhteyttä skillit toimivat yhä, mutta merkitsevät lakiviittaukset
muistinvaraisiksi ja kehottavat tarkistamaan ne Finlexistä.

**Paikalliset MCP:t (ei tiliä):** osa plugareista käyttää paikallisia, npx:llä käynnistyviä
MCP-palvelimia, jotka eivät vaadi kirjautumista – **Adeu** (`@adeu/mcp-server`, Word-dokumenttien
redlineäminen jälkimuutoksina) dokumenttiplugareissa ja **EU AI Act** (`@lexbeam-software/eu-ai-act-mcp`)
`tekoälysääntely`-plugarissa. Ne vaativat koneelle Node.js:n.

## 5. Kokeile

- "Sain tämän asiakirjan, mitä teen?" → `engagement-intake` (määräaikaskannaus ensin)
- "Tarkista tämä sopimus" → `document-review`
- "Mitä kuntalaki sanoo toimivallan siirrosta? Onko KHO-käytäntöä?" → `legal-research`
- "Korjaa tämän pykäläviittauksen muoto" → `legal-core`
- "Laadi muutos kuntalain 7 §:ään ja sen perustelut HE-muotoon" → `legislative-drafting`
- "Käy tämä osakassopimusluonnos läpi" → `shareholders-agreement`
- "Asiakas ei maksa laskuja – mitä vaihtoehtoja?" → `debt-collection` / `insolvency-assessment`

## Organisaatiokäyttöön

Ennen kuin viet työkaluun asiakas- tai toimeksiantoaineistoa, käy läpi
[käyttöönotto-opas](references/firm-adoption.md): aineistolinjaus,
käsittelysopimus (GDPR 28 art), anonymisointi (PII Shield), tarkistusketju ja
pilotointi [esimerkkiaineistoilla](examples/). Talon käytännöt
kirjataan `legal-core:practice-profile`-skillillä.

## Muista

Jokainen tuotos on tarkistettava luonnos – ei oikeudellista neuvontaa. Ihminen
vastaa lopputuloksesta.
