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

For å endre størrelsen, bruk `--icon-size` css-property;
<CodeExamplePreview>

```html
<nve-icon name="Rocket"></nve-icon>Liten (16px høy)

<nve-icon name="Rocket" style="--icon-size: 20px;"></nve-icon>Medium (20px høy)

<nve-icon name="Rocket" style="--icon-size: 24px;"></nve-icon>Stor (24px høy)
```

</CodeExamplePreview>

### Skarpe eller mye kanter

Bruk `library="Outlined"` for myke kanter. `Sharp` er standard. `Outlined` skal kun brukes hvis symbolet blir lettere å lese.

<CodeExamplePreview>

```html
<nve-icon name="Home"></nve-icon> skarpe <nve-icon name="Home" library="Outlined"></nve-icon> myke
```

</CodeExamplePreview>

### Offline støtte / Bruke ikoner direkte fra egen repo

Siden `nve-icon` med `name` (altså material symboler som lastes ned når komponent blir registrert første gang) ikke støtter offline-bruk, kan man i stedet bruke ikoner som er lagret i eget repo.

Man kan bruke `src`. Med definert `src` skal `nve-icon` bruke `<img>-taggen` bak kulissene, derfor må man huske å legge til `alt` for tilgjengelighet.

`name` og `library` brukes ikke når `src` er definert. Man kan fortsatt bruke `--icon-size`.

<CodeExamplePreview>

```html
<nve-icon src="/assets/images/home-icon.svg" alt="hjem"></nve-icon>
```

</CodeExamplePreview>
