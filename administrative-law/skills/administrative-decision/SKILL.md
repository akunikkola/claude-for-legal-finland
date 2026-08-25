---
name: administrative-decision
description: >
  Hallintopäätöksen laatiminen ja tarkistus hallintolain (434/2003) mukaan: hyvän
  hallinnon perusteet, asian käsittely, kuuleminen, esteellisyys, päätöksen perustelu
  ja muutoksenhakuohjaus. Käytä tätä skilliä, kun käyttäjä laatii tai tarkistaa
  viranomaisen päätöstä, hallintopäätöstä, viranhaltijapäätöstä tai muuta hallintoasian
  ratkaisua, tai kysyy kuulemisesta, esteellisyydestä, perusteluvelvollisuudesta,
  hyvästä hallinnosta tai päätöksen muotovaatimuksista.
---

# Hallintopäätös — laatiminen ja tarkistus (hallintolaki 434/2003)

Tämä skill auttaa laatimaan ja tarkistamaan hallintopäätöksen hallintolain (434/2003)
ja hyvän hallinnon vaatimusten mukaisesti. Hallintomenettelyssä **menettelyvirhe voi
johtaa päätöksen kumoamiseen** muutoksenhaussa, joten menettely on yhtä tärkeä kuin
aineellinen ratkaisu.

> **Vastuuvapaus:** luonnos/arvio tarkistettavaksi — ei oikeudellista neuvontaa. Viranomainen
> vastaa päätöksestään. Katso `hallinto-oikeus/CLAUDE.md`. Perusteet: `references/hallinto-oikeus-perusteet.md`.

## Tarkista laki ja toimivalta lähteestä
Hae hallintolain (434/2003) ja sovellettavan **erityislain** (joka antaa toimivallan ja
aineelliset edellytykset) säännökset **`juristi:oikeustutkimus`-skillillä**. Tarkista myös
viranomaisen toimivalta (kuntalaki 410/2015, johtosäännöt) — hallintopäätös ilman toimivaltaa
on pätemätön.

## Hyvän hallinnon perusteet (hallintolaki 6 §)
Pidä mielessä koko käsittelyn ajan: **yhdenvertaisuus, tarkoitussidonnaisuus,
objektiviteetti, suhteellisuus ja luottamuksensuoja.** Päätöksen on perustuttava lakiin ja
asiallisiin perusteisiin, ei epäasiallisiin vaikuttimiin.

## Tarkistuslista

### Asian käsittely
- **Toimivalta:** onko päättävällä viranomaisella/viranhaltijalla toimivalta tähän asiaan?
- **Esteellisyys:** onko käsittelijä esteellinen (intressi, läheinen, aiempi rooli)? Esteellinen ei saa osallistua.
- **Asian selvittäminen:** onko asia selvitetty riittävästi (selvittämisvelvollisuus)?
- **Kuuleminen:** onko asianosaista kuultu ennen päätöstä, kun päätös voi vaikuttaa hänen etuunsa/oikeuteensa? Kuulematta jättäminen on yleinen kumoamisperuste — varmista peruste, jos kuulemista ei tehdä.

### Päätöksen sisältö ja muoto
- **Yksilöinti:** päättävä viranomainen, asia, asianosaiset, ratkaisu.
- **Perustelu:** päätös on **perusteltava** — mitkä seikat ja selvitykset ovat vaikuttaneet ja mitä säännöksiä on sovellettu. Puutteellinen perustelu on kumoamisriski.
- **Sovelletut säännökset:** nimettävä (säädös + pykälä), tarkistettuna lähteestä.
- **Muutoksenhakuohjaus:** liitettävä oikea ohjaus — oikaisuvaatimus vai valitus, mihin, missä ajassa, miten (ks. `muutoksenhaku`-skill). Väärä tai puuttuva ohjaus on virhe.
- **Tiedoksianto:** miten ja milloin päätös annetaan tiedoksi (vaikuttaa muutoksenhakuajan alkuun).

## Työnkulku
1. Selvitä: asia, asianosaiset, sovellettava erityislaki ja toimivaltaperuste, mitä on jo tehty (kuuleminen, selvitykset).
2. Hae säännökset `oikeustutkimus`-skillillä.
3. Laadi tai tarkista päätös yllä olevan listan mukaan. Nosta esiin menettelyvirheet (kuulematta jättäminen, esteellisyys, puuttuva perustelu/ohjaus) → kumoamisriski.
4. Tuota päätös (uusi: `docx`-skill; olemassa olevan muokkaus jälkimuutoksin: `adeu`-MCP). Merkitse täydennettävät kohdat ja `[varmista — hallinto-oikeudellisen asiantuntijan arvioitava]`.

## Raportoi
Tuota päätös/arvio lähdemerkinnöin (hallintolaki + erityislaki, pykälät tarkistettuna).
Erota selvästi aineellinen ratkaisu, sen perustelu ja menettelyn arviointi. Korosta
mahdolliset kumoamisriskit.

## Mitä tämä skill EI tee
- **Ei tee viranomaispäätöstä eikä korvaa viranomaisen vastuuta.** Tuottaa tarkistettavan luonnoksen; viranomainen vastaa päätöksestään ja sen laillisuudesta.
- **Ei vahvista toimivaltaperusteita eikä määräaikoja muistista.** Toimivalta (erityislaki, kuntalaki 410/2015, johtosäännöt) ja muutoksenhaun määräajat haetaan lähteestä erityislaeittain.
- **Ei ratkaise aineellista oikeuskysymystä lopullisesti.** Tulkinnanvaraiset edellytykset ja näytön arviointi kuuluvat hallinto-oikeudellisen asiantuntijan vastuulle.
- **Ei laadi muutoksenhakua eikä arvioi valituksen menestymistä** — se kuuluu `muutoksenhaku`-skilliin.
- **Ei tee julkisuus- tai salassapitoratkaisua** päätökseen liittyvistä asiakirjoista; se kuuluu `julkisuus-ja-tietopyynnot`-skilliin.
- **Vain Suomen hallinto-oikeus.** Ei sovellu muiden maiden hallintomenettelyyn eikä yksityisoikeudellisiin asioihin.

## Jatka tästä
- Jos päätökseen haetaan muutosta → /hallinto-oikeus:muutoksenhaku
- Säädösten ja määräaikojen tarkistus → /juristi:oikeustutkimus
- Päätöksen kielen ja muotovaatimusten tarkistus ennen tiedoksiantoa → /juristi:asiakirjan-tarkistus
- Jos päätökseen liittyviä asiakirjoja pyydetään tai luovutetaan → /hallinto-oikeus:julkisuus-ja-tietopyynnot
