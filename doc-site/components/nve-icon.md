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

For å endre størrelsen, sett font-size property på ikonet.
Du må bruke følgende font-size størrelse nedenfor:

- Liten: 16px
- Medium: 20px
- Stor: 24px

Standard er Liten størrelse 16px.
<CodeExamplePreview>

```html
<span style="display:flex; flex-direction:row;  gap:10px;"><nve-icon name="Rocket"></nve-icon>Standard</span>

<span style="display:flex; flex-direction:row; gap:10px;"
  ><nve-icon name="Rocket" style="font-size: 16px;"></nve-icon>Liten</span
>

<span style="display:flex; flex-direction:row; gap:10px;"
  ><nve-icon name="Rocket" style="font-size: 20px;"></nve-icon>Medium</span
>
<span style="display:flex; flex-direction:row; gap:10px;"
  ><nve-icon name="Rocket" style="font-size: 24px;">Stor</nve-icon>Stor</span
>
```

</CodeExamplePreview>

- TODO: Burde vi sette standard størrelse automatisk?
- TODO: Hvorfor bruker Figma 20 og 24px bredde når Google bruker 16px?

### Skarpe eller mye kanter

Bruk `library="Outlined"` for myke kanter. `Sharp` er standard. `Outlined` skal kun brukes hvis symbolet blir lettere å lese.

<CodeExamplePreview>

```html
<nve-icon name="Home"></nve-icon> skarpe <nve-icon name="Home" library="Outlined"></nve-icon> myke
```

</CodeExamplePreview>
