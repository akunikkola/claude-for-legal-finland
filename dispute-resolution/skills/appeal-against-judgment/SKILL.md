---
name: appeal-against-judgment
description: >
  Muutoksenhaku yleisen tuomioistuimen tuomioon oikeudenkäymiskaaren (4/1734) mukaan:
  valitus käräjäoikeuden tuomiosta hovioikeuteen ja jatkokäsittelylupa, valitus
  korkeimpaan oikeuteen ja valituslupa, tyytymättömyyden ilmoitus, määräajat ja
  valituskirjelmän sisältö. Käytä tätä skilliä, kun käyttäjä hakee tai harkitsee muutosta
  käräjäoikeuden tai hovioikeuden tuomioon riita-asiassa, laatii valitusta, kysyy
  jatkokäsittelyluvasta, valitusluvasta tai valitusajasta.
---

# Muutoksenhaku tuomioon (oikeudenkäymiskaari)

Tämä skill auttaa hakemaan muutosta riita-asian tuomioon oikealla menettelyllä ja
määräajassa. **Muutoksenhaku alkaa jo käräjäoikeudessa tyytymättömyyden ilmoituksella** —
sen laiminlyönti voi estää valituksen, joten ajoitus on kriittinen.

> **Vastuuvapaus:** luonnos/arvio tarkistettavaksi — ei oikeudellista neuvontaa eikä arvio
> menestymisestä. Katso `riidanratkaisu/CLAUDE.md`. Perusteet:
> `../haastehakemus/references/riidanratkaisu-perusteet.md`.

## Tarkista menettely, määräajat ja luvat lähteestä
Hae oikeudenkäymiskaaren muutoksenhakusäännökset (käräjäoikeudesta hovioikeuteen: 25 luku ja
jatkokäsittelylupa 25 a luku; KKO ja valituslupa 30 luku) **`juristi:oikeustutkimus`-
skillillä**. **Älä esitä määräaikoja tai lupaperusteita muistista** — hae ne ja merkitse
lähde; jos et voi tarkistaa, merkitse `[tarkista määräaika / lupaperuste]`.

## Vaihe 1: Tyytymättömyyden ilmoitus (käräjäoikeus)
Käräjäoikeuden tuomioon haettaessa muutosta on yleensä ensin **ilmoitettava tyytymättömyyttä**
määräajassa tuomion julistamisesta/antamisesta. Varmista tämä heti — ilman sitä valitusoikeus
voi menettää. Tämän jälkeen alkaa valituksen määräaika.

## Vaihe 2: Valitus hovioikeuteen + jatkokäsittelylupa
- Laadi **valitus** hovioikeudelle määräajassa: mihin tuomioon ja miltä osin haetaan muutosta, **mitä muutosta vaaditaan**, **perusteet** (miksi tuomio on virheellinen — näytön arviointi, lain soveltaminen, menettelyvirhe), sekä todistelu, johon vedotaan.
- **Jatkokäsittelylupa (OK 25 a luku):** monissa asioissa hovioikeus tutkii asian täysimittaisesti vain, jos lupa myönnetään. Tunnista lupaperusteet (mm. muutoksen aihe, ennakkoratkaisuperuste, painava syy) ja perustele luvan edellytykset valituksessa.

## Vaihe 3: Valitus korkeimpaan oikeuteen + valituslupa
- KKO:hon valittaminen edellyttää pääsääntöisesti **valituslupaa (OK 30 luku)**. Lupa myönnetään rajoitetusti — keskeisin peruste on **ennakkopäätösperuste** (laki ei muualta selvä, oikeuskäytäntö epäyhtenäinen) tai muu painava syy.
- Kohdista valituslupahakemus näihin perusteisiin; pelkkä tyytymättömyys lopputulokseen ei riitä.

## Vaihe 4: Laadi kirjelmä ja tarkistuslista
Tuota valitus-/valituslupakirjelmä ja **muutoksenhaun tarkistuslista** (tyytymättömyyden
ilmoitus tehty, valitusaika lähteineen, jatkokäsittelylupa-/valituslupaperusteet,
vaatimukset, perusteet, todistelu). Tuota asiakirja `docx`-skillillä (uusi) tai muokkaa
olemassa olevaa `adeu`-MCP:llä. Merkitse `[varmista — määräaika ja lupaperuste tarkistettava]`.

## Raportoi
Korosta määräaikojen ehdottomuutta ja lupakynnyksiä. Liitä lähteet (OK 25 / 25 a / 30 luku
tarkistettuna, mahdollinen KKO-käytäntö). Älä esitä menestymisen todennäköisyyttä lopullisena.

## Mitä tämä skill EI tee
- **Ei korvaa asiamiehen tai asianajajan vastuuta.** Valitus- ja valituslupakirjelmä on tarkistettava luonnos; muutoksenhausta ja sen ajoituksesta vastaa asian hoitava.
- **Ei ennusta asian menestymistä eikä tuomion lopputulosta.** Ei arvioi, myönnetäänkö jatkokäsittelylupa tai valituslupa tai muutetaanko tuomiota — kuvaa perusteet tasapuolisesti.
- **Ei vahvista valitusaikoja, tyytymättömyyden ilmoituksen määräaikaa eikä lupaperusteita muistista.** Määräajat ovat ehdottomia (laiminlyönti voi estää valituksen) ja haetaan lähteestä; tarkistamaton merkitään `[tarkista määräaika / lupaperuste]`.
- **Ei seuraa tai laske määräaikoja kalenterista.** Ei korvaa asianvalvonnan ja määräaikaseurannan järjestämistä.
- **Ei vahvista jatkokäsittelylupa- (OK 25 a) tai valituslupaperusteita (OK 30) muistinvaraisesti** — lupaperusteet ja niiden tulkinta tarkistetaan lähteestä.
- **Ei arvioi tyytymättömyyden ilmoituksen tarvetta lopullisesti** ilman lähteestä tarkistettua menettelyä; väärä menettely voi menettää valitusoikeuden.

## Jatka tästä
- Muutoksenhaussa vedottavan todistelun suunnittelu → /riidanratkaisu:todistelu
- Valitusajan, lupaperusteiden ja KKO-käytännön tarkistus → /juristi:oikeustutkimus
- Valitus- tai valituslupakirjelmän laaduntarkistus ennen jättämistä → /juristi:asiakirjan-tarkistus
