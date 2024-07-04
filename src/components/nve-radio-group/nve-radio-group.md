```html:preview
<nve-radio-group label="Vennligst velg en av disse">
  <nve-radio value="valg1">1</nve-radio>
  <nve-radio value="valg2">2</nve-radio>
  <nve-radio value="valg3">3</nve-radio>
</nve-radio-group>
```

## Eksempler

### Med radioknapper

```html:preview
<nve-radio-group label="Vennligst velg en av disse">
  <nve-radio-button value="valg1">1</nve-radio-button>
  <nve-radio-button value="valg2">2</nve-radio-button>
  <nve-radio-button value="valg3">3</nve-radio-button>
</nve-radio-group>
```

### Retning

Bruk `orientation` for å velge retning. `vertical` er standard.

```html:preview
<nve-radio-group label="vertical">
  <nve-radio value="valg1">1</nve-radio>
  <nve-radio value="valg2">2</nve-radio>
</nve-radio-group>
<br/>
<nve-radio-group label="horizontal" orientation="horizontal">
  <nve-radio value="valg1">1</nve-radio>
  <nve-radio value="valg2">2</nve-radio>
</nve-radio-group>
```

### Valgt verdi

`value` gir deg valgt radioknapp sin `value`. Klikk på elementet og sjekk konsollet for å se `value`.

```html:preview
<nve-radio-group label="Vennligst velg 1 eller 2" onclick="console.log('value er ' + value)">
  <nve-radio value="valg1">1</nve-radio>
  <nve-radio value="valg2">2</nve-radio>
</nve-radio-group>
```

Du kan også sette `value` selv.

```html:preview
<nve-radio-group label="Her er 2 valgt på forhånd" value = "valg2">
  <nve-radio value="valg1">1</nve-radio>
  <nve-radio value="valg2">2</nve-radio>
</nve-radio-group>
```

### Deaktivering

Bruk `disabled` for å deaktivere hele gruppa.
TODO: Dette virker ikke, må fikses.

```html:preview
<nve-radio-group label="disabled" disabled>
    <nve-radio value="valg1">1</nve-radio>
    <nve-radio value="valg2">2</nve-radio>
</nve-radio-group>
<br/>
<nve-radio-group label="enabled">
  <nve-radio value="valg1">1</nve-radio>
  <nve-radio value="valg2">2</nve-radio>
</nve-radio-group>
```

### Obligatorisk

Bruk `required` for å tvinge bruker til å velge minst ett av valgene i gruppa og legg inn en feilmelding i `errorMessage`.
Bruk `requiredlabel` hvis du vil vise noe annet enn `*Obligatorisk`. Gruppa må ligge i en `<form>` for at validering skal funke.

```html:preview
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-radio-group label="Her må du velge noe" required errorMessage="Du må bestemme deg">
    <nve-radio value="valg1">1</nve-radio>
    <nve-radio value="valg2">2</nve-radio>
  </nve-radio-group>
  <br/>
  <nve-radio-group label="Please choose" required requiredLabel="*Required" errorMessage="Please decide">
    <nve-radio value="valg1">1</nve-radio>
    <nve-radio value="valg2">2</nve-radio>
  </nve-radio-group>
  <br/>
  <nve-button type="submit" variant="primary">Submit</nve-button>
</form>
```
