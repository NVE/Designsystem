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

Bruk summary-ikon og collapse-ikon for å endre henholdsvis utvidelses- og skjulikonene. For å deaktivere animasjonen, overstyr rotate-egenskapen på summary-iko som vist nedenfor.
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
