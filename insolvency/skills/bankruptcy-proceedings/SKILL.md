---
name: bankruptcy-proceedings
description: >
  Konkurssimenettelyn kulku Suomen konkurssilain (120/2004) mukaan velkojan
  ja velallisen näkökulmasta. Käytä tätä skilliä, kun käyttäjä valmistelee
  tai arvioi konkurssihakemusta, on saanut tiedon vastapuolen konkurssista,
  valvoo saatavaa konkurssissa (valvontakirjelmä), arvioi jako-osuutta tai
  maksunsaantijärjestystä, käsittelee takaisinsaantivaatimusta tai toimii
  pesänhoitajan, velkojatoimikunnan tai velkojainkokouksen kanssa.
  Triggeröi sanoista: konkurssi, konkurssihakemus, pesänhoitaja,
  konkurssipesä, valvontapäivä, valvontakirjelmä, jakoluettelo, jako-osuus,
  velkojainkokous, takaisinsaanti, konkurssin raukeaminen, julkisselvitys.
---

# Konkurssimenettely — kulku, valvonta ja jako

Tämä skill jäsentää konkurssin vaiheet (konkurssilaki 120/2004) ja tuottaa
tarkistuslistat velkojalle ja velalliselle. Perusteet:
`../maksukyvyttomyysarvio/references/insolvenssi-perusteet.md`.

> **Vastuuvapaus:** luonnokset ja listat ovat tarkistettavia — ei
> oikeudellista neuvontaa. Hakemukset ja valvonnat jättää ihminen
> määräajassa; kalenterivastuu on ihmisellä. Katso `insolvenssi/CLAUDE.md`.

## Tarkista laki lähteestä

Hae konkurssilain sovellettavat säännökset (edellytykset, määräajat,
menettelyvaiheet) **`juristi:oikeustutkimus`-skillillä** ennen kuin esität
ne varmistettuina. Tämä skill kuvaa rakenteen; pykälät ja ajat elävät.

## Menettelyn kaari

1. **Hakemus** — velallinen itse tai velkoja (velkojan hakemuksen
   perusteet, mm. maksukyvyttömyysolettamat ja konkurssiuhkaisen
   maksukehotuksen käyttö: tarkista edellytykset lähteestä).
2. **Asettaminen** — tuomioistuin asettaa konkurssiin ja määrää
   **pesänhoitajan**; velallisen määräysvalta omaisuuteen siirtyy pesälle.
3. **Pesäluettelo ja velallisselvitys** — pesänhoitaja laatii; velallisella
   myötävaikutusvelvollisuus.
4. **Saatavien valvonta** — pesänhoitaja määrää **valvontapäivän**;
   velkojan on valvottava saatavansa kirjallisesti (jälkivalvonnan
   edellytykset ja maksu lähteestä). **Tämä on velkojan kriittisin
   määräpäivä.**
5. **Jakoluettelo** — pesänhoitajan ehdotus, riitautukset, vahvistaminen
   tuomioistuimessa.
6. **Rahaksimuutto ja jako** — maksunsaantijärjestys (1578/1992):
   pääsääntönä velkojien yhtäläinen asema, poikkeukset (pantti,
   yrityskiinnitys, viimesijaiset) lähteestä.
7. **Päättyminen** — lopputilitys; tai **raukeaminen** varojen puutteessa;
   tai siirto **julkisselvitykseen** (konkurssiasiamies).

## Velkojan tarkistuslista

- [ ] Saatavan peruste ja määrä dokumentoitu (sopimus, laskut, korot,
      viivästyskorko eriteltyinä)
- [ ] Vakuudet ja niiden asema selvitetty (panttivelkojan erillisasema)
- [ ] **Valvontapäivä kalenterissa** ja valvontakirjelmä laadittu ajoissa
      `[mallin laskelma — tarkista]`
- [ ] Mahdollinen kuittausoikeus tarkistettu lähteestä
- [ ] Takaisinsaantialtistus arvioitu (saadut maksut kriittisenä aikana —
      758/1991)
- [ ] Jakoluetteloehdotus tarkistettu, riitautustarve ja sen määräaika
- [ ] Velkojainkokouksen päätösvalta ja äänestys: oma kanta valmisteltu

Valvontakirjelmäluonnoksen tuotat tällä skillillä; Word-muotoon ja
muutoksiin `adeu`-MCP.

## Velallisen (ja sen johdon) tarkistuslista

- [ ] Myötävaikutusvelvollisuus: tiedot ja aineisto pesänhoitajalle
- [ ] Kirjanpito luovutettu ajantasaisena
- [ ] Pesäluettelon vahvistaminen (oikeellisuusvakuutus)
- [ ] Liiketoiminnan jatkamisen tai luovutuksen kysymykset pesän kanssa
- [ ] Työsuhteet: päättäminen konkurssissa ja **palkkaturva**
      työntekijöille → `employment-law`
- [ ] Ympäristö- ja sopimusvastuiden kartoitus
- [ ] Johdon oma asema: takaisinsaanti, vahingonkorvaus (OYL 22 luku),
      velallisen rikokset — ohjaa tarvittaessa omalle avustajalle

## Takaisinsaanti (758/1991)

Pesänhoitaja tai velkoja voi vaatia oikeustoimen peräyttämistä.
Jäsennä vaatimus tai puolustus: peräytettävä toimi, **kriittinen aika**
määräpäivästä taaksepäin (ajat lähteestä; läheisillä pidemmät),
takaisinsaantiperuste (yleinen / maksun peräytyminen / lahja ym.) ja
palautusvelvollisuuden laajuus. Merkitse näyttökysymykset.

## Mitä tämä skill EI tee

- **Ei jätä hakemusta, valvontaa tai riitautusta** — luonnokset menevät
  ihmiselle, joka vastaa määräajoista.
- **Ei vahvista valvontapäivää, jälkivalvonnan ehtoja tai
  riitautusaikoja muistista** — lähteestä tai `[tarkista]`.
- **Ei ennusta jako-osuutta lukuna** ilman pesänhoitajan tietoja — se
  jäsentää etuoikeusaseman.
- **Ei toimi pesänhoitajana** eikä korvaa tämän lakisääteisiä tehtäviä.
- **Ei avusta omaisuuden piilottamisessa pesältä** (ks. CLAUDE.md
  negatiivirajaus).

## Jatka tästä

- Menettelyn valinta ennen konkurssia → /insolvenssi:maksukyvyttomyysarvio
- Saatavan perintä ja vanhentumisen katkaisu ennen konkurssia → /insolvenssi:saatavien-perinta
- Säännöksen tai määräajan tarkistus → /juristi:oikeustutkimus
- Riitautetun saatavan oikeudenkäynti → /riidanratkaisu:haastehakemus
- Valvontakirjelmän kieliasu ja rakenne → /juristi:asiakirjan-tarkistus
