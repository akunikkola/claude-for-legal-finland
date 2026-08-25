---
name: damages
description: >
  Vahingonkorvausvastuun arviointi Suomen oikeuden mukaan
  (vahingonkorvauslaki 412/1974). Käytä tätä skilliä, kun käyttäjä arvioi
  korvausvastuun syntymistä tai puolustautuu korvausvaatimusta vastaan:
  tuottamus, syy-yhteys, vahinkolajit ja korvauksen määrä,
  sopimusperusteisen ja sopimuksenulkoisen vastuun rajanveto,
  työnantajan isännänvastuu, ankara vastuu erityislaeissa
  (tuotevastuu, ympäristövahinko) tai korvauksen sovittelu. Triggeröi
  sanoista: vahingonkorvaus, korvausvastuu, tuottamus, syy-yhteys,
  isännänvastuu, esinevahinko, henkilövahinko, puhdas varallisuusvahinko,
  ankara vastuu, tuotevastuu, korvauksen sovittelu, myötävaikutus,
  vastuuvakuutus.
---

# Vahingonkorvaus — vastuun arviointi ja vaatimuksen jäsennys

Tämä skill jäsentää vahingonkorvausvastuun yleiset opit
(vahingonkorvauslaki 412/1974) molemmista näkökulmista: vaatijan ja
vastaajan. Prosessi (kanne, todistelu) → tämän plugarin muut skillit;
rikokseen perustuva korvaus → `criminal-procedure:injured-party-rights`.

> **Vastuuvapaus:** arviot ovat tarkistettavia — ei oikeudellista
> neuvontaa. Korvausmäärät perustellaan lähteistä (KKO,
> Henkilövahinkoasiain neuvottelukunta), ei muistista. Katso
> `dispute-resolution/AGENTS.md`.

## Tarkista laki lähteestä

Hae VahL:n (412/1974) säännökset ja sovellettavan erityislain
vastuusäännökset **`legal-core:legal-research`-skillillä**; KKO:n
käytäntö (tuottamusarviointi, syy-yhteys, määrät) lähteestä
tunnuksineen. Vanhentuminen (728/2003: kolme vuotta tiedosta —
erityisajat lähteestä) tarkistetaan heti →
`insolvency:debt-collection` katkaisumekaniikka.

## Vaihe 0: Mikä vastuuperuste?

Rajanveto ohjaa koko analyysin — käy järjestyksessä:

1. **Sopimusvastuu** — osapuolten välillä on sopimus: vastuu
   määräytyy sopimuksen ja sopimustyyppilain mukaan (ekskulpaatio-
   eli käännetty todistustaakka tyypillisesti; vastuunrajoitukset
   pätevät rajoissaan) → `contracts:contract-review`.
   **VahL ei pääsääntöisesti sovellu sopimussuhteeseen.**
2. **Deliktivastuu (VahL)** — ei sopimussuhdetta: tuottamusvastuu
   pääsääntönä.
3. **Ankara vastuu** — erityislait ilman tuottumusedellytystä:
   tuotevastuulaki (694/1990), ympäristövahingot (737/1994 →
   `environment-and-planning:environmental-liability`), liikennevakuutus,
   potilasvahingot ym. — tarkista soveltuva erityislaki ensin; se
   syrjäyttää yleiset opit.

## Vaihe 1: Vastuun edellytykset (deliktivastuu)

Jäsennä ja dokumentoi jokainen erikseen:

1. **Vahinko** — laji ratkaisee korvattavuuden: henkilövahinko,
   esinevahinko, niihin liittyvä taloudellinen vahinko — ja **puhdas
   varallisuusvahinko**, joka korvataan VahL:n nojalla vain
   erityisedellytyksin (rikos, julkinen valta, erittäin painavat syyt
   — lähteestä). Tämä rajanveto kaataa monta vaatimusta.
2. **Tuottamus** — huolellisuusstandardi: mitä huolellinen toimija
   olisi tehnyt; normirikkomus indisiona; törkeysasteen merkitys
   (sovittelu, vakuutus, vastuunrajoitusten murtuminen).
3. **Syy-yhteys** — conditio sine qua non + riittävä ennakoitavuus;
   näyttötaakka vaatijalla (poikkeukset lähteestä).
4. **Vastuun kohdentuminen** — **isännänvastuu**: työnantaja vastaa
   työntekijän virheestä (työntekijän oma vastuu rajoitettu —
   kanavointi lähteestä); julkisyhteisön vastuu julkisen vallan
   käytöstä omine edellytyksineen; orgaanivastuu vs. OYL 22 luku →
   `company-law`.

## Vaihe 2: Korvauksen määrä

- **Täyden korvauksen periaate** ja rikastumiskielto; vaatijan
  velvollisuus rajoittaa vahinkoa.
- Henkilövahingot: erät kuten `criminal-procedure:injured-party-rights`
  -skillissä (Henkilövahinkoasiain neuvottelukunnan suositukset
  lähteestä).
- Esinevahinko: korjauskulut vs. arvonalennus vs. käypä arvo;
  ikävähennykset käytännöstä.
- **Sovittelu**: kohtuusperusteinen (VahL) ja **myötävaikutus** —
  vastaajan tärkeimmät puolustukset tuottamuskiistämisen jälkeen.
- Korko vaatimukselle (633/1982) `[tarkista]`.

## Vaihe 3: Käytännön polku

1. **Vaatimuskirje** — tosiseikat, vastuuperuste, erät perusteineen,
   määräaika; vanhentumisen katkaisu dokumentoidusti.
2. **Vakuutukset kartalle** — vastuuvakuutus (vahingonaiheuttajan),
   omat vakuutukset (regressi); ilmoitusajat vakuutusehdoista
   `[tarkista]`. Moni juttu ratkeaa vakuutusyhtiön
   korvauskäsittelyssä — FINE ja lautakunnat vaihtoehtoina.
3. **Sovinto vai kanne** — kuluriski suhteessa intressiin ja näytön
   vahvuuteen → `statement-of-claim` ja `evidence`-skillit.

## Mitä tämä skill EI tee

- **Ei lupaa korvauksen määrää** — tasot haetaan käytännöstä
  lähteestä; tuomioistuin harkitsee.
- **Ei sovella VahL:ää sopimussuhteeseen** tarkistamatta rajanvetoa —
  sopimusvastuu arvioidaan sopimuksen kautta.
- **Ei vahvista vanhentumis- tai vakuutusten ilmoitusaikoja
  muistista** — lähteestä tai `[tarkista]`.
- **Ei tee lääketieteellistä tai teknistä syy-yhteysarviota** — se
  jäsentää oikeudellisen kehikon; asiantuntijalausunnot erikseen.
- **Ei laadi perusteettomia tai painostavia vaatimuksia** —
  vaatimuksen on vastattava jäsennettyä vastuuperustetta.

## Jatka tästä

- Kanteen nostaminen ja vaatimusten muotoilu → /riidanratkaisu:haastehakemus
- Näytön suunnittelu (syy-yhteys, tuottamus) → /riidanratkaisu:todistelu
- Rikosperusteinen korvaus → /rikosprosessi:asianomistajan-asema
- Sopimusvastuun arviointi → /sopimukset:sopimuksen-tarkistus
- Ympäristövahingot → /ymparisto-ja-kaavoitus:ymparistovastuut
- Säännöksen tai KKO-käytännön tarkistus → /juristi:oikeustutkimus
