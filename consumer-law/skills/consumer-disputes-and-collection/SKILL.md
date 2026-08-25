---
name: consumer-disputes-and-collection
description: >
  Kuluttajariidan ratkaisukanavat ja kuluttajasaatavan hyvä perintätapa
  (laki kuluttajariitalautakunnasta 8/2007, laki Kilpailu- ja
  kuluttajavirastosta 661/2012 ja laki saatavien perinnästä 513/1999).
  Käytä tätä skilliä, kun kuluttaja vie riidan kuluttajaneuvontaan tai
  kuluttajariitalautakuntaan, valmistellaan valitusta tai vastausta
  lautakuntaan, tai arvioidaan kuluttajasaatavan perinnän
  lainmukaisuutta, perintäkuluja ja maksuvaatimuksen sisältöä.
  Triggeröi sanoista: kuluttajariita, kuluttajariitalautakunta,
  kuluttajaneuvonta, kuluttaja-asiamies, KKV, valitus, ratkaisusuositus,
  perintä, perintäkulut, maksuvaatimus, hyvä perintätapa, viivästyskorko,
  velkomus.
---

# Kuluttajariita ja perintä — ratkaisukanavat ja hyvä perintätapa

Tämä skill jäsentää kuluttajariidan ratkaisukanavat ja kuluttajasaatavan
perinnän pelisäännöt. Kuluttajaoikeuden kartta:
`../kuluttajakaupan-virhevastuu/references/kuluttajaoikeus-perusteet.md`.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa. Perintäkulujen enimmäismäärät ja määräajat tarkistetaan
> lähteestä. Katso `kuluttajaoikeus/CLAUDE.md`.

## Tarkista laki ja käytäntö lähteestä

Hae lakien 8/2007 ja 513/1999 säännökset **`juristi:oikeustutkimus`-skillillä**.
Kuluttajariitalautakunnan ratkaisusuositukset vastaavista asioista ja
perintäkulujen enimmäismäärät lähteestä. KKV:n ja kuluttaja-asiamiehen
linjaukset kkv.fi:stä.

## Osa A: Kuluttajariidan ratkaisukanavat

### Vaihe 1: Suora yhteys ja neuvonta

1. **Reklamaatio elinkeinonharjoittajalle ensin** — yksilöity vaatimus ja
   vastausaika (→ `kuluttajakaupan-virhevastuu`).
2. **Kuluttajaneuvonta (KKV)** — maksuton sovitteluapu, jos vastaus ei
   tyydytä.

### Vaihe 2: Kuluttajariitalautakunta

- **Toimivalta ja edellytykset**: lautakunta antaa kirjallisia
  **ratkaisusuosituksia** kuluttajan ja elinkeinonharjoittajan riitoihin;
  käsittely on maksutonta. Eräät asiat ja arvorajat voivat rajata
  toimivaltaa — `[tarkista lähteestä]`.
- **Valituksen laadinta**: yksilöi osapuolet, hankinta, vaatimus
  perusteineen, tapahtumat aikajärjestyksessä ja liitteet (sopimus,
  reklamaatio, vastaus, kuitit).
- **Vastauksen laadinta** elinkeinonharjoittajalle: vastaa vaatimuksiin
  asiallisesti; muista, ettei pakottavia oikeuksia voi kiistää ehdolla.
- **Suosituksen luonne**: ei täytäntöönpanokelpoinen kuten tuomio, mutta
  noudatetaan laajalti; noudattamatta jättäminen voi johtaa julkisuuteen
  tai oikeudenkäyntiin.

### Vaihe 3: Tuomioistuin

- Sitova ratkaisu käräjäoikeudessa → `riidanratkaisu:haastehakemus`.
  Huomioi oikeudenkäyntikuluriski ja mahdollinen ryhmäkanne/-valitus
  erikseen. Lautakuntakäsittely ei estä tuomioistuinta.

## Osa B: Kuluttajasaatavan perintä

### Vaihe 4: Hyvä perintätapa

Kun elinkeinonharjoittaja perii kuluttajalta (513/1999):

1. **Hyvä perintätapa** on pakottava: ei harhaanjohtavia tai
   kohtuuttomia menettelyjä, ei painostusta, ei aiheettomia kuluja.
2. **Riitautettua tai vanhentunutta saatavaa ei saa periä** kuin
   asianmukaisesti; riitautus keskeyttää tavanomaisen perinnän
   (asia ratkaistaan ensin).
3. **Maksuvaatimuksen sisältö** ja **maksuajat** ovat laissa — tarkista
   vaatimukset lähteestä.
4. **Perintäkulujen enimmäismäärät** kuluttajasaatavassa ovat laissa ja
   pakottavia — **älä esitä euromääriä muistista** `[tarkista]`.
5. **Viivästyskorko** korkolain (633/1982) mukaan — korkokanta lähteestä.

### Vaihe 5: Kuluttajan puolella

- Tarkista saatavan peruste, vanhentuminen ja kulujen oikeellisuus;
  laadi tarvittaessa riitautus ja yhteydenotto.
- Liiallisista perintäkuluista tai hyvän perintätavan rikkomisesta voi
  ilmoittaa valvojalle.

## Mitä tämä skill EI tee

- **Ei esitä perintäkulujen enimmäismääriä, määräaikoja tai korkokantaa
  muistista** — laista tai `[tarkista]`.
- **Ei laadi hyvän perintätavan vastaista perintää** (painostus,
  harhaanjohto, riitautetun saatavan perintä).
- **Ei anna lautakunnan ratkaisua eikä tuomiota** — ne kuuluvat
  lautakunnalle ja tuomioistuimelle.

## Jatka tästä

- Tavaran tai palvelun virhe ja reklamaatio → /kuluttajaoikeus:kuluttajakaupan-virhevastuu
- Etämyynti ja peruuttamisoikeus → /kuluttajaoikeus:etamyynti-ja-peruuttaminen
- Riidan vieminen käräjäoikeuteen → /riidanratkaisu:haastehakemus
- Saatavan perintä, vanhentuminen ja ulosotto yleisesti → /insolvenssi:saatavien-perinta
- Säännöksen tai ratkaisukäytännön tarkistus → /juristi:oikeustutkimus
