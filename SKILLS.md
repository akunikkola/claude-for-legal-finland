# Skillit

> Autogeneroitu `scripts/generate-skills-md.mjs`-skriptillä `.claude-plugin/marketplace.json`:sta
> ja kunkin `SKILL.md`:n frontmatterista. Älä muokkaa käsin – aja skripti uudelleen.

Markkinapaikalla on **24 plugaria** ja **78 skilliä**. Asennus: ks. [QUICKSTART.md](QUICKSTART.md).

## Juristi – perusta

`/plugin install juristi@claude-for-legal-finland` – [`./juristi/`](./juristi/)

Läpileikkaava perusta suomalaiseen juridiseen työhön: lakikieli ja pykäläviittaukset, suomen kielen oikeinkirjoitus, oikeustutkimus voimassa olevasta laista ja oikeuskäytännöstä (Finlex/oik.ai-MCP), sekä juridisen asiakirjan monivaiheinen tarkistus. Pohja, johon muut käytäntöaluekohtaiset plugarit nojaavat.

| Skill | Kuvaus |
|---|---|
| [`asiakirjan-tarkistus`](juristi/skills/asiakirjan-tarkistus/SKILL.md) | Juridisen asiakirjan järjestelmällinen monivaiheinen laaduntarkistus suomalaisessa kontekstissa. Käytä tätä skilliä, kun juridinen asiakirja pitää tarkistaa ennen käyttöä: sopimus, lausunto, valitus, hallintopäätös, muistio, sopimusluonnos… |
| [`juristi`](juristi/skills/juristi/SKILL.md) | Suomalaisen oikeuden ja lakikielen yleisapuri. Käytä tätä skilliä AINA kun käyttäjä työskentelee lakien, pykälien, säädösten, sopimusten tai muiden juridisten dokumenttien kanssa – riippumatta siitä, onko käyttäjä juristi vai ei. Triggeröi… |
| [`kaytantoprofiili`](juristi/skills/kaytantoprofiili/SKILL.md) | Plugarikokoelman räätälöinti organisaation omiin käytäntöihin. Käytä tätä skilliä, kun käyttäjä haluaa mukauttaa, konfiguroida tai personoida claude-for-legal-finland-plugarit oman toimiston, yrityksen, viraston tai kunnan käytäntöihin: va… |
| [`oikeustapaus-referointi`](juristi/skills/oikeustapaus-referointi/SKILL.md) | Tuomioistuinratkaisun jäsentäminen ja referointi: ennakkopäätöksen tai muun ratkaisun olennaisen sisällön poiminta rakenteiseen muotoon (tunnistetiedot, oikeuskysymys, faktat, lopputulos, perustelujen ydin eli ratio, merkitys). Käytä tätä… |
| [`oikeustutkimus`](juristi/skills/oikeustutkimus/SKILL.md) | Suomalaisen voimassa olevan lainsäädännön ja oikeuskäytännön haku, lukeminen ja oikea viittaaminen oik.ai-, laki.ai- tai Finlex-MCP:n avulla. Käytä tätä skilliä AINA kun tarvitaan ajantasaista lakitekstiä, pykälän sisältö, KKO:n tai KHO:n… |
| [`selkokielistaja`](juristi/skills/selkokielistaja/SKILL.md) | Juridisen tekstin selittäminen selkeällä yleiskielellä maallikolle — asiakkaalle, päämiehelle tai muulle ei-juristille. Käytä tätä skilliä, kun pykälä, sopimusehto, päätös, lausunto tai kirjelmä pitää avata ymmärrettävään muotoon, kun asia… |
| [`suomen-kieli`](juristi/skills/suomen-kieli/SKILL.md) | Suomen kielen oikeinkirjoitus-, kielioppi- ja tyyliohjeistus verkkosivujen, dokumenttien ja muun sisällön tuottamiseen ja tarkastamiseen. Käytä tätä skilliä AINA kun kirjoitat tai tuotat suomenkielistä tekstiä, tarkistat suomenkielistä sis… |
| [`taulukkokatsaus`](juristi/skills/taulukkokatsaus/SKILL.md) | Monen asiakirjan rinnakkaisvertailu tai yhden asiakirjan rakenteinen taulukointi niin, että jokainen solu on lähteistetty asiakirjan kohtaan. Käytä tätä skilliä, kun samantyyppisiä asiakirjoja pitää verrata taulukkona (rivi per asiakirja,… |
| [`toimeksianto`](juristi/skills/toimeksianto/SKILL.md) | Uuden toimeksiannon, jutun tai asian aloitus ja aineiston haltuunotto suomalaisessa juridisessa työssä. Käytä tätä skilliä AINA kun käyttäjä aloittaa uuden toimeksiannon tai jutun, tuo asiakirjan tai asiakirjanipun käsiteltäväksi, pyytää j… |

## Lainvalmistelu

`/plugin install lainvalmistelu@claude-for-legal-finland` – [`./lainvalmistelu/`](./lainvalmistelu/)

Säädösvalmistelun apuri: Lainkirjoittajan opas (säädösten rakenne, kieli, viittaaminen, johtolause), hallituksen esitysten laatimisohjeet (HELO), lainvalmistelun prosessiopas ja lakikielen merkit ja taivutusmuodot. Perustuu virallisiin oppaisiin.

| Skill | Kuvaus |
|---|---|
| [`hallituksen-esityksen-laatimisohjeet`](lainvalmistelu/skills/hallituksen-esityksen-laatimisohjeet/SKILL.md) | Hallituksen esitysten laatimisohjeet (HELO) - Opas hallituksen esitysten kirjoittamiseen. Sisältää ohjeet perusrakenteen, EU-taustaisten, valtiosopimustaustaisten ja muiden hallituksen esitysten laatimiseen. |
| [`lainkirjoittajan-opas`](lainvalmistelu/skills/lainkirjoittajan-opas/SKILL.md) | Kattava opas suomalaisen lainsäädännön laadintaan. Lainkirjoittajan opas sisältää keskeisiä ohjeita säädösten laadintaprosessista, rakenteesta, kielestä ja muusta sääntelystä. Hyödyllinen ressurssi lakimiehille, lainsäädäntöä valmistaville… |
| [`lainvalmistelun-prosessiopas`](lainvalmistelu/skills/lainvalmistelun-prosessiopas/SKILL.md) | Opas lainsäädännön valmisteluprosessista Suomessa. Sisältää kaikki vaiheet aloitteesta lain saattamiseen voimaan, mukaan lukien esivalmistelun, perusvalmistelun, lausuntomenettelyn ja jatkovalmistelun prosessit. |
| [`lakikieli-opas`](lainvalmistelu/skills/lakikieli-opas/SKILL.md) | Opas lakikielen merkkien ja taivutusmuotojen käyttöön suomalaisessa säädöstekstissä. Sisältää ohjeet pykälänmerkin, numeroiden, prosenttien, mittayksiköiden, rahayksiköiden, välimerkkien ja lyhenteiden käytöstä lakitekstissä. |

## Lausunnot

`/plugin install lausunnot@claude-for-legal-finland` – [`./lausunnot/`](./lausunnot/)

Lausunnon laatiminen lakiuudistuksiin ja lakiluonnoksiin: lakiehdotuksen analyysi, vaikutusarviointi lausunnonantajan näkökulmasta, muiden lausuntojen tiivistäminen ja perustellun lausunnon kirjoittaminen. Soveltuu kunnille, kuntayhtymille, virastoille, järjestöille ja yrityksille.

| Skill | Kuvaus |
|---|---|
| [`lausuntoapuri`](lausunnot/skills/lausuntoapuri/SKILL.md) | Lausunnon laatiminen lakiuudistuksiin ja lakiluonnoksiin minkä tahansa lausunnonantajan (kunta, kaupunki, kuntayhtymä, virasto, järjestö, yritys) näkökulmasta. Auttaa analysoimaan lakiehdotusta, vertaamaan sitä voimassa olevaan lakiin, tun… |

## Sopimukset

`/plugin install sopimukset@claude-for-legal-finland` – [`./sopimukset/`](./sopimukset/)

Sopimusten laatiminen ja tarkistus Suomen oikeuden mukaan: sopimuksen rakenne ja kommentoitu lausekekirjasto, sopimusoikeuden perusteet sekä lausekekohtainen riskiarvio (VIHREÄ/KELTAINEN/PUNAINEN) kohtuullistamis- ja pakottavan lain lippuineen.

| Skill | Kuvaus |
|---|---|
| [`sopimuksen-laatiminen`](sopimukset/skills/sopimuksen-laatiminen/SKILL.md) | Sopimuksen laatiminen Suomen oikeuden mukaan: rakenne, keskeiset lausekkeet ja sopimusoikeuden perusteet. Käytä tätä skilliä, kun käyttäjä laatii, luonnostelee tai täydentää sopimusta – toimitus-, palvelu-, salassapito-, työ-, vuokra-, toi… |
| [`sopimuksen-tarkistus`](sopimukset/skills/sopimuksen-tarkistus/SKILL.md) | Sopimuksen lausekekohtainen riskiarvio Suomen oikeuden mukaan ja luokittelu (VIHREÄ / KELTAINEN / PUNAINEN). Käytä tätä skilliä, kun käyttäjä haluaa tarkistaa, arvioida tai kommentoida saamaansa tai laatimaansa sopimusta, etsiä siitä riske… |

## Tietosuoja

`/plugin install tietosuoja@claude-for-legal-finland` – [`./tietosuoja/`](./tietosuoja/)

Henkilötietojen käsittelyn tietosuoja EU:n tietosuoja-asetuksen (2016/679) ja tietosuojalain (1050/2018) mukaan: käsittelyn arviointi ja DPIA, tietosuojaseloste ja seloste käsittelytoimista sekä rekisteröidyn tietopyyntöihin vastaaminen.

| Skill | Kuvaus |
|---|---|
| [`rekisteroidyn-pyynnot`](tietosuoja/skills/rekisteroidyn-pyynnot/SKILL.md) | Rekisteröidyn oikeuksien toteuttaminen ja tietopyyntöihin vastaaminen EU:n tietosuoja-asetuksen (15–22 art) mukaan: tarkastusoikeus, oikaisu, poisto, käsittelyn rajoittaminen, siirto-oikeus, vastustaminen ja automatisoidut päätökset. Käytä… |
| [`tietosuoja-arviointi`](tietosuoja/skills/tietosuoja-arviointi/SKILL.md) | Henkilötietojen käsittelyn tietosuoja-arviointi: käsittelyperuste, käsittelyn periaatteet ja vaikutustenarvioinnin (DPIA) tarve EU:n tietosuoja-asetuksen (2016/679) ja kansallisen tietosuojalain (1050/2018) mukaan. Käytä tätä skilliä, kun… |
| [`tietosuojaseloste`](tietosuoja/skills/tietosuojaseloste/SKILL.md) | Tietosuojaselosteen (informointi rekisteröidylle, GDPR 13–14 art) ja käsittelytoimien selosteen (GDPR 30 art) laatiminen EU:n tietosuoja-asetuksen ja tietosuojalain (1050/2018) mukaan. Käytä tätä skilliä, kun käyttäjä laatii tai päivittää… |

## Tekoälysääntely

`/plugin install tekoalysaantely@claude-for-legal-finland` – [`./tekoalysaantely/`](./tekoalysaantely/)

EU:n tekoälyasetuksen (asetus (EU) 2024/1689, AI Act) noudattaminen: tekoälyjärjestelmän riskiluokittelu, velvoitteet roolin ja riskiluokan mukaan sekä määräajat, seuraamukset, GPAI-kynnys ja perusoikeusvaikutusten arviointi (FRIA). Nojaa avoimeen, deterministiseen EU AI Act -MCP:hen.

| Skill | Kuvaus |
|---|---|
| [`tekoaly-luokittelu`](tekoalysaantely/skills/tekoaly-luokittelu/SKILL.md) | Tekoälyjärjestelmän riskiluokittelu EU:n tekoälyasetuksen (asetus (EU) 2024/1689, "AI Act") mukaan: kielletty, korkea riski, rajoitettu riski (läpinäkyvyysvelvoitteet) vai minimaalinen riski. Käytä tätä skilliä, kun käyttäjä haluaa selvitt… |
| [`tekoaly-vaatimustenmukaisuus`](tekoalysaantely/skills/tekoaly-vaatimustenmukaisuus/SKILL.md) | Tekoälyasetuksen (EU 2024/1689) vaatimustenmukaisuuden tukitehtävät: soveltamisen määräajat ja siirtymäajat, seuraamusten (sakkojen) suuruus, GPAI-mallin systeemisen riskin kynnys (10^25 FLOPs) ja perusoikeusvaikutusten arviointi (FRIA, 27… |
| [`tekoaly-velvoitteet`](tekoalysaantely/skills/tekoaly-velvoitteet/SKILL.md) | Tekoälyasetuksen (EU 2024/1689) velvoitteiden selvittäminen roolin (tarjoaja/ käyttöönottaja) ja riskiluokan mukaan sekä korkean riskin järjestelmän teknisen dokumentaation (Annex IV) kokoaminen. Käytä tätä skilliä, kun tekoälyjärjestelmän… |

## Työoikeus

`/plugin install tyooikeus@claude-for-legal-finland` – [`./tyooikeus/`](./tyooikeus/)

Suomen työoikeus: työsopimuksen laatiminen ja tarkistus (työsopimuslaki 55/2001), työsuhteen päättämisen perusteen ja menettelyn arviointi sekä yhteistoiminta ja muutosneuvottelut (yhteistoimintalaki 1333/2021). Pakottavan lainsäädännön ja työehtosopimusten ehdoilla.

| Skill | Kuvaus |
|---|---|
| [`tyosopimus`](tyooikeus/skills/tyosopimus/SKILL.md) | Työsopimuksen laatiminen ja tarkistus Suomen työoikeuden mukaan (työsopimuslaki 55/2001). Käytä tätä skilliä, kun käyttäjä laatii tai tarkistaa työsopimusta, kysyy työsuhteen ehdoista, määräaikaisuudesta, koeajasta, kilpailukiellosta, sala… |
| [`tyosuhteen-paattaminen`](tyooikeus/skills/tyosuhteen-paattaminen/SKILL.md) | Työsuhteen päättämisen arviointi Suomen työoikeuden mukaan (työsopimuslaki 55/2001): irtisanominen (henkilöön liittyvä ja tuotannollis-taloudellinen peruste), purkaminen, koeaikapurku, menettely, irtisanomisajat ja riskien luokittelu. Käyt… |
| [`yhteistoiminta`](tyooikeus/skills/yhteistoiminta/SKILL.md) | Yhteistoiminta ja muutosneuvottelut Suomen yhteistoimintalain (1333/2021) mukaan: jatkuva vuoropuhelu, muutosneuvottelujen edellytykset ja kulku, neuvotteluesitys, määräajat ja soveltamisala. Käytä tätä skilliä, kun käyttäjä suunnittelee t… |

## Hallinto-oikeus

`/plugin install hallinto-oikeus@claude-for-legal-finland` – [`./hallinto-oikeus/`](./hallinto-oikeus/)

Suomen hallinto-oikeus ja julkishallinto: hallintopäätöksen laatiminen ja tarkistus (hallintolaki 434/2003), muutoksenhaku – oikaisuvaatimus ja valitus (laki oikeudenkäynnistä hallintoasioissa 808/2019) – sekä asiakirjajulkisuus ja tietopyynnöt (julkisuuslaki 621/1999).

| Skill | Kuvaus |
|---|---|
| [`hallintopaatos`](hallinto-oikeus/skills/hallintopaatos/SKILL.md) | Hallintopäätöksen laatiminen ja tarkistus hallintolain (434/2003) mukaan: hyvän hallinnon perusteet, asian käsittely, kuuleminen, esteellisyys, päätöksen perustelu ja muutoksenhakuohjaus. Käytä tätä skilliä, kun käyttäjä laatii tai tarkist… |
| [`julkisuus-ja-tietopyynnot`](hallinto-oikeus/skills/julkisuus-ja-tietopyynnot/SKILL.md) | Asiakirjajulkisuus ja tietopyyntöihin vastaaminen julkisuuslain (laki viranomaisten toiminnan julkisuudesta 621/1999) mukaan: julkisuusperiaate, salassapitoperusteet, asiakirjapyyntöön vastaaminen, määräajat ja kielteinen päätös. Käytä tät… |
| [`muutoksenhaku`](hallinto-oikeus/skills/muutoksenhaku/SKILL.md) | Muutoksenhaku hallintopäätökseen Suomen hallintoprosessissa: oikaisuvaatimus, hallintovalitus hallinto-oikeuteen ja valitus korkeimpaan hallinto-oikeuteen (laki oikeudenkäynnistä hallintoasioissa 808/2019), valitusoikeus, määräajat, valitu… |

## Riidanratkaisu

`/plugin install riidanratkaisu@claude-for-legal-finland` – [`./riidanratkaisu/`](./riidanratkaisu/)

Riita-asian ratkaiseminen yleisissä tuomioistuimissa (oikeudenkäymiskaari 4/1734): haastehakemuksen laatiminen, todistelun suunnittelu ja arviointi sekä muutoksenhaku tuomioon (hovioikeus ja jatkokäsittelylupa, korkein oikeus ja valituslupa).

| Skill | Kuvaus |
|---|---|
| [`haastehakemus`](riidanratkaisu/skills/haastehakemus/SKILL.md) | Riita-asian haastehakemuksen laatiminen ja tarkistus oikeudenkäymiskaaren (4/1734) mukaan: kantajan vaatimukset, niiden perusteet, todisteet, oikeudenkäyntikulut, toimivalta ja prosessiosoite. Käytä tätä skilliä, kun käyttäjä panee vireill… |
| [`muutoksenhaku-tuomioon`](riidanratkaisu/skills/muutoksenhaku-tuomioon/SKILL.md) | Muutoksenhaku yleisen tuomioistuimen tuomioon oikeudenkäymiskaaren (4/1734) mukaan: valitus käräjäoikeuden tuomiosta hovioikeuteen ja jatkokäsittelylupa, valitus korkeimpaan oikeuteen ja valituslupa, tyytymättömyyden ilmoitus, määräajat ja… |
| [`todistelu`](riidanratkaisu/skills/todistelu/SKILL.md) | Riita-asian todistelun suunnittelu ja arviointi oikeudenkäymiskaaren (4/1734) 17 luvun mukaan: näyttötaakka, todistuskeinot (asiakirjat, todistajat, asiantuntijat, katselmus, asianosaisen kuuleminen), todistusteemat ja todistelun rajoituks… |
| [`vahingonkorvaus`](riidanratkaisu/skills/vahingonkorvaus/SKILL.md) | Vahingonkorvausvastuun arviointi Suomen oikeuden mukaan (vahingonkorvauslaki 412/1974). Käytä tätä skilliä, kun käyttäjä arvioi korvausvastuun syntymistä tai puolustautuu korvausvaatimusta vastaan: tuottamus, syy-yhteys, vahinkolajit ja ko… |

## Yhtiöoikeus

`/plugin install yhtiooikeus@claude-for-legal-finland` – [`./yhtiooikeus/`](./yhtiooikeus/)

Suomen yhtiöoikeus (osakeyhtiölaki 624/2006): perustaminen ja hallinto, yhtiökokous ja hallitustyö, johdon vastuu, varojenjaon kaksoistesti, osakassopimusten laatiminen ja riskitarkistus sekä yritysjärjestelyt due diligence -listoineen.

| Skill | Kuvaus |
|---|---|
| [`osakassopimus`](yhtiooikeus/skills/osakassopimus/SKILL.md) | Osakassopimuksen laatiminen ja riskitarkistus Suomen oikeuden mukaan. Käytä tätä skilliä, kun käyttäjä laatii, neuvottelee, tarkistaa tai tulkitsee osakassopimusta tai sen lausekkeita: päätöksenteko ja hallituspaikat, osakkeiden luovutusra… |
| [`yhtion-hallinto`](yhtiooikeus/skills/yhtion-hallinto/SKILL.md) | Osakeyhtiön perustaminen, hallinto ja johdon vastuu Suomen osakeyhtiölain (624/2006) mukaan. Käytä tätä skilliä, kun käyttäjä perustaa osakeyhtiötä, laatii tai muuttaa yhtiöjärjestystä, valmistelee yhtiökokousta tai hallituksen kokousta (k… |
| [`yritysjarjestelyt`](yhtiooikeus/skills/yritysjarjestelyt/SKILL.md) | Yritysjärjestelyjen oikeudellinen jäsennys Suomen oikeuden mukaan: osakekauppa, liiketoimintakauppa, sulautuminen, jakautuminen ja oikeudellinen due diligence. Käytä tätä skilliä, kun käyttäjä valmistelee, arvioi tai dokumentoi yrityskaupp… |

## Insolvenssi

`/plugin install insolvenssi@claude-for-legal-finland` – [`./insolvenssi/`](./insolvenssi/)

Suomen insolvenssioikeus: maksukyvyttömyystilanteen arviointi ja menettelyn valinta (konkurssi 120/2004, yrityssaneeraus 47/1993, velkajärjestely 57/1993), konkurssimenettely velkojan ja velallisen näkökulmasta sekä saatavien perintä, vanhentuminen ja ulosotto.

| Skill | Kuvaus |
|---|---|
| [`konkurssimenettely`](insolvenssi/skills/konkurssimenettely/SKILL.md) | Konkurssimenettelyn kulku Suomen konkurssilain (120/2004) mukaan velkojan ja velallisen näkökulmasta. Käytä tätä skilliä, kun käyttäjä valmistelee tai arvioi konkurssihakemusta, on saanut tiedon vastapuolen konkurssista, valvoo saatavaa ko… |
| [`maksukyvyttomyysarvio`](insolvenssi/skills/maksukyvyttomyysarvio/SKILL.md) | Maksukyvyttömyystilanteen jäsennys ja menettelyn valinta Suomen insolvenssioikeuden mukaan. Käytä tätä skilliä, kun yrityksen tai yksityishenkilön maksukyky horjuu tai velkaa ei pystytä maksamaan ja pitää arvioida vaihtoehdot: vapaaehtoine… |
| [`saatavien-perinta`](insolvenssi/skills/saatavien-perinta/SKILL.md) | Saatavan perinnän elinkaari Suomen oikeuden mukaan: vapaaehtoinen perintä ja hyvä perintätapa (perintälaki 513/1999), velan vanhentumisen hallinta ja katkaisu (728/2003), oikeudellinen perintä ja ulosotto (ulosottokaari 705/2007). Käytä tä… |

## Immateriaalioikeus

`/plugin install immateriaalioikeus@claude-for-legal-finland` – [`./immateriaalioikeus/`](./immateriaalioikeus/)

Suomen immateriaalioikeus: tavaramerkin ja toiminimen suojastrategia ja sekaannusvaara-arvio (544/2019 ja 128/1979), tekijänoikeus DSM-uudistuksineen ja lisensointi (404/1961) sekä liikesalaisuuksien suojaohjelma ja loukkaustilanteet (595/2018). Markkinaoikeus, PRH ja EUIPO -kytkennät.

| Skill | Kuvaus |
|---|---|
| [`liikesalaisuudet`](immateriaalioikeus/skills/liikesalaisuudet/SKILL.md) | Liikesalaisuuksien suoja Suomen oikeuden mukaan (liikesalaisuuslaki 595/2018). Käytä tätä skilliä, kun käyttäjä suojaa yrityksen luottamuksellista tietoa (asiakastiedot, hinnoittelu, reseptit, algoritmit, prosessit), arvioi täyttyykö liike… |
| [`tavaramerkki-ja-toiminimi`](immateriaalioikeus/skills/tavaramerkki-ja-toiminimi/SKILL.md) | Tavaramerkin ja toiminimen suoja Suomen oikeuden mukaan (tavaramerkkilaki 544/2019, toiminimilaki 128/1979). Käytä tätä skilliä, kun käyttäjä suunnittelee tuotteen, palvelun tai yrityksen nimeä tai logoa, valmistelee tavaramerkin rekisterö… |
| [`tekijanoikeus`](immateriaalioikeus/skills/tekijanoikeus/SKILL.md) | Tekijänoikeus Suomen oikeuden mukaan (tekijänoikeuslaki 404/1961 DSM-uudistuksineen). Käytä tätä skilliä, kun käyttäjä kysyy teoksen, ohjelmiston, kuvan, tekstin, musiikin tai muun sisällön tekijänoikeudesta, oikeuksien omistuksesta työ- t… |

## Verotus

`/plugin install verotus@claude-for-legal-finland` – [`./verotus/`](./verotus/)

Suomen verotus ammattilaisille: verotusmenettely ja muutoksenhaku oikaisuvaatimuksesta KHO:hon (VML 1558/1995), yritysverotus konserniavustuksineen ja yritysjärjestelyineen (EVL 360/1968) sekä arvonlisäverotus (AVL 1501/1993). Verokannat ja euromäärät aina lähteestä; tulkinnanvaraisissa ennakkoratkaisu.

| Skill | Kuvaus |
|---|---|
| [`arvonlisaverotus`](verotus/skills/arvonlisaverotus/SKILL.md) | Arvonlisäverotus Suomessa (arvonlisäverolaki 1501/1993). Käytä tätä skilliä, kun käyttäjä arvioi myynnin arvonlisäverollisuutta tai verokantaa, ostojen vähennysoikeutta, käännettyä verovelvollisuutta (rakennusala, EU-hankinnat), kansainväl… |
| [`verotusmenettely-ja-muutoksenhaku`](verotus/skills/verotusmenettely-ja-muutoksenhaku/SKILL.md) | Verotusmenettely ja muutoksenhaku verotukseen Suomessa (laki verotusmenettelystä 1558/1995). Käytä tätä skilliä, kun käyttäjä on saanut verotuspäätöksen, jälkiverotus- tai veronkorotuspäätöksen tai verotarkastuskertomuksen ja harkitsee muu… |
| [`yritysverotus`](verotus/skills/yritysverotus/SKILL.md) | Yritysverotus Suomessa (laki elinkeinotulon verottamisesta 360/1968). Käytä tätä skilliä, kun käyttäjä arvioi yrityksen tulon veronalaisuutta tai menon vähennyskelpoisuutta, suunnittelee konserniavustusta, osingonjaon verotusta tai yritysj… |

## Julkiset hankinnat

`/plugin install julkiset-hankinnat@claude-for-legal-finland` – [`./julkiset-hankinnat/`](./julkiset-hankinnat/)

Julkiset hankinnat hankintalain (1397/2016) mukaan sekä hankintayksikön että tarjoajan näkökulmasta: suunnittelu ja menettelyn valinta kynnysarvoineen, tarjouspyyntö ja tarjouspyynnönmukainen tarjous sekä hankintapäätös, hankintaoikaisu ja valitus markkinaoikeuteen seuraamuksineen.

| Skill | Kuvaus |
|---|---|
| [`hankinnan-suunnittelu`](julkiset-hankinnat/skills/hankinnan-suunnittelu/SKILL.md) | Julkisen hankinnan suunnittelu ja menettelyn valinta hankintalain (1397/2016) mukaan. Käytä tätä skilliä, kun hankintayksikkö suunnittelee kilpailutusta: soveltuuko hankintalaki, mikä on ennakoitu arvo ja ylittyykö kansallinen tai EU-kynny… |
| [`hankintapaatos-ja-muutoksenhaku`](julkiset-hankinnat/skills/hankintapaatos-ja-muutoksenhaku/SKILL.md) | Hankintapäätös, hankintaoikaisu ja muutoksenhaku markkinaoikeuteen julkisissa hankinnoissa (hankintalaki 1397/2016). Käytä tätä skilliä, kun hankintayksikkö laatii hankintapäätöstä perusteluineen, soveltaa odotusaikaa tai tekee hankintasop… |
| [`tarjouspyynto-ja-tarjous`](julkiset-hankinnat/skills/tarjouspyynto-ja-tarjous/SKILL.md) | Tarjouspyynnön laatiminen ja tarjouksen tekeminen julkisessa hankinnassa (hankintalaki 1397/2016). Käytä tätä skilliä, kun hankintayksikkö laatii tarjouspyyntöä, määrittelee soveltuvuusvaatimuksia tai vertailuperusteita tai käsittelee ja v… |

## Rikosprosessi

`/plugin install rikosprosessi@claude-for-legal-finland` – [`./rikosprosessi/`](./rikosprosessi/)

Suomen rikosprosessi avustajan työhön: esitutkinta ja pakkokeinot (805/2011 ja 806/2011) kuulusteluvalmistautumisineen ja loppulausuntoineen, syyte ja vastaus tuomioesitysmenettelyineen (ROL 689/1997) sekä asianomistajan vaatimukset ja rikosvahinkokorvaus. Syyttömyysolettaman ja avustajan käytön ehdoilla.

| Skill | Kuvaus |
|---|---|
| [`asianomistajan-asema`](rikosprosessi/skills/asianomistajan-asema/SKILL.md) | Asianomistajan (rikoksen uhrin) asema ja oikeudet Suomen rikosprosessissa: yksityisoikeudelliset vaatimukset, vahingonkorvaus ja valtion korvaus, toissijainen syyteoikeus, avustaja ja tukihenkilö sekä lähestymiskielto. Käytä tätä skilliä,… |
| [`esitutkinta-ja-pakkokeinot`](rikosprosessi/skills/esitutkinta-ja-pakkokeinot/SKILL.md) | Esitutkinta ja pakkokeinot Suomen rikosprosessissa (esitutkintalaki 805/2011, pakkokeinolaki 806/2011) avustajan näkökulmasta. Käytä tätä skilliä, kun päämies on saanut kutsun kuulusteluun tai tiedon rikosepäilystä, valmistaudutaan kuulust… |
| [`syyte-ja-vastaus`](rikosprosessi/skills/syyte-ja-vastaus/SKILL.md) | Rikosasian tuomioistuinvaihe Suomessa (laki oikeudenkäynnistä rikosasioissa 689/1997): syyteharkinta, haastehakemus, vastaajan vastaus ja puolustuksen jäsennys, todistelu, tuomioesitysmenettely ja pääkäsittely. Käytä tätä skilliä, kun syyt… |

## Ympäristö ja kaavoitus

`/plugin install ymparisto-ja-kaavoitus@claude-for-legal-finland` – [`./ymparisto-ja-kaavoitus/`](./ymparisto-ja-kaavoitus/)

Suomen ympäristö- ja kaavoitusoikeus uudistuneen lainsäädännön mukaan: ympäristöluvat ja valvonta (YSL 527/2014), kaavoitus ja rakentaminen (alueidenkäyttölaki ja rakentamislaki 751/2023 uusine lupineen) sekä ympäristövastuut ja ympäristö-DD transaktioissa. Huomioi 2026 viranomaisuudistuksen (Lupa- ja valvontavirasto).

| Skill | Kuvaus |
|---|---|
| [`kaavoitus-ja-rakentaminen`](ymparisto-ja-kaavoitus/skills/kaavoitus-ja-rakentaminen/SKILL.md) | Kaavoitus ja rakentaminen Suomessa alueidenkäyttölain (132/1999, ent. maankäyttö- ja rakennuslaki) ja uuden rakentamislain (751/2023) mukaan. Käytä tätä skilliä, kun käyttäjä selvittää kaavatilannetta tai kaavamääräysten tulkintaa, osallis… |
| [`ymparistolupa-ja-valvonta`](ymparisto-ja-kaavoitus/skills/ymparistolupa-ja-valvonta/SKILL.md) | Ympäristöluvat, ilmoitukset ja valvonta Suomen ympäristönsuojelulain (527/2014) mukaan. Käytä tätä skilliä, kun käyttäjä arvioi toiminnan luvanvaraisuutta tai luvan muutostarvetta, valmistelee tai jäsentää ympäristölupahakemusta tai vesilu… |
| [`ymparistovastuut`](ymparisto-ja-kaavoitus/skills/ymparistovastuut/SKILL.md) | Ympäristövastuiden arviointi Suomessa: pilaantuneen maaperän ja pohjaveden puhdistusvastuu (YSL 527/2014), ympäristövahinkojen korvaaminen (737/1994), ympäristörikosvastuu sekä ympäristö-due diligence yrityskaupassa ja kiinteistökaupassa.… |

## Kiinteistöt ja asuminen

`/plugin install kiinteistot-ja-asuminen@claude-for-legal-finland` – [`./kiinteistot-ja-asuminen/`](./kiinteistot-ja-asuminen/)

Suomen kiinteistö- ja asunto-oikeus: kiinteistökaupan määrämuoto, kirjaukset ja virhevastuu (maakaari 540/1995), asuntokauppa RS-järjestelmineen ja reklamaatioineen (843/1994), asunto-osakeyhtiön kunnossapitovastuu ja hallinto (1599/2009) sekä asuin- ja liikehuoneistojen vuokrasopimukset pakottavuuseroineen.

| Skill | Kuvaus |
|---|---|
| [`asunto-osakeyhtio`](kiinteistot-ja-asuminen/skills/asunto-osakeyhtio/SKILL.md) | Asunto-osakeyhtiön hallinto ja osakkaan asema Suomessa asunto-osakeyhtiölain (1599/2009) mukaan. Käytä tätä skilliä, kun käyttäjä selvittää kunnossapitovastuun jakoa yhtiön ja osakkaan välillä, suunnittelee tai arvioi osakkaan muutostyötä,… |
| [`asuntokauppa`](kiinteistot-ja-asuminen/skills/asuntokauppa/SKILL.md) | Asunto-osakkeiden kauppa Suomessa asuntokauppalain (843/1994) mukaan. Käytä tätä skilliä, kun käyttäjä valmistelee tai tarkistaa asunnon ostoa tai myyntiä, arvioi uudiskohteen (RS-kohteen) kauppaa, arvioi kaupan jälkeen ilmennyttä virhettä… |
| [`kiinteistokauppa`](kiinteistot-ja-asuminen/skills/kiinteistokauppa/SKILL.md) | Kiinteistön kauppa Suomessa maakaaren (540/1995) mukaan. Käytä tätä skilliä, kun käyttäjä valmistelee tai tarkistaa kiinteistön, määräalan tai määräosan kauppaa tai esisopimusta, laatii kauppakirjaa, selvittää lainhuutoa, kiinnityksiä tai… |
| [`vuokrasopimukset`](kiinteistot-ja-asuminen/skills/vuokrasopimukset/SKILL.md) | Asuin- ja liikehuoneiston vuokrasuhteet Suomessa (laki asuinhuoneiston vuokrauksesta 481/1995 ja laki liikehuoneiston vuokrauksesta 482/1995). Käytä tätä skilliä, kun käyttäjä laatii tai tarkistaa vuokrasopimusta, arvioi vuokrankorotuksen,… |

## Kilpailuoikeus

`/plugin install kilpailuoikeus@claude-for-legal-finland` – [`./kilpailuoikeus/`](./kilpailuoikeus/)

Suomen ja EU:n kilpailuoikeus: kielletyt kilpailunrajoitukset ja määräävän aseman väärinkäyttö itsearviointikehikoineen (kilpailulaki 948/2011, SEUT 101 ja 102 artikla), yrityskauppavalvonta täytäntöönpanokieltoineen sekä compliance-ohjelmat, tietojenvaihdon pelisäännöt ja dawn raid -valmius.

| Skill | Kuvaus |
|---|---|
| [`kilpailu-compliance`](kilpailuoikeus/skills/kilpailu-compliance/SKILL.md) | Kilpailuoikeudellinen compliance ja viranomaistarkastuksiin varautuminen Suomessa. Käytä tätä skilliä, kun organisaatio rakentaa tai päivittää kilpailu-compliance-ohjelmaa, laatii pelisääntöjä kilpailijakontakteille, toimialajärjestötoimin… |
| [`kilpailunrajoitukset`](kilpailuoikeus/skills/kilpailunrajoitukset/SKILL.md) | Kiellettyjen kilpailunrajoitusten ja määräävän markkina-aseman väärinkäytön arviointi Suomen ja EU:n kilpailuoikeuden mukaan (kilpailulaki 948/2011, SEUT 101 ja 102 artikla). Käytä tätä skilliä, kun käyttäjä arvioi sopimuksen, yhteistyön t… |
| [`yrityskauppavalvonta`](kilpailuoikeus/skills/yrityskauppavalvonta/SKILL.md) | Yrityskauppavalvonta Suomessa ja EU:ssa (kilpailulaki 948/2011 4 luku, EU:n sulautuma-asetus). Käytä tätä skilliä, kun käyttäjä arvioi, pitääkö yrityskauppa ilmoittaa KKV:lle tai komissiolle, valmistelee yrityskauppailmoitusta, suunnittele… |

## Pankki ja rahoitus

`/plugin install pankki-ja-rahoitus@claude-for-legal-finland` – [`./pankki-ja-rahoitus/`](./pankki-ja-rahoitus/)

Suomen pankki- ja rahoitusoikeus: rahoitussopimukset kovenantteineen ja vakuuspaketit julkivarmistuksineen (velkakirjalaki 622/1947, takauslaki 361/1999), rahanpesun estämisen compliance (444/2017) sekä listayhtiön tiedonantovelvollisuus ja sisäpiirihallinto (AML 746/2012, MAR).

| Skill | Kuvaus |
|---|---|
| [`arvopaperimarkkinat`](pankki-ja-rahoitus/skills/arvopaperimarkkinat/SKILL.md) | Arvopaperimarkkinasääntely Suomessa (arvopaperimarkkinalaki 746/2012, EU:n markkinoiden väärinkäyttöasetus MAR). Käytä tätä skilliä, kun listayhtiö tai sen neuvonantaja käsittelee tiedonantovelvollisuutta (pörssitiedote, sisäpiiritiedon ju… |
| [`rahanpesun-estaminen`](pankki-ja-rahoitus/skills/rahanpesun-estaminen/SKILL.md) | Rahanpesun ja terrorismin rahoittamisen estäminen Suomessa (laki 444/2017). Käytä tätä skilliä, kun organisaatio arvioi, onko se ilmoitusvelvollinen, rakentaa tai päivittää AML-compliance-ohjelmaa (riskiarvio, asiakkaan tunteminen, monitor… |
| [`rahoitus-ja-vakuudet`](pankki-ja-rahoitus/skills/rahoitus-ja-vakuudet/SKILL.md) | Rahoitussopimukset ja vakuudet Suomen oikeuden mukaan. Käytä tätä skilliä, kun käyttäjä laatii tai tarkistaa velkakirjaa, lainasopimusta tai rahoitussopimusta kovenantteineen, suunnittelee tai arvioi vakuuksia (pantti, kiinteistöpanttioike… |

## Ulkomaalaisoikeus

`/plugin install ulkomaalaisoikeus@claude-for-legal-finland` – [`./ulkomaalaisoikeus/`](./ulkomaalaisoikeus/)

Suomen ulkomaalaisoikeus työnantajan ja avustajan näkökulmasta: työperusteiset oleskeluluvat saatavuusharkintoineen (ulkomaalaislaki 301/2004), työnantajan varmistusvelvollisuudet ja seuraamukset, lähetetyt työntekijät (447/2016) sekä EU-oleskelu, perheenyhdistäminen, pysyvä lupa ja kansalaisuus (359/2003).

| Skill | Kuvaus |
|---|---|
| [`eu-ja-perheperusteinen-oleskelu`](ulkomaalaisoikeus/skills/eu-ja-perheperusteinen-oleskelu/SKILL.md) | EU-kansalaisen oleskeluoikeus, perheperusteinen oleskelu, pysyvä oleskelulupa ja Suomen kansalaisuus (ulkomaalaislaki 301/2004, kansalaisuuslaki 359/2003). Käytä tätä skilliä, kun käsitellään EU/ETA-kansalaisen rekisteröintiä ja perheenjäs… |
| [`tyonantajan-velvollisuudet`](ulkomaalaisoikeus/skills/tyonantajan-velvollisuudet/SKILL.md) | Työnantajan velvollisuudet ulkomaalaisen työvoiman käytössä Suomessa (ulkomaalaislaki 301/2004, laki työntekijöiden lähettämisestä 447/2016). Käytä tätä skilliä, kun työnantaja varmistaa työntekijän työnteko-oikeutta, rakentaa kansainvälis… |
| [`tyoperusteiset-oleskeluluvat`](ulkomaalaisoikeus/skills/tyoperusteiset-oleskeluluvat/SKILL.md) | Työperusteiset oleskeluluvat Suomessa (ulkomaalaislaki 301/2004). Käytä tätä skilliä, kun työnantaja rekrytoi ulkomaalaisen työntekijän EU/ETA-alueen ulkopuolelta tai työntekijälle haetaan lupaa: lupatyypin valinta (työntekijän oleskelulup… |

## Perhe- ja perintöoikeus

`/plugin install perhe-ja-perinto@claude-for-legal-finland` – [`./perhe-ja-perinto/`](./perhe-ja-perinto/)

Suomen perhe- ja perintöoikeus arjen tilanteisiin: avioliiton varallisuussuhteet ja ositus (avioliittolaki 234/1929), avopuolison asema (26/2011), lapsen huolto, tapaaminen ja elatus (361/1983 ja 704/1975), perimys, testamentti ja lakiosa (perintökaari 40/1965) sekä edunvalvonta ja edunvalvontavaltuutus (442/1999 ja 648/2007). Lapsen etu ja turvallisuus edellä; verot lähteestä.

| Skill | Kuvaus |
|---|---|
| [`avioliitto-ja-ositus`](perhe-ja-perinto/skills/avioliitto-ja-ositus/SKILL.md) | Avioliiton varallisuussuhteet ja niiden purkautuminen Suomessa (avioliittolaki 234/1929). Käytä tätä skilliä, kun laaditaan tai arvioidaan avioehtosopimusta, valmistaudutaan ositukseen tai omaisuuden erotteluun avioeron tai kuoleman johdos… |
| [`edunvalvonta-ja-edunvalvontavaltuutus`](perhe-ja-perinto/skills/edunvalvonta-ja-edunvalvontavaltuutus/SKILL.md) | Edunvalvonta ja siihen varautuminen Suomessa (laki holhoustoimesta 442/1999 ja laki edunvalvontavaltuutuksesta 648/2007). Käytä tätä skilliä, kun selvitetään täysi-ikäisen tai alaikäisen edunvalvonnan tarvetta, laaditaan tai arvioidaan edu… |
| [`lapsen-asema-ja-elatus`](perhe-ja-perinto/skills/lapsen-asema-ja-elatus/SKILL.md) | Lapsen huolto, asuminen, tapaaminen ja elatus Suomessa (laki lapsen huollosta ja tapaamisoikeudesta 361/1983 ja laki lapsen elatuksesta 704/1975) sekä vanhemmuuden vahvistaminen (isyyslaki 11/2015 ja äitiyslaki 253/2018). Käytä tätä skilli… |
| [`perinto-ja-testamentti`](perhe-ja-perinto/skills/perinto-ja-testamentti/SKILL.md) | Perimys, testamentti ja jäämistön käsittely Suomessa (perintökaari 40/1965). Käytä tätä skilliä, kun selvitetään perimysjärjestystä, laaditaan tai tulkitaan testamenttia, arvioidaan rintaperillisen lakiosaa, jäsennetään perunkirjoitusta ta… |

## Kuluttajaoikeus

`/plugin install kuluttajaoikeus@claude-for-legal-finland` – [`./kuluttajaoikeus/`](./kuluttajaoikeus/)

Suomen kuluttajaoikeus elinkeinonharjoittajan ja kuluttajan välisessä kaupassa (kuluttajansuojalaki 38/1978): tavaran ja palvelun virhevastuu ja oikaisukeinot, etä- ja kotimyynnin peruuttamisoikeus ja tiedonantovelvollisuudet, sopimaton markkinointi sekä kuluttajariitojen ratkaisu (kuluttajariitalautakunta 8/2007 ja KKV 661/2012) ja kuluttajasaatavan hyvä perintätapa (513/1999). Pakottava kuluttajan hyväksi.

| Skill | Kuvaus |
|---|---|
| [`etamyynti-ja-peruuttaminen`](kuluttajaoikeus/skills/etamyynti-ja-peruuttaminen/SKILL.md) | Etä- ja kotimyynnin tiedonantovelvollisuudet ja kuluttajan peruuttamisoikeus (kuluttajansuojalaki 38/1978) sekä sopimaton ja harhaanjohtava markkinointi. Käytä tätä skilliä, kun arvioidaan verkkokaupan tai puhelinmyynnin ennakkotietoja, pe… |
| [`kuluttajakaupan-virhevastuu`](kuluttajaoikeus/skills/kuluttajakaupan-virhevastuu/SKILL.md) | Kuluttajan oikeudet tavaran tai palvelun virhetilanteessa (kuluttajansuojalaki 38/1978). Käytä tätä skilliä, kun kuluttaja reklamoi viallisesta tuotteesta tai palvelusta, arvioidaan onko kyseessä virhe, valitaan oikaisukeino (korjaus, vaih… |
| [`kuluttajariita-ja-perinta`](kuluttajaoikeus/skills/kuluttajariita-ja-perinta/SKILL.md) | Kuluttajariidan ratkaisukanavat ja kuluttajasaatavan hyvä perintätapa (laki kuluttajariitalautakunnasta 8/2007, laki Kilpailu- ja kuluttajavirastosta 661/2012 ja laki saatavien perinnästä 513/1999). Käytä tätä skilliä, kun kuluttaja vie ri… |

## Rikosoikeus (aineellinen)

`/plugin install rikosoikeus@claude-for-legal-finland` – [`./rikosoikeus/`](./rikosoikeus/)

Suomen aineellinen rikosoikeus (rikoslaki 39/1889): rikosvastuun yleiset edellytykset (laillisuusperiaate, tahallisuus ja tuottamus, vastuuvapausperusteet, osallisuus, yritys), keskeisten rikostyyppien tunnusmerkistöt ja tekomuodot sekä rangaistuksen määrääminen, menettämisseuraamus ja vanhentuminen. Täydentää rikosprosessi-plugaria. Palvelee puolustusta, asianomistajaa ja compliancea; ei avusta rikoksen tekemisessä eikä peittelyssä.

| Skill | Kuvaus |
|---|---|
| [`keskeiset-rikostyypit`](rikosoikeus/skills/keskeiset-rikostyypit/SKILL.md) | Keskeisten rikostyyppien tunnusmerkistöt ja rajanvedot Suomen rikosoikeudessa (rikoslaki 39/1889, erityisosa). Käytä tätä skilliä, kun jäsennetään mihin rikosnimikkeeseen teko mahdollisesti sopii, erotetaan perus-, törkeä- ja lievä tekomuo… |
| [`rangaistuksen-maaraaminen`](rikosoikeus/skills/rangaistuksen-maaraaminen/SKILL.md) | Rangaistuksen ja muiden seuraamusten määrääminen Suomen rikosoikeudessa (rikoslaki 39/1889). Käytä tätä skilliä, kun arvioidaan rangaistuslajia ja -asteikkoa, rangaistuksen mittaamista koventamis- ja lieventämisperusteineen, ehdollisen ja… |
| [`rikosvastuun-perusteet`](rikosoikeus/skills/rikosvastuun-perusteet/SKILL.md) | Rikosvastuun yleiset edellytykset Suomen rikosoikeudessa (rikoslaki 39/1889, yleinen osa). Käytä tätä skilliä, kun arvioidaan täyttyykö rikoksen tunnusmerkistö, onko teko tahallinen vai tuottamuksellinen, onko vastuuvapausperustetta (hätäv… |

## Kaksikielisyys (FI/SV)

`/plugin install kaksikielisyys@claude-for-legal-finland` – [`./kaksikielisyys/`](./kaksikielisyys/)

Suomi–ruotsi-kaksikielisyyden tuki juridisessa työssä: oikeuskielen kääntäminen ja vakiintunut termistö FI↔SV virallisista lähteistä (Finlexin rinnakkaistekstit, valtioneuvoston termipankki) sekä kielelliset oikeudet ja viranomaisen kielelliset velvoitteet (kielilaki 423/2003, perustuslaki 731/1999 17 §, julkisyhteisöjen kielitaitolaki 424/2003 ja saamen kielilaki 1086/2003). Termiä ei keksitä; virallinen käännös auktorisoidulta kääntäjältä.

| Skill | Kuvaus |
|---|---|
| [`kielelliset-oikeudet-ja-velvoitteet`](kaksikielisyys/skills/kielelliset-oikeudet-ja-velvoitteet/SKILL.md) | Kielelliset oikeudet ja viranomaisen kielelliset velvoitteet Suomessa (kielilaki 423/2003 ja perustuslaki 731/1999 17 §). Käytä tätä skilliä, kun arvioidaan millä kielellä viranomaisessa saa asioida, mitä käännös-, tiedoksianto- ja palvelu… |
| [`oikeuskielen-kaantaminen`](kaksikielisyys/skills/oikeuskielen-kaantaminen/SKILL.md) | Juridisen tekstin kääntäminen suomen ja ruotsin välillä (FI↔SV) vakiintunutta oikeustermistöä ja virallisia lähteitä käyttäen. Käytä tätä skilliä, kun käännetään tai tarkistetaan sopimusta, päätöstä, kirjelmää tai säädösviittausta suomesta… |

---

*Päivitä tämä tiedosto ajamalla `node scripts/generate-skills-md.mjs`.*
