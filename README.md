# NVE Designsystem

Dette er skrevet for de som <i>utvikler</i> NVE Designsystem.
Skal du kun <i>bruke</i> designsystemet, finner du dokumentasjon og kodeeksempler her: [https://designsystem.nve.no/](https://designsystem.nve.no/).

Repositoryet inneholder css generert fra Figma-tokens i Designsystemet. [Her finner du pakka i npm](https://www.npmjs.com/package/nve-designsystem).

[Her](https://www.figma.com/files/1033298377581647627/project/85006605/Public---Designsystem?fuid=854992400462434435) er skisser i Figma.

De fleste komponentene bygger på [Shoelace](https://shoelace.style/), men er tilpasset NVE Designsystem. Etterhvert vil de fleste Shoelace-komponenter få sin NVE-variant, men vi har også komponenter som ikke er basert på Shoelace. Vi anbefaler at du laster ned [kildekoden til Shoelace](https://github.com/shoelace-style/shoelace) og setter deg inn i [Lit](https://lit.dev/), som vi bruker som rammeverk.

## Kjøremiljø

Dette prosjektet inneholder to applikasjoner:

- I rot-mappa ligger selve komponentbiblioteket med nve-komponentene
- I mappa `doc-site` ligger test-applikasjonen som viser brukerveiledninga for biblioteket. Teknisk beskrivelse av denne ligger i egen [readme](doc-site/README.md)

Kjør `npm install` og `npm run dev` for å starte test-applikasjonen.

Dersom applikasjonen ikke er bygget på forhånd, vil npm run dev automatisk sørge for at den bygges og at dist-mappen opprettes.

Vi bygger applikasjonen før kjøring for å sikre at den importerer custom-elements.json og nve-designsystem.css fra dist. Siden begge filer ganske statiske man trenger ikke å å bygge
appen på nytt hver gang man gjør noen endringer i component filen. Disse to filene kunne vært plassert i src, men vi
unngår det – særlig for shoelace.css – fordi filen da måtte blitt manuelt kopiert fra node_modules til src (eller håndtert via et script).

Ved å importere shoelace.css direkte i main.ts, sørger Vite for korrekt bundling. Dette eliminerer behovet for å endre @import-referanser i global.css og gir dist-mappen som eneste source of truth.

Applikasjonen er selve brukerveiledninga for komponentbiblioteket, så her ligger api-dokumentasjon, beskrivelse av funksjonalitet og ikke minst kodeeksempler.

## Pull requests

Ikke push endringer direkte i `main`. Lag en pull request. Når du oppretter en pull request så skal du da også koble GitHub-issue ved å velge den under "Development" i høyre-kolonnen. Da blir issue lukket når Pull Requesten godkjennes.

### Conventional Commits

Vi har innført **Conventional Commits**-standarden i vårt prosjekt for å automatisere oppdatering av versjonsnummer og generering av changelog-filer. Når du lager en pull request (PR) som skal merges til `main`-branchen, må tittelen på PR-en følge denne standarden for at den skal bli godkjent.

#### Standardformatet er som følger

`<type>(<scope>): <beskrivelse>`

- **type**: Definerer hvilken type endring det er. Eksempler:

  - `feat`: Legger til ny funksjonalitet
  - `fix`: Fikser en feil
  - `chore`: Oppgaver som ikke endrer kode (f.eks. oppdatering av verktøy)
  - `docs`: Endringer i dokumentasjon

- **scope** (valgfritt): Beskriver hvor i prosjektet endringen er gjort. Denne kommer på starten av linjen i Changelog, så bør alltid være med. Eksempler:

  - `auth`: Endringer relatert til autentisering
  - `ui`: Endringer i brukergrensesnittet
  - `nve-button`: Endringer relatert til den spesifikke komponenten. Denne versjonen er som regel foretrukket

- **beskrivelse**: En kortfattet, imperativ beskrivelse av hva endringen gjør. Den skal være på én linje og beskrive hva koden gjør etter endringen. For eksempel: "Legg til validering for e-postadresse."

#### Eksempler på commit-meldinger

- feat(auth): legg til støtte for 2-faktor autentisering fix(ui): rettet layout-feil på forsiden
- docs: oppdatert README med nye installasjonsinstruksjoner

For mer informasjon om standarden, kan du lese mer på [Conventional Commits.](https://www.conventionalcommits.org/en/v1.0.0/)

#### PR-sjekk før merging til main

Tittelen på PR-en må oppfylle **Conventional Commits**-standarden. Dette blir automatisk validert som en del av en PR-sjekk.

#### Verktøy for å følge standarden

Det er flere måter å sikre at du følger **Conventional Commits**-standarden:

1. Commitizen: Du kan bruke Commitizen direkte i terminalen for å lage commits i riktig format. Bruke denne kommandoen for å lage en commit:

```script
npx cz
```

2. VS Code-utvidelse: Hvis du bruker Visual Studio Code, kan du installere utvidelsen [VS Code Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) for å sikre at commit-meldinger følger standarden. Etter at du har installert tillegget, kan du klikke på den runde sirkelen til høyre for Source Control for att gjøre en commit.

## Changelog

Changelog-filene genereres automatisk basert på commit-meldingene dine og blir synlige i [release-notatene](https://github.com/NVE/Designsystem/releases) på GitHub.

### Betingelser for Semantic Release

Merk at `semantic-release` stiller visse betingelser før oppdatering av changeloggen. For at en endring skal registreres i changelogen, må følgende krav være oppfylt:

- Commit-typen må være en av følgende:
  - `BREAKING CHANGE`: Introduserer en endring som bryter bakoverkompatibiliteten
  - `feat`: Legger til en ny funksjonalitet
  - `fix`: Retter en feil
  - `perf`: Forbedrer ytelsen
- Endringen må ha skjedd i en av følgende mappespesifikasjoner:
  - `src/**`
  - `build/**`
  - `public/css/**`

## Automatiske oppdateringer med Dependabot

Vi bruker **Dependabot** for å automatisk opprette pull requests når det finnes oppdateringer av avhengigheter eller sikkerhetsfikser i vår `package.json`.  
Konfigurasjonen for Dependabot ligger i: .github/dependabot.yml

Når Dependabot oppretter en pull request, genereres det automatisk et **forhåndsvisningsmiljø** av nettsiden via **Azure Static Web Apps**. Dette lar deg enkelt sjekke hvordan endringene påvirker dokumentasjonsappen.

### Slik finner du lenken til forhåndsvisningen:

1. Gå inn i den aktuelle pull requesten.
2. Klikk på fanen **Checks**.
3. Velg jobben **"Bygg og installasjon av dok-app i skyen"**.
4. Gå til steget **"Installer dokumentasjons-nettsted"**.
5. Se etter linjen som inneholder: Visit your site at: https://...
6. Klikk på lenken for å åpne den midlertidige versjonen av nettstedet.

Merk: Lenken vises **ikke automatisk som en kommentar** i PR-en.  
Dette skyldes at Dependabot, av sikkerhetsgrunner, ikke har tillatelse til å poste kommentarer via GitHub Actions. Derfor kan du se følgende feilmelding i loggene:

```
Unexpectedly failed to add GitHub comment.
```

## Oppretting av en ny komponent og mappestruktur

<em>Alle komponenters navn skal starte med `nve-`. Bruk det samme navnet som komponenten får i html. Kun små bokstaver og bindestrek er tillatt i navnet.</em>

Vi skiller API + funksjonalitet, styling og test/dokumentasjon i hver sine filer.

Du kan lage skall til en ny komponent ved å kjøre `npm run add-component {navn på komponent}`. Scriptet oppretter riktige filer for deg.

Du kan også lage filene manuelt. Følg mønsteret i eksemplet nedenfor:

| Sti                                                | Beskrivelse           |
| -------------------------------------------------- | --------------------- |
| /src/components/nve-button/nve-button.component.ts | Selve komponenten     |
| /src/components/nve-button/nve-button.styles.ts    | Styling               |
| /doc-site/components/nve-button.md                 | Test og dokumentasjon |

## Properties

Vi setter reflect: true på alle properties i komponenter for å kunne se properties som oppdateres i DOM. Se eksempel:

```js
@property({ reflect: true }) title: string = '';
```

## INveComponent

Alle komponenter skal implementere INveComponent

## Eksport

Komponenter skal eksponeres i `src/nve-designsystem.ts` på denne måten:

```js
export { default as NveComponent } from './components/nve-component/nve-component.component';
```

## Hvordan tolke design i Figma

Skissene i Figma er et forslag til design, ikke en spesifikasjon.

Hvis vi skal ta utgangspunkt i en Shoelace-komponent, pass på at designet ikke går for mye på tvers av slik komponenten er laget i Shoelace. Hvis du ser at du må endre `render()`-metoden for få til ønsket design, ta opp med designeren om hen heller kan justere designet.

Pass også på at API'et til komponenten blir ryddig. Navn på properties må følge god praksis for web-komponenter, og ikke alle properties er nødvendig å implementere. F.eks. trenger vi ikke en showHelpText-property. Det holder med en helpText-property med blank som standard-verdi. Da viser du helpText hvis den finnes.

## Styling

Når vi styler shoelace-komponenter kan vi enten overskrive Shoelace sine css-klasser eller bruke parts i shadow-DOM.
Bruk helst parts fordi koden blir lettere å lese.
Dette:

```css
::part(control) {
  color: red;
}
```

ser bedre ut enn dette:

```css
.checkbox checkbox--medium checkbox__control {
  color: red;
}
```

Hvis det ikke er mulig å style med ::part, bruk css-klasser.
safari (liten forbokstav med vilje) sliter med å håndtere parts med denne syntaksen `:host(:hover)::part(control)`, med det resultat at stilene til Shoelace ikke blir overskrvet som ønsket. Derfor må vi huske å teste web komponenter i safari og. Problemet kan løses med bruk av '!important', f.eks.:

```css
:host([disabled]:hover)::part(control control--indeterminate) {
  background: var(--neutrals-foreground-primary) !important;
  border-color: var(--neutrals-foreground-primary) !important;
}
```

## Typografi

Det finnes tokens for typografi i Figma.
Sett Figma i utviklermodus og klikk på en tekst.
I typografi-seksjonen til høyre ser vi css'en som er generert. Vi skal ikke bruke selve css'en, men <b>kommentaren</b> over css'en gir et hint om navnet på tokenet. Eksempel i Figma:

```css
color: var(--neutrals-foreground-mute, #3c3f44);

/* Label/small */
font-family: Source Sans Pro;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 110%; /* 1.1rem */
```

Kommentaren `/* Label/small */` betyr at vi skal bruke css-variabelen `--label-small`, f.eks. slik:

```css
.button-label {
  font: var(--label-small);
}
```

## Mapping av shoelace-tokens til NVE-tokens

Det hadde vært fint om vi kunne sette en NVE-verdi for alle Shoelace-tokens. Men dette går ikke fordi strukturen i Shoelace og NVE Designsystem er forskjellig.
Vi har satt NVE-verdier for en del Shoelace-tokens, og disse ligger i `global.css`.
Foreslå gjerne flere Shoelace-tokens som kan mappes på denne måten.

Vi trenger <em>ikke</em> å style:

- fokus-tilstand på alle komponenter. Dette settes globalt
- høyde på input-felter, knapper og select
- border-radius på alle komponenter (med mindre border radius mangler på en Shoelace-komponent, men designsystemet spesifiserer border-radius)
- bakgrunn, font-farge, font-størrelse, ikon-farge, ramme i input, select og textarea i både variantene filled og not filled

## Testing

Alle nye webkomponenter skal ha tester som dekker både visuelle endringer (UI) og logikk. Det er viktig å teste at komponentene reagerer riktig på ulike props og hendelser, og at de sender ut forventede events. Vi bruker Vitest sammen med Happy DOM for å kjøre testene våre. open-wc/testing brukes for å registrere komponent og få tak i den i testene.

Testfiler skal ligge i komponent-mappa og skal ha `.test.ts` som filutvidelse.

Hvis komponent ikke er definert i testfilen, må du registrere den slik:

```js
if (!customElements.get('nve-button')) {
  customElements.define('nve-button', NveButton);
}
```

Enkel test ser slik ut:

```js
it('has correct primary variant class', async () => {
  const el = (await fixture) < NveButton > html`<nve-button variant="primary"></nve-button>`;
  const button = el.shadowRoot?.querySelector('button[part="base"]');
  expect(button?.classList.contains('button--primary')).toBe(true);
});
```

`fixture` fra @open-wc/testing brukes for å opprette komponenten med attributter. Det er ofte lurt å finne hoveddelen i shadowRoot for å kunne teste endringer som CSS-klasser eller hendelser. For mer informasjon om testsyntaks, se gjerne Vitest-[dokumentasjonen](https://vitest.dev/guide/). Du kan også hente inspirasjon fra eksisterende tester i prosjektet.

For å teste lokalt kjør gjerne `npm run test:ui` - den skal åpne en fane i nettleseren med alle tester.
I pipelinen brukes det kun `vitest` siden vi ikke skal bruke nettleseren. Den kan du også bruke lokalt hvis du ikke ønsker en testrapport i nettleseren.

For å debugge i VS Code åpne vanlig `JavaScript Debug Terminal` og kjør `npm run test`. Les mer [her](https://vitest.dev/guide/debugging.html#debugging)

## Dokumentasjon

**Vi dokumenterer på norsk**

### JsDoc

Alle komponenter dokumenteres med JsDoc-tags i koden. Alt som er tilgjengelig for de som bruker komponentene skal dokumenteres, dvs. alle public klasser, interfaces, properties/attributter, metoder, events, slots, css-parts og css-properties.
[Her er noen tips](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/#documenting-your-components).

Når du kjører opp test/dokumentasjons-applikasjonen, blir koden scannet og metadata + JsDoc lagret i `custom-elements.json`. Du kan også generere fila manuelt med `npm run manifest`. Dokumentasjons-applikasjonen bruker denne fila.

Skriv litt øverst i `.component.ts`-fila om hva komponenten skal brukes til. Om det er Shoelace-properties som ikke skal brukes fordi dette ikke passer med designsystemet, må du dokumentere det her.

### Brukerveiledning

Brukerveiledning med kodeeksempler skriver du i markdown-fila til komponenten. Dokumentasjons-applikasjonen viser denne markdown-fila sammen med info fra `custom-elements.json`. Fila skal hete det samme som komponenten, men med .md som etternavn, og legges her: `doc-site/components`. Eksempel: `doc-site/components/nve-button.md`

Lag kodeeksempler både for å teste at komponenten funker som forventet <em>og</em> for å vise hvordan komponenten funker. Koden skal være enklest mulig. Ta kun med kode som er relevant for eksemplet du ønsker å vise. Unngå styling i koden.

Markdown-fila skal ha denne strukturen:

1. Filhode
2. Enklest mulig kodeeksempel
3. Generelle tips
4. Resten av kodeeksemplene under overskriften `## Eksempler`

Mer om dette:

#### 1. Filhode

Markdown-fila må starte med denne blokka:

```md
---
layout: component
---
```

#### 2. Enklest mulig kodeeksempel

Deretter lager du et enklest mulig kodeeksempel for å kunne vise komponenten. Alle kodeksempler legges i en slik blokk:

````
<CodeExamplePreview>

```html
Her skriver du html-koden
```
</CodeExamplePreview>
````

Du må ha et ekstra linjeskift etter `<CodeExamplePreview>`og `</CodeExamplePreview>`

#### 3. Generelle tips

Skriv evt. generelle tips som ikke passer å ha i @JsDoc. Pass på at det ikke blir dobbelt opp med det du har skrevet i @JsDoc.

#### 4. Resten av kodeeksemplene

Nå er turen kommet til å demonstrere hvordan komponenten funker.
Lag kodeeksempler for de viktigste tingene du kan gjøre med komponenten, og for å vise hvordan komponenten oppfører seg. Bruk dette for å teste at komponenten oppfører seg slik den skal.

Eksemplene legger du under overskriften `## Eksempler`
Hvert tema skal ha egen overskrift, f.eks.: `### Deaktivering`.

Du kan også lage mer avanserte kodeeksempler i Vue. Se hvordan dette er gjort i [doc-site/introduction/vue.md](doc-site/introduction/vue.md).

---

Hvis du har laget en ny markdown-fil, må du starte test-applikasjonen på nytt ved å skrive `r` og taste `<enter>` i konsollet, for at fila skal leses.

### Annen dokumentasjon

Du kan også lage egne markdown-filer for spesielle tema, slik vi har gjort under `doc-site/introduction`. Lag en link til fila fra menyen i `doc-site/.vitepress/config.mts`.

## Publisering til npm

Publisering til npm skjer ved hjelp av Github actions. Når man pusher til `main` (ved å fullføre en pull request), starter det en jobb som oppdaterer versjonsnummer og publiserer npm-pakka. Jobben er spesifisert i filen .github/workflows/npm-publish.yml.

## Test pakke lokalt

Før man lager en PR eller er det lurt å teste pakke lokalt. Vi har to måter å gjøre dette på:

### Med `npm run pack` (uten reloading)

1. Kjør `npm run build` (du kan også kjøre `npm run build:dev` om du ønsker å få tilgang til sourcemaps)
2. Kjør `npm run pack`. `<nve-designsystem-x.y.z.tgz` blir generert i mappa `dist`
3. Åpne et annet prosjekt hvor du kan teste pakka
4. Kjør `npm  i` `<nve-designsystem-x.y.z.tgz med full sti>`
5. Importer komponent i prosjektet og sjekk om alt fungerer som det skal

### Med `npm run link` (med reloading)

1. Kjør `npm run link`
   Dette starter chokidar som følger med på endringer i ./src mappen og bygger prosjektet ved en endring.
   Etter at prosjektet har bygget ferdig første gang kjører den npm link på dist mappen til bygget.

2) Åpne et annet prosjekt som benytter seg av NVE-DS og kjør `npm link nve-designsystem`

3) Start prosjektet ditt, og se om en endring i DS fører til endring i din klient.

`NB`

- Det kan hende at du må konfigurere prosjektet litt for at den skal plukke opp endringer i node_modules og reloade.
  I Vite, kan det hjelpe å konfigurere usePolling med interval i vite-config.ts.

```script
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
```

- Nyttige kommandoer
  - `npm unlink -g` nve-designsystem (fjerner npm link for NVE-DS globalt)
  - `npm prefix -g` viser deg hvor mappen som alle `npm link` 'lenkede' pakker er
  - `npm ls nve-designsystem` viser deg dependency treet og kan foreksempel være sjekk hvis du mistenker at prosjektet ikke har blitt lenket riktig.
- Annet
  - Du vil kunne se et ikon i node_moduels på mappen som har blitt lenket med npm link nve-designsystem. Her kan du forksempel også se om filen(e) du har endret i DS har blitt reflektert inn i ditt prosjekt.

## Test-app for pull requests

Pull requests på komponenter skal også kunne godkjennes av designere. Derfor har vi satt opp en azure static app som kjører test/dokumentasjons-applikasjonen. Denne bygges og kjøres når man lager en PR.

Det er maks 10 apper som kan kjøres samtidig, så hvis det er flere enn 10 PR'er kan det være at appen ikke bygges. De skal slettes automatisk når en PR lukkes, men det er ikke alltid dette virker. Hvis du får disse feilmeldingene i bygget, kan det være verdt å sjekke hvor mange "preview environments" som kjører:

```
The content server has rejected the request with: InternalServerError
Reason: An unexpected error has occurred. Please try again later.
```

I slike tilfeller må vi slette appene manuelt i Azure-portalen. Appene ligger i ressursgruppa `TEST-Designsystemet-RG`. Gå til ressursen `nve-designystem-dok` og velg `Environments`. Marcin, Øystein, Joel, Fred og Tommy har tilgang til dette.

## Bygge globale css-filer

Når vi har nye design-tokens eller endringer i tokens må vi generere globale css-filer på nytt.
Kjør følgende kommando: `npm run tokenbuild`.

## Hvorfor er det slik?

Her er [bakgrunn for en del valg vi har gjort](design-beslutninger.md) underveis.
