# Validering

Dette mønsteret viser hvordan validering i skjemaer skal håndteres.
Det inkluderer hvordan feil oppdages og vises underveis og ved innsending, hvordan obligatoriske felt markeres og valideres, samt hvordan brukeren får tydelige og konkrete feilmeldinger.

[Se mønsteret i Figma](https://www.figma.com/design/HiwQ9UOjOPvrhaEOwdjZEu/05---%E2%9D%96-M%C3%B8nstre?node-id=5384-3321&m=dev)

## Obligatoriske og valgfrie felt

Bestem hvilke opplysninger skjemaet faktisk trenger, og gjør det tydelig for brukeren hvilke felt som må fylles ut.

### Når alle feltene er obligatoriske

Hvis alle feltene på en side må fylles ut, kan du informere tydelig øverst i skjemaet om at alle feltene er obligatoriske. Da trenger du ikke å markere hvert enkelt felt visuelt. Hvert obligatoriske felt må likevel ha `required`-attributtet, slik at det også formidles programmatisk at feltet må fylles ut, i tråd med WCAG.

<nve-message-card size="simple" label="Alle felt må fylles ut">

</nve-message-card>

<br />

<nve-input label="Navn" required></nve-input>

<br />

```html
<nve-message-card size="simple" label="Alle felt må fylles ut"></nve-message-card>
<nve-input label="Navn" required></nve-input>
```

### Når skjemaet har både obligatoriske og valgfrie felt

Hvis de fleste feltene er obligatoriske, kan du opplyse øverst i skjemaet om at alle feltene må fylles ut, med mindre de er markert som valgfrie. Marker da bare de valgfrie feltene.

Som hovedregel skal vi bare spørre brukeren om informasjon vi absolutt trenger, og unngå valgfrie felt.

<div style="display: flex; flex-direction: column; gap: 1rem;">
  <nve-message-card size="simple" label="Alle felt må fylles ut, unntatt felt som er markert som valgfrie">
  </nve-message-card>
  <nve-input label="Saksbehandlers navn" optional></nve-input>
</div>

<br />

```html
<nve-message-card
  size="simple"
  label="Alle felt må fylles ut, unntatt felt som er markert som valgfrie"
></nve-message-card>
<nve-input label="Saksbehandlers navn" optional></nve-input>
```

### Når bare ett felt er obligatorisk

Hvis det bare er ett obligatorisk felt, kan det merkes med «Må fylles ut».

<nve-input label="Saksbehandlers navn" required></nve-input>

<br />

```html
<nve-input label="Saksbehandlers navn" required></nve-input>
```

## Feil og validering

Vis feil tydelig når brukeren fyller ut skjemaet eller prøver å sende det inn. Feilmeldingene skal forklare både hva som er galt, og hvordan brukeren kan rette det.

### Valideringsmeldinger

- **Vær konkret:** Unngå generelle meldinger som «Noe gikk galt». Beskriv hva problemet er, og hva brukeren må gjøre for å rette det.
- **Hold det kort:** Brukeren skal forstå feilen raskt, uten å bruke unødvendig tid på å lese.
- **Bruk enkelt og tydelig språk:** Skriv korte, aktive setninger.
- **Bruk nøkkelord fra feltets ledetekst:** Gjenta relevante ord fra feltet, slik at det er tydelig hva feilen gjelder.

<style>
.validation-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: 1rem;
}

.validation-examples nve-message-card {
  display: block;
  height: 20rem;
}

.validation-examples nve-message-card::part(base) {
  height: 100%;
  box-sizing: border-box;
}
</style>

<div class="validation-examples">
  <nve-message-card variant="success"  label="Gjør">
    <p>Beskriv hva som er feil, og hvordan brukeren kan rette det.</p>
    <nve-input label="E-postadresse" errorMessage="Skriv inn en e-postadresse, for eksempel navn@eksempel.no."></nve-input>
  </nve-message-card>
  <nve-message-card variant="danger" label="Unngå">
    <p>Ikke vis generelle feilmeldinger uten å forklare hva brukeren skal gjøre.</p>
    <nve-input label="E-postadresse" errorMessage="Ugyldig verdi."></nve-input>
  </nve-message-card>
</div>

### Oppsummering av feilmeldinger

Vurder fra prosjekt til prosjekt om det er behov for en oppsummeringskomponent. Oppsummeringen kan gjelde én eller flere feil.

<nve-message-card variant="danger" label="Du må rette opp følgende feil før du kan gå videre">
  <ul>
    <li>Telefonnummer må fylles ut.</li>
    <li>Du må velge om anlegget har gyldig konsesjon.</li>
    <li>Du må velge fylke.</li>
  </ul>
</nve-message-card>

<br />

```html
<nve-message-card variant="danger" label="Du må rette opp følgende feil før du kan gå videre">
  <ul>
    <li>Telefonnummer må fylles ut.</li>
    <li>Du må velge om anlegget har gyldig konsesjon.</li>
    <li>Du må velge fylke.</li>
  </ul>
</nve-message-card>
```

Hvis brukeren prøver å gå videre uten å ha fylt ut alt, eller har gjort feil, kan oppsummeringen vises rett over **Neste**- eller **Send inn**-knappen. I noen tilfeller er det bedre å vise oppsummeringen øverst på siden, for eksempel når:

- Den tekniske løsningen laster siden på nytt når brukeren velger **Neste**.
- Brukeren går ut av et skjema og inn igjen.
- Løsningen lar brukeren gå videre til neste side selv om det er feil på den aktuelle siden.

#### Retningslinjer

- Vis alle feilmeldingene som gjelder for siden eller trinnet.
- La brukeren gå direkte til feltene som må rettes opp, og flytt fokus til feltet.
- Kontroller at lenkene i oppsummeringen stemmer med feilmeldingene de lenker til.
- Fjern feilene fra oppsummeringen etter hvert som brukeren retter dem.
- Bruk nøkkelord fra feltets ledetekst i feilmeldingene.
