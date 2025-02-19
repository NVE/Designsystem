---
layout: component
---

Gå til [nve-carousel](./nve-carousel.html) for mer info om denne komponenten.

<CodeExamplePreview>

```html
<nve-carousel pagination navigation loop>
  <nve-carousel-item>
    <img src="/assets/start-page-image.jpg" alt="Bilde av naturen i dagslys." />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="/assets/dark-mode-start-image.avif" alt="Bilde av naturen på natten." />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="/assets/mønstre.png" alt="Mønstre" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Bildetekst

Bruk `description` på `nve-carousel-item`for å legge til en bildetekst til hvert bilde om ønskelig. Det er mulig å bare ha bildetekst på noen av bildene.

<CodeExamplePreview>

```html
<nve-carousel navigation pagination loop>
  <nve-carousel-item description="Foto: Ola Nordmann.">
    <img src="/assets/start-page-image.jpg" alt="Bilde av naturen i dagslys." />
  </nve-carousel-item>
  <nve-carousel-item description="Fjellrekken på natten.">
    <img src="/assets/dark-mode-start-image.avif" alt="Bilde av naturen på natten." />
  </nve-carousel-item>
  <nve-carousel-item description="Bildekollage av mønstre.">
    <img src="/assets/mønstre.png" alt="Mønstre" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>
