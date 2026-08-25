# Kiinteistöt ja asuminen

Suomen kiinteistö- ja asunto-oikeus: kiinteistökauppa ja kirjaamisasiat,
asuntokauppa virhevastuineen, asunto-osakeyhtiön kunnossapito ja hallinto sekä
asuin- ja liikehuoneistojen vuokrasuhteet.

> **Luonnokset ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Kiinteistön kauppa on määrämuotoinen, reklamaatioajat ovat armottomia ja
> kiinteistö/asunto-osake-rajanveto ratkaisee sovellettavan lain – nämä on
> leivottu suojauksiin. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **kiinteistokauppa** | Maakaari (540/1995): kaupan määrämuoto ja kaupanvahvistus (ml. MML:n sähköinen kaupankäynti), kauppakirjan ehdot, lainhuuto ja kiinnitykset, virhetyypit (laatu-, vallinta- ja oikeudellinen virhe), reklamaatio ja seuraamukset. Sisältää alan perusteiden referenssin. |
| **asuntokauppa** | Asuntokauppalaki (843/1994): uudiskohde ja RS-järjestelmä, käytetyn asunnon kauppa, myyjän tiedonantovelvollisuus ja ostajan tarkastusvelvollisuus, virhearviointi ja reklamaatio, kytkös taloyhtiön tietoihin. |
| **asunto-osakeyhtio** | Asunto-osakeyhtiölaki (1599/2009): kunnossapitovastuun jako, osakkaan muutostyöt, yhtiökokous ja hallinto, yhtiövastike, lunastuslausekkeet ja osakkaan riitatilanteet. |
| **vuokrasopimukset** | Asuinhuoneiston (481/1995) ja liikehuoneiston (482/1995) vuokraus: sopimuksen laatiminen, vuokrankorotus, vakuus, irtisanominen ja purkaminen – molempien osapuolten näkökulmasta, pakottavuuserot huomioiden. |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **maakaari (540/1995)** – ml. termit
kaupanvahvistaja, sähköinen kaupankäyntijärjestelmä, lainhuuto, kiinnitys sekä
virhetyypit laatu-, vallinta- ja oikeudellinen virhe – **asuntokauppalaki
(843/1994)**, **asunto-osakeyhtiölaki (1599/2009)**, **laki asuinhuoneiston
vuokrauksesta (481/1995)**, **laki liikehuoneiston vuokrauksesta (482/1995)**,
**laki kiinteistöjen ja vuokrahuoneistojen välityksestä (1074/2000)** ja
**kiinteistönmuodostamislaki (554/1995)**. Pykälätason sisällöt ja määräajat
tarkistetaan käytössä `juristi:oikeustutkimus`-skillillä.

## Liittyy

- **`juristi`-plugari** – `oikeustutkimus` (KKO:n virhe- ja reklamaatiokäytäntö),
  `toimeksianto` (reklamaatioaikojen skannaus) ja `asiakirjan-tarkistus`.
- **`sopimukset`-plugari** – yleinen sopimusmekaniikka kauppakirjan ja
  vuokrasopimuksen pohjana.
- **`ymparisto-ja-kaavoitus`-plugari** – kaavatilanne, rakentamisluvat ja
  pilaantunut maaperä kiinteistökaupassa.
- **`riidanratkaisu`-plugari** – virheriidan vieminen tuomioistuimeen.
- **`insolvenssi`-plugari** – vuokrasaatavien perintä ja häätö
  täytäntöönpanona.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install kiinteistot-ja-asuminen@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
