# Claude for Legal Finland

Avoimen lähdekoodin skillit ja plugarit Clauden käyttöön suomalaisessa
juridisessa työssä: lakikieli, pykäläviittaukset ja oikeuslähteet
**Suomen oikeuden ehdoilla**. Suomalainen vastine Anthropicin
[claude-for-legal](https://github.com/anthropics/claude-for-legal)-kokoelmalle.

**24 plugaria · 77 skilliä · 6 agenttia · kytkennät Finlexiin ja oik.ai:hin · [MIT](LICENSE)**

Selailtava yleiskatsaus koko kokoelmasta:
**[akunikkola.github.io/claude-for-legal-finland](https://akunikkola.github.io/claude-for-legal-finland/)**

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
> [`references/viittaustyyli.md`](references/viittaustyyli.md) ja
> [`references/vastuu-ja-tietoturva.md`](references/vastuu-ja-tietoturva.md).
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
- **Säädösvahti.** [`scripts/tarkista-saadokset.mjs`](scripts/tarkista-saadokset.mjs)
  käy kuukausittain Finlexistä läpi, että kokoelman viittaamien säädösten nimet ovat
  yhä ajan tasalla. Kumottu tai uudelleen nimetty laki jää näin kiinni automaattisesti.

## Plugarit

Kaikki 24 plugaria ovat valmiita ja asennettavissa erikseen.

| Plugari | Mitä kattaa |
|---|---|
| **[juristi](juristi/)** | Läpileikkaava perusta: lakikieli ja pykäläviittaukset, suomen kieli, oikeustutkimus (oik.ai/Finlex) ja juridisen asiakirjan monivaiheinen tarkistus. |
| **[lainvalmistelu](lainvalmistelu/)** | Säädösvalmistelu: Lainkirjoittajan opas, HE:n laatimisohjeet (HELO), lainvalmistelun prosessiopas, lakikieli. |
| **[lausunnot](lausunnot/)** | Lausuntomenettely: lausunnot lakiehdotuksiin, vaikutusarviointi lausunnonantajan näkökulmasta, Lausuntopalvelu.fi. |
| **[sopimukset](sopimukset/)** | Sopimusten laatiminen (rakenne, lausekekirjasto, sopimusoikeus) ja lausekekohtainen riskiarvio Suomen oikeuden mukaan. |
| **[työoikeus](tyooikeus/)** | Työsopimus (työsopimuslaki 55/2001), päättämisen arviointi ja yhteistoiminta/muutosneuvottelut (yhteistoimintalaki 1333/2021). |
| **[tietosuoja](tietosuoja/)** | Tietosuoja-asetus (GDPR) ja tietosuojalaki: käsittelyn arviointi ja DPIA, tietosuojaseloste, rekisteröidyn pyynnöt. |
| **[tekoälysääntely](tekoalysaantely/)** | EU:n tekoälyasetus (AI Act): riskiluokittelu, velvoitteet, määräajat, seuraamukset, GPAI ja FRIA. Avoin, deterministinen EU AI Act -MCP. |
| **[hallinto-oikeus](hallinto-oikeus/)** | Hallintopäätös (hallintolaki 434/2003), muutoksenhaku (808/2019) ja asiakirjajulkisuus/tietopyynnöt (julkisuuslaki 621/1999). |
| **[riidanratkaisu](riidanratkaisu/)** | Riita-asia yleisissä tuomioistuimissa (oikeudenkäymiskaari 4/1734): haastehakemus, todistelu, muutoksenhaku. |
| **[yhtiöoikeus](yhtiooikeus/)** | Osakeyhtiölaki (624/2006): perustaminen ja hallinto, johdon vastuu, varojenjako, osakassopimukset, yritysjärjestelyt ja DD. |
| **[insolvenssi](insolvenssi/)** | Maksukyvyttömyys: menettelyn valinta (konkurssi 120/2004, saneeraus 47/1993, velkajärjestely 57/1993), konkurssimenettely, perintä ja ulosotto. |
| **[immateriaalioikeus](immateriaalioikeus/)** | IPR: tavaramerkki ja toiminimi (544/2019, 128/1979), tekijänoikeus DSM-uudistuksineen (404/1961), liikesalaisuudet (595/2018). |
| **[verotus](verotus/)** | Verotusmenettely ja muutoksenhaku (VML 1558/1995), yritysverotus (EVL 360/1968), arvonlisäverotus (AVL 1501/1993). |
| **[julkiset hankinnat](julkiset-hankinnat/)** | Hankintalaki (1397/2016): suunnittelu ja menettelyt, tarjouspyyntö ja tarjous, hankintapäätös ja muutoksenhaku markkinaoikeuteen. |
| **[rikosprosessi](rikosprosessi/)** | Esitutkinta ja pakkokeinot (805/2011, 806/2011), syyte ja vastaus (ROL 689/1997), asianomistajan asema ja korvaukset. |
| **[ympäristö ja kaavoitus](ymparisto-ja-kaavoitus/)** | Ympäristöluvat (YSL 527/2014), kaavoitus ja rakentaminen (rakentamislaki 751/2023), ympäristövastuut ja -DD. LVV-uudistus 2026 huomioitu. |
| **[kiinteistöt ja asuminen](kiinteistot-ja-asuminen/)** | Kiinteistökauppa (maakaari 540/1995), asuntokauppa (843/1994), asunto-osakeyhtiö (1599/2009), vuokrasopimukset (481–482/1995). |
| **[kilpailuoikeus](kilpailuoikeus/)** | Kilpailunrajoitukset ja määräävä asema (948/2011, SEUT 101–102), yrityskauppavalvonta, compliance ja dawn raid -valmius. |
| **[pankki ja rahoitus](pankki-ja-rahoitus/)** | Rahoitussopimukset ja vakuudet (622/1947, 361/1999), rahanpesun estäminen (444/2017), arvopaperimarkkinat (746/2012, MAR). |
| **[ulkomaalaisoikeus](ulkomaalaisoikeus/)** | Työperusteiset oleskeluluvat (301/2004), työnantajan velvollisuudet, EU- ja perheperusteinen oleskelu, kansalaisuus (359/2003). |
| **[perhe- ja perintöoikeus](perhe-ja-perinto/)** | Avioehto ja ositus (avioliittolaki 234/1929), avopuolison asema (26/2011), lapsen huolto, tapaaminen ja elatus (361/1983 ja 704/1975), perintö, testamentti ja lakiosa (perintökaari 40/1965), edunvalvonta ja edunvalvontavaltuutus (442/1999 ja 648/2007). |
| **[kuluttajaoikeus](kuluttajaoikeus/)** | Kuluttajakaupan virhevastuu ja oikaisukeinot (kuluttajansuojalaki 38/1978), etä- ja kotimyynnin peruuttamisoikeus, sopimaton markkinointi sekä kuluttajariidat (8/2007) ja hyvä perintätapa (513/1999). Pakottava kuluttajan hyväksi. |
| **[rikosoikeus](rikosoikeus/)** | Aineellinen rikosoikeus (rikoslaki 39/1889): rikosvastuun perusteet (tahallisuus, osallisuus, vastuuvapaus), keskeiset rikostyypit tunnusmerkistöineen ja rangaistuksen määrääminen. Täydentää rikosprosessia; puolustuksen ja asianomistajan näkökulma. |
| **[kaksikielisyys (FI/SV)](kaksikielisyys/)** | Oikeuskielen kääntäminen FI↔SV vakiintunein termein virallisista lähteistä sekä kielelliset oikeudet ja viranomaisen kielelliset velvoitteet (kielilaki 423/2003, perustuslaki 731/1999 17 §, saamen kielilaki 1086/2003). |

## Aloitus

Lyhin polku: lisää markkinapaikka ja asenna haluamasi plugari.

```
/plugin marketplace add akunikkola/claude-for-legal-finland
/plugin install juristi@claude-for-legal-finland
```

Tarkemmat ohjeet ovat tiedostossa [QUICKSTART.md](QUICKSTART.md).

Organisaatiokäyttöön tee ensin
[`references/kayttoonotto-toimistossa.md`](references/kayttoonotto-toimistossa.md)-oppaan
päätökset – aineistolinjaus, käsittelysopimus, anonymisointi ja tarkistusketju – ja
pilotoi [esimerkkiaineistoilla](esimerkkiaineistot/) ennen kuin viet oikeaa aineistoa
työkaluun.

## Osallistuminen

Katso [CONTRIBUTING.md](CONTRIBUTING.md). Pääperiaate: oikea toiminta kuuluu
SKILL.md:hen ja perustuu aitoihin lähteisiin, ja CLAUDE.md-suojaukset ovat varaverkko.

## Lisenssi

[MIT](LICENSE) © 2026 Aku Nikkola.
