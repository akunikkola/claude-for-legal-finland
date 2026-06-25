# Oikeustutkimuksen työkalut — hakustrategiat ja vianetsintä

Tämä referenssi syventää `SKILL.md`:n työnkulkua: miten MCP-työkaluja käytetään tehokkaasti ja mitä tehdä, kun haku ei tuota tulosta.

## oik.ai / Finlex-MCP -työkalut

### `get_legislation` — ajantasainen säädös
Parametrit:
- `year` (numero, esim. 2015) ja `number` (numero, esim. 410) — säädöstunnus 410/2015.
- `part` (osa, roomalainen OSA), `chapter` (luku, esim. `3` tai `26a`), `section` (pykälä, esim. `1` tai `226b`) — valinnaisia.
- `language`: `fin` (oletus) tai `swe`.

Käyttölogiikka:
- **Koko laki**: jätä `part`/`chapter`/`section` pois. Käytä, kun et tiedä pykälän numeroa tai tarvitset yleiskuvan.
- **Yksi luku**: anna vain `chapter`. Hyvä keino paikantaa oikea pykälä isossa laissa.
- **Yksi pykälä**: anna `chapter` + `section` (tai `section` jos laki ei jakaudu lukuihin).
- **Kirjainpäätteet** (lisätyt pykälät): `section: "226b"`, `chapter: "26a"`.

Jos et tiedä säädösnumeroa: älä arvaa. Hae ensin laki nimellä (jos työkalu tukee nimihakua) tai paikanna numero `search_decisions`-haun kautta (ratkaisuissa viitataan säädösnumeroihin), ja vahvista sitten `get_legislation`-haulla.

### `search_decisions` — oikeuskäytäntö
Parametrit: `query` (pakollinen), `court`, `limit` (1–50, oletus 10), `offset` (sivutus).

`court`-arvot: `Korkein oikeus`, `Korkein hallinto-oikeus`, `Hallinto-oikeudet`, `Hovioikeudet`, `Markkinaoikeus`, `Työtuomioistuin`, `Vakuutusoikeus`.

Hakustrategia:
- Aloita **kuvaavilla asiasanoilla**, jotka kuvaavat oikeudellista kysymystä, ei arkikieltä (esim. "sopimuksen kohtuullistaminen OikTL 36 §" ennemmin kuin "epäreilu sopimus").
- Rajaa `court`-arvolla, kun tiedät asteen (esim. verotus → Korkein hallinto-oikeus).
- Jos tuloksia on liikaa tai liian vähän, säädä hakusanoja: lisää lainkohta, poista liian kapea termi, kokeile synonyymia.
- Käytä `offset` + `limit` sivutukseen, kun käyt läpi useita osumia.
- Tunnus haulla: anna `query`-kenttään ratkaisutunnus (esim. "KKO:2024:15") löytääksesi tietyn ratkaisun.

Palautuksessa on `document_path` — vie se `get_decision`-työkalulle.

### `get_decision` — ratkaisun koko teksti
Parametri: `document_path` (`search_decisions`-tuloksesta).

Lue aina koko ratkaisu, kun lopputulos tai perustelut ovat olennaisia. Poimi: asian laatu, oikeuskysymys, lopputulos, keskeiset perustelut ja sovelletut lainkohdat. Hakukatkelma yksinään voi johtaa harhaan.

## laki.ai-MCP -työkalut (vaihtoehtoinen konnektori)

Jos lähdekonnektorina on **laki.ai** (MCP-osoite `https://api.laki.ai/mcp/claude`, OAuth-kirjautuminen) oik.ai:n sijaan, työnkulku on sama mutta työkalut eri nimillä. laki.ai kattaa Finlexin säädökset, hallituksen esitykset (1980→), oikeuskäytännön (KKO, KHO, HO, HAO, MAO, TT, VAKO) ja Verohallinnon syventävät vero-ohjeet.

| laki.ai-työkalu | Vastine oik.ai:ssa | Käyttö |
|---|---|---|
| `search_legal_sources` | `search_decisions` (laajempi) | Hae säädökset, oikeuskäytäntö, esityöt ja Verohallinnon ohjeet hakusanoilla. |
| `read_document` | `get_legislation` / `get_decision` | Avaa säädöksen, ratkaisun tai HE:n koko teksti. |
| `get_table_of_contents` | — | Selaa lähteen luku- ja pykälärakennetta oikean kohdan paikantamiseksi. |
| `search_within_documents` | — | Hae täsmätermejä tunnetuista lähteistä. |
| `get_statute_section_history` | — | Lue pykälän versiohistoria ja aiemmat sanamuodot — hyödyllinen ajantasaisuuden ja muutosten tarkistuksessa. |

Sama kuri pätee konnektorista riippumatta: lue varsinainen teksti, älä hakukatkelmaa; varmista ajantasaisuus (laki.ai:lla `get_statute_section_history` auttaa); merkitse lähde — `(laki.ai)`. Asennus: juuren `QUICKSTART.md` ja <https://laki.ai/fi/claude>.

## Ratkaisutunnusten lukeminen
- `KKO:2024:15` — korkeimman oikeuden ennakkopäätös (yleiset tuomioistuimet: rikos-, riita- ja hakemusasiat).
- `KHO:2023:42` — korkeimman hallinto-oikeuden ennakkopäätös (hallintoasiat: verotus, ympäristö, kaavoitus, sote jne.).
- Ennen vuotta 2000: `KKO 1998:15`, `KHO 1999:72`.
- Alempien tuomioistuinten ratkaisut eivät ole prejudikaatteja; viittaa niihin tuomioistuimen, päivämäärän ja diaarinumeron kanssa.

## Kun haku ei tuota tulosta
1. **Ei osumia**: laajenna hakusanoja, poista `court`-rajaus, kokeile lainkohtaa numeroin ja sanoin.
2. **Väärä laki**: jos epäilet säädösnumeroa, hae koko laki ja tarkista nimi ja soveltamisala ennen pykälään viittaamista.
3. **MCP pois käytöstä**: kerro käyttäjälle, ettei lähdettä voitu tarkistaa. Merkitse vastaus muistinvaraiseksi (`[muistinvarainen — tarkista]`) tai pyydä käyttäjää liittämään lähde.
4. **Ristiriita lähteiden välillä**: jos ajantasainen versio ja tuore muutos ovat eri linjassa, nosta ristiriita esiin äläkä valitse hiljaa toista.

## Muut suomalaiset lähteet (ei välttämättä MCP:ssä)
Dokumentoi ja ohjaa käyttäjää tarvittaessa:
- **Finlex** (finlex.fi) — virallinen, maksuton säädöstietopankki; ajantasainen lainsäädäntö, alkuperäiset säädökset, oikeuskäytäntö, valtiosopimukset.
- **EUR-Lex** (eur-lex.europa.eu) — EU-asetukset, direktiivit, EU-tuomioistuimen ratkaisut.
- **Eduskunta** (eduskunta.fi) — HE:t, valiokuntamietinnöt, täysistuntopöytäkirjat.
- **Lausuntopalvelu** (lausuntopalvelu.fi) — avoimet lausuntokierrokset.
- **Edilex** (edilex.fi) — kaupallinen, laajempi oikeuskirjallisuus ja uutisointi (maksullinen).
- **Eduskunnan oikeusasiamies** (oikeusasiamies.fi) ja **oikeuskansleri** (okv.fi) — laillisuusvalvonnan ratkaisukäytäntö.
