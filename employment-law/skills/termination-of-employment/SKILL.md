---
name: termination-of-employment
description: >
  Työsuhteen päättämisen arviointi Suomen työoikeuden mukaan (työsopimuslaki 55/2001):
  irtisanominen (henkilöön liittyvä ja tuotannollis-taloudellinen peruste), purkaminen,
  koeaikapurku, menettely, irtisanomisajat ja riskien luokittelu. Käytä tätä skilliä, kun
  käyttäjä harkitsee tai arvioi työntekijän irtisanomista, purkamista, lomautusta tai
  koeaikapurkua, kysyy onko peruste riittävä, mikä on oikea menettely, tai mainitsee
  irtisanomisen, purkamisen, varoituksen, kuulemisen tai irtisanomisajan.
---

# Työsuhteen päättäminen — perusteen ja menettelyn arviointi

Tämä skill arvioi työsuhteen päättämisen aineellisen perusteen ja menettelyn Suomen
työoikeuden mukaan ja luokittelee riskin. **Työntekijän irtisanomissuoja on pakottavaa
oikeutta** — perusteeton tai virheellisesti toteutettu päättäminen johtaa korvausvastuuseen.

> **Vastuuvapaus:** tämä on riskiarvio tarkistettavaksi — ei oikeudellista neuvontaa eikä
> lopullinen kanta päättämisen laillisuudesta. Päättämispäätös kuuluu työnantajalle ja sen
> oikeudellinen arvio työoikeusjuristille. Katso `tyooikeus/CLAUDE.md`. Perusteet:
> `../tyosopimus/references/tyooikeus-perusteet.md`.

## Tarkista laki ja TES lähteestä
Hae työsopimuslain (55/2001) päättämissäännökset ja irtisanomisajat sekä sovellettavan
TES:n määräykset **`juristi:oikeustutkimus`-skillillä**. Hae tarvittaessa relevantti
oikeuskäytäntö (esim. KKO, Työtuomioistuin). Älä arvioi muistinvaraisesti.

## Vaihe 1: Tunnista päättämistapa ja peruste
- **Irtisanominen henkilöön liittyvällä perusteella** — edellyttää **asiallista ja painavaa
  syytä** (esim. työvelvoitteiden olennainen rikkominen/laiminlyönti). Yleensä vaaditaan
  **varoitus**, **kuuleminen** ja mahdollisuus korjata käyttäytyminen ennen irtisanomista.
- **Irtisanominen tuotannollis-taloudellisella (kollektiivi)perusteella** — työn **olennainen
  ja pysyvä vähentyminen**; **työn tarjoamis- ja koulutusvelvollisuus** täytettävä; ei
  korvaavaa työtä tarjolla; takaisinottovelvollisuus voi koskea.
- **Purkaminen** — välitön päättäminen, edellyttää **erittäin painavaa syytä** (vielä korkeampi
  kynnys kuin irtisanominen).
- **Koeaikapurku** — kevyempi, mutta **ei syrjivä eikä epäasiallinen** peruste.
- **Lomautus** — väliaikainen; omat edellytyksensä ja menettelynsä.

Tunnista myös **erityissuojatut ryhmät** (esim. raskaana/perhevapaalla oleva, luottamusmies/
-valtuutettu): korotettu suoja → auto-nosta riski ja merkitse.

Jos laskennan perustana oleva tosiseikka (työsuhteen alkamispäivä, koeajan pituus,
sopimuksen kesto) on aineistossa **ristiriitainen**, laske kaikki skenaariot rinnakkain
ja merkitse jokainen `[mallin laskelma — tarkista]` — älä valitse yhtä tulkintaa hiljaa,
vaikka yksi lähde vaikuttaisi vahvimmalta. Arvioi koeaikapurussa aina myös syrjintäkielto
ja erityissuoja erillisenä kysymyksenä, vaikka purku näyttäisi kariutuvan jo määräaikaan.

## Vaihe 2: Arvioi menettely
- Onko **varoitus** annettu (henkilöperusteinen, kun edellytetään)?
- Onko työntekijää **kuultu** ennen päätöstä?
- Onko **muutosneuvottelut** (yhteistoimintalaki 1333/2021) käyty, jos kyse on
  kollektiiviperusteesta ja yritys ylittää kokorajan? → `yhteistoiminta`-skill.
- Onko **työn tarjoamis-/koulutusvelvollisuus** selvitetty (kollektiiviperuste)?
- Onko **irtisanomisaikaa** noudatettu (laki/TES)?
- Onko päätös tehty määräajassa (purku) ja annettu kirjallisesti perusteluineen pyydettäessä?
- Onko **päättämisilmoituksen** sisältö ja toimitustapa lain mukainen — tarkista lähteestä.

## Vaihe 3: Luokittele riski
- **🟢 VIHREÄ** — peruste vaikuttaa asialliselta ja painavalta, menettely täyttää vaatimukset, ei erityissuojaa loukkaavaa.
- **🟡 KELTAINEN** — peruste mahdollinen, mutta menettelyssä tai näytössä aukkoja (puuttuva varoitus/kuuleminen, dokumentaatio ohut) → korjattava ennen päätöstä.
- **🔴 PUNAINEN** — peruste todennäköisesti riittämätön, menettely olennaisesti puutteellinen, syrjintäepäily tai erityissuojatun ryhmän loukkaus → älä päätä ilman työoikeusjuristin arviota.

## Vaihe 4: Raportoi
Tuota: luokitus + perustelu, päättämistapa ja sovellettu peruste, menettelytarkistuslista
(tehty/puuttuu), irtisanomisaika, sekä konkreettiset korjaavat toimet. Liitä lähteet
(säädös + pykälä `oikeustutkimus`-skillillä, TES nimettynä, mahdollinen oikeuskäytäntö) ja
merkitse tulkinnanvaraiset `[varmista — työoikeusjuristin arvioitava]`. Älä esitä laillisuutta
lopullisena johtopäätöksenä.

Päättämiskirjeen tai -ilmoituksen voi luonnostella (uusi: `docx`-skill; olemassa olevan
muokkaus jälkimuutoksin: `adeu`-MCP), mutta vasta kun peruste ja menettely on arvioitu.

## Mitä tämä skill EI tee

- **Ei tee päättämispäätöstä eikä valitse strategiaa.** Päätös ja vastuu kuuluvat työnantajalle; oikeudellinen arvio työoikeusjuristille.
- **Ei vahvista irtisanomisaikoja eikä määräaikoja sitovasti.** Ne haetaan laista ja sovellettavasta TES:stä ja tarkistetaan tapauskohtaisesti — älä luota tämän skillin muistinvaraiseen lukuun.
- **Ei korvaa muutosneuvotteluja eikä arvioi YT-menettelyn sisältöä** — se kuuluu `yhteistoiminta`-skilliin.
- **Ei anna lopullista syrjintä- tai erityissuoja-arviota.** Syrjintäepäily ja erityissuojatun ryhmän tilanne (raskaus/perhevapaa, luottamusmies) nostavat riskin ja kuuluvat juristille.
- **Ei laadi valmista päättämiskirjettä** ennen kuin peruste ja menettely on arvioitu — luonnos voi muuten vakiinnuttaa virheellisen perusteen.
- **Ei arvioi muiden maiden työoikeutta.** Vain Suomen työoikeus; rajat ylittävissä tilanteissa sano se.

## Jatka tästä

- Kollektiiviperuste ja yritys ylittää YT-kokorajan → `/tyooikeus:yhteistoiminta`
- Lakitekstin, irtisanomisaikojen ja oikeuskäytännön tarkistus lähteestä → `/juristi:oikeustutkimus`
- Päättämiskirjeen tai -ilmoituksen luonnoksen laaduntarkistus → `/juristi:asiakirjan-tarkistus`
- Jos päättämisestä syntyy riita ja harkitaan kannetta yleisessä tuomioistuimessa → `/riidanratkaisu:haastehakemus` (huom: työehtosopimuksen tulkintariita käsitellään työtuomioistuimessa, ei tämän skillin alaa)
