---
name: tekoaly-avoimuus
description: >
  Tekoälyasetuksen (EU 2024/1689) 50 artiklan avoimuusvelvoitteiden toteuttaminen:
  miten käyttäjälle kerrotaan tekoälyn kanssa asioinnista (chatbot, ääniavustaja,
  tekoälyagentti), miten tekoälyllä tuotettu sisältö merkitään koneellisesti
  luettavasti, milloin syväväärennös tai yleistä etua koskeva teksti on ilmoitettava,
  ja tunteentunnistuksesta kertominen. Käytä tätä skilliä, kun käyttäjä kysyy pitääkö
  tai miten tekoälyn käytöstä kerrotaan, miten tekoälysisältö merkitään, tarvitaanko
  vesileima, deepfake-merkintä tai ilmoitus tekoälyllä tuotetusta tekstistä, tai
  mainitsee avoimuusvelvoitteen, 50 artiklan tai Traficomin avoimuusohjeen.
---

# Avoimuusvelvoitteet (tekoälyasetus 50 art)

Tämä skill käy läpi, mitkä 50 artiklan velvoitteet koskevat organisaation
tekoälyjärjestelmää tai -sisältöä, ja tuottaa järjestelmäkohtaisen toimenpidelistan sekä
luonnoksen ilmoitustekstistä. Avoimuusvelvoitteita sovelletaan jo, joten tämä on
useimmille yrityksille ajankohtaisin osa tekoälyasetusta.

> **Vastuuvapaus:** tarkistettava ensiarvio, ei oikeudellista neuvontaa. Katso
> `tekoalysaantely/CLAUDE.md`. Perusteet: `../tekoaly-luokittelu/references/ai-act-perusteet.md`.

## Lähteet

- **50 artikla:** hae artiklan tiivistelmä ja EUR-Lex-linkki `euaiact_get_article`-
  työkalulla (`article: 50`). Soveltamispäivät `euaiact_check_deadlines`-työkalulla.
- **Traficomin ohje** "Milloin tekoälyn käytöstä pitää kertoa?" (traficom.fi/fi/tekoalyn-saantely)
  — suomenkielinen tulkintaohje esimerkkeineen ja poikkeuksineen.
- **Komission suuntaviivat** avoimuusvelvoitteista ja **käytännesäännöt** tekoälyn tuottaman
  sisällön avoimuudesta sekä EU:n kuvakkeet tekoälysisällön merkitsemiseen
  (digital-strategy.ec.europa.eu).
- **Valvonta:** Traficom valvoo 50 artiklaa (laki 1377/2025, 5 §). Suuririskisen järjestelmän
  tarjoajan ja käyttöönottajan avoimuusvelvoitteita valvoo kuitenkin kyseisen järjestelmän
  markkinavalvontaviranomainen (5 § 2 mom). Seuraamusmaksuperusteet: 22 §.

Jos lähteitä ei voi tarkistaa, kerro se äläkä esitä soveltamispäivää tai poikkeusta
varmistettuna.

---

## Työnkulku

### 1. Tunnista järjestelmä ja rooli
Kysy, mitä järjestelmä tekee ja onko organisaatio sen **tarjoaja** vai **käyttöönottaja**.
Velvoitteet jakautuvat roolin mukaan: 1 ja 2 kohta koskevat tarjoajaa, 3 ja 4 kohta
käyttöönottajaa. Oman brändin chatbot toimittajan mallin päällä voi tehdä organisaatiosta
tarjoajan: merkitse `[varmista — rooli, 3 art 3 alakohta]`. Sama organisaatio voi olla
molempia.

### 2. Käy kohdat läpi

| Kohta | Kenelle | Mitä vaaditaan | Tarkista poikkeukset |
|---|---|---|---|
| **50(1)** vuorovaikutus | tarjoaja | Järjestelmä suunnitellaan niin, että henkilölle kerrotaan hänen olevan vuorovaikutuksessa tekoälyn kanssa | Ei tarvita, jos asia on ilmeinen suhteellisen valistuneelle, tarkkaavaiselle ja huolelliselle henkilölle |
| **50(2)** synteettinen sisältö | tarjoaja | Tuotokset merkitään koneellisesti luettavasti ja tunnistettaviksi keinotekoisesti tuotetuiksi | Vakiomuokkaamisen avustaminen; syöttödataa tai sen merkitystä olennaisesti muuttamaton käsittely. Ennen 2.8.2026 markkinoille saatetuilla lisäaika (111 art 4 kohta) |
| **50(3)** tunteentunnistus ja biometrinen luokittelu | käyttöönottaja | Järjestelmälle altistuville kerrotaan sen toiminnasta; henkilötiedot käsitellään GDPR:n mukaisesti | **Tarkista ensin 5 artikla**: tunteiden tunnistus työpaikalla ja oppilaitoksissa on kielletty (lääketieteellisiä ja turvallisuussyitä lukuun ottamatta) |
| **50(4)** syväväärennös | käyttöönottaja | Kuva-, ääni- tai videosisällöstä ilmoitetaan, että se on keinotekoisesti tuotettu tai manipuloitu | Selvästi taiteellinen, luova, satiirinen tai fiktiivinen teos: ilmoitus tavalla, joka ei haittaa teosta |
| **50(4)** yleistä etua koskeva teksti | käyttöönottaja | Yleisölle yleistä etua koskevista asioista tiedottamaan julkaistavasta tekstistä ilmoitetaan, että se on tuotettu tekoälyllä | Ei tarvita, jos teksti on käynyt läpi ihmisen arvioinnin tai toimituksellisen valvonnan **ja** jollakulla on toimituksellinen vastuu julkaisusta |

Kaikissa kohdissa on lisäksi lainvalvontaa koskevia poikkeuksia, jotka harvoin koskevat
yrityksiä.

Traficomin ohjeen tulkintoja, jotka kannattaa nostaa esiin `[varmista ohjeesta]`:
- Pelkkä käyttöehdoissa mainitseminen tai näkymätön tekninen merkintä ei yleensä riitä
  vuorovaikutusilmoitukseksi.
- Kieliasun, luettavuuden tai esitystavan parantaminen merkitystä muuttamatta ei
  laukaise velvoitteita; käännökset, tiivistelmät ja sisällön lisääminen tai poistaminen
  yleensä laukaisevat.
- Kielioppikorjaus ei ole 4 kohdan tarkoittamaa ihmisen arviointia; tarkistuksen on
  kohdistuttava sisältöön.

### 3. Tarkista ilmoituksen muoto (50 art 5 kohta)
Tieto on annettava **selkeästi ja selvästi erottuvasti viimeistään ensimmäisen
vuorovaikutuksen tai altistumisen yhteydessä**, ja sen on täytettävä
esteettömyysvaatimukset. Huomioi kohderyhmät (lapset, ikääntyneet, vammaiset henkilöt).
Pitkissä tai arkaluonteisissa keskusteluissa muistutus voi olla tarpeen.

### 4. Muista rinnakkaiset velvoitteet
- **50 art 6 kohta:** 50 artikla ei korvaa muita avoimuusvelvoitteita.
- **26 art 11 kohta:** liitteen III suuririskisen järjestelmän käyttöönottajan on kerrottava
  henkilöille, joita koskevia päätöksiä järjestelmä tekee tai avustaa → `tekoaly-velvoitteet`.
- **GDPR 13–14 ja 22 art:** informointi ja automaattiset päätökset → `tietosuoja`-plugari.
- **Kuluttajansuoja ja markkinointi:** harhaanjohtavuuden kielto → `kuluttajaoikeus`-plugari.

### 5. Raportoi
Tuota järjestelmäkohtainen taulukko: kohta, koskeeko (kyllä / ei / rajatapaus), rooli,
nykytila, toimenpide ja lähde. Liitä tarvittaessa **luonnos ilmoitustekstistä** suomeksi
(ja ruotsiksi tai englanniksi, jos palvelu on monikielinen), esimerkiksi:
`[Keskustelet tekoälyavustajan kanssa. Voit pyytää yhteyttä asiakaspalvelijaan.]`.
Merkitse luonnos tarkistettavaksi. Avoimet tulkinnat `[varmista — asiantuntijan arvioitava]`.

## Mitä tämä skill EI tee

- **Ei toteuta teknistä merkintää.** Vesileimat, metatiedot ja alkuperätiedot ovat teknisiä ratkaisuja, joiden riittävyys arvioidaan standardien ja käytännesääntöjen valossa.
- **Ei ratkaise roolia oletuksella.** Jos tarjoaja- ja käyttöönottajarooli on epäselvä, se merkitään tarkistettavaksi.
- **Ei arvioi kiellettyjä käytäntöjä tai suuririskisyyttä.** Jos tunteentunnistus tai muu kielletty käyttö nousee esiin, ohjaa luokitteluun.
- **Ei korvaa GDPR-informointia.** Tietosuojaseloste laaditaan tietosuoja-plugarissa.
- **Ei esitä soveltamispäivää muistista.** Päivät haetaan MCP:stä.

## Jatka tästä

- Kuuluuko järjestelmä kiellettyihin tai suuririskisiin → /tekoalysaantely:tekoaly-luokittelu
- Kaikkien järjestelmien kartoitus kerralla → /tekoalysaantely:tekoaly-kartoitus
- Avoimuus osaksi organisaation tekoälypolitiikkaa → /tekoalysaantely:tekoaly-hallintamalli
- Tietosuojaseloste ja informointi → /tietosuoja:tietosuojaseloste
