---
layout: component
---

<CodeExamplePreview>

```html
<nve-chip>Se her!</nve-chip>
```

</CodeExamplePreview>

## Eksempler

### Med ekstra tekst

Bruk attributten "extra-text" for å legge til ekstra tekst. Denne er slankere.
Du kan også bruket sporet "extra"

<CodeExamplePreview>

```html
<nve-chip extra-text="Ekstra tekst"> Se her! </nve-chip>
<nve-chip>
  <span>Se her!</span>
  <span slot="extra" style="color: red;">Ekstra tekst</span>
</nve-chip>
```

</CodeExamplePreview>

### Størrelse

Attributten "size" brukes for å sette størrelse på chip. Velg mellom small og medium (medium er default)

<CodeExamplePreview>

```html
<nve-chip size="medium"> Se her! </nve-chip> <nve-chip size="small"> Se her! </nve-chip>
```

</CodeExamplePreview>

### Ikon

Sporet "prefix" kan brukes for å legge inn et ikon foran teksten

<CodeExamplePreview>

```html
<nve-chip size="medium">
  Se her!
  <nve-icon slot="prefix" library="Sharp" name="error" />
</nve-chip>
<nve-chip size="medium">
  Se her!
  <nve-icon
    slot="prefix"
    library="Sharp"
    name="circle"
    style="font-variation-settings:
    'FILL' 1,
    'GRAD' 1;"
  />
</nve-chip>
```

</CodeExamplePreview>

### Variant og Emphasis

Disse attributtene brukes for å sette farge på chip

- Variant kan være neutral, info, success, warning, error; neutral er standard
- Emphasis kan være emphasized, subtle, default; default er standard

<CodeExamplePreview>

```html
<div style="display: grid; align-items: center; gap: 16px; grid-template-columns: repeat(3, max-content)">
  <nve-chip emphasis="emphasized">
    Neutral, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="default" variant="neutral">
    Neutral, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="subtle">
    Neutral, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip emphasis="emphasized" variant="info">
    Info, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="default" variant="info">
    Info, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="subtle" variant="info">
    Info, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip emphasis="emphasized" variant="success">
    Success, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="default" variant="success">
    Success, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="subtle" variant="success">
    Success, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip emphasis="emphasized" variant="warning">
    Warning, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="default" variant="warning">
    Warning, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="subtle" variant="warning">
    Warning, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip emphasis="emphasized" variant="error">
    Error, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="default" variant="error">
    Error, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="subtle" variant="error">
    Error, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
</div>
```

</CodeExamplePreview>

### Chip med lukk-knapp

Attributten has-close brukes for å si at chip skal ha en "Lukk"-knapp

- Ved klikk så sendes event "nve-close"
- Send også med "close-aria-label" dersom aria-label ikke skal være "Lukk"

<CodeExamplePreview>

```html
<!-- Eksempel-script som legger på event-listener på knappen -->
<script>
  const closeable = document.querySelectorAll('nve-chip[has-close]');
  closeable.forEach((chip) =>
    chip.addEventListener('nve-close', (e) => {
      const variant = e.target.variant;
      const emphasis = e.target.emphasis;
      alert(`Klikket ${variant} ${emphasis} knapp`);
    })
  );
</script>

<div style="display: grid; align-items: center; gap: 16px; grid-template-columns: repeat(3, max-content)">
  <nve-chip emphasis="emphasized" has-close onnve-close="alert('click')">
    Neutral, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="default" variant="neutral" has-close>
    Neutral, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="subtle" has-close>
    Neutral, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip emphasis="emphasized" variant="info" has-close>
    Info, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="default" variant="info" has-close>
    Info, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="subtle" variant="info" has-close>
    Info, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip emphasis="emphasized" variant="success" has-close>
    Success, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="default" variant="success" has-close>
    Success, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="subtle" variant="success" has-close>
    Success, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip emphasis="emphasized" variant="warning" has-close>
    Warning, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="default" variant="warning" has-close>
    Warning, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="subtle" variant="warning" has-close>
    Warning, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip emphasis="emphasized" variant="error" has-close close-aria-label="Custom label satt">
    Error, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="default" variant="error" has-close>
    Error, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip emphasis="subtle" variant="error" has-close>
    Error, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
</div>
```

</CodeExamplePreview>
