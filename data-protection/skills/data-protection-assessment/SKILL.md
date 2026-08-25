---
name: data-protection-assessment
description: >
  Henkilötietojen käsittelyn tietosuoja-arviointi: käsittelyperuste, käsittelyn
  periaatteet ja vaikutustenarvioinnin (DPIA) tarve EU:n tietosuoja-asetuksen
  (2016/679) ja kansallisen tietosuojalain (1050/2018) mukaan. Käytä tätä skilliä,
  kun käyttäjä suunnittelee uutta henkilötietojen käsittelyä, järjestelmää, palvelua
  tai rekisteriä ja kysyy, saako tietoja käsitellä, millä perusteella, tarvitaanko
  vaikutustenarviointi (DPIA), onko kyse arkaluonteisista tiedoista, tai mainitsee
  GDPR:n, tietosuojan, henkilötiedot, rekisterinpitäjän, käsittelijän, suostumuksen,
  oikeutetun edun tai profiloinnin.
---

# Tietosuoja-arviointi — käsittelyperuste ja DPIA

Tämä skill arvioi henkilötietojen käsittelyn tietosuojavaatimukset: onko käsittelylle
laillinen peruste, noudatetaanko käsittelyn periaatteita ja tarvitaanko vaikutustenarviointi.
Sovellettava sääntely on **EU:n yleinen tietosuoja-asetus (EU) 2016/679 (GDPR)**, jota
**tietosuojalaki (1050/2018)** täsmentää ja täydentää kansallisesti. Työelämän käsittelyyn
sovelletaan lisäksi **lakia yksityisyyden suojasta työelämässä (759/2004)**.

> **Vastuuvapaus:** tämä on tarkistettava arvio, ei oikeudellista neuvontaa. Korkean
> riskin käsittely, arkaluonteiset tiedot ja DPIA:t kuuluvat tietosuojavastaavan ja
> tarvittaessa juristin arvioitaviksi. Katso `data-protection/AGENTS.md`.

Perusteet ja artiklat tiivistettynä: lue `references/data-protection-fundamentals.md`. Tarkista
kansallisen lain pykälät `legal-core`-plugarin `legal-research`-skillillä; GDPR-artiklat
EUR-Lexistä.

---

## Vaihe 1: Kuvaa käsittely

Selvitä:
1. **Mitä henkilötietoja** käsitellään ja keneltä (rekisteröityjen ryhmät)?
2. **Mihin tarkoitukseen** ja mikä on käsittelyn konteksti?
3. **Kuka on rekisterinpitäjä** ja onko käsittelijöitä (alihankkijat, pilvipalvelut)?
4. **Siirretäänkö tietoja EU/ETA:n ulkopuolelle?**
5. **Onko kyse arkaluonteisista (erityisistä) tiedoista** (terveys, etninen alkuperä, vakaumus, ay-jäsenyys, biometriset/geneettiset tiedot, seksuaalinen suuntautuminen) tai rikostiedoista?

## Vaihe 2: Määritä käsittelyperuste (GDPR 6 art)

Jokaisella käsittelyllä on oltava vähintään yksi peruste:
- **Suostumus** (6(1)(a)) — vapaaehtoinen, yksilöity, tietoinen, peruutettavissa. Heikko peruste työsuhteessa (epätasapaino).
- **Sopimus** (6(1)(b)) — käsittely tarpeen sopimuksen täyttämiseksi.
- **Lakisääteinen velvoite** (6(1)(c)).
- **Elintärkeä etu** (6(1)(d)).
- **Yleinen etu / julkinen valta** (6(1)(e)) — viranomaistoiminta.
- **Oikeutettu etu** (6(1)(f)) — edellyttää tasapainotestiä; ei sovellu viranomaisen tehtävien hoitoon.

**Arkaluonteiset tiedot (9 art):** käsittely lähtökohtaisesti kielletty, ellei jokin 9(2) poikkeus sovellu (esim. nimenomainen suostumus, työoikeuden velvoitteet, tärkeä yleinen etu). Tarkista myös tietosuojalain (1050/2018) kansalliset täsmennykset `legal-research`-skillillä.

Merkitse valittu peruste ja perustele. Jos peruste on suostumus tai oikeutettu etu, dokumentoi vapaaehtoisuus / tasapainotesti.

## Vaihe 3: Tarkista käsittelyn periaatteet (GDPR 5 art)

Käy läpi: lainmukaisuus, kohtuullisuus ja läpinäkyvyys; käyttötarkoitussidonnaisuus; **tietojen minimointi**; täsmällisyys; **säilytyksen rajoittaminen** (määrittele säilytysaika); eheys ja luottamuksellisuus (tietoturva); **osoitusvelvollisuus** (dokumentointi). Nosta esiin, jos jokin periaate ei toteudu.

## Vaihe 4: Arvioi DPIA-tarve (GDPR 35 art)

**Vaikutustenarviointi (DPIA) on tehtävä, kun käsittely todennäköisesti aiheuttaa korkean riskin** rekisteröidyn oikeuksille. Tyypilliset liput:
- Laaja arkaluonteisten tietojen käsittely.
- Järjestelmällinen ja laaja-alainen seuranta (esim. profilointi, automaattinen päätöksenteko oikeusvaikutuksin, 22 art).
- Henkilöiden järjestelmällinen valvonta yleisellä alueella.
- Uudet teknologiat, laaja rekisteröityjen joukko, haavoittuvat ryhmät (lapset, työntekijät, potilaat).

Tarkista myös **tietosuojavaltuutetun toimiston julkaisema lista** käsittelytoimista, jotka edellyttävät DPIA:ta. Jos DPIA tarvitaan, ohjaa sen rakenteeseen (kuvaus, tarpeellisuus ja oikeasuhtaisuus, riskit, toimenpiteet) ja muistuta mahdollisesta ennakkokuulemisesta (36 art), jos jäännösriski on korkea.

## Vaihe 5: Johtopäätös

Tuota tiivis arvio:
1. **Saako käsitellä?** Peruste (6/9 art) ja perustelu.
2. **Periaatteiden täyttyminen** ja havaitut puutteet.
3. **DPIA-tarve:** kyllä / ei / rajatapaus + perustelu.
4. **Seuraavat toimet:** mitä on dokumentoitava (seloste käsittelytoimista 30 art → `privacy-notice`-skill), informoitava (13–14 art) ja mitä vaatii tietosuojavastaavan/juristin arvion (`[varmista]`).

## Mitä tämä skill EI tee

- **Ei korvaa tietosuojavastaavan tai juristin arviota.** Korkean riskin käsittely, arkaluonteiset tiedot (9 art) ja DPIA:n johtopäätökset kuuluvat asiantuntijalle.
- **Ei vahvista GDPR-artikloja tai tietosuojalain pykäliä muistista.** Käsittelyperuste (6/9 art) ja kansalliset täsmennykset tarkistetaan lähteestä.
- **Ei tee valmista vaikutustenarviointia (DPIA) eikä ennakkokuulemista (36 art).** Arvioi vain DPIA:n tarpeen ja ohjaa sen rakenteeseen.
- **Ei laadi tietosuojaselostetta eikä seloste käsittelytoimista -dokumenttia.** Tunnistaa dokumentointitarpeen mutta ohjaa erilliseen skilliin.
- **Ei tee ilmoitusta valvontaviranomaiselle (tietosuojavaltuutetun toimisto) puolestasi** eikä korvaa tietoturvaloukkauksen 72 tunnin ilmoitusta (33 art).
- **Ei arvioi tietoturvan teknistä toteutusta.** Tunnistaa turvatoimien tarpeen periaatteena, mutta tekninen toteutus on muiden vastuulla.

## Jatka tästä

- Informointiasiakirja ja seloste käsittelytoimista (30 art) → /tietosuoja:tietosuojaseloste
- Rekisteröidyn esittämän pyynnön käsittely → /tietosuoja:rekisteroidyn-pyynnot
- Profilointi ja automaattinen päätöksenteko tekoälyjärjestelmässä → /tekoalysaantely:tekoaly-luokittelu
- Käsittelyperusteen pykälien ja kansallisten täsmennysten tarkistus → /juristi:oikeustutkimus
