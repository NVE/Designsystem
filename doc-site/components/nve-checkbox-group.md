---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke faretyper vil du abonnere på">
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

## Eksempler

### Ledetekst og tooltip

Bruk <span class="highlight">label</span> for å vise en tydelig ledetekst for feltet. Attributtet er påkrevd – hvert skjemafelt skal ha en ledetekst som skjermlesere kan bruke for å forstå hva feltet gjelder.

Bruk i tillegg <span class="highlight">tooltip</span> for å vise utfyllende informasjon ved ledeteksten. Innholdet kan være ren tekst eller HTML, for eksempel lenker eller formattert hjelpetekst.

<CodeExamplePreview>

```html
<nve-checkbox-group
  label="Hvilke faretyper vil du abonnere på"
  tooltip="Du skal få beskjed om noen av farene skjer i ditt område"
>
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Påkrevd

Bruk <span class="highlight">required</span> for å vise et stjernesymbol på slutten av ledeteksten som markerer at feltet er påkrevd.  
Bruk i tillegg <span class="highlight">requiredLabel</span> for å vise en forklarende tekst sammen med stjernen (for eksempel 'obligatorisk'). Dette gir brukerne en bedre forståelse av at feltet er påkrevd, siden ikke alle brukere forstår eller oppfatter stjernesymbolet alene.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke faretyper vil du abonnere på" required requiredLabel="Obligatorisk">
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Retning

Bruk <span class="highlight">orientation</span> for å velge retning:

- <span class="highlight">vertical</span> er standard og viser sjekkboksene under hverandre.
- <span class="highlight">horizontal</span> viser sjekkboksene ved siden av hverandre.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke faretyper vil du abonnere på">
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>

<nve-checkbox-group label="Hvilke faretyper vil du abonnere på" orientation="horizontal">
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Størrelse

Størrelsen kan styres på gruppenivå. Bruk <span class="highlight">size</span> for å velge størrelse:

- <span class="highlight">small</span>
- <span class="highlight">medium</span> - er standard
- <span class="highlight">large</span>

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke faretyper vil du abonnere på (small)" size="small">
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>

<nve-checkbox-group label="Hvilke faretyper vil du abonnere på (medium)">
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>

<nve-checkbox-group label="Hvilke faretyper vil du abonnere på (large)" size="large">
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Hjelptekst

Bruk <span class="highlight">helpText</span> for å vise hjelpetekst over feltet.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke faretyper vil du abonnere på" helpText="Velg fornuftig!">
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Hint-tekst

Bruk <span class="highlight">hintText</span> for å vise hint-tekst under feltet.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke faretyper vil du abonnere på" hintText="Velg fornuftig!">
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Deaktivert

<nve-message-card variant="warning" label="Deaktivert og tilgjengelighet" size="compact">
  <p>
Når <span class="highlight">disabled</span> er satt, blir <span class="highlight">nve-checkbox</span>-feltene ikke fokuserbare. Skjermlesere kan da ikke navigere til eller lese opp de enkelte valgene. Brukere får dermed ikke informasjon om hvilke valg som normalt ville vært tilgjengelige her.
  </p>
</nve-message-card>

Bruk attributtet <span class="highlight">disabled</span> for å hindre at verdien kan endres i hele gruppen. For å deaktivere enkelte sjekkbokser, bruk <span class="highlight">disabled</span> direkte på dem.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke faretyper vil du abonnere på" disabled>
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Forhåndsvalgte verdier

Bruk <span class="highlight">selectedValues</span>-array for å vise en forhåndsvalgte verdier. Verdier må samsvare med <span class="highlight">value</span>-attributtet til en av <span class="highlight">nve-checkbox</span>-komponentene i gruppen.

<nve-message-card variant="primary" label="Info" size="compact">
<p><b>selectedValues</b>-attributtet fjernes fra DOM-en etter innlasting for å hindre at DOM-en fylles opp med unødvendig data.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke faretyper vil du abonnere på" selectedValues='["avalanche"]'>
  <nve-checkbox value="avalanche">Snøskredd</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredd</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

nevne at her treger vi ikke aria checked osv siden de er bygget med native input

aria-required wont work here so i omit it.
copilot is So when focus lands on the first checkbox, AT reads that checkbox’s name/role/state. It does not treat parent aria-required as “this checkbox is required”.
Also, for checkbox groups, “required” usually means at least one must be selected, which is not a native checkbox semantic. Native required works naturally for radios, but not for this custom checkbox-group rule.
