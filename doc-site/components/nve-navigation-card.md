---
layout: component
---

<CodeExamplePreview>

```html
<nve-navigation-card
  href="#"
  title="Om hydrologisk avdeling"
  additionalText="Norges vassdrags- og energidirektorat er nasjonal faginstitusjon i hydrologi."
></nve-navigation-card>
<nve-navigation-card
  href="#"
  title="Fakta om vannets kretsløp"
  iconPath="../assets/images/nve-illustrasjoner-ikon-vannkraft.png"
 />
</nve-navigation-card>
```

</CodeExamplePreview>

## Eksempler

### Tittel

Tittel vises alltid øverst i kortet, og under ikon dersom ikon er lagt inn med `iconPath`. Tittelen er det viktigste innholdet og bør være kort og beskrivende.

<CodeExamplePreview>

```html
<nve-navigation-card href="#" title="Tittel" />
```

</CodeExamplePreview>

### Med tilleggstekst

Du kan legge til en ekstra tekst under hovedlenkens overskrift ved å bruke `additionalText`-egenskapen. Både overskriften og den tilhørende teksten blir lest opp av skjermlesere, så sørg for at teksten er kortfattet og lett å forstå.

<CodeExamplePreview>

```html
<nve-navigation-card
  href="#"
  title="Om hydrologisk avdeling"
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
  title="Vannkraft i Norge"
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
  title="Fakta om vannets kretsløp"
  iconPath="../assets/images/nve-illustrasjoner-ikon-vannkraft.png"
>
</nve-navigation-card>
<nve-navigation-card
  href="#"
  title="Fakta om flom og farer"
  iconPath="../assets/images/nve-illustrasjoner-ikon-flom.png"
>
</nve-navigation-card>
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
    title="Om hydrologisk avdeling"
    additionalText="Tekst her skal ikke kombineres med ikon"
  />
</RouterLink>
```

**Eksempel i React:**

```jsx
<Link to="/components/Komponentoversikt">
  <nve-navigation-card
    href="#"
    title="Om hydrologisk avdeling"
    additionalText="Tekst her skal ikke kombineres med ikon"
  />
</Link>
```

## Retningslinjer

- **Bruk `nve-navigation-card`** for hovednavigasjon på oversikts- eller inngangssider der brukeren skal velge mellom flere hovedtemaer eller seksjoner.
- **Bruk [`nve-link-card`](/components/nve-link-card)** for sekundære lenker, handlinger, eller når du trenger støtte for eksterne lenker, nedlasting eller e-post.
- Ikke bruk `nve-navigation-card` for valg, ekspanderbare paneler eller andre interaktive kort – bruk dedikerte komponenter for dette.
- Komponentet har både minimum og maksimum høyde for konsistent layout.
- **Ikon skal ikke kombineres med ekstratekst** (`additionalText`). Hvis `ikonPath` er lagt inn, vises ikke tilleggstekst.
- **Kun illustrasjonsikoner skal brukes som ikon**. Disse finnes i [NVE Frontify – Illustrasjonsikoner](https://nve.frontify.com/d/n2ujvoktZ3dr/nve-profil#/ikoner-illustrasjoner/illustrasjonsikoner-1/nedlasting). Illustrasjonsikonene illustrerer NVEs virksomhetsområder og er detaljrike. De skal ikke brukes for å indikere navigasjon eller handling, og fungerer dårlig i små størrelser.
- Bruk alltid komponenten i et grid- eller flex-oppsett for å sikre riktig spacing og responsivitet.

## Tilgjengelighet

- **Tittel (`title`-feltet) rendres som `<h2>`** for å sikre god semantikk og tilgjengelighet. Dette gjør det enklere for brukere med skjermleser å navigere mellom hovedseksjoner på siden. Hvis du har flere navigation-cards på samme side, vil de automatisk utgjøre en oversiktlig seksjonsstruktur.
- Komponentet rendres som `<a>` hvis det ikke ligger inni en lenke, og som `<div>` hvis det pakkes inn i en `<a>` (for å unngå nestede lenker).
- Ikon og tilleggstekst skal **ikke** vises samtidig.
- Ekstratekst trunkeres automatisk etter 3 linjer for å sikre at kortet ikke blir for høyt og at innholdet er lett å skanne.
- Understrek (text-decoration) på wrapper-`<a>` fjernes av designsystemet ved hjelp av en regel i `global.css` (`a:has(nve-navigation-card) { text-decoration: unset; }`). Dette sikrer at det ikke vises uønsket understrek på lenker som wrapper `nve-navigation-card`, siden webkomponenter bruker Shadow DOM og ikke kan påvirke wrapperens styling direkte.
