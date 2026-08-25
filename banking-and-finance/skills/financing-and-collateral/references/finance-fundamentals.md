# Pankki- ja rahoitusoikeuden perusteet

**Vahvistettu lähteestä (Finlex, 2026-06):** alla mainitut säädösnumerot on
tarkistettu Finlexistä. EU-sääntelyn voimassa olevat versiot, korkokatot,
viitekorot ja kynnysarvot tarkistetaan aina käyttöhetkellä lähteestä
(EUR-Lex, Finanssivalvonta, Suomen Pankki).

## Keskeiset säädökset

- **Velkakirjalaki (622/1947)** — velkakirjat (tavallinen ja juokseva),
  siirto ja väitteet; rahavelan yleiset opit.
- **Korkolaki (633/1982)** — korko ja viivästyskorko; viitekorko
  vahvistetaan puolivuosittain `[tarkista — Suomen Pankki]`.
- **Laki takauksesta ja vierasvelkapanttauksesta (361/1999)** — takaus:
  toissijainen vs. omavelkainen, **yksityistakaajan pakottava suoja**
  (tiedonanto, ilmoitukset, vastuun rajoitukset — lähteestä).
- **Laki luottolaitostoiminnasta (610/2014)** — luottolaitosten
  toimilupa ja vakavaraisuus.
- **Laki rahanpesun ja terrorismin rahoittamisen estämisestä
  (444/2017)** — ilmoitusvelvollisten velvoitteet.
- **Arvopaperimarkkinalaki (746/2012, "AML")** — tiedonantovelvollisuus,
  liputus, ostotarjoukset; markkinoiden väärinkäyttö suoraan
  **MAR-asetuksesta** (EU) 596/2014.
- Liitännäiset: kauppakaaren panttisäännökset, yrityskiinnityslaki,
  laki rahoitusvakuuksista, kuluttajansuojalain luottoluvut
  (`contracts`/KSL), maksupalvelulaki, sijoituspalvelulaki.

## Valvojat ja instituutiot

- **Finanssivalvonta (Fiva)** — toimiluvat, valvonta, määräykset ja
  ohjeet (MOK), hallinnolliset seuraamukset; EU-tasolla EKP/SSM
  merkittäville pankeille, ESMA/EBA ohjeistus.
- **Rahanpesun selvittelykeskus** (KRP) — epäilyttävien liiketoimien
  ilmoitukset (goAML).
- **Suomen Pankki** — viitekorot.
- **Nasdaq Helsinki** — pörssin säännöt listayhtiöille.

## Vakuuskartta

| Vakuus | Kohde | Perustaminen | Huomio |
|---|---|---|---|
| Käteispantti / arvopaperipantti | irtain, arvo-osuudet, osakkeet | panttaussopimus + traditio/kirjaus | julkivarmistus ratkaisee sivullissitovuuden |
| Kiinteistöpanttioikeus | kiinteistö | kiinnitys + panttikirjan hallinta/sähköinen kirjaus | → maakaari, `real-estate-and-housing` |
| Yrityskiinnitys | yrityksen irtain omaisuus | kiinnitys PRH:ssa | etuoikeus konkurssissa lähteestä |
| Takaus | takaajan henkilökohtainen vastuu | takaussitoumus | yksityistakaajan pakottava suoja (361/1999) |
| Vierasvelkapanttaus | kolmannen omaisuus | panttaussopimus | yksityisen pantinantajan suoja kuten takaajan |
| Saatavien panttaus | laskusaatavat | sopimus + denuntiaatio velalliselle | ilmoitus ratkaisee sitovuuden |
| Rahoitusvakuus | rahoitusmarkkinaosapuolet | laki rahoitusvakuuksista | kevennetty realisointi |

## Rahoitussopimuksen ydinkohdat

1. **Lainaehdot**: määrä, korko (kiinteä/viitekorko + marginaali),
   takaisinmaksu, ennenaikainen maksu.
2. **Kovenantit**: taloudelliset (omavaraisuus, kate), informaatio-,
   negative pledge, ristiineräännyttäminen (cross default) —
   rikkomuksen seuraamusporras (waiver → marginaali → eräännytys).
3. **Eräännyttäminen**: perusteet ja menettely; suhde
   kohtuullistamiseen (OikTL 36 §).
4. **Vakuuspaketti**: kattavuus, etuoikeusjärjestys, vakuusagentti
   syndikoidussa rahoituksessa.
5. **Insolvenssikytkös**: takaisinsaantiriski vakuuden jälkikäteisessä
   antamisessa (758/1991 → `insolvency`), vakuudenhaltijan asema
   konkurssissa ja saneerauksessa.

## Tyypilliset riskipisteet

- Julkivarmistuksen puute → pantti ei sido sivullisia.
- Yksityistakaajan suojasäännösten laiminlyönti → takaus ei sido tai
  supistuu.
- Vakuus annettu vanhasta velasta lähellä maksukyvyttömyyttä →
  takaisinsaanti.
- Kuluttajaluoton korkokaton tai tiedonantovaatimusten rikkominen
  `[rajat — tarkista lähteestä]`.
- Toimiluvanvaraisen toiminnan harjoittaminen ilman lupaa
  (esim. luotonanto yleisölle, maksupalvelu).
- Sisäpiiritiedon vuoto rahoitusneuvotteluissa (listayhtiö) → MAR.
