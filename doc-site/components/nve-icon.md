---
layout: component
---

<CodeExamplePreview>

```html
<nve-icon name="Favorite"></nve-icon>
```

</CodeExamplePreview>

Her er [oversikt over ikoner i Material Symbols](https://fonts.google.com/icons?icon.style=Sharp).

## Eksempler

### Størrelse

24px er standard. For å endre størrelse, bruk `--icon-size` css custom property.

`font-size` i kombinasjon med `line-height` kan også brukes. Begge må være like.

<CodeExamplePreview>

```html
<nve-icon name="Rocket" style="--icon-size: 20px;"></nve-icon>20px

<nve-icon name="Rocket"></nve-icon> 24px (standard størrelse)

<nve-icon name="Rocket" style="--icon-size: 28px;"></nve-icon> 28px med bruk av --icon-size

<nve-icon name="Rocket" style="font-size: 28px; line-height: 28px;"></nve-icon>28px med bruk av font-size og line-height
```

</CodeExamplePreview>

### Skarpe eller mye kanter

Bruk `library="Outlined"` for myke kanter. `Sharp` er standard. `Outlined` skal kun brukes hvis symbolet blir lettere å lese. `Fill` skal ikke brukes.
<CodeExamplePreview>

```html
<nve-icon name="Home"></nve-icon> skarpe <nve-icon name="Home" library="Outlined"></nve-icon> myke
```

</CodeExamplePreview>

### Offline-støtte / Bruke ikoner direkte fra eget repo

Hvis du bruker `name`, lastes ikonet med aktuelt navn fra Material Symbols når komponenten blir registrert første gang. Dette funker ikke offline. Men med `src`, kan du bruke ikoner som er lagret i eget repo.

Hvis du bruker `src`, vil `nve-icon` bruke `<img>-taggen` bak kulissene, derfor må du huske å legge til `alt` for tilgjengelighet.

`name` og `library` brukes ikke når `src` er definert. Man kan fortsatt bruke `--icon-size`, men `font-size` css property vil ikke funke.

<nve-message-card variant="warning" label="Obs!">
Selv om vi støtter bruk av ikoner direkte fra eget repo, anbefaler vi å bruke Material Symbols der
det er mulig. 
</nve-message-card>

<CodeExamplePreview>

```html
<nve-icon src="/assets/home-icon.svg" alt="hjemme"></nve-icon>
<nve-icon src="/assets/home-icon.svg" alt="hytta" style="--icon-size:20px"></nve-icon>
```

</CodeExamplePreview>

#### Offline-støtte internt (kun relevant for utviklere av designsystemet)

Noen av designsystem-komponentene viser også ikoner som en del av komponenten. Et eksempel er `nve-message-card`:
<nve-message-card size="simple" label="Info-ikonet i dette kortet blir ikke lastet fra Material Symbols"/>
Siden designsystemet skal kunne brukes også i applikasjoner uten nett, har vi kopiert de få ikonene vi trenger fra Material Symbols inn i designsystemet. Det står mer om hvordan du gjør dette i [CONTRIBUTING.md](https://github.com/NVE/Designsystem/blob/main/CONTRIBUTING.md).
