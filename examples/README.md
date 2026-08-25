# Esimerkkiaineistot

Realistisia, **sotkuisia** harjoitusaineistoja, joilla plugareita voi kokeilla
ja arvioida. Nämä eivät ole oppikirjatapauksia siistillä ratkaisuluonnoksella,
vaan oikean toimeksiannon näköisiä työaineistoja: ristiriitaisia,
epätäydellisiä ja juuri siksi hyödyllisiä.

## Laatustandardi

- **Ei valmista ratkaisua, ei piilotettua mallivastausta.** Aineisto saa
  herättää kysymyksiä, mutta se ei ratkaise niitä.
- **Ei näkyviä paikkamerkkejä** itse aineistossa. Henkilöt, päivämäärät ja
  numerot ovat keksittyjä mutta uskottavia.
- **Ristiriidat siellä missä oikeissakin toimeksiannoissa:** päivämäärä,
  muisti, tiedoksianto, laskutapa, toimivalta.
- Aineisto on **fiktiivistä.** Yhtäläisyydet todellisiin henkilöihin tai
  organisaatioihin ovat sattumaa. Säädös- ja ratkaisuviittaukset aineiston
  sisällä voivat olla epätarkkoja – se on osa harjoitusta (tarkista lähteestä).

## Aineistot

| Aineisto | Harjoittaa | Sopiva plugari |
|---|---|---|
| [`fixed-term-employment-ending`](fixed-term-employment-ending/) | määräaikaisuuden peruste, koeaikapurku, irtisanomisaika, menettely | `employment-law`, `legal-core` |
| [`residential-sale-defect`](residential-sale-defect/) | reklamaatio, virhetyypit, selonottovelvollisuus, taloyhtiön vastuu, välittäjän rooli | `real-estate-and-housing`, `legal-core` |
| [`ma-due-diligence`](ma-due-diligence/) | DD-priorisointi, vähemmistöosakas, change of control, ympäristöriski, KKV-arvio | `company-law`, `competition-law`, `environment-and-planning` |

## Arviointikriteerit

Jokaisessa aineistossa on `arviointikriteerit.md` – **käyttäytymislista,
ei mallivastaus**. Se kuvaa, mitä hyvä tuotos *tekee* (nostaa ristiriidat
esiin, merkitsee laskelmat tarkistettaviksi, ei vahvista pykäliä
muistista), ei aineellista lopputulosta. Käytä sitä kahteen asiaan:

1. **Käyttöönoton pilotointi**: aja aineisto skillillä ja vertaa tuotosta
   kriteereihin ennen kuin viet työkaluun oikeaa aineistoa
   (ks. [`../references/firm-adoption.md`](../references/firm-adoption.md)).
2. **Muutosten regressiotestaus**: skillin muokkauksen jälkeen sama ajo
   kertoo, säilyikö käyttäytyminen.

Älä anna kriteeritiedostoa mallille samassa istunnossa aineiston kanssa –
se on arvioijan, ei arvioitavan, työkalu.

## Käyttö

Avaa aineiston kansio, anna tiedostot Claudelle ja pyydä esim.:

- "Arvioi tämän koeaikapurun perusteet ja menettely" → `tyooikeus:tyosuhteen-paattaminen`
- "Onko tämä määräaikaisuus pätevä?" → `tyooikeus:tyosopimus`
- "Tarkista tämä työsopimusote riskien varalta"

Huomaa ristiriidat aineistossa – hyvä tuotos nostaa ne esiin sen sijaan,
että valitsisi yhden tulkinnan hiljaa.
