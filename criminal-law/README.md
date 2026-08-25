# Rikosoikeus (aineellinen)

Suomen aineellinen rikosoikeus (rikoslaki 39/1889): milloin teko on rikos, kuka
siitä vastaa ja mitä siitä voi seurata. Täydentää `criminal-procedure`-plugaria, joka
kattaa menettelyn (esitutkinta, pakkokeinot, syyte, asianomistajan asema).

> **Analyysit ovat tarkistettavia luonnoksia – ei oikeudellista neuvontaa eikä
> syyllisyys- tai rangaistusarvion lopputulosta.** Tämä plugari palvelee
> rikosoikeuden ymmärtämistä, puolustusta, asianomistajan asemaa ja compliancea.
> **Se ei avusta rikoksen suunnittelussa, tekemisessä eikä peittelyssä** (todisteet,
> todistajaan vaikuttaminen). Laillisuusperiaate ja syyttömyysolettama ovat
> lähtökohtia; asteikot ja vanhentumisajat haetaan aina lähteestä. Vakavassa
> rikosepäilyssä ohjaa pätevän avustajan puoleen. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **rikosvastuun-perusteet** | Rikosvastuun yleiset edellytykset (rikoslaki 39/1889, yleinen osa): laillisuusperiaate, tunnusmerkistön erittely, tahallisuus ja tuottamus, syyntakeisuus, vastuuvapausperusteet (hätävarjelu, pakkotila) sekä osallisuus ja yritys. Sisältää rikosoikeuden perusteiden referenssin. |
| **keskeiset-rikostyypit** | Rikosnimikkeen tunnistaminen ja tunnusmerkistön erittely ryhmittäin (omaisuus-, väkivalta-, talous-, seksuaali-, huumausaine- ja viranomaisrikokset), tekomuodon (lievä/perus/törkeä) arviointi ja rajanveto lähirikoksiin. Seksuaalirikosten uudistettu luku (2023) huomioitu. |
| **rangaistuksen-maaraaminen** | Rangaistuslaji ja -asteikko, mittaaminen koventamis- ja lieventämisperusteineen, ehdollinen ja ehdoton vankeus, yhdyskuntaseuraamukset, päiväsakko, yhteinen rangaistus, menettämisseuraamus sekä syyteoikeuden ja rangaistuksen vanhentuminen. |

## Perustana varmistettu säädös

Lähteestä (Finlex) varmistettu: **rikoslaki (39/1889)** — ajantasaversion
asiakirjatunnus 18890039001 — sekä **laki sakon ja rikesakon määräämisestä
(754/2010)**. Tunnusmerkistöt, rangaistusasteikot ja vanhentumisajat tarkistetaan
käytössä `legal-core:legal-research`-skillillä; rikoslakia muutetaan jatkuvasti.

## Liittyy

- **`criminal-procedure`-plugari** – menettely: esitutkinta ja pakkokeinot, syyte ja
  vastaus, asianomistajan asema. Tämä plugari on aineellinen pari sille.
- **`dispute-resolution`-plugari** – rikoksesta johtuva vahingonkorvaus.
- **`taxation`-, `company-law`- ja `banking-and-finance`-plugarit** – talousrikosten
  siviili- ja sääntelykytkennät.
- **`legal-core`-plugari** – `legal-research` (KKO:n käytäntö) ja `engagement-intake`.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install rikosoikeus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
