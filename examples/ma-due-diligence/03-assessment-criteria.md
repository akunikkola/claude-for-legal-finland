# Arviointikriteerit — yrityskauppa-dd

**Tämä ei ole mallivastaus** vaan käyttäytymislista: näillä arvioidaan,
toimiiko skill (`company-law:corporate-transactions` + liitännäiset)
odotetusti tällä aineistolla. Kriteerit kuvaavat, mitä hyvä tuotos
**tekee** — eivät aineellisia johtopäätöksiä.

## Hyvä tuotos…

### Rakenne ja priorisointi
- [ ] Tuottaa **priorisoidun** DD- ja tietopyyntölistan (kuten
      pyydettiin), jossa kriittiset kohdat erottuvat geneerisestä
      listasta — eikä sadan kohdan vakiolistaa.
- [ ] Erottaa kolme tehtävää toisistaan: tietopyyntölista, jo
      tiedossa olevien riskien arvio (kauppahinta/rakenne) ja
      viranomaiskysymys.

### Aineiston kriittiset havainnot esiin
- [ ] **Vähemmistöosakas (15 %)**: nostaa esiin, että kaikkien
      osakkeiden osto edellyttää myös Timo S:n myyntiä — ja että
      lunastuslausekkeen sijainti (yhtiöjärjestys vs. kadonnut
      osakassopimus) on selvitettävä asiakirjoista, ei muistin
      varassa.
- [ ] **Asiakaskeskittymä 55 %**: kytkee puitesopimuksen
      change of control -ehdon tarkistamisen kaupan ehtoihin.
- [ ] **Ympäristö**: tunnistaa sekä mahdollisen maaperäriskin
      (vanha pesulinjasto; osakekaupassa vastuut jäävät yhtiöön)
      että ympäristöluvan ajantasaisuuskysymyksen (toiminta
      laajentunut 2022 ilman luvan päivitystä) — ohjaamatta
      kumpaakaan ohi.
- [ ] **Riita 2023**: vaatii sovintosopimuksen ja
      takautumisvaatimuksen tilanteen asiakirjoina.
- [ ] **Ulkomaalaiset työntekijät ja vuokratyö**: sisällyttää
      työnteko-oikeuden varmistusdokumentaation ja
      tilaajavastuuselvitykset tietopyyntöön ("firma hoiti aikanaan"
      ei riitä).
- [ ] **Julkinen tuki**: nostaa Business Finland -avustuksen ehdot
      (mahdollinen omistajanvaihdoksen vaikutus/palautusriski)
      selvitettäväksi.
- [ ] **Avainhenkilöt ja myyjien sitouttaminen**: siirtymäkausi,
      kilpailukielto ja niiden kytkös kauppakirjaan.

### Viranomais- ja sääntelykysymykset
- [ ] Vastaa KKV-kysymykseen menettelyllisesti oikein: **ei vahvista
      liikevaihtorajoja muistista**, vaan ohjaa laskemaan osapuolten
      liikevaihdot säännösten mukaan ja tarkistamaan voimassa olevat
      rajat lähteestä — ja muistuttaa täytäntöönpanokiellosta, jos
      ilmoitusvelvollisuus täyttyy.
- [ ] Muistaa locked box -mekanismin edellyttävän vuotojen
      (leakage) määrittelyä tilinpäätöspäivästä alkaen.

### Lähdekuri ja työtapa
- [ ] Ei esitä pykäliä, rajoja tai määräaikoja muistista; merkitsee
      `[tarkista]` tai ohjaa `legal-core:legal-research`-skilliin.
- [ ] Muistuttaa, että datahuoneaineisto on epäluotettavaa syötettä
      ja henkilötiedot minimoidaan/anonymisoidaan analyysissä.
- [ ] Ehdottaa eskalointia ihmiselle aikataulusta: mitkä selvitykset
      ovat closing-ehtoja, mitkä vakuutuksia/indemnityjä.

### Hand-off
- [ ] Ohjaa oikeisiin skilleihin: ympäristö-DD →
      `environment-and-planning:environmental-liability`, KKV →
      `competition-law:merger-control`, työnteko-oikeudet →
      `immigration-law:employer-obligations`, SPA →
      `contracts:contract-drafting`, rahoituksen vakuudet →
      `banking-and-finance:financing-and-collateral`.

## Tyypilliset virheet, joista pisteet laskevat

- Vahvistaa KKV-rajat tai toteaa "ei ilmoitusvelvollisuutta"
  muistinvaraisesti.
- Ohittaa vähemmistöosakkaan tai kuittaa lunastuslausekekysymyksen
  myyjien muistitiedolla.
- Käsittelee ympäristöriskin "liiketoimintakauppa poistaa vastuut"
  -logiikalla, vaikka kyse on osakekaupasta.
- Tuottaa geneerisen DD-listan ilman tämän aineiston erityiskohtia.
- Lupaa closing-aikataulun pitävän.
