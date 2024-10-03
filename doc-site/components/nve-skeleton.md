---
layout: component
---

<CodeExamplePreview>

```html
<nve-skeleton style="width: 80%"></nve-skeleton>
```

</CodeExamplePreview>

## Eksempler

### Effekter

Det er to innebygde effekter, glans og puls. Effekter er med vilje subtile, siden de kan være distraherende når de brukes mye. Standard er ingen, som viser et statisk, ikke-animert skjelett.

<CodeExamplePreview>

```html
<nve-skeleton effect="none"></nve-skeleton>
None

<nve-skeleton effect="sheen"></nve-skeleton>
Sheen

<nve-skeleton effect="pulse"></nve-skeleton>
Pulse
```

</CodeExamplePreview>

### Paragraphs

Bruk flere skjeletter og noen smarte stiler for å simulere paragraphs.

<CodeExamplePreview>

```html
<nve-skeleton style="width:95%"></nve-skeleton>
<nve-skeleton style="width:90%"></nve-skeleton>
<nve-skeleton style="width:50%"></nve-skeleton>
```

</CodeExamplePreview>

### Avatarer

Angi en matchende bredde og høyde for å lage et sirkel, firkantet eller avrundet avatarskjelett.

<CodeExamplePreview>

```html
<div class="skeleton-avatars">
  <nve-skeleton></nve-skeleton>
  <nve-skeleton></nve-skeleton>
  <nve-skeleton></nve-skeleton>
</div>

<style>
  .skeleton-avatars nve-skeleton {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
  }

  .skeleton-avatars nve-skeleton:nth-child(1) {
    --border-radius: 0;
  }

  .skeleton-avatars nve-skeleton:nth-child(2) {
    --border-radius: 8px;
  }
</style>
```

</CodeExamplePreview>
