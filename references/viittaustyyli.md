# Viittaus- ja lähdestandardi

**Versio 1.0 – 4.6.2026.** Tämä on koko `claude-for-legal-finland`
-markkinapaikan **jaettu, sitova lähdestandardi.** Jokaisen plugarin
`CLAUDE.md` viittaa tähän, ja jokainen skill noudattaa tätä, kun se viittaa
säädökseen, oikeuskäytäntöön tai esitöihin.

> **Periaate:** lähteen varmistus ja epävarmuuden näkyväksi tekeminen ovat
> tämän kokoelman tärkein suojaus – eivät disclaimerit. Pelkkä loppuhuomautus
> "ei oikeudellista neuvontaa" ei suojaa ketään. Suojaa se, että jokainen
> juridista painoa kantava väite on joko **tarkistettu lähteestä** tai
> **merkitty selvästi tarkistettavaksi.**

Yksityiskohtaiset suomen kielen ja pykäläviittausten säännöt ovat
`juristi`-plugarissa: [`juristi/skills/juristi/references/viittaukset.md`](../juristi/skills/juristi/references/viittaukset.md)
ja [`.../lahteet.md`](../juristi/skills/juristi/references/lahteet.md). Tämä
tiedosto on niiden yläpuolella oleva **yhteinen minimistandardi**.

---

## 1. Kolmiportainen varmuusmerkintä (pakollinen)

Jokainen juridista painoa kantava väite kuuluu yhteen kolmesta luokasta.
Lukijan on nähtävä luokka **yhdellä silmäyksellä**, väitteen vierestä.

| Luokka | Milloin | Miten merkitään |
|---|---|---|
| **Varmistettu** | Lainkohta tai ratkaisu on haettu ja tarkistettu lähteestä (oik.ai/Finlex) tässä istunnossa. | Lähde numeron perään: `(kuntalaki 410/2015, 7 §, Finlex)` tai `(oik.ai)`. |
| **Tarkistettava** | Uskottava mutta varmistamaton: muistinvarainen lainkohta, mallin laskema luku tai määräaika, tulkinta joka vaatii asiantuntijan. | Merkintä väitteen viereen: `[muistinvarainen — tarkista Finlexistä]`, `[mallin laskelma — tarkista]`, `[varmista — juristin arvioitava]`. |
| **Älä käytä** | Ei voida tarkistaa eikä esittää varmana: keksitty ratkaisutunnus, säädös- tai HE-numero, lähteetön sitaatti. | **Ei tuoteta lainkaan.** Jos tieto on välttämätön, sano että se on tarkistettava, äläkä keksi tunnusta. |

**Älä koskaan** esitä Tarkistettava-luokan tietoa Varmistettuna. Mieluummin
yleinen muotoilu ("korkeimman oikeuden vakiintuneen käytännön mukaan…")
kuin keksitty täsmällinen tunnus.

---

## 2. Lähdehierarkia

1. **Ensisijaiset, viralliset, tarkistettavat:** Finlex (ajantasainen
   säädöskanta, alkuperäissäädökset, oikeuskäytäntö), oik.ai-MCP, Eduskunnan
   verkkopalvelu (HE:t, valiokuntamietinnöt), tuomioistuinten omat julkaisut,
   EUR-Lex (EU-säädökset), curia.europa.eu (EUT).
2. **Toissijaiset, suuntaa antavat:** kirjallisuus, kommentaarit, artikkelit
   – vain jos käyttäjä toimittaa lähteen tai lisensoitu live-haku vahvistaa sen.
3. **Ei lähteeksi:** mallin muisti yksinään. Muistinvarainen tieto on aina
   Tarkistettava-luokkaa (ks. kohta 1).

**Tarkista aina, että säädös on voimassa** (ei kumottu/muutettu) ja että kyse
on oikeasta, ajantasaisesta versiosta. Huomioi siirtymäsäännökset.

---

## 3. Viittausmuodot

**Säädökset**
- Ensimaininnalla nimi + numero: *kuntalain (410/2015) 7 §:ssä*.
- §-merkki ja numero **aina yhdessä**: `7 §` (ei "pykälä 7"); taivutus
  kaksoispisteellä: `§:n`, `§:ssä`, `§:ään`.
- Pykäläväli ajatusviivalla: `2–4 §` (ei yhdysviivalla). a-pykälät huomioiden.
- Lakien nimet pienellä alkukirjaimella: *kuntalaki, rikoslaki*.

**Oikeuskäytäntö** – ratkaisutunnus täsmällisesti:
- Korkein oikeus: `KKO:VVVV:NN`. Korkein hallinto-oikeus: `KHO:VVVV:NN`
  (vuosi nelinumeroisena, juokseva numero ilman etunollia).
- Hovioikeus, markkinaoikeus, työtuomioistuin, vakuutusoikeus: kunkin
  vakiintunut tunnusmuoto; jollei ennakkopäätösnumeroa, käytä diaarinumeroa
  ja antopäivää.
- Euroopan unionin tuomioistuin: asia `C-123/22`, tuomion antopäivä.
- **Älä koskaan** liitä ratkaisuun väitettä sen sisällöstä, ellet ole
  tarkistanut ratkaisua lähteestä. Tunnuksen olemassaolo ei riitä – saman
  tunnuksen takana voi olla aivan toinen asia (yleisin hallusinaation muoto).

**Esityöt**
- Hallituksen esitys: `HE 268/2014 vp, s. 145` (vp = valtiopäivät, sivu jos
  viitataan kohtaan).
- Valiokuntamietinnöt vakiintuneella lyhenteellä (esim. `PeVL`, `LaVM`).

**EU-säädökset**
- Asetus: *asetus (EU) 2024/1689* (numero/vuosi unionin tyylin mukaan).
- Direktiivi: *direktiivi (EU) 2019/790*. Mainitse kansallinen
  täytäntöönpanolaki, jos sellainen on.

---

## 4. Esimerkkikuri (oppi sisarprojektista)

Saksalaisen sisarprojektin auditointi 3 228 ratkaisutunnuksesta paljasti, että
noin 58 % oli väärään asiaan viittaavia, löytymättömiä tai
varmistamattomia – ja **esimerkkiteksteihin upotetut tunnukset valuivat
oikeisiin tuotoksiin.** Siksi:

- **Reference- ja malliteksteissä käytä ilmiselviä paikkamerkkejä:**
  `KKO:VVVV:NN`, `KHO:VVVV:NN`, `HE n/vvvv vp`, `[säädös x/vvvv]`.
- Jos esimerkki näyttää oikealta tunnukselta, **merkitse koko esimerkki
  keksityksi** ("havainnollistava malli, ei oikea ratkaisu").
- Älä koskaan kirjoita malliesimerkkiin lausetta, joka väittää tietyn
  todellisen ratkaisun sisällön ("ratkaisussa KKO:2024:15 todettiin, että…"),
  ellei kyse ole tarkistetusta sitaatista. Käytä joko paikkamerkkiä tai
  avointa muotoa "…ratkaisussa katsottiin, että…".

---

## 5. Provenienssi numeroon, ei kappaleeseen

Merkintä kuuluu **sen rivin viereen, jota se koskee** – ei kappaleen loppuun
yleisenä varauksena. Lukija näkee yhdellä silmäyksellä, mikä on tarkistettua
ja mikä päättelyä. Älä kerää kaikkia varauksia tekstin loppuun.

---

*Päivitä versionumero ja päiväys, kun standardia muutetaan. Validaattori
(`scripts/validate.mjs`) valvoo viittausten teknistä muotoa (mm.
numero-pilkku-ansa); tämä tiedosto valvoo sisältöä ja varmuutta.*
