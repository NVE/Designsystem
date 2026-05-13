---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-checkbox>Vis dokumenter</nve-checkbox>
```

sjekkboks kan bli brukt alene og når brukt i en gruppe, den skal ikke annonsere sit posisjon i listen (f.eks 1 av 3) derfor
kan det enklest gjøres med input element inn i label element. slik sørger vi at label sjekker eller avsjekker sjekkboksen.

skjekkboks støtter alle native atttributer som value og checked. vi støtter ikke switch siden det er en ny property og
støttes ikke i alle nettlesere.

</CodeExamplePreview>

## Retningslinjer

## Eksempler

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
