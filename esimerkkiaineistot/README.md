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
| [`maaraaikainen-tyosuhde-paattyy`](maaraaikainen-tyosuhde-paattyy/) | määräaikaisuuden peruste, koeaikapurku, irtisanomisaika, menettely | `tyooikeus`, `juristi` |
| [`asuntokauppa-virhe`](asuntokauppa-virhe/) | reklamaatio, virhetyypit, selonottovelvollisuus, taloyhtiön vastuu, välittäjän rooli | `kiinteistot-ja-asuminen`, `juristi` |
| [`tekoaly-kartoitus-verkkokauppa`](tekoaly-kartoitus-verkkokauppa/) | tekoälyrekisteri, kielletty tunteentunnistus, avoimuusvelvoitteet, rekrytointi suuririskisenä, YT ja tuottavuusseuranta, vanhentuneet premissit | `tekoalysaantely`, `tyooikeus`, `tietosuoja` |
| [`yrityskauppa-dd`](yrityskauppa-dd/) | DD-priorisointi, vähemmistöosakas, change of control, ympäristöriski, KKV-arvio | `yhtiooikeus`, `kilpailuoikeus`, `ymparisto-ja-kaavoitus` |

## Arviointikriteerit

Jokaisessa aineistossa on `arviointikriteerit.md` – **käyttäytymislista,
ei mallivastaus**. Se kuvaa, mitä hyvä tuotos *tekee* (nostaa ristiriidat
esiin, merkitsee laskelmat tarkistettaviksi, ei vahvista pykäliä
muistista), ei aineellista lopputulosta. Käytä sitä kahteen asiaan:

1. **Käyttöönoton pilotointi**: aja aineisto skillillä ja vertaa tuotosta
   kriteereihin ennen kuin viet työkaluun oikeaa aineistoa
   (ks. [`../references/kayttoonotto-toimistossa.md`](../references/kayttoonotto-toimistossa.md)).
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
