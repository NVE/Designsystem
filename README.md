# NVE Designsystem

Dette repository inneholder css generert fra Figma-tokens og komponentbibliotek basert på Shoelace [( Shoelace dokumentasjon)](https://shoelace.style/).
[Lenke til npm-pakke.](https://www.npmjs.com/package/nve-designsystem)

## Skal du bruke NVE designsystem? Denne seksjonen er for deg.

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

4. I tillegg trenger du å importere en .css-fil for farge-tema i main.ts. Filene finnes i `nve-designsystem/build/css/` mappe. For NVE-tema, bruk:

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
  <template>
    <script setup lang="ts">
      import { NveButton } from 'nve-designsystem/src/components/nve-button/nve-button';
    </script></template
  ></template
>
```

Husk å alltid bruke både opening og closing tag individuelt, (`<nve-button />` fungerer ikke).

### **Storybook**

Komponentene kan ses og testes i Storybook med ulike parametere og varianter: https://main--65322c4ee3062d1c117bb2d5.chromatic.com/

## Skal du utvikle NVE designsystem? Denne seksjonen er for deg.

### **Bygge css**

For å bygge css filer som inneholder verdier basert på tokens fra Figma, kjør følgende kommando: "npm run tokenbuild." <br>

### **npm**

For å publisere på npm, må man oppdatere versjonsnr. i package.json og package-lock.json. Deretter kjør kommando `npm publish --access public`. Dette krever at man er innlogget på npm. For at CSS-variabler skal være tilgjengelig i npm-pakken, må css-filer kopieres. Dette gjøres ved å kjøre kommando `npm run copy-files`.

### **Kjøremiljø**

Prosjektet importerer Shoelace sin npm-pakke. Kjør `npm run dev` for utvikling.
For å teste en komponent i main.ts må man huske å legge til script tag med komponenten i index.html fila som f.eks. <script type="module" src="/src/nve-button.ts"></script>

### Storybook

For å kjøre Storybook lokalt, kjør `npm run storybook`

Det skal opprettes en story for hver nye komponent som lages. Story opprettes på følgende måte: <br>

<ul>
<li>Opprett en fil i mappen stories med filnavn "NavnPåKomponent.stories.ts." F.eks. NveButton.stories.ts.</li>
<li>Se på eksisterende stories-filer og bruk samme oppsett </li>
<li>Storbyook lager toggle-buttons for boolean verdier. For dropdown-meny må man selv definere alternativene </li>
<li>Komponent-filen, f.eks. NavnPåKomponent.ts må eksportere props. Se eksisterende filer for eksempel (export interface NavnPåKomponentProps)</li>
<li>Minimum et eksempel på komponent må opprettes og eksporteres i stories-filen, f.eks. "export const Primary..." for Primary-vaiant av NveButton</li>
<li>Informasjon om komponenten (fra Figma og ev. ekstra info) kan legges inn i stories-files under parameters -> docs --> description -->  component</li>
</ul>

For å publisere Storybook på Chromatic, kjør `npm run build; npm run build-storybook`. Deretter må det kjøres en kommando med project token fra Chromatic: `npx chromatic --project-token=\<project-token\>`
