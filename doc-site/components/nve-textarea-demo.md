---
layout: component
---

TODO: Start med et enklest mulig kodeeksempel i html for å kunne vise komponenten.
<CodeExamplePreview>

```html
<nve-textarea-demo label="Some label"></nve-textarea-demo>
<nve-textarea-demo filled readonly label="Some label"></nve-textarea-demo>

<nve-textarea-demo id="error" label="Some label"></nve-textarea-demo>
<nve-button id="button">Toggle error</nve-button>

<nve-textarea-demo label="Some label" disabled></nve-textarea-demo>

<script>
  const textarea = document.getElementById('error');
  const button = document.getElementById('button');

  const toggleError = () => {
    textarea.errorMessage = textarea.errorMessage ? '' : 'error happened';
  };

  button.addEventListener('click', toggleError);
</script>
```

</CodeExamplePreview>

TODO: Skriv evt. generelle tips som ikke passer å ha i @JsDoc. Pass på at det ikke blir dobbelt opp med det du har skrevet i @JsDoc.

## Eksempler

Legg eksempler på funksjonalitet her. Hvert tema skal ha egen overskrift på nivå 3.

### TODO: Eksempel 1

### TODO: Eksempel 2

osv..:)
