---
layout: component
---

<CodeExamplePreview>

```html
<nve-switch></nve-switch>
```

</CodeExamplePreview>

## Eksempler

### Med ikoner:

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
<nve-switch>
  <div>Slå på</div>
</nve-switch>
```

</CodeExamplePreview>

### Bruk `disabled` for å deaktivere bryteren:

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
