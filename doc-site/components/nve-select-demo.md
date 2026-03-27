---
layout: component
---

TODO: Start med et enklest mulig kodeeksempel i html for å kunne vise komponenten.
<CodeExamplePreview>

```html
<label for="pet-select">Choose a pet:</label>

<select id="pet-select">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat" label="test">Cat</option>
  <option disabled value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>

<nve-select-demo id="pet-select" label="give me a dog">
  <nve-option-demo value="dog" label="Dog">Dog</nve-option-demo>
  <nve-option-demo value="doberman" label="Doberman"></nve-option-demo>
  <nve-option-demo value="cat" label="Cat">Cat</nve-option-demo>
  <nve-option-demo value="hamster" label="Hamster">Hamster</nve-option-demo>
  <nve-option-demo value="parrot" label="Parrot">Parrot</nve-option-demo>
  <nve-option-demo value="spider" label="Spider">Spider</nve-option-demo>
  <nve-option-demo value="goldfish" label="">Goldfish</nve-option-demo>
</nve-select-demo>

<nve-select-demo id="pet-select" label="give me a dog" multiselect>
  <nve-option-demo value="dog">Dog</nve-option-demo>
  <nve-option-demo value="doberman">Doberman</nve-option-demo>
  <nve-option-demo value="cat">Cat</nve-option-demo>
  <nve-option-demo value="hamster">Hamster</nve-option-demo>
  <nve-option-demo value="parrot">Parrot</nve-option-demo>
  <nve-option-demo value="spider">Spider</nve-option-demo>
  <nve-option-demo value="goldfish">Goldfish</nve-option-demo>
</nve-select-demo>
```

</CodeExamplePreview>

TODO: Skriv evt. generelle tips som ikke passer å ha i @JsDoc. Pass på at det ikke blir dobbelt opp med det du har skrevet i @JsDoc.

## Eksempler

Legg eksempler på funksjonalitet her. Hvert tema skal ha egen overskrift på nivå 3.

### TODO: Eksempel 1

### TODO: Eksempel 2

osv..:)
