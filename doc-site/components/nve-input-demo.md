---
layout: component
---

TODO: Start med et enklest mulig kodeeksempel i html for å kunne vise komponenten.
<CodeExamplePreview>

```html
<nve-input-demo label="this is why" hideLabel required id="in1"></nve-input-demo>
<nve-input-demo filled></nve-input-demo>
<nve-input-demo type="date">
  <nve-icon slot="suffix" name="lock"></nve-icon>
</nve-input-demo>
<nve-input-demo type="number" label="Kiss my ass" labelTooltip="Hjelpetekst i <strong>HTML</strong>"></nve-input-demo>
<nve-input-demo size="small" clearable></nve-input-demo>
<nve-input-demo size="large" clearable></nve-input-demo>
<nve-input-demo size="large" readonly> <nve-icon slot="suffix" name="lock"></nve-icon></nve-input-demo>
<nve-input-demo disabled></nve-input-demo>

<nve-input-demo>
  <nve-label value="Ledetekst" slot="label"></nve-label>
</nve-input-demo>

<nve-input-demo errorMessage="test"></nve-input-demo>
```

```html
<nve-input-demo
  label="Navn"
  id="navn"
  blurValidation
  validation='[{"type": "required", "message": "Field is required" }]'
></nve-input-demo>
<nve-button class="validate">Validere input</nve-button>
<script>
  // Denne snutten vil åpne alert meldinger når man klikker på knapper.
  const container = document.querySelector('#navn');
  const buttonValidate = document.querySelector('.validate');
  buttonValidate.addEventListener('click', () => container.validate());
</script>
```

</CodeExamplePreview>

TODO: Skriv evt. generelle tips som ikke passer å ha i @JsDoc. Pass på at det ikke blir dobbelt opp med det du har skrevet i @JsDoc.

## Eksempler

Legg eksempler på funksjonalitet her. Hvert tema skal ha egen overskrift på nivå 3.

### TODO: Eksempel 1

### TODO: Eksempel 2

osv..:)
