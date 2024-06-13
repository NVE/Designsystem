---
meta:
  title: Checkbox
  description: Checkboxes allow the user to toggle an option on or off.
layout: component
---

```html:preview
<nve-checkbox>Ja, jeg vil!</nve-checkbox>
```

:::tip
TODO: SKal vi ha med en tekst a la denne for alle skjema-elementer?
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Eksempler

Du finner også flere eksempler i [Shoelace-dokumentasjonen](https://shoelace.style/components/checkbox).

## Ledetekst

Teksten på høyre side kan legges i `value` eller inni `nve-checkbox`.

```html:preview
<nve-checkbox value="Tekst i value-attributtet">checked</nve-checkbox>

<nve-checkbox>Tekst inni elementet</nve-checkbox>
```

### Checked

Bruk `checked` for å huke av. Bruk `intederminate` for strek.

```html:preview
<nve-checkbox checked="true">Checked</nve-checkbox>
<nve-checkbox checked="false">Unchecked</nve-checkbox>
<nve-checkbox intederminate>Intederminate</nve-checkbox>
```

### Disabled

Bruk `disabled` for å deaktivere boksen.

```html:preview
<nve-checkbox disabled>Disabled</nve-checkbox>
<nve-checkbox>Enabled</nve-checkbox>
```
