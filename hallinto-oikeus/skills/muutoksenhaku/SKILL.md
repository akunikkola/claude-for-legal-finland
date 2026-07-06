---
name: muutoksenhaku
description: >
  Muutoksenhaku hallintopäätökseen Suomen hallintoprosessissa: oikaisuvaatimus,
  hallintovalitus hallinto-oikeuteen ja valitus korkeimpaan hallinto-oikeuteen (laki
  oikeudenkäynnistä hallintoasioissa 808/2019), valitusoikeus, määräajat, valituksen
  sisältö ja valituslupa. Käytä tätä skilliä, kun käyttäjä hakee tai harkitsee muutosta
  viranomaisen päätökseen, laatii oikaisuvaatimusta tai valitusta, kysyy
  valitusajasta, valitusoikeudesta, valituslupaperusteista tai muutoksenhakutiestä.
---

# Muutoksenhaku hallintopäätökseen

Tämä skill auttaa hakemaan muutosta viranomaisen päätökseen oikealla menettelyllä ja
määräajassa. **Muutoksenhakuaika on ehdoton** — myöhästynyt valitus jätetään tutkimatta,
joten määräaika on varmistettava heti.

> **Vastuuvapaus:** luonnos/arvio tarkistettavaksi — ei oikeudellista neuvontaa. Katso
> `hallinto-oikeus/CLAUDE.md`. Perusteet: `../hallintopaatos/references/hallinto-oikeus-perusteet.md`.

## Tarkista muutoksenhakutie, määräaika ja laki lähteestä
- Lue **päätöksen muutoksenhakuohjaus** ensin — se kertoo tien, kohteen ja määräajan.
- Vahvista laki oikeudenkäynnistä hallintoasioissa (808/2019) ja sovellettava **erityislaki**
  (joka voi muuttaa määräaikaa, valituslupaa tai valitustietä) **`juristi:oikeustutkimus`-skillillä**.
  **Älä esitä määräaikaa muistista** — hae se ja merkitse lähde; jos et voi tarkistaa, merkitse `[tarkista määräaika]`.

> **Pohja:** [`pohjat/oikaisuvaatimus.md`](../../pohjat/oikaisuvaatimus.md) — oikaisuvaatimuksen rakenteellinen luuranko (määräaika ensin).

## Vaihe 1: Tunnista oikea muutoksenhakutie
- **Oikaisuvaatimus** — monessa asiassa pakollinen ensivaihe samalle viranomaiselle ennen valitusta. Tarkista, edellyttääkö asia ensin oikaisuvaatimusta.
- **Hallintovalitus hallinto-oikeuteen** — pääsääntöinen tie hallintopäätökseen; valitusperusteet laajat (laillisuus + tarkoituksenmukaisuus, ellei rajattu).
- **Kunnallisvalitus** — kunnallisasioissa oma tiensä (kuntalaki 410/2015); valitusperusteet rajatummat (laillisuusvalitus: päätös lainvastainen, syntynyt virheellisessä järjestyksessä, viranomainen ylitti toimivaltansa).
- **Valitus korkeimpaan hallinto-oikeuteen** — hallinto-oikeuden päätöksestä; usein **valituslupa** vaaditaan (tarkista lupaperusteet).

## Vaihe 2: Tarkista valitusoikeus
Onko asiakirjan laatija/päämies **asianosainen** tai muu, jolla on valitusoikeus (päätös kohdistuu häneen tai vaikuttaa välittömästi hänen oikeuteensa, etuunsa tai velvollisuuteensa)? Kunnallisvalituksessa valitusoikeus on laajempi (kunnan jäsen).

## Vaihe 3: Laadi oikaisuvaatimus / valitus
Sisällytä (tarkista täsmälliset sisältövaatimukset 808/2019:stä):
1. **Mihin päätökseen** haetaan muutosta (yksilöinti: viranomainen, päivämäärä, asia/diaarinumero).
2. **Miltä osin** muutosta haetaan ja **mitä muutosta** vaaditaan (vaatimus).
3. **Perusteet** — miksi päätös on virheellinen (lainvastaisuus, menettelyvirhe, väärä tosiseikasto). Viittaa lakiin ja näyttöön.
4. **Valittajan tiedot** ja yhteystiedot; mahdollinen asiamies ja valtakirja.
5. **Liitteet** (valituksenalainen päätös, todisteet).
6. Toimittaminen oikealle viranomaiselle/tuomioistuimelle määräajassa.

## Vaihe 4: Raportoi
Tuota oikaisuvaatimus-/valitusluonnos sekä **muutoksenhaun tarkistuslista** (tie, määräaika
lähteineen, valitusoikeus, sisältövaatimukset, liitteet, toimitustapa). Merkitse
`[varmista — määräaika ja valituslupa tarkistettava]` ja korosta määräajan ehdottomuutta.
Liitä lähteet (808/2019 + erityislaki + mahdollinen KHO-käytäntö `oikeustutkimus`-skillillä).

Asiakirjan voi tuottaa `docx`-skillillä (uusi) tai muokata olemassa olevaa `adeu`-MCP:llä
(jälkimuutokset). Älä esitä menestymisen todennäköisyyttä lopullisena arviona.

## Mitä tämä skill EI tee
- **Ei tee viranomaisen tai tuomioistuimen päätöstä eikä korvaa asiamiehen/asiantuntijan vastuuta.** Tuottaa tarkistettavan oikaisuvaatimus- tai valitusluonnoksen.
- **Ei vahvista valitusaikaa, valitustietä tai valitusluvan tarvetta muistista.** Ne haetaan lähteestä erityislaeittain (laki oikeudenkäynnistä hallintoasioissa 808/2019 + erityislaki); myöhästynyt valitus jätetään tutkimatta.
- **Ei arvioi valituksen menestymisen todennäköisyyttä lopullisena kantana.** Tulkinta ja näytön riittävyys kuuluvat asiantuntijalle.
- **Ei laadi alkuperäistä hallintopäätöstä** — se kuuluu `hallintopaatos`-skilliin.
- **Ei viittaa kumottuun hallintolainkäyttölakiin (586/1996)** voimassa olevana; voimassa on 808/2019.
- **Vain Suomen hallintoprosessi.** Ei kata yleisten tuomioistuinten muutoksenhakua (siviili-/rikosasiat) eikä muiden maiden prosessia.

## Jatka tästä
- Jos muutoksenhaun kohteena oleva päätös pitää ymmärtää tai sen menettely arvioida → /hallinto-oikeus:hallintopaatos
- Valitusajan, valitustien ja valitusluvan tarpeen tarkistus sekä KHO-käytäntö → /juristi:oikeustutkimus
- Oikaisuvaatimuksen/valituksen kielen ja muotovaatimusten tarkistus ennen jättämistä → /juristi:asiakirjan-tarkistus
- Jos kyse on tietopyynnön epäämispäätöksestä, johon haetaan muutosta → /hallinto-oikeus:julkisuus-ja-tietopyynnot
