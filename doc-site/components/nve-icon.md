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

For å endre størrelsen, bruk `--icon-size` css custom property;

Man kan fortsatt bruke bare `font-size` css property (se siste eksempel), men man må huske å endre `line-height` også så at den stemmer med valgte `font-size`.

16px er standard.
<CodeExamplePreview>

```html
<nve-icon name="Rocket"></nve-icon>

<nve-icon name="Rocket" style="--icon-size: 20px;"></nve-icon>

<nve-icon name="Rocket" style="--icon-size: 24px;"></nve-icon>

<nve-icon name="Rocket" style="font-size: 24px; line-height: 24px;"></nve-icon>
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

Man kan bruke `src`. Med definert `src` vil `nve-icon` bruke `<img>-taggen` bak kulissene, derfor må man huske å legge til `alt` for tilgjengelighet.

`name` og `library` brukes ikke når `src` er definert. Man kan fortsatt bruke `--icon-size`, men bruk av `font-size` css property skal ikke fungere.

<nve-message-card variant="warning" label="Obs!">
Selv om vi støtter bruk av ikoner direkte fra egen repo, det anbefales sterkt å bruke Material Symboler der
hvor det er mulig. 
</nve-message-card>

<CodeExamplePreview>

```html
<nve-icon src="/assets/home-icon.svg" alt="hjem"></nve-icon>

<nve-icon src="/assets/home-icon.svg" alt="hjem" style="--icon-size:24px"></nve-icon>
```

</CodeExamplePreview>
