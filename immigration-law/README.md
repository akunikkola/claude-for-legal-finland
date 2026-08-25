# Ulkomaalaisoikeus

Suomen ulkomaalaisoikeus työnantajan ja avustajan näkökulmasta: työperusteiset
oleskeluluvat, työnantajan velvollisuudet ja seuraamukset sekä EU-kansalaisen,
perheenjäsenen ja pysyvän oleskelun polut kansalaisuuteen asti.

> **Jäsennykset ja luonnokset ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Ulkomaalaislain kokonaisuudistus on valmisteilla ja tulorajat, määräajat ja
> käsittelyajat muuttuvat tiheään – ne haetaan aina lähteestä (Finlex, migri.fi).
> Kansainvälisen suojelun asioita tämä plugari ei kata.
> Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **tyoperusteiset-oleskeluluvat** | Lupatyypin valinta ja hakemuksen jäsennys (ulkomaalaislaki 301/2004): työntekijän oleskelulupa saatavuusharkintoineen, erityisasiantuntija, EU:n sininen kortti, kasvuyrittäjä, kausityö, jatkoluvat ja työnteko-oikeuden laajuus. Sisältää ulkomaalaisoikeuden perusteiden referenssin. |
| **tyonantajan-velvollisuudet** | Työnantajan varmistus-, säilytys- ja ilmoitusvelvollisuudet, seuraamukset (seuraamusmaksu, rikosvastuu), lähetetyt työntekijät (447/2016) ja rekrytointiprosessin compliance-tarkistuslista. |
| **eu-ja-perheperusteinen-oleskelu** | EU-kansalaisen oleskeluoikeuden rekisteröinti ja perheenjäsenet, perheenyhdistäminen toimeentuloedellytyksineen, pysyvä oleskelulupa ja pitkään oleskelleen kolmannen maan kansalaisen asema sekä kansalaisuuden edellytykset (359/2003). |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **ulkomaalaislaki (301/2004)** – ml. termit
työntekijän oleskelulupa, erityisasiantuntija, sininen kortti, kasvuyrittäjä,
työnantajan velvollisuudet ja seuraamusmaksu – **laki työntekijöiden
lähettämisestä (447/2016)** ja **kansalaisuuslaki (359/2003)**. Tulorajat,
käsittelyajat ja lupatyyppien yksityiskohdat tarkistetaan käytössä
`legal-core:legal-research`-skillillä ja migri.fi:stä.

## Liittyy

- **`employment-law`-plugari** – työsuhteen ehdot ovat samat kuin suomalaisella
  (TES, pakottava työlainsäädäntö); alipalkkaus on myös lupariski.
- **`legal-core`-plugari** – `legal-research` (KHO:n käytäntö) ja `engagement-intake`.
- **`administrative-law`-plugari** – Migrin päätökset ovat hallintopäätöksiä:
  muutoksenhaku (808/2019).
- **`criminal-procedure`-plugari** – luvattoman ulkomaisen työvoiman käytön
  rikosepäilyt.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install ulkomaalaisoikeus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
