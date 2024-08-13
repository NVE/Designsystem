---
layout: component
---

<CodeExamplePreview>

```html
<nve-stepper
  steps='
  [
  {"title":"Steg 1","description":"Beskrivelse av steg 1","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"Beskrivelse av steg 2","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Beskrivelse av steg 3","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>
```

</CodeExamplePreview>

## Eksempler

Se dokumentasjon med eksempler på hvordan du bruker komponenten i Vue [her](/introduction/forDevelopers/codeExamples/stepper.html).

### Retning

Bruk `orientation` for å velge retning. `horizontal` er standard.

<CodeExamplePreview>

```html
<nve-label>horizontal</nve-label>
<nve-stepper
  steps='
  [
  {"title":"Steg 1","description":"Beskrivelse av steg 1","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"Beskrivelse av steg 2","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Beskrivelse av steg 3","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>

<nve-label>vertical</nve-label>
<nve-stepper
  orientation="vertical"
  steps='
  [
  {"title":"Steg 1","description":"Beskrivelse av steg 1","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"Beskrivelse av steg 2","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Beskrivelse av steg 3","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>
```

</CodeExamplePreview>

### Mobil-versjon

Stepperen vises automatisk i en egen mobil-versjon på små skjermer.
Beskrivelsen av stegene vises ikke i denne versjonen.
Bruk `displayMobileVersion` for å alltid vise mobil-versjonen selv på brede skjermer.
Bruk `hideMobileStepButtons` for å skjule knappene i mobil-versjon.

<CodeExamplePreview>

```html
<nve-label>Med knapper</nve-label>
<nve-stepper
  displayMobileVersion
  steps='
  [
  {"title":"Steg 1", "state":2,"isSelected":true,"readyForEntrance":true},
  {"title":"Steg 2", "state":2,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3", "state":2,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>

<nve-label>Uten knapper</nve-label>
<nve-stepper
  displayMobileVersion
  hideMobileStepButtons
  steps='
  [
  {"title":"Steg 1", "state":2,"isSelected":true,"readyForEntrance":true},
  {"title":"Steg 2", "state":2,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3", "state":2,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>
```

</CodeExamplePreview>
