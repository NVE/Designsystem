---
meta:
  title: nve-checkbox-group
  description: Brukes for å vise status eller antall
layout: component
---

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

<nve-checkbox-group label="horizontal" orientation="horizontal">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

### Tooltip

Bruk `tooltip` for å legge til et info-ikon etter ledetekst. Ikonet vises ikke hvis ikke `label` er satt.

```html:preview
<nve-checkbox-group label="Svev over ikonet for å se hjelpeteksten" tooletip="Hjelpetekst">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

### Disabled

Bruk `disabled` for å deaktivere hele gruppa.

```html:preview
<nve-checkbox-group label="disabled" disabled>
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>

<nve-checkbox-group label="enabled">
  <nve-checkbox>1</nve-checkbox>
  <nve-checkbox>2</nve-checkbox>
</nve-checkbox-group>
```

### Required

Bruk `required` for å tvinge bruker til å velge minst ett av valgene i gruppa. Bruk `requiredlabel` hvis du vil vise noe annet enn `*Obligatorisk`. Gruppa må ligge i en `<form>` for at validering skal funke.

```html:preview
<form>
  <nve-checkbox-group label="Her må du velge noe" required>
    <nve-checkbox>1</nve-checkbox>
    <nve-checkbox>2</nve-checkbox>
  </nve-checkbox-group>

  <nve-checkbox-group label="Please choose at least one" required requiredLabel="*Required">
    <nve-checkbox>1</nve-checkbox>
    <nve-checkbox>2</nve-checkbox>
  </nve-checkbox-group>
</form>
```
