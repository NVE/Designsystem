<PageHeader title="Layout-komponenter" imagePath="developer" pageLevel=1></PageHeader>

Layout-komponentene er strukturelle byggeklosser basert på prinsippene fra [Every Layout](https://every-layout.dev/).
De håndterer plassering og fordeling av innhold uten å binde seg til visuell stil og kan kombineres fritt for å bygge opp sider og seksjoner.

## Hvorfor bruke dem?

Du slipper å skrive egen CSS for vanlige oppsett, og avstander hentes fra designsystemets tokens. Det gir konsistente sider, raskere utvikling og mindre vedlikehold når designet endres.

## Når skal du bruke layout-komponenter?

Bruk layout-komponentene når du vil:

- Stable elementer vertikalt med konsistent mellomrom (`stack-layout`)
- Gruppere elementer horisontalt med automatisk linjebryting (`cluster-layout`)
- Lage et responsivt rutenett (`grid-layout`)
- Gi et element definert padding og bakgrunn (`box-layout`)

## Prinsipper

Layout-komponentene har ingen farger, fonter eller annen visuell stil, de styrer kun struktur og plassering. De er ment å kombineres, og bryr seg ikke om hva som ligger inni dem.

## Eksempel på bruk

Layout-komponentene er laget for å kombineres. Et kontaktskjema er et typisk eksempel som bruker alle fire: `box-layout` gir kortet ramme og padding, `stack-layout` stabler feltene vertikalt, `grid-layout` legger fornavn og etternavn ved siden av hverandre og bryter til en kolonne på smale skjermer. `cluster-layout` plasserer knappene nederst.

<CodeExamplePreview>

```html
<box-layout padding="large" background="neutral">
  <stack-layout>
    <nve-heading level="3">Kontakt oss</nve-heading>
    <p>Fyll ut skjemaet, så tar vi kontakt så raskt vi kan.</p>
    <grid-layout gap="small" min="220px">
      <nve-input label="Fornavn"></nve-input>
      <nve-input label="Etternavn"></nve-input>
    </grid-layout>
    <nve-input label="E-post" type="email"></nve-input>
    <nve-textarea label="Melding"></nve-textarea>
    <cluster-layout gap="small" justify="flex-end">
      <nve-button>Avbryt</nve-button>
      <nve-button variant="primary">Send</nve-button>
    </cluster-layout>
  </stack-layout>
</box-layout>
```

</CodeExamplePreview>
