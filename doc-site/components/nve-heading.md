---
layout: component
---

<CodeExamplePreview>

```html
<nve-heading level="1" size="headingLarge">Dette er en overskrift</nve-heading>
```

</CodeExamplePreview>

## Eksempler

Eksemplene viser hvordan du kan bruke heading-komponenten med ulike typografivarianter og nivåer for å tilpasse overskrifter til innholdet.

### Heading-varianter

Disse variantene gir deg de ulike typografistilene for hovedoverskrifter, og kan brukes på alle heading-nivåer etter behov.

<CodeExamplePreview>

```html
<nve-heading level="1" size="headingXlarge">Dette er en h1 med heading-xlarge</nve-heading>
<nve-heading level="2" size="headingLarge">Dette er en h2 med heading-large</nve-heading>
<nve-heading level="3" size="headingMedium">Dette er en h3 med heading-medium</nve-heading>
<nve-heading level="4" size="headingSmall">Dette er en h4 med heading-small</nve-heading>
<nve-heading level="5" size="headingXsmall">Dette er en h5 med heading-xsmall</nve-heading>
```

</CodeExamplePreview>

### Subheading-varianter

Subheading-variantene gir undertitler med egne typografistiler, og brukes gjerne for å dele opp innhold under hovedoverskrifter.

<CodeExamplePreview>

```html
<nve-heading level="2" size="subheadingLarge">Dette er en h2 med subheading-large</nve-heading>
<nve-heading level="3" size="subheadingMedium">Dette er en h3 med subheading-medium</nve-heading>
<nve-heading level="4" size="subheadingSmall">Dette er en h4 med subheading-small</nve-heading>
```

</CodeExamplePreview>

### Default stil

Når du ikke spesifiserer en variant, får heading-komponenten automatisk riktig typografi basert på valgt heading-nivå (`level`). Typografien følger designsystemets standard for h1–h6.

<CodeExamplePreview>

```html
<nve-heading level="1">Heading h1</nve-heading>
<nve-heading level="2">Heading h2</nve-heading>
<nve-heading level="3">Heading h3</nve-heading>
<nve-heading level="4">Heading h4</nve-heading>
<nve-heading level="5">Heading h5</nve-heading>
```

</CodeExamplePreview>

## Retningslinjer

Heading brukes til å skape struktur og hierarki i innholdet. Bruk overskrifter for å dele opp innholdet i logiske seksjoner. Pass på at du bruker riktige overskriftsnivåer (h1-h6) for å sikre god semantisk struktur.

### Mobilskalering

Komponenten skalerer automatisk overskrifter på ulike skjermstørrelser. Dette sikrer god lesbarhet og tilgjengelighet på mobil og små skjermer.

### Stil og fleksibilitet

Alle overskriftsnivåer har en standard stil som passer i de fleste kontekster. Du kan velge stil og størrelse for hvert nivå etter behov og design, noe som gir fleksibilitet til å tilpasse typografien til ulike seksjoner og innholdstyper.

Se mer detaljer om typografi og heading-hierarki i [introduksjonen til designsystemet](/introduction/designelementer/typography).

### Hierarki

Komponenten bruker prop `level` for å sikre riktig heading-hierarki. Start alltid med `level="1"` (h1) for hovedtittel, deretter `level="2"` (h2) for mellomtitler og `level="3"` (h3) for underordnede titler. `Level="4"` og lavere kan brukes for ytterligere inndeling.

Det er viktig å ikke hoppe over nivåer, for eksempel h2 til h4. En side skal aldri ha mer enn én h1. Riktig hierarki gir bedre tilgjengelighet, struktur og SEO, og sikrer konsistent navigasjon for brukere med hjelpemidler.

#### Eksempel på artikkel

<CodeExamplePreview>

```html
<nve-heading level="1" size="headingLarge">Energisparing i hjemmet</nve-heading>
<nve-paragraph size="leadLargeRegular">
  Ingress: Å spare energi er bra for både miljøet og lommeboken. Her får du tips til hvordan du kan redusere
  strømforbruket hjemme.
</nve-paragraph>

<nve-heading level="2" size="headingMedium">Slik sparer du strøm</nve-heading>
<nve-paragraph size="bodyLarge">
  Bruk energieffektive lyspærer og slå av lys når du forlater rommet. Unngå å la elektronikk stå i standby-modus, og
  trekk ut ladere når de ikke er i bruk.
</nve-paragraph>

<nve-heading level="3" size="headingSmall">Varmepumpe</nve-heading>
<nve-paragraph size="bodyMedium">
  En varmepumpe kan redusere oppvarmingskostnadene betydelig. Velg en modell som passer til boligens størrelse og klima.
</nve-paragraph>

<nve-heading level="3" size="headingSmall">Isolering</nve-heading>
<nve-paragraph size="bodyMedium">
  God isolering holder på varmen og gjør at du bruker mindre energi til oppvarming. Sjekk vinduer, dører og tak for
  trekk.
</nve-paragraph>
```

</CodeExamplePreview>

## Tilgjengelighet

Overskrifter bør brukes i riktig rekkefølge (h1–h6) for å skape en tydelig og forutsigbar struktur. Riktig hierarki gjør det enklere for brukere og hjelpemidler å navigere og forstå innholdet. Vær konsekvent på tvers av sider og seksjoner, slik at samme stil og semantikk brukes for samme overskriftsnivå.

Bruk komponentens `level`-prop for korrekt HTML-tag (h1–h6). Teksten legges i slot for god tilgjengelighet.

Husk at WCAG krever god fargekontrast. Det er ditt ansvar som designer eller utvikler å sikre at kontrasten oppfyller kravene.
