<PageHeader title="For utviklere" imagePath="developer"  ></PageHeader>

# Bruk av designsystemet i Vue 3

## Installer designsystem-pakka

```sh
npm i nve-designsystem
```

## Fortell Vue at komponentene våre er web-komponenter

I `vite.config`, legg inn `isCustomElement`, som forteller Vue hva som er web-komponenter.
Hvis du ikke har `vite.config` fra før, lag en ny fil i rot-mappa.

[Les her](https://vuejs.org/guide/extras/web-components.html) for mer info og andre løsninger hvis du ikke bruker Vite.

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

TODO: BUrde vi også inkludert type-info? Se <https://shoelace.style/frameworks/vue#types>

## Stiler

Importer <em>en</em> .css-fil for farge-tema i `main.ts`. Filene finnes i mappa `nve-designsystem/css/`.
For NVE-tema, bruk:

```js
import 'nve-designsystem/css/nve.css';
```

For Varsom-tema, bruk:

```js
import 'nve-designsystem/css/varsom.css';
```

Det finnes også varianter av disse to filene med mørkt tema.

## Ikoner

Fordi vi overstyrer Shoelace sine system-ikoner i våre komponenter må vi registrere disse manuelt.
Her er [mer info](https://shoelace.style/components/icon#icon-libraries).
Legg denne kodesnutten i main.ts eller App.vue:

```js
import { icons, registerIconLibrary } from 'nve-designsystem/registerIcons/systemLibraryCustomization.js';
registerIconLibrary('system', {
  resolver: (name) => {
    return `data:image/svg+xml, ${encodeURIComponent(icons[name])}`;
  },
});
```

## Eslint-regler og VS Code

Hvis du bruker VS Code og starter et nytt prosjekt gjennom npm run create vue@latest og bruker standard eslint-regler, kan du få feil fra eslint-regler og automatisk retting fra VS-kode. Du kan legge til disse ESLint-reglene for å unngå dette:

```json
"vue/no-deprecated-slot-attribute": "off",
"vue/attribute-hyphenation": "off",
"vue/v-on-event-hyphenation": "off",
```

## Eksempel på bruk av komponent

```vue
<template>
  <nve-button @Click="count++">Du har trykket på denne NVE-knappen {{ count }} gang(er)</nve-button>
</template>
<script setup lang="ts">
import 'nve-designsystem/components/nve-button/nve-button.component.js';
import { ref } from 'vue';
const count = ref(0);
</script>
```

Under kjører vi denne koden i en sandkasse. Du kan endre koden selv ved å velge 'Open Sandbox' og fila 'App.vue'.

<SandboxPreview>

```
<template>
  <nve-button @Click="count++">Du har trykket på denne NVE-knappen {{ count }} gang(er)</nve-button>
</template>
<script setup lang="ts">
import 'nve-designsystem/components/nve-button/nve-button.component.js';
import { ref } from 'vue';
const count = ref(0);
</script>
```

</SandboxPreview>

Hvis du ikke ser komponenten når du kjører sida, sjekk om du har importert den riktig.

Les også om [bruk av Shoelace-komponenter i Vue](https://shoelace.style/frameworks/vue). Det meste der gjelder for Nve-komponenter også.
