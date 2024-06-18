# Bruk av designsystemet i Vue 3

## Installer designsystem-pakka

`npm i nve-designsystem`

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
