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
<nve-icon name="Rocket"></nve-icon>Liten (16px høy)

<nve-icon name="Rocket" style="font-size: 20px;"></nve-icon>Medium (20px høy)

<nve-icon name="Rocket" style="font-size: 24px;"></nve-icon>Stor (24px høy)
```

</CodeExamplePreview>

### Skarpe eller mye kanter

Bruk `library="Outlined"` for myke kanter. `Sharp` er standard. `Outlined` skal kun brukes hvis symbolet blir lettere å lese.

<CodeExamplePreview>

```html
<nve-icon name="Home"></nve-icon> skarpe <nve-icon name="Home" library="Outlined"></nve-icon> myke
```

</CodeExamplePreview>
