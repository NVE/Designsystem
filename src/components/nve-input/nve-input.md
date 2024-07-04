```html:preview
<nve-input label="Har kan du skrive akkurat hva du vil"></nve-input>
```

## Eksempler

### Mørk bakgrunn

Bruk `filled` for mørk bakgrunnsfarge

```html:preview
<nve-input value="filled" filled></nve-input>
<br/>
<nve-input value="ikke filled"></nve-input>
```

### Verktøyhint

`nve-input` kan ha ledetekst med verktøyhint hvis du putter ledeteksten i sporet `label`

```html:preview
<nve-input>
    <nve-label value="Svev over ikonet" slot="label" tooltip="Hjelpetekst"><nve-label>
</nve-input>
```

### Sletteknapp

Bruk `clearable` for å vise en sletteknapp bak teksten

```html:preview
<nve-input value="Slett meg ved å trykke på ikonet til høyre" clearable></nve-input>
```

### Deaktivering

Bruk `disabled` for å deaktivere feltet.
Du kan også vise et låse-ikon ved å legge `nve-icon` i sporet `suffix`.

```html:preview
<nve-input value="aktiv"></nve-input>
<br/>
<nve-input disabled value="deaktivert"></nve-input>
<br/>
<nve-input disabled value="deaktivert med låse-ikon">
    <nve-icon slot="suffix" name="Lock"></nve-icon>
</nve-input>
```

### Skrivebeskyttet

Bruk `readonly` for å stenge mulighet for å endre innholdet

```html:preview
<nve-input readonly value="Dette får du ikke endret"></nve-input>
<br/>
<nve-input value="men dette kan du endre"></nve-input>
```

### Obligatorisk

Bruk `required` for å tvinge bruker til å skrive noe og legg inn en feilmelding i `errorMessage` om du ikke vil ha standard-feilmeldinga.
Bruk `requiredlabel` hvis du vil vise noe annet enn `*Obligatorisk`. Feltet må ligge i en `<form>` for at validering skal funke.

```html:preview
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-input label="Hva synes du?" required errorMessage="Her må du skrive noe"></nve-input>
  <br/>
  <nve-input label="What do you think?" required requiredLabel="*Required" errorMessage="Please answer"></nve-input>
  <br/>
  <nve-button type="submit" variant="primary">Submit</nve-button>
</form>
```

### Constraint validation

I tillegg til `required` støtter vi de samme reglene som SlInput, men pass på at du setter en feilmelding i `errorMessage`.
Feltet må ligge i en `<form>` for at validering skal funke.
Her er noen eksempler.

```html:preview
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-input required minlength=3 maxLength=5 label="Minimum 3 og maks 5 tegn" errorMessage="Mellom 3 og 5 tegn her, takk"></nve-input>
  <br/>
  <nve-input required type="number" min=42 max=42  label="Svaret på livet, universet og alt"  errorMessage="Helt feil!"></nve-input>
  <br/>
  <nve-input required type="date" min='1980-01-01' max='1989-12-31' label="Velg en dato på 80-tallet"  errorMessage="Her er det bare 80-tallet som gjelder"></nve-input>
  <br/>
  <nve-button type="submit" variant="primary">Submit</nve-button>
</form>
```

### Datatyper

I tillegg til tekst, støtter vi de <a href="https://shoelace.style/components/input#input-types" target="\_blank">samme datatypene som `SlInput`</a>.

`step` i kombinasjon med number helper deg å håndterer desimaltall. Du kan bruke både komma og punktum som desimalskilletegn.
Her er noen eksempler:

```html:preview
<nve-input type="number" label="Kun heltall"></nve-input>
<br/>
<nve-input type="number" step="0.1" label="Maks en desimal"></nve-input>
<br/>
<nve-input type="number" step="any" label="Bruk så mange desimaler du vil"></nve-input>
<br/>
<nve-input type="datetime-local" label="Skriv inn eller velg dato og tidspunkt"></nve-input>
```

### Størrelse

Bruk `size` for å velge høyde. Ledeteksten tilpasses automatisk, mens skrifttypen til innholdet er fast uansett. `medium` er standard.

```html:preview
<nve-input size="small" label="small" value="innhold"></nve-input>
<br/>
<nve-input label="medium" value="innhold"></nve-input>
<br/>
<nve-input size="large" label="large" value="innhold"></nve-input>
```
