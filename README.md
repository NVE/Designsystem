# NVE Designsystem

Dette er komponentbiblioteket til [NVE Designystem](https://nve.frontify.com/).

Repositoryet inneholder css generert fra Figma-tokens i Designsystemet. De fleste komponentene er basert på [Shoelace](https://shoelace.style/). Her finner du [pakka i npm](https://www.npmjs.com/package/nve-designsystem).

## Skal du bruke NVE designsystem?<br> Denne seksjonen er for deg.

### Api-dokumentasjon + Storybook

Du finner ren API-dokumentasjon på hver komponent [her](./doc/components.md).

Komponentene kan ses og testes i [Storybook](https://main--65322c4ee3062d1c117bb2d5.chromatic.com/).

### Bruk av designsystemet i Vue 3

1. Install pakke med `npm i nve-designsystem`.

2. I vite.config (lag en ny fil hvis den ikke eksisterer i rot-mappa), legg inn `isCustomElement` som forteller Vue at det er en custom element, og dropp component resolution. [Les mer her](https://vuejs.org/guide/extras/web-components.html).

```js
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('nve-'),
        },
      },
    }),
  ],
});
```

3. I tillegg trenger du å importere <em>en</em> .css-fil for farge-tema i main.ts. Filene finnes i mappa `nve-designsystem/css/`. For NVE-tema, bruk:

```ts
import 'nve-designsystem/css/nve.css';
```

For Varsom-tema, bruk:

```ts
import 'nve-designsystem/css/varsom.css';
```

Det finnes også varianter av disse to filene med mørkt tema.

4. Siden vi tvinger shoelace til å bruke våre egne `system` ikoner vi må overskrive shoelace registry med våre egne ikoner.
   Det fungerer ikke når man gjør det i nve-designsystemet repo (enda) så forhåpentligvis det er en foreløpig løsning.
   I main.ts eller App.vue skriv

```js
import { icons, registerIconLibrary } from 'nve-designsystem/registerIcons/systemLibraryCustomization.js';
registerIconLibrary('system', {
  resolver: (name) => {
    return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
  },
});
```

5. Valgfritt: Vue 3, Eslint-regler og VS Code
   Hvis du bruker VS Code og starter et nytt prosjekt gjennom npm run create vue@latest og bruker standard eslint-reglene, kan du
   få feil fra eslint-regler og automatisk retting fra VS-kode. Du kan legge til disse ESLint-reglene før for å unngå disse feilene:
   "vue/no-deprecated-slot-attribute": "off",
   "vue/attribute-hyphenation": "off",
   "vue/v-on-event-hyphenation": "off",

### Eksempel på bruk av komponent

```html
<template>
  <nve-button variant="primary" size="small" @click="send">Button</nve-button>
</template>
<script setup lang="ts">
  import 'nve-designsystem/components/nve-button/nve-button.component.js';
</script>
```

Husk å alltid bruke både opening og closing tag individuelt, (`<nve-button />` fungerer ikke).

## Skal du utvikle NVE designsystem?<br> Denne seksjonen er for deg.

De fleste komponentene bygger på [Shoelace](https://shoelace.style/), men er tilpasset NVE Designsystem. Etterhvert vil de fleste Shoelace-komponenter få sin NVE-variant, men vi kommer også til å lage komponenter som ikke er basert på Shoelace. Vi anbefaler at du laster ned [kildekoden til Shoelace](https://github.com/shoelace-style/shoelace) og setter deg inn i [Lit](https://lit.dev/), som vi bruker som rammeverk.

### Kjøremiljø

Kjør `npm install` og `npm run dev` for å starte test-applikasjonen.

### Pull requests

Ikke push endringer direkte i `main`. Lag en pull request.

### Oppretting av en ny komponent og mappestruktur

<em>Alle komponenters navn skal starte med `nve-`. Bruk det samme navnet som komponenten får i html. Kun små bokstaver og bindestrek er tillatt i navnet.</em>

Vi skiller API + funksjonalitet, styling og demo-kode i hver sine filer.

Du kan lage skall til en ny komponent ved å kjøre `npm run add-component {navn på komponent}`. Scriptet oppretter riktige filer for deg.

Du kan også lage filene manuelt. Lag en mappe under `src/components`. Navnet på mappa skal være samme som komponent-navnet. Eksempel:

| Filnavn                            | Beskrivelse           |
| ---------------------------------- | --------------------- |
| nve-button                         | Mappe for komponenten |
| nve-button/nve-button.component.ts | Selve komponenten     |
| nve-button/nve-button.styles.ts    | Styling               |
| nve-button/nve-button.demo.ts      | Test/demo-kode        |

Når man jobber med styling av komponenter, er det lettere å teste forskjellige eksempler på bruk av kompoenten på en enkel html-side enn å jobbe i Storybook.
For å kjøre .demo.ts-fila du har laget, inkluder den i `main.ts`.

### Properties

Vi setter reflect: true på alle properties i komponenter (se eksempel under) for å kunne se properties som oppdateres i DOMen. Gjelder reaktive applikasjoner.

```js
@property({ reflect: true }) title: string = '';
```

### Eksport

Komponenter skal eksponeres i src/nve-designsystem.ts fila på denne måten:

```js
export { default as NveComponent } from './components/nve-component/nve-component.component';
```

### Hvordan tolke design i Figma

Skissene i Figma er et forslag til design, ikke en spesifikasjon. Vi må passe på at:

- Designet ikke går for mye på tvers av slik komponenten er laget i Shoelace. Hvis du ser at du må endre render()-metoden for få til ønsket design, ta opp med designeren om hen heller kan justere designet
- API'et til komponenten blir ryddig. Navn på properties må følge god praksis for web-komponenter, og ikke alle properties er nødvendig å implementere. F.eks. trenger vi ikke en showHelpText-property. Det holder med en helpText-property med blank som standard-verdi. Da viser du heltText hvis den finnes.

### Styling

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
Tydeligvis safari (liten forbokstav med vilje) sliter med å ta presedens i :host(:hover)::part(control) syntaksen over klasser derfor noen ganger blir shoelace sin styling ikke overskrevet riktig. Derfor må vi huske å teste web komponenter i safari og. Problemet blir løst med '!important' keyword som f.eks.

```css
:host([disabled]:hover)::part(control control--indeterminate) {
  background: var(--neutrals-foreground-primary) !important;
  border-color: var(--neutrals-foreground-primary) !important;
}
```

### Typografi

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

### Mapping av shoelace tokes til NVE-tokens

Det hadde vært fint om vi kunne sette en NVE-verdi for alle Shoelace-tokens. Men dette går ikke fordi strukturen i Shoelace og NVE Designsystem er forskjellig.
Vi har satt NVE-verdier for en del Shoelace-tokens, og disse ligger i global.css.
Foreslå gjerne flere Shoelace-tokens som kan mappes på denne måten.

Vi trenger <em>ikke</em> å style:

- fokus-tilstand på alle komponenter. Dette settes globalt
- høyde på input-felter, knapper og select
- border-radius på alle komponenter (med mindre border radius mangler på en Shoelace-komponent, men designsystemet spesifiserer border-radius)
- bakgrunn, font-farge, font-størrelse, ikon-farge, ramme i input, select og textarea i både variantene filled og not filled

### Dokumentasjon

- Vi dokumenterer på norsk
- Alle komponenter dokumenteres med JsDoc-tags i koden. Alt som er tilgjengelig for de som bruker komponentene skal dokumenteres, dvs. alle public klasser, interfaces, properties/attributter, metoder, events, slots, css-parts og css-properties. [Her er noen tips.](https://github.com/runem/web-component-analyzer#-how-to-document-your-components-using-jsdoc)
  Vi bruker [Web Component Analyzer](https://github.com/runem/web-component-analyzer) til å generere API-dokumentasjon.
- Skriv litt øverst i `.component.ts`-fila om hva komponenten skal brukes til og link til API-dok til Shoelace, om komponenten bygger på. en Shoelace-komponent. Om det er Shoelace-properties som ikke skal brukes fordi dette ikke passer med designsystemet, må du dokumentere det
- Generer .MD-filer med `npm run doc` og sjekk inn de genererte filene sammen med koden. Om du har laget nye komponenter, legg dem til i [denne lista](./doc/components.md).
- Alle komponenter skal dokumenteres også i Storybook og i demo-appen som kjøres av main.ts

### Publisering til npm

Publisering til npm skjer ved hjelp av Github actions. Når man pusher til `main` (ved å fullføre en pull request), starter det en jobb som oppdaterer versjonsnummer og publiserer npm-pakke. Jobben er spesifisert i filen .github/workflows/npm-publish.yml.

### Test pakke lokalt

Før man pusher til main er det lurt å teste pakke lokalt. Med `npm run pack` kan man teste hvordan pakken oppfører seg akkurat på samme måte som etter publisering. For å teste en nve-designsystem pakke lokalt:

1. Kjør `npm run build` (du kan også kjøre `npm run build:dev` om du ønsker å få tilgang til sourcemaps)
2. Kjør `npm run pack`. En .tgz fil med pakken navn og versjon burde dukke opp i dist mappe
3. Åpen et annet prosjekt hvor du kan teste nve-designsystem pakken
4. Kjør `npm  i` <nve-designsystem-x.y.z.tgz med full sti>`
5. Importer komponent i prosjektet og sjekk om alt fungerer som det burde

NB! Vi lager pakken i dist mappe fordi det er enklere å strukturere hvordan pakken skal se ut når man laster den ned. Vi prøvde med `exports` og `files` i package.json men det ga oss ikke result vi var fornøyd med.

### Storybook

For å kjøre Storybook lokalt, kjør `npm run storybook`

Det skal opprettes en story for hver nye komponent som lages. Story opprettes på følgende måte: <br>

<ul>
<li>Opprett en mappe for komponenten i mappen stories</li>
<li>Opprett en fil med filnavn "NavnPåKomponent.stories.ts." F.eks. NveButton.stories.ts.</li>
<li>Se på eksisterende stories-filer og bruk samme oppsett </li>
<li>Storbyook lager toggle-buttons for boolean verdier. For dropdown-meny må man selv definere alternativene </li>
<li>Komponent-filen, f.eks. NavnPåKomponent.ts må eksportere props. Se eksisterende filer for eksempel (export interface NavnPåKomponentProps)</li>
<li>Story opprettes og eksporteres i stories-filen, f.eks. "export const Primary..." for Primary-vaiant av NveButton</li>
<li>Den første storyen er den som endres der man kan endre på props og se oppdatert visning. Den første storyen bør hete Example og bør ikke vises andre steder </li>
<li>Informasjon om komponenten (fra Figma og ev. ekstra info) kan legges inn i stories-files under parameters -> docs --> description -->  component</li>
</ul>

Det er satt opp en workflow for å publisere Storybook på Chromatic. Workflowen ligger under .github/workflows og kjøres automatisk ved push til main.

For å publisere Storybook manuelt, kjør `npm run build; npm run build-storybook`. Deretter må det kjøres en kommando med project token fra Chromatic: `npx chromatic --project-token=\<project-token\>` Project token er registrert som en secret på Github.

### Test-app for pull requests

Pull requests på komponenter skal også godkjennes av designere. Derfor har vi satt opp en azure static app med Storybook. Denne bygges og kjøres når man lager en PR.

Det er maks 10 apper som kan kjøres samtidig, så hvis det er flere enn 10 PR'er kan det være at appen ikke bygges. De skal slettes automatisk når en PR lukkes, men det er ikke alltid dette virker. I slike tilfeller må vi slette appene manuelt i Azure-portalen. Appene ligger i denne ressursgruppa: TEST-Designsystemet-RG.

### Bygge globale css-filer

Når vi har nye design-tokens eller endringer i tokens må vi generere globale css-filer på nytt.
Kjør følgende kommando: `npm run tokenbuild`.
