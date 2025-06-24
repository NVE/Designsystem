---
layout: component
---

<CodeExamplePreview>

```html
<nve-switch></nve-switch>
```

</CodeExamplePreview>

## Eksempler

### Med ikoner

<CodeExamplePreview>

```html
<nve-switch>
  <nve-icon slot="officon" name="light_mode"></nve-icon>
  <nve-icon slot="onicon" name="dark_mode"></nve-icon>
</nve-switch>
```

</CodeExamplePreview>

Se også [nve-darkmode-switch](/components/nve-darkmode-switch)

### Label, vises bak bryter

<CodeExamplePreview>

```html
<nve-switch> Slå på </nve-switch>
```

</CodeExamplePreview>

### Bruk `disabled` for å deaktivere bryteren

<CodeExamplePreview>

```html
<nve-switch disabled> </nve-switch>
```

</CodeExamplePreview>

### Hent ut verdien

Du kan hente ut `checked`-verdien akkurat som med en vanlig html-checkbox, enten via elementet eller på en event

Dersom du har html:

```html
<nve-switch onchange="changehandler" />
```

Så kan du ha

```javascript
const checked = document.querySelector('nve-switch').checked;
// checked er nå true eller false

// På event:
function changehandler(event) {
  const checked = event.target.checked;
}
```

Du kan også bruke attributten `checked` på `nve-switch` for å sette verdien via lytting på change, tilsvarende som for en checkbox

### Egne farger for "på" og "av"

Ved hjelp av variabler så kan du sette egne farger for "på" og "av" på bryteren. Markøren (thumb) har motsatt farge av bakgrunnen dersom det ikke settes spesifikt
<CodeExamplePreview>

```html
<div style="--nve-switch-on-color: #FF0000; --nve-switch-off-color: #0000FF;">
  <nve-switch>Denne har kun satt on/off, så markør er motsatt</nve-switch>
</div>

<div style="--nve-switch-thumb-on-color: #FF0000; --nve-switch-thumb-off-color: #0000FF;">
  <nve-switch>Denne setter kun markørfarge, så bakgrunnen affekteres ikke</nve-switch>
</div>

<div
  style="--nve-switch-thumb-on-color: var(--feedback-background-emphasized-info); 
  --nve-switch-thumb-off-color: var(--feedback-background-subtle-error);
  --nve-switch-off-color: var(--interactive-primary-background-default); 
  --nve-switch-on-color: var(--interactive-secondary-background-default);"
>
  <nve-switch>Her setter vi alle fire fargene separat</nve-switch>
</div>
```

</CodeExamplePreview>
