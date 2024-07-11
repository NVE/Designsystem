---
layout: component
---

<CodeExamplePreview>

```html
<nve-checkbox>Ja, jeg vil!</nve-checkbox>
```

</CodeExamplePreview>

## Eksempler

### Ledetekst

Teksten på høyre side kan legges inni `nve-checkbox`.

<CodeExamplePreview>

```html
<nve-checkbox>Ledetekst</nve-checkbox>
```

</CodeExamplePreview>

### Checked

`checked` er satt hvis boksen er krysset av og motsatt.
Bruk `indeterminate` for å vise at man ikke har tatt stilling ennå.

<CodeExamplePreview>

```html
<nve-checkbox checked>checked</nve-checkbox>
<nve-checkbox>unchecked</nve-checkbox>
<nve-checkbox indeterminate>indeterminate</nve-checkbox>
```

</CodeExamplePreview>

### Disabled

Bruk `disabled` for å deaktivere boksen.

<CodeExamplePreview>

```html
<nve-checkbox disabled>Disabled</nve-checkbox> <nve-checkbox>Enabled</nve-checkbox>
```

</CodeExamplePreview>
