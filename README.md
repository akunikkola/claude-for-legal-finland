# Claude for Legal Finland

Avoimen lähdekoodin skillit ja plugarit Clauden käyttöön suomalaisessa
juridisessa työssä: lakikieli, pykäläviittaukset ja oikeuslähteet
**Suomen oikeuden ehdoilla**. Suomalainen vastine Anthropicin
[claude-for-legal](https://github.com/anthropics/claude-for-legal)-kokoelmalle.

**24 plugaria · 78 skilliä · 6 agenttia · kytkennät Finlexiin ja oik.ai:hin · [MIT](LICENSE)**

Kokoelma sisältää myös Codex-yhteensopivat manifestit ja repo-markkinapaikan.
Ne generoidaan nykyisestä Claude-pluginmetadatasta komennolla
`node scripts/generate-adapters.mjs`, jotta sama skill-sisältö toimii sekä
Claudessa että Codexissa. Käyttöönotto: [AGENTS.md](AGENTS.md).

Selailtava yleiskatsaus koko kokoelmasta:
**[ragmha.github.io/agent-skills-for-finnish-law](https://ragmha.github.io/agent-skills-for-finnish-law/)**

> [!IMPORTANT]
> **Jokainen tuotos on tarkistettava luonnos. Kyse ei ole oikeudellisesta
> neuvonnasta, eikä tämä kokoelma tai sen sisältämät ominaisuudet korvaa
> juristia.** Vastuun lopputuloksesta kantaa aina käyttäjä, ja käyttöä
> suositellaan ainoastaan kouluttautuneille oikeudellisen alan ammattilaisille.
> Plugarit on rakennettu tämän mukaisesti: laki ja oikeuskäytäntö tarkistetaan
> lähteestä eikä muistista, jokaiseen viittaukseen tulee lähdemerkintä,
> jurisdiktio-oletukset pidetään näkyvissä, ja ennen kuin mitään lähetetään tai
> allekirjoitetaan, asian varmistaa ihminen. Suojan tuottavat **mekanismit** –
> lähteen varmistus, kolmiportainen varmuusmerkintä, premissien tarkistus,
> negatiivirajaus ja ihmisen tarkistusportti. Mekanismit on koottu tiedostoihin
> [`references/citation-style.md`](references/citation-style.md) ja
> [`references/liability-and-security.md`](references/liability-and-security.md).
>
> Tämä on yhteisön avoin hanke, ei viranomais-, lakiasiain- tai asianajopalvelu,
> eikä se edusta minkään organisaation virallista oikeudellista kantaa. Kuka
> tahansa voi kontribuoida hankkeeseen omat skill-tiedostonsa ja plugarinsa,
> joista on ollut todistettavaa hyötyä omassa työssä.

## Idea

Suomalainen juridinen työ poikkeaa angloamerikkalaisesta: civil law -järjestelmä,
Finlexin säädöskanta, hallituksen esitykset (HE) tulkinta-aineistona, KKO:n ja
KHO:n ennakkopäätökset, pakottava lainsäädäntö ja tarkka lakikieli. Tämä kokoelma
tuo nämä **aidot lähteet** Clauden työn pohjaksi ja kytkeytyy suoraan **Finlexiin**
sekä oikeuslähde-MCP:hen – **oik.ai:hin** tai **laki.ai:hin**.

Rakenne mukailee Anthropicin claude-for-legalia. Markkinapaikka
([`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json)) listaa
käytäntöaluekohtaiset plugarit, ja jokainen plugari sisältää:

- **skillit** (`skills/<nimi>/SKILL.md`) – varsinaisen osaamisen ja työnkulun,
- **jaetut suojaukset** (`CLAUDE.md`) – varaverkon, joka pätee silloinkin kun
  skill ei lataudu,
- **datakonnektorit** (`.mcp.json`) – kytkennät oikeuslähde-MCP:hen (oik.ai tai laki.ai)
  sekä dokumenttiplugareissa **Adeuun** (Word-asiakirjojen redline natiiveina jälkimuutoksina),
- osa plugareista myös **agentteja** (`agents/<nimi>.md`) – delegoitavia työvaiheita.

Agentteja on kuusi: viitteiden adversariaalinen tarkistus (`lahdetarkastaja`),
aineiston määräaikaskannaus (`maaraaikaskanneri`), vastapuolen argumentaation
simulointi (`vastapuoli`), datahuoneen inventointi (`aineistokartoittaja`),
sopimuksen vertaus talon linjaan (`poikkeamatarkastaja`) ja julkisuusarvion
valmistelu (`salassapitoarvioija`).

## Miten laatu pidetään kunnossa

Kokoelman ydinlupaus on, että viittaukset perustuvat aitoihin lähteisiin. Kolme
mekanismia valvoo tätä:

- **Jaetut standardit.** Repon juuren [`references/`](references/)-tiedostot
  määrittävät yhteiset lähde-, vastuu- ja tietoturvalinjat, joihin kaikki plugarit
  nojaavat.
- **Validaattori.** [`scripts/validate.mjs`](scripts/validate.mjs) tarkistaa
  markkinapaikan ja skillien rakenteen CI:ssä jokaisen muutoksen yhteydessä.
- **Säädösvahti.** [`scripts/check-statutes.mjs`](scripts/check-statutes.mjs)
  käy kuukausittain Finlexistä läpi, että kokoelman viittaamien säädösten nimet ovat
  yhä ajan tasalla. Kumottu tai uudelleen nimetty laki jää näin kiinni automaattisesti.

## Plugarit

Kaikki 24 plugaria ovat valmiita ja asennettavissa erikseen.

| Plugari | Mitä kattaa |
|---|---|
| **[juristi](legal-core/)** | Läpileikkaava perusta: lakikieli ja pykäläviittaukset, suomen kieli, oikeustutkimus (oik.ai/Finlex) ja juridisen asiakirjan monivaiheinen tarkistus. |
| **[lainvalmistelu](legislative-drafting/)** | Säädösvalmistelu: Lainkirjoittajan opas, HE:n laatimisohjeet (HELO), lainvalmistelun prosessiopas, lakikieli. |
| **[lausunnot](legislative-consultation/)** | Lausuntomenettely: lausunnot lakiehdotuksiin, vaikutusarviointi lausunnonantajan näkökulmasta, Lausuntopalvelu.fi. |
| **[sopimukset](contracts/)** | Sopimusten laatiminen (rakenne, lausekekirjasto, sopimusoikeus) ja lausekekohtainen riskiarvio Suomen oikeuden mukaan. |
| **[työoikeus](employment-law/)** | Työsopimus (työsopimuslaki 55/2001), päättämisen arviointi ja yhteistoiminta/muutosneuvottelut (yhteistoimintalaki 1333/2021). |
| **[tietosuoja](data-protection/)** | Tietosuoja-asetus (GDPR) ja tietosuojalaki: käsittelyn arviointi ja DPIA, tietosuojaseloste, rekisteröidyn pyynnöt. |
| **[tekoälysääntely](ai-regulation/)** | EU:n tekoälyasetus (AI Act): riskiluokittelu, velvoitteet, määräajat, seuraamukset, GPAI ja FRIA. Avoin, deterministinen EU AI Act -MCP. |
| **[hallinto-oikeus](administrative-law/)** | Hallintopäätös (hallintolaki 434/2003), muutoksenhaku (808/2019) ja asiakirjajulkisuus/tietopyynnöt (julkisuuslaki 621/1999). |
| **[riidanratkaisu](dispute-resolution/)** | Riita-asia yleisissä tuomioistuimissa (oikeudenkäymiskaari 4/1734): haastehakemus, todistelu, muutoksenhaku. |
| **[yhtiöoikeus](company-law/)** | Osakeyhtiölaki (624/2006): perustaminen ja hallinto, johdon vastuu, varojenjako, osakassopimukset, yritysjärjestelyt ja DD. |
| **[insolvenssi](insolvency/)** | Maksukyvyttömyys: menettelyn valinta (konkurssi 120/2004, saneeraus 47/1993, velkajärjestely 57/1993), konkurssimenettely, perintä ja ulosotto. |
| **[immateriaalioikeus](intellectual-property/)** | IPR: tavaramerkki ja toiminimi (544/2019, 128/1979), tekijänoikeus DSM-uudistuksineen (404/1961), liikesalaisuudet (595/2018). |
| **[verotus](taxation/)** | Verotusmenettely ja muutoksenhaku (VML 1558/1995), yritysverotus (EVL 360/1968), arvonlisäverotus (AVL 1501/1993). |
| **[julkiset hankinnat](public-procurement/)** | Hankintalaki (1397/2016): suunnittelu ja menettelyt, tarjouspyyntö ja tarjous, hankintapäätös ja muutoksenhaku markkinaoikeuteen. |
| **[rikosprosessi](criminal-procedure/)** | Esitutkinta ja pakkokeinot (805/2011, 806/2011), syyte ja vastaus (ROL 689/1997), asianomistajan asema ja korvaukset. |
| **[ympäristö ja kaavoitus](environment-and-planning/)** | Ympäristöluvat (YSL 527/2014), kaavoitus ja rakentaminen (rakentamislaki 751/2023), ympäristövastuut ja -DD. LVV-uudistus 2026 huomioitu. |
| **[kiinteistöt ja asuminen](real-estate-and-housing/)** | Kiinteistökauppa (maakaari 540/1995), asuntokauppa (843/1994), asunto-osakeyhtiö (1599/2009), vuokrasopimukset (481–482/1995). |
| **[kilpailuoikeus](competition-law/)** | Kilpailunrajoitukset ja määräävä asema (948/2011, SEUT 101–102), yrityskauppavalvonta, compliance ja dawn raid -valmius. |
| **[pankki ja rahoitus](banking-and-finance/)** | Rahoitussopimukset ja vakuudet (622/1947, 361/1999), rahanpesun estäminen (444/2017), arvopaperimarkkinat (746/2012, MAR). |
| **[ulkomaalaisoikeus](immigration-law/)** | Työperusteiset oleskeluluvat (301/2004), työnantajan velvollisuudet, EU- ja perheperusteinen oleskelu, kansalaisuus (359/2003). |
| **[perhe- ja perintöoikeus](family-and-inheritance/)** | Avioehto ja ositus (avioliittolaki 234/1929), avopuolison asema (26/2011), lapsen huolto, tapaaminen ja elatus (361/1983 ja 704/1975), perintö, testamentti ja lakiosa (perintökaari 40/1965), edunvalvonta ja edunvalvontavaltuutus (442/1999 ja 648/2007). |
| **[kuluttajaoikeus](consumer-law/)** | Kuluttajakaupan virhevastuu ja oikaisukeinot (kuluttajansuojalaki 38/1978), etä- ja kotimyynnin peruuttamisoikeus, sopimaton markkinointi sekä kuluttajariidat (8/2007) ja hyvä perintätapa (513/1999). Pakottava kuluttajan hyväksi. |
| **[rikosoikeus](criminal-law/)** | Aineellinen rikosoikeus (rikoslaki 39/1889): rikosvastuun perusteet (tahallisuus, osallisuus, vastuuvapaus), keskeiset rikostyypit tunnusmerkistöineen ja rangaistuksen määrääminen. Täydentää rikosprosessia; puolustuksen ja asianomistajan näkökulma. |
| **[kaksikielisyys (FI/SV)](bilingual-legal-language/)** | Oikeuskielen kääntäminen FI↔SV vakiintunein termein virallisista lähteistä sekä kielelliset oikeudet ja viranomaisen kielelliset velvoitteet (kielilaki 423/2003, perustuslaki 731/1999 17 §, saamen kielilaki 1086/2003). |

## Aloitus

Lyhin polku: lisää markkinapaikka ja asenna haluamasi plugari.

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install juristi@agent-skills-for-finnish-law
```

Tarkemmat ohjeet ovat tiedostossa [QUICKSTART.md](QUICKSTART.md).
Codex-käyttöönotto on tiedostossa [AGENTS.md](AGENTS.md).

Organisaatiokäyttöön tee ensin
[`references/firm-adoption.md`](references/firm-adoption.md)-oppaan
päätökset – aineistolinjaus, käsittelysopimus, anonymisointi ja tarkistusketju – ja
pilotoi [esimerkkiaineistoilla](examples/) ennen kuin viet oikeaa aineistoa
työkaluun.

## Osallistuminen

Katso [CONTRIBUTING.md](CONTRIBUTING.md). Pääperiaate: oikea toiminta kuuluu
SKILL.md:hen ja perustuu aitoihin lähteisiin, ja CLAUDE.md-suojaukset ovat varaverkko.

## Lisenssi

[MIT](LICENSE) © 2026 Aku Nikkola.
