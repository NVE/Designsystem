---
layout: component
---

<CodeExamplePreview>

```html
<nve-accordion summary="Vis mer tekst">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion>
```

</CodeExamplePreview>

## Eksempler

### Disabled

Bruk disabled for å deaktivere accordion.

<CodeExamplePreview>

```html
<nve-accordion summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion>
```

</CodeExamplePreview>

### Tilpasse Summary Ikon

Bruk summary-ikon og collapse-ikon for å endre henholdsvis utvidelses- og skjulikonene. For å deaktivere animasjonen, overstyr rotate-egenskapen på summary-ikon som vist nedenfor.
<CodeExamplePreview>

```html
<nve-accordion summary="Toggle Me" class="custom-icons">
  <nve-icon name="add" slot="expand-icon"></nve-icon>
  <nve-icon name="remove" slot="collapse-icon"></nve-icon>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion>

<style>
  nve-accordion.custom-icons::part(summary-icon) {
    rotate: none;
  }
</style>
```

</CodeExamplePreview>

### Grupperingsdetaljer

Accordion er designet for å fungere uavhengig, men du kan simulere en gruppe der bare én vises om gangen ved å lytte etter sl-show-arrangementet.
<CodeExamplePreview>

```html
<div class="accordion-group-example">
  <nve-accordion summary="First" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nve-accordion>

  <nve-accordion summary="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nve-accordion>

  <nve-accordion summary="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nve-accordion>
</div>

<script>
  const container = document.querySelector('.accordion-group-example');

  container.addEventListener('sl-show', (event) => {
    if (event.target.localName === 'nve-accordion') {
      [...container.querySelectorAll('nve-accordion')].map((details) => (details.open = event.target === details));
    }
  });
</script>

<style>
  .accordion-group-example nve-accordion:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-2x-small);
  }
</style>
```

</CodeExamplePreview>

### Ramme

Som standard har accordion ikke ramme rundt, men du kan sette det ved å sette `border` på komponenten

<CodeExamplePreview>

```html
<nve-accordion summary="Border her" border>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion>
```

</CodeExamplePreview>

### Varianter

Vi har mye av de samme variantene her som i andre steder av løsningen. `none` er standard, og har ingen bakgrunn.

<CodeExamplePreview>

```html
<nve-accordion summary="none" open> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </nve-accordion>
<nve-accordion summary="neutral" open variant="neutral">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion>
<nve-accordion summary="secondary" open variant="secondary">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion>
<nve-accordion summary="info" open variant="info">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion>
<nve-accordion summary="success" open variant="success">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion>
<nve-accordion summary="warning" open variant="warning">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion>
<nve-accordion summary="error" open variant="error">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion>
```

</CodeExamplePreview>

### Tykk linje til venstre

Man kan sette en tykk linje til venstre av komponenten ved å angi `leftstroke`

<CodeExamplePreview>

```html
<nve-accordion summary="Ramme på venstre side" leftstroke>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion>
```

</CodeExamplePreview>

### Høyrejustering chevron

Shoelace har chevron (dropdown-ikonet) til høyre, men vi har det til venstre. Dersom du ønsker å ha det til høyre, så kan du angi det med `rightalignedchevron`

<CodeExamplePreview>

```html
<nve-accordion summary="Ikon til høyre" rightalignedchevron>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion>
```

</CodeExamplePreview>

### Tilpassing av tittel-sporet

Man kan bruke `summary` for å sette tittel, men kan også angi det som et eget spor dersom det er nødvendig

<CodeExamplePreview>

```html
<nve-accordion>
  <div slot="summary" class="customheader" style="display: flex; gap: var(--spacing-small); align-items: center;">
    <div>Her er litt tekst</div>
    <div style="color: var(--brand-primary); font-size: 0.8em; font-weight: 400;">Annen tekst</div>
    <nve-icon name="home"></nve-icon>
  </div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion>
```

</CodeExamplePreview>
