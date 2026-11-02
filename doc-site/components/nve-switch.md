---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-switch></nve-switch>
```

</CodeExamplePreview>

<nve-message-card variant="primary" label="Native sjekkboks-attributter" size="compact">
  <p>
    <span class="highlight">nve-switch</span> bygger på et native <span class="highlight">&lt;input&gt;</span>-element
    med type <span class="highlight">checkbox</span> og støtter relevante
    egenskaper fra sjekkboksen:
  </p>

  <ul>
    <li><span class="highlight">checked</span></li>
    <li><span class="highlight">disabled</span></li>
    <li> <span class="highlight">value</span> – kan brukes for å knytte en verdi til bryteren.</li> 
  </ul>

  <br>

  <p>
     Komponenten videresender relevante hendelser fra det interne input-elementet slik at de kan lyttes til utenfor komponentens Shadow DOM.
  </p>

  <ul>
    <li>
      <span class="highlight">change</span> – sendes når bryterens status endres.
    </li>
  </ul>

  <br>

  <p>
    Det native <span class="highlight">switch</span>-attributtet brukes foreløpig ikke på grunn av
    begrenset nettleserstøtte. Komponenten bruker i stedet
    <span class="highlight">role="switch"</span>.
  </p>
</nve-message-card>

## Retningslinjer

- Gi alltid en tydelig <span class="highlight">label</span>.
- Ikke endre <span class="highlight">label</span> basert på bryterens tilstand. Labelen skal beskrive hva bryteren styrer, ikke hvilken handling som utføres. Bruk for eksempel «Vis info som fast label i stedet for å bytte mellom «Vis info og «Skjul info.
- Bruk <span class="highlight">nve-switch</span> når valget representerer en av/på-tilstand og endringen skal få effekt med én gang.
- Hvis endringen utløser en asynkron operasjon, oppdater <span class="highlight">checked</span> med én gang for å gi umiddelbar tilbakemelding, og rull tilbake dersom operasjonen feiler.

## Eksempler

### Varianter

Du kan bruke <span class="highlight">variant</span> for å sette farger (når bryteren er på) :

- <span class="highlight">default</span> som er standard
- <span class="highlight">primary</span>

<CodeExamplePreview>

```html
<nve-switch checked>Default</nve-switch> <nve-switch checked variant="primary">Primary</nve-switch>
```

</CodeExamplePreview>

### Med ikoner

Bruk <span class="highlight">officon</span>- eller <span class="highlight">onicon</span>-sporet for å inkludere ikoner.

<CodeExamplePreview>

```html
<nve-switch>
  <nve-icon slot="officon" name="light_mode"> </nve-icon>
  <nve-icon slot="onicon" name="dark_mode"></nve-icon>
</nve-switch>
```

</CodeExamplePreview>

Se også [nve-darkmode-switch](/components/nve-darkmode-switch)

### Label

For å sette label foran bryteren bruk <span class="highlight">label-position="start"</span>.
<span class="highlight">end</span> er default.
<CodeExamplePreview>

```html
<nve-switch> Slå på </nve-switch> <nve-switch label-position="start"> Slå på </nve-switch>
```

</CodeExamplePreview>

### Gruppe med brytere

Hvis flere brytere presenteres som en logisk gruppe med en synlig ledetekst, skal gruppen markeres semantisk på én av følgende måter:

- Plasser bryterne i et element med `role="group"`, og bruk `aria-labelledby` for å referere til elementet som inneholder gruppens ledetekst.

<CodeExamplePreview>

```html
<div style="display: flex; flex-direction: column" role="group" aria-labelledby="label">
  <span id="label">Gruppe</span>
  <nve-switch> Bryter 1 </nve-switch>
  <nve-switch> Bryter 2 </nve-switch>
</div>
```

</CodeExamplePreview>

- Plasser bryterne i et `<fieldset>`, og bruk `<legend>` som ledetekst for gruppen.

<CodeExamplePreview>

```html
<fieldset style="display: flex; flex-direction: column">
  <legend>Gruppe</legend>
  <nve-switch> Bryter 1 </nve-switch>
  <nve-switch> Bryter 2 </nve-switch>
</fieldset>
```

</CodeExamplePreview>

### Deaktivert

<nve-message-card variant="warning" label="Obs!" size="compact">
  <p>
    En deaktivert bryter (<span class="highlight">disabled</span>) kan ikke få fokus og blir derfor ofte ikke oppdaget av
    brukere som navigerer med tastatur eller skjermleser. Bruk <span class="highlight">disabled</span> med omhu, og vurder
    å gi en tydelig forklaring i tekst på hvorfor feltet er deaktivert.
  </p>
</nve-message-card>

Bruk attributtet <span class="highlight">disabled</span> for å hindre at bryter kan trykkes på.

<CodeExamplePreview>

```html
<nve-switch disabled> </nve-switch>
```

</CodeExamplePreview>

## Tilgjengelighet

### Ledeteksten

Bryter må alltid ha en ledetekst.

**Viktig:** Ledeteksten til en bryter skal ikke endres når bryterens tilstand endres. Ledeteksten skal beskrive hva bryteren styrer, mens bryterens av/på-tilstand formidles av selve bryteren.
<br>
Unngå derfor å bytte mellom for eksempel «Vis varsler» og «Skjul varsler» når bryterens tilstand endres.

### Beskrivelse

<span class="highlight">nve-switch</span> er en webkomponent med Shadow DOM. ARIA-referanser som <span class="highlight">aria-describedby</span>, som baserer seg på en ID-referanse til et annet element, kan ikke uten videre brukes på tvers av Shadow DOM-grensen.
Hvis bryteren trenger mer forklaring enn det som er hensiktsmessig å ha i ledeteksten, kan du plassere en <a href="./nve-toggletip" class="highlight">nve-toggletip</a> ved siden av bryteren med utfyllende informasjon. Ledeteksten til bryteren bør fortsatt være tydelig nok til at brukeren kan forstå hva bryteren styrer uten å måtte åpne tilleggsinformasjonen.
