# Kuluttajaoikeus

Suomen kuluttajaoikeus elinkeinonharjoittajan ja kuluttajan välisessä kaupassa:
tavaran ja palvelun virhevastuu, etä- ja kotimyynnin peruuttamisoikeus,
markkinoinnin lainmukaisuus sekä kuluttajariitojen ratkaisu ja kuluttajasaatavan
hyvä perintätapa.

> **Luonnokset ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Kuluttajansuojalaki on **pakottava kuluttajan hyväksi**: ehto, joka heikentää
> kuluttajan lakisääteisiä oikeuksia, on mitätön. Laki muuttuu tiheään
> EU-direktiivien myötä, joten luvut, määräajat ja perintäkulujen enimmäismäärät
> haetaan aina lähteestä. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **kuluttajakaupan-virhevastuu** | Tavaran ja palvelun virheen arviointi ja kuluttajan oikaisukeinot porrastettuna (korjaus tai vaihto, hinnanalennus, kaupan purku, vahingonkorvaus), reklamaatio ja takuun suhde lakisääteiseen virhevastuuseen (kuluttajansuojalaki 38/1978). Sisältää kuluttajaoikeuden perusteiden referenssin. |
| **etamyynti-ja-peruuttaminen** | Etä- ja kotimyynnin ennakkotiedot, kuluttajan peruuttamisoikeus poikkeuksineen, peruuttamislomake ja -ohje sekä sopimattoman ja harhaanjohtavan markkinoinnin arviointi. |
| **kuluttajariita-ja-perinta** | Riidan ratkaisukanavat kuluttajaneuvonnasta kuluttajariitalautakuntaan (8/2007) ja tuomioistuimeen sekä kuluttajasaatavan hyvä perintätapa, perintäkulut ja maksuvaatimus (513/1999), viivästyskorko (korkolaki 633/1982). |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **kuluttajansuojalaki (38/1978)**, **laki
kuluttajariitalautakunnasta (8/2007)**, **laki Kilpailu- ja kuluttajavirastosta
(661/2012)**, **laki saatavien perinnästä (513/1999)** ja **korkolaki
(633/1982)**. Lukujen sisältö, määräajat ja perintäkulujen enimmäismäärät
tarkistetaan käytössä `juristi:oikeustutkimus`-skillillä ja kkv.fi:stä.

## Liittyy

- **`contracts`-plugari** – B2B- ja yksityishenkilöiden välinen kauppa
  (kauppalaki, yleinen sopimusoikeus); kuluttajansuojalakia ei sovelleta niihin.
- **`insolvency`-plugari** – saatavien perintä, vanhentuminen ja ulosotto
  yleisesti.
- **`dispute-resolution`-plugari** – riidan vieminen käräjäoikeuteen.
- **`data-protection`-plugari** – suoramarkkinointi ja henkilötietojen käsittely.
- **`legal-core`-plugari** – `oikeustutkimus` (lautakunnan ja KKO:n käytäntö).

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install kuluttajaoikeus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
