---
layout: component
---

<CodeExamplePreview>

```html
<nve-icon name="Favorite"></nve-icon>
```

</CodeExamplePreview>

Her er [oversikt over ikoner i Material Symbols](https://fonts.google.com/icons).

## Eksempler

### Størrelse

<CodeExamplePreview>

```html
<nve-icon name="Rocket" style="font-size: 1.25rem;"></nve-icon> liten (20px høyde)
<nve-icon name="Rocket" style="font-size: 1.5rem;"></nve-icon> stor (24px høyde)
```

</CodeExamplePreview>

- TODO: Burde vi sette standard størrelse automatisk?
- TODO: Burde vi ha en egen property for størrelse?
- TODO: Hvorfor bruker Figma 20 og 24px bredde når Google bruker 16px?

### Skarpe eller mye kanter

Bruk `library="Outlined"` for myke kanter. `Sharp` er standard. `Outlined` skal kun brukes hvis symbolet blir lettere å lese.

<CodeExamplePreview>

```html
<nve-icon name="Home"></nve-icon> skarpe <nve-icon name="Home" library="Outlined"></nve-icon> myke
```

</CodeExamplePreview>
