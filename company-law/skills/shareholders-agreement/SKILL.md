---
name: shareholders-agreement
description: >
  Osakassopimuksen laatiminen ja riskitarkistus Suomen oikeuden mukaan.
  Käytä tätä skilliä, kun käyttäjä laatii, neuvottelee, tarkistaa tai
  tulkitsee osakassopimusta tai sen lausekkeita: päätöksenteko ja
  hallituspaikat, osakkeiden luovutusrajoitukset, etuosto-oikeus,
  myötämyynti (drag along / tag along), vesting ja leaver-ehdot,
  kilpailukielto, osinkopolitiikka, rahoituskierrokset, deadlock, exit ja
  riidanratkaisu. Triggeröi sanoista: osakassopimus, shareholders agreement,
  SHA, drag along, tag along, vesting, good leaver, bad leaver, lunastus,
  etuosto, deadlock, perustajaosakas, sijoittaja, term sheet.
---

# Osakassopimus — laatiminen ja riskitarkistus

Tämä skill laatii ja tarkistaa osakassopimuksia. Osakassopimus on
**sopimus** (OikTL 228/1929) osakkaiden välillä — se täydentää
osakeyhtiölakia (624/2006) ja yhtiöjärjestystä, mutta sitoo vain
osapuoliaan.

> **Vastuuvapaus:** luonnokset ja riskiarviot ovat tarkistettavia — ei
> oikeudellista neuvontaa. Katso `company-law/AGENTS.md`. Yhtiöoikeuden
> perusteet: `../corporate-governance/references/company-law-fundamentals.md`.
> Yleinen sopimusmekaniikka ja lausekekirjasto: `contracts`-plugari.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Kolme instrumenttia — pidä työnjako kirkkaana

| Instrumentti | Sitoo | Täytäntöönpano |
|---|---|---|
| Osakeyhtiölaki | kaikkia | pakottava ydin: velkojiensuoja, yhdenvertaisuus, vähemmistönsuoja |
| Yhtiöjärjestys | yhtiötä, toimielimiä, kaikkia osakkaita | yhtiöoikeudellinen: päätöksen moite, rekisteröinti |
| Osakassopimus | vain sopimusosapuolia | sopimusoikeudellinen: sopimussakko, vahingonkorvaus, välimiesmenettely |

Tarkista aina: **onko määräys oikeassa instrumentissa?** Esimerkiksi
lunastus- ja suostumuslauseke saa yhtiöoikeudellisen tehon vain
yhtiöjärjestyksessä (OYL 3 luku); sopimusperusteinen etuosto sitoo vain
sopijoita. Uusi osakas ei ole sopimuksen osapuoli ilman
liittymissitoumusta (adherence) — varmista mekanismi.

## Laatiminen — käy ainakin nämä läpi

1. **Osapuolet ja tarkoitus** — ketkä sitoutuvat (myös yhtiö itse?),
   suhde mahdollisiin aiempiin sopimuksiin.
2. **Päätöksenteko** — hallituksen kokoonpano ja nimitysoikeudet,
   määräenemmistöä tai kaikkien suostumusta vaativat asiat
   (reserved matters) — älä tee listasta niin laajaa, että se halvaannuttaa
   yhtiön.
3. **Osakkeiden vaihdanta** — luovutusrajoitukset, etuosto-oikeus,
   suostumusvaatimus, **drag along** (enemmistö voi pakottaa myyntiin) ja
   **tag along** (vähemmistö pääsee mukaan kauppaan); hinnan
   määritysmekanismi ja arvonmääritys riitatilanteessa.
4. **Sitouttaminen** — vesting-aikataulu, **good leaver / bad leaver**
   -ehdot ja lunastushinta kummassakin; työsuhteen ja osakkuuden kytkös
   (huom. työoikeuden pakottavuus → `employment-law`).
5. **Kilpailukielto ja salassapito** — kesto, maantiede, ala;
   kohtuullisuus (OikTL 36 §) ja suhde liikesalaisuuslakiin.
6. **Rahoitus ja omistuksen muutokset** — uudet kierrokset, dilutio,
   mahdolliset etuoikeudet (huom. yhdenvertaisuus ja osakesarjat
   yhtiöjärjestyksessä).
7. **Osinkopolitiikka** — tavoitteet sopimukseen; sitova jako tehdään silti
   OYL 13 luvun kaksoistestin rajoissa.
8. **Deadlock** — umpikujamekanismi (eskalointi, lunastusmenettelyt kuten
   shotgun-lauseke) — puuttuva deadlock-ehto on 50/50-yhtiön suurin riski.
9. **Sopimuksen elinkaari** — voimassaolo, päättyminen exitissä,
   muuttaminen, liittymissitoumus, kokonaissopimusehto.
10. **Rikkomusseuraamukset ja riidanratkaisu** — sopimussakko (näytön
    helpotus), vahingonkorvaus, välimiesmenettely (967/1992;
    luottamuksellisuus) vs. yleinen tuomioistuin.

## Riskitarkistus (olemassa oleva sopimus)

Käy sopimus lausekkeittain läpi ja luokittele
(`contracts:contract-review`-skillin tapaan):

- **🟢 VIHREÄ** — tasapainoinen, täytäntöönpantavissa, oikeassa
  instrumentissa.
- **🟡 KELTAINEN** — epäselvä tai puutteellinen: hintamekanismi puuttuu
  lunastuksesta, drag ilman vähimmäishintaa, vesting ilman bad leaver
  -määritelmää, ristiriita yhtiöjärjestyksen kanssa, ei
  liittymismekanismia.
- **🔴 PUNAINEN** — kohtuuton tai tehoton: bad leaver -lunastus selvään
  alihintaan laajoissa tilanteissa (OikTL 36 § -riski), rajaton
  kilpailukielto, yhdenvertaisuutta tai velkojiensuojaa kiertävä rakenne,
  deadlock puuttuu 50/50-omistuksessa → yhtiöoikeusjuristin arvio.

Word-muotoinen sopimus: lue ja kommentoi `adeu`-MCP:llä natiiveina Track
Changes -muutoksina (`read_docx`, `process_document_batch`).

## Mitä tämä skill EI tee

- **Ei korvaa yhtiöjärjestystä** — yhtiöoikeudellista tehoa vaativat
  määräykset osoitetaan yhtiöjärjestykseen, ei sopimukseen.
- **Ei vahvista lausekkeen täytäntöönpanokelpoisuutta sitovasti** —
  kohtuullisuus- ja pätevyysarvio (OikTL 36 §) on juristin.
- **Ei arvioi verokohtelua** (esim. työsuhdeoption ja osakkeen rajanveto,
  lunastuksen verotus) — `[varmista — veroasiantuntijan arvioitava]`.
- **Ei allekirjoita eikä lähetä** — luonnos menee aina ihmisen
  tarkistettavaksi.
- **Ei sovita työoikeudellisia ehtoja työntekijän vahingoksi** pakottavan
  lain vastaisesti.

## Jatka tästä

- Yleinen lausekekirjasto ja sopimustekniikka → /sopimukset:sopimuksen-laatiminen
- Valmiin sopimuksen järjestelmällinen riskikäynti → /sopimukset:sopimuksen-tarkistus
- Yhtiöjärjestysmuutokset ja toimielinpäätökset → /yhtiooikeus:yhtion-hallinto
- Exit tai osakekauppa ajankohtainen → /yhtiooikeus:yritysjarjestelyt
- Kilpailukielto työsuhteessa → /tyooikeus:tyosopimus
