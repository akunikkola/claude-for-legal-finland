---
name: etamyynti-ja-peruuttaminen
description: >
  Etä- ja kotimyynnin tiedonantovelvollisuudet ja kuluttajan
  peruuttamisoikeus (kuluttajansuojalaki 38/1978) sekä sopimaton ja
  harhaanjohtava markkinointi. Käytä tätä skilliä, kun arvioidaan
  verkkokaupan tai puhelinmyynnin ennakkotietoja, peruuttamisoikeutta ja
  sen poikkeuksia, laaditaan peruuttamislomaketta tai -ohjetta,
  arvioidaan markkinoinnin lainmukaisuutta tai laaditaan kuluttajalle
  vastaus peruuttamistilanteessa. Triggeröi sanoista: etämyynti,
  verkkokauppa, kotimyynti, peruuttamisoikeus, peruutusoikeus,
  14 päivää, ennakkotiedot, tiedonantovelvollisuus, palautus,
  markkinointi, sopimaton menettely, harhaanjohtava mainonta.
---

# Etämyynti ja peruuttaminen — ennakkotiedot, peruutus ja markkinointi

Tämä skill jäsentää etä- ja kotimyynnin pelisäännöt: ennen sopimusta
annettavat tiedot, kuluttajan peruuttamisoikeus ja markkinoinnin
lainmukaisuus. Kuluttajaoikeuden kartta:
`../kuluttajakaupan-virhevastuu/references/kuluttajaoikeus-perusteet.md`.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa. Peruuttamisaika ja poikkeukset tarkistetaan lähteestä.
> Katso `kuluttajaoikeus/CLAUDE.md`.

## Tarkista laki lähteestä

Hae KSL:n etä- ja kotimyyntiä, peruuttamisoikeutta ja markkinointia
koskevat luvut **`juristi:oikeustutkimus`-skillillä** — lukurakenne on
muuttunut EU-uudistuksissa. Peruuttamisajan pituus, poikkeukset ja
tiedonantovelvollisuuden sisältö aina laista; KKV:n ohjeet kkv.fi:stä.

> **Pohja:** [`pohjat/peruuttamisilmoitus.md`](../../pohjat/peruuttamisilmoitus.md) — peruuttamisilmoituksen rakenteellinen luuranko.

## Vaihe 1: Onko kyse etä- tai kotimyynnistä?

- **Etämyynti**: sopimus tehdään etäviestimellä ilman osapuolten
  samanaikaista läsnäoloa (verkkokauppa, puhelin, posti).
- **Kotimyynti**: sopimus tehdään muualla kuin elinkeinonharjoittajan
  toimitiloissa (kotona, esittelytilaisuudessa).
- Näihin liittyy korostettu tiedonantovelvollisuus ja peruuttamisoikeus.
  Tavanomainen myymäläkauppa ei lähtökohtaisesti tuo peruuttamisoikeutta.

## Vaihe 2: Ennakkotiedot

Ennen sopimusta kuluttajalle on annettava määrämuotoiset tiedot, mm.:

- tuotteen/palvelun pääominaisuudet, kokonaishinta kuluineen, toimitus;
- elinkeinonharjoittajan tiedot;
- **peruuttamisoikeus, sen määräaika ja käyttäminen** (tai tieto, ettei
  oikeutta ole);
- sopimuksen kesto ja päättäminen.

Puutteelliset ennakkotiedot voivat **pidentää peruuttamisaikaa** ja
siirtää tiettyjä kustannuksia elinkeinonharjoittajalle — `[tarkista
seuraukset lähteestä]`.

## Vaihe 3: Peruuttamisoikeus

1. **Määräaika**: kuluttaja saa peruuttaa etä- ja kotimyyntisopimuksen
   määräajassa ilman syytä — `[tarkista pituus ja alkamishetki
   lähteestä]` (alkaa yleensä tavaran vastaanotosta tai sopimuksen
   teosta).
2. **Peruuttamisen ilmoittaminen**: vapaamuotoisesti tai
   peruuttamislomakkeella; laadi selkeä ohje ja lomake.
3. **Palautus ja varojen palautus**: kuluttaja palauttaa tavaran,
   elinkeinonharjoittaja palauttaa maksut; palautuskulujen ja
   arvonalennuksen vastuunjako lähteestä.
4. **Poikkeukset**: tietyt sopimukset jäävät peruuttamisoikeuden
   ulkopuolelle (esim. mittatilaustuotteet, nopeasti pilaantuvat,
   avattu sinetöity hygieniatuote, aloitettu digitaalinen sisältö
   suostumuksin) — **tarkista poikkeuslista lähteestä**, älä oleta.

## Vaihe 4: Markkinointi

- **Sopimaton menettely** (aggressiivinen tai harhaanjohtava) on
  kielletty; olennaisten tietojen antamatta jättäminen voi olla
  harhaanjohtavaa.
- **Hintamerkinnät ja alennukset**: alennuksen vertailuhintaa koskevat
  vaatimukset (omnibus) — tarkista lähteestä.
- Kuluttaja-asiamies (KKV) valvoo ja voi puuttua menettelyyn.

## Vaihe 5: Erityistilanteet

- **Puhelin- ja sähköpostimarkkinointi**, ei-toivottu suoramarkkinointi
  ja suostumus — tietosuoja- ja sähköisen viestinnän sääntely limittyy
  → `tietosuoja`.
- **Tilausansat ja jatkuvat sopimukset**: selkeä irtisanominen ja
  hinnankorotusten ehdot.

## Mitä tämä skill EI tee

- **Ei vahvista peruuttamisaikaa, alkamishetkeä tai poikkeuksia
  muistista** — laista tai `[tarkista]`.
- **Ei oleta peruuttamisoikeutta myymäläkauppaan** ilman tarkistusta.
- **Ei laadi harhaanjohtavaa markkinointia** eikä peruuttamisoikeutta
  perusteetta rajoittavia ehtoja.
- **Ei ratkaise riitaa** — ohjaa lautakuntaan tarvittaessa.

## Jatka tästä

- Tavaran tai palvelun virhe ja oikaisukeinot → /kuluttajaoikeus:kuluttajakaupan-virhevastuu
- Riidan vieminen lautakuntaan ja perintä → /kuluttajaoikeus:kuluttajariita-ja-perinta
- Suoramarkkinoinnin ja henkilötietojen sääntely → /tietosuoja:tietosuoja-arviointi
- Säännöksen tai ohjeen tarkistus → /juristi:oikeustutkimus
