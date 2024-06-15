# Nve-badge

#### Brukes for å vise status eller antall

```html:preview
<nve-badge>Badge</nve-badge>
```

## Eksempler

Du finner også flere eksempler i [Shoelace-dokumentasjonen](https://shoelace.style/components/badge).

### Varianter

Bruk `variant` for å velge farge. Primary er standard og trenger ikke settes.

```html:preview
<nve-badge variant="primary">primary</nve-badge>
<nve-badge variant="neutral">neutral</nve-badge>
<nve-badge variant="success">success</nve-badge>
<nve-badge variant="warning">warning</nve-badge>
<nve-badge variant="danger">danger</nve-badge>
<nve-badge variant="brand">brand</nve-badge>
```

### Størrelse

Bruk `size` for å velge størrelse. `medium` er standard.

```html:preview
<nve-badge size="small">small</nve-badge>
<nve-badge size="medium">medium</nve-badge>
<nve-badge size="large ">large</nve-badge>
```

### Low

Bruk `low` for lysere bakgrunnsfarge. Teksten blir da svart for alle varianter.

```html:preview
<nve-badge low variant="primary">primary</nve-badge>
<nve-badge low variant="neutral">neutral</nve-badge>
<nve-badge low variant="success">success</nve-badge>
<nve-badge low variant="warning">warning</nve-badge>
<nve-badge low variant="danger">danger</nve-badge>
<nve-badge low variant="brand">brand</nve-badge>
low
<br/>
<br/>
<nve-badge variant="primary">primary</nve-badge>
<nve-badge variant="neutral">neutral</nve-badge>
<nve-badge variant="success">success</nve-badge>
<nve-badge variant="warning">warning</nve-badge>
<nve-badge variant="danger">danger</nve-badge>
<nve-badge variant="brand">brand</nve-badge>
vanlig
```

### Knapp med badge

Du kan vise badge på en knapp ved å legge badge inni `<nve-button>`.

```html:preview
<nve-button variant="primary">
  Knapp
  <nve-badge>badge</nve-badge>
</nve-button>
```
