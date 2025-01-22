---
layout: component
---

## Eksempler

Se også [nve-radio-group](./nve-radio-group.html)

### Bruk av slots for ikon

<CodeExamplePreview>

```html
<nve-radio-group label="Vennligst velg en av disse">
  <nve-radio-button value="valg1">
    <nve-icon slot="prefix" name="close"></nve-icon>
    <div>Med ikon</div>
  </nve-radio-button>
  <nve-radio-button value="valg2">Kun tekst</nve-radio-button>
  <nve-radio-button value="valg3" disabled>
    <div>Disabled</div>
  </nve-radio-button>
  <nve-radio-button value="valg4">
    <nve-icon slot="suffix" name="alarm"></nve-icon>
    <div>Ikon bak</div>
  </nve-radio-button>
</nve-radio-group>
```

</CodeExamplePreview>

### Ekstra avrundede hjørner. Merk at dette kun har effekt på første og siste knapp

<CodeExamplePreview>

```html
<nve-radio-group>
  <nve-radio-button value="valg1" pill> Valg 1 </nve-radio-button>
  <nve-radio-button value="valg2" pill>Valg 2</nve-radio-button>
  <nve-radio-button value="valg3" pill> Valg 3 </nve-radio-button>
  <nve-radio-button value="valg4" pill> Valg 4 </nve-radio-button>
</nve-radio-group>
```

</CodeExamplePreview>
