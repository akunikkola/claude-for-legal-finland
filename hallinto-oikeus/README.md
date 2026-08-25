# Hallinto-oikeus

Suomen hallinto-oikeus ja julkishallinto: hallintopäätökset, muutoksenhaku ja
asiakirjajulkisuus.

> **Luonnokset ja arviot ovat tarkistettavia – ei oikeudellista neuvontaa.** Viranomainen
> vastaa päätöksestään. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **hallintopaatos** | Hallintopäätöksen laatiminen ja tarkistus (hallintolaki 434/2003): hyvä hallinto, kuuleminen, esteellisyys, perustelu, muutoksenhakuohjaus. Sisältää hallinto-oikeuden perusteiden referenssin. |
| **muutoksenhaku** | Oikaisuvaatimus ja valitus (laki oikeudenkäynnistä hallintoasioissa 808/2019): muutoksenhakutie, määräajat, valitusoikeus, valituksen sisältö, valituslupa. |
| **julkisuus-ja-tietopyynnot** | Asiakirjajulkisuus ja tietopyyntöihin vastaaminen (julkisuuslaki 621/1999): julkisuusperiaate, salassapitoperusteet, määräajat, kielteinen päätös. |

## Agentit

| Agentti | Mitä tekee |
|---|---|
| **salassapitoarvioija** | Valmistelee julkisuusarvion (621/1999): käy asiakirjan kohta kohdalta, merkitsee salassapitoehdokkaat säännösperusteineen ja vahinkoedellytyksineen ja tuottaa peittoehdotuksen – osittainen julkisuus pääsääntönä. Esitys; viranhaltija päättää. Vain luku. |

## Perustana varmistetut säädökset

Lähteestä (oik.ai/Finlex) varmistettu: **hallintolaki (434/2003)**, **laki oikeudenkäynnistä
hallintoasioissa (808/2019)** (korvasi hallintolainkäyttölain 586/1996) ja **julkisuuslaki
(621/1999)**. Erityislait ja kuntalaki (410/2015) tarkistetaan `juristi:oikeustutkimus`-skillillä.

## Liittyy

- **`juristi`-plugari** – `oikeustutkimus` (lain ja KHO/hallinto-oikeus-käytännön tarkistus) ja `asiakirjan-tarkistus`.
- **`tietosuoja`-plugari** – julkisuuden ja henkilötietojen suojan yhteensovittaminen.
- **`lausunnot`-plugari** – kunnan/viranomaisen lausunnot lakiehdotuksiin.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install hallinto-oikeus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
