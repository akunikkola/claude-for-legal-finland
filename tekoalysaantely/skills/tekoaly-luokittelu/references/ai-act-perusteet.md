# EU:n tekoälyasetus — perusteet ja Suomi-kerros

Tiivistelmä luokittelun ja velvoitteiden kannalta keskeisistä asioista. **Tarkista
artiklat `eu-ai-act`-MCP:n työkalulla `euaiact_get_article` (EUR-Lex-linkit) ja kansallinen
laki `juristi:oikeustutkimus`-skillillä ennen kuin nojaat niihin.** Tiedosto on tarkistettu
lähteistä 11.10.2026: asetus (EU) 2026/1744 EUR-Lexistä (suomenkielinen EUVL-teksti) ja
laki 1377/2025 Finlexistä.

## Sovellettava sääntely

- **Tekoälyasetus, asetus (EU) 2024/1689** — suoraan sovellettava EU-asetus.
- **Tekoälyä koskeva digitaalialan koontiasetus, asetus (EU) 2026/1744** ("Digital Omnibus
  on AI") — muuttaa tekoälyasetusta. Julkaistu EUVL:ssä 24.7.2026, voimassa 27.7.2026.
  **Voimassa olevaa lakia, ei ehdotus.** Käytä konsolidoitua tekstiä.
- **Laki eräiden tekoälyjärjestelmien valvonnasta (1377/2025)** — kansallinen täydentävä laki,
  voimassa 1.1.2026 (HE 46/2025 vp). Valvontaviranomaiset, seuraamusmaksulautakunta,
  seuraamusmaksun perusteet ja muutoksenhaku.

Soveltaminen on **vaiheittaista** (2025–2030). Hae päivämäärät `euaiact_check_deadlines`-
työkalulla. Koontiasetuksen keskeiset ajoitusmuutokset (asetuksen (EU) 2026/1744 1 artiklan
39 ja 40 kohta, joilla muutettiin tekoälyasetuksen 111 ja 113 artiklaa):

| Mitä | Milloin | Peruste |
|---|---|---|
| Liitteen III suuririskiset järjestelmät (6 art 2 kohta) | 2.12.2027 | 113 art 3 kohdan c alakohdan i alakohta |
| Liitteen I suuririskiset järjestelmät (6 art 1 kohta) | 2.8.2028 | 113 art 3 kohdan c alakohdan ii alakohta |
| Uudet kiellot 5 art 1 kohdan b a ja b b alakohta | 2.12.2026 | 113 art 3 kohdan a alakohta |
| 50 art 2 kohdan merkintä järjestelmille, jotka saatettu markkinoille ennen 2.8.2026 | 2.12.2026 | 111 art 4 kohta |
| Viranomaisten käyttöön tarkoitetut suuririskiset järjestelmät, viimeistään | 2.8.2030 | 111 art 2 kohta |

Muut 50 artiklan avoimuusvelvoitteet **eivät siirtyneet**, vaan niitä on sovellettu 2.8.2026
alkaen. Ennen III luvun soveltamispäivää markkinoille saatettuihin suuririskisiin
järjestelmiin sovelletaan asetusta vain, jos niiden rakenne muuttuu merkittävästi tämän
jälkeen (111 art 2 kohta). Taulukko on tarkistuspiste, ei korvike: **vahvista päivä aina
MCP:stä ennen kuin esität sen.**

## Riskiperusteinen kehys

- **Kielletyt käytännöt (5 art)** — esim. haitallinen manipulointi, haavoittuvuuksien
  hyväksikäyttö, sosiaalinen pisteytys, kohdentamaton kasvokuvien haravointi, tunteiden
  tunnistus työpaikalla ja oppilaitoksissa sekä tietyt biometrisen tunnistuksen käytöt.
  Koontiasetus lisäsi kiellot (sovelletaan 2.12.2026 alkaen): tunnistettavan henkilön
  intiimikuvien tai seksuaalisen sisällön tuottaminen ilman suostumusta (b a alakohta) ja
  lapsiin kohdistuvan seksuaalisen hyväksikäyttöaineiston tuottaminen (b b alakohta).
- **Suuririskiset järjestelmät (6 art)** — kaksi reittiä: liite I (säännellyn tuotteen
  turvakomponentti tai tuote) ja **liite III** (biometriikka, kriittinen infrastruktuuri,
  koulutus, työllistäminen, olennaiset palvelut, lainvalvonta, muuttoliike ja rajavalvonta,
  oikeudenkäyttö). Laajat velvoitteet (9–17 art tarjoajalle, 26–27 art käyttöönottajalle).
  - Koontiasetus kavensi **turvakomponentin** määritelmää (3 art 14 alakohta, 6 art 1 a–1 c
    kohta): pelkkä käyttäjätuki, suorituskyvyn optimointi, tehokkuus, automaatio,
    käyttömukavuus tai muu kuin turvallisuuteen liittyvä laadunvalvonta ei tee järjestelmästä
    turvakomponenttia.
  - **6 artiklan 3 kohdan poikkeus** ("ei merkittävää riskiä") ei koske profilointia tekeviä
    järjestelmiä. Tarjoajan on dokumentoitava arvionsa (6 art 4 kohta) ja rekisteröitävä
    järjestelmä (49 art 2 kohta). Koontiasetus kevensi rekisteröitävien tietojen sisältöä
    (liitteen VIII B jakson 7 ja 9 kohta poistettu), mutta rekisteröintivelvollisuus säilyi.
- **Rajoitettu riski (50 art)** — avoimuusvelvoitteet: vuorovaikutus tekoälyn kanssa on
  kerrottava, synteettinen sisältö merkittävä koneellisesti luettavasti, syväväärennökset ja
  yleistä etua koskevat tekstit ilmoitettava, tunteentunnistuksesta ja biometrisestä
  luokittelusta kerrottava. Traficomin ohje (20.8.2026) avaa poikkeukset, kuten ihmisen
  tarkastaman tekstin ja merkitystä muuttamattoman muokkauksen.
- **Minimaalinen riski** — ei erityisvelvoitteita.
- **Yleiskäyttöiset tekoälymallit (51–56 art)** — systeemisen riskin kynnys 10²⁵ FLOPs
  (`euaiact_check_gpai_systemic_risk`). Saman tarjoajan GPAI-malliin perustuvien
  järjestelmien valvonta on keskitetty tekoälytoimistolle.
- **Tekoälylukutaito (4 art)** — koskee kaikkia tarjoajia ja käyttöönottajia riskiluokasta
  riippumatta. Koontiasetus muotoili sen uudelleen: on toteutettava toimenpiteitä, joilla
  **tuetaan** henkilöstön tekoälylukutaidon kehittämistä käyttöyhteys ja kohderyhmät
  huomioiden. Tiettyä lukutaidon tasoa ei tarvitse taata. Velvoite ei poistunut.

## Keskeiset velvoitevälineet

- **Liite IV** — suuririskisen järjestelmän tekninen dokumentaatio (`euaiact_annex_iv_checklist`).
  Pk-yritykset ja pienet midcap-yritykset voivat käyttää komission yksinkertaistettua
  lomaketta (11 art 1 kohta).
- **FRIA, perusoikeuksia koskeva vaikutustenarviointi (27 art)** — julkisoikeudelliset
  käyttöönottajat ja julkisia palveluja tuottavat yksityiset sekä liitteen III 5 b
  (luottokelpoisuus) ja 5 c (henki- ja sairausvakuutuksen riskinarviointi ja hinnoittelu)
  -käyttöönottajat. Liitteen III kohta 2 (kriittinen infrastruktuuri) on vapautettu.
  Koontiasetuksen myötä FRIA:ssa voi **ristiinviitata DPIA:han** tai sisällyttää sen osia
  (27 art 4 kohta). Tekoälytoimiston kyselylomakemalli tukee tätä (27 art 5 kohta).
- **Vaatimustenmukaisuuden arviointi (43 art)** — pääosin sisäinen valvonta (liite VI);
  ilmoitetun laitoksen osallistuminen mm. liitteen III kohdan 1 biometriikkareitillä.
- **Arvoketju (25 art)** — käyttöönottajasta voi tulla tarjoaja. Koontiasetus täsmensi
  alkuperäisen tarjoajan yhteistyövelvollisuutta (25 art 2 kohta) ja kirjallisen sopimuksen
  vaatimusta komponenttitoimittajan kanssa (25 art 4 kohta).
- **Seuraamukset (99 art + 1377/2025)** — enimmäismäärät `euaiact_calculate_penalty`-
  työkalulla. Pk-yrityksille ja nyt myös **pienille midcap-yrityksille** sovelletaan
  alempaa vaihtoehtoa (99 art 6 ja 6 a kohta). Suomessa seuraamusmaksun määrää
  seuraamusmaksulautakunta (1377/2025, 13 ja 23 §).

## Suhde GDPR:ään

Tekoälyasetus ja tietosuoja-asetus ovat **rinnakkaisia**. Profilointi ja automaattinen
päätöksenteko (GDPR 22 art), DPIA (35 art) ja erityiset henkilötietoryhmät (9 art) tulevat
usein samaan aikaan arvioitaviksi. Koontiasetuksen uusi 4 a artikla sallii suuririskisen
järjestelmän tarjoajalle erityisten henkilötietoryhmien käsittelyn vinoutumien havaitsemiseksi
ja korjaamiseksi tiukoin edellytyksin. → `tietosuoja`-plugari.

## Suomi-kerros: laki 1377/2025

Tarkista pykälät Finlexistä ennen kuin nojaat niihin. Huom: ainakin yksi MCP-lähde on
palauttanut 3 §:n 2 momentin ilman 6 kohtaa (Finanssivalvonta); Finlexin teksti on ratkaiseva.

**Markkinavalvontaviranomaiset**
- **Tietosuojavaltuutettu:** kielletyt käytännöt (4 §); liitteen III kohdat 1, 3, 4, 6–8 ja
  5 b, ellei kyse ole Fivan valvottavasta (3 § 2 mom 4 k).
- **Traficom:** 50 artiklan avoimuusvelvoitteet (5 §; suuririskisten järjestelmien osalta
  kuitenkin 3 §:n viranomainen), keskitetty yhteyspiste (6 §), kriittinen digitaalinen
  infrastruktuuri ja tieliikenne (3 § 2 mom 3 k).
- **Finanssivalvonta:** liitteen III 5 c; 5 a työttömyys- ja vakuutuskassoissa,
  vahinkovakuutusyhtiöissä ja eläkelaitoksissa; 5 b, kun käyttöönottaja on Fivan valvottava
  (3 § 2 mom 6 k). Ilmoittaa EKP:lle (7 §).
- **Lupa- ja valvontavirasto:** liitteen III 5 a ja d (3 § 2 mom 5 k); työsuojelun tuotteet
  liitteessä I (3 § 1 mom 4 k).
- **Energiavirasto, Tukes:** kriittinen infrastruktuuri energia- ja vesihuollossa
  (3 § 2 mom 1–2 k); Tukes, Tulli, Traficom ja Fimea liitteen I tuotteissa (3 § 1 mom).

**Seuraamusmaksu**
- Määrää tekoälyjärjestelmien valvonnan seuraamusmaksulautakunta Traficomin yhteydessä
  markkinavalvontaviranomaisen esityksestä (13 §).
- Seuraamusmaksuperusteet rooleittain: tarjoaja (14 §), valtuutettu edustaja (15 §),
  maahantuoja (16 §), jakelija (17 §), käyttöönottaja (18 §), ilmoitettu laitos (19 §),
  virheelliset tiedot (20 §), kielletyt käytännöt (21 §), avoimuusvelvoitteet (22 §).
- Käyttöönottajan seuraamusmaksuperusteisiin kuuluu mm. lokitietojen säilyttäminen ja
  työntekijöiden edustajille ilmoittaminen ennen käyttöönottoa (18 §).
- Ei määrätä, jos rikkominen on vähäinen tai maksu ilmeisen kohtuuton. Ei myöskään valtion
  tai kunnan viranomaisille, hyvinvointialueille ja muille 24 §:n 3 momentissa luetelluille.
  Vanhentuu viidessä vuodessa (24 §).
- Tarjoajan tai valtuutetun edustajan on huolehdittava 18 artiklan asiakirjojen saatavuudesta
  10 vuoden ajan myös liiketoiminnan päättyessä (26 §).

**Avoin kohta:** koontiasetus poisti liitteen I A-jakson kohdan 1 (konedirektiivi) ja siirsi
koneasetuksen (EU) 2023/1230 B-jaksoon. Lain 3 §:n 1 momentti viittaa A-jakson kohtaan 1
vanhan numeroinnin mukaan. `[varmista — liitteen I numerointi muuttunut asetuksella (EU) 2026/1744]`

## Viranomaisohjeet ja työkalut (viittaa, älä kopioi)

- **Traficom:** toimijoiden velvollisuudet sekä ohje "Milloin tekoälyn käytöstä pitää
  kertoa?" (50 art) — traficom.fi/fi/tekoalyn-saantely.
- **DVV / VAHTI:** tekoälyn hallintamalli ja tarkistuslista sekä käyttöönoton työkalut
  (AI-ratkaisujen kartoitus, käyttötapauksen riskitaso, käyttöönottajan velvollisuudet,
  FRIA, DPIA:n tekoälylisäkysymykset, hankinnan tsekkilista, yhteistoimintakäsittely) —
  kehittajille.suomi.fi. Tehty julkishallinnolle, käyttökelpoinen pohjana myös yrityksille.
  Uudelleenkäytön ehtoja ei ole ilmoitettu.
- **Komissio:** AI Act Service Desk ja Compliance Checker (ai-act-service-desk.ec.europa.eu);
  ohjeet tekoälyjärjestelmän määritelmästä ja kielletyistä käytännöistä (myös suomeksi).

Huomioi myös toimialakohtainen valvonta (rahoitusala, terveydenhuolto, työsuojelu).
