---
name: injured-party-rights
description: >
  Asianomistajan (rikoksen uhrin) asema ja oikeudet Suomen
  rikosprosessissa: yksityisoikeudelliset vaatimukset, vahingonkorvaus ja
  valtion korvaus, toissijainen syyteoikeus, avustaja ja tukihenkilö sekä
  lähestymiskielto. Käytä tätä skilliä, kun avustetaan rikoksen uhria:
  korvausvaatimusten laatiminen ja määrän perusteleminen, syyttäjän
  ajamispyyntö, rikosvahinkokorvauksen hakeminen Valtiokonttorilta,
  syyttämättäjättämispäätökseen reagointi tai lähestymiskiellon
  hakeminen. Triggeröi sanoista: asianomistaja, rikoksen uhri,
  korvausvaatimus rikosasiassa, kärsimyskorvaus, rikosvahinkokorvaus,
  Valtiokonttori, toissijainen syyteoikeus, asianomistajarikos,
  tukihenkilö, lähestymiskielto.
---

# Asianomistajan asema — vaatimukset ja oikeudet

Tämä skill jäsentää asianomistajan oikeudet ja laatii vaatimusluonnokset.
Perusteet: `../pre-trial-investigation-and-coercive-measures/references/criminal-procedure-fundamentals.md`.

> **Vastuuvapaus:** luonnokset ovat avustajan ja asianomistajan
> tarkistettavia — ei oikeudellista neuvontaa. Korvausmäärät perustellaan
> lähteistä, ei muistista. Katso `criminal-procedure/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki lähteestä

Hae ROL:n asianomistajaa koskevat säännökset, vahingonkorvauslain
(412/1974) korvausperusteet, rikosvahinkolain (1204/2005) edellytykset
ja määräajat sekä Henkilövahinkoasiain neuvottelukunnan suositukset ja
KKO:n korvauskäytäntö **`legal-core:legal-research`-skillillä** ja
virallislähteistä.

## Vaihe 1: Asema ja strategia

- **Asianomistajarikos vai virallisen syytteen alainen?** —
  asianomistajarikoksessa syyttämispyyntö (ja sen peruuttamisen
  seuraukset) ratkaisee — tarkista nimikkeen syyteoikeus lähteestä.
- **Mitä asianomistaja tavoittelee?** Korvaus, rangaistus, turvallisuus
  (lähestymiskielto), vai mahdollisimman kevyt prosessi — strategia ja
  vaatimukset mitoitetaan tavoitteen mukaan.
- **Avustaja ja tukihenkilö**: oikeudenkäyntiavustajan ja tukihenkilön
  määräämisen edellytykset (mm. tietyt rikostyypit) ja oikeusapu
  (257/2002) — tarkista lähteestä; kuluvastuukysymykset selviksi heti.

## Vaihe 2: Yksityisoikeudelliset vaatimukset

1. **Esitä vaatimukset ajoissa** — jo esitutkinnassa yksilöitynä;
   pyydä **syyttäjää ajamaan** selvä ja yksinkertainen vaatimus
   (ROL:n mukainen pyyntö — edellytykset lähteestä; maksutonta
   asianomistajalle). Monimutkainen tai riitainen vaatimus vaatii
   yleensä oman avustajan.
2. **Korvauslajit (412/1974)** — jäsennä erikseen:
   - henkilövahinko (sairaanhoito, ansionmenetys, kipu ja särky,
     pysyvä haitta),
   - **kärsimys** (loukkauksen aiheuttama — edellytykset lähteestä),
   - esinevahinko ja taloudellinen vahinko,
   - selvittelykulut ja oikeudenkäyntikulut.
3. **Määrän perusteleminen** — tositteet, lääkärinlausunnot,
   Henkilövahinkoasiain neuvottelukunnan suositukset ja
   vertailuratkaisut lähteestä `[määrätaso — tarkista lähteestä]`;
   korko vaatimukseen (korkolain mukainen — tarkista).
4. **Vaatimus tuomiossa ≠ raha tilillä** — tuomion täytäntöönpano
   ulosotossa (→ `insolvency:debt-collection`) ja seuraava kohta.

## Vaihe 3: Rikosvahinkolain korvaus (1204/2005)

Valtiokonttori voi maksaa korvauksen rikoksen uhrille valtion varoista:

- Toissijaisuus (vakuutukset ja tuomittu korvaus ensin), korvauslajit
  ja rajaukset, omavastuu ja enimmäismäärät sekä **hakuaika** —
  kaikki lähteestä `[tarkista]`.
- Laadi hakemusluonnos: tuomio tai esitutkinta-aineisto liitteeksi,
  vahinkojen dokumentaatio samalla kertaa.

## Vaihe 4: Kun syyttäjä ei syytä

Syyttämättäjättämispäätökseen reagointi:

1. **Muutosharkintapyyntö** valtakunnansyyttäjälle — vapaamuotoinen,
   perusteltu; jäsennä uusi näyttö tai arviointivirhe.
2. **Toissijainen syyteoikeus** — asianomistaja voi nostaa syytteen
   itse (ROL:n edellytykset lähteestä). Kerro realiteetit:
   näyttötaakka, kuluriski ja vastapuolen kuluvastuu hävitessä —
   `[varmista — rikosjuristin arvioitava]` ennen nostamista.

## Turvaamiskeinot

- **Lähestymiskielto (898/1998)** — perusmuotoinen, laajennettu ja
  perheen sisäinen; edellytykset, hakeminen (poliisi/käräjäoikeus) ja
  rikkomisen seuraukset lähteestä. Laadi hakemusluonnos:
  konkreettiset tapahtumat aikajanalla, todisteet, vaadittu laajuus.
- Turvakielto ja yhteystietojen suojaaminen prosessissa; kuuleminen
  näkösuojan takaa tai videolla (edellytykset lähteestä).

## Mitä tämä skill EI tee

- **Ei lupaa korvauksen määrää** — taso haetaan suosituksista ja
  käytännöstä lähteestä; tuomioistuin harkitsee.
- **Ei aja vastaajan ja asianomistajan asiaa samassa jutussa** —
  eturistiriita (AGENTS.md).
- **Ei vahvista haku- tai muutoksenhakuaikoja muistista** — lähteestä
  tai `[tarkista]`.
- **Ei painosta sovintoon eikä vaatimuksista luopumiseen** — ratkaisut
  ovat asianomistajan.
- **Ei korvaa uhrin tukipalveluita** — ohjaa tarvittaessa
  Rikosuhripäivystykseen (riku.fi) ja oikeusaputoimistoon.

## Jatka tästä

- Esitutkintavaiheen avustaminen → /rikosprosessi:esitutkinta-ja-pakkokeinot
- Syyte ja pääkäsittely → /rikosprosessi:syyte-ja-vastaus
- Korvausperusteen tai -käytännön tarkistus → /juristi:oikeustutkimus
- Tuomitun korvauksen periminen → /insolvenssi:saatavien-perinta
- Hakemusten ja vaatimusten kieliasu → /juristi:asiakirjan-tarkistus
