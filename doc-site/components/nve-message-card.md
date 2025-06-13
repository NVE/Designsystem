---
layout: component
---

<CodeExamplePreview>

```html
<nve-message-card label="Varsel om nedetid" closable>
  <div slot="subheader">Varsling | 21.11.2023</div>
  <div slot="footer">
    <nve-button variant="neutral">Les mer</nve-button>
  </div>
  I meldingen skal søker beskrive tiltaket, det berørte området og mulige konsekvenser for miljø og samfunn.
</nve-message-card>
```

</CodeExamplePreview>

## Eksempler

### Varianter

Bruk `variant` for å velge farge. `primary` er standard. Noen varianter har spesielle ikoner.

<CodeExamplePreview>

```html
<nve-message-card label="primary"></nve-message-card>
<!-- Box-shadow stil på den nøytrale varianten på grunn av lik farger med bakgrunnen i kodeforhåndsvisningen -->
<nve-message-card style="box-shadow:var(--dropdown)" variant="neutral" label="neutral"></nve-message-card>
<nve-message-card variant="warning" label="warning"></nve-message-card>
<nve-message-card variant="danger" label="danger"></nve-message-card>
<nve-message-card variant="success" label="success"></nve-message-card>
```

</CodeExamplePreview>

### Størrelse

Man kan velge mellom `default` (som er standard og ikke trenger å skrives), `compact` og `simple`.
`simple` kan ikke vise brødtekst eller `subheader`, og label er også tynnere.

<CodeExamplePreview>

```html
<nve-message-card label="Default">Dette er standard størrelse</nve-message-card>
<nve-message-card size="compact" label="Compact">Denne er litt mer kompakt</nve-message-card>
<nve-message-card size="simple" label="Simple" subheader="vises ikke">Denne brødteksten vises ikke</nve-message-card>
```

</CodeExamplePreview>

### Høyere metning

Bruk `saturation="emphasized"` for å vise sterkere bakgrunnsfarge.

<CodeExamplePreview>

```html
<!-- Styling her kun for å organisere kortene parvis, så de blir lettere å sammenligne -->
<div style="display: grid; grid-template-columns: auto auto; gap: 8px" ;>
  <div>emphasized</div>
  <div>standard metning</div>
  <nve-message-card label="primary" saturation="emphasized"></nve-message-card>
  <nve-message-card label="primary"></nve-message-card>
  <nve-message-card variant="neutral" label="neutral" saturation="emphasized"></nve-message-card>
  <nve-message-card variant="neutral" label="neutral"></nve-message-card>
  <nve-message-card variant="warning" label="warning" saturation="emphasized"></nve-message-card>
  <nve-message-card variant="warning" label="warning"></nve-message-card>
  <nve-message-card variant="danger" label="danger" saturation="emphasized"></nve-message-card>
  <nve-message-card variant="danger" label="danger"></nve-message-card>
  <nve-message-card variant="success" label="success" saturation="emphasized"></nve-message-card>
  <nve-message-card variant="success" label="success"></nve-message-card>
</div>
```

</CodeExamplePreview>

### Closable

Bruk `closable` for å vise en knapp for å skjule kortet.
Hvis knappen brukes, fjernes kortet fra DOM og `nve-hide`-hendelsen sendes.
Oppfrisk denne sida hvis du har testet knappen og vil vise kortet igjen.

<CodeExamplePreview>

```html
<nve-message-card closable label="Prøv å lukke meg"></nve-message-card>
```

</CodeExamplePreview>

### Footer

Du kan bruke `footer`-sporet til å vise f.eks. en knapp.

<CodeExamplePreview>

```html
<nve-message-card label="Beklager">
  Vi støtter ikke denne funksjonen.
  <div slot="footer">
    <nve-button variant="neutral">Send klage</nve-button>
  </div>
</nve-message-card>
```

</CodeExamplePreview>

### Subheader

Sporet `subheader` brukes til å vise en ekstra tekst over tittelen.

<CodeExamplePreview>

```html
<nve-message-card label="Standard størrelse">
  <div slot="subheader">Subheader</div>
</nve-message-card>

<nve-message-card size="compact" label="Kompakt">
  <div slot="subheader">Subheader</div>
</nve-message-card>
```

</CodeExamplePreview>

### Vise eller gjemme ikon

Ikon vises foran tittel som standard, men kan slås av med `showIcon="false"`.

<CodeExamplePreview>

```html
<nve-message-card showIcon="false" label="Uten ikon"></nve-message-card>
```

</CodeExamplePreview>

### Ikon

Ikon er tilpasset varianten i utgangspunktet, men du kan velge ditt eget ikon med `iconTitle`.

<CodeExamplePreview>

```html
<nve-message-card iconTitle="pets" label="Hunden sier voff voff">
  Du kan velge et ikon i headeren selv
</nve-message-card>
<nve-message-card variant="warning" label="Katten liker ikke voff voff"> Vær forsiktig </nve-message-card>
```

</CodeExamplePreview>

### Html i brødtekst

Du kan bruke html i brødteksten om du trenger mer struktur.

<CodeExamplePreview>

```html
<nve-message-card label="Husk">
  <ul>
    <li>Frokost</li>
    <li>Pusse tenna</li>
    <li>Adgangskort</li>
    <li>Paraply</li>
  </ul>
</nve-message-card>
```

</CodeExamplePreview>
