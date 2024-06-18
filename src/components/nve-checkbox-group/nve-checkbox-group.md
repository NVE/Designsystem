# Nve-checkbox-group

#### Brukes for å vise status eller antall.

```html:preview
<nve-checkbox-group label="Vennligst velg 1 og/eller 2">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

## Eksempler

### Retning

Bruk `orientation` for å velge retning.

```html:preview
<nve-checkbox-group label="vertical (default)">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
<br/>
<nve-checkbox-group label="horizontal" orientation="horizontal">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

### Hjelpetekst

Bruk `tooltip` for å legge til et info-ikon etter ledetekst. Ikonet vises ikke hvis ikke `label` er satt.

```html:preview
<nve-checkbox-group label="Svev over ikonet for å se hjelpeteksten" tooletip="Hjelpetekst">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

### Deaktivering

Bruk `disabled` for å deaktivere hele gruppa.

```html:preview
<nve-checkbox-group label="disabled" disabled>
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
<br/>
<nve-checkbox-group label="enabled">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

### Obligatorisk

Bruk `required` for å tvinge bruker til å velge minst ett av valgene i gruppa og legg inn en feilmelding i `errorMessage`.
Bruk `requiredlabel` hvis du vil vise noe annet enn `*Obligatorisk`. Gruppa må ligge i en `<form>` for at validering skal funke.

```html:preview
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-checkbox-group label="Her må du velge noe" required errorMessage="Velg minst en">
    <nve-checkbox>1</nve-checkbox>
    <nve-checkbox>2</nve-checkbox>
  </nve-checkbox-group>
  <br/>
  <nve-checkbox-group label="Please choose at least one" required requiredLabel="*Required" errorMessage="Please choose at least one">
    <nve-checkbox>1</nve-checkbox>
    <nve-checkbox>2</nve-checkbox>
  </nve-checkbox-group>
  <br/>
  <nve-button type="submit" variant="primary">Submit</nve-button>
</form>
```
