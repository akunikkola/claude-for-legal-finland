# Ympäristö ja kaavoitus

Suomen ympäristö- ja kaavoitusoikeus: ympäristöluvat ja valvonta, kaavoitus ja
rakentaminen sekä ympäristövastuut transaktioissa – uudistuneen lainsäädännön
(rakentamislaki 751/2023, luonnonsuojelulaki 9/2023) ja uuden viranomaiskentän
(Lupa- ja valvontavirasto 2026) mukaisesti.

> **Luonnokset ja analyysit ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Ala on täynnä tuoreita kokonaisuudistuksia, joissa mallin muisti pettää –
> säädösnimet, viranomaiset ja kynnykset tarkistetaan aina lähteestä.
> Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **ymparistolupa-ja-valvonta** | Ympäristönsuojelulaki (527/2014): luvanvaraisuuden arviointi, lupahakemuksen jäsennys, lupaharkinta ja -määräykset, YVA-kytkös (252/2017), valvonta ja hallintopakko sekä osallistuminen (muistutukset, valitukset). Sisältää ympäristöoikeuden perusteiden referenssin. |
| **kaavoitus-ja-rakentaminen** | Alueidenkäyttölaki (132/1999, ent. MRL) ja rakentamislaki (751/2023): kaavajärjestelmä ja kaavoitukseen vaikuttaminen, uusi rakentamislupa kynnyksineen, poikkeaminen ja muutoksenhaku. |
| **ymparistovastuut** | Ympäristövastuut riskinä ja transaktioissa: pilaantuneen maaperän vastuuketju (YSL), ympäristövahinkojen korvaaminen (737/1994), ympäristörikosvastuu ja ympäristö-DD yrityskaupassa. |

## Perustana varmistetut säädökset

Lähteestä (Finlex, 2026-06) varmistettu: **ympäristönsuojelulaki (527/2014)**,
**alueidenkäyttölaki (132/1999)** – vanhan MRL:n uusi nimi – **rakentamislaki
(751/2023)** lupajärjestelmineen (rakentamislupa, purkamislupa, maisematyölupa,
sijoittamislupa, ilmastoselvitys), **luonnonsuojelulaki (9/2023)** (korvasi
1096/1996), **vesilaki (587/2011)**, **jätelaki (646/2011)**, **laki
ympäristövaikutusten arviointimenettelystä (252/2017)** ja **laki
ympäristövahinkojen korvaamisesta (737/1994)**. Viranomaiskenttä: **Lupa- ja
valvontavirasto (LVV)** aloitti 1.1.2026 ja korvasi AVI:t, ELY-keskukset ja
Valviran (varmistettu valtioneuvoston ja LVV:n lähteistä).

## Liittyy

- **`legal-core`-plugari** – `legal-research` (KHO ja Vaasan HaO), `engagement-intake`
  (osallistumis- ja valitusaikojen skannaus) ja `document-review`.
- **`administrative-law`-plugari** – lupa- ja kaavapäätökset ovat hallintopäätöksiä;
  muutoksenhaun yleiset opit (808/2019).
- **`company-law`-plugari** – ympäristö-DD osana yritysjärjestelyä.
- **`public-procurement`-plugari** – ympäristönäkökohdat hankinnoissa.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install ymparisto-ja-kaavoitus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
