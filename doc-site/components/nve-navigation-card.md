---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-navigation-card
  href="#"
  label="Om hydrologisk avdeling"
  additionalText="Norges vassdrags- og energidirektorat er nasjonal faginstitusjon i hydrologi."
></nve-navigation-card>
<nve-navigation-card
  href="#"
  label="Fakta om vannets kretsløp"
  iconPath="/assets/nve-illustrasjoner-ikon-vannkraft.png"
></nve-navigation-card>
```

</CodeExamplePreview>

## Eksempler

Under finner du eksempler på vanlige brukstilfeller for `nve-navigation-card`.

### Tittel

Tittel vises alltid øverst i kortet, og under ikon dersom ikon er lagt inn med `iconPath`. Tittelen er det viktigste innholdet og bør være kort og beskrivende.

<CodeExamplePreview>

```html
<nve-navigation-card href="#" label="Tittel" />
```

</CodeExamplePreview>

### Med tilleggstekst

Du kan legge til en ekstra tekst under hovedlenkens overskrift ved å bruke `additionalText`-egenskapen. Både overskriften og den tilhørende teksten blir lest opp av skjermlesere, så sørg for at teksten er kortfattet og lett å forstå.

<CodeExamplePreview>

```html
<nve-navigation-card
  href="#"
  label="Om hydrologisk avdeling"
  additionalText="Norges vassdrags- og energidirektorat er nasjonal faginstitusjon i hydrologi."
/>
```

</CodeExamplePreview>

### Med lang tilleggstekst

Tilleggstekst vises maksimalt på 3 linjer. Dersom teksten er lengre, kuttes den av med `...`.

<CodeExamplePreview>

```html
<nve-navigation-card
  href="#"
  label="Vannkraft i Norge"
  additionalText="Norge er verdens sjette største produsent av vannkraft, og nesten all norsk strømproduksjon kommer fra vannkraftverk. Vannkraften utnytter høydeforskjeller i elver og innsjøer til å produsere ren og fornybar energi. NVE forvalter Norges vannressurser og har ansvar for å regulere og overvåke kraftproduksjonen i landet."
/>
```

</CodeExamplePreview>

### Med ikon fra ikon-fil

Ikonsettet som skal brukes er de som hos NVE kalles [Illustrasjonsikoner](https://nve.frontify.com/d/n2ujvoktZ3dr/nve-profil#/ikoner-illustrasjoner/illustrasjonsikoner-1). Ikon skal **ikke** kombineres med ekstratekst (`additionalText`). Dersom både `additionalText` og `iconPath` er brukt, vil ikonet vises og `additionalText` skjules.

<CodeExamplePreview>

```html
<nve-navigation-card
  href="#"
  label="Fakta om vannets kretsløp"
  iconPath="/assets/nve-illustrasjoner-ikon-vannkraft.png"
>
</nve-navigation-card>
<nve-navigation-card href="#" label="Fakta om flom og farer" iconPath="/assets/nve-illustrasjoner-ikon-flom.png">
</nve-navigation-card>
```

</CodeExamplePreview>

### Klikkhandlinger

Man kan velge mellom 3 klikk-handlinger ved bruk av `clickAction`-egenskapen. Handlingen bestemmer både funksjonaliteten og hvilket ikon som vises i kortet. Standardverdi er `internal`.

#### Intern

`internal` håndterer intern routing. Brukes når brukeren skal navigere innenfor samme applikasjon. Sett `href` for å definere URL-en.

<CodeExamplePreview>

```html
<nve-navigation-card
  label="Intern"
  additionalText="Klikk for å gå til intern linke"
  clickAction="internal"
  href="/components/nve-button.html"
>
</nve-navigation-card>
```

</CodeExamplePreview>

#### Ekstern

`external` åpner en ekstern side. Setter automatisk `target="_blank"` på `<a>`-elementet.

<CodeExamplePreview>

```html
<nve-navigation-card label="Ekstern (åpnes i en ny fane)" clickAction="external" href="https://www.nve.no/">
</nve-navigation-card>
```

</CodeExamplePreview>

#### Nedlasting

`download` starter nedlasting av en fil. Legger til `download`-attributtet slik at nettleseren forstår at lenken ikke skal navigere videre. Dersom du ønsker spesifikk filhåndtering, kan du implementere det selv med en vanlig `onClick`-metode (avhengig av rammeverket du bruker).

<nve-message-card variant="warning" label="Viktig!" size="compact">
<p>Hvis filen ligger på en annen origin enn applikasjonen, vil lenken ikke laste ned filen, men i stedet åpne adressen fra <b>href</b>-attributtet. I slike tilfeller må du selv håndtere nedlastingen med onClick.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-navigation-card label="Last ned Mardalsfossen bilde (JPEG, 72 KB)" clickAction="download"> </nve-navigation-card>
```

</CodeExamplePreview>

## Bruk med klient-side routing i SPA-applikasjoner

Når man benytter klientside-routing, for eksempel med `routerLink` (Vue) eller `Link` (React), genereres et eget `<a>`-element av rammeverket.  
I disse tilfellene blir `nve-navigation-card` pakket inn i en `<a>`. For å unngå ugyldig HTML-struktur med `<a>`-elementer inni hverandre, sjekker `nve-navigation-card` derfor om dets direkte forelder er et `<a>`. Hvis dette er tilfelle, rendres kortet som et `<div>` i stedet for et `<a>`.

På denne måten beholdes mest funksjonalitet og styling fra `nve-navigation-card`, samtidig som man unngår semantiske og tekniske problemer med nestede lenker.

**Eksempel i Vue:**

```vue
<RouterLink to="components/Komponentoversikt">
  <nve-navigation-card
    href="#"
    label="Om hydrologisk avdeling"
    additionalText="Tekst her skal ikke kombineres med ikon"
  />
</RouterLink>
```

**Eksempel i React:**

```jsx
<Link to="/components/Komponentoversikt">
  <nve-navigation-card
    href="#"
    label="Om hydrologisk avdeling"
    additionalText="Tekst her skal ikke kombineres med ikon"
  />
</Link>
```

## Retningslinjer

- **Bruk `nve-navigation-card`** for hovednavigasjon på oversikts- eller inngangssider der brukeren skal velge mellom flere hovedtemaer eller seksjoner.
- **Bruk [`nve-link-card`](/components/nve-link-card)** for sekundære lenker, handlinger, eller når du trenger støtte for eksterne lenker, nedlasting eller e-post.
- Ikke bruk `nve-navigation-card` for valg, ekspanderbare paneler eller andre interaktive kort – bruk dedikerte komponenter for dette.
- Komponentet har minimumshøyde for konsistent layout, men ingen makshøyde. Kortet kan derfor vokse i høyden etter innhold, men tilleggstekst vises maks på 3 linjer.
- **Ikon skal ikke kombineres med ekstratekst** (`additionalText`). Hvis `ikonPath` er lagt inn, vises ikke tilleggstekst.
- **Kun illustrasjonsikoner skal brukes som ikon**. Disse finnes i [NVE Frontify – Illustrasjonsikoner](https://nve.frontify.com/d/n2ujvoktZ3dr/nve-profil#/ikoner-illustrasjoner/illustrasjonsikoner-1/nedlasting). Illustrasjonsikonene illustrerer NVEs virksomhetsområder og er detaljrike. De skal ikke brukes for å indikere navigasjon eller handling, og fungerer dårlig i små størrelser.
- **`label` skal alltid være meningsfull og gi mening alene**, uten å være avhengig av omkringliggende kontekst. Skjermlesere kan presentere alle lenker på siden i en liste, og da må hver lenketekst være forståelig på egen hånd.
- Bruk alltid komponenten i et grid- eller flex-oppsett for å sikre riktig spacing og responsivitet.

## Tilgjengelighet

- **Tittel (`label`-feltet) rendres som `<h2>`** for å sikre god semantikk og tilgjengelighet. Dette gjør det enklere for brukere med skjermleser å navigere mellom hovedseksjoner på siden. Hvis du har flere navigation-cards på samme side, vil de automatisk utgjøre en oversiktlig seksjonsstruktur.
- Komponentet rendres som `<a>` hvis det ikke ligger inni en lenke, og som `<div>` hvis det pakkes inn i en `<a>` (for å unngå nestede lenker).
- Ekstratekst trunkeres automatisk etter 3 linjer for å sikre at kortet ikke blir for høyt og at innholdet er lett å skanne.
- Understrek (text-decoration) på wrapper-`<a>` fjernes av designsystemet ved hjelp av en regel i `global.css` (`a:has(nve-navigation-card) { text-decoration: unset; }`). Dette sikrer at det ikke vises uønsket understrek på lenker som wrapper `nve-navigation-card`, siden webkomponenter bruker Shadow DOM og ikke kan påvirke wrapperens styling direkte.
