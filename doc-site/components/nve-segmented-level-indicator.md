---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-segmented-level-indicator
  value="3"
  label="Snøskred kan bli store nok til å begrave en bil"
></nve-segmented-level-indicator>
```

</CodeExamplePreview>

## Eksempler

### Nivå

Bruk `value` for å sette nivå. 0 er standard.

<CodeExamplePreview>

```html
<nve-segmented-level-indicator></nve-segmented-level-indicator>
<nve-segmented-level-indicator value="1"></nve-segmented-level-indicator>
<nve-segmented-level-indicator value="2"></nve-segmented-level-indicator>
```

</CodeExamplePreview>

`value` må være heltall over eller lik 0 for å bli tatt hensyn til. Andre verdier gir standard-verdien i stedet.

<CodeExamplePreview>

```html
<nve-segmented-level-indicator value="3.14"></nve-segmented-level-indicator>
<nve-segmented-level-indicator value="-1"></nve-segmented-level-indicator>
<nve-segmented-level-indicator value=""></nve-segmented-level-indicator>
<nve-segmented-level-indicator value="fullt"></nve-segmented-level-indicator>
```

</CodeExamplePreview>

### Skala

Bruk `scale` for bestemme hvor mange segmenter vi skal ha. 5 er standard.

<CodeExamplePreview>

```html
<nve-segmented-level-indicator scale="2"></nve-segmented-level-indicator>
<nve-segmented-level-indicator></nve-segmented-level-indicator>
```

</CodeExamplePreview>

`scale` må være heltall over 0 for å bli tatt hensyn til. Andre verdier gir standard-verdien i stedet.

<CodeExamplePreview>

```html
<nve-segmented-level-indicator scale="0"></nve-segmented-level-indicator>
<nve-segmented-level-indicator scale="3.14"></nve-segmented-level-indicator>
<nve-segmented-level-indicator scale="-1"></nve-segmented-level-indicator>
<nve-segmented-level-indicator scale=""></nve-segmented-level-indicator>
<nve-segmented-level-indicator scale="funker ikke"></nve-segmented-level-indicator>
```

</CodeExamplePreview>

### Tekst

Bruk `label` for å vise en tekst under skalaen.

<CodeExamplePreview>

```html
<nve-segmented-level-indicator label="Ingenting"></nve-segmented-level-indicator>
```

</CodeExamplePreview>

### Universell utforming

`aria-label` viser enten innholdet i `label` eller "verdi av skala" (f.eks. "3 av 5"), om vi ikke har `label`.
Du kan også sette din egen `aria-label`

<CodeExamplePreview>

```html
<nve-segmented-level-indicator value="2"></nve-segmented-level-indicator>
<nve-segmented-level-indicator label="Ingenting"></nve-segmented-level-indicator>
<nve-segmented-level-indicator value="4" label="Ganske mye"></nve-segmented-level-indicator>
<nve-segmented-level-indicator aria-label="Nada" label="Egen aria-label"></nve-segmented-level-indicator>
```

</CodeExamplePreview>

### Språk

Bruk `lang` for å angi språk for standard `aria-label`. Kun norsk og engelsk støttes, og norsk er standard. Sett `lang` til noe som starter på 'en' for å få engelsk språk.
<CodeExamplePreview>

```html
<nve-segmented-level-indicator></nve-segmented-level-indicator>
Norsk, gir aria-label "0 av 5"

<nve-segmented-level-indicator lang="en"></nve-segmented-level-indicator>
Engelsk, gir aria-label "0 of 5"

<nve-segmented-level-indicator lang="en-GB"></nve-segmented-level-indicator>
Også engelsk
```

</CodeExamplePreview>
