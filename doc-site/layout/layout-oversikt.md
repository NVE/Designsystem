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
