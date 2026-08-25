# Insolvenssi

Suomen insolvenssioikeus maksukyvyttömyystilanteisiin: menettelyn valinta
(konkurssi, yrityssaneeraus, yksityishenkilön velkajärjestely), konkurssimenettely
velkojan ja velallisen näkökulmasta sekä saatavien perintä, vanhentuminen ja ulosotto.

> **Arviot ja luonnokset ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Määräajat ovat tässä lajissa kohtalokkaita: jokainen päivämäärä varmistetaan
> lähteestä ja kalenterivastuu on ihmisellä. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **maksukyvyttomyysarvio** | Tilanteen jäsennys ja menettelyn valinta: maksuviivästys vai maksukyvyttömyys, yrityksellä sovinto / varhainen tai perusmuotoinen saneeraus (47/1993) / konkurssi, yksityishenkilöllä sovinto / velkajärjestely (57/1993). Kriisiyhtiön johdon riskit (takaisinsaanti, vastuu). Sisältää insolvenssioikeuden perusteiden referenssin. |
| **konkurssimenettely** | Konkurssin kulku (konkurssilaki 120/2004): edellytykset, hakeminen, pesänhoitaja, saatavien valvonta, jakoluettelo ja maksunsaantijärjestys (1578/1992), takaisinsaanti (758/1991) – velkojan ja velallisen tarkistuslistat. |
| **saatavien-perinta** | Saatavan elinkaari: vapaaehtoinen perintä hyvän perintätavan mukaan (513/1999), vanhentumisen hallinta ja katkaisu (728/2003), oikeudellinen perintä ja ulosotto (705/2007). |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **konkurssilaki (120/2004)**, **laki yrityksen
saneerauksesta (47/1993)** – sisältää 2022 uudistuksen varhaisen ja perusmuotoisen
saneerausmenettelyn – **laki yksityishenkilön velkajärjestelystä (57/1993)**,
**ulosottokaari (705/2007)**, **laki velan vanhentumisesta (728/2003)**, **laki
saatavien perinnästä (513/1999)**, **laki velkojien maksunsaantijärjestyksestä
(1578/1992)** ja **laki takaisinsaannista konkurssipesään (758/1991)**. Pykälätason
sisällöt ja määräajat tarkistetaan käytössä `juristi:oikeustutkimus`-skillillä.

## Liittyy

- **`juristi`-plugari** – `oikeustutkimus`, `asiakirjan-tarkistus` ja `toimeksianto`
  (määräaikaskannaus).
- **`yhtiooikeus`-plugari** – johdon vastuu ja varojenjaon maksukykytesti
  kriisiyhtiössä.
- **`riidanratkaisu`-plugari** – riitautettu saatava ratkaistaan
  oikeudenkäynnissä ennen täytäntöönpanoa.
- **`tyooikeus`-plugari** – työsuhdesaatavat ja palkkaturva työnantajan
  maksukyvyttömyydessä.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install insolvenssi@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
