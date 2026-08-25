# Julkiset hankinnat

Julkisten hankintojen koko kaari hankintalain (1397/2016) mukaan – sekä
hankintayksikön että tarjoajan näkökulmasta: suunnittelu ja menettelyn valinta,
tarjouspyyntö ja tarjous sekä hankintapäätös ja muutoksenhaku.

> **Luonnokset ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Kynnysarvot ja määräajat muuttuvat; ne haetaan aina lähteestä. Odotusaika ja
> valitusajat ovat prekluusiivisia – kalenterivastuu on ihmisellä.
> Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **hankinnan-suunnittelu** | Soveltamisala ja kynnysarvot (lähteestä), ennakoidun arvon laskenta ja pilkkomiskielto, markkinakartoitus, menettelyn valinta (avoin, rajoitettu, neuvottelumenettelyt, puitejärjestely, suorahankinnan suppeat perusteet) ja ilmoittaminen Hilmassa. Sisältää hankintojen perusteiden referenssin. |
| **tarjouspyynto-ja-tarjous** | Hankintayksikölle: tarjouspyynnön rakenne, soveltuvuusvaatimukset vs. vertailuperusteet, kokonaistaloudellinen edullisuus. Tarjoajalle: tarjouspyynnön analyysi, tarjouspyynnönmukainen tarjous, ryhmittymät ja liikesalaisuusmerkinnät. |
| **hankintapaatos-ja-muutoksenhaku** | Hankintapäätös ja perustelut (123 §), odotusaika (129 §) ja sopimuksen tekeminen (128 §), hankintaoikaisu (132–133 §), valitus markkinaoikeuteen (146 §) seuraamuksineen sekä sopimusmuutosten rajat toteutusvaiheessa. |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **laki julkisista hankinnoista ja
käyttöoikeussopimuksista (1397/2016)** – pykäläotsikot 123 § hankintaa koskeva
päätös, 128 § hankintasopimuksen tekeminen, 129 § odotusaika, 132–133 §
hankintaoikaisu, 146 § muutoksenhaun kohde ja rajoitukset – **laki vesi- ja
energiahuollon, liikenteen ja postipalvelujen alalla toimivien yksiköiden
hankinnoista ja käyttöoikeussopimuksista (1398/2016)** sekä **laki julkisista
puolustus- ja turvallisuushankinnoista (1531/2011)**. Kynnysarvot ja muut
euromäärät tarkistetaan käytössä lähteestä (Finlex, Hilma, TEM).

## Liittyy

- **`juristi`-plugari** – `oikeustutkimus` (MAO:n ja KHO:n hankintakäytäntö),
  `asiakirjan-tarkistus` ja `toimeksianto`.
- **`hallinto-oikeus`-plugari** – julkisuuslaki ja asiakirjapyynnöt
  hankinnoissa; hankintayksikön päätöksenteko on julkista vallankäyttöä.
- **`sopimukset`-plugari** – hankintasopimuksen lausekkeet.
- **`tekoalysaantely`-plugari** – tekoälyjärjestelmien hankinta (AI Act
  -velvoitteet käyttöönottajalle).

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install julkiset-hankinnat@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
