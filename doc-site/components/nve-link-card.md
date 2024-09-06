---
layout: component
---

<CodeExamplePreview>

```html
<nve-link-card title="Kommuneplan" href="/components/Komponentoversikt"></nve-link-card>
```

</CodeExamplePreview>

## Actions

<CodeExamplePreview>

```html
<nve-link-card
  title="Intern lenke"
  additionalText="Klikk for å gå til itern linke"
  variant="contrast"
  href="/components/Komponentoversikt"
  clickAction="internal"
> </nve-link-card>

<nve-link-card
  title="Last ned fil"
  additionalText="Klikk for å laste ned en fil"
  variant="contrast"
  size="medium"
  href="https://file-examples.com/storage/fef44df12666d835ba71c24/2017/10/file_example_JPG_100kB.jpg"
  clickAction="download">
</nve-link-card>

<nve-link-card
  title="Egendefinert nedlasting"
  additionalText="Klikk for å laste ned en tilpasset fil"
  variant="contrast"
  size="medium"
  clickAction="download"
 .downloadHandler=${() => {
    // Custom logic for downloading
  }}>
</nve-link-card>

  <nve-link-card
    title="Ekstern lenke"
    additionalText="Klikk for å åpne en ekstern side"
    variant="contrast"
    href="https://www.nve.no/"
    clickAction="external"
  >
  </nve-link-card>

  <nve-link-card
    title="Send e-post"
    additionalText="Klikk for å sende en e-post"
    href="someone@example.com"
    variant="contrast"
    clickAction="mail"
  >  </nve-link-card
```

</CodeExamplePreview>

## Variants

<CodeExamplePreview>

```html
<nve-link-card title="Kommuneplan" additionalText="Additional text."></nve-link-card>
<nve-link-card title="Kommuneplan" additionalText="Additional text." variant="contrast"></nve-link-card>
<nve-link-card title="Kommuneplan" additionalText="Additional text." variant="secondary"></nve-link-card>
```

</CodeExamplePreview>

### Sizes

<CodeExamplePreview>

```html
<nve-link-card title="Kommuneplan" additionalText="Additional text." variant="contrast" size="small"></nve-link-card>
<nve-link-card title="Kommuneplan" additionalText="Additional text." variant="contrast" size="medium"></nve-link-card>
<nve-link-card title="Kommuneplan" additionalText="Additional text." variant="contrast" size="large"></nve-link-card>
```

</CodeExamplePreview>
