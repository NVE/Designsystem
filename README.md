# NVE Designsystem

Dette repository inneholder css generert fra Figma-tokens og komponentbibliotek basert på Shoelace [( Shoelace dokumentasjon)](https://shoelace.style/).
[Lenke til npm-pakke.](https://www.npmjs.com/package/nve-designsystem)

## Skal du bruke NVE designsystem? Denne seksjonen er for deg.

### **Oppsett i Vue**

1. Install pakke med `npm i nve-designsystem`.

2. I vite.config file (lagre en ny fila hvis den ikke eksisterer i root mappe) legg inn isCustomElement som skal si til Vue at det er en customElement, og droppe component resolution [(les mer her)](https://vuejs.org/guide/extras/web-components.html)

```
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

3. Import styles fra global.css i enten main.ts eller index.html.

```
import 'nve-designsystem/src/styles/global.css';
```

4. I tillegg trenger du å importere en .css fil med nve variabler. Filene finnes i `nve-designsystem/build/css/` mappe. Man kan bestemme selv hvilken tema man vil bruke og hvordan implementere eventuelt switch mellom lys og mørk tema. Eksempel på varsom tema import i main.ts fila:

```
import 'nve-designsystem/build/css/varsom.css';
```

### **Eksempel på bruk av komponent**

```
<template>
   <nve-button variant="primary" size="small" @click="send">Button</nve-button>
<template>

<script setup lang="ts">
import { NveButton } from 'nve-designsystem/src/components/nve-button/nve-button';
</script>
```

Husk å alltid bruke både opening og closing tag individuelt, (`<nve-button />` skal ikke fungere).

### **Storybook**

Komponentene kan ses og testes i Storybook med ulike parametere og varianter: https://main--65322c4ee3062d1c117bb2d5.chromatic.com/

## Skal du utvikle NVE designsystem? Denne seksjonen er for deg.

### **Bygge css**

For å bygge css filer som inneholder verdier basert på tokens fra Figma, kjør følgende kommando: "npm run tokenbuild." <br>

### **npm**

For å publisere på npm, må man oppdatere versjonsnr. i package.json og package-lock.json. Deretter kjør kommando `npm publish --access public`. Dette krever at man er innlogget på npm. For at CSS-variabler skal være tilgjengelig i npm-pakken, må css-filer kopieres. Dette gjøres ved å kjøre kommando `npm run copy-files`.

### **Kjøremiljø**

Prosjekt importerer shoelace npm pakke. Kjør `npm run dev` for utvikling.
For å teste en komponent i main.ts må man huske å legge til script tag med komponenten i index.html fila som f.eks. <script type="module" src="/src/nve-button.ts"></script>

### Storybook

For å kjøre Storybook lokalt, kjør `npm run storybook`

For å publisere Storybook på Chromatic, kjør `npm run build; npm run build-storybook`. Deretter må det kjøres en kommando med project token fra Chromatic: `npx chromatic --project-token=\<project-token\>`
