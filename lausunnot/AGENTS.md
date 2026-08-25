# Lausunnot — jaetut suojaukset ja toimintaperiaatteet

Tämän tiedoston ohjeet koskevat **jokaista** tämän plugarin skilliä. SKILL.md kertoo,
*mitä* tehdään; tämä tiedosto on **varaverkko**.

> **Suunnitteluperiaate:** oikea toiminta kuuluu SKILL.md:hen. Nämä suojaukset ovat henkivakuutus, eivät ensisijainen mekanismi.

---

## Luonnos, jonka vastuuhenkilö hyväksyy

Lausunto on **luonnos**, jonka lausunnonantajan vastuuhenkilö tarkistaa ja hyväksyy
ennen lähettämistä. Skill ei päätä organisaation kantaa.

- **Arvolatautuneet ja poliittiset kannanotot** jätetään päättäjien täydennettäväksi, jos asiasta on erimielisyyttä. Kirjoita tällöin neutraalin asiantuntevasti.
- Älä esitä organisaation kantaa varmistettuna, ellei käyttäjä ole sitä vahvistanut.

---

## Voimassa olevan lain tarkistus lähteestä

Lausunnon uskottavuus rakentuu täsmällisille lakiviittauksille. Kun lausunto vertaa
ehdotusta voimassa olevaan lakiin tai viittaa pykälään:

- **Käytä `juristi`-plugarin `oikeustutkimus`-skilliä** ja hae voimassa oleva sanamuoto oik.ai/Finlex-MCP:stä. Älä vahvista lakiviittausta muistista.
- Erota selvästi **voimassa oleva oikeus**, **ehdotettu muutos** ja **lausunnonantajan kanta**.
- Älä keksi säädös-, pykälä- tai HE-numeroita.

---

## Vaikutusarviot: merkitse arviot arvioiksi

Taloudelliset ja muut vaikutusluvut ovat lausunnon vahvin argumentti — ja samalla altein virhelähde.

- Merkitse arvioidut luvut selvästi: `[arvio — varmista organisaation taloushallinnosta]`. Älä esitä arvioitua euromäärää varmistettuna lukuna.
- Suhteuta vaikutukset lausunnonantajan profiiliin (`references/lausunnonantajan-profiili.md`). Jos profiili puuttuu, kysy taustatiedot — älä keksi organisaation kokoa, taloutta tai resursseja.
- Vastustamisen rinnalle aina konkreettinen vaihtoehto.

---

## EU-tausta ja kansallinen liikkumavara

Jos lakiehdotus perustuu EU-säädökseen, erota mikä on **pakollista** (suoraan EU-säädöksestä) ja mikä **kansallista liikkumavaraa**. Kohdista muutosesitykset kansalliseen toimeenpanoon. Älä esitä muutosta sellaiseen, joka tulee suoraan sitovasta EU-asetuksesta.

---

## Jaetut standardit

Säädös-, oikeuskäytäntö- ja esityöviittauksissa noudata markkinapaikan jaettua lähdestandardia [`references/viittaustyyli.md`](../references/viittaustyyli.md): kolmiportainen varmuusmerkintä (Varmistettu / Tarkistettava / Älä käytä), lähdehierarkia ja ratkaisutunnusten oikeat muodot. Lyhyesti: kiinnitä lähde numeroon, älä esitä tarkistamatonta varmistettuna, äläkä koskaan väitä ratkaisun sisältöä ilman että olet tarkistanut ratkaisun lähteestä.

Vastuusta, ammattietiikasta (salassapito, esteellisyys, kuka saa edustaa) ja tietojenkäsittelystä (GDPR 28 art käsittelysopimus, anonymisointi ennen analyysiä): [`references/vastuu-ja-tietoturva.md`](../references/vastuu-ja-tietoturva.md). **Pelkkä disclaimer ei ole suoja** — suojan tuottavat lähteen varmistus, varmuusmerkintä, premissien tarkistus, negatiivirajaus ja ihmisen tarkistusportti.

## Käytäntöprofiili (valinnainen)

Lausunnonantajan pysyvät taustatiedot ja vakiolinjaukset voi tallentaa tähän tiedostoon
otsikon `## Käytäntöprofiili` alle, jolloin skillit lukevat ne joka kerta. Oletuksena
tyhjä — älä keksi tietoja, vaan kysy käyttäjältä.
