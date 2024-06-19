# Brukerveiledning for komponentbiblioteket til NVE Designsystem

Dette er en separat Vue-applikasjon som viser hvordan man bruker komponentbiblioteket.
Den henter informasjon fra JsDoc i kildekoden til komponentene og setter dette sammen med annen dokumentasjon skrevet i markdown-filer.
Markdown-filene kan inneholde kodeeksempler. Kodeeksempler markert med ```html:preview vil vises med forhåndsvisning i HTML og med koden under. Evt. Javascript-kode i disse kodeblokkene vil kjøre, men de vil ikke vises i kodeeksemplet i applikasjonen.

Dette er en standard Vue3-applikasjon som kjøres av Vite. Vi bruker `<script setup>` med både html-mal, kode og stiler i en fil, sjekk ut [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) for mer info.

## Anbefalt utviklingsmiljø

[VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (tidligere Volar) og deaktiver Vetur
