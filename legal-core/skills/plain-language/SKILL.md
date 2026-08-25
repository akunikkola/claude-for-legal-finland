---
name: plain-language
description: >
  Juridisen tekstin selittäminen selkeällä yleiskielellä maallikolle —
  asiakkaalle, päämiehelle tai muulle ei-juristille. Käytä tätä skilliä,
  kun pykälä, sopimusehto, päätös, lausunto tai kirjelmä pitää avata
  ymmärrettävään muotoon, kun asiakkaalle laaditaan tiivistelmä siitä
  mitä asiakirja tarkoittaa ja mitä se häneltä edellyttää, tai kun
  juridinen teksti pitää muuttaa yleistajuiseksi merkitystä
  vääristämättä. Triggeröi sanoista: selkokieli, selkokielistä,
  yleiskielistä, selitä asiakkaalle, ymmärrettävä, maallikolle, avaa
  pykälä, mitä tämä tarkoittaa, tiivistä asiakkaalle, plain language.
---

# Selkokielistäjä — juridinen teksti yleiskielelle

Tämä skill kääntää juridisen tekstin selkeään yleiskieleen niin, että
**merkitys säilyy**: asiakas ymmärtää, mistä on kyse ja mitä se häneltä
vaatii, ilman että olennaisia varauksia katoaa.

> **Vastuuvapaus:** selkokielistys on tarkistettava luonnos — ei
> oikeudellista neuvontaa. Yksinkertaistaminen ei saa muuttua
> virheelliseksi neuvoksi. Katso `legal-core/AGENTS.md`.

## Periaate: selkeämpi, ei väärä

Tavoite on **ymmärrettävyys ilman merkityksen vääristymistä**. Älä
poista olennaista ehtoa, varausta tai määräaikaa vain siksi, että se
mutkistaa tekstiä. Jos jokin on epävarmaa tai tulkinnanvaraista, se
sanotaan myös selkokielellä — yksinkertaistettu varmuus on harhaanjohtava.

> **Huom. termistä:** "selkokieli" on myös oma virallinen,
> saavutettavuuteen tähtäävä rekisterinsä omine kriteereineen
> (Selkokeskus). Jos tarvitaan **virallista selkokieltä** (esim.
> saavutettava viranomaisviestintä), kerro, että se on oma standardinsa,
> ja noudata sen kriteerejä; tämä skill tuottaa lähtökohtaisesti
> *selkeää yleiskieltä* maallikolle.

## Vaihe 1: Kenelle ja mihin?

- **Kohdeyleisö**: asiakas, päämies, kuluttaja, työntekijä, viranomaisen
  asiakas? Taustatieto vaikuttaa siihen, mitä on selitettävä.
- **Tarkoitus**: ymmärtää oma tilanne, tehdä päätös, toimia määräajassa,
  hahmottaa riski? Selitys kohdistetaan tarkoitukseen.

## Vaihe 2: Poimi ydin lähtötekstistä

1. **Mitä asiakirja tekee** (velvoittaa, oikeuttaa, päättää, vaatii).
2. **Mitä se vaatii lukijalta** ja **mihin mennessä** (toimet,
   määräajat) — määräajat säilytetään täsmällisinä, ei pyöristetä pois.
3. **Seuraukset**, jos ei toimi.
4. **Avoimet ja tulkinnanvaraiset kohdat.**

Säilytä juridisesti ratkaisevat erot (esim. "saa" vs. "on velvollinen",
"voidaan" vs. "on"). Jos pykälä tai ehto haetaan lähteestä, käytä
`legal-research`-skilliä — älä selitä muistinvaraista sisältöä varmana.

## Vaihe 3: Kirjoita selkeästi

- **Lyhyet virkkeet ja arkiset sanat**; vältä juridista termiä tai
  selitä se ensimmäisellä kerralla suluissa.
- **Aktiivi ja suora puhuttelu** ("sinun on toimitettava…") passiivin
  sijaan, kun se sopii.
- **Jäsennä**: lyhyt yhteenveto ensin, sitten "mitä sinun pitää tehdä",
  "mihin mennessä", "mitä jos et toimi".
- Noudata suomen kielen oikeinkirjoitusta → `legal-core:finnish-language`.
- Säilytä tarvittaessa alkuperäinen pykälä- tai ehtoviittaus sulkeissa,
  jotta lukija löytää lähteen.

## Vaihe 4: Tarkista, ettei merkitys muuttunut

Vertaa selkokielistys lähtötekstiin: onko jokin velvoite, ehto, määräaika
tai varaus kadonnut tai muuttunut? Palauta se. **Selkeys ei saa tulla
oikeellisuuden kustannuksella.**

## Vaihe 5: Rajaa neuvonnasta

- Selitä, **mitä asiakirja sanoo** — älä liu'u siihen, **mitä asiakkaan
  kannattaisi tehdä**, ellei se ole tehtävä ja juristin vastuulla.
  Toimintasuositus on eri asia kuin selitys.
- Lisää loppuun lyhyt huomautus: *"Tämä on selkokielinen tiivistelmä —
  ei oikeudellista neuvontaa. Tarkista alkuperäinen asiakirja."*

## Mitä tämä skill EI tee

- **Ei poista olennaisia ehtoja, varauksia tai määräaikoja** selkeyden
  nimissä.
- **Ei muuta selitystä neuvoksi** ilman juristin vastuuta.
- **Ei selitä muistinvaraista lainsisältöä varmana** → `legal-research`.
- **Ei tuota virallista saavutettavaa selkokieltä** ilman sen
  kriteerien noudattamista.

## Jatka tästä

- Säädöksen tai pykälän tarkistus lähteestä → /juristi:oikeustutkimus
- Suomen kielen oikeinkirjoitus ja tyyli → /juristi:suomen-kieli
- Ruotsinkielinen versio asiakkaalle → /kaksikielisyys:oikeuskielen-kaantaminen
- Koko asiakirjan laaduntarkistus → /juristi:asiakirjan-tarkistus
