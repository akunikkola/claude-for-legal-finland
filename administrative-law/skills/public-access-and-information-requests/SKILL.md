---
name: public-access-and-information-requests
description: >
  Asiakirjajulkisuus ja tietopyyntöihin vastaaminen julkisuuslain (laki viranomaisten
  toiminnan julkisuudesta 621/1999) mukaan: julkisuusperiaate, salassapitoperusteet,
  asiakirjapyyntöön vastaaminen, määräajat ja kielteinen päätös. Käytä tätä skilliä, kun
  käyttäjä on saanut tai laatii asiakirjapyynnön viranomaiselle, arvioi onko asiakirja
  julkinen vai salassa pidettävä, vastaa tietopyyntöön, tai mainitsee julkisuuslain,
  asiakirjajulkisuuden, salassapidon tai tiedonsaantipyynnön.
---

# Asiakirjajulkisuus ja tietopyynnöt (julkisuuslaki 621/1999)

Tämä skill auttaa arvioimaan asiakirjan julkisuuden ja vastaamaan tietopyyntöön
julkisuuslain (621/1999) mukaisesti. **Lähtökohta on julkisuus:** viranomaisen asiakirjat
ovat julkisia, jollei laissa erikseen toisin säädetä (vahvistettu lähteestä, 1 §).

> **Vastuuvapaus:** arvio/vastausluonnos tarkistettavaksi — ei oikeudellista neuvontaa.
> Kielteinen päätös ja salassapitoarvio kuuluvat viranomaiselle ja tarvittaessa juristille.
> Katso `hallinto-oikeus/CLAUDE.md`. Perusteet: `../hallintopaatos/references/hallinto-oikeus-perusteet.md`.

## Tarkista laki lähteestä
Hae julkisuuslain (621/1999) salassapitoperusteet, määräajat ja menettely sekä mahdolliset
erityislain salassapitosäännökset **`juristi:oikeustutkimus`-skillillä**. Älä esitä
salassapitoperustetta tai määräaikaa muistista.

## Vaihe 1: Tunnista pyyntö
- Mitä asiakirjaa/tietoa pyydetään? Kuka pyytää (asianosainen vai muu)? Asianosaisella voi olla laajempi tiedonsaantioikeus omaan asiaansa.
- Onko asiakirja **viranomaisen asiakirja** ja onko se jo **julkinen** (esim. päätös on tehty / asiakirja laadittu valmiiksi)?

## Vaihe 2: Arvioi julkisuus vs. salassapito
- **Pääsääntö:** asiakirja on julkinen → luovutetaan.
- **Salassapito** vain laissa säädetyllä perusteella (julkisuuslaki 24 § ja erityislait): esim. yksityisyyden suoja, liikesalaisuus, turvallisuus. Salassapito on **poikkeus** ja sitä tulkitaan suppeasti.
- **Osittainen julkisuus:** jos osa on salassa pidettävää, luovutetaan julkinen osa (peitetään salassa pidettävät kohdat). Henkilötietojen osalta huomioi tietosuoja (→ `data-protection`-plugari); julkisuus ja tietosuoja on sovitettava yhteen, eivät automaattisesti syrjäytä toisiaan.

## Vaihe 3: Vastaa määräajassa
Tietopyyntöön on vastattava **viivytyksettä** julkisuuslaissa säädetyssä ajassa (hae täsmällinen määräaika lähteestä). Jos pyyntö evätään tai luovutus viivästyy, asia on saatettava pyynnöstä viranomaisen ratkaistavaksi ja annettava **valituskelpoinen päätös** muutoksenhakuohjauksineen (→ `muutoksenhaku`-skill).

## Vaihe 4: Laadi vastaus
- **Myönteinen:** luovuta asiakirja (tarvittaessa osittain, salassa pidettävät kohdat peitettyinä) ja kuvaa mitä luovutettiin.
- **Kielteinen / osittainen:** perustele, mihin lainkohtaan salassapito perustuu, ja anna **valituskelpoinen päätös** muutoksenhakuohjauksineen. Älä kieltäydy ilman lakiperustetta.

## Vaihe 5: Raportoi
Tuota julkisuusarvio ja vastausluonnos lähdemerkinnöin (julkisuuslaki + mahdollinen
erityislaki, pykälät tarkistettuna). Merkitse tulkinnanvaraiset `[varmista — viranomaisen/
juristin arvioitava]`. Korosta julkisuusolettamaa ja salassapidon suppeaa tulkintaa.

Vastauksen/päätöksen voi tuottaa `docx`-skillillä (uusi) tai muokata olemassa olevaa
`adeu`-MCP:llä; jos asiakirjasta peitetään henkilötietoja jakamista varten, harkitse
anonymisointia (`data-protection`-plugarin PII Shield -ohje).

## Mitä tämä skill EI tee
- **Ei tee viranomaisen julkisuus- tai salassapitoratkaisua eikä korvaa viranomaisen/juristin vastuuta.** Tuottaa tarkistettavan arvion ja vastausluonnoksen; kielteinen päätös kuuluu viranomaiselle.
- **Ei vahvista salassapitoperustetta eikä vastausmääräaikaa muistista.** Ne haetaan lähteestä (julkisuuslaki 621/1999 + erityislakien salassapitosäännökset) erityislaeittain.
- **Ei tee lopullista henkilötietojen luovutusarviota.** Julkisuuden ja tietosuojan yhteensovittaminen on tehtävä tapauskohtaisesti; rekisteröidyn oikeudet ja luovutuksen oikeusperuste kuuluvat tietosuoja-arviointiin.
- **Ei anonymisoi asiakirjaa itse** — varsinaisen henkilötietojen peittämisen tekee PII Shield (`data-protection`-plugari).
- **Ei laadi tietopyynnön epäämisestä tehtävän valituksen** sisältöä; se kuuluu `muutoksenhaku`-skilliin.
- **Vain Suomen julkisuuslainsäädäntö.** Ei kata muiden maiden tiedonsaantisääntelyä eikä yksityisten tahojen tietopyyntöjä toisilta yksityisiltä.

## Jatka tästä
- Kun pyyntö koskee henkilötietoja ja julkisuus on sovitettava tietosuojaan → /tietosuoja:tietosuoja-arviointi
- Jos kielteiseen tai osittaiseen tietopyyntöpäätökseen haetaan muutosta → /hallinto-oikeus:muutoksenhaku
- Salassapitoperusteiden ja vastausmääräajan tarkistus → /juristi:oikeustutkimus
- Vastauksen tai kielteisen päätöksen kielen ja muotovaatimusten tarkistus → /juristi:asiakirjan-tarkistus
