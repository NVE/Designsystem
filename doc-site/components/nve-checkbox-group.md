---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke varsler vil du se på?">
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

Bruk <span class="highlight">nve-checkbox-group</span> med <a href="./nve-checkbox">nve-checkbox</a> når brukeren skal kunne velge flere alternativer.
Hvis brukeren bare skal kunne velge ett alternativ, bruk <a href="./nve-radio-group">nve-radio-group</a> i stedet. Ved mange
alternativer vurder å bruke <a href="./nve-combobox">nve-combobox</a>.

Hver <span class="highlight">nve-checkbox</span> i gruppen bør ha <span class="highlight">value</span>. Når et valg markeres eller fjernes, trigges <span class="highlight">change</span>-hendelsen, og verdien fra den aktuelle sjekkboksen returneres i hendelsen sammen med handlingen som er utført (<span class="highlight">select</span> eller <span class="highlight">deselect</span>).

Hendelsestype kan importers ved:

```js
import type { NveCheckboxGroupChangeEvent } from 'nve-designsystem/components/nve-checkbox-group/nve-checkbox-group.component.js';
```

Den returnerer:

```js
type NveCheckboxGroupChangeEvent<T> = {
  value: string;
  action: 'select' | 'deselect';
}
```

## Retningslinjer

- Gi alltid feltet en tydelig <span class="highlight">label</span>.
- Bruk <span class="highlight">disabled</span> med omhu. Deaktiverte felt kan ikke fokuseres og kan derfor være vanskeligere å oppdage med tastatur/skjermleser.
- Gi hver sjekkboks en unik og stabil <span class="highlight">value</span> i gruppen, slik at <span class="highlight">change</span>-hendelsen alltid kan tolkes riktig.
- Bruk tydelige og korte etiketter per valg, så brukeren raskt forstår forskjellen mellom alternativene.
- Bruk vertikal visning når du har mange valg eller lange etiketter, for bedre lesbarhet.

## Eksempler

### Ledetekst og tooltip

Bruk <span class="highlight">label</span> for å vise en tydelig ledetekst for feltet. Attributtet er påkrevd – hvert skjemafelt skal ha en ledetekst som skjermlesere kan bruke for å forstå hva feltet gjelder.

Bruk i tillegg <span class="highlight">tooltip</span> for å vise utfyllende informasjon ved ledeteksten. Innholdet kan være ren tekst eller HTML, for eksempel lenker eller formattert hjelpetekst.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke varsler vil du se på?" tooltip="Gjelder varslene som vises i kart">
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Påkrevd

Bruk <span class="highlight">required</span> for å vise et stjernesymbol på slutten av ledeteksten som markerer at feltet er påkrevd.  
Bruk i tillegg <span class="highlight">requiredLabel</span> for å vise en forklarende tekst sammen med stjernen (for eksempel 'obligatorisk'). Dette gir brukerne en bedre forståelse av at feltet er påkrevd, siden ikke alle brukere forstår eller oppfatter stjernesymbolet alene.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke varsler vil du se på?" required requiredLabel="Obligatorisk">
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Retning

Bruk <span class="highlight">orientation</span> for å velge retning:

- <span class="highlight">vertical</span> er standard og viser sjekkboksene under hverandre.
- <span class="highlight">horizontal</span> viser sjekkboksene ved siden av hverandre.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke varsler vil du se på (vertical)?">
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>

<nve-checkbox-group label="Hvilke varsler vil du se på (horizontal)?" orientation="horizontal">
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
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
<nve-checkbox-group label="Hvilke varsler vil du se på (small)?" size="small">
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>

<nve-checkbox-group label="Hvilke varsler vil du se på (medium)?">
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>

<nve-checkbox-group label="Hvilke varsler vil du se på (large)?" size="large">
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Hjelpetekst

Bruk <span class="highlight">helpText</span> for å vise hjelpetekst over feltet.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke varsler vil du se på?" helpText="Ditt valg påvirker mange!">
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Hint

Bruk <span class="highlight">hintText</span> for å vise hint-tekst under feltet.

<CodeExamplePreview>

```html
<nve-checkbox-group
  label="Hvilke varsler vil du se på?"
  hint="Velg smart. Det finnes ingen vei tilbake fra dårlige valg."
>
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Deaktivert

<nve-message-card variant="warning" label="Obs!" size="compact">
  <p>
    Et deaktivert felt (<span class="highlight">disabled</span>) kan ikke få fokus og blir derfor ofte ikke oppdaget av
    brukere som navigerer med tastatur eller skjermleser. Bruk <span class="highlight">disabled</span> med omhu, og vurder
    å gi en tydelig forklaring i tekst på hvorfor feltet er deaktivert.
  </p>
</nve-message-card>

Bruk attributtet <span class="highlight">disabled</span> for å hindre at verdien kan endres i hele gruppen. For å deaktivere enkelte sjekkbokser, bruk <span class="highlight">disabled</span> direkte på dem.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke varsler vil du se på?" disabled>
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Forhåndsvalgte verdier

Bruk <span class="highlight">selectedValues</span>-array for å vise forhåndsvalgt verdier. Verdier må samsvare med <span class="highlight">value</span>-attributtet til en av <span class="highlight">nve-checkbox</span>-komponentene i gruppen.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Hvilke varsler vil du se på?" selectedValues='["flood", "landslide"]'>
  <nve-checkbox value="flood">Flomvarsel</nve-checkbox>
  <nve-checkbox value="landslide">Jordskredvarsel</nve-checkbox>
  <nve-checkbox value="rain">Regnvarsel</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

## Tilgjengelighet

<span class="highlight">nve-checkbox-group</span> bruker en tilknyttet <a href="#ledetekst-og-tooltip">ledetekst</a>. Når feltet får fokus vil skjermlesere lese opp ledeteksten, slik at brukeren forstår hva som skal fylles inn.

I tillegg brukes <span class="highlight">aria-describedby</span> for å knytte supplerende tekst til feltet. Når <span class="highlight">helpText</span>, <span class="highlight">hint</span> eller <span class="highlight">errorMessage</span> er satt vil skjermlesere normalt lese dem opp i forbindelse med fokus på feltet. (VoiceOver i Safari på macOS kan slite litt med aria-describedby og ikke lese den).

Brukere kan navigere gjennom sjekkboksene i gruppen ved å trykke <span class="highlight">Tab</span> for å fokusere hver sjekkboks. Når en sjekkboks har fokus, brukes <span class="highlight">Space</span>-tasten til å velge eller fjerne valget.
