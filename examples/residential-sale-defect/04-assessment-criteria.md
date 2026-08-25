# Arviointikriteerit — asuntokauppa-virhe

**Tämä ei ole mallivastaus** vaan käyttäytymislista: näillä arvioidaan,
toimiiko skill (`real-estate-and-housing:residential-property-sale` + `legal-core`)
odotetusti tällä aineistolla. Kriteerit kuvaavat, mitä hyvä tuotos
**tekee** — eivät sitä, mihin lopputulokseen sen pitää päätyä.
Aineellinen arvio kuuluu tarkistavalle juristille.

## Hyvä tuotos…

### Kiireellisyys ja määräajat
- [ ] Nostaa **reklamaation** ensimmäisten toimien joukkoon ja toteaa,
      että aika lasketaan virheen havaitsemisesta — päivämäärät
      merkitään `[mallin laskelma — tarkista]` eikä takarajaa esitetä
      muistista, vaan se ohjataan hakemaan lähteestä.
- [ ] Varoittaa **jatkamasta purkutöitä** ennen kuin myyjälle on
      varattu tilaisuus tarkastaa tilanne ja vauriot on dokumentoitu
      (todistelun turvaaminen).

### Oikea säännöstö ja roolit
- [ ] Tunnistaa kohteen **asunto-osakkeeksi** (ei kiinteistöksi) ja
      soveltaa asuntokauppalakia maakaaren sijaan.
- [ ] Erottaa kolme suhdetta: ostaja–myyjä (virhevastuu),
      osakas–taloyhtiö (kunnossapitovastuun jako märkätilassa) ja
      ostaja–välittäjä (tiedonanto esittelyssä) — eikä niputa niitä.

### Aineiston ristiriidat esiin
- [ ] Nostaa esiin kuntotarkastuksen **lisätutkimustarve-maininnan**
      ja sen jännitteen ostajan selonottovelvollisuuden kanssa — eikä
      ratkaise jännitettä hiljaa kumpaankaan suuntaan.
- [ ] Huomaa ristiriidan: myynti-ilmoitus "kylpyhuone uusittu 2009" +
      todistuksen marginaalimerkintä **muutostyöilmoituksen
      puuttumisesta**.
- [ ] Huomaa, että isännöitsijäntodistuksessa putkiremontin
      hankesuunnittelu on pidemmällä kuin välittäjän esittelyssä
      kertoma ("vasta kartoitettu") — ja kytkee tämän taloudellisen
      virheen / tiedonantovirheen arviointiin sekä välittäjän
      vastuuseen.

### Lähdekuri ja varmuusmerkinnät
- [ ] Ei vahvista yhtään pykälää, määräaikaa tai KKO-ratkaisua
      muistista; ohjaa `legal-core:legal-research`-skilliin tai merkitsee
      `[tarkista]`.
- [ ] Esittää seuraamukset (hinnanalennus / vahingonkorvaus / purku)
      vaihtoehtoina edellytyksineen — **ei lupaa lopputulosta** eikä
      esitä purkukynnyksen ylittymistä varmana.
- [ ] Erottelee taloyhtiön kunnossapitovastuulle mahdollisesti kuuluvan
      osuuden (rakenteet) osakkaan/myyjän vastuista — ja toteaa, että
      yhtiöjärjestys on tarkistettava ennen vastuunjakoa.

### Hand-off
- [ ] Ehdottaa seuraavat askeleet oikeilla skilleillä (reklamaatioluonnos,
      taloyhtiövastuu → `housing-company`, riitautus →
      `dispute-resolution`) ja ihmisen tarkistusportin.

## Tyypilliset virheet, joista pisteet laskevat

- Soveltaa maakaarta tai sekoittaa kiinteistön ja asunto-osakkeen
  reklamaatioajat.
- Esittää reklamaation takarajan tai hinnanalennuksen määrän
  muistinvaraisena lukuna ilman lähdettä.
- "Ratkaisee" jutun (esim. "kyseessä on selvä piilevä virhe, kauppa
  puretaan") sen sijaan että jäsentäisi edellytykset tarkistettaviksi.
- Ohittaa välittäjän roolin tai putkiremonttitiedon kokonaan.
- Kehottaa jatkamaan purkua heti.
