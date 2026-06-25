# Juristi – perusta

Läpileikkaava perusta suomalaiseen juridiseen työhön. Tämä plugari on pohja, johon
käytäntöaluekohtaiset plugarit (lainvalmistelu, lausunnot, sopimukset, työoikeus,
tietosuoja, hallinto-oikeus, riidanratkaisu) nojaavat.

> **Jokainen tuotos on tarkistettava luonnos – ei oikeudellista neuvontaa.** Lopullisen
> vastuun kantaa sitä käyttävä ihminen. Katso [`CLAUDE.md`](CLAUDE.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **juristi** | Suomalaisen lakikielen ja lainsäädännön yleisapuri: säädösten rakenne, pykäläviittausten oikea muoto, lakikielen kirjoitussäännöt, sopimukset ja oikeuslähteet. Käynnistyy automaattisesti, kun työskennellään juridisen sisällön kanssa. |
| **toimeksianto** | Uuden jutun aloitus ja aineiston haltuunotto: määräaikaskannaus ensin, toimeksiantohaastattelu, esteellisyysmuistilista ja juttukansion työtilarakenne. Sisältää hiljaisen latauksen protokollan – asiakirja ilman ohjetta otetaan haltuun määräajat edellä. |
| **oikeustutkimus** | Hakee voimassa olevan lain ja oikeuskäytännön oik.ai-/Finlex-MCP:stä, lukee ne ja viittaa oikein. Estää muistinvaraiset ja keksityt pykälät ja ratkaisutunnukset. |
| **asiakirjan-tarkistus** | Juridisen asiakirjan monivaiheinen laaduntarkistus suomalaisessa kontekstissa: konteksti, käytettävyys, kieli, rakenne, oikeellisuus (lähdetarkistus), täydellisyys, riski ja käyttövalmius. |
| **suomen-kieli** | Suomen kielen oikeinkirjoitus-, kielioppi- ja tyyliohjeet (Kielitoimiston ohjepankki). Juristi-skill viittaa tähän kielenhuollossa. |
| **kaytantoprofiili** | Kokoelman räätälöinti organisaatiolle: haastattelee talon käytännöt (pohjat, riskilinjaukset, TES:t, tarkistusketjut) ja kirjoittaa ne plugarien Käytäntöprofiili-osioihin, joita skillit lukevat. Suojauksia ei voi heikentää profiililla. |
| **selkokielistaja** | Juridisen tekstin selittäminen selkeällä yleiskielellä maallikolle: pykälä, ehto tai päätös avataan asiakkaalle ymmärrettävään muotoon merkitystä vääristämättä – olennaiset ehdot, varaukset ja määräajat säilyttäen. Erottaa selityksen neuvonnasta. |
| **oikeustapaus-referointi** | Tuomioistuinratkaisun jäsentäminen rakenteiseen muotoon (tunnistetiedot, oikeuskysymys, faktat, lopputulos, ratio decidendi, merkitys) ratkaisun varsinaisesta tekstistä – erottaa ration ja obiterin eikä referoi muistista tai otsikosta. |
| **taulukkokatsaus** | Monen asiakirjan rinnakkaisvertailu (rivi per asiakirja) tai yhden asiakirjan rakenteinen poiminta taulukkona niin, että jokainen solu on lähteistetty asiakirjan kohtaan ja saa luottamustason; puuttuva tieto on "ei mainittu", ei tyhjä. Nostaa poikkeavat rivit ja puuttuvat kohdat. Sisältää suomalaiset sarakemallit asiakirjatyypeittäin (vuokra-, työ-, toimittaja-, osakassopimus, kiinteistökauppa, hallintopäätös). |

## Agentit

| Agentti | Mitä tekee |
|---|---|
| **lahdetarkastaja** | Adversariaalinen viitetarkastaja: poimii luonnoksen kaikki säädös-, pykälä- ja ratkaisuviittaukset, tarkistaa jokaisen lähteestä (oik.ai/Finlex) ja palauttaa tarkistustaulukon (✅ Varmistettu / ⚠️ Tarkistettava / ❌ Virhe) korjausehdotuksineen. Vain luku – ei muokkaa asiakirjaa. Aja jokaiselle ulos lähtevälle lausunnolle ja kirjelmälle. |
| **maaraaikaskanneri** | Määräaikojen skannaaja aineistolle: poimii kaikki määräpäivät ja laskentaa vaativat ajat, laskee varovaisuusperiaatteella (150/1930), palauttaa määräaikataulukon lähtöpäiväristiriitoineen. Vain luku – kalenterivastuu jää ihmiselle. |

## Tietolähteet (`.mcp.json`)

- **oik.ai** (`https://oik.ai/mcp`) – suomalainen oikeuskäytäntö ja ajantasainen lainsäädäntö ohjelmallisesti. Vaatii oik.ai-tilin; liitettäessä OAuth-kirjautuminen.
- **Adeu** ([`@adeu/mcp-server`](https://github.com/dealfluence/adeu)) – Word-dokumenttien (.docx) ei-tuhoava redlineäminen natiiveina jälkimuutoksina (Track Changes). `asiakirjan-tarkistus` käyttää sitä olemassa olevan .docx:n lukemiseen ja korjausten viemiseen. Pyörii paikallisesti npx:llä, ei vaadi tiliä.

- **laki.ai** (`https://api.laki.ai/mcp/claude`) – vaihtoehtoinen suomalainen oikeuslähde-MCP: Finlexin säädökset, hallituksen esitykset, oikeuskäytäntö (KKO, KHO, HO, HAO, MAO, TT, VAKO) ja Verohallinnon ohjeet. OAuth-kirjautuminen; ilmainen tunnus syntyy ensimmäisellä kirjautumisella. Ohjeet: <https://laki.ai/fi/claude>.

Käytä **joko oik.ai:ta tai laki.ai:ta** (tai muuta yhteensopivaa Finlex-MCP:tä) –
`oikeustutkimus`-skill osaa molemmat. Konnektorin valinta ja asennus: juuren
[QUICKSTART.md](../QUICKSTART.md).

## Asennus

Lisää tämä repo markkinapaikkana ja ota plugari käyttöön Claude Codessa:

```
/plugin marketplace add <repo-url tai polku>
/plugin install juristi@claude-for-legal-finland
```

Liitä sen jälkeen oik.ai-konnektori (custom connector → URL `https://oik.ai/mcp` → kirjaudu).
