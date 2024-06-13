---
meta:
  title: nve-alert
  description: Brukes til å vise viktige beskjeder enten på en side eller som en enkel popup (toast)
layout: component
---

```html:preview
<nve-alert open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Dette er en standard alert
</nve-alert>
```

:::tip
Alert vil ikke vises før du setter attributtet `open`.
:::

## Eksempler

Du finner også flere eksempler i [Shoelace-dokumentasjonen](https://shoelace.style/components/alert).

### Variant

Bruk `variant` for å styre farger.

```html:preview
<nve-alert variant="primary" open>
    <nve-icon slot="icon" name="info"></nve-icon>
    primary (dette er standard)
</nve-alert>
<br />
<nve-alert variant="success" open>
    <nve-icon slot="icon" name="check_circle"></nve-icon>
    success
</nve-alert>
<br />
<nve-alert variant="warning" open>
    <nve-icon slot="icon" name="warning"></nve-icon>
    warning
</nve-alert>
<br />
<nve-alert variant="neutral" open>
    <nve-icon slot="icon" name="help"></nve-icon>
    neutral
</nve-alert>
<br />
<nve-alert variant="danger" open>
    <nve-icon slot="icon" name="error"></nve-icon>
    danger
</nve-alert>
<br />
```

### Left stroke

Bruk `leftstroke` for å vise en fet strek på venstre side.

```html:preview
<nve-alert variant="danger" text="Left stroke" leftstroke open>
</nve-alert>
```

### Emphasized

Bruk `emphasized` for å få litt mørkere bakgrunnsfarge.

```html:preview
<nve-alert variant="warning" text="Emphasized" emphasized open>
</nve-alert>

<nve-alert variant="warning" text="Ikke emphasized" open>
</nve-alert>
```

### Tittel og tekst

Du kan bruke `title` for å lage en slags overskrift. Resten av teksten kan da legges i `text`.

```html:preview
<nve-alert text="og tekst" title="Tittel" open></nve-alert>

<nve-alert title="Kun tittel" open></nve-alert>

<nve-alert text="kun tekst" open></nve-alert>

<nve-alert title="Tittel" open>TODO: Hvordan funker dette med tekst inni elementet?</nve-alert>
```

### Closable

Bruk `closable` for å vise en lukke-knapp på høyre side, som skjuler komponenten.

```html:preview
<nve-alert open closable class="alert-closeable">
  Trykk på krysset for å lukke denne
</nve-alert>

<script>
  // Denne snutten vil vise alert igjen etter 2 sekunder, slik at du kan prøve å lukke den flere ganger
  const alert = document.querySelector('.alert-closeable');
  alert.addEventListener('sl-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

### Ikoner

Ikoner er valgfrie, og legges i slot'en `icon`.

```html:preview
<nve-alert open>
  <nve-icon slot="icon" name="check_circle"></nve-icon>
  med ikon
</nve-alert>

<nve-alert open>
  uten ikon
</nve-alert>
```
