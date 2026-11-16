---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-avalanche-problem-risk-indicator
  triggerSensitivityId="3"
  propagationId="2"
  destructiveSizeId="3"
></nve-avalanche-problem-risk-indicator>
```

</CodeExamplePreview>

Indikatorene har forskjellig skala. Du styrer hvilken indikator du vil vise med å sette en eller flere av dem: `triggerSensitivityId`, `propagationId` og `destructiveSizeId`.
Slik ser det ut når du bare viser en enkelt indikator:

<CodeExamplePreview>

```html
<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="4"></nve-avalanche-problem-risk-indicator>
```

</CodeExamplePreview>

## Eksempler

Legg eksempler på funksjonalitet her. Hvert tema skal ha egen overskrift på nivå 3.

### Vis eller skjul beskrivelse

Sett `expanded` til "true" for å vise beskrivelsen med en gang.

<CodeExamplePreview>

```html
<nve-avalanche-problem-risk-indicator
  expanded
  triggerSensitivityId="3"
  propagationId="2"
  destructiveSizeId="3"
></nve-avalanche-problem-risk-indicator>
```

</CodeExamplePreview>

### Språk

Sett `lang` til noe som starter med "en" for å vise engelske tekster.

<CodeExamplePreview>

```html
<nve-avalanche-problem-risk-indicator
  lang="en"
  triggerSensitivityId="3"
  propagationId="2"
  destructiveSizeId="3"
></nve-avalanche-problem-risk-indicator>
```

</CodeExamplePreview>

<CodeExamplePreview>

```html
<nve-avalanche-problem-risk-indicator
  lang="en-GB"
  triggerSensitivityId="1"
  propagationId="1"
  destructiveSizeId="1"
></nve-avalanche-problem-risk-indicator>
```

</CodeExamplePreview>

### Utløsbarhet

`triggerSensitivityId` angir hvor lett det er å løse ut skred.
Legg merke til at `triggerSensitivityId` 4 og 5 har samme nivå (4) på skalaen.
Her er alle varianter:

<CodeExamplePreview containerGridTemplateColumns="repeat(2, auto)">

```html
<div>Norsk</div>
<div>Engelsk</div>
<nve-avalanche-problem-risk-indicator expanded triggerSensitivityId="1"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator
  expanded
  triggerSensitivityId="1"
  lang="en"
></nve-avalanche-problem-risk-indicator>

<nve-avalanche-problem-risk-indicator expanded triggerSensitivityId="2"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator
  expanded
  triggerSensitivityId="2"
  lang="en"
></nve-avalanche-problem-risk-indicator>

<nve-avalanche-problem-risk-indicator expanded triggerSensitivityId="3"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator
  expanded
  triggerSensitivityId="3"
  lang="en"
></nve-avalanche-problem-risk-indicator>

<nve-avalanche-problem-risk-indicator expanded triggerSensitivityId="4"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator
  expanded
  triggerSensitivityId="4"
  lang="en"
></nve-avalanche-problem-risk-indicator>

<nve-avalanche-problem-risk-indicator expanded triggerSensitivityId="5"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator
  expanded
  triggerSensitivityId="5"
  lang="en"
></nve-avalanche-problem-risk-indicator>
```

</CodeExamplePreview>

### Utbredelse

`propagationId` angir hvor mange steder i terrenget skredproblemet finnes.
Her er alle varianter:

<CodeExamplePreview containerGridTemplateColumns="repeat(2, auto)">

```html
<div>Norsk</div>
<div>Engelsk</div>
<nve-avalanche-problem-risk-indicator expanded propagationId="1"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator expanded propagationId="1" lang="en"></nve-avalanche-problem-risk-indicator>

<nve-avalanche-problem-risk-indicator expanded propagationId="2"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator expanded propagationId="2" lang="en"></nve-avalanche-problem-risk-indicator>

<nve-avalanche-problem-risk-indicator expanded propagationId="3"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator expanded propagationId="3" lang="en"></nve-avalanche-problem-risk-indicator>
```

</CodeExamplePreview>

### Størrelse

`destructiveSizeId` angir forventet størrelse på skred.
Her er alle varianter:

<CodeExamplePreview containerGridTemplateColumns="repeat(2, auto)">

```html
<div>Norsk</div>
<div>Engelsk</div>
<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="1"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="1" lang="en"></nve-avalanche-problem-risk-indicator>

<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="2"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="2" lang="en"></nve-avalanche-problem-risk-indicator>

<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="3"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="3" lang="en"></nve-avalanche-problem-risk-indicator>

<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="4"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="4" lang="en"></nve-avalanche-problem-risk-indicator>

<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="5"></nve-avalanche-problem-risk-indicator>
<nve-avalanche-problem-risk-indicator expanded destructiveSizeId="5" lang="en"></nve-avalanche-problem-risk-indicator>
```

</CodeExamplePreview>

### Bruk ID'er som finnes

Hvis du bruker ID'er som ikke finnes, vises ingenting.

<CodeExamplePreview>

```html
<nve-avalanche-problem-risk-indicator
  triggerSensitivityId="42"
  propagationId="42"
  destructiveSizeId="42"
></nve-avalanche-problem-risk-indicator>
```

</CodeExamplePreview>
