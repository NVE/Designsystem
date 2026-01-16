Dette er en dokumentasjonsside for et prosjekt som kjører i [Vitepress](https://vitepress.dev/guide/what-is-vitepress).

For å starte docs sida lokalt kan du bare kjøre (fra Designsystem root mappe):

```
npm run dev
```

VIKTIG! Når man kjører npm run dev første gang, skal appen rerendres på nytt etter en stund. Grunnen er dynamiske importer
av nve-komponenter som vite må rebundle etter de blir importert. Grunne vi må importere nve-komponenter dynamisk i klien
delen er at Vitepress bygger sider via SSR, som betyr at noen komponenter (de som f.eks bruker Web API via nettleseren)
kan ikke fungere i node miljø. Egentlig alle shoelace komponenter. Etter den første kjøring skal cache mappe opprettes
under .vitepress, og den skal sikre at rerendering skal ikke skje igjen.
[Les mer her.](https://vitepress.dev/guide/ssr-compat#ssr-compatibility)

Vitepress sin routing er filbasert, derfor bør alt som skal vises på siden være i rotmappen doc-vitepress.
All logikk, gjenbrukbare vue UI-komponenter, og layout-konfigurasjon ligger under mappen .vitepress/theme.

Hver komponentdokumentasjon markdown-fil må arve komponentlayouten. Du kan sette den øverst i filen med

```
---
layout: component
---
```

Husk å importere komponenten innen `<script>`-taggene, ellers vil du ikke se innholdet. Vi kunne ha laget en automatisk import av komponenter i malene, men da må vi sjekke hele DOM-treet og se etter alle nve-komponenter. Dette er ikke den beste løsningen fra et ytelsesperspektiv, derfor forventer vi at utviklere skal importere komponentene selv. En annen bedre løsning kan være å skanne selve .md fil i en vue komponent og se etter alle nve-taggene og importere de automatisk.

Når du legger til en ny komponent under doc-vitepress/components-mappen, må du restarte appen og kjøre `npm run dev` på nytt for å kunne se den i sidebaren.

Før du lager en PR, test gjerne bygg lokalt med:

```
npm run doc:build
```

og deretter med:

```
npm run doc:preview
```

### Styles

I styles-mappen finner du flere CSS-filer som tilsvarer de som ligger under src-mappen. Årsaken til at vi kopierer stilene hit er at nve-designsystem-pakken ikke installeres i dokumentasjonssiden; i stedet benyttes komponentene direkte fra repoet. Derfor importeres ikke CSS-stilene via varsom.css eller nve.css fra hovedpakken. Dette er i praksis en kopi for å sikre en konsistent opplevelse når nye komponenter legges til i dokumentasjonssiden. Filene burde ikke tas med mindre det ble innført endringene i original-filene. Tema filene generers automatisk når man kjører 'npm run tokenbuild'.
