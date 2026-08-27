---
name: financing-and-collateral
description: >
  Rahoitussopimukset ja vakuudet Suomen oikeuden mukaan. Käytä tätä
  skilliä, kun käyttäjä laatii tai tarkistaa velkakirjaa, lainasopimusta
  tai rahoitussopimusta kovenantteineen, suunnittelee tai arvioi
  vakuuksia (pantti, kiinteistöpanttioikeus, yrityskiinnitys, takaus,
  vierasvelkapanttaus, saatavien panttaus), arvioi eräännyttämistä tai
  kovenanttirikkomusta, tai jäsentää konsernin rahoitus- ja
  vakuusrakennetta. Triggeröi sanoista: velkakirja, lainasopimus,
  kovenantti, eräännyttäminen, cross default, pantti, panttaus,
  yrityskiinnitys, takaus, omavelkainen takaus, vierasvelkapanttaus,
  vakuusagentti, syndikoitu laina, viivästyskorko, negative pledge.
---

# Rahoitus ja vakuudet — sopimukset, vakuuspaketti ja riskit

Tämä skill jäsentää rahoitussopimukset ja vakuusjärjestelyt. Perusteet,
vakuuskartta ja riskipisteet: `references/finance-fundamentals.md` — lue
se tehtävän alussa.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa eikä luotto- tai sijoituspäätöksiä. Katso
> `banking-and-finance/AGENTS.md` — mm. toimiluvanvaraisuus tarkistetaan
> ensin, jos käyttäjä itse antaa luottoja.

## Tarkista laki lähteestä

Hae velkakirjalain (622/1947), korkolain (633/1982) ja takauslain
(361/1999) säännökset **`legal-core:legal-research`-skillillä**;
viitekorko ja kuluttajaluottojen rajat `[tarkista — Suomen
Pankki/lähde]`. KKO:n vakuus- ja takauskäytäntö lähteestä.

## Vaihe 1: Rakenteen jäsennys

- **Osapuolet ja roolit**: velallinen, velkoja(t), takaajat,
  pantinantajat — konsernissa myös se, kuka saa vastikkeen
  (ylävakuudet ja OYL:n lähipiiri-/varojenjakokytkös →
  `company-law:corporate-governance`).
- **Heikomman suoja**: kuluttaja (KSL:n pakottavat luottosäännökset)
  tai **yksityistakaaja/yksityinen pantinantaja** (361/1999 pakottava
  suoja: tiedonanto ennen sitoumusta, ilmoitukset velan hoidosta,
  vastuurajaukset — yksityiskohdat lähteestä). Laiminlyönti voi
  kaataa vakuuden.
- **Velkakirjatyyppi**: tavallinen vs. juokseva — siirtokelpoisuus ja
  väiteoikeudet eroavat (622/1947, lähteestä).

## Vaihe 2: Lainadokumentaatio

Käy ainakin nämä läpi (laadinnassa ja tarkistuksessa):

1. **Taloudelliset ehdot** — korko (viitekorko + marginaali; koron
   muutosmekanismi), maksuohjelma, ennenaikainen takaisinmaksu ja sen
   kulut, viivästyskorko (633/1982 — määrä lähteestä).
2. **Kovenantit** — mitoita rikkomusseuraamukset portaittain (waiver,
   neuvottelu, marginaalikorotus, eräännytys); määrittele
   laskentaperusteet täsmällisesti (mihin tilinpäätösstandardiin
   sidottu).
3. **Eräännyttämisperusteet** — maksuviivästys, kovenanttirikkomus,
   olennainen haitallinen muutos (MAC), ristiineräännyttäminen —
   kohtuullisuusarvio (OikTL 36 §) erityisesti laajoissa
   MAC/cross default -ehdoissa.
4. **Tiedonanto- ja muut velvoitteet** — raportointi, negative pledge,
   omistuksenmuutos (change of control).
5. **Siirrettävyys** — velkojan siirto-oikeus, velallisen suostumus.

## Vaihe 3: Vakuuspaketti

1. **Valitse vakuudet** vakuuskartasta (referenssi) kohteen ja
   velallisen mukaan; tarkista päällekkäisyydet ja aukot.
2. **Julkivarmistus kuntoon** — pantin sitovuus sivullisia kohtaan
   edellyttää oikeaa perustamistapaa (traditio, kirjaus, denuntiaatio)
   — tämä on vakuusjuridiikan yleisin virhe; vaatimukset lähteestä.
3. **Etuoikeusjärjestys** — vakuuksien keskinäinen järjestys ja
   yrityskiinnityksen asema konkurssissa (1578/1992 → `insolvency`).
4. **Takaisinsaantiriski** — vakuus vanhasta velasta tai lähellä
   maksukyvyttömyyttä (758/1991) → `insolvency:insolvency-assessment`.
5. **Vakuusagentti ja syndikaatti** — agentin valtuudet,
   päätöksentekokynnykset, vakuuksien jakaminen.

## Vaihe 4: Häiriötilanne

Kovenanttirikkomus tai maksuviivästys: tosiasiat ensin (onko rikkomus
todella tapahtunut laskentaperusteen mukaan), sitten porras
(waiver-pyyntö ja -dokumentaatio, standstill, uudelleenjärjestely) —
ja jos velallinen on maksukyvytön, koko paketti →
`insolvency:insolvency-assessment` (velkojan näkökulma: vakuuksien
realisointi vs. saneeraus).

## Mitä tämä skill EI tee

- **Ei tee luottopäätöksiä eikä arvioi luottokelpoisuutta** — se
  jäsentää juridiikan.
- **Ei vahvista viitekorkoja, korkokattoja tai etuoikeusjärjestystä
  muistista** — lähteestä tai `[tarkista]`.
- **Ei ohita yksityistakaajan tai kuluttajan pakottavaa suojaa** —
  tehoton ehto kerrotaan, ei piiloteta.
- **Ei suunnittele toimilupavaatimuksen kiertämistä** — luvanvaraisuus
  selvitetään ensin (AGENTS.md).
- **Ei korvaa vero- tai kirjanpitoarviota** (korkovähennysrajoitukset
  → `taxation:corporate-taxation`).

## Jatka tästä

- Sopimusmekaniikka ja kohtuullistaminen → /sopimukset:sopimuksen-tarkistus
- Konsernin varojenjako- ja lähipiirikysymykset → /yhtiooikeus:yhtion-hallinto
- Velallisen maksukyvyttömyys ja takaisinsaanti → /insolvenssi:maksukyvyttomyysarvio
- Kiinteistövakuuden kirjaukset → /kiinteistot-ja-asuminen:kiinteistokauppa
- Säännöksen tai KKO-käytännön tarkistus → /juristi:oikeustutkimus
