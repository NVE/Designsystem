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

### Hente eller sette verdi

Bruk `value` for å hente valgt verdi eller velge noe på forhånd.

<CodeExamplePreview>

```html
<nve-select value="valg2" label="Endre denne hvis du ikke vil ha foreslått valg">
  <nve-option value="valg1">Valg 1</nve-option>
  <nve-option value="valg2">Valg 2</nve-option>
  <nve-option value="valg3">Valg 3</nve-option>
</nve-select>
```

</CodeExamplePreview>

### Mørk bakgrunn

Bruk `filled` for mørk bakgrunnsfarge

<CodeExamplePreview>

```html
<nve-select value="filled" filled>
  <nve-option value="valg1">Valg 1</nve-option>
  <nve-option value="valg2">Valg 2</nve-option>
  <nve-option value="valg3">Valg 3</nve-option>
</nve-select>
```

</CodeExamplePreview>

### Flervalg

Bruk `multiple` for å tillate valg av flere verdier. Bruk `clearable` for å gjøre det enkelt å fjerne valgene.

<CodeExamplePreview>

```html
<nve-select multiple clearable label="Her kan du velge flere">
  <nve-option value="valg1">Hummer</nve-option>
  <nve-option value="valg2">Kanari</nve-option>
</nve-select>
```

</CodeExamplePreview>

Bruk `value` for å velge noe på forhånd. I html skilles valgene med mellomrom, så da kan ikke bruke mellomrom i `nve-option` sin `value`. I Javascript vil `value` være en tabell i stedet, så da er ikke mellomrom noen utfordring.

<CodeExamplePreview>

```html
<nve-select multiple clearable value="valg1 valg2" label="Her kan du velge flere">
  <nve-option value="valg1">Valg 1</nve-option>
  <nve-option value="valg2">Valg 2</nve-option>
  <nve-option value="valg3">Valg 3</nve-option>
</nve-select>
```

</CodeExamplePreview>

Bruk `max-options-visible` for å begrense hvor mange valg du vil vise.

### Størrelse

Bruk `size` for å velge størrelse. `small` er standard.

<CodeExamplePreview>

```html
<nve-select label="small" size="small">
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
