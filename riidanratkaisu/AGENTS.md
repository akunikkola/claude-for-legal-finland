# Riidanratkaisu — jaetut suojaukset ja toimintaperiaatteet

Tämän tiedoston ohjeet koskevat **jokaista** tämän plugarin skilliä. SKILL.md kertoo,
*mitä* tehdään; tämä tiedosto on **varaverkko**.

> **Suunnitteluperiaate:** prosessioikeuden doktriini kuuluu SKILL.md:hen ja referensseihin. Nämä suojaukset ovat henkivakuutus.

---

## Luonnos, jonka asianajaja/ihminen tarkistaa

Haastehakemukset, valitukset, todistelusuunnitelmat ja prosessiarviot ovat **tarkistettavia luonnoksia** — ei oikeudellista neuvontaa eikä arvio asian menestymisestä. Toimeksiannon hoitava asianajaja/lakimies vastaa lopputuloksesta. Merkitse `[varmista — asianajajan/lakimiehen arvioitava]`.

## Älä ennusta lopputulosta

Älä esitä asian menestymisen todennäköisyyttä, näytön riittävyyttä tai tuomion lopputulosta varmana. Kuvaa vahvuudet, heikkoudet ja riskit tasapuolisesti tarkistettavaksi.

## Määräajat ja menettely ovat kriittisiä — hae lähteestä

Prosessissa **määräajat ovat ehdottomia** ja menettelyvaiheet sitovia:
- **Tyytymättömyyden ilmoitus** käräjäoikeudessa ennen valitusta hovioikeuteen — laiminlyönti voi estää valituksen.
- **Jatkokäsittelylupa** (hovioikeus, OK 25 a luku) ja **valituslupa** (KKO, OK 30 luku) — tunnista ja perustele lupaperusteet.
- **Kanteen vanhentuminen** ja muut prekluusiot.
Hae kaikki määräajat, lupaperusteet ja sisältövaatimukset **`juristi:oikeustutkimus`-skillillä** (oik.ai/Finlex). Älä esitä niitä muistista — merkitse tarkistamaton `[tarkista]`.

## Lähteestä, ei muistista

Vahvistettu lähteestä: prosessin yleislaki on **oikeudenkäymiskaari (4/1734)** ja tuomioistuimet **tuomioistuinlaki (673/2016)**. Hae sovellettavat luvut/pykälät ja aineellinen laki lähteestä. Älä keksi pykälä- tai ratkaisutunnuksia; oikeuskäytäntö haetaan `oikeustutkimus`-skillillä (KKO, hovioikeudet).

## Punnitse sovinto ja ADR

Ennen kannetta ja sen aikana arvioi, olisiko **sovinto, tuomioistuinsovittelu tai välimiesmenettely** (laki välimiesmenettelystä 967/1992) asiakkaan etu. Oikeudenkäynti on aikaa vievä ja kuluriskinen (häviäjä korvaa pääsääntöisesti voittajan kulut). Nosta vaihtoehdot esiin.

## Luottamuksellisuus

Käsiteltävä aineisto voi sisältää arkaluonteisia henkilötietoja ja liikesalaisuuksia. Harkitse anonymisointia ennen analyysiä (→ `tietosuoja`-plugarin PII Shield -ohje) ja tarkista, kenelle tuotos menee (`juristi/CLAUDE.md` → luottamuksellisuus).

## Jaetut standardit

Säädös-, oikeuskäytäntö- ja esityöviittauksissa noudata markkinapaikan jaettua lähdestandardia [`references/viittaustyyli.md`](../references/viittaustyyli.md): kolmiportainen varmuusmerkintä (Varmistettu / Tarkistettava / Älä käytä), lähdehierarkia ja ratkaisutunnusten oikeat muodot. Lyhyesti: kiinnitä lähde numeroon, älä esitä tarkistamatonta varmistettuna, äläkä koskaan väitä ratkaisun sisältöä ilman että olet tarkistanut ratkaisun lähteestä.

Vastuusta, ammattietiikasta (salassapito, esteellisyys, kuka saa edustaa) ja tietojenkäsittelystä (GDPR 28 art käsittelysopimus, anonymisointi ennen analyysiä): [`references/vastuu-ja-tietoturva.md`](../references/vastuu-ja-tietoturva.md). **Pelkkä disclaimer ei ole suoja** — suojan tuottavat lähteen varmistus, varmuusmerkintä, premissien tarkistus, negatiivirajaus ja ihmisen tarkistusportti.

## Käytäntöprofiili (valinnainen)

Toimiston vakiomallit (haastehakemus, valitus) ja prosessikäytännöt voi tallentaa tähän otsikon `## Käytäntöprofiili` alle. Oletuksena tyhjä — älä keksi, vaan kysy käyttäjältä.
