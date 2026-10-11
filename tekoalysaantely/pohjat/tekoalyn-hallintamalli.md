# Pohja: tekoälyn hallintamalli ja tekoälypolitiikka

Rakenteellinen luuranko organisaation tekoälyn hallintamallille. Käyttävä skill:
[`tekoaly-hallintamalli`](../skills/tekoaly-hallintamalli/SKILL.md).
Konventiot: [`references/mallipohjat-standardi.md`](../../references/mallipohjat-standardi.md).

<!-- ohje: osien pakollisuus riippuu organisaation tekoälyrekisteristä. Osa 6 on
     pakollinen vain, jos organisaatio ottaa käyttöön suuririskisiä
     tekoälyjärjestelmiä. Merkitse jokaiseen vaatimukseen, onko se lakisääteinen
     (artikla — tarkistettu lähteestä) vai suositeltu käytäntö. Rinnakkaisaineistoja
     (VAHTI-hallintamalli, ISO/IEC 42001) käytetään vertailukohtana; niiden tekstiä ei
     kopioida. -->

---

## TEKOÄLYN HALLINTAMALLI

### 1. Tarkoitus ja soveltamisala (pakollinen)

- Organisaatio: [nimi]
- Mitä malli koskee: [kaikki tekoälyjärjestelmät, joita organisaatio tarjoaa tai käyttää]
- Hyväksyjä ja hyväksymispäivä: [hallitus / johtoryhmä, päivämäärä]
- Liittyvät ohjeet: [tietoturvapolitiikka, tietosuojapolitiikka, riskienhallinta]

### 2. Periaatteet (pakollinen)

<!-- ohje: lyhyet, organisaation omat periaatteet. Ei lakitekstiä. -->

- [esim. ihminen vastaa päätöksistä]
- [esim. tekoälyn käytöstä kerrotaan avoimesti]
- [esim. kiellettyjä käytäntöjä ei oteta käyttöön — 5 art]

### 3. Roolit ja vastuut (pakollinen)

| Rooli | Vastuu | Henkilö |
|---|---|---|
| Johto | [mallin hyväksyntä, resurssit, riskinottohalu] | [ ] |
| Tekoälyvastaava | [rekisteri, mallin ylläpito, raportointi] | [ ] |
| Järjestelmän omistaja | [järjestelmäkohtaiset velvoitteet, ihmisen valvonta] | [per järjestelmä — rekisteri] |
| Tietosuojavastaava | [DPIA, GDPR-yhteensovitus] | [ ] |
| Tietoturva | [tekoälyyn liittyvät uhat, lokit] | [ ] |
| Hankinta ja juridiikka | [toimittajavaatimukset, sopimukset] | [ ] |
| HR | [lukutaito, työntekijöiden informointi, yhteistoiminta] | [ ] |

### 4. Tekoälyrekisteri ja elinkaari (pakollinen)

- Rekisteri: [sijainti; ks. pohja `tekoalyrekisteri.md`]
- Ennen käyttöönottoa: [kartoitus, luokittelu, kielletyt käytännöt -tarkistus, DPIA-tarve,
  avoimuus, hyväksyntä]
- Käytön aikana: [seuranta, muutosten hallinta — olennainen muutos voi tehdä
  tarjoajaksi, 25 art]
- Käytöstä poisto: [lokien ja asiakirjojen säilytys]

### 5. Tekoälylukutaito (pakollinen)

<!-- ohje: 4 art koskee kaikkia tarjoajia ja käyttöönottajia. Velvoite on toteuttaa
     toimenpiteitä lukutaidon kehittämisen tukemiseksi; tiettyä tasoa ei tarvitse taata.
     Tarkista artiklan sanamuoto lähteestä. -->

| Kohderyhmä | Käyttöyhteys | Toimenpide | Toistuvuus | Dokumentointi |
|---|---|---|---|---|
| [kaikki työntekijät] | [yleiskäyttöiset työkalut] | [ ] | [ ] | [ ] |
| [järjestelmän valvojat] | [suuririskinen järjestelmä] | [ ] | [ ] | [ ] |

### 6. Suuririskisten järjestelmien käyttöönottajan prosessit *(valinnainen — pakollinen, jos käytössä suuririskisiä)*

| Velvoite (26 art) | Menettely | Vastuu |
|---|---|---|
| Käyttö käyttöohjeiden mukaan (1 kohta) | [ ] | [ ] |
| Ihmisen valvonta (2 kohta) | [kuka, pätevyys, valtuudet] | [ ] |
| Syöttötietojen laatu (4 kohta) | [ ] | [ ] |
| Seuranta, riski-ilmoitus ja keskeytys, vakavat vaaratilanteet (5 kohta) | [kenelle ja miten ilmoitetaan] | [ ] |
| Lokien säilytys (6 kohta) | [säilytysaika — tarkista lähteestä] | [ ] |
| Työntekijöiden informointi ennen käyttöönottoa (7 kohta; 1377/2025 18 §) | [yhteistoimintamenettely] | [ ] |
| DPIA tarjoajan tiedoin (9 kohta) | [ ] | [ ] |
| Päätösten kohteiden informointi (11 kohta) | [ ] | [ ] |
| FRIA (27 art), jos velvollinen | [pohja `fria.md`] | [ ] |

### 7. Avoimuus (pakollinen)

- Vuorovaikutusilmoitukset, sisällön merkintä ja muut 50 artiklan velvoitteet:
  [järjestelmäkohtaisesti — `tekoaly-avoimuus`-skill]

### 8. Toimittajat ja hankinnat (pakollinen)

- Toimittajalta pyydettävät tiedot: [pohja `tekoalyhankinnan-vaatimukset.md`]
- Sopimusehdot: [tarvittaessa 25 art 4 kohdan kirjallinen sopimus — tarkista lähteestä]

### 9. Henkilöstön tekoälyn käyttöohje (pakollinen)

<!-- ohje: suositeltu käytäntö, ei artiklavaatimus. -->

- Sallitut työkalut: [ ]
- Kielletyt käyttötavat: [ ]
- Luottamukselliset tiedot ja henkilötiedot: [ ]
- Tuotosten tarkistaminen: [ ]
- Tekoälyn käytöstä kertominen: [ ]

### 10. Poikkeamat ja vaaratilanteet (pakollinen)

- Mistä ilmoitetaan ja kenelle: [ ]
- Viranomaisilmoitukset: [markkinavalvontaviranomainen — 1377/2025, tarkista Finlexistä]

### 11. Seuranta ja päivitys (pakollinen)

- Katselmointi: [kuinka usein, kuka]
- Raportointi johdolle: [ ]

---

*Luonnos. Tarkistettava ennen käyttöä; ei oikeudellista neuvontaa.*
