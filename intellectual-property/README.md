# Immateriaalioikeus

Suomen immateriaalioikeus yrityksen aineettoman omaisuuden suojaamiseen ja
puolustamiseen: tavaramerkki ja toiminimi, tekijänoikeus ja liikesalaisuudet –
rekisteröintistrategia, loukkausarvio, lisensointi ja sopimuskytkennät.

> **Arviot ja luonnokset ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Plugari ei näe rekistereitä (PRH, EUIPO, WIPO) eikä siksi koskaan vahvista, että
> merkki on vapaa tai keksintö uusi – se tuottaa hakustrategian ihmiselle.
> Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **tavaramerkki-ja-toiminimi** | Tavaramerkin (544/2019) ja toiminimen (128/1979) suoja: rekisteröintistrategia (PRH/EUIPO/Madrid), erottamiskyky, sekaannusvaara-arvio, toiminimi–tavaramerkki–verkkotunnus-törmäykset ja loukkaustilanteen toimintavaihtoehdot. Sisältää IPR-perusteiden referenssin. |
| **tekijanoikeus** | Tekijänoikeus (404/1961, DSM-uudistukset vahvistettu): teoskynnys, taloudelliset ja moraaliset oikeudet, lähioikeudet, työ- ja tilaussuhteen oikeudet (ml. 40 b § tietokoneohjelmista), lisensointi ja luvallinen käyttö. |
| **liikesalaisuudet** | Liikesalaisuuslaki (595/2018): mikä on liikesalaisuus, kohtuulliset suojatoimenpiteet, loukkaustilanteet ja oikeuskeinot, työntekijäulottuvuus ja NDA-kytkös sopimuksiin. Liikesalaisuus vs. patentointi -strategiavalinta. |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **tavaramerkkilaki (544/2019)**, **tekijänoikeuslaki
(404/1961)** – sisältää DSM-direktiivin muutokset (verkkosisällönjakopalvelut,
tekstin- ja tiedonlouhinta) ja 40 b §:n tietokoneohjelmien työsuhdesiirrosta –
**liikesalaisuuslaki (595/2018)**, **patenttilaki (550/1967)**, **mallioikeuslaki
(221/1971)**, **laki hyödyllisyysmallioikeudesta (800/1991)**, **toiminimilaki
(128/1979)**, **laki sopimattomasta menettelystä elinkeinotoiminnassa (1061/1978)**
ja **laki oikeudesta työntekijän tekemiin keksintöihin (656/1967)**. Pykälätason
sisällöt tarkistetaan käytössä `legal-core:legal-research`-skillillä.

## Liittyy

- **`legal-core`-plugari** – `legal-research` (markkinaoikeuden ja KKO:n käytäntö),
  `document-review` ja `engagement-intake`.
- **`contracts`-plugari** – lisenssi-, NDA- ja siirtosopimusten mekaniikka.
- **`employment-law`-plugari** – työsuhteessa syntyvät oikeudet ja kilpailukielto.
- **`company-law`-plugari** – IPR yritysjärjestelyjen due diligencessä.
- **`ai-regulation`-plugari** – tekoäly ja tekijänoikeus (louhintapoikkeus,
  GPAI-mallien läpinäkyvyys).

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install immateriaalioikeus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
