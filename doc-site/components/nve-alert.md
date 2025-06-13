---
layout: component
---

<CodeExamplePreview>

```html
<nve-alert open text="text"></nve-alert>
```

</CodeExamplePreview>

<nve-message-card label="Tips">
Bruk `open` for å vise en alert. Hvis ikke `open` er satt, vises den ikke.
</nve-message-card>

## Eksempler

### Variant

Bruk `variant` for å styre farger. `primary` er standard og trenger ikke spesifiseres.

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert open>
  <nve-icon slot="icon" name="info"></nve-icon>
  primary
</nve-alert>

<nve-alert variant="success" open>
  <nve-icon slot="icon" name="check_circle"></nve-icon>
  success
</nve-alert>

<nve-alert variant="warning" open>
  <nve-icon slot="icon" name="warning"></nve-icon>
  warning
</nve-alert>

<nve-alert variant="neutral" open>
  <nve-icon slot="icon" name="help"></nve-icon>
  neutral
</nve-alert>

<nve-alert variant="danger" open>
  <nve-icon slot="icon" name="error"></nve-icon>
  danger
</nve-alert>
```

</CodeExamplePreview>

### Left stroke

Bruk `leftStroke` for å vise en fet strek på venstre side.

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert variant="danger" text="Left stroke" leftStroke open> </nve-alert>
```

</CodeExamplePreview>

### Høyere metning

Bruk `saturation="emphasized"` for å få litt mørkere bakgrunnsfarge.

<CodeExamplePreview arrangeComponentsVertically>

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem">
  <nve-alert variant="warning" text="Emphasized" saturation="emphasized" open>
    <nve-icon slot="icon" name="info"></nve-icon>
  </nve-alert>
  <nve-alert variant="warning" text="Ikke emphasized" open>
    <nve-icon slot="icon" name="info"></nve-icon>
  </nve-alert>
  <nve-alert variant="success" text="Emphasized" saturation="emphasized" open>
    <nve-icon slot="icon" name="info"></nve-icon>
  </nve-alert>
  <nve-alert variant="success" text="Ikke emphasized" open>
    <nve-icon slot="icon" name="info"></nve-icon>
  </nve-alert>
  <nve-alert variant="neutral" text="Emphasized" saturation="emphasized" open>
    <nve-icon slot="icon" name="info"></nve-icon>
  </nve-alert>
  <nve-alert variant="neutral" text="Ikke emphasized" open>
    <nve-icon slot="icon" name="info"></nve-icon>
  </nve-alert>
  <nve-alert variant="danger" text="Emphasized" saturation="emphasized" open>
    <nve-icon slot="icon" name="info"></nve-icon>
  </nve-alert>
  <nve-alert variant="danger" text="Ikke emphasized" open>
    <nve-icon slot="icon" name="info"></nve-icon>
  </nve-alert>
  <nve-alert text="Emphasized" saturation="emphasized" open>
    <nve-icon slot="icon" name="info"></nve-icon>
  </nve-alert>
  <nve-alert text="Ikke emphasized" open>
    <nve-icon slot="icon" name="info"></nve-icon>
  </nve-alert>
</div>
```

</CodeExamplePreview>

### Overskrift og tekst

Du kan bruke `label` for å lage en overskrift. Resten av teksten kan enten ligge i `text` eller inni elementet.

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert text="og tekst" label="Tittel" open></nve-alert>

<nve-alert label="Kun tittel" open></nve-alert>

<nve-alert text="kun tekst" open></nve-alert>

<nve-alert label="Tittel" text="og tekst som ikke vises" open>
  Dersom en alert har både text-egenskap og tekst i selve elementet så skjuler vi teksten i egenskapen
</nve-alert>
```

</CodeExamplePreview>

### Closable

Bruk `closable` for å vise en lukke-knapp på høyre side, som skjuler komponenten.

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert open closable class="alert-closeable"> Trykk på krysset for å lukke denne </nve-alert>

<script>
  // Denne snutten vil vise alert igjen etter 2 sekunder, slik at du kan prøve å lukke den flere ganger
  const alert = document.querySelector('.alert-closeable');
  alert.addEventListener('sl-after-hide', async () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

</CodeExamplePreview>

### Ikoner

Ikoner legges i sporet `icon`.

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert open>
  <nve-icon slot="icon" name="check_circle"></nve-icon>
  med ikon
</nve-alert>
<nve-alert open> uten ikon </nve-alert>
```

</CodeExamplePreview>

### Ikoner

Ikoner legges i sporet `icon`.

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert open text="Hello">
  <div><nve-button /></div>
</nve-alert>
```

</CodeExamplePreview>
