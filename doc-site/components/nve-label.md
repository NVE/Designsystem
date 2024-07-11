---
layout: component
---

<CodeExamplePreview>

```html
<nve-label value="Ledetekst"></nve-label>
```

</CodeExamplePreview>

## Eksempler

### Størrelse

Bruk `size` for å sette størrelse. `small` er standard.

<CodeExamplePreview>

```html
<nve-label size="x-small" value="x-small"></nve-label>
<nve-label value="small"></nve-label>
<nve-label size="medium" value="medium"></nve-label>
<nve-label size="large" value="large"></nve-label>
```

</CodeExamplePreview>

### Info-ikon og verktøyhint

Bruk `tooltip` for å vise et info-ikon etter ledeteksten. Hold muspeker over ledetekst eller ikon for å vise hjelpeteksten.
Du kan formatere hjelpeteksten i html ved å legge den i sporet `tooltip`.

<CodeExamplePreview>

```html
<nve-label value="Svev over ikonet" tooltip="Hjelpetekst"></nve-label>
<nve-label value="Svev over ikonet for å se hjelpetekst i HTML">
  <div slot="tooltip">Hjelpetekst i <strong>HTML</strong></div>
</nve-label>
<nve-label value="Med svart ikon" iconColor="black" tooltip="Hjelpetekst"></nve-label>
<nve-label value="Med ikon på venstre side" iconLeft tooltip="Hjelpetekst"></nve-label>
```

</CodeExamplePreview>

### Innhold etter ledetekst

Bruk sporet `suffix` for å vise noe etter ledeteksten.

<CodeExamplePreview>

```html
<nve-label value="Laster ned data">
  <nve-spinner slot="suffix"></nve-spinner>
</nve-label>
```

</CodeExamplePreview>
