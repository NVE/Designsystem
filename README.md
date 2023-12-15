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
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('nve-'),
        },
      },
    }),
```

3. Importer stiler fra global.css i enten main.ts eller index.html:

```
import 'nve-designsystem/src/styles/global.css';
```

4. I tillegg trenger du å importere en .css-fil for farge-tema i main.ts. Filene finnes i mappa `nve-designsystem/build/css/`. For NVE-tema, bruk:

```ts
import 'nve-designsystem/build/css/nve.css';
```

For Varsom-tema, bruk:

```ts
import 'nve-designsystem/build/css/varsom.css';
```

Du har også mulighet til å velge enten lyst eller mørkt tema. Lyst er standard.

### **Eksempel på bruk av komponent**

```html
<template>
  <nve-button variant="primary" size="small" @click="send">Button</nve-button>
</template>
<script setup lang="ts">
  import { NveButton } from 'nve-designsystem/src/components/nve-button/nve-button';
</script>
```

Husk å alltid bruke både opening og closing tag individuelt, (`<nve-button />` fungerer ikke).

### **Storybook**

Komponentene kan ses og testes i Storybook med ulike parametere og varianter: https://main--65322c4ee3062d1c117bb2d5.chromatic.com/

## Skal du utvikle NVE designsystem? Denne seksjonen er for deg.

De fleste komponentene bygger på [Shoelace](https://shoelace.style/), men er tilpasset NVE Designsystem. Etterhvert vil de fleste Shoelace-komponenter få sin NVE-variant, men vi kommer også til å lage komponenter som ikke baseres på Shoelace. Vi anbefaler at du laster ned [kildekoden til Shoelace](https://github.com/shoelace-style/shoelace) og setter deg inn i [Lit](https://lit.dev/), som vi bruker som rammeverk.

### **Kjøremiljø**

Prosjektet importerer Shoelace sin npm-pakke. Kjør `npm run dev` for utvikling.
For å teste en komponent i main.ts må man huske å legge til script tag med komponenten i index.html fila som f.eks. <script type="module" src="/src/nve-button.ts"></script>

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

### **Storybook**

For å kjøre Storybook lokalt, kjør `npm run storybook`

For å publisere Storybook på Chromatic, kjør `npm run build; npm run build-storybook`. Deretter må det kjøres en kommando med project token fra Chromatic: `npx chromatic --project-token=\<project-token\>`

### Dokumentasjon

- Vi dokumenterer på norsk
- Alle komponenter dokumenteres med JsDoc-tags i koden. Alt som er tilgjengelig for de som bruker komponentene skal dokumenteres, dvs. alle public klasser, interfaces, properties/attributter, metoder, events, slots, css-parts og css-properties. [Her er noen tips.](https://github.com/runem/web-component-analyzer#-how-to-document-your-components-using-jsdoc)
  Vi bruker [Web Component Analyzer](https://github.com/runem/web-component-analyze) til å generere API-dokumentasjon.
- Generer .MD-filer med `npm run doc` og sjekk inn de genererte filene sammen med koden. Om du har laget nye komponenter, legg dem til i [denne lista](./doc/components.md).

### **Bygge css**

For å bygge css filer som inneholder verdier basert på tokens fra Figma, kjør følgende kommando: "npm run tokenbuild." <br>

### **npm**

For å publisere på npm, må man oppdatere versjonsnr. i package.json og package-lock.json. Deretter kjør kommando `npm publish --access public`. Dette krever at man er innlogget på npm. For at CSS-variabler skal være tilgjengelig i npm-pakken, må css-filer kopieres. Dette gjøres ved å kjøre kommando `npm run copy-files`.
