---
name: tekoaly-kartoitus
description: >
  Organisaation tekoälyjärjestelmien kartoitus ja tekoälyrekisterin kokoaminen EU:n
  tekoälyasetuksen (asetus (EU) 2024/1689) toteuttamisen lähtökohdaksi: mitä tekoälyä
  yrityksessä on käytössä, missä roolissa (tarjoaja tai käyttöönottaja), mikä kunkin
  käyttötapauksen riskitaso on, kuka sitä valvoo ja mitkä toimet ovat kiireellisimpiä.
  Käytä tätä skilliä, kun käyttäjä haluaa aloittaa AI Act -työn, kartoittaa tai
  inventoida tekoälytyökalut, laatia tekoälyrekisterin tai AI-inventaarion, selvittää
  käyttötapausten riskitason koko organisaatiossa, tai kysyy mistä tekoälyasetuksen
  noudattaminen kannattaa aloittaa.
---

# Tekoälyjärjestelmien kartoitus ja tekoälyrekisteri

Tämä skill kokoaa organisaation tekoälyjärjestelmistä rekisterin ja priorisoidun
toimenpidelistan. Se on yrityksen tekoälyasetustyön ensimmäinen vaihe: velvoitteet
riippuvat järjestelmästä, roolista ja riskiluokasta, joten ilman kartoitusta niitä ei voi
kohdistaa.

> **Vastuuvapaus:** rekisteri ja luokitukset ovat tarkistettavia ensiarvioita, ei
> oikeudellista neuvontaa. Katso `tekoalysaantely/CLAUDE.md`.
> Perusteet: `../tekoaly-luokittelu/references/ai-act-perusteet.md`.

> **Pohja:** [`pohjat/tekoalyrekisteri.md`](../../pohjat/tekoalyrekisteri.md) —
> rekisterin yhteenvetotaulukko ja järjestelmäkortti.
> Konventiot: [`references/mallipohjat-standardi.md`](../../../references/mallipohjat-standardi.md).

## Käytä EU AI Act -MCP:tä jokaiselle järjestelmälle

- **`euaiact_classify_system`** — riskiluokka rakenteisin signaalein (ala, biometriikka,
  profilointi, haavoittuvat ryhmät, synteettinen sisältö, turvakomponentti).
- **`euaiact_assess_system`** — jäsennellyn järjestelmäprofiilin kokonaisarvio, joka erottaa
  luokituksen, velvoitteet ja puuttuvat tiedot. Käytä, kun järjestelmäkortti on täytetty.
- **`euaiact_assess_art6_3_exception`** — ennen kuin liitteen III järjestelmä merkitään
  "ei suuririskiseksi".
- **`euaiact_check_deadlines`** — priorisoinnin päivämäärät.

Älä luokittele muistista. Jos MCP ei ole käytettävissä, kokoa rekisteri ja signaalit, mutta
jätä riskiluokka-sarake tyhjäksi merkinnällä `[luokittelematta — MCP ei käytettävissä]`.

---

## Työnkulku

### 1. Rajaa kartoitus
Selvitä organisaation toimiala, koko (pk-yritys, pieni midcap-yritys vai suuri) ja onko se
julkisoikeudellinen laitos tai julkisia palveluja tuottava yksityinen. Nämä vaikuttavat
FRIA-velvollisuuteen, kevennyksiin ja valvovaan viranomaiseen.

Muistuta, että kaikki ohjelmisto ei ole tekoälyjärjestelmää. Määritelmä on tekoälyasetuksen
3 artiklan 1 alakohdassa, ja komissio on antanut sen soveltamisesta ohjeet (myös suomeksi).
Rajatapaukset merkitään `[varmista — tekoälyjärjestelmän määritelmä]`.

### 2. Etsi järjestelmät
Kysy järjestelmällisesti, koska tekoäly on usein piilossa. Käy läpi:
- **Hankitut palvelut:** ohjelmisto- ja SaaS-luettelo, joissa on tekoälyominaisuuksia
  (toimisto-ohjelmien avustajat, CRM, rekrytointi, asiakaspalvelu, kirjanpito, tietoturva).
- **Omat kehitykset ja integraatiot:** malli-API:t, chatbotit, automaatiot.
- **Henkilöstön omatoiminen käyttö:** yleiskäyttöiset chat-palvelut, kuvageneraattorit.
- **Toimittajien kautta tuleva tekoäly:** ulkoistetut palvelut, joissa toimittaja käyttää
  tekoälyä organisaation puolesta.

### 3. Täytä järjestelmäkortti
Kerää jokaisesta järjestelmästä pohjan kortin tiedot: käyttötarkoitus, käyttäjät ja
kohteet, käsitelläänkö henkilötietoja, tekeekö tai avustaako järjestelmä luonnollisia
henkilöitä koskevia päätöksiä, ihmisen valvonta ja kuka järjestelmän omistaa.

**Rooli ratkaisee velvoitteet.** Organisaatio on yleensä **käyttöönottaja**. Se on
**tarjoaja**, jos se kehittää järjestelmän tai saattaa sen markkinoille tai ottaa käyttöön
omalla nimellään tai tavaramerkillään, ja se voi muuttua tarjoajaksi muuttamalla
suuririskistä järjestelmää olennaisesti (25 art). Oman brändin chatbot toimittajan mallin
päällä on tyypillinen rajatapaus: merkitse `[varmista — rooli, 3 art 3 alakohta ja 25 art]`.

### 4. Luokittele ja tunnista valvoja
Kutsu MCP:tä jokaiselle järjestelmälle. Kirjaa rekisteriin:
- **Kielletty käytäntö?** Jos kyllä, nosta heti esiin (ks. CLAUDE.md). Huomaa erityisesti
  tunteiden tunnistus työpaikalla ja oppilaitoksissa.
- **Suuririskinen?** Liitteen III kohta tai liitteen I reitti. Merkitse 6 artiklan 3 kohdan
  poikkeus vain työkalun läpikäynnin perusteella.
- **Avoimuusvelvoite (50 art)?** Chatbotit, synteettinen sisältö, syväväärennökset,
  yleistä etua koskeva teksti, tunteentunnistus. → `tekoaly-avoimuus`.
- **Yleiskäyttöinen tekoälymalli?** Vain jos organisaatio itse tarjoaa mallia.
- **Valvova viranomainen** lain 1377/2025 3–5 §:n mukaan (taulukko perusteissa).
- **Kohdistuuko työntekijöihin?** Jos järjestelmä seuraa, arvioi tai ohjaa työntekijöitä,
  merkitse yhteistoimintavelvoitteet (1333/2021 16 § 2 mom 2 k; 759/2004 21 §) ja
  suuririskisessä järjestelmässä ilmoitus työntekijöiden edustajille ennen käyttöönottoa
  (26 art 7 kohta; 1377/2025 18 § 5 k). → `tyooikeus:yhteistoiminta`.

### 5. Priorisoi
Järjestä toimenpiteet sen mukaan, mitä sovelletaan jo ja mitä myöhemmin. Hae päivät
`euaiact_check_deadlines`-työkalulla ja esitä ne lähteineen. Tyypillinen järjestys:
1. Kielletyt käytännöt (lopetettava).
2. Tekoälylukutaito (4 art) koko organisaatiolle → `tekoaly-hallintamalli`.
3. Avoimuusvelvoitteet (50 art) → `tekoaly-avoimuus`.
4. Henkilötietojen käsittely ja DPIA → `tietosuoja:tietosuoja-arviointi`.
5. Suuririskiset järjestelmät: käyttöönottajan prosessit (26 art) ja tarvittaessa FRIA
   (27 art) → `tekoaly-velvoitteet`, `tekoaly-vaatimustenmukaisuus`.

### 6. Raportoi
Tuota täytetty rekisteripohja ja toimenpidelista (mitä, kuka, mihin mennessä, lähde).
Tarjoa tallentaa rekisterin yhteenveto plugarin CLAUDE.md:n `## Käytäntöprofiili`-osioon
(`juristi:kaytantoprofiili`), jotta seuraavat skillit tuntevat järjestelmät. Älä tallenna
ilman käyttäjän lupaa.

Viittaa julkishallinnon valmiisiin työkaluihin rinnakkaisaineistona: DVV:n VAHTI-materiaalien
"Organisaation AI-ratkaisuiden kartoitus" ja "Tekoälyjärjestelmän käyttötapauksen
riskitason määritys" (kehittajille.suomi.fi). Älä kopioi niiden sisältöä.

## Mitä tämä skill EI tee

- **Ei tee lopullista luokitusta.** Rekisterin riskiluokat ovat ensiarvioita, jotka asiantuntija vahvistaa.
- **Ei tarkasta järjestelmiä teknisesti.** Tiedot perustuvat käyttäjän ja toimittajien antamiin kuvauksiin.
- **Ei arvioi henkilötietojen käsittelyä.** GDPR-arvio ja DPIA tehdään tietosuoja-plugarissa.
- **Ei laadi tekoälypolitiikkaa eikä hallintamallia.** Kartoitus on niiden lähtötieto, ei korvike.
- **Ei tarkasta toimittajasopimuksia.** Tunnistaa, missä sopimusehtoja tarvitaan, ja ohjaa sopimukset-plugariin.
- **Ei keksi järjestelmiä.** Rekisteriin kirjataan vain käyttäjän vahvistamat järjestelmät; puuttuvat tiedot merkitään avoimiksi.

## Jatka tästä

- Yksittäisen järjestelmän tarkempi luokittelu → /tekoalysaantely:tekoaly-luokittelu
- Chatbotit, synteettinen sisältö ja muut avoimuusvelvoitteet → /tekoalysaantely:tekoaly-avoimuus
- Tekoälypolitiikka, vastuut, tekoälylukutaito ja käyttöönottajan prosessit → /tekoalysaantely:tekoaly-hallintamalli
- Suuririskisen järjestelmän velvoitteet → /tekoalysaantely:tekoaly-velvoitteet
- Määräajat, seuraamukset ja FRIA → /tekoalysaantely:tekoaly-vaatimustenmukaisuus
- Henkilötietojen käsittely ja DPIA → /tietosuoja:tietosuoja-arviointi
