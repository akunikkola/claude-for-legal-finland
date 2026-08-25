---
name: corporate-governance
description: >
  Osakeyhtiön perustaminen, hallinto ja johdon vastuu Suomen osakeyhtiölain
  (624/2006) mukaan. Käytä tätä skilliä, kun käyttäjä perustaa osakeyhtiötä,
  laatii tai muuttaa yhtiöjärjestystä, valmistelee yhtiökokousta tai
  hallituksen kokousta (kutsu, esityslista, pöytäkirja), arvioi hallituksen
  jäsenen tai toimitusjohtajan velvollisuuksia ja vastuuta, suunnittelee
  osingonjakoa tai muuta varojenjakoa, tai kysyy vähemmistöosakkaan
  oikeuksista. Triggeröi sanoista: osakeyhtiö, oy, yhtiöjärjestys,
  yhtiökokous, hallituksen kokous, hallituksen vastuu, toimitusjohtaja,
  osingonjako, varojenjako, SVOP, osakeanti, vähemmistöosakas,
  kaupparekisteri, PRH.
---

# Yhtiön hallinto — perustaminen, toimielimet, varojenjako ja vastuu

Tämä skill auttaa osakeyhtiön elinkaaren hallintotilanteissa osakeyhtiölain
(624/2006) mukaan. Perusteet ja OYL:n varmistettu lukukartta:
`references/yhtiooikeus-perusteet.md` — lue se tehtävän alussa.

> **Vastuuvapaus:** tuotokset ovat tarkistettavia luonnoksia — ei
> oikeudellista neuvontaa. Yhtiöoikeudelliset päätökset tekevät toimielimet
> ja ilmoitukset allekirjoittaa ihminen. Katso `yhtiooikeus/CLAUDE.md`.

## Tarkista laki lähteestä

Hae OYL:n sovellettava säännös (pykälätaso, määräajat, enemmistövaatimukset)
**`juristi:oikeustutkimus`-skillillä** ennen kuin esität sen varmistettuna.
Lukutason rakenne on varmistettu referenssissä; pykälien sisältö muuttuu.

## Perustaminen

1. **Perustamissopimus ja yhtiöjärjestys** (OYL 2 luku) — vähimmäissisältö
   tarkistetaan lähteestä; yhtiöjärjestyksen pakolliset määräykset ovat
   suppeat (mm. toiminimi, kotipaikka, toimiala), loput on suunnittelua:
   lunastus- ja suostumuslausekkeet, osakesarjat, edustamismääräykset.
2. **Osakkeiden merkintä ja maksu** — yksityisellä oy:llä ei
   vähimmäisosakepääomaa (vahvistettu); jos pääomaa merkitään, sen maksu ja
   mahdollinen apportti dokumentoidaan OYL:n mukaisesti.
3. **Rekisteröinti** — kaupparekisteri-ilmoitus PRH:lle (kaupparekisterilaki
   564/2023); yhtiö syntyy rekisteröinnillä. Muista tosiasiallisten
   edunsaajien ilmoitus ja Verohallinnon rekisteröinnit.
4. **Nimi** — toiminimilain (128/1979) erottamiskyky- ja
   sekoitettavuusvaatimukset; nimen ja tavaramerkin suhde →
   IPR-näkökulma.

## Yhtiökokous ja hallitustyö

- **Kutsu ja päätösvaltaisuus**: tarkista kutsuaika, kokoustapa (myös
  etäkokous) ja päätösvaatimus (enemmistö vs. määräenemmistö) lähteestä —
  älä muistista.
- **Pöytäkirjat**: laadi päätöksistä täsmälliset pöytäkirjat. Kirjaa
  varojenjaossa maksukykyarvio, lähipiiritoimissa arvio yhdenvertaisuudesta
  (OYL 1:7) ja eriävät mielipiteet — dokumentaatio on johdon paras suoja
  vastuuväitteitä (22 luku) vastaan.
- **Esteellisyys**: tarkista hallituksen jäsenen ja tj:n esteellisyys
  käsiteltävässä asiassa.
- **Moiteriski (21 luku)**: virheellisesti syntynyt tai yhdenvertaisuutta
  loukkaava päätös on moitittavissa — nosta riski esiin ennen päätöstä.

## Johdon velvollisuudet ja vastuu

- Johdon on **huolellisesti toimien edistettävä yhtiön etua** (OYL 1:8,
  sanamuoto vahvistettu): huolellisuus- ja lojaliteettivelvollisuus
  yhtiötä — ei yksittäistä osakasta — kohtaan.
- Huolellisuuden arvioinnissa olennaista on **päätöksenteon prosessi**:
  riittävä tieto, asianmukainen käsittely, perusteltu liiketoimintapäätös ja
  dokumentointi.
- **Vahingonkorvausvastuu (22 luku)**: johtohenkilön vastuu yhtiölle,
  osakkaalle ja muulle OYL:ää tai yhtiöjärjestystä rikkoen aiheutetusta
  vahingosta — tarkista vastuun edellytykset ja tuottamusolettamat
  lähteestä. Erottele yhtiöoikeudellinen vastuu, rikosvastuu (25 luku) ja
  verovastuut.

## Varojenjako

Käy **aina** läpi kaksoistesti (`references/yhtiooikeus-perusteet.md`):

1. **Tasetesti** — jakokelpoiset varat vahvistetusta tilinpäätöksestä.
2. **Maksukykytesti (OYL 13:2, vahvistettu)** — arvio ja sen dokumentointi
   päätöshetkellä; huomioi tiedossa olevat tulevat velvoitteet.

Tunnista jakomuoto (osinko, SVOP-palautus, omat osakkeet, alentaminen,
konserniavustus) — kullakin omat menettelyt ja verokohtelu `[varmista —
veroasiantuntijan arvioitava]`. Laittoman jaon seuraukset: palautus +
vastuu.

## Vähemmistöosakkaan suoja

Kun käyttäjä edustaa vähemmistöä tai järjestely vaikuttaa vähemmistöön,
kartoita: yhdenvertaisuusperiaate (1:7), vähemmistöosinko (13 luku,
tarkista edellytykset lähteestä), erityinen tarkastus (7 luku),
kyselyoikeus yhtiökokouksessa, päätöksen moite (21 luku) ja
lunastustilanteet (18 ja 23 luku). Merkitse keinojen määräajat lähteestä.

## Mitä tämä skill EI tee

- **Ei tee kaupparekisteri-ilmoituksia eikä asioi PRH:n kanssa** — se
  valmistelee luonnokset, ihminen ilmoittaa ja allekirjoittaa.
- **Ei vahvista enemmistövaatimuksia, kutsuaikoja tai määräaikoja
  muistista** — ne haetaan lähteestä tai merkitään `[tarkista]`.
- **Ei anna sitovaa kantaa johdon vastuusta** yksittäistapauksessa — 🔴
  vastuukysymykset yhtiöoikeusjuristille.
- **Ei arvioi verokohtelua varmistettuna** — veroseikat
  veroasiantuntijalle.
- **Ei laadi tilinpäätöstä eikä arvioi kirjanpidon oikeellisuutta** — se
  käyttää vahvistettua tilinpäätöstä lähtötietona.

## Jatka tästä

- Pykälän tai määräajan tarkistus lähteestä → /juristi:oikeustutkimus
- Osakassopimuksen laatiminen tai tarkistus → /yhtiooikeus:osakassopimus
- Sulautuminen, jakautuminen tai yrityskauppa → /yhtiooikeus:yritysjarjestelyt
- Yhtiöjärjestys- tai pöytäkirjaluonnoksen laaduntarkistus → /juristi:asiakirjan-tarkistus
- Maksukyky horjuu tai jako lähellä maksukyvyttömyyttä → /insolvenssi:maksukyvyttomyysarvio
