---
name: employer-obligations
description: >
  Työnantajan velvollisuudet ulkomaalaisen työvoiman käytössä Suomessa
  (ulkomaalaislaki 301/2004, laki työntekijöiden lähettämisestä
  447/2016). Käytä tätä skilliä, kun työnantaja varmistaa työntekijän
  työnteko-oikeutta, rakentaa kansainvälisen rekrytoinnin
  compliance-prosessia, käyttää ulkomaista alihankintaa tai
  vuokratyövoimaa, vastaanottaa lähetettyjä työntekijöitä, tai on saanut
  selvityspyynnön tai seuraamusmaksun työnteko-oikeuteen liittyen.
  Triggeröi sanoista: työnteko-oikeuden varmistaminen, työnantajan
  velvollisuudet ulkomaalainen, seuraamusmaksu, luvaton työnteko,
  lähetetty työntekijä, ulkomainen alihankkija, vuokratyö ulkomailta,
  tilaajavastuu, työsuojeluviranomainen.
---

# Työnantajan velvollisuudet — varmistus, compliance ja seuraamukset

Tämä skill rakentaa työnantajan compliance-prosessin ulkomaalaisen
työvoiman käyttöön ja jäsentää seuraamustilanteet. Perusteet:
`../tyoperusteiset-oleskeluluvat/references/ulkomaalaisoikeus-perusteet.md`.

> **Vastuuvapaus:** prosessit ja listat ovat tarkistettavia — ei
> oikeudellista neuvontaa. Työnantajan vastuu on ankara —
> "en tiennyt" ei riitä, jos varmistus laiminlyötiin. Katso
> `ulkomaalaisoikeus/CLAUDE.md` (mm. negatiivirajaus: luvattoman työn
> tai hyväksikäytön järjestelyä ei avusteta).

## Tarkista laki lähteestä

Hae UlkL:n työnantajavelvoitteet ja seuraamussäännökset
(seuraamusmaksu — laissa, vahvistettu) sekä rikoslain säännökset
(luvattoman ulkomaisen työvoiman käyttö, kiskonnantapainen
työsyrjintä) **`juristi:oikeustutkimus`-skillillä**. Lähetetyt
työntekijät: 447/2016. Työsuojeluviranomaisen ohjeet `[tarkista]`.

## Varmistusprosessi — rakenna ja dokumentoi

1. **Ennen työn alkua**: varmista työnteko-oikeus —
   oleskelulupakortti tai muu peruste (EU-kansalaisuus,
   hakuvaiheen oikeus) ja **oikeuden laajuus** (ala, työnantaja,
   voimassaolo). Pelkkä kortin vilkaisu ei riitä: tarkista että
   lupa kattaa juuri tämän työn.
2. **Säilytysvelvollisuus**: tiedot ulkomaalaisista työntekijöistä ja
   heidän työnteko-oikeutensa perusteista säilytetään laissa säädetty
   aika `[tarkista]` — myös työsuhteen päätyttyä.
3. **Ilmoitusvelvollisuudet**: tarkista lupatyypin ja tilanteen
   mukaiset ilmoitukset (mm. TTOL-työntekijän ehdot, luottamusmiehen
   informointi) lähteestä.
4. **Seuranta**: lupien päättymispäivät kalenteriin
   (→ `juristi:toimeksianto` / `agent-recipes/deadline-watch`);
   jatkolupaprosessi käyntiin ajoissa; olosuhdemuutosten
   (tehtävä, palkka) vaikutus lupaan arvioidaan ennen muutosta.
5. **Ehdot kuntoon**: palkka ja ehdot vähintään TES:n/lain tasolla —
   alipalkkaus on sekä työoikeus- että luparikkomus ja voi täyttää
   rikostunnusmerkistön → `employment-law`.

## Alihankinta, vuokratyö ja lähetetyt työntekijät

- **Ulkomainen alihankkija/vuokrayritys**: tilaajan
  selvitysvelvollisuudet (tilaajavastuulaki — tarkista soveltuminen
  ja selvitykset lähteestä) + ulkomaalaislain mukaiset velvoitteet
  vuokratyössä ja urakoinnissa (toimeksiantajan vastuut — lähteestä).
- **Lähetetyt työntekijät (447/2016)**: lähettävän yrityksen
  ilmoitus työsuojeluviranomaiselle, edustajan asettaminen,
  vähimmäisehdot Suomen lain ja TES:n mukaan, vastuut
  tilaajalle — tarkista ketju sopimuksiin (→
  `sopimukset:sopimuksen-laatiminen`: lähetettyjen ehdot ja
  dokumentaatiovaatimukset alihankintasopimukseen).

## Seuraamustilanne

Jos selvityspyyntö tai epäily on jo käsillä:

1. **Kartoita tosiseikat**: kuka teki työtä, millä oikeudella, mitä
   varmistettiin ja milloin (dokumentaatio!).
2. **Seuraamuskartta**: työnantajan **seuraamusmaksu** (hallinnollinen),
   rikosvastuu (työnantaja ja edustaja), mahdollinen vaikutus
   tuleviin lupiin ja julkisiin hankintoihin (poissulkemisperusteet →
   `public-procurement`) — edellytykset ja määrät lähteestä.
3. **Vastaus viranomaiselle**: tosiseikat ja dokumentoitu
   varmistusprosessi; korjaavat toimet heti (työnteon keskeytys jos
   oikeutta ei ole, prosessin korjaus).
4. Epäily rikoksesta → `rikosprosessi:esitutkinta-ja-pakkokeinot`.

## Mitä tämä skill EI tee

- **Ei tarkista yksittäisen henkilön työnteko-oikeutta** — se ei näe
  rekistereitä; se rakentaa prosessin, jolla työnantaja tarkistaa.
- **Ei vahvista säilytysaikoja, maksujen määriä tai
  ilmoitusvelvollisuuksia muistista** — lähteestä tai `[tarkista]`.
- **Ei avusta luvattoman työnteon järjestelyssä tai ehtojen
  polkemisessa** — ehdoton kieltäytyminen.
- **Ei korvaa työsuojeluviranomaisen tai Migrin kantaa**
  tulkinnanvaraisissa.
- **Ei kata verotusta** (lähdevero, kuuden kuukauden sääntö) —
  → `taxation` ja veroasiantuntija.

## Jatka tästä

- Lupatyypit ja hakemukset → /ulkomaalaisoikeus:tyoperusteiset-oleskeluluvat
- Työsuhteen ehdot ja TES-taso → /tyooikeus:tyosopimus
- Alihankintasopimuksen ehdot → /sopimukset:sopimuksen-laatiminen
- Seuraamusmaksupäätöksen muutoksenhaku → /hallinto-oikeus:muutoksenhaku
- Säännöksen tarkistus lähteestä → /juristi:oikeustutkimus
