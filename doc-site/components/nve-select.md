---
layout: component
---

<CodeExamplePreview>

```html
<nve-select label="Ledetekst">
  <nve-option value="valg1">Hummer</nve-option>
  <nve-option value="valg2">Kanari</nve-option>
</nve-select>
```

</CodeExamplePreview>

## Eksempler

### Størrelse

Bruk `size` for å velge størrelse. `small` er standard.

<CodeExamplePreview>

```html
<nve-select label="small">
  <nve-option value="valg1">Hummer</nve-option>
  <nve-option value="valg2">Kanari</nve-option>
</nve-select>

<nve-select label="medium" size="medium">
  <nve-option value="valg1">Hummer</nve-option>
  <nve-option value="valg2">Kanari</nve-option>
</nve-select>

<nve-select label="large" size="large">
  <nve-option value="valg1">Hummer</nve-option>
  <nve-option value="valg2">Kanari</nve-option>
</nve-select>
```

</CodeExamplePreview>

### Obligatorisk

Bruk `required` for å tvinge bruker til å skrive noe og legg inn en feilmelding i `errorMessage` om du ikke vil ha standard-feilmeldinga.
Bruk `requiredlabel` hvis du vil vise noe annet enn `*Obligatorisk`. Feltet må ligge i en `<form>` for at validering skal funke, og hver `nve-option` må ha en unik `value`.

<CodeExamplePreview>

```html
<!-- Bruker preventDefault så ikke sida lastes på nytt når du trykker på knappen -->
<form onsubmit="event.preventDefault();">
  <nve-select label="Hva synes du?" required errorMessage="Her må du velge noe">
    <nve-option value="alt1">Ja</nve-option>
    <nve-option value="alt2">Tja</nve-option>
    <nve-option value="alt3">Njaa</nve-option>
  </nve-select>

  <nve-select label="What do you think?" required requiredLabel="*Required" errorMessage="Please answer">
    <nve-option value="alt1">Oh, yes!</nve-option>
    <nve-option value="alt2">Yes, please</nve-option>
    <nve-option value="alt3">Not so much</nve-option>
  </nve-select>

  <nve-button type="submit">Submit</nve-button>
</form>
```

</CodeExamplePreview>
