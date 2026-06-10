---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-aspect-rose value="11000001"></nve-aspect-rose>
```

</CodeExamplePreview>

## Eksempler

### Utsatte himmelretninger

Bruk `value` for å sette hvilke himmelretninger som er utsatt (farlige).
<CodeExamplePreview>

```html
<nve-aspect-rose></nve-aspect-rose> Ingen <nve-aspect-rose value="10000000"> </nve-aspect-rose> Kun nord
<nve-aspect-rose value="00111100"></nve-aspect-rose> øst, sør-øst, sør og sør-vest
<nve-aspect-rose value="11111111"></nve-aspect-rose> Alle <nve-aspect-rose value="1111111"></nve-aspect-rose> Verdien
blir ignorert hvis vi ikke har eksakt 8 sifre
```

</CodeExamplePreview>

### Størrelse

Bruk css-variabelen `--aspect-rose-size` for å endre bredde og høyde. 90px er standard.

<CodeExamplePreview>

```html
<nve-aspect-rose style="--aspect-rose-size: 60px" value="00111110"></nve-aspect-rose> 60px
<nve-aspect-rose value="00111110"></nve-aspect-rose> 90px (standard)
<nve-aspect-rose style="--aspect-rose-size: 120px" value="00111110"></nve-aspect-rose> 120px
```

</CodeExamplePreview>

### Språk

Bruk `lang` for å angi språk for kompassretningene. `no` (norsk) er standard. Kun norsk og engelsk støttes.
<CodeExamplePreview>

```html
<nve-aspect-rose value="00111110"></nve-aspect-rose> Norsk
<nve-aspect-rose lang="en" value="00111110"></nve-aspect-rose> Engelsk
```

</CodeExamplePreview>

### Aria-label og svg-title

Bruk `label` for å overstyre standard-tekstene for aria-label og svg title.

<CodeExamplePreview>

```html
Hold muspeker over for å se label.<br />
<nve-aspect-rose value="00111110"></nve-aspect-rose>Med standard norsk tekst
<nve-aspect-rose lang="en" value="00111110"></nve-aspect-rose>Med standard engelsk tekst
<nve-aspect-rose label="merkelapp" value="00111110"></nve-aspect-rose>Overstyrt tekst
```

</CodeExamplePreview>

### Farger

Bruk css-variablene`--aspect-rose-outline-color`, `--aspect-rose-affected-color`og`--aspect-rose-unaffected-color` for å overstyre fargene.

<CodeExamplePreview>

```html
<nve-aspect-rose
  style="--aspect-rose-outline-color: green; --aspect-rose-affected-color: black;--aspect-rose-unaffected-color: white"
  value="00111110"
></nve-aspect-rose>
```

</CodeExamplePreview>
