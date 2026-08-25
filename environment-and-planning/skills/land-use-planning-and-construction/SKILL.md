---
name: land-use-planning-and-construction
description: >
  Kaavoitus ja rakentaminen Suomessa alueidenkäyttölain (132/1999, ent.
  maankäyttö- ja rakennuslaki) ja uuden rakentamislain (751/2023) mukaan.
  Käytä tätä skilliä, kun käyttäjä selvittää kaavatilannetta tai
  kaavamääräysten tulkintaa, osallistuu kaavaprosessiin (mielipide,
  muistutus, valitus), arvioi rakentamisluvan tarvetta tai edellytyksiä,
  hakee poikkeamista, valittaa kaava- tai lupapäätöksestä tai arvioi
  hankkeen toteutettavuutta tontilla. Triggeröi sanoista: kaava,
  asemakaava, yleiskaava, kaavamääräys, kaavamuutos, osallistumis- ja
  arviointisuunnitelma, rakentamislupa, rakennuslupa, poikkeaminen,
  poikkeamislupa, suunnittelutarveratkaisu, rakennusvalvonta,
  purkamislupa, tontti, rakennusoikeus.
---

# Kaavoitus ja rakentaminen

Tämä skill jäsentää kaavoituksen ja rakentamisen lupakysymykset.
**Huom. lainsäädäntö uudistui:** rakentamislaki (751/2023) korvasi
rakentamisen osalta vanhan MRL:n, ja jäljelle jäänyt laki on nyt
nimeltään **alueidenkäyttölaki** (132/1999) — molemmat vahvistettu
lähteestä. Perusteet:
`../environmental-permits-and-supervision/references/environmental-law-fundamentals.md`.

> **Vastuuvapaus:** luonnokset ja arviot ovat tarkistettavia — ei
> oikeudellista neuvontaa. Rakennushankkeen tekninen suunnittelu kuuluu
> suunnittelijoille; kaavatulkinnan vahvistaa viime kädessä
> rakennusvalvonta tai tuomioistuin. Katso
> `environment-and-planning/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki lähteestä

Hae alueidenkäyttölain ja rakentamislain säännökset
**`legal-core:legal-research`-skillillä**: rakentamisluvan kynnys,
lupaedellytykset kaava-alueella ja sen ulkopuolella, poikkeamisen
edellytykset ja valitusajat. **Älä käytä vanhoja käsitteitä**
(rakennuslupa, toimenpidelupa) voimassa olevina — uusi järjestelmä:
**rakentamislupa, purkamislupa, maisematyölupa, sijoittamislupa**
(vahvistettu).

## Kaavajärjestelmä ja kaavatilanteen selvitys

1. **Hierarkia**: valtakunnalliset alueidenkäyttötavoitteet →
   maakuntakaava → yleiskaava → asemakaava. Ylempi ohjaa alempaa;
   yksityiskohtaisin ratkaisee rakentamisen.
2. **Kaavatilanteen selvitys tontille**: voimassa olevat kaavat ja
   määräykset (käyttötarkoitus, rakennusoikeus, kerrosluku,
   suojelumerkinnät), vireillä olevat kaavamuutokset, rakennuskiellot.
   Lähteet: kunnan karttapalvelu ja kaavoituskatsaus — skill ei näe
   niitä, joten laadi selvityslista ihmiselle.
3. **Kaavamääräysten tulkinta**: sanamuoto + kaavaselostus +
   oikeuskäytäntö (KHO lähteestä). Tulkinnanvaraisissa ehdota
   ennakkokeskustelua rakennusvalvonnan kanssa.

## Kaavaprosessiin vaikuttaminen

- **Vaiheet**: vireilletulo (osallistumis- ja arviointisuunnitelma) →
  valmistelu/luonnos (mielipide) → ehdotus (muistutus) → hyväksyminen
  (valtuusto) → valitus hallinto-oikeuteen. Osallistu varhain —
  hyväksymisvaiheessa vaikutusmahdollisuus on jo kapea.
- **Muistutuksen jäsennys**: mihin kaavaehdotuksen kohtaan, mikä
  konkreettinen vaikutus, mikä vaatimus; sido selvityksiin
  (kaavan vaikutusarviointien aukot ovat tehokkain valitusperuste).
- **Kaavavalitus**: valitusoikeus ja -perusteet (laillisuusvalvonta —
  ei tarkoituksenmukaisuus), valitusaika kuulutuksesta
  `[tarkista lähteestä]`. Maanomistajien yhdenvertaisuus,
  selvitysten riittävyys ja menettelyvirheet ovat tyypilliset perusteet.
- Kunnan päätöksenteon yleiset opit: kuntalaki (410/2015) →
  `administrative-law`.

## Rakentamislupa (751/2023)

1. **Tarvitaanko lupa?** Rakentamisluvan kynnys lähteestä — uusi laki
   nosti kynnystä eikä kaikki entinen luvanvarainen enää vaadi lupaa;
   myös purkamis- ja maisematyöluvan tarve tarkistetaan.
2. **Edellytykset**: asemakaava-alueella kaavanmukaisuus;
   kaava-alueen ulkopuolella suunnittelutarve- ja muut edellytykset
   lähteestä. **Sijoittamisen ja toteuttamisen edellytykset** voidaan
   arvioida erikseen (sijoittamislupa — käyttöala lähteestä).
3. **Ilmastoselvitys**: hiilijalanjälki ja -kädenjälki raportoidaan
   rakentamislupaa varten (vahvistettu laista) — soveltamisala ja
   raja-arvot lähteestä.
4. **Naapurit**: kuuleminen ja naapurin suostumukset; naapurin
   valitusoikeus lupapäätöksestä.
5. **Vastuut**: hankkeeseen ryhtyvän ja suunnittelijoiden vastuut
   uudessa laissa — tarkista roolit lähteestä sopimuksia laadittaessa
   (→ `contracts`).

## Poikkeaminen

Kun hanke ei mahdu kaavaan tai säännöksiin: **poikkeamispäätös** tai
vähäinen poikkeaminen luvan yhteydessä — toimivalta, edellytykset
(ei saa aiheuttaa haittaa kaavoitukselle, erityinen syy) ja rajat
lähteestä. Jäsennä: mistä poiketaan, miksi, miksi edellytykset
täyttyvät; naapurien kannat valmiiksi.

## Mitä tämä skill EI tee

- **Ei näe kaavoja, karttapalveluja tai rekistereitä** — se laatii
  selvityslistan; kaavatiedot hakee ihminen kunnasta.
- **Ei vahvista lupakynnyksiä, rakennusoikeuslaskelmia tai
  valitusaikoja muistista** — lähteestä tai `[tarkista]`.
- **Ei tee rakennussuunnittelua** eikä arvioi teknisiä vaatimuksia
  (rakenteet, palo, esteettömyys) — ne suunnittelijoille.
- **Ei käytä vanhentuneita käsitteitä** (MRL, rakennuslupa,
  toimenpidelupa) voimassa olevina.
- **Ei lupaa luvan myöntämistä** — edellytysarvio on aina
  `[varmista — rakennusvalvonta/juristi]`.

## Jatka tästä

- Hankkeen ympäristöluvat ja YVA → /ymparisto-ja-kaavoitus:ymparistolupa-ja-valvonta
- Pilaantunut maaperä tontilla → /ymparisto-ja-kaavoitus:ymparistovastuut
- Säännöksen tai KHO-käytännön tarkistus → /juristi:oikeustutkimus
- Kaava- tai lupavalituksen prosessi → /hallinto-oikeus:muutoksenhaku
- Urakka- ja suunnittelusopimukset → /sopimukset:sopimuksen-laatiminen
