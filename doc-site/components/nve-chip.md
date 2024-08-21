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

</nve-chip>
```

</CodeExamplePreview>

Du kan også bruke attributten "dot" for å legge inn en prikk istedenfor ikon

<CodeExamplePreview>

```html
<nve-chip size="medium" dot> Se her! </nve-chip>
```

</CodeExamplePreview>

### Variant og saturation

Disse attributtene brukes for å sette farge på chip

- Variant kan være neutral, info, success, warning, error; neutral er standard
- Saturation kan være emphasized, subtle, default; default er standard

<CodeExamplePreview>

```html
<div style="display: grid; align-items: center; gap: 16px; grid-template-columns: repeat(3, max-content)">
  <nve-chip saturation="emphasized">
    Neutral, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="default" variant="neutral">
    Neutral, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="subtle">
    Neutral, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip saturation="emphasized" variant="info">
    Info, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="default" variant="info">
    Info, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="subtle" variant="info">
    Info, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip saturation="emphasized" variant="success">
    Success, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="default" variant="success">
    Success, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="subtle" variant="success">
    Success, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip saturation="emphasized" variant="warning">
    Warning, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="default" variant="warning">
    Warning, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="subtle" variant="warning">
    Warning, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip saturation="emphasized" variant="error">
    Error, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="default" variant="error">
    Error, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="subtle" variant="error">
    Error, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
</div>
```

</CodeExamplePreview>

### Chip med lukk-knapp

Attributten closeable brukes for å si at chip skal ha en "Lukk"-knapp

- Ved klikk så sendes event "nve-close"
- Send også med "close-aria-label" dersom aria-label ikke skal være "Lukk"

<CodeExamplePreview>

```html
<!-- Eksempel-script som legger på event-listener på knappen -->
<script>
  const closeable = document.querySelectorAll('nve-chip[closeable]');
  closeable.forEach((chip) =>
    chip.addEventListener('nve-close', (e) => {
      const variant = e.target.variant;
      const saturation = e.target.saturation;
      alert(`Klikket ${variant} ${saturation} knapp`);
    })
  );
</script>

<div style="display: grid; align-items: center; gap: 16px; grid-template-columns: repeat(3, max-content)">
  <nve-chip saturation="emphasized" closeable>
    Neutral, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="default" variant="neutral" closeable>
    Neutral, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="subtle" closeable>
    Neutral, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip saturation="emphasized" variant="info" closeable>
    Info, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="default" variant="info" closeable>
    Info, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="subtle" variant="info" closeable>
    Info, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip saturation="emphasized" variant="success" closeable>
    Success, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="default" variant="success" closeable>
    Success, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="subtle" variant="success" closeable>
    Success, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip saturation="emphasized" variant="warning" closeable>
    Warning, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="default" variant="warning" closeable>
    Warning, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="subtle" variant="warning" closeable>
    Warning, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>

  <nve-chip saturation="emphasized" variant="error" closeable close-aria-label="Custom label satt">
    Error, emphasized
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="default" variant="error" closeable>
    Error, default
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
  <nve-chip saturation="subtle" variant="error" closeable>
    Error, subtle
    <nve-icon slot="prefix" library="Sharp" name="error" />
  </nve-chip>
</div>
```

</CodeExamplePreview>
