# Nve-checkbox

#### Checkboxes allow the user to toggle an option on or off.

```html:preview
<nve-checkbox>Ja, jeg vil!</nve-checkbox>
```

:::warning
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

Bruk `checked` for å huke av. Bruk `indeterminate` for å vise at man ikke har tatt stilling ennå.

```html:preview
<nve-checkbox checked="true">checked</nve-checkbox>
<nve-checkbox>unchecked (default)</nve-checkbox>
<nve-checkbox indeterminate>indeterminate</nve-checkbox>
```

### Disabled

Bruk `disabled` for å deaktivere boksen.

```html:preview
<nve-checkbox disabled>Disabled</nve-checkbox>
<nve-checkbox>Enabled</nve-checkbox>
```
