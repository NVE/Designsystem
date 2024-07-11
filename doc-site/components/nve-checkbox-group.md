---
layout: component
---

<CodeExamplePreview>

```html
<nve-checkbox-group label="Vennligst velg 1 og/eller 2">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

## Eksempler

### Retning

Bruk `orientation` for å velge retning. `vertical` er standard.

<CodeExamplePreview>

```html
<nve-checkbox-group label="vertical">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
<nve-checkbox-group label="horizontal" orientation="horizontal">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Valgte verdier

TODO: Dette funker ikke. Lage et Vue-eksempel i stedet?

`selectedValues` gir deg en liste av valgte avkrysningsbokser sin `value`. Klikk på elementet og sjekk konsollet for å se `selectedValues`.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Vennligst velg 1 eller 2" onclick="console.log('selectedValues er ' + selectedValues)">
  <nve-checkbox value="value1">1</nve-checkbox>
  <nve-checkbox value="value2">2</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Hjelpetekst

Bruk `tooltip` for å legge til et info-ikon etter ledetekst. Ikonet vises ikke hvis ikke `label` er satt.

<CodeExamplePreview>

```html
<nve-checkbox-group label="Svev over ikonet for å se hjelpeteksten" tooltip="Hjelpetekst">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Deaktivering

Bruk `disabled` for å deaktivere hele gruppa.

<CodeExamplePreview>

```html
<nve-checkbox-group label="disabled" disabled>
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>

<nve-checkbox-group label="enabled">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

</CodeExamplePreview>

### Obligatorisk

Bruk `required` for å tvinge bruker til å velge minst ett av valgene i gruppa og legg inn en feilmelding i `errorMessage`.
Bruk `requiredlabel` hvis du vil vise noe annet enn `*Obligatorisk`. Gruppa må ligge i en `<form>` for at validering skal funke.

<CodeExamplePreview arrangeComponentsVertically>

```html
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-checkbox-group label="Her må du velge noe" required errorMessage="Velg minst en">
    <nve-checkbox>1</nve-checkbox>
    <nve-checkbox>2</nve-checkbox>
  </nve-checkbox-group>
  <nve-checkbox-group
    label="Please choose at least one"
    required
    requiredLabel="*Required"
    errorMessage="Please choose at least one"
  >
    <nve-checkbox>1</nve-checkbox>
    <nve-checkbox>2</nve-checkbox>
  </nve-checkbox-group>
  <nve-button type="submit">Submit</nve-button>
</form>
```

</CodeExamplePreview>
