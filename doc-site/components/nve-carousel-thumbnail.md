---
layout: component
---

Gå til [nve-carousel](./nve-carousel.html) for mer info om denne komponenten.

<CodeExamplePreview>

```html
<nve-carousel navigation loop id="thumbnail">
  <nve-carousel-item>
    <img src="/assets/transmisjonsnett.jpg" alt="Transmisjonsnett" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="/assets/nigardsbreen.jpg" alt="Nigardsbreen" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="/assets/tarhalsen_fyr.jpg" alt="Tarhalsen fyr" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="/assets/skogfjordvann.jpg" alt="Skogfjordvann" />
  </nve-carousel-item>
</nve-carousel>

<nve-carousel-thumbnail carouselId="thumbnail">
  <img src="/assets/transmisjonsnett.jpg" alt="Transmisjonsnett" />
  <img src="/assets/nigardsbreen.jpg" alt="Nigardsbreen" />
  <img src="/assets/tarhalsen_fyr.jpg" alt="Tarhalsen fyr" />
  <img src="/assets/skogfjordvann.jpg" alt="Skogfjordvann" />
</nve-carousel-thumbnail>

```

</CodeExamplePreview>

For å få `nve-carousel-thumbnail` til å fungere, må det legges på en `id` på bildekarusellen, slik komponentet vet hvilken karusell den skal lytte på. Denne `id`'en må være lik `carouselId` til `nve-carousel-thumbnail`.
