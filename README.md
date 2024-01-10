# NVE Designsystem

Dette repository inneholder css generert fra Figma-tokens og komponentbibliotek basert på Shoelace [( Shoelace dokumentasjon)](https://shoelace.style/).
[Lenke til npm-pakke.](https://www.npmjs.com/package/nve-designsystem)

## Skal du bruke NVE designsystem? Denne seksjonen er for deg.

### Api-dokumentasjon

[Her er dokumentasjon på hver komponent](./doc/components.md)

### **Oppsett i Vue**

1. Install pakke med `npm i nve-designsystem`.

2. I vite.config (lagre en ny fil hvis den ikke eksisterer i rot-mappe), legg inn isCustomElement som forteller Vue at det er en customElement, og dropp component resolution [(les mer her)](https://vuejs.org/guide/extras/web-components.html).

```js
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls,
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('nve-'),
        },
      },
    }),
  ],
});
```

3. I tillegg trenger du å importere en .css-fil for farge-tema i main.ts. Filene finnes i mappa `nve-designsystem/build/css/`. For NVE-tema, bruk:

```ts
import 'nve-designsystem/dist/css/nve.css';
```

For Varsom-tema, bruk:

```ts
import 'nve-designsystem/dist/css/varsom.css';
```

Du har også mulighet til å velge enten lyst eller mørkt tema. Lyst er standard.

### **Eksempel på bruk av komponent**

```html
<template>
  <nve-button variant="primary" size="small" @click="send">Button</nve-button>
</template>
<script setup lang="ts">
  import { NveButton } from 'nve-designsystem';
</script>
```

Husk å alltid bruke både opening og closing tag individuelt, (`<nve-button />` fungerer ikke).

### **Storybook**

Komponentene kan ses og testes i Storybook med ulike parametere og varianter: https://main--65322c4ee3062d1c117bb2d5.chromatic.com/

## Skal du utvikle NVE designsystem? Denne seksjonen er for deg.

VIKTIG! Alle komponenters navn skal starte med `nve-`!

De fleste komponentene bygger på [Shoelace](https://shoelace.style/), men er tilpasset NVE Designsystem. Etterhvert vil de fleste Shoelace-komponenter få sin NVE-variant, men vi kommer også til å lage komponenter som ikke baseres på Shoelace. Vi anbefaler at du laster ned [kildekoden til Shoelace](https://github.com/shoelace-style/shoelace) og setter deg inn i [Lit](https://lit.dev/), som vi bruker som rammeverk.

### **Kjøremiljø**

Prosjektet importerer Shoelace sin npm-pakke. Kjør `npm run dev` for utvikling.
For å teste en komponent i main.ts må man huske å legge til script tag med komponenten i index.html fila som f.eks. <script type="module" src="/src/nve-button.ts"></script>

### **Oppretting av en ny komponent og mappe struktur**

Du kan opprette en ny komponent ved å kjøre `npm run add-component ${navn på komponent. Må starte med nve- som f.eks nve-tag}`. Den oppretter riktig mappe struktur for deg.

Hvis du velger en manuelt måte opprett en mappe under src/components med komponent navn. Fil som inneholder selve komponent burde ha

- .component.ts suffiks på fil sin inneholder selve komponent f.eks. /components/nve-component/nve-component.component
- .styles.ts på filer med styling f.eks. /components/nve-component/nve-component.styles.ts
- .demo.ts på filer som skal demonstrere komponent (til utviklere) f.eks. /components/nve-component/nve-component.demo.ts

### **Hvordan vi bygger komponenter**

Vi setter reflect: true på alle properties i komponenter (se eksempel under) for å kunne se properties som oppdateres i DOMen. Gjelder reaktive applikasjoner.

```js
@property({ reflect: true }) title: string = '';
```

### **Komponent eksport**

Komponenter skal eksponeres i src/index.ts fila med

```js
export { default as NveComponent } from './components/nve-component/nve-component.component';
```

### **Styling**

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

### **Typografi**

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

### **Mapping av shoelace tokes til NVE-tokens**

Det hadde vært fint om vi kunne sette en NVE-verdi for alle Shoelace-tokens. Men dette går ikke fordi strukturen i Shoelace og NVE Designsystem er forskjellig.
Vi har satt NVE-verdier for en del Shoelace-tokens, og disse ligger i global.css.
Foreslå gjerne flere Shoelace-tokens som kan mappes på denne måten.

Vi trenger ikke å style:

- fokus-tilstand på alle komponenter. Dette settes globalt
- høyde på input-felter, knapper og select
- border-radius på alle komponenter (med mindre border radius mangler på en Shoelace-komponent, men designsystemet spesifiserer border-radius)
- bakgrunn, font-farge, font-størrelse, ikon-farge, ramme i input, select og textarea i både variantene filled og not filled

### **Test-app for designere når man lager en PR**

Pull requests på komponenter skal godkjennes av designere. Derfor har vi satt opp en azure static app med Storybook. Denne bygges og kjøres når man lager en PR.

Det er maks 10 apper som kan kjøres samtidig, så hvis det er flere enn 10 PR'er kan det være at appen ikke bygges. De skal slettes automatisk når en PR lukkes, men det er ikke alltid dette virker. I slike tilfeller må vi slette appene manuelt i Azure-portalen. Appene ligger i denne ressursgruppa: TEST-Designsystemet-RG.

### Dokumentasjon

- Vi dokumenterer på norsk
- Alle komponenter dokumenteres med JsDoc-tags i koden. Alt som er tilgjengelig for de som bruker komponentene skal dokumenteres, dvs. alle public klasser, interfaces, properties/attributter, metoder, events, slots, css-parts og css-properties. [Her er noen tips.](https://github.com/runem/web-component-analyzer#-how-to-document-your-components-using-jsdoc)
  Vi bruker [Web Component Analyzer](https://github.com/runem/web-component-analyzer) til å generere API-dokumentasjon.
- Generer .MD-filer med `npm run doc` og sjekk inn de genererte filene sammen med koden. Om du har laget nye komponenter, legg dem til i [denne lista](./doc/components.md).

### **Bygge css**

For å bygge css filer som inneholder verdier basert på tokens fra Figma, kjør følgende kommando: "npm run tokenbuild." <br>

### **npm**

Publisering til npm skjer ved hjelp av Github actions. Når man pusher til main branch, starter det en workflow som oppdaterer versjonsnummer og publiserer npm-pakke. Workflow er spesifisert i filen .github/workflows/npm-publish.yml.

### **Kjøremiljø**

Prosjektet importerer Shoelace sin npm-pakke. Kjør `npm run dev` for utvikling.
For å teste en komponent i main.ts må man huske å legge til script tag med komponenten i index.html fila som f.eks. <script type="module" src="/src/nve-button.ts"></script>

### **Test pakke lokalt**

Før man pusher til main er det lurt å teste pakke lokalt. Med `npm run pack` kan man teste hvordan pakken oppfører seg akkurat på samme måte som etter publisering. For å teste en nve-designsystem pakke lokalt:

1. Kjør `npm run build`
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
<li>Minimum et eksempel på komponent må opprettes og eksporteres i stories-filen, f.eks. "export const Primary..." for Primary-vaiant av NveButton</li>
<li>Informasjon om komponenten (fra Figma og ev. ekstra info) kan legges inn i stories-files under parameters -> docs --> description -->  component</li>
</ul>

For å publisere Storybook på Chromatic, kjør `npm run build; npm run build-storybook`. Deretter må det kjøres en kommando med project token fra Chromatic: `npx chromatic --project-token=\<project-token\>`
