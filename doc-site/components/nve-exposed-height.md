---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-exposed-height variant="1" height1="1000"></nve-exposed-height>
```

</CodeExamplePreview>

## Eksempler på bruk

### Varianter

Bruk `variant` for å angi om skredproblemet gjelder:

1. over en viss høyde
2. under en viss høyde
3. både over og under visse høyder
4. mellom to høyder

Variant 1 er standard.
I tillegg må du angi høyde:

- For variant 1 og 2 må du sende inn `height1`.
- For variant 3 og 4 må du sende inn både `height1` og `height2`.
  Komponenten finner selv ut om `height1` eller `height2` er høyest.

<CodeExamplePreview containerGridTemplateColumns="repeat(4, auto)">

```html
<nve-exposed-height variant="1" height1="1000"></nve-exposed-height>
<nve-exposed-height variant="2" height1="1000"></nve-exposed-height>
<nve-exposed-height variant="3" height1="800" height2="1200"></nve-exposed-height>
<nve-exposed-height variant="4" height1="800" height2="1200"></nve-exposed-height>
```

</CodeExamplePreview>

#### Feil bruk av variant og høyde

Her er noen eksempler på feil bruk:

<CodeExamplePreview containerGridTemplateColumns="repeat(3, auto)">

```html
<nve-exposed-height></nve-exposed-height>
<nve-exposed-height variant="2" height2="1000"></nve-exposed-height>
<p>variant 1 og 2 mangler height1</p>
<nve-exposed-height variant="3" height1="1000"></nve-exposed-height>
<nve-exposed-height variant="4" height1="1000"></nve-exposed-height>
<p>variant 3 og 4 må ha både height 1 og height2</p>
```

</CodeExamplePreview>

### Størrelse

Endre bredden med CSS-variabelen `--exposed-height-width`. Standard bredde er 150px.

<CodeExamplePreview>

```html
<nve-exposed-height variant="1" height1="1000" style="--exposed-height-width: 100px;"></nve-exposed-height>
<nve-exposed-height variant="1" height1="1000"></nve-exposed-height>
<nve-exposed-height variant="1" height1="1000" style="--exposed-height-width: 200px;"></nve-exposed-height>
```

</CodeExamplePreview>

### Språk

Bruk `lang="en"` for å vise aria-label på engelsk. Norsk er standard.

<CodeExamplePreview containerGridTemplateColumns="repeat(5, auto)">

```html
en:
<nve-exposed-height lang="en" variant="1" height1="1000"></nve-exposed-height>
<nve-exposed-height lang="en" variant="2" height1="1000"></nve-exposed-height>
<nve-exposed-height lang="en" variant="3" height1="800" height2="1200"></nve-exposed-height>
<nve-exposed-height lang="en" variant="4" height1="800" height2="1200"></nve-exposed-height>

no:
<nve-exposed-height variant="1" height1="1000"></nve-exposed-height>
<nve-exposed-height variant="2" height1="1000"></nve-exposed-height>
<nve-exposed-height variant="3" height1="800" height2="1200"></nve-exposed-height>
<nve-exposed-height variant="4" height1="800" height2="1200"></nve-exposed-height>
```

</CodeExamplePreview>

### Farger

Bruk css-variablene `--exposed-height-affected-color` og `--exposed-height-unaffected-color` for å overstyre fargene.

<CodeExamplePreview>

```html
<nve-exposed-height style="--exposed-height-affected-color: orange;--exposed-height-unaffected-color: lightgreen" variant="1" height1="1000" >
</nve-exposed-height
```

</CodeExamplePreview>
