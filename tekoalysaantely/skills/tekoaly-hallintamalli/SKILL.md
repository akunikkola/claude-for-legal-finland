---
name: tekoaly-hallintamalli
description: >
  Organisaation tekoälyn hallintamallin ja tekoälypolitiikan laatiminen EU:n
  tekoälyasetuksen (EU 2024/1689) toteuttamiseksi: periaatteet, roolit ja vastuut,
  tekoälylukutaito (4 art), järjestelmien elinkaari hankinnasta käytöstä poistoon,
  suuririskisten järjestelmien käyttöönottajan prosessit (26 art), toimittajavaatimukset,
  henkilöstön käyttöohje sekä poikkeamat ja seuranta. Käytä tätä skilliä, kun käyttäjä
  haluaa laatia tekoälypolitiikan, AI governance -mallin, tekoälyn käyttöohjeen
  henkilöstölle tai tekoälylukutaito-ohjelman, määrittää tekoälyn vastuut, tai mainitsee
  hallintamallin, VAHTI-mallin tai ISO/IEC 42001:n.
---

# Tekoälyn hallintamalli ja tekoälypolitiikka

Tämä skill rakentaa organisaatiolle tekoälyn hallintamallin, joka kytkee
tekoälyasetuksen velvoitteet arjen prosesseihin. Lähtötieto on tekoälyrekisteri: malli
mitoitetaan sen mukaan, mitä järjestelmiä organisaatiolla on ja missä roolissa.

> **Vastuuvapaus:** hallintamalli on tarkistettava luonnos, ei oikeudellista neuvontaa.
> Katso `tekoalysaantely/CLAUDE.md`. Perusteet: `../tekoaly-luokittelu/references/ai-act-perusteet.md`.

> **Pohja:** [`pohjat/tekoalyn-hallintamalli.md`](../../pohjat/tekoalyn-hallintamalli.md) —
> hallintamallin ja politiikan rakenteellinen luuranko.
> Konventiot: [`references/mallipohjat-standardi.md`](../../../references/mallipohjat-standardi.md).

## Lähteet

- **Velvoitteet:** `euaiact_get_obligations` roolin ja riskiluokan mukaan; artiklat
  `euaiact_get_article`-työkalulla. Älä listaa velvoitteita muistista.
- **Kansallinen laki 1377/2025:** käyttöönottajan seuraamusmaksuperusteet (18 §) kertovat,
  mitkä prosessit valvoja todennäköisimmin tarkastaa.
- **Rinnakkaisaineistot, joihin viitataan mutta joita ei kopioida:**
  - DVV:n VAHTI-materiaalit: tekoälyn hallintamalli ja tarkistuslista sekä
    "Tekoälyn käyttöönottajan velvollisuudet" (kehittajille.suomi.fi). Tehty
    julkishallinnolle, käyttökelpoinen rakenteen vertailukohtana myös yrityksille.
  - **ISO/IEC 42001** on vapaaehtoinen tekoälyn johtamisjärjestelmästandardi. Se tukee
    hallintaa, mutta ei sellaisenaan osoita tekoälyasetuksen vaatimustenmukaisuutta.

---

## Työnkulku

### 1. Lähtötiedot
Varmista, että tekoälyrekisteri on olemassa (`tekoaly-kartoitus`). Jos ei ole, kokoa
vähintään lista järjestelmistä, rooleista ja riskiluokista ennen mallin laatimista.
Selvitä organisaation koko, toimiala ja olemassa olevat hallintarakenteet (tietoturva,
tietosuoja, riskienhallinta, sisäinen valvonta), joihin malli kytketään.

### 2. Rakenna malli osa kerrallaan
Käy pohjan osat läpi ja mitoita ne rekisterin mukaan. Pienellä organisaatiolla, jolla on
vain minimaalisen riskin työkaluja, riittää kevyt malli: politiikka, vastuuhenkilö,
lukutaito, käyttöohje ja rekisteri. Suuririskiset järjestelmät edellyttävät osan 6
prosessit.

**Tekoälylukutaito (4 art)** koskee jokaista tarjoajaa ja käyttöönottajaa. Koontiasetuksen
jälkeen velvoite on toteuttaa toimenpiteitä, joilla tuetaan henkilöstön ja muiden
organisaation puolesta tekoälyä käyttävien lukutaidon kehittämistä. Huomioon otetaan
tekninen tietämys, kokemus, koulutus, käyttöyhteys ja henkilöt, joihin järjestelmiä
käytetään. Tiettyä tasoa ei tarvitse taata, mutta toimenpiteet kannattaa dokumentoida.
Komissio julkaisee käytännön esimerkkejä.

**Suuririskisten järjestelmien käyttöönottajan prosessit (26 art)** — kirjaa jokaiselle
vastuuhenkilö ja menettely:
- käyttö tarjoajan käyttöohjeiden mukaisesti (1 kohta),
- ihmisen valvonta henkilöille, joilla on pätevyys, koulutus ja valtuudet (2 kohta),
- syöttötietojen merkityksellisyys ja edustavuus, siltä osin kuin ne ovat organisaation
  hallinnassa (4 kohta),
- toiminnan seuranta, riskeistä ilmoittaminen ja käytön keskeyttäminen sekä vakavista
  vaaratilanteista ilmoittaminen tarjoajalle ja markkinavalvontaviranomaiselle (5 kohta),
- lokitietojen säilyttäminen vähintään kuusi kuukautta, ellei muu laki toisin säädä
  (6 kohta),
- **työntekijöiden edustajille ja työntekijöille ilmoittaminen ennen käyttöönottoa
  työpaikalla** (7 kohta). Kytke yhteistoimintamenettelyyn → `tyooikeus:yhteistoiminta`.
  Laiminlyönti on Suomessa seuraamusmaksuperuste (1377/2025, 18 § 5 k).
- tarjoajan 13 artiklan tietojen käyttö DPIA:ssa (9 kohta),
- päätösten kohteena oleville henkilöille ilmoittaminen liitteen III järjestelmissä
  (11 kohta),
- yhteistyö viranomaisten kanssa (12 kohta),
- viranomaiskäyttöönottajilla rekisteröinti (8 kohta) ja tarvittaessa FRIA (27 art).

**Toimittajat ja hankinnat:** käytä pohjaa
[`pohjat/tekoalyhankinnan-vaatimukset.md`](../../pohjat/tekoalyhankinnan-vaatimukset.md)
toimittajavaatimuksiin ja tietopyyntöihin. Pyydä vähintään käyttöohjeet (13 art) ja suuririskisistä järjestelmistä
EU-vaatimustenmukaisuusvakuutus ja rekisteröintitieto. Jos organisaatio on tarjoaja ja
käyttää kolmannen osapuolen komponentteja tai malleja, 25 artiklan 4 kohta edellyttää
kirjallista sopimusta tarvittavista tiedoista ja avusta. Huomaa olennaisen muutoksen riski
(25 art): järjestelmän muokkaaminen voi tehdä käyttöönottajasta tarjoajan.

**Henkilöstön käyttöohje** ei ole tekoälyasetuksen nimenomainen vaatimus, mutta se on
käytännössä tärkein lukutaito- ja riskienhallintakeino: sallitut työkalut, luottamuksellisten
ja henkilötietojen käyttö, tuotosten tarkistaminen, avoimuus (→ `tekoaly-avoimuus`) ja
poikkeamista ilmoittaminen.

### 3. Raportoi
Tuota täytetty pohja ja erillinen lista avoimista kohdista (päätettävät asiat,
puuttuvat tiedot toimittajilta, `[varmista]`-merkinnät). Erota selvästi **lakisääteinen
velvoite** (artikla mainiten) ja **suositeltu hyvä käytäntö**, jotta organisaatio
näkee, mistä se voi joustaa.

## Mitä tämä skill EI tee

- **Ei hyväksy mallia.** Hallintamallin hyväksyy organisaation johto tai hallitus.
- **Ei kirjoita koulutussisältöä.** Määrittää lukutaito-ohjelman kohderyhmät, tavoitteet ja dokumentoinnin, ei koulutusmateriaalia.
- **Ei sertifioi.** Malli ei ole ISO/IEC 42001 -sertifiointi eikä vaatimustenmukaisuuden arviointi.
- **Ei korvaa tietoturva- tai tietosuojahallintaa.** Kytkeytyy niihin ja ohjaa niiden omiin prosesseihin.
- **Ei listaa velvoitteita muistista.** Velvoitteet haetaan MCP:stä ja kansallinen laki Finlexistä.

## Jatka tästä

- Tekoälyrekisteri hallintamallin pohjaksi → /tekoalysaantely:tekoaly-kartoitus
- Avoimuusvelvoitteet ja ilmoitustekstit → /tekoalysaantely:tekoaly-avoimuus
- Suuririskisen järjestelmän velvoitteet järjestelmäkohtaisesti → /tekoalysaantely:tekoaly-velvoitteet
- FRIA ja määräajat → /tekoalysaantely:tekoaly-vaatimustenmukaisuus
- Työntekijöiden informointi, tekninen valvonta ja muutosneuvottelut tekoälyn käyttöönotossa → /tyooikeus:yhteistoiminta
- Tekoälyjärjestelmän julkinen hankinta → /julkiset-hankinnat:hankinnan-suunnittelu
- DPIA ja henkilötietojen käsittely → /tietosuoja:tietosuoja-arviointi
