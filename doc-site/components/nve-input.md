---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn"></nve-input>
```

</CodeExamplePreview>

<nve-message-card variant="primary" label="Native input-attributter" size="compact">
  <p>
    <span class="highlight">nve-input</span> bygger på et native <span class="highlight">&lt;input&gt;</span>-element
    og støtter derfor de fleste vanlige input-attributter:  </p>
        <ul>
      <li><span class="highlight">autocapitalize</span></li>
      <li><span class="highlight">autocomplete</span></li>
      <li><span class="highlight">autocorrect</span></li>
      <li><span class="highlight">autofocus</span> – husk at kun ett element kan autofokuseres per dokument.</li>
      <li><span class="highlight">inputmode</span></li>
      <li>
        <span class="highlight">maxLength</span> – brukes til å begrense antall tegn brukeren kan skrive.
        Fungerer kun for typene <span class="highlight">text</span>, <span class="highlight">search</span>,
        <span class="highlight">url</span>, <span class="highlight">tel</span>, <span class="highlight">email</span> og
        <span class="highlight">password</span>.
      </li>
      <li>
        <span class="highlight">max</span> – brukes for å sette øvre grenseverdi.
        Fungerer kun for typene <span class="highlight">date</span>, <span class="highlight">month</span>,
        <span class="highlight">week</span>, <span class="highlight">time</span>,
        <span class="highlight">datetime-local</span>, <span class="highlight">number</span> og
        <span class="highlight">range</span>.
      </li>
      <li>
        <span class="highlight">min</span> – brukes for å sette nedre grenseverdi.
        Fungerer kun for typene <span class="highlight">date</span>, <span class="highlight">month</span>,
        <span class="highlight">week</span>, <span class="highlight">time</span>,
        <span class="highlight">datetime-local</span>, <span class="highlight">number</span> og
        <span class="highlight">range</span>.
      </li>
      <li><span class="highlight">placeholder</span></li>
      <li><span class="highlight">readonly</span></li>
      <li><span class="highlight">required</span> – brukes blant annet for å annonsere obligatorisk tekstfelt for skjermleser.</li>
      <li><span class="highlight">spellcheck</span></li>
      <li>
        <span class="highlight">step</span> – fungerer kun for typene <span class="highlight">date</span>,
        <span class="highlight">month</span>, <span class="highlight">week</span>, <span class="highlight">time</span>,
        <span class="highlight">datetime-local</span>, <span class="highlight">number</span> og
        <span class="highlight">range</span>.
      </li>
      <li>
        <span class="highlight">type</span> – støttede typer: <span class="highlight">date</span>,
        <span class="highlight">datetime-local</span>, <span class="highlight">email</span>,
        <span class="highlight">number</span>, <span class="highlight">password</span>,
        <span class="highlight">search</span>, <span class="highlight">tel</span>,
        <span class="highlight">text</span>, <span class="highlight">time</span>,
        <span class="highlight">week</span>, <span class="highlight">month</span> og
        <span class="highlight">url</span>. Ikke støttet: <span class="highlight">button</span>,
        <span class="highlight">checkbox</span>, <span class="highlight">color</span>,
        <span class="highlight">file</span>, <span class="highlight">hidden</span>,
        <span class="highlight">image</span>, <span class="highlight">radio</span>,
        <span class="highlight">range</span>, <span class="highlight">reset</span> og
        <span class="highlight">submit</span>.
      </li>
      <li><span class="highlight">value</span></li>
    </ul>
  <br>
  <p>
    Noen viktige hendelser fra det interne <span class="highlight">&lt;input&gt;</span>-elementet er at det ikke automatisk går i gjennom komponentens Shadow DOM.
    Derfor videresender komponenten disse hendelsene programmatisk, slik at de kan fanges utenfor komponenten.
  </p>
  <ul>
    <li><span class="highlight">change</span> – når verdien endres og feltet mister fokus</li>
    <li><span class="highlight">select</span> – når brukeren markerer tekst</li>
  </ul>
      <p><span class="highlight">selectionchange</span> støttes ikke foreløpig siden den ikke er fullstøttet i mange nettlesere.</p>
  <br>
  <p>
    Noen native attributter er bevisst ikke støttet:
  </p>
    <ul>
    <li>
      <span class="highlight">dirname</span>, <span class="highlight">form</span>, <span class="highlight">formaction</span>,
      <span class="highlight">formenctype</span>, <span class="highlight">formmethod</span>, <span class="highlight">formnovalidate</span>,
      <span class="highlight">formtarget</span>, <span class="highlight">name</span>, <span class="highlight">pattern</span>,
      <span class="highlight">minlength</span> og <span class="highlight">multiple</span> – komponenten er ikke laget for
      native form submission og innebygd constraint validation.
    </li>
    <li>
      <span class="highlight">popovertarget</span> og <span class="highlight">popovertargetaction</span> – fordi type
      <span class="highlight">button</span> ikke støttes.
    </li>
    <li>
      <span class="highlight">accept</span> og <span class="highlight">capture</span> – fordi type
      <span class="highlight">file</span> ikke støttes.
    </li>
    <li>
      <span class="highlight">alpha</span> og <span class="highlight">colorspace</span> – fordi type
      <span class="highlight">color</span> ikke støttes.
    </li>
    <li>
      <span class="highlight">alt</span>, <span class="highlight">src</span>, <span class="highlight">width</span> og
      <span class="highlight">height</span> – fordi type <span class="highlight">image</span> ikke støttes.
    </li>
    <li>
      <span class="highlight">checked</span> – fordi type <span class="highlight">checkbox</span> ikke støttes.
    </li>
    <li><span class="highlight">size</span> – størrelsen styres av komponentens egne størrelsesvalg.</li>
    <li><span class="highlight">list</span> – ikke støttet.</li>
  </ul>
</nve-message-card>

## Retningslinjer

- Gi alltid feltet en tydelig <span class="highlight">label</span>. Ikke stol på <span class="highlight">placeholder</span> alene.
- Bruk <span class="highlight">disabled</span> med omhu. Deaktivert tekstfelt kan ikke fokuseres og kan derfor være vanskeligere å oppdage med tastatur/skjermleser. Hvis innholdet skal kunne leses, vurder <span class="highlight">readonly</span> i stedet.
- Hvis du bruker <span class="highlight">maxlength</span>, <span class="highlight">min</span> eller <span class="highlight">max</span> informer gjerne brukeren om grensen (for eksempel i <span class="highlight">hint</span>) slik at det ikke oppleves som “feltet slutter å virke”.

## Eksempler

### Ledetekst

Bruk <span class="highlight">label</span> for å vise en tydelig ledetekst for feltet. Attributtet er påkrevd – hvert skjemafelt skal ha en ledetekst som skjermlesere kan bruke for å forstå hva feltet gjelder.

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn"> </nve-input>
```

</CodeExamplePreview>

### Toggletip

Bruk sporet <span class="highlight">label-toggletip</span> for å vise en toggletip ved siden av ledeteksten.
Sporet er beregnet for en <a href="../components/nve-toggletip" class="highlight">nve-toggletip</a>-komponent.

Husk å legge til <span class="highlight">aria-label</span> på <span class="highlight">nve-toggletip</span>.

<CodeExamplePreview>

```html
<nve-input label="Beskriv saken">
  <nve-toggletip slot="label-toggletip" aria-label="Les mer om saken">
    <span>Ekstra info her.</span>
  </nve-toggletip>
</nve-input>
```

</CodeExamplePreview>

### Påkrevd

Bruk <span class="highlight">required</span> for å vise et stjernesymbol på slutten av ledeteksten som markerer at feltet er påkrevd.  
Bruk i tillegg <span class="highlight">requiredLabel</span> for å vise en forklarende tekst sammen med stjernen (for eksempel 'obligatorisk'). Dette gir brukerne en bedre forståelse av at feltet er påkrevd, siden ikke alle brukere forstår eller oppfatter stjernesymbolet alene.

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn" required requiredLabel="Obligatorisk"> </nve-input>
```

</CodeExamplePreview>

### Hjelpetekst

Bruk <span class="highlight">helpText</span> for å vise en tekst som nærmere bestemmer hva som skal fylles inn i tekstfeltet, og brukes som et tillegg til ledeteksten for tekstfeltet. Hjelpeteksten vises over tekstfeltet.

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn" helpText="En tekst som presiserer hva som skal fylles inn"> </nve-input>
```

</CodeExamplePreview>

### Hint

Bruk <span class="highlight">hint</span> for å vise en kortfattet tekst, som kan brukes for å gi eksempler på inndata. Hintet legges under tekstfeltet.

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn" hint="Du må jo kjenne hen..."> </nve-input>
```

</CodeExamplePreview>

### Deaktivert

<nve-message-card variant="warning" label="Obs!" size="compact">
  <p>
    Et deaktivert tekstfelt (<span class="highlight">disabled</span>) kan ikke få fokus og blir derfor ofte ikke oppdaget av
    brukere som navigerer med tastatur eller skjermleser. Bruk <span class="highlight">disabled</span> med omhu, og vurder
    å gi en tydelig forklaring i tekst på hvorfor feltet er deaktivert.
  </p>
</nve-message-card>

Bruk attributtet <span class="highlight">disabled</span> for å hindre at brukeren kan endre innholdet.

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn" disabled></nve-input>
```

</CodeExamplePreview>

### Skrivebeskyttet

Bruk <span class="highlight">readonly</span> for å hindre at innholdet kan endres.

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn" readonly value="Dette får du ikke endret"></nve-input>
```

</CodeExamplePreview>

### Input-type

Bruk <span class="highlight">type</span> og velg en av de støttede typene:

- <span class="highlight">date</span>
- <span class="highlight">datetime-local</span>
- <span class="highlight">email</span>
- <span class="highlight">number</span>
- <span class="highlight">password</span>
- <span class="highlight">search</span>
- <span class="highlight">tel</span>
- <span class="highlight">text</span>
- <span class="highlight">time</span>
- <span class="highlight">week</span>
- <span class="highlight">month</span>
- <span class="highlight">url</span>
- <span class="highlight">text (standard)</span>

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlingsdato" type="week"></nve-input>
<nve-input label="Antall saker" type="number"></nve-input>
```

</CodeExamplePreview>

### Størrelse

Bruk <span class="highlight">size</span> for å endre størrelsen på combobox‑feltet. Verdien kan være:

- <span class="highlight">large</span>
- <span class="highlight">medium</span> (standard)
- <span class="highlight">small</span>

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn (small)" size="small"></nve-input>
<nve-input label="Saksbehandlers navn (medium)"></nve-input>
<nve-input label="Saksbehandlers navn (large)" size="large"></nve-input>
```

</CodeExamplePreview>

### Mørk bakgrunn

Bruk <span class="highlight">filled</span> for mørk bakgrunnsfarge

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn" filled> </nve-input>
```

</CodeExamplePreview>

### Sletteknapp

Bruk <span class="highlight">clearable</span> for å vise en knapp som fjerner verdien (vises etter at man har skrevet minst én bokstav).
Et klikk på slettknappen sender også en <span class="highlight">change</span>-hendelse.

<nve-message-card variant="warning" label="Obs!" size="compact">
<p>Fjern‑knappen er ikke fokuserbar med tastatur. Dette er et bevisst valg: det er ikke forventet at fjern‑knappen skal ha eget tastaturfokus.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn" value="Raymond Nordman" clearable></nve-input>
```

</CodeExamplePreview>

### Vis/skjul passord

Når <span class="highlight">type='password'</span> brukes, kan du klikke på øye-ikonet for å vise eller skjule teksten i feltet.

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers hemmelig navn" type="password"></nve-input>
```

</CodeExamplePreview>

### Forhåndsutfylt verdi

Bruk <span class="highlight">value</span> for å vise forhåndsutfylt verdi.

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn" value="Raymond Nordman"></nve-input>
```

</CodeExamplePreview>

### Start og end-spor

Bruk <span class="highlight">start</span>-sporet for å plassere innhold, for eksempel et ikon, før inputfeltet. <span class="highlight">end</span>-sporet brukes til å plassere innhold etter inputfeltet.

<nve-message-card variant="warning" label="Vær oppmerksom ved bruk av sporene!" size="compact">
<p>Innhold i disse sporene skal som hovedregel ikke formidle informasjon som kun er tilgjengelig visuelt. Dersom innholdet inneholder viktig informasjon som brukeren trenger for å forstå eller fylle ut feltet, må den samme informasjonen også gjøres tilgjengelig for skjermleserbrukere, for eksempel gjennom hjelpetekst eller hinttekst.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-input label="Saksbehandlers navn">
  <nve-icon slot="start" name="cases"></nve-icon>
</nve-input>
<nve-input label="Saksbehandlers navn">
  <nve-icon slot="end" name="cases"></nve-icon>
</nve-input>
```

</CodeExamplePreview>

## Validering

For mer informasjon om hvordan <span class="highlight">nve-input</span> og andre skjemakomponenter valideres, se <a href="../introduction/forDevelopers/validation">siden om validering</a>.

### Intern validering

Intern validering gjør det mulig å validere verdien i <span class="highlight">nve-input</span> ved hjelp av valideringsregler.

Valideringsreglene kjøres når du kaller <span class="highlight">validateForm()</span> i skjemaets <span class="highlight">submit</span>-handler.

Du kan importere metoden slik:

```ts
import { validateForm } from 'nve-designsystem/validation/validateForm.js';
```

<CodeExamplePreview>

```html
<form id="test-form">
  <nve-input id="name-input" label="Saksbehandlers navn"></nve-input>
  <nve-input id="saksnummer" label="Saksnummer"></nve-input>

  <nve-button type="submit">Send inn</nve-button>
</form>

<script type="module">
  const form = document.querySelector('#test-form');
  const nameInput = document.querySelector('#name-input');
  const saksNummerInput = document.querySelector('#saksnummer');

  nameInput.validationRules = [
    () => !!saksNummerInput.value || 'Saksnummer er påkrevd',
    (value) => rules.required(value) || 'Feltet er påkrevd',
    (value) => value.length >= 3 || 'Minimum 3 bokstaver',
    (value) => value.length <= 20 || 'Maksimum 20 bokstaver',
    (value) => value.startsWith('s') || 'Må starte med s',
  ];

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm(event);
  });
</script>
```

</CodeExamplePreview>

### External validation

Bruker du eksternal validering system, kan du fortsatt sette feil status på input ved bruk av <span class="highlight">errorMessage</span>.

<CodeExamplePreview>

```html
<form>
  <nve-input label="Beskriv saken" errorMessage="Feltet er påkrevd"></nve-input>
</form>
```

</CodeExamplePreview>

Du kan fjerne feil status ved å sette <span class="highlight">errorMessage</span> tilbake til en tom string.

<CodeExamplePreview>

```html
<form>
  <nve-input label="Beskriv saken" errorMessage=""></nve-input>
</form>
```

</CodeExamplePreview>

## Tilgjengelighet

<span class="highlight">nve-input</span> er bygget på et native <span class="highlight">&lt;input&gt;</span> og bruker en tilknyttet <a href="#ledetekst-og-tooltip">ledetekst</a>. Når feltet får fokus vil skjermlesere lese opp ledeteksten, slik at brukeren forstår hva som skal fylles inn.

I tillegg brukes aria-describedby for å knytte supplerende tekst til feltet. Når <span class="highlight">helpText</span>, <span class="highlight">hint</span> eller <span class="highlight">errorMessage</span> er satt vil skjermlesere normalt lese dem opp i forbindelse med fokus på feltet (ved bruk av <span class="highlight">aria-describedby</span>).

Ikoner som vises når <span class="highlight">disabled</span> eller <span class="highlight">readonly</span> attributene brukes er dekorative og ikke ment som eneste informasjonsbærer. Skjermlesere informerer brukere når tekstfeltet er skrivebeskyttet, men ikke når det er deaktivert.

Valg av riktig type har betydning selv uten validering: skjermlesere annonserer felttypen til brukeren, og mobilenheter tilpasser tastaturet tilsvarende (eksempelvis viser tallastatur for <span class="highlight">type="number"</span> og e-posttastatur for <span class="highlight">type="email"</span>).
