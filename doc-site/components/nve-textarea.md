---
layout: component
---

<CodeExamplePreview>

```html
<nve-textarea label="Her kan du skrive akkurat hva du vil"></nve-textarea>
```

</CodeExamplePreview>

## Eksempler

### Mørk bakgrunn

Bruk `filled` for mørk bakgrunnsfarge

<CodeExamplePreview>

```html
<nve-textarea value="filled" filled></nve-textarea>

<nve-textarea value="ikke filled"></nve-textarea>
```

</CodeExamplePreview>

### Verktøyhint

Bruk `label` og `tooltip` for å vise ledetekst med verktøyhint

<CodeExamplePreview>

```html
<nve-textarea label="Svev over ikonet" tooltip="Hjelpetekst"> </nve-textarea>
```

</CodeExamplePreview>

### Deaktivering

Bruk `disabled` for å deaktivere feltet. Låse-ikon vises automatisk.

<CodeExamplePreview>

```html
<nve-textarea value="aktiv"></nve-textarea>

<nve-textarea disabled value="deaktivert"></nve-textarea>
```

</CodeExamplePreview>

### Skrivebeskyttet

Bruk `readonly` for å stenge mulighet for å endre innholdet

<CodeExamplePreview>

```html
<nve-textarea readonly value="Dette får du ikke endret"></nve-textarea>

<nve-textarea value="men dette kan du endre"></nve-textarea>
```

</CodeExamplePreview>

### Obligatorisk

Bruk `required` for å tvinge bruker til å skrive noe og legg inn en feilmelding i `errorMessage` om du ikke vil ha standard-feilmeldinga.
Bruk `requiredlabel` hvis du vil vise noe annet enn `*Obligatorisk`. Feltet må ligge i en `<form>` for at validering skal funke.

<CodeExamplePreview>

```html
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-textarea label="Hva synes du?" required errorMessage="Her må du skrive noe"></nve-textarea>

  <nve-textarea
    label="What do you think?"
    required
    requiredLabel="*Required"
    errorMessage="Please answer"
  ></nve-textarea>

  <nve-button type="submit">Submit</nve-button>
</form>
```

</CodeExamplePreview>

### Validering av lengde

I tillegg til `required` støtter vi `minLength` og `maxLength` for å validere lengden på innholdet. Pass på at du setter en feilmelding i `errorMessage`.
Feltet må ligge i en `<form>` for at validering skal funke.

<CodeExamplePreview>

```html
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-textarea
    required
    minlength="3"
    maxLength="5"
    label="Minimum 3 og maks 5 tegn"
    errorMessage="Mellom 3 og 5 tegn her, takk"
  ></nve-textarea>

  <nve-button type="submit" variant="primary">Submit</nve-button>
</form>
```

</CodeExamplePreview>

### Antall rader

Bruk `rows` for å velge høyde. Standard er to rader

<CodeExamplePreview>

```html
<nve-textarea rows="5" value="5 rader"></nve-textarea>

<nve-textarea value="2 rader"></nve-textarea>
```

</CodeExamplePreview>
