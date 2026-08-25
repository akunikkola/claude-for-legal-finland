---
name: residential-property-sale
description: >
  Asunto-osakkeiden kauppa Suomessa asuntokauppalain (843/1994) mukaan.
  Käytä tätä skilliä, kun käyttäjä valmistelee tai tarkistaa asunnon
  ostoa tai myyntiä, arvioi uudiskohteen (RS-kohteen) kauppaa, arvioi
  kaupan jälkeen ilmennyttä virhettä (kosteusvaurio, pinta-alavirhe,
  salattu remonttitarve, yhtiön talous), laatii reklamaatiota tai
  vaatimusta, tai arvioi välittäjän vastuuta. Triggeröi sanoista:
  asuntokauppa, asunnon osto, asunnon myynti, asunto-osake, uudiskohde,
  RS-kohde, isännöitsijäntodistus, piilevä virhe, pinta-alavirhe,
  taloudellinen virhe, reklamaatio, hinnanalennus, välittäjän vastuu,
  kuntotarkastus.
---

# Asuntokauppa — uudiskohde, käytetty asunto ja virhevastuu

Tämä skill jäsentää asunto-osakkeiden kaupan asuntokauppalain (843/1994)
mukaan. Perusteet ja kiinteistö/asunto-osake-rajanveto:
`../kiinteistokauppa/references/kiinteisto-perusteet.md`. Jos kohde on
kiinteistö → `kiinteistokauppa`-skill; taloyhtiösuhteen kysymykset →
`asunto-osakeyhtio`-skill.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa. Katso `kiinteistot-ja-asuminen/CLAUDE.md`. Kuluttajakaupassa
> asuntokauppalain suoja on pakottavaa — tarkista pakottavuus lähteestä.

## Tarkista laki lähteestä

Hae asuntokauppalain säännökset (virhe, reklamaatio, vastuuajat,
RS-suoja) **`juristi:oikeustutkimus`-skillillä** ja KKO:n sekä
kuluttajariitalautakunnan käytäntö lähteestä. Kaupan tyypin tunnistus
ohjaa kaiken: **rakentamisvaihe / uusi asunto / käytetty asunto** —
kullakin oma virhesäännöstönsä.

## Uudiskohde (rakentamisvaihe ja uusi asunto)

- **RS-järjestelmä**: rakentamisvaiheen suojajärjestelmä — turva-asiakirjat
  pankissa, vakuudet (rakentamisvaiheen ja rakentamisvaiheen jälkeinen),
  osakkeenostajien kokous ja tilintarkastaja/rakennustyön tarkkailija —
  yksityiskohdat lähteestä.
- **Vuositarkastus**: virheisiin vetoaminen kanavoituu
  vuositarkastukseen — ilmoittamatta jättäminen voi menettää oikeuden
  (poikkeukset lähteestä). Laadi ostajalle virhelista
  vuositarkastukseen määräpäivineen `[mallin laskelma — tarkista]`.
- **Perustajaosakkaan (grynderin) vastuu** ja vakuuksien vapauttaminen:
  ostajan suostumuksen merkitys — älä kuittaa vapautusta rutiinina.

## Käytetyn asunnon kauppa

1. **Myyjän tiedonantovelvollisuus**: tiedossa olevat viat, tehdyt ja
   päätetyt remontit, yhtiön taloustilanne — myös se mitä myyjän
   "pitäisi tietää". Salaaminen → virhe + vahingonkorvaus, törkeimmillään
   petos (ei avusteta — CLAUDE.md).
2. **Ostajan ennakkotarkastus**: nähtävillä ollutta ilmeistä ei voi
   reklamoida; kuntotarkastuksen lisätutkimuskehotukset laukaisevat
   erityisen selonottovelvollisuuden — käytäntö lähteestä.
3. **Isännöitsijäntodistus liitteineen** on kaupan tietoydin:
   vastikkeet, lainaosuus, tulevat remontit (kunnossapitotarveselvitys),
   yhtiön talous. Vanhentunut tai puutteellinen todistus → virhe- ja
   vastuukysymys (myös isännöintiä kohtaan).
4. **Virhetyypit**: yleinen virhe (kunto poikkeaa sovitusta/odotetusta;
   piilevän virheen merkittävyyskynnys lähteestä), tiedonantovirhe,
   **taloudellinen virhe** (yhtiön velat/vastuut kerrottua suuremmat) —
   pinta-alavirheen arviointi käytännön mukaan.
5. **Kunnossapitovastuun jako** (märkätilavaurioissa keskeinen):
   tarkistetaan asunto-osakeyhtiölaista **ja yhtiöjärjestyksestä** —
   älä jaa vastuuta yhtiön ja osakkaan välillä näkemättä
   yhtiöjärjestystä → `asunto-osakeyhtio`-skill.

## Reklamaatio ja seuraamukset

- **Kohtuullinen aika havaitsemisesta + ehdoton takaraja** `[ajat —
  tarkista lähteestä; eri kuin kiinteistössä]`. Yksilöi virhe ja
  vaatimus; varauma täydentämisestä.
- **Todistelun turvaaminen**: ennen korjaus- tai purkutöiden jatkamista
  dokumentoi vaurio ja varaa **myyjälle** (ja tarvittaessa taloyhtiölle
  ja vakuutusyhtiölle) tilaisuus tarkastaa se — korjaaminen ennen
  tarkastusta heikentää näyttöä ja voi kaventaa ostajan oikeuksia.
- Seuraamukset: hinnanalennus, vahingonkorvaus, purku (olennaisuus).
  Vertailukäytäntö (KKO, kuluttajariitalautakunta) lähteestä.
- Kuluttaja vs. elinkeinonharjoittaja -asetelma muuttaa keinoja
  (kuluttajariitalautakunta mahdollinen) — tunnista roolit.

## Välittäjän ja muiden vastuu

- **Välitysliikkeen vastuu (1074/2000)**: tiedonanto- ja
  selonottovelvollisuus; virheellinen markkinointi-ilmoitus voi
  vastuuttaa välittäjän myös ostajaa kohtaan — vaatimus voidaan
  kohdistaa rinnakkain myyjään ja välittäjään.
- Kuntotarkastajan vastuu sopimusperusteisesti tilaajaansa kohtaan.

## Mitä tämä skill EI tee

- **Ei arvioi rakennusteknistä kuntoa** — se jäsentää raporttien
  oikeudellisen merkityksen.
- **Ei näe isännöitsijäntodistusta tai yhtiön asiakirjoja** — se laatii
  hankinta- ja tarkistuslistan.
- **Ei vahvista reklamaatio- tai vastuuaikoja muistista** — lähteestä
  tai `[tarkista]`.
- **Ei avusta vikojen tai remonttitarpeiden salaamisessa** — kieltäydy
  ja kerro riski.
- **Ei tee arvonmääritystä** eikä ota kantaa kauppahinnan tasoon.

## Jatka tästä

- Taloyhtiön kunnossapitovastuu ja muutostyöt → /kiinteistot-ja-asuminen:asunto-osakeyhtio
- Kohde onkin kiinteistö → /kiinteistot-ja-asuminen:kiinteistokauppa
- Säännöksen tai ratkaisukäytännön tarkistus → /juristi:oikeustutkimus
- Virheriidan vieminen eteenpäin → /riidanratkaisu:haastehakemus
- Reklamaation kieliasu ja rakenne → /juristi:asiakirjan-tarkistus
