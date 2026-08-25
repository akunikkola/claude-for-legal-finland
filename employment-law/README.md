# Työoikeus

Suomen työoikeus työsuhteen elinkaaren keskeisiin tilanteisiin: sopimus, päättäminen ja
yhteistoiminta. Pakottavan lainsäädännön ja työehtosopimusten (TES) ehdoilla.

> **Luonnokset ja riskiarviot ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Päättämispäätös kuuluu työnantajalle; 🔴-tapaukset työoikeusjuristille. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **tyosopimus** | Työsopimuksen laatiminen ja tarkistus (työsopimuslaki 55/2001): ehdot, määräaikaisuus, koeaika, kilpailukielto, TES-yhteensopivuus. Sisältää työoikeuden perusteiden referenssin. |
| **tyosuhteen-paattaminen** | Päättämisen perusteen ja menettelyn arviointi + riskiluokittelu (🟢/🟡/🔴): irtisanominen (henkilö-/tuotannollis-taloudellinen peruste), purku, koeaikapurku, varoitus, kuuleminen, irtisanomisajat. |
| **yhteistoiminta** | Yhteistoiminta ja muutosneuvottelut (yhteistoimintalaki 1333/2021): jatkuva vuoropuhelu, neuvotteluesitys, määräajat, menettelytarkistuslista. |

## Perustana varmistetut säädökset

Lähteestä (oik.ai/Finlex) varmistettu: **työsopimuslaki (55/2001)** ja **yhteistoimintalaki
(1333/2021)** (korvasi vanhan YT-lain 334/2007). Muut lait (työaika-, vuosiloma-,
yhdenvertaisuus-, tasa-arvolaki ym.) ja niiden numerot tarkistetaan `legal-core:legal-research`-skillillä.

## Liittyy

- **`legal-core`-plugari** – `legal-research` (lain ja oikeuskäytännön, mm. Työtuomioistuin, tarkistus) ja `document-review`.
- **`contracts`-plugari** – yleinen sopimusmekaniikka työsopimuksen pohjana.
- **`data-protection`-plugari** – työntekijöiden henkilötiedot (laki yksityisyyden suojasta työelämässä 759/2004).

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install tyooikeus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
