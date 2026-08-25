# Tietosuoja — jaetut suojaukset ja toimintaperiaatteet

Tämän tiedoston ohjeet koskevat **jokaista** tämän plugarin skilliä. SKILL.md kertoo,
*mitä* tehdään; tämä tiedosto on **varaverkko**.

> **Suunnitteluperiaate:** tietosuojadoktriini kuuluu SKILL.md:hen ja referensseihin. Nämä suojaukset ovat henkivakuutus.

---

## Luonnos, jonka ihminen tarkistaa

Tietosuoja-arvio, seloste ja vastausluonnos ovat **tarkistettavia luonnoksia** — ei oikeudellista neuvontaa. Korkean riskin käsittely, arkaluonteiset tiedot, DPIA:t, kielteiset päätökset rekisteröidyn pyyntöihin ja tulkinnanvaraiset poikkeukset kuuluvat tietosuojavastaavan ja tarvittaessa juristin arvioon. Merkitse tällaiset `[varmista — tietosuojavastaavan/juristin arvioitava]`.

## Oikea sääntelykehys

- Sovellettava sääntely on **EU:n yleinen tietosuoja-asetus (EU) 2016/679 (GDPR)**, jota **tietosuojalaki (1050/2018)** täsmentää ja täydentää (vahvistettu lähteestä). Älä käsittele asiaa pelkästään kansallisena — GDPR on suoraan sovellettava.
- Älä viittaa **kumottuun henkilötietolakiin** (523/1999) voimassa olevana — se on kumottu tietosuojalailla.
- Työelämän käsittelyssä huomioi **laki yksityisyyden suojasta työelämässä (759/2004)**: pakottavaa, työnantajaa sitovaa sääntelyä; suostumus on heikko peruste työsuhteen epätasapainon vuoksi.

## Lähteestä, ei muistista

Tarkista kansallisen lain pykälät **`juristi`-plugarin `oikeustutkimus`-skillillä** (oik.ai/Finlex)
ja GDPR-artiklat EUR-Lexistä ennen viittausta. Älä keksi pykälä- tai artiklanumeroita.
Merkitse tarkistamaton viittaus `[muistinvarainen — tarkista]`.

## Arkaluonteiset tiedot ja korkea riski

Erityiset henkilötietoryhmät (9 art) ja rikostiedot (10 art): käsittely lähtökohtaisesti kielletty ilman nimenomaista poikkeusta. Nosta tämä aina esiin. Laaja arkaluonteisten tietojen käsittely, järjestelmällinen seuranta ja automaattinen päätöksenteko ovat DPIA-lippuja (35 art).

## Määräajat ja ilmoitukset

- Rekisteröidyn pyyntöihin: vastaus **kuukauden** kuluessa (jatko enintään 2 kk perustellusti).
- Tietoturvaloukkaus valvontaviranomaiselle **72 tunnin** kuluessa (33 art); korkean riskin loukkaus myös rekisteröidylle (34 art).
Älä esitä määräaikaa arviona — nämä ovat asetuksen kiinteitä määräaikoja.

## Anonymisointi ennen analyysiä

Kun käsiteltävä asiakirja sisältää henkilötietoja eikä niiden tarvitse päätyä mallille,
**anonymisoi ensin**. Suositeltu työkalu on **PII Shield** (ks. README): se korvaa
henkilötiedot paikkamerkeillä paikallisesti ennen kuin teksti lähtee mallille, ja palauttaa
oikeat tiedot jälkikäteen — *henkilötieto ei mene API:in*. Tämä toteuttaa tietojen
minimoinnin ja tukee turvallista jakamista.

> **Suomalaiset tunnisteet:** PII Shield **v2.2.0** (28.5.2026) tukee natiivisti suomalaisia
> tunnisteita — `FI_HETU` (henkilötunnus) ja `FI_BUSINESS_ID` (Y-tunnus). Varmista että
> käytössä on v2.2.0 tai uudempi. Automaattinen tunnistus ei silti ole 100 % — tarkista
> tulos, etenkin epätyypillisissä muotoiluissa.

## Jaetut standardit

Säädös-, oikeuskäytäntö- ja esityöviittauksissa noudata markkinapaikan jaettua lähdestandardia [`references/viittaustyyli.md`](../references/viittaustyyli.md): kolmiportainen varmuusmerkintä (Varmistettu / Tarkistettava / Älä käytä), lähdehierarkia ja ratkaisutunnusten oikeat muodot. Lyhyesti: kiinnitä lähde numeroon, älä esitä tarkistamatonta varmistettuna, äläkä koskaan väitä ratkaisun sisältöä ilman että olet tarkistanut ratkaisun lähteestä.

Vastuusta, ammattietiikasta (salassapito, esteellisyys, kuka saa edustaa) ja tietojenkäsittelystä (GDPR 28 art käsittelysopimus, anonymisointi ennen analyysiä): [`references/vastuu-ja-tietoturva.md`](../references/vastuu-ja-tietoturva.md). **Pelkkä disclaimer ei ole suoja** — suojan tuottavat lähteen varmistus, varmuusmerkintä, premissien tarkistus, negatiivirajaus ja ihmisen tarkistusportti.

## Käytäntöprofiili (valinnainen)

Organisaation rekisterit, tietosuojavastaavan tiedot ja vakiokäytännöt voi tallentaa tähän
otsikon `## Käytäntöprofiili` alle. Oletuksena tyhjä — älä keksi, vaan kysy käyttäjältä.
