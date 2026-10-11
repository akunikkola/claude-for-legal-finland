# Pohja: tekoälyrekisteri

Rakenteellinen luuranko organisaation tekoälyjärjestelmien rekisterille. Käyttävä
skill: [`tekoaly-kartoitus`](../skills/tekoaly-kartoitus/SKILL.md).
Konventiot: [`references/mallipohjat-standardi.md`](../../references/mallipohjat-standardi.md).

<!-- ohje: riskiluokka, liitteen III kohta ja valvova viranomainen täytetään vain
     eu-ai-act-MCP:n luokituksen ja lain 1377/2025 tarkistuksen perusteella — ei
     muistista. Jos tietoa ei ole, jätä kenttä auki ja merkitse se avoimeksi.
     Rekisteri on elävä asiakirja: päivitä se, kun järjestelmä otetaan käyttöön,
     muuttuu tai poistuu. -->

---

## TEKOÄLYREKISTERI

### Organisaatio (pakollinen)

- Organisaatio ja Y-tunnus: [nimi, Y-tunnus]
- Toimiala: [toimiala]
- Kokoluokka: [pk-yritys / pieni midcap-yritys / muu — määritelmä tarkistettava]
- Julkisoikeudellinen laitos tai julkisia palveluja tuottava: [kyllä / ei]
  <!-- ohje: vaikuttaa FRIA-velvollisuuteen (27 art 1 kohta). -->
- Rekisterin vastuuhenkilö: [nimi, tehtävä]
- Päivitetty: [päivämäärä]

### Yhteenveto (pakollinen)

| Tunnus | Järjestelmä ja toimittaja | Käyttötarkoitus | Rooli | Riskiluokka | Peruste | 50 art | Henkilötiedot ja DPIA | FRIA | Valvoja (1377/2025) | Omistaja | Tila |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [AI-01] | [nimi, toimittaja] | [lyhyesti] | [tarjoaja / käyttöönottaja] | [kielletty / suuririskinen / rajoitettu / minimaalinen — MCP] | [artikla tai liitteen kohta] | [mikä kohta / ei] | [kyllä / ei; DPIA tehty?] | [tarvitaan / ei] | [viranomainen, pykälä] | [nimi] | [suunnitteilla / käytössä / poistettu] |

### Toimenpiteet (pakollinen)

| Toimenpide | Järjestelmät | Peruste | Vastuu | Määräaika |
|---|---|---|---|---|
| [esim. avoimuusilmoitus chatbottiin] | [AI-01] | [artikla — lähde] | [nimi] | [päivä — hae euaiact_check_deadlines] |

---

## JÄRJESTELMÄKORTTI [tunnus]

<!-- ohje: kopioi kortti jokaiselle järjestelmälle. -->

### Perustiedot (pakollinen)

- Nimi, versio ja toimittaja: [ ]
- Käytössä alkaen / suunniteltu käyttöönotto: [ ]
- Omistaja (liiketoiminta) ja tekninen yhteyshenkilö: [ ]
- Käytetäänkö omalla nimellä tai tavaramerkillä: [kyllä / ei]
  <!-- ohje: jos kyllä, organisaatio voi olla tarjoaja — ks. skillin vaihe 3. -->

### Käyttötarkoitus ja käyttöyhteys (pakollinen)

- Mihin järjestelmää käytetään: [ ]
- Ketkä käyttävät: [henkilöstöryhmät]
- Keihin käyttö kohdistuu: [asiakkaat, työntekijät, hakijat, muut; haavoittuvat ryhmät?]
- Tekeekö tai avustaako järjestelmä luonnollisia henkilöitä koskevia päätöksiä:
  [ei / avustaa / tekee — kuvaa]
- Ihmisen valvonta: [kuka tarkistaa tuotokset ja miten]

### Data (pakollinen)

- Syöttötiedot: [ ]
- Henkilötiedot: [kyllä / ei; erityiset henkilötietoryhmät?]
- Biometriset tiedot: [kyllä / ei]
- Tuottaako synteettistä sisältöä (teksti, kuva, ääni, video): [kyllä / ei]
- Tietojen sijainti ja siirrot: [ ]

### Luokitus (pakollinen)

- MCP-työkalu ja ajopäivä: [euaiact_classify_system / euaiact_assess_system, pvm]
- Tulos: [riskiluokka, liitteen kohta]
- Puuttuvat signaalit ja avoimet kysymykset: [ ]
- 6 artiklan 3 kohdan poikkeus: [ei sovelleta / arvioitu euaiact_assess_art6_3_exception — tulos]
- Valvova viranomainen: [viranomainen — 1377/2025 pykälä, tarkistettu Finlexistä pvm]

### Velvoitteet ja tila (pakollinen)

- Sovellettavat velvoitteet: [artiklat — euaiact_get_obligations]
- Jo kunnossa: [ ]
- Puuttuu: [ ]
- Toimittajalta tarvittavat tiedot: [käyttöohjeet (13 art), vaatimustenmukaisuusvakuutus,
  rekisteröinti, sopimusehdot]

### Tarkistukset *(valinnainen)*

| Päivä | Tarkistaja | Muutos |
|---|---|---|
| [ ] | [ ] | [ ] |

---

*Luonnos. Tarkistettava ennen käyttöä; ei oikeudellista neuvontaa.*
