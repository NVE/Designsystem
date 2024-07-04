```html:preview
<nve-textarea label="Har kan du skrive akkurat hva du vil"></nve-textarea>
```

## Eksempler

### Mørk bakgrunn

Bruk `filled` for mørk bakgrunnsfarge

```html:preview
<nve-textarea value="filled" filled></nve-textarea>
<br/>
<nve-textarea value="ikke filled"></nve-textarea>
```

### Verktøyhint

Bruk `label` og `tooltip` for å vise ledetekst med verktøyhint

```html:preview
<nve-textarea label="Svev over ikonet" tooltip="Hjelpetekst">
</nve-textarea>
```

### Deaktivering

Bruk `disabled` for å deaktivere feltet. Låse-ikon vises automatisk.

```html:preview
<nve-textarea value="aktiv"></nve-textarea>
<br/>
<nve-textarea disabled value="deaktivert"></nve-textarea>
```

### Skrivebeskyttet

Bruk `readonly` for å stenge mulighet for å endre innholdet

```html:preview
<nve-textarea readonly value="Dette får du ikke endret"></nve-textarea>
<br/>
<nve-textarea value="men dette kan du endre"></nve-textarea>
```

### Obligatorisk

Bruk `required` for å tvinge bruker til å skrive noe og legg inn en feilmelding i `errorMessage` om du ikke vil ha standard-feilmeldinga.
Bruk `requiredlabel` hvis du vil vise noe annet enn `*Obligatorisk`. Feltet må ligge i en `<form>` for at validering skal funke.

```html:preview
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-textarea label="Hva synes du?" required errorMessage="Her må du skrive noe"></nve-textarea>
  <br/>
  <nve-textarea label="What do you think?" required requiredLabel="*Required" errorMessage="Please answer"></nve-textarea>
  <br/>
  <nve-button type="submit" variant="primary">Submit</nve-button>
</form>
```

### Validering av lengde

I tillegg til `required` støtter vi `minLength` og `maxLength` for å validere lengden på innholdet. Pass på at du setter en feilmelding i `errorMessage`.
Feltet må ligge i en `<form>` for at validering skal funke.

```html:preview
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-textarea required minlength=3 maxLength=5 label="Minimum 3 og maks 5 tegn" errorMessage="Mellom 3 og 5 tegn her, takk"></nve-textarea>
  <br/>
  <nve-button type="submit" variant="primary">Submit</nve-button>
</form>
```

### Antall rader

TODO: Denne vil ikke virke før vi fletter inn main.

Bruk `rows` for å velge høyde. Standard er to rader

```html:preview
<nve-textarea rows="5" value="5 rader"></nve-textarea>
<br/>
<nve-textarea value="2 rader"></nve-textarea>
```
