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

Legg eksempler på funksjonalitet her. Hvert tema skal ha egen overskrift på nivå 3.

### Utsatte himmelretninger

Bruk `value` for å sette hvilke himmelretninger som er eksponert.
<CodeExamplePreview>

```html
<nve-aspect-rose></nve-aspect-rose> Ingen <nve-aspect-rose value="10000000"> </nve-aspect-rose> Kun nord
<nve-aspect-rose value="001111000"></nve-aspect-rose> øst, sør-øst, sør og sør-vest
<nve-aspect-rose value="111111111"></nve-aspect-rose> Alle
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
