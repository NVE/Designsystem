---
layout: component
---

Gå til [nve-carousel](./nve-carousel.html) for mer info om denne komponenten.

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

### Bildetekst

Bruk `description` på `nve-csarousel-item`for å legge til en bildetekst til hvert bilde om ønskelig. Det er mulig å bare ha bildetekst på noen av bildene.

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
