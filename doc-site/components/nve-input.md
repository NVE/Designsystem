---
layout: component
---

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-input label="Har kan du skrive akkurat hva du vil"></nve-input>
```

</CodeExamplePreview>

## Eksempler

### Mørk bakgrunn

Bruk `filled` for mørk bakgrunnsfarge

<CodeExamplePreview>

```html
<nve-input value="filled" filled></nve-input>

<nve-input value="ikke filled"></nve-input>
```

</CodeExamplePreview>

### Verktøyhint

`nve-input` kan ha ledetekst med verktøyhint hvis du putter ledeteksten i sporet `label`

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-input>
    <nve-label value="Svev over ikonet" slot="label" tooltip="Hjelpetekst"><nve-label>
</nve-input>
```

</CodeExamplePreview>

### Sletteknapp

Bruk `clearable` for å vise en sletteknapp bak teksten

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-input value="Slett dette ved trykke ikonet til høyre" clearable></nve-input>
```

</CodeExamplePreview>

### Deaktivering

Bruk `disabled` for å deaktivere feltet.
Du kan også vise et låse-ikon ved å legge `nve-icon` i sporet `suffix`.

<CodeExamplePreview>

```html
<nve-input value="aktiv"></nve-input>
<nve-input disabled value="deaktivert"></nve-input>
<nve-input disabled value="deaktivert med ikon">
  <nve-icon slot="suffix" name="Lock"></nve-icon>
</nve-input>
```

</CodeExamplePreview>

### Skrivebeskyttet

Bruk `readonly` for å stenge mulighet for å endre innholdet

<CodeExamplePreview>

```html
<nve-input readonly value="Dette får du ikke endret"></nve-input>

<nve-input value="men dette kan du endre"></nve-input>
```

</CodeExamplePreview>

### Obligatorisk

Bruk `required` for å tvinge bruker til å skrive noe og legg inn en feilmelding i `errorMessage` om du ikke vil ha standard-feilmeldinga.
Bruk `requiredlabel` hvis du vil vise noe annet enn `*Obligatorisk`. Feltet må ligge i en `<form>` for at validering skal funke.

<CodeExamplePreview arrangeComponentsVertically>

```html
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-input label="Hva synes du?" required errorMessage="Her må du skrive noe"></nve-input>
  <nve-input label="What do you think?" required requiredLabel="*Required" errorMessage="Please answer"></nve-input>
  <nve-button type="submit">Submit</nve-button>
</form>
```

</CodeExamplePreview>

### Constraint validation

I tillegg til `required` støtter vi de samme reglene som SlInput, men pass på at du setter en feilmelding i `errorMessage`.
Feltet må ligge i en `<form>` for at validering skal funke.
Her er noen eksempler.

<CodeExamplePreview arrangeComponentsVertically>

```html
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-input
    required
    minlength="3"
    maxLength="5"
    label="Minimum 3 og maks 5 tegn"
    errorMessage="Mellom 3 og 5 tegn her, takk"
  ></nve-input>

  <nve-input
    required
    type="number"
    min="42"
    max="42"
    label="Svaret på livet, universet og alt"
    errorMessage="Helt feil!"
  ></nve-input>

  <nve-input
    required
    type="date"
    min="1980-01-01"
    max="1989-12-31"
    label="Velg en dato på 80-tallet"
    errorMessage="Her er det bare 80-tallet som gjelder"
  ></nve-input>

  <nve-button type="submit" variant="primary">Submit</nve-button>
</form>
```

</CodeExamplePreview>

### Datatyper

I tillegg til tekst, støtter vi de <a href="https://shoelace.style/components/input#input-types" target="\_blank">samme datatypene som `SlInput`</a> som igjen støtter de fleste datatypene til <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="\_blank">html sin `<input>`</a>.

`step` i kombinasjon med number helper deg å håndterer desimaltall. Du kan bruke både komma og punktum som desimalskilletegn.
Her er noen eksempler:

<CodeExamplePreview>

```html
<nve-input type="number" label="Kun heltall"></nve-input>
<nve-input type="number" step="0.1" label="Maks en desimal"></nve-input>
<nve-input type="number" step="any" label="Bruk så mange desimaler du vil"></nve-input>
<nve-input type="datetime-local" label="Skriv inn eller velg dato og tidspunkt"></nve-input>
<nve-input type="date" label="Skriv inn eller velg dato"></nve-input>
<nve-input type="time" label="Skriv inn eller velg tidspunkt"></nve-input>
<nve-input type="month" label="Skriv inn eller velg måned og år"></nve-input>
<nve-input
  type="number"
  value="Date().getFullYear()"
  label="Skriv inn eller velg år"
  min="1900"
  max="2100"
  class="year-input"
></nve-input>

<script>
  // setter dette året som standard-valg i år-input'en
  const yearInput = document.querySelector('.year-input');
  yearInput.value = new Date().getFullYear();
</script>
```

</CodeExamplePreview>

### Størrelse

Bruk `size` for å velge høyde. Ledeteksten tilpasses automatisk, mens skrifttypen til innholdet er fast uansett. `medium` er standard.

<CodeExamplePreview>

```html
<nve-input size="small" label="small" value="innhold"></nve-input>
<nve-input label="medium" value="innhold"></nve-input>
<nve-input size="large" label="large" value="innhold"></nve-input>
```

</CodeExamplePreview>
