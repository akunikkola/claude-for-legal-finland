# Lausunnot

Lausunnon laatiminen lakiuudistuksiin ja lakiluonnoksiin minkä tahansa lausunnonantajan
näkökulmasta: kunta, kaupunki, kuntayhtymä, virasto, järjestö tai yritys.

> **Lausunto on luonnos, jonka lausunnonantajan vastuuhenkilö tarkistaa ja hyväksyy.**
> Arvovalinnat jätetään päättäjille. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **lausuntoapuri** | Seitsemän vaiheen työnkulku: rajaus, lähtötietojen haku, lakiehdotuksen analyysi, muiden lausuntojen analyysi, lausunnon kirjoittaminen, tarkistus ja lähettäminen. Kahdeksan referenssiä (analyysin työkalut, vaikutusarviointi, rakenne, esimerkit, kirjoitusohjeet, tietolähteet, Lausuntopalvelu-ohje, lausunnonantajan profiilimallipohja). |

## Lausunnonantajan profiili

`references/lausunnonantajan-profiili.md` on tyhjä mallipohja. Täytä oman organisaatiosi
tiedot (tyyppi, koko, toimiala, resurssit, erityispiirteet), niin vaikutusarviot
suhteutetaan juuri siihen. Voit myös tallentaa tiedot pysyvästi `CLAUDE.md`:n
käytäntöprofiiliin.

## Liittyy

- **`juristi`-plugari** – `oikeustutkimus` (voimassa olevan lain ja oikeuskäytännön haku oik.ai/Finlexistä, jota lausuntoapuri käyttää vertailussa) ja `asiakirjan-tarkistus` (lausunnon perusteellinen tarkistus).
- **`lainvalmistelu`-plugari** – säädösvalmistelun puoli; lausunnot ovat valmisteluprosessin toinen pää.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install lausunnot@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
