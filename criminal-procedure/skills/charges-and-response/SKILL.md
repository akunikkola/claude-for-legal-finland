---
name: charges-and-response
description: >
  Rikosasian tuomioistuinvaihe Suomessa (laki oikeudenkäynnistä
  rikosasioissa 689/1997): syyteharkinta, haastehakemus, vastaajan vastaus
  ja puolustuksen jäsennys, todistelu, tuomioesitysmenettely ja
  pääkäsittely. Käytä tätä skilliä, kun syyte on nostettu tai haaste
  saatu ja laaditaan vastausta, jäsennetään puolustusta tai todistelua,
  arvioidaan tuomioesityksen (syyteneuvottelun) edellytyksiä,
  valmistaudutaan pääkäsittelyyn tai arvioidaan muutoksenhakua
  rikostuomioon. Käytä myös syyttämättäjättämispäätöksen arviointiin.
  Triggeröi sanoista: syyte, haastehakemus rikosasiassa, vastaus
  syytteeseen, puolustus, kirjallinen menettely, tuomioesitys,
  syyteneuvottelu, pääkäsittely, rangaistusvaatimus, syyttämättä
  jättäminen, rikostuomio, valitus hovioikeuteen.
---

# Syyte ja vastaus — tuomioistuinvaiheen jäsennys

Tämä skill jäsentää rikosasian syytteen nostamisesta tuomioon (ROL
689/1997). Perusteet ja prosessikaari:
`../pre-trial-investigation-and-coercive-measures/references/criminal-procedure-fundamentals.md`.

> **Vastuuvapaus:** tuotokset ovat avustajan työn tukea — ei
> puolustautumisohjeita ilman avustajaa eikä ennustetta lopputuloksesta.
> Katso `criminal-procedure/AGENTS.md` (syyttömyysolettama, negatiivirajaus).

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki lähteestä

Hae ROL:n säännökset, syytteessä mainitun rikoksen **tunnusmerkistö ja
asteikko rikoslaista** sekä KKO:n ennakkopäätökset näyttökynnyksestä ja
mittaamisesta **`legal-core:legal-research`-skillillä**. Syyteoikeuden
vanhentuminen tarkistetaan rikoslaista lähteestä — se on
ehdoton prosessinedellytys.

## Syyteharkinnan lopputulokset

Jäsennä, mihin syyttäjä on päätynyt ja mitä siitä seuraa:

- **Syyte** — haastehakemus tuomioistuimelle.
- **Syyttämättäjättäminen** — prosessuaalinen (ei näyttöä, ei
  syyteoikeutta) tai harkinnanvarainen (vähäisyys, kohtuus ym. —
  perusteet lähteestä). Asianomistajan keinot: muutosharkintapyyntö
  valtakunnansyyttäjälle ja **toissijainen syyteoikeus** →
  `injured-party-rights`.
- **Tuomioesitys (ROL 5 b luku, olemassaolo vahvistettu)** —
  tunnustamisoikeudenkäynti: tunnustus ja lievennetty
  rangaistusasteikko; soveltamisala, edellytykset ja asianomistajan
  suostumuksen tarve lähteestä. Jäsennä päämiehelle punninta:
  lievennys ja nopeus vs. tunnustuksen lopullisuus —
  **ratkaisu on aina päämiehen**.

## Haastehakemuksen analyysi (vastaajan avustajalle)

Pura syyte osiin ennen vastausta:

1. **Teonkuvaus** — mitä täsmälleen väitetään tehdyksi: teko, aika,
   paikka, tahallisuus/tuottamus. Tuomioistuin on sidottu
   teonkuvaukseen (**syytesidonnaisuus**) — puolustus rakennetaan sitä,
   ei otsikkoa, vastaan.
2. **Tunnusmerkistö** — vastaa jokainen teonkuvauksen elementti
   tunnusmerkistöä (lähteestä)? Mikä jää näyttämättä?
3. **Näyttö** — syyttäjän todisteet ja todistusteemat; aukot ja
   vaihtoehtoiset selitykset; esitutkinnan menettelyvirheet ja
   hyödyntämiskielto (edellytykset lähteestä).
4. **Vaatimukset** — rangaistusvaatimus, menettämisseuraamus,
   liiketoimintakielto, ajokielto ym. liitännäiset sekä asianomistajan
   yksityisoikeudelliset vaatimukset — jokaiseen vastattava erikseen.

## Vastauksen rakenne

Laadi vastaus tuomioistuimen pyytämässä muodossa:

- **Kanta syytteeseen**: kiistetäänkö vai myönnetäänkö, ja **miltä
  osin** — täsmällisesti teonkuvauksen osiin sidottuna (esim. teko
  myönnetään, tahallisuus kiistetään; tai vaaditaan lievempää
  rubrisointia).
- **Kiistämisen perusteet** — tosiseikat ja oikeudelliset perusteet
  erikseen.
- **Kanta yksityisoikeudellisiin vaatimuksiin** — peruste ja määrä
  erikseen (määrä voidaan myöntää kohtuulliseksi, vaikka peruste
  kiistetään).
- **Oma todistelu** — todisteet ja todistusteemat; mitä kullakin
  todisteella näytetään.
- **Menettelykannanotot** — kirjallinen menettely (edellytykset
  lähteestä), pääkäsittelyn järjestelyt, salassapitopyynnöt.

## Todistelu (OK 17 luku)

Yleiset opit: `dispute-resolution:evidence` (todistustaakka, näyttökynnys,
hyödyntämiskielto). Rikosspesifit korostukset: syyttäjän todistustaakka
ja **in dubio pro reo**, vastaajan oikeus olla myötävaikuttamatta,
läheisen vaitiolo-oikeus, anonyymi todistelu ja esitutkintakertomuksen
käytön rajat pääkäsittelyssä (edellytykset lähteestä).

## Pääkäsittely ja rangaistus

- Pääkäsittelyn kulku ja keskittämisperiaate; valmistaudu
  kuulusteluteemoilla, älä käsikirjoituksilla.
- **Rangaistuksen määrääminen**: lajivalinta ja mittaaminen (RL:n
  yleiset säännökset lähteestä), lieventävät ja koventavat perusteet,
  aiempi rikollisuus, kohtuullistamisperusteet — jäsennä
  mittaamiskannanotto vertailukäytäntöineen (KKO lähteestä).
- Seuraamuskannanotto myös vaihtoehtoisesti ("jos syyte luetaan
  syyksi") — tämä ei heikennä kiistämistä.

## Muutoksenhaku

Tyytymättömyyden ilmoitus ja valitus määräajoissa `[tarkista
lähteestä]`; jatkokäsittelyluvan tarve hovioikeudessa (soveltamisala
lähteestä) ja KKO:n valituslupa. Mekaniikka:
`dispute-resolution:appeal-against-judgment` — rikosasian erot (mm.
reformatio in pejus -kielto syyttäjän tyytyessä) tarkistetaan
lähteestä.

## Mitä tämä skill EI tee

- **Ei päätä linjasta** (kiistäminen, myöntäminen, tuomioesitys) —
  ratkaisu on päämiehen ja avustajan.
- **Ei ennusta tuomiota tai rangaistusta** — mittaamisarvio on aina
  `[varmista — rikosjuristin arvioitava]` ja sidottu lähteistä haettuun
  käytäntöön.
- **Ei rakenna totuudenvastaisia kertomuksia** eikä sovita todistelua —
  ehdoton kieltäytyminen.
- **Ei vahvista asteikkoja, vanhentumis- tai muutoksenhakuaikoja
  muistista** — lähteestä tai `[tarkista]`.
- **Ei hoida asianomistajan vaatimuksia vastaajan asiassa** —
  eturistiriita; ks. `injured-party-rights` ja CLAUDE.md.

## Jatka tästä

- Esitutkintavaiheen aineisto ja loppulausunto → /rikosprosessi:esitutkinta-ja-pakkokeinot
- Asianomistajan vaatimusten käsittely → /rikosprosessi:asianomistajan-asema
- Tunnusmerkistön, asteikon tai KKO-käytännön tarkistus → /juristi:oikeustutkimus
- Todistelun yleiset opit → /riidanratkaisu:todistelu
- Vastauskirjelmän kieliasu ja rakenne → /juristi:asiakirjan-tarkistus
