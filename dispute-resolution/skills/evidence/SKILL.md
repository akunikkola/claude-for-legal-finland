---
name: evidence
description: >
  Riita-asian todistelun suunnittelu ja arviointi oikeudenkäymiskaaren (4/1734) 17 luvun
  mukaan: näyttötaakka, todistuskeinot (asiakirjat, todistajat, asiantuntijat, katselmus,
  asianosaisen kuuleminen), todistusteemat ja todistelun rajoitukset. Käytä tätä skilliä,
  kun käyttäjä suunnittelee todistelua, arvioi näyttöä tai näyttötaakkaa, kokoaa
  todistelua oikeudenkäyntiin, miettii ketä kuullaan todistajana tai mitä asiakirjoja
  esitetään, tai mainitsee todistelun, näytön, todistajan tai näyttötaakan.
---

# Todistelu riita-asiassa (oikeudenkäymiskaari 17 luku)

Tämä skill auttaa suunnittelemaan ja arvioimaan todistelua riita-asiassa. Suomessa
vallitsee **vapaa todistelu ja vapaa todistusharkinta** (oikeudenkäymiskaaren 17 luvun
rajoituksin) — ratkaisevaa on, kuka kantaa näyttötaakan ja saadaanko teemat näytettyä toteen.

> **Vastuuvapaus:** arvio tarkistettavaksi — ei oikeudellista neuvontaa eikä arvio näytön
> riittävyydestä lopullisesti. Katso `dispute-resolution/AGENTS.md`. Perusteet:
> `../statement-of-claim/references/dispute-resolution-fundamentals.md`.

## Tarkista säännökset lähteestä
Hae oikeudenkäymiskaaren 17 luvun säännökset (näyttötaakka, todistuskeinot, todistamis- ja
hyödyntämiskiellot) **`legal-core:legal-research`-skillillä**. Älä esitä todistelun rajoituksia
tai näyttökynnyksiä muistinvaraisesti.

## Vaihe 1: Jäsennä riitaiset seikat ja näyttötaakka
- Tunnista **riitaiset oikeustosiseikat** (mitkä seikat on näytettävä toteen).
- Määritä **näyttötaakka:** pääsääntöisesti sillä osapuolella, joka seikkaan vetoaa. Tunnista, mitkä seikat ovat *sinun* näytettäviäsi ja mitkä vastapuolen.
- Liitä jokaiseen seikkaan **todistusteema:** mitä halutaan näyttää toteen.

## Vaihe 2: Valitse todistuskeinot
Käy läpi keinot ja kohdista ne teemoihin:
- **Kirjalliset todisteet** — sopimukset, viestit, laskut, pöytäkirjat. Yksilöi ja merkitse mitä kukin todistaa.
- **Todistajat** — keitä kuullaan ja mistä teemasta. Arvioi todistajan tietämys ja luotettavuus.
- **Asiantuntijat** — kun tarvitaan erityisalan asiantuntemusta (esim. arvio, tekninen kysymys).
- **Katselmus** — kohteen tarkastelu.
- **Asianosaisen kuuleminen** todistelutarkoituksessa.

## Vaihe 3: Tarkista rajoitukset
- **Todistamiskiellot** (esim. tietyt luottamukselliset suhteet, oikeudenkäyntiavustajan salassapito) ja **hyödyntämiskiellot** (lainvastaisesti hankittu näyttö) — tarkista OK 17 luvusta lähteestä.
- **Salassapito ja henkilötiedot:** jos todisteissa on arkaluonteista tietoa, harkitse käsittelyn rajaamista (→ `data-protection`-plugari; anonymisointiin PII Shield).

## Vaihe 4: Kokoa todistelusuunnitelma
Tuota taulukko: **riitainen seikka · näyttötaakka (kumpi) · todistusteema · todistuskeino(t)**.
Tunnista aukot: onko jokaiselle näytettävälle seikalle todiste? Onko vastapuolen väitteille
vastanäyttöä? Merkitse `[varmista — asianajajan arvioitava]` näytön riittävyyden osalta.

## Raportoi
Tuota todistelusuunnitelma ja todisteluettelo (teemoineen) muotoon, jonka voi liittää
haastehakemukseen tai valmisteluun. Liitä lähteet (OK 17 luku tarkistettuna, mahdollinen
oikeuskäytäntö näyttökysymyksistä). Älä esitä lopputulosta tai näytön painoarvoa varmana.

## Mitä tämä skill EI tee
- **Ei korvaa asiamiehen tai asianajajan vastuuta.** Todistelusuunnitelma on tarkistettava luonnos; näytön riittävyyden ja todistelutavan arvioi asian hoitava.
- **Ei ennusta asian menestymistä eikä tuomion lopputulosta.** Ei arvioi näytön painoarvoa tai todistusharkinnan tulosta varmana — kuvaa vahvuudet ja aukot tasapuolisesti.
- **Ei vahvista todistamis- ja hyödyntämiskieltoja, näyttökynnyksiä eikä prosessimääräaikoja muistista.** Ne ovat ehdottomia ja haetaan OK 17 luvusta lähteestä.
- **Ei päätä näyttötaakan jakautumista lopullisesti.** Esittää lähtökohdan (seikkaan vetoava), mutta poikkeukset ja käännetty näyttötaakka tarkistetaan lähteestä.
- **Ei arvioi todistajan uskottavuutta tai lausunnon totuudenmukaisuutta** — vain kohdistaa todistuskeinon teemaan.
- **Ei hoida arkaluonteisen aineiston anonymisointia tai salassapidon rajaamista** itse; ohjaa erilliseen käsittelyyn.

## Jatka tästä
- Todisteluun perustuvan kanteen laatiminen → /riidanratkaisu:haastehakemus
- Näyttökysymyksiä koskevan oikeuskäytännön ja OK 17 luvun tarkistus → /juristi:oikeustutkimus
- Arkaluonteisten todisteiden anonymisointi ja käsittelyn rajaaminen → /tietosuoja:tietosuoja-arviointi
- Sopimusriidan tausta-asiakirjojen tarkistus näyttöä varten → /sopimukset:sopimuksen-tarkistus
