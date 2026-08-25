---
name: debt-collection
description: >
  Saatavan perinnän elinkaari Suomen oikeuden mukaan: vapaaehtoinen perintä
  ja hyvä perintätapa (perintälaki 513/1999), velan vanhentumisen hallinta
  ja katkaisu (728/2003), oikeudellinen perintä ja ulosotto (ulosottokaari
  705/2007). Käytä tätä skilliä, kun käyttäjä perii saatavaa tai
  puolustautuu perintää vastaan: maksumuistutus, maksuvaatimus,
  perintäkulut, tratta, vanhentumisen katkaisu, maksusopimus, summaarinen
  velkomus, ulosottohakemus tai ulosoton rajoitukset. Triggeröi sanoista:
  perintä, maksumuistutus, maksuvaatimus, perintäkulut, erääntynyt lasku,
  velkomus, vanhentuminen, katkaisu, tratta, ulosotto, ulosmittaus,
  maksuhäiriömerkintä.
---

# Saatavien perintä — vapaaehtoisesta perinnästä ulosottoon

Tämä skill jäsentää saatavan perinnän vaiheet ja tuottaa luonnokset
(muistutus, maksuvaatimus, katkaisuilmoitus, maksusopimus) molempien
osapuolten näkökulmasta. Perusteet:
`../maksukyvyttomyysarvio/references/insolvenssi-perusteet.md`.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa. Lähettämisestä ja määräajoista vastaa ihminen. Katso
> `insolvenssi/CLAUDE.md`.

## Vaihe 0: Saatavan kunto

Ennen perintätoimia varmista premissit:

- **Peruste ja määrä** — sopimus, lasku, erittely; korko ja
  viivästyskorko (korkolain mukainen — tarkista voimassa oleva
  viitekorko lähteestä, älä muistista).
- **Riitainen vai riidaton?** Riitautettua saatavaa ei saa periä
  perintälain mukaisella vapaaehtoisella perinnällä kuluttajalta —
  riitainen saatava ratkaistaan oikeudenkäynnissä →
  `riidanratkaisu:haastehakemus`.
- **Vanhentuminen (728/2003)** — yleinen vanhentumisaika on kolme vuotta
  ja se on katkaistavissa; tarkista erityisajat (tuomion jälkeinen,
  lopullinen vanhentuminen, ulosottoperusteen määräaika) lähteestä.
  **Dokumentoi jokainen katkaisutoimi päivämäärineen.**
- **Kuluttaja vai yritys?** Kuluttajasaatavissa perintälain kulu- ja
  aikarajat ovat pakottavia — hae voimassa olevat enimmäismäärät
  lähteestä (ne ovat muuttuneet, älä käytä muistinvaraisia lukuja).

## Vaihe 1: Vapaaehtoinen perintä (513/1999)

- Kulku: maksumuistutus → maksuvaatimus → (yrityssaatavissa mahdollinen
  **tratta**) → maksusopimus tai siirto oikeudelliseen perintään.
- **Hyvä perintätapa**: ei väärää tai harhaanjohtavaa tietoa, ei
  kohtuuttomia kuluja, ei tarpeetonta haittaa, velallisen
  tiedonsaantioikeus. Tarkista yksityiskohdat lähteestä.
- Velallisen puolella: tarkista perintäkulujen lainmukaisuus, vaadi
  erittely, riitauta perusteeton saatava kirjallisesti ja nosta esiin
  maksusuunnitelman mahdollisuus.

## Vaihe 2: Oikeudellinen perintä

- **Riidaton saatava**: summaarinen haastehakemus käräjäoikeuteen →
  yksipuolinen tuomio → ulosottoperuste. Luonnostelu:
  `riidanratkaisu:haastehakemus` (summaarinen muoto).
- **Riitainen saatava**: täysimittainen riita-asia →
  `dispute-resolution`-plugari.
- Arvioi kuluriski suhteessa saatavan määrään ja velallisen maksukykyyn —
  tuomio maksukyvyttömältä ei tuota suoritusta (→
  `maksukyvyttomyysarvio`).

## Vaihe 3: Ulosotto (705/2007)

- Ulosottohakemus ulosottoperusteen (tuomio tms.) nojalla;
  suoraan ulosottokelpoiset saatavat (mm. verot) erikseen.
- Velallisen suoja: **suojaosuus** palkan ulosmittauksessa ja
  erottamisetu — määrät tarkistetaan lähteestä (vahvistetaan
  säännöllisesti uudelleen).
- Vaihtoehdot ulosotossa: maksusuunnitelma, lykkäys, vapaakuukaudet —
  edellytykset lähteestä.
- **Ulosottoperusteen määräaikaisuus** ja velan lopullinen vanhentuminen:
  tarkista ajat lähteestä ennen kuin toteat saatavan perimiskelvottomaksi.

## Velallisen kokonaisongelma

Jos velallisella on useita velkojia ja pysyvä maksukyvyttömyys,
yksittäinen perintäjärjestely ei riitä → ohjaa
`maksukyvyttomyysarvio`-skilliin (yritys: saneeraus/konkurssi;
yksityishenkilö: velkajärjestely + talous- ja velkaneuvonta).

## Mitä tämä skill EI tee

- **Ei lähetä perintäkirjeitä eikä jätä hakemuksia** — luonnokset menevät
  ihmiselle.
- **Ei vahvista perintäkulujen enimmäismääriä, viitekorkoa, suojaosuutta
  tai vanhentumisen erityisaikoja muistista** — lähteestä tai
  `[tarkista]`.
- **Ei harjoita painostavaa tai hyvän perintätavan vastaista perintää** —
  ei uhkauksia, ei harhaanjohtamista, ei kulujen keinotekoista
  kasvattamista.
- **Ei peri riitautettua kuluttajasaatavaa vapaaehtoisena perintänä** —
  riitainen asia ohjataan tuomioistuimeen.
- **Ei tee luottopäätöksiä eikä maksuhäiriömerkintöjä**.

## Jatka tästä

- Velallisen kokonaistilanne ja menettelyn valinta → /insolvenssi:maksukyvyttomyysarvio
- Velallinen konkurssissa: saatavan valvonta → /insolvenssi:konkurssimenettely
- Summaarinen tai riitainen velkomus → /riidanratkaisu:haastehakemus
- Vanhentumissäännöksen tarkistus lähteestä → /juristi:oikeustutkimus
- Maksusopimusluonnoksen viimeistely → /sopimukset:sopimuksen-laatiminen
