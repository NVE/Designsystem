---
layout: component
---

<CodeExamplePreview>

```html
<div style="height:20vh">
  <nve-combobox
    label="Velg et dyr"
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
</div>
```

</CodeExamplePreview>

## Eksempler

### Filled

Bruk attributtet `filled` for mørkere bakgrunn

<CodeExamplePreview>

```html
<div style="height:20vh">
  <nve-combobox
    filled
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
</div>
```

</CodeExamplePreview>

### Bare velge en verdi

Ønsker man at det bare skal være mulig å velge kun en verdi, kan man legge på `singular` attributtet
<CodeExamplePreview>

```html
<div style="height:20vh">
  <nve-combobox
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
</div>
```

</CodeExamplePreview>

### Påkrevd

Bruk attributtet `required` for å gjøre komponenten påkrevd, legg inn en feilmelding i `errorMessage` om du ikke vil ha standard-feilmeldingen.
Bruk attributtet `requiredlabel` hvis du vil vise noe annet enn \*Obligatorisk. `nve-combobox` må ligge i en `<form>` for at validering skal fungere.
<CodeExamplePreview>

```html
<div style="height:20vh">
  <form onsubmit="event.preventDefault()">
    <nve-combobox
      label="Label"
      required
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
    <nve-button type="submit">Lagre</nve-button>
  </form>
</div>
```

</CodeExamplePreview>

### Disabled

Bruk attributtet `disabled` for å hindre muligheten for endring av verdier.
<CodeExamplePreview>

```html
<div style="height:20vh">
  <form onsubmit="event.preventDefault()">
    <nve-combobox
      disabled
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
    <nve-button type="submit">Lagre</nve-button>
  </form>
</div>
```

</CodeExamplePreview>

### Forhåndsvalgte verdier

Bruk `selected` på option objected får å forhåndsvelge verider.
<CodeExamplePreview>

```html
<div style="height:20vh">
  <form onsubmit="event.preventDefault()">
    <nve-combobox
      values='[
        { "label": "Cat", "value": "cat" ,"selected":true },
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
    <nve-button type="submit">Lagre</nve-button>
  </form>
</div>
```

</CodeExamplePreview>
