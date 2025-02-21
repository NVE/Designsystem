---
layout: component
---

Gå til [nve-carousel](./nve-carousel.html) for mer info om denne komponenten.

<CodeExamplePreview>

```html
<nve-carousel navigation loop id="thumbnail">
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

<nve-carousel-thumbnail carouselId="thumbnail">
  <img src="/assets/start-page-image.jpg" alt="Bilde av naturen i dagslys." />
  <img src="/assets/dark-mode-start-image.avif" alt="Bilde av naturen på natten." />
  <img src="/assets/mønstre.png" alt="Mønstre" />
</nve-carousel-thumbnail>

Miniatybilder som forhåndsviser bildene i karusellen.
```

</CodeExamplePreview>

For å få `nve-carousel-thumbnail` til å fungere, må det legges på en `id` på bildekarusellen, slik komponentet vet hvilken karusell den skal lytte på. Denne `id`'en må være lik `carouselId` til `nve-carousel-thumbnail`.
