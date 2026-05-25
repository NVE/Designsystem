---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-textarea label="Beskriv saken"></nve-textarea>
```

</CodeExamplePreview>

<nve-message-card variant="primary" label="Native textarea-attributter" size="compact">
  <p>
    <span class="highlight">nve-textarea</span> bygger på et native <span class="highlight">&lt;textarea&gt;</span>-element
    og støtter derfor de fleste vanlige textarea-attributter:  </p>
    <ul>
      <li><span class="highlight">autocapitalize</span></li>
      <li><span class="highlight">autocomplete</span></li>
      <li><span class="highlight">autocorrect</span></li>
      <li><span class="highlight">autofocus</span> - husk at kun ett element kan autofokuseres</li>
      <li><span class="highlight">maxLength</span> - selv om vi ikke støtter constraint validation, den brukes til å begrense antall tegn en bruker kan skrive. </li>
      <li><span class="highlight">placeholder</span></li>
      <li><span class="highlight">rows</span> - lenke til hvordan den brukes</li>
      <li><span class="highlight">spellcheck</span></li>
    </ul>
<br>
  <p>Komponenten videresender relevante hendelser fra det native <span class="highlight">&lt;textarea&gt;</span>-elementet slik at de kan fanges utenfor komponentens Shadow DOM:</p>
    <ul>
      <li><span class="highlight">change</span>- når verdien endres og feltet mister fokus</li> 
      <li><span class="highlight">select</span>- når brukeren markerer tekst</li> 
    </ul>
    <p><span class="highlight">selectionchange</span> støttes ikke foreløpig siden den ikke er fullstøttet i mange nettlesere.</p>
<br>
  <p>
    Noen native attributter er bevisst ikke støttet:
  </p>
  <ul>
    <li><span class="highlight">cols</span> – komponenten bruker CSS for bredde. Den er alltid 100% basert på foreldren sin bredde.</li>
    <li><span class="highlight">dirname</span> – ikke støttet.</li>
    <li><span class="highlight">form</span>, <span class="highlight">name</span> og <span class="highlight">wrap</span> – komponenten er ikke laget for native form submission.</li>
    <li><span class="highlight">minlength</span> – ikke støttet (vi tilbyr ikke denne typen innebygd constraint-/formvalidering).</li>
  </ul>
</nve-message-card>

## Retningslinjer

- Gi alltid feltet en tydelig <span class="highlight">label</span>. Ikke stol på <span class="highlight">placeholder</span> alene.
- Bruk <span class="highlight">disabled</span> med omhu. Deaktiverte felt kan ikke fokuseres og kan derfor være vanskeligere å oppdage med tastatur/skjermleser. Hvis innholdet skal kunne leses, vurder <span class="highlight">readonly</span> i stedet.
- Sett en fornuftig høyde med <span class="highlight">rows</span> (for eksempel 3–5 rader) når du forventer lengre svar. For korte svar bør du vurdere <span class="highlight">nve-input</span> i stedet.
- Hvis du bruker <span class="highlight">maxlength</span>, informer gjerne brukeren om grensen (for eksempel i <span class="highlight">hint</span>) slik at det ikke oppleves som “feltet slutter å virke”.

## Eksempler

### Ledetekst og tooltip

Bruk <span class="highlight">label</span> for å vise en tydelig ledetekst for feltet. Attributtet er påkrevd – hvert skjemafelt skal ha en ledetekst som skjermlesere kan bruke for å forstå hva feltet gjelder.

Bruk i tillegg <span class="highlight">tooltip</span> for å vise utfyllende informasjon ved ledeteksten. Innholdet kan være ren tekst eller HTML, for eksempel lenker eller formattert hjelpetekst.

<CodeExamplePreview>

```html
<nve-textarea label="Beskriv saken" tooltip="Skriv hva saken gjelder."> </nve-textarea>
```

</CodeExamplePreview>

### Påkrevd

Bruk <span class="highlight">required</span> for å vise et stjernesymbol på slutten av ledeteksten som markerer at feltet er påkrevd.  
Bruk i tillegg <span class="highlight">requiredLabel</span> for å vise en forklarende tekst sammen med stjernen (for eksempel 'obligatorisk'). Dette gir brukerne en bedre forståelse av at feltet er påkrevd, siden ikke alle brukere forstår eller oppfatter stjernesymbolet alene.

<CodeExamplePreview>

```html
<nve-textarea label="Beskriv saken" required requiredLabel="Obligatorisk"> </nve-textarea>
```

</CodeExamplePreview>

### Mørk bakgrunn

Bruk <span class="highlight">filled</span> for mørk bakgrunnsfarge

<CodeExamplePreview>

```html
<nve-textarea label="Beskriv saken" filled> </nve-textarea>
```

</CodeExamplePreview>

### Hjelpetekst

Bruk <span class="highlight">helpText</span> for å vise en tekst som nærmere bestemmer hva som skal fylles inn i inndatafeltet, og brukes som et tillegg til ledeteksten for inndatafeltet. Hjelpeteksten legges over inndatafeltet.

<CodeExamplePreview>

```html
<nve-textarea label="Beskriv saken" helpText="En tekst som presiserer hva som skal fylles inn"> </nve-textarea>
```

</CodeExamplePreview>

### Hint

Bruk <span class="highlight">hint</span> for å vise en kortfattet tekst, som kan brukes for å gi eksempler på inndata. Hintet legges under inndatafeltet.

<CodeExamplePreview>

```html
<nve-textarea label="Fugler i Norge" hint="Hint: Dompap, tiur, fossekall"> </nve-textarea>
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

Bruk attributtet <span class="highlight">disabled</span> for å hindre at brukeren kan endre innholdet.

<CodeExamplePreview>

```html
<nve-textarea label="Beskriv saken" disabled> </nve-textarea>
```

</CodeExamplePreview>

### Skrivebeskyttet

Bruk <span  class="highlight">readonly</span> for å stenge mulighet for å endre innholdet

<CodeExamplePreview>

```html
<nve-textarea label="Beskriv saken" readonly value="Dette får du ikke endret"></nve-textarea>
```

</CodeExamplePreview>

### Antall rader

Bruk <span class="highlight">rows</span> for å velge høyde. Standard er to rader

<CodeExamplePreview>

```html
<nve-textarea label="Beskriv saken" rows="5" value="5 rader"></nve-textarea>

<nve-textarea label="Beskriv saken" value="2 rader"></nve-textarea>
```

</CodeExamplePreview>

### Endring av størrelse

Om man ikke ønsker at bruker kan endre størrelsen på textarea kan man legge på <span class="highlight">resize: none</span> i css på <span class="highlight">textarea</span>-delen:

<CodeExamplePreview>

```html
<nve-textarea class="textarea-1" label="Beskriv saken"></nve-textarea>
<style>
  .textarea-1::part(textarea) {
    resize: none;
  }
</style>
```

</CodeExamplePreview>

### Maksimal bredde

Hvis du vil gjøre textarea smalere enn 100%, kan du bruke <span class="highlight">--textarea-max-width</span> css-property til det.

<CodeExamplePreview>

```html
<nve-textarea label="Beskriv saken" style="--textarea-max-width:100px;"></nve-textarea>
```

</CodeExamplePreview>

<CodeExamplePreview>

```html
<form id="test-form1">
  <nve-textarea id="txt1" label="Beskriv saken"></nve-textarea>

  <button type="submit">Send inn</button>
</form>

<script type="module">
  const form = document.querySelector('#test-form1');
  const nameInput = document.querySelector('#txt1');
  nameInput.validationRules = [window.rules.maxLength(1, 'too many')];

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = window.validateForm(form);
    console.log('validateForm called, result:', isValid);
  });
</script>
```

</CodeExamplePreview>

<CodeExamplePreview>

```html
<form id="test-form">
  <nve-textarea id="txt" label="Beskriv saken"></nve-textarea>

  <button type="submit">Send inn</button>
</form>

<script type="module">
  const form = document.querySelector('#test-form');
  const nameInput = document.querySelector('#txt');
  nameInput.validationRulesQuasar = [
    (value) => value.trim() !== '' || 'Field is required',
    (value) => value.length >= 3 || 'Minimum 3 characters',
    (value) => value.length <= 20 || 'Maximum 20 characters',
    (value) => value.startsWith('s') || 'Must start with s',
  ];

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = window.validateFormQuasar(form);
    console.log('validateForm called, result:', isValid);
  });
</script>
```

</CodeExamplePreview>

<CodeExamplePreview>

```html
<form>
  <nve-textarea label="Beskriv saken" errorMessage="error"></nve-textarea>

  <button type="submit">Send inn</button>
</form>
```

</CodeExamplePreview>

## Tilgjengelighet

<span class="highlight">nve-textarea</span> er bygget på et native <span class="highlight">&lt;textarea&gt;</span> og bruker en tilknyttet <a href="#ledetekst-og-tooltip">ledetekst</a>. Når feltet får fokus vil skjermlesere lese opp ledeteksten, slik at brukeren forstår hva som skal fylles inn.

I tillegg brukes aria-describedby for å knytte supplerende tekst til feltet. Når <span class="highlight">helpText</span>, <span class="highlight">hint</span> eller <span class="highlight">errorMessage</span> er satt vil skjermlesere normalt lese dem opp i forbindelse med fokus på feltet (ved bruk av <span class="highlight">aria-describedby</span>).

Ikoner i <span class="highlight">nve-textarea</span> er dekorative og ikke ment som eneste informasjonsbærer. Skjermlesere informerer brukere når tekstfeltet er skrivebeskyttet, men ikke når det er deaktivert.
