# Mallipohjien standardi

Jaettu konventio kaikille tämän markkinapaikan asiakirjapohjille
(`<plugari>/pohjat/*.md`). Sama rooli kuin [`viittaustyyli.md`](viittaustyyli.md):llä
viittauksissa — yksi standardi, johon jokainen pohja nojaa.

## Periaate: luuranko, ei lakitekstiä

Pohja on **rakenteellinen luuranko**: otsikot, pakolliset osat ja
täyttöohjeet. Se **ei sisällä valmista lakitekstiä, pykäläsitaatteja eikä
vakiolausekkeita**, jotka houkuttelisivat käyttämään muistinvaraista
sisältöä sellaisenaan. Sisältö tuotetaan skillillä, joka hakee lainkohdat
lähteestä (`juristi:oikeustutkimus`) — pohja kertoo vain, *mitä osia*
asiakirjassa on oltava ja *mistä* kunkin osan sisältö varmistetaan.

## Kenttäkonventiot

| Merkintä | Tarkoitus | Esimerkki |
|---|---|---|
| `[Kentän nimi]` | Täytettävä tieto | `[Kantajan nimi ja kotipaikka]` |
| `[… — tarkista lähteestä]` | Sisältö haettava lähteestä ennen täyttöä, ei muistista | `[oikaisuvaatimusaika — tarkista päätöksen ohjeesta]` |
| **(pakollinen)** / *(valinnainen)* | Osion asema | otsikon perässä |
| `<!-- ohje: … -->` | Täyttöohje, joka poistetaan valmiista asiakirjasta | kommentti |

## Pakolliset elementit jokaisessa pohjassa

1. **Otsakelohko**: mihin asiakirjaan pohja on, mikä skill sitä käyttää ja
   mistä pakollisten osien luettelo on varmistettu.
2. **Luonnos-footer** valmiin asiakirjan loppuun:
   *"Luonnos. Tarkistettava ennen käyttöä; ei oikeudellista neuvontaa."*
3. **Määrämuotoisissa asiakirjoissa** (esim. testamentti, avioehto)
   muotovaatimusten muistilista, jonka jokainen kohta osoittaa lähteeseen —
   muotovirhe voi tehdä asiakirjasta pätemättömän.

## Käyttö työkaluissa

- Markdown on lähde. **Word-asiakirjaksi**: docx-skill rendaa pohjan
  täytettynä. **Olemassa olevan asiakirjan muokkaus**: Adeu-MCP
  (Track Changes) — älä generoi uutta pohjasta, jos vastapuolen versio on
  jo pöydällä.
- Skill viittaa pohjaan (`pohjat/<asiakirja>.md`) ja täyttää sen
  työnkulkunsa mukaisesti; pohja ei korvaa skillin ohjeita.

## Rajat

- Pohja ei ota kantaa sisältöön eikä strategiaan — se estää *puuttuvan
  osan*, ei väärää sisältöä.
- Ei asiakas- tai organisaatiokohtaisia vakiotekstejä pohjiin;
  ne kuuluvat käytäntöprofiiliin (`juristi:kaytantoprofiili`).
- Pohjien viittauksissa noudatetaan [`viittaustyyli.md`](viittaustyyli.md):tä
  (paikkamerkit, kolmiportainen varmuus).
