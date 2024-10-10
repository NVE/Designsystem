---
layout: component
---

## Enkel bruk

<CodeExamplePreview>

```html
<nve-relative-time date="1970-01-01"></nve-relative-time>
```

</CodeExamplePreview>

## Eksempler

Bruk <code>lang</code> for å sette hvilket språk eller målform som teksten skal vises på. <code>nb</code> og <code>nn</code> for norske målformer

<CodeExamplePreview>

```html
<nve-relative-time date="1970-01-01" lang="nn"></nve-relative-time>
<nve-relative-time date="1970-01-01" lang="nb"></nve-relative-time>
<nve-relative-time date="1970-01-01" lang="ja"></nve-relative-time>
```

</CodeExamplePreview>

<code>sync</code>-egenskapen kan brukes slik at teksten oppdateres jevnlig (teksten under vil oppdatere seg 1 minutt etter lasting av siden)
Merk også at eksempelet ikke setter <code>date</code>-egenskapen, da settes tidspunktet til 'nå' ved lasting
<CodeExamplePreview>

```html
<nve-relative-time lang="nn" sync></nve-relative-time>
```

</CodeExamplePreview>

<code>numeric</code>-egenskapen kan settes til <code>always</code> for å si at verdien alltid skal vises med tall

<CodeExamplePreview>

```html
<nve-relative-time lang="nn" sync numeric="always"></nve-relative-time>
```

</CodeExamplePreview>

Bruk <code>format</code>-egenskapen for å si noe om formatteringen som skal vises. Velg mellom <code>long</code>, <code>short</code>, og <code>narrow</code>,

<CodeExamplePreview>

```html
<nve-relative-time date="2024-01-01" lang="nb" format="long"></nve-relative-time>
<nve-relative-time date="2024-01-01" lang="nb" format="short"></nve-relative-time>
<nve-relative-time date="2024-01-01" lang="nb" format="narrow"></nve-relative-time>
```

</CodeExamplePreview>
