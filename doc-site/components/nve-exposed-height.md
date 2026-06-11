---
layout: component
outline: [2, 3]
---

# Utsatt høyde

Viser utsatt høyde for et skredproblem. Komponenten bruker et fjellsymbol med piler og høydetekst for å indikere hvilke høyder som er utsatt.

<CodeExamplePreview>

```html
<nve-exposed-height height1="1000" variant="1"></nve-exposed-height>
```

</CodeExamplePreview>

Komponenten er skalerbar og standard høyde er 90px. Du kan endre størrelsen med CSS-variabelen `--exposed-height-size`.

## Eksempler

### Varianter

Bruk `variant` for å angi om skredproblemet gjelder:

1. over en viss høyde
2. under en viss høyde
3. både over og under visse høyder
4. mellom to høyder

Variant 1 er standard.
For variant 1 og 2 må du sende inn `height1`.
For variant 3 og 4 må du sende inn både `height1` og `height2`.

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

<CodeExamplePreview containerGridTemplateColumns="repeat(2, auto)">

```html
<nve-exposed-height></nve-exposed-height> utsatt høyde blir over 0m om variant og height1 ikke angis
<nve-exposed-height variant="2" height2="1000"></nve-exposed-height> variant 2 mangler height1
<nve-exposed-height variant="3" height1="1000"></nve-exposed-height> variant 3 må ha både height 1 og height2
<nve-exposed-height variant="4" height1="1000"></nve-exposed-height> variant 4 må ha både height 1 og height2
```

</CodeExamplePreview>

### Størrelse

Endre høyden med CSS-variabelen `--exposed-height-size`. Standard høyde er 90px.

<CodeExamplePreview>

```html
<nve-exposed-height variant="1" height1="1000" style="--exposed-height-size: 120px;"></nve-exposed-height> 120px høyde
<nve-exposed-height variant="1" height1="1000"></nve-exposed-height>90px høyde
```

</CodeExamplePreview>

### Språk

Bruk `lang="en"` for å vise aria-label på engelsk. Norsk er standard.

<CodeExamplePreview containerGridTemplateColumns="repeat(5, auto)">

```html
Engelsk:
<nve-exposed-height lang="en" variant="1" height1="1000"></nve-exposed-height>
<nve-exposed-height lang="en" variant="2" height1="1000"></nve-exposed-height>
<nve-exposed-height lang="en" variant="3" height1="800" height2="1200"></nve-exposed-height>
<nve-exposed-height lang="en" variant="4" height1="800" height2="1200"></nve-exposed-height>

Norsk:
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
</nve-aspect-rose>
```

</CodeExamplePreview>
