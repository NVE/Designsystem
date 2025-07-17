---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-warning-level></nve-warning-level>
```

</CodeExamplePreview>

## Eksempler

### Farenivå

Bruk `level` for å vise riktig farge og farenivå-nummer i komponenten. Kjente farenivåer er fra 1 til 5. Du kan også bruke `unknown` hvis farenivå ikke er kjent. `1` er standardverdien.

<CodeExamplePreview>

```html
<nve-warning-level></nve-warning-level>
<nve-warning-level level="2"></nve-warning-level>
<nve-warning-level level="3"></nve-warning-level>
<nve-warning-level level="4"></nve-warning-level>
<nve-warning-level level="5"></nve-warning-level>
<nve-warning-level level="unknown"></nve-warning-level>
```

</CodeExamplePreview>

### Ramme

Bruk `border` attributet for å vise en svart ramme rundt komponenten.

<CodeExamplePreview>

```html
<nve-warning-level border></nve-warning-level>
```

</CodeExamplePreview>

### Støtte badge

For å tiltrekke ekstra oppmerksomhet kan du bruke`warningBadge` for å vise et badge med et ikon som dukker opp nederst til høyre i komponenten.
Denne finnes i to varianter: `circle` eller `triangle`.

<CodeExamplePreview>

```html
<nve-warning-level warningBadge="circle"></nve-warning-level>
<nve-warning-level warningBadge="triangle"></nve-warning-level>
```

</CodeExamplePreview>

### Størrelse

Standardstørrelsen er 34px. Du kan endre størrelsen ved å sette CSS-variabelen `--size` på nve-warning-level. Minimumsstørrelsen er 24px, og maksimum er 40px. Badgen justeres automatisk.

<CodeExamplePreview>

```html
<nve-warning-level style="--size: 40px"></nve-warning-level>
<nve-warning-level></nve-warning-level>
<nve-warning-level style="--size: 24px"></nve-warning-level>
<nve-warning-level style="--size: 24px" warningBadge="circle"></nve-warning-level>
<nve-warning-level style="--size: 24px" warningBadge="triangle"></nve-warning-level>
```

</CodeExamplePreview>

### Farenivå i en knapp eller en lenke

Du kan legge komponenten inni vanlige HTML-`<button>` eller `<a>`-elementer. Dette gjør at komponenten viser pekerkursor og får hover-effekt. Du må selv style `<button>` og `<a>` etter behov, for eksempel ved å fjerne knappens ramme eller endre lenkens fontfarge.

<CodeExamplePreview>

```html
<button>
  <nve-warning-level></nve-warning-level>
</button>

<a style="text-decoration:none;">
  <nve-warning-level></nve-warning-level>
</a>
```

</CodeExamplePreview>

## Universell utforming

Komponenten for varslingsnivå representerer farenivå ved hjelp av farge og en etikett som kun består av et siffer. Derfor kan det i en større sammenheng være at visningen alene ikke er tilstrekkelig for alle brukere. Vi tilbyr derfor en `ariaLabel`-egenskap som setter en `aria-label`-attributt på komponenten (settes på hoved div-en).

For at `aria-label` skal bli lest opp av skjermlesere, må hoved-`<div>`-elementet ha en rolle. Siden komponenten er en visuell representasjon av farenivå, brukes `role="img"`.

Det er opp til deg hvordan du vil definere etiketten, men noe så enkelt som `Farenivå 2` (dersom nivået er 2) bør være tilstrekkelig. Avhengig av språk anbefaler vi at du oppdaterer aria-label deretter.

Når du i tillegg bruker et ikon/badge, kan det være nyttig å inkludere en kort beskrivelse av hva ikonet betyr i ariaLabel-teksten. Badgen vises som et bilde (`<img>`), men siden aria-label allerede er satt på hoveddiven, vil `alt`-teksten på bildet bli ignorert og dermed ikke lest opp. `ariaLabel`-egenskapet bør derfor dekke både faregraden og eventuell tilleggsinformasjon fra badgen.

<CodeExamplePreview>

```html
<nve-warning-level
  level="2"
  warningBadge="circle"
  aria-label="Farenivå 2. Naturlig utløste snøskred ventes."
></nve-warning-level>
```

</CodeExamplePreview>

Hvis du legger komponenten inni `<button>` eller `<a>` burde du bruke `aria-label` på de istedenfor.

<CodeExamplePreview>

```html
<a aria-label="Farevarsling for farenivå 2" style="text-decoration:none;">
  <nve-warning-level level="2"></nve-warning-level>
</a>
```

</CodeExamplePreview>

<i>Farenivå komponent ble testet med NVDA skjerm-leser, og den fungerer som forventet.</i>
