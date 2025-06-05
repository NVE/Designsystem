---
layout: component
---

<CodeExamplePreview>

```html
<nve-link-card label="Kommuneplan" href="/components/Komponentoversikt"></nve-link-card>
```

</CodeExamplePreview>

## Klikkhandlinger

<CodeExamplePreview>

```html

<nve-link-card
  label="Intern lenke"
  additionalText="Klikk for å gå til intern linke"
  variant="contrast"
  href="/components/Komponentoversikt"
  clickAction="internal"
> </nve-link-card>

<nve-link-card
  label="Last ned fil"
  additionalText="Klikk for å laste ned en fil"
  variant="contrast"
  size="medium"
  href="https://file-examples.com/storage/fef44df12666d835ba71c24/2017/10/file_example_JPG_100kB.jpg"
  clickAction="download">
</nve-link-card>

<nve-link-card
  label="Egendefinert nedlasting"
  additionalText="Klikk for å laste ned en tilpasset fil"
  variant="contrast"
  size="medium"
  id="customDownloadCard"
  clickAction="download"
>
</nve-link-card>

<script>
  function customLogic() {
    console.log("Custom logic for downloading");
    // Her kan du legge til din egendefinerte nedlastingslogikk
  }

  // Her binder vi customLogic-funksjonen til kortets onclick-hendelse
  document.getElementById("customDownloadCard").onclick = customLogic;
</script>

  <nve-link-card
    label="Ekstern lenke"
    additionalText="Klikk for å åpne en ekstern side"
    variant="contrast"
    href="https://www.nve.no/"
    clickAction="external"
  >
  </nve-link-card>

  <nve-link-card
    label="Send e-post"
    additionalText="Klikk for å sende en e-post"
    href="someone@example.com"
    variant="contrast"
    clickAction="mail"
  >  </nve-link-card
```

</CodeExamplePreview>

## Varianter

<CodeExamplePreview>

```html
<nve-link-card label="Kommuneplan" additionalText="Additional text."></nve-link-card>
<nve-link-card label="Kommuneplan" additionalText="Additional text." variant="contrast"></nve-link-card>
<nve-link-card label="Kommuneplan" additionalText="Additional text." variant="secondary"></nve-link-card>
```

</CodeExamplePreview>

### Størrelse

<CodeExamplePreview>

```html
<nve-link-card label="Kommuneplan" additionalText="Additional text." variant="contrast" size="small"></nve-link-card>
<nve-link-card label="Kommuneplan" additionalText="Additional text." variant="contrast" size="medium"></nve-link-card>
<nve-link-card label="Kommuneplan" additionalText="Additional text." variant="contrast" size="large"></nve-link-card>
```

</CodeExamplePreview>

## Tekststørrelse

Vi har ingen begrensning på lengden på tittelen eller teksten, men det er opp til designer og utvikler å velge tekster som ser bra ut.

<CodeExamplePreview>

```html
<nve-link-card
  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  additionalText="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
></nve-link-card>
```

</CodeExamplePreview>
