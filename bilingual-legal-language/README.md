# Kaksikielisyys (FI/SV)

Suomi–ruotsi-kaksikielisyyden tuki juridisessa työssä: oikeuskielen kääntäminen
vakiintunutta termistöä käyttäen sekä kielelliset oikeudet ja viranomaisen
kielelliset velvoitteet. Suomen säädökset säädetään molemmilla kansalliskielillä,
ja oikeustermien vastineet ovat virallisia — ei vapaasti käännettäviä.

> **Käännökset ja arviot ovat tarkistettavia luonnoksia – ei oikeudellista
> neuvontaa eikä virallinen käännös.** Virallisen tai oikeudessa käytettävän
> käännöksen tekee auktorisoitu kääntäjä. Oikeustermiä ei keksitä, vaan käytetään
> vakiintunutta vastinetta virallisesta lähteestä (Finlexin rinnakkaisteksti,
> valtioneuvoston termipankki). Saamen kielen oikeudet ovat oma kokonaisuutensa.
> Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **oikeuskielen-kaantaminen** | Juridisen tekstin kääntäminen FI↔SV merkitys säilyttäen: säädösten viralliset ruotsinkieliset nimet Finlexin rinnakkaistekstistä, oikeustermien vakiintuneet vastineet termipankeista, kaksikielisen asiakirjan laadinta ja käännöksen tarkistuslista. Sisältää termistö- ja lähdereferenssin. |
| **kielelliset-oikeudet-ja-velvoitteet** | Yksilön asiointikieli ja viranomaisen kielelliset velvoitteet (kielilaki 423/2003, perustuslaki 731/1999 17 §): kaksikielisen ja yksikielisen viranomaisen ero, käännös- ja tiedoksiantovelvollisuus, päätöksen kieli, henkilöstön kielitaito (424/2003) ja saamen kielen oikeudet erikseen (1086/2003). |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **kielilaki (423/2003)**, **Suomen perustuslaki
(731/1999, 17 §)**, **laki julkisyhteisöjen henkilöstöltä vaadittavasta
kielitaidosta (424/2003)** ja **saamen kielilaki (1086/2003)**. Säädösten
viralliset ruotsinkieliset nimet ja termien vakiintuneet vastineet tarkistetaan
käytössä Finlexin rinnakkaistekstistä ja virallisista termilähteistä.

## Liittyy

- **`legal-core`-plugari** – `finnish-language` (suomen oikeinkirjoitus) ja
  `legal-research` (säädöksen ruotsinkielinen teksti Finlexistä).
- **`administrative-law`-plugari** – päätöksen kieli, tiedoksianto ja
  muutoksenhaku; kielellisten oikeuksien toteutuminen menettelyssä.
- Kaikki muut plugarit – kaksikielistä asiakirjaa tai termistöä tarvittaessa.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install kaksikielisyys@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
