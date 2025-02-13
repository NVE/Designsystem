---
layout: component
---

Se også [nve-carousel-item](./nve-carousel-item.html) som brukes inne i `nve-carousel`.

<CodeExamplePreview>

```html
<nve-carousel pagination navigation loop>
  <nve-carousel-item>
    <img src="../assets/images/start-page-image.jpg" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/dark-mode-start-image.avif" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/mønstre.png" alt="bilde" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

TODO: Skriv evt. generelle tips som ikke passer å ha i @JsDoc. Pass på at det ikke blir dobbelt opp med det du har skrevet i @JsDoc.

## Eksempler

### Navigering

Bruk `navigation` for å legge på navigerings-knapper på hver side av bildet i karusellen.
<CodeExamplePreview>

```html
<nve-carousel navigation>
  <nve-carousel-item>
    <img src="../assets/images/start-page-image.jpg" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/dark-mode-start-image.avif" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/mønstre.png" alt="bilde" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Paginering

Bruk `pagination` for å legge på paginerings-knapper under bildekarusellen.

<CodeExamplePreview>

```html
<nve-carousel pagination>
  <nve-carousel-item>
    <img src="../assets/images/start-page-image.jpg" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/dark-mode-start-image.avif" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/mønstre.png" alt="bilde" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Looping

Bruk `loop` for å legge på paginerings-knapper under bildekarusellen.

<CodeExamplePreview>

```html
<nve-carousel navigation pagination loop>
  <nve-carousel-item>
    <img src="../assets/images/start-page-image.jpg" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/dark-mode-start-image.avif" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/mønstre.png" alt="bilde" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Bildetekst

Bruk `description` på `nve-csarousel-item`for å legge til en bildetekst til hvert bilde om ønskelig.

<CodeExamplePreview>

```html
<nve-carousel navigation pagination loop>
  <nve-carousel-item description="Foto: Ola Nordmann.">
    <img src="../assets/images/start-page-image.jpg" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item description="Fjellrekken på natten.">
    <img src="../assets/images/dark-mode-start-image.avif" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item description="Bildekollage."
    >.
    <img src="../assets/images/mønstre.png" alt="bilde" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Autoplay

Bruk `autoplay` til å rotere mellom bildene i karusellen automatisk.

<CodeExamplePreview>

```html
<nve-carousel pagination autoplay>
  <nve-carousel-item>
    <img src="../assets/images/start-page-image.jpg" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/dark-mode-start-image.avif" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/mønstre.png" alt="bilde" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Flere slides per view

Bruk `slides-per-page` for å vise flere bilder per slide i karusellen. Du kan også bruke `slides-per-move` attributtet for å gå frem mer enn ett lysbilde om gangen, hvis ønskelig.

<CodeExamplePreview>

```html
<nve-carousel pagination slides-per-page="2" slides-per-move="2">
  <nve-carousel-item>
    <img src="../assets/images/start-page-image.jpg" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/dark-mode-start-image.avif" alt="bilde" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="../assets/images/mønstre.png" alt="bilde" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Vertikal scrolling

Bildekarusellen støtter ikke vertikal scrolling per nå.
