# Kilpailuoikeus

Suomen ja EU:n kilpailuoikeus yritysten ja niiden neuvonantajien työhön:
kielletyt kilpailunrajoitukset ja määräävän aseman väärinkäyttö,
yrityskauppavalvonta sekä compliance ja tarkastuksiin varautuminen.

> **Arviot ja luonnokset ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Kartelliavustusta ei anneta missään muodossa; laillinen polku epäilyttävässä
> tilanteessa on menettelyn lopettaminen ja leniency-harkinta. Raja-arvot ja
> prosentit haetaan aina lähteestä. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **kilpailunrajoitukset** | Kilpailulain (948/2011) 2 luvun kiellot ja SEUT 101–102: horisontaaliset ja vertikaaliset rajoitukset, ryhmäpoikkeusten itsearviointi, määräävän aseman väärinkäyttö, seuraamukset ja leniency sekä kilpailuoikeudelliset vahingonkorvaukset (1077/2016). Sisältää kilpailuoikeuden perusteiden referenssin. |
| **yrityskauppavalvonta** | Kilpailulain 4 luku: ilmoitusvelvollisuuden arviointi (liikevaihtorajat lähteestä), ilmoituksen valmistelu, käsittelyvaiheet ja sitoumukset, täytäntöönpanokielto (gun jumping) sekä EU-tason (sulautuma-asetus) ja KKV:n toimivallanjako. |
| **kilpailu-compliance** | Compliance-ohjelman rakentaminen, kilpailijakontaktien ja tietojenvaihdon pelisäännöt (ml. toimialajärjestöt ja tarjousyhteistyö), KKV:n/komission tarkastukseen (dawn raid) varautuminen ja toimintaohje sekä kilpailuneutraliteetti (4 a luku, otsikko vahvistettu). |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **kilpailulaki (948/2011)** lukurakenteineen –
2 luku kielletyt kilpailunrajoitukset, 4 luku yrityskauppavalvonta, 4 a luku
kilpailun tasapuolisuuden turvaaminen julkisen ja yksityisen elinkeinotoiminnan
välillä, 5 luku menettely; laissa säädetty seuraamusmaksusta vapautuminen ja
alentaminen (leniency) – sekä **laki kilpailuoikeudellisista vahingonkorvauksista
(1077/2016)**. EU-taso: SEUT 101–102 artikla, sulautuma-asetus ja
ryhmäpoikkeusasetukset (EUR-Lex; voimassa olevat versiot tarkistetaan käytössä).

## Liittyy

- **`legal-core`-plugari** – `oikeustutkimus` (MAO:n, KHO:n ja EU-tuomioistuimen
  käytäntö) ja `toimeksianto`.
- **`company-law`-plugari** – yrityskauppavalvonta osana yritysjärjestelyä.
- **`public-procurement`-plugari** – tarjouskartellit ja tarjousyhteistyön rajat.
- **`contracts`-plugari** – jakelu-, lisenssi- ja yhteistyösopimusten
  lausekkeet.
- **`criminal-procedure`-plugari** – tarjouskartellien mahdollinen rikosulottuvuus.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install kilpailuoikeus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
