---
layout: component
---

<CodeExamplePreview>

```html
<nve-accordion-item summary="Vis mer tekst">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>
```

</CodeExamplePreview>

## Eksempler

### Accordion

Bruk [nve-accordion](/components/nve-accordion) hvis du vil ha flere `nve-accordion-item` under hverandre, men kun tillate at _en_ `nve-accordion-item` er åpen om gangen.

### Varianter

Vi har mye av de samme variantene her som i andre steder av løsningen. `none` er standard, og har ingen bakgrunn eller luft på sidene. `neutral` har hvit bakgrunn.

<CodeExamplePreview>

```html
<nve-accordion-item summary="none" open> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </nve-accordion-item>
<nve-accordion-item summary="neutral" open variant="neutral">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="secondary" open variant="secondary">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="info" open variant="info">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="success" open variant="success">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="warning" open variant="warning">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="error" open variant="error">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
```

</CodeExamplePreview>

### Ramme

Som standard har accordion ikke ramme rundt, men du kan sette det ved å sette `border` på komponenten

<CodeExamplePreview>

```html
<nve-accordion-item summary="none" open border>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="neutral" open variant="neutral" border>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="secondary" open variant="secondary" border>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="info" open variant="info" border>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="success" open variant="success" border>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="warning" open variant="warning" border>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="error" open variant="error" border>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
```

</CodeExamplePreview>

### Tykk linje til venstre

Bruk `leftStroke` for å sette en tykk strek til venstre for komponenten. Denne er i samme farge som `border`, med unntak av `none` og `neutral`-variantene, som har fargen `brand-primary`

<CodeExamplePreview>

```html
<nve-accordion-item summary="Ramme på venstre side" leftStroke>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>
```

</CodeExamplePreview>

### Kompakt visning

Viser accordion uten padding til venstre og høyre, og med en border under. Sett `compact` for å vise denne

<CodeExamplePreview>

```html
<div>
  <nve-accordion-item summary="Kompakt visning" compact>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nve-accordion-item>
  <nve-accordion-item summary="Kompakt visning" compact>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nve-accordion-item>
  <nve-accordion-item summary="Kompakt visning" compact>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nve-accordion-item>
</div>
```

</CodeExamplePreview>

### Tilpassing av tittel-sporet

Man kan bruke `summary` for å sette tittel, men kan også angi det som et eget spor dersom det er nødvendig

<CodeExamplePreview>

```html
<nve-accordion-item>
  <div slot="summary" class="customheader" style="display: flex; gap: var(--spacing-small); align-items: center;">
    <div>Her er litt tekst</div>
    <div style="color: var(--brand-primary); font-size: 0.8em; font-weight: 400;">Annen tekst</div>
    <nve-icon name="home"></nve-icon>
  </div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>
```

</CodeExamplePreview>

### Disabled

Bruk disabled for å deaktivere komponenten.

<CodeExamplePreview>

```html
<nve-accordion-item summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>
```

</CodeExamplePreview>

### Tilpasse ikoner

Bruk summary-ikon og collapse-ikon for å endre henholdsvis ikonene for å åpne/utvide og lukke. For å deaktivere animasjonen, overstyr rotate-egenskapen på ikon som vist nedenfor.
<CodeExamplePreview>

```html
<nve-accordion-item summary="Toggle Me" class="custom-icons">
  <nve-icon name="add" slot="expand-icon"></nve-icon>
  <nve-icon name="remove" slot="collapse-icon"></nve-icon>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>

<style>
  nve-accordion-item.custom-icons::part(summary-icon) {
    rotate: none;
  }
</style>
```

</CodeExamplePreview>
