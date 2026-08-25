---
name: tender-documents-and-bids
description: >
  Tarjouspyynnön laatiminen ja tarjouksen tekeminen julkisessa hankinnassa
  (hankintalaki 1397/2016). Käytä tätä skilliä, kun hankintayksikkö laatii
  tarjouspyyntöä, määrittelee soveltuvuusvaatimuksia tai vertailuperusteita
  tai käsittelee ja vertailee saatuja tarjouksia – tai kun tarjoaja
  analysoi tarjouspyyntöä, laatii tarjousta, kokoaa ryhmittymää, merkitsee
  liikesalaisuuksia tai harkitsee kysymysten esittämistä. Triggeröi
  sanoista: tarjouspyyntö, tarjous, vertailuperuste, soveltuvuusvaatimus,
  kokonaistaloudellinen edullisuus, hinta-laatusuhde, ESPD,
  tarjousvertailu, tarjouksen täsmentäminen, poikkeuksellisen alhainen
  hinta, ryhmittymä, referenssivaatimus.
---

# Tarjouspyyntö ja tarjous — molemmat puolet pöytää

Tämä skill palvelee sekä tarjouspyynnön laatijaa että tarjoajaa.
**Selvitä ensin, kumpaa käyttäjä edustaa**, ja käytä vastaavaa osiota.
Perusteet: `../hankinnan-suunnittelu/references/hankinnat-perusteet.md`.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa. Katso `julkiset-hankinnat/CLAUDE.md`. Määräajat ja
> euromäärät lähteestä.

## Hankintayksikölle: tarjouspyynnön laatiminen

### Rakenne

1. **Hankinnan kohde** — tekninen eritelmä toiminnallisesti tai
   standardein; ei merkkikohtaista vaatimusta ilman "tai vastaava"
   -lisäystä; ympäristö- ja sosiaaliset näkökohdat sallittuja kohteen
   kytkennällä.
2. **Soveltuvuusvaatimukset** (tarjoajaa koskevat) — taloudellinen
   tilanne, tekninen suorituskyky, referenssit; **suhteellisuus**:
   vaatimus mitoitetaan hankinnan kokoon. EU-hankinnoissa ESPD-lomake.
3. **Poissulkemisperusteet** — pakolliset ja harkinnanvaraiset
   (lähteestä).
4. **Vertailuperusteet** (tarjousta koskevat) — kokonaistaloudellinen
   edullisuus: halvin hinta, kustannuksiltaan edullisin tai paras
   hinta-laatusuhde. Painoarvot ja alakriteerit ilmoitetaan etukäteen;
   vertailla saa **vain ilmoitetuilla perusteilla**.
5. **Sopimusehdot** — luonnos mukaan tarjouspyyntöön
   (→ `sopimukset:sopimuksen-laatiminen`); maksuehdot, sanktiot,
   option käyttö.
6. **Muotoseikat** — määräaika, toimitustapa, kysymykset ja vastaukset,
   osatarjoukset ja vaihtoehtoiset tarjoukset (sallittu/kielletty).

**Kultainen sääntö:** soveltuvuusvaatimus karsii tarjoajan,
vertailuperuste pisteyttää tarjouksen — **älä sekoita näitä**; sama
seikka ei voi olla molempia samassa roolissa.

### Tarjousten käsittely

1. Saapuminen määräajassa; myöhästynyt hylätään.
2. Soveltuvuus ja poissulkemisperusteet.
3. **Tarjouspyynnönmukaisuus** — olennaisesti puutteellinen tarjous
   hylätään; **täsmennyttäminen** on sallittua vain rajoitetusti
   (epäolennaiset puutteet, tasapuolisesti — rajat lähteestä; tarjousta
   ei saa parantaa).
4. **Poikkeuksellisen alhainen hinta** — selvityspyyntö ennen hylkäämistä.
5. **Vertailu** ilmoitetuilla perusteilla; pisteytys ja sanalliset
   perustelut dokumentoidaan niin, että tarjoaja näkee sijoittumisensa
   syyt (→ päätösperustelut, 123 §).

## Tarjoajalle: tarjouksen tekeminen

1. **Analysoi tarjouspyyntö** heti: ehdottomat vaatimukset listaksi,
   epäselvyydet kysymyksiksi (kysymysajan määräpäivä kalenteriin
   `[mallin laskelma — tarkista]`). Tarjouspyynnön virheistä ei voi
   valittaa enää tarjousajan jälkeen tehokkaasti — reagoi heti:
   kysymys, oikaisuvaatimus tai valitus.
2. **Tee tarjouspyynnönmukainen tarjous** — jokainen ehdoton vaatimus
   täytetään ja se osoitetaan pyydetyllä tavalla; varauma tai oma
   sopimusehto voi johtaa hylkäämiseen. Vastaa siihen mitä kysytään,
   pyydetyssä muodossa.
3. **Ryhmittymä ja alihankkijat** — yhteisen tarjouksen vastuut ja
   resursseihin vetoaminen (sitoumukset mukaan); kilpailuoikeudellinen
   raja: kilpailijoiden yhteistarjous vain, jos osallistuminen yksin ei
   olisi mahdollista — epävarmassa tilanteessa kilpailuoikeudellinen
   arvio `[varmista — juristin arvioitava]`.
4. **Liikesalaisuudet** — merkitse perustellusti ja täsmällisesti;
   kokonaishinta ei ole liikesalaisuus. Ylimitoitettu merkintä ei sido
   hankintayksikköä.
5. **Hinnoittelu** — poikkeuksellisen alhaiselta vaikuttavaan hintaan
   varaudutaan selvityksellä; sisäinen hyväksyntä ja laskelmien
   dokumentointi.

## Mitä tämä skill EI tee

- **Ei laadi syrjivää tarjouspyyntöä** eikä räätälöi vaatimuksia
  yhdelle toimittajalle — kieltäydy ja ehdota neutraali muotoilu.
- **Ei avusta tarjoajien kielletyssä yhteistyössä** (kartellit,
  hintatietojen vaihto) — kieltäydy ja kerro kilpailulain riski.
- **Ei vahvista määräaikoja tai kynnysarvoja muistista** — lähteestä.
- **Ei tee vertailupäätöstä** — se laatii vertailun luonnoksen ja
  perustelut, päätöksen tekee toimivaltainen.
- **Ei jätä tarjousta** — tarkistuslistat ja luonnokset menevät
  ihmiselle ennen määräaikaa.

## Jatka tästä

- Päätöksen laatiminen, odotusaika ja muutoksenhaku → /julkiset-hankinnat:hankintapaatos-ja-muutoksenhaku
- Menettelyn tai kynnysarvon tarkistus → /julkiset-hankinnat:hankinnan-suunnittelu
- Sopimusluonnoksen lausekkeet → /sopimukset:sopimuksen-laatiminen
- Liikesalaisuusmerkintöjen perusteet → /immateriaalioikeus:liikesalaisuudet
- Tarjouspyynnön tai tarjouksen kieliasu → /juristi:asiakirjan-tarkistus
