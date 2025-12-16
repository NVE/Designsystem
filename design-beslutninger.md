# 🎨 Designbeslutninger

Hensikten med denne siden er å dokumentere hvilke større valg vi har gjort for komponentbiblioteket og _hvorfor_ vi har tatt akkurat de valgene.
Vi skriver også om hvilke alternativer som ble vurdert og hvorfor enkelte alternativer ikke nådde opp.

Vi sorterer valgene etter tidspunkt for når de ble gjort, med de siste valgene øverst.

## Versjonering på pakkenivå fremfor komponentnivå (desember 2025)

Versjonering på komponentnivå ville tillatt team å oppdatere kun de komponentene de trenger uten å måtte ta inn hele pakken. Dette kan virke attraktivt, men skaper flere utfordringer enn fordeler.

Hovedproblemet er kompleksiteten med vedlikehold. Å håndtere versjonering for hver enkelt komponent ville blitt mye mer arbeidskrevende og tidskrevende enn vi har kapasitet til, siden vi må oppdatere og vedlikeholde hvert komponent separat. Dette kan også føre til kompatibilitetsproblemer når forskjellige versjoner av komponenter kommer i konflikt med hverandre, spesielt siden de deler designtokens og grunnleggende styling.

En annen utfordring er at team som bruker forskjellige versjoner av komponenter risikerer at designet blir inkonsistent på tvers av applikasjonene. Når det ikke lenger er press på å oppdatere hele pakken, reduseres også motivasjonen for å holde komponentene oppdatert, noe som fører til teknisk gjeld.

Figma setter også naturlige begrensninger i og med at man ikke kan versjonere på enkeltsider eller enkeltkomponenter, men må versjonere på hele designsystemet. Endrer man én komponent må det lages ny versjon av alt.

Etter diskusjon ble det bestemt at vi fortsetter med versjonering på pakkenivå. Dette er i tråd med hvordan de fleste andre designsystem håndterer versjonering.

## Felleskomponent for filopplasting

Vi valgte å ikke lage en felles filopplasting-komponent i designsystemet på grunn av kompleksiteten og de forskjellige behovene teamene har.

En slik komponent ville hovedsakelig være en wrapper rundt en input med `type="file"`. Utfordringen ligger ikke i selve UI-en, men i all logikken som må håndteres etter at filer er valgt:

- Validering (filtype, størrelse, antall filer)
- Opplasting til forskjellige endepunkter
- Progresjonsvisning og feilhåndtering
- Forskjellige krav til metadata og beskrivelser

Siden hver applikasjon og team har unike krav til disse aspektene, bestemte vi at teamene selv implementerer filopplasting-funksjonaliteten tilpasset sine behov, fremfor å lage en generisk komponent som ville blitt for kompleks eller for begrenset. Designet skal likevel være likt på tvers av applikasjonene.

## Ny dokumentasjons-løsning (juli 2024)

Dokumentasjon var tidligere på tre forskjellige steder:

- Storybook
- API-dokumentasjon på Github
- Demo-applikasjonen som du kunne kjøre opp ved å bygge designsystem-projektet lokalt

Alle hadde hvert sitt formål og du måtte bruke alle tre for å få hele bildet.
Dette var både tungvint å bruke og vedlikeholde. Storybook var lite populært blant de fleste utviklerne, fordi det var mye arbeid å skrive stories. Storybook hadde dog en kul funksjon ved at man kunne [teste de forskjellige egenskapene](https://storybook.js.org/docs/essentials/controls) ved komponentene uten å kode, men vi fant ut at denne ikke var så viktig for utviklerne.

Derfor laget vi en story i Jira med tittel:
[Som utvikler og bruker av designsystem-komponentene vil jeg ha all dokumentasjon om komponentene på ett sted](https://nveprojects.atlassian.net/browse/DS-168).

Nå har vi dette, dvs. vi har ett nettsted med all dokumentasjon _brukere_ av komponentene trenger ([desginsystem.nve.no](https://desginsystem.nve.no)). Utviklere av komponentene har sin dokumentasjon i [readme-fila](README.md) sammen med kildekoden i Github. Utviklere dokumenterer nå to steder, i JsDoc og i markdown-filer. Alle kodeeksempler skrives i selve markdown-fila til komponenten.

### Valg av rammeverk

Vi gikk til slutt for VitePress etter å ha prøvd 11ty, Astro og egenutviklet Vue-app.

### 11ty

Shoelace bruker dette, og vi vistte derfor at det ville dekke vårt behov, med unntak av å vise kjørende Vue-komponenter. Men det var veldig mye scripting som måtte til for å få det til å virke, så vi mistet motet underveis.

### Astro

Var svært enkelt å komme igang med og vi var kjapt oppe med å vise markdown med kodeeksempler. Men det var for lite fleksibelt, vi slet med å skjøte markdown-sidene med info generert fra JsDoc.

### Egenutviklet app i Vue

Vi landet nesten på dette. Se [PR #162](https://github.com/NVE/Designsystem/pull/162). Men vi fant ingen god løsning på å kombinere kjørende kode-eksempler i Vue med markdown. Vi ønsket ikke bare å vise eksempler med Vue-kode, vi ønsket å kjøre koden, både for å vise hvordan den oppførte seg, men også som en test på at koden i eksemplene funket.

### VitePress

Er et verktøy for generering av statiske sider, og det er basert på Vite og Vue, teknologier som vi er kjent med. Her fikk vi til å vise kjørende vue-kode vha. CodeSandbox.
Mye av koden for å hente kode fra Markdown ble også enklere og ryddigere med denne løsninga enn i egenutviklet app, samt at vi fikk mye gratis knytta til design og navigering.

## Lit (desember 2023)

TODO: Skriv hvorfor vi valgte dette

## Arv eller fork av Shoelace? (desember 2023)

TODO: Skriv hvorfor vi valgte dette

## Shoelace (november 2023)

TODO: Skriv hvorfor vi valgte dette

## Web Components (oktober 2023?)

TODO: Skriv hvorfor vi valgte dette

## Komponentbibliotek eller kun CSS

TODO: Skriv hvorfor vi valgte dette

## Eget designsystem eller ikke? (når bestemte vi dette?)

TODO: Skriv hvorfor vi valgte dette
