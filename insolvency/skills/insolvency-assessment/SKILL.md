---
name: insolvency-assessment
description: >
  Maksukyvyttömyystilanteen jäsennys ja menettelyn valinta Suomen
  insolvenssioikeuden mukaan. Käytä tätä skilliä, kun yrityksen tai
  yksityishenkilön maksukyky horjuu tai velkaa ei pystytä maksamaan ja
  pitää arvioida vaihtoehdot: vapaaehtoinen järjestely, yrityssaneeraus
  (varhainen tai perusmuotoinen), konkurssi tai yksityishenkilön
  velkajärjestely. Triggeröi myös kun arvioidaan kriisiyhtiön johdon
  riskejä, takaisinsaantivaaraa tai vastapuolen maksukyvyttömyysriskiä.
  Triggeröi sanoista: maksukyvytön, maksuvaikeudet, rahat loppu,
  kassakriisi, ylivelkaantunut, saneeraus, velkajärjestely, konkurssiuhka,
  akordi, maksuohjelma, takaisinsaanti.
---

# Maksukyvyttömyysarvio — tilanteen jäsennys ja menettelyn valinta

Tämä skill jäsentää maksukyvyttömyystilanteen ja vertailee menettelyt.
Perusteet ja menettelykartta: `references/insolvenssi-perusteet.md` — lue
se tehtävän alussa.

> **Vastuuvapaus:** arvio on tarkistettava jäsennys — ei oikeudellista
> neuvontaa eikä kehotus hakeutua menettelyyn. Päätökset tekee velallinen
> tai velkoja juristinsa kanssa. Katso `insolvenssi/CLAUDE.md` — erityisesti
> negatiivirajaus: velkojien välttelyä ei avusteta.

## Vaihe 0: Kenen näkökulma ja mikä tilanne

Selvitä heti: edustaako käyttäjä **velallista vai velkojaa**; onko
velallinen **yritys vai yksityishenkilö**; ja onko kyse **tilapäisestä
maksuviivästyksestä** (likviditeetti) vai **pysyvästä
maksukyvyttömyydestä**. Erottelu ratkaisee koko jatkon — älä oleta, kysy.

Premissit kuntoon: velkamäärä, erääntyneet vs. erääntyvät, vakuudet,
takaukset, jo vireillä olevat perintä- tai ulosottotoimet, kirjanpidon
ajantasaisuus.

## Vaihe 1: Yrityksen vaihtoehdot

Vertaile järjestyksessä kevyimmästä raskaimpaan:

1. **Vapaaehtoinen järjestely** — maksuaikataulu, lisärahoitus, akordi
   velkojien kanssa. Nopein ja halvin, vaatii velkojien suostumuksen.
   Huom. takaisinsaantiriski, jos järjestely suosii yhtä velkojaa ja
   konkurssi silti tulee.
2. **Varhainen saneerausmenettely (47/1993)** — kun maksukyvyttömyys
   **uhkaa** mutta ei ole vielä käsillä; tervehdyttäminen ennen kriisiä.
   Edellytykset ja velkojien asema lähteestä.
3. **Perusmuotoinen saneerausmenettely (47/1993)** — myös jo
   maksukyvyttömälle, jos toiminta on elinkelpoista ja saneerausohjelmalla
   tervehdytettävissä; väliaikaiset kiellot (perintä-, ulosmittaus-)
   tarkistetaan lähteestä.
4. **Konkurssi (120/2004)** — kun tervehdyttäminen ei ole realistista:
   hallittu alasajo ja velkojien yhdenvertainen jako →
   `konkurssimenettely`-skill.

Arvioi elinkelpoisuus rehellisesti: saneeraus ilman toimivaa
liiketoimintaa siirtää konkurssia ja kasvattaa vastuita.

## Vaihe 2: Yksityishenkilön vaihtoehdot

1. **Sovinto ja maksusuunnitelmat** velkojien kanssa; apuna maksuton
   **talous- ja velkaneuvonta** (oikeusaputoimistot) — mainitse aina.
2. **Velkajärjestely (57/1993)** — tuomioistuimen vahvistama maksuohjelma,
   jonka jälkeen loput velat anteeksi; edellytykset ja esteet (mm.
   kevytmielinen velkaantuminen — tarkista lähteestä) sekä
   lisäsuoritusvelvollisuus käydään läpi lähteen mukaan.
3. **Konkurssi** on mahdollinen myös luonnolliselle henkilölle, mutta ei
   vapauta veloista samalla tavalla kuin velkajärjestely — kerro ero.

## Vaihe 3: Kriisiyhtiön johdon riskikartta

Kun yhtiö on maksukyvytön tai lähellä sitä, käy läpi ja raportoi:

- **Takaisinsaantivaara (758/1991)**: poikkeukselliset maksut, vakuudet
  jälkikäteen, läheistoimet — peräytymisriski ja määräajat lähteestä.
- **Varojenjako kielletty**, jos maksukykytesti (OYL 13:2) ei täyty →
  `yhtiooikeus:yhtion-hallinto`.
- **Johdon vahingonkorvausvastuu** (OYL 22 luku) velkojille syvenevässä
  kriisissä jatketusta tappiollisesta toiminnasta `[varmista —
  insolvenssijuristin arvioitava]`.
- **Velallisen rikokset** (rikoslaki — tarkista säännökset lähteestä):
  omaisuuden piilottaminen, velkojan suosinta, kirjanpitorikokset.
- **Sopimusten ehdot**: kovenantit, insolvenssi-irtisanomisehdot,
  omistuksenpidätykset.

## Vaihe 4: Raportoi vertailu

Tuota päätöksenteon pohjaksi: tilannekuva (premissit ja niiden lähde),
menettelyvaihtoehdot taulukkona (edellytykset, kesto- ja
kustannusluonnehdinta ilman keksittyjä lukuja, vaikutus velkojiin ja
toimintaan), kriittiset määräajat `[tarkista lähteestä]` -merkinnöin sekä
suositeltu seuraava askel ihmisen päätettäväksi.

## Mitä tämä skill EI tee

- **Ei päätä menettelyyn hakeutumisesta eikä jätä hakemuksia** — se
  vertailee vaihtoehdot, ihminen päättää.
- **Ei vahvista maksukyvyttömyyttä taloudellisena tosiseikkana** — se
  jäsentää oikeudellisen arvion käyttäjän antamista luvuista; lukujen
  oikeellisuus on velallisen/tilintarkastajan vastuulla.
- **Ei esitä määräaikoja, kynnyksiä tai kulurajoja muistista** — lähteestä
  tai `[tarkista]`.
- **Ei avusta velkojien välttelyssä** — omaisuuden piilottelu, alihintaiset
  läheisluovutukset tai kirjanpidon hämärtäminen → kieltäydy ja ohjaa
  laillisiin vaihtoehtoihin.
- **Ei anna vero- tai kirjanpitoneuvontaa varmistettuna**.

## Jatka tästä

- Konkurssin kulku, valvonta ja jako → /insolvenssi:konkurssimenettely
- Saatavan perintä, vanhentuminen ja ulosotto → /insolvenssi:saatavien-perinta
- Säännöksen tai määräajan tarkistus lähteestä → /juristi:oikeustutkimus
- Johdon vastuu ja varojenjako kriisissä → /yhtiooikeus:yhtion-hallinto
- Riitautettu saatava → /riidanratkaisu:haastehakemus
