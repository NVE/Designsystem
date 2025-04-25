---
layout: component
---

TODO: Start med et enklest mulig kodeeksempel i html for å kunne vise komponenten.
<CodeExamplePreview>

```html
<div style="height:30vh">
  <form onsubmit="event.preventDefault();">
    <nve-combobox
      label="Ny label"
      filled
      required
      singular
      values='[
        { "label": "Cat", "value": "cat" },
        { "label": "Dog", "value": "dog" },
        { "label": "Bird", "value": "bird" },
        { "label": "Fish", "value": "fish" },
        { "label": "Rabbit", "value": "rabbit" },
        { "label": "Horse", "value": "horse" },
        { "label": "Snake", "value": "snake" },
        { "label": "Turtle", "value": "turtle" },
        { "label": "Hamster", "value": "hamster" },
        { "label": "Frog", "value": "frog" }
    ]'
    ></nve-combobox>
    <nve-button type="submit">SUBMIT</nve-button>
  </form>
</div>
```

</CodeExamplePreview>

TODO: Skriv evt. generelle tips som ikke passer å ha i @JsDoc. Pass på at det ikke blir dobbelt opp med det du har skrevet i @JsDoc.

## Eksempler

Legg eksempler på funksjonalitet her. Hvert tema skal ha egen overskrift på nivå 3

### Bare velge en verdi

<CodeExamplePreview>

```html
<div style="height:30vh">
  <form>
    <nve-combobox
      values='[
        { "label": "Cat", "value": "cat" },
        { "label": "Dog", "value": "dog" },
        { "label": "Bird", "value": "bird" },
        { "label": "Fish", "value": "fish" },
        { "label": "Rabbit", "value": "rabbit" },
        { "label": "Horse", "value": "horse" },
        { "label": "Snake", "value": "snake" },
        { "label": "Turtle", "value": "turtle" },
        { "label": "Hamster", "value": "hamster" },
        { "label": "Frog", "value": "frog" }
    ]'
    >
    </nve-combobox>
  </form>
</div>
```

</CodeExamplePreview>

### TODO: Eksempel 2

osv..:)
