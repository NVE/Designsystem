---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-checkbox value="showDocs">Vis dokumenter</nve-checkbox>
```

</CodeExamplePreview>

<nve-message-card variant="primary" label="Native sjekkboks-attributter" size="compact">
  <p>
    <span class="highlight">nve-checkbox</span> bygger på et native <span class="highlight">&lt;input&gt;</span>-element
    med type <span class="highlight">checkbox</span> og støtter derfor de fleste vanlige input-attributter som passer med checkbox:  </p>
    <ul>
      <li><span class="highlight">checked</span></li>
      <li><span class="highlight">disabled</span></li>
      <li><span class="highlight">value</span></li>
    </ul>
<br>
 <p>
  Komponenten videresender relevante hendelser fra det interne input-elementet slik at de kan lyttes til utenfor komponentens Shadow DOM.
</p>

<ul>
  <li>
    <span class="highlight">change</span> – sendes når valgt verdi endres.
  </li>
</ul>
<br>
  <p>
    Noen native attributter er bevisst ikke støttet:
  </p>
  <ul>
    <li><span class="highlight">form</span> og <span class="highlight">name</span> – komponenten er ikke laget for native form submission.</li>
    <li><span class="highlight">required</span> – ikke støttet på enkelte sjekkbokser, den støttes kun i <a href="./nve-checkbox-group.md">nve-checkbox-group</a></li>
     <li><span class="highlight">switch</span> – ny attributt som ikke er støttet i alle nettleserne enda. Vi har vår egen <a href="./nve-switch.md">nve-switch</a> komponent som vi anbefaler å bruke i stedet. </li>
  </ul>
</nve-message-card>

## Retningslinjer

- Gi alltid feltet en tydelig <span class="highlight">label</span> og <span class="highlight">value</span>.
- Bruk <span class="highlight">indeterminate</span>-propertyen bare for en overordnet sjekkboks (med flere sjekkbokser under), og kun når noen av barna er valgt.
- Bruk sjekkboks når valget skal få effekt med én gang. Hvis avhuking utløser en asynkron operasjon, ikke vent med å oppdatere <span class="highlight">checked</span> til etter await – gi umiddelbar tilbakemelding og rull tilbake ved feil.

## Eksempler

### Checked

Bruk <span class="highlight">checked</span> for å vise at boksen er valgt.

<CodeExamplePreview>

```html
<nve-checkbox checked value="showDocs">Vis dokumenter</nve-checkbox>
```

</CodeExamplePreview>

### Størrelse

Bruk <span class="highlight">size</span> for å endre størrelsen på en sjekkboks. Verdien kan være:

- <span class="highlight">large</span>
- <span class="highlight">medium</span> (standard)
- <span class="highlight">small</span>

<CodeExamplePreview>

```html
<nve-checkbox size="small" value="showDocs">Vis dokumenter (small)</nve-checkbox>
<nve-checkbox value="showDocs">Vis dokumenter (medium)</nve-checkbox>
<nve-checkbox size="large" value="showDocs">Vis dokumenter (large)</nve-checkbox>
```

</CodeExamplePreview>

### Deaktivert

<nve-message-card variant="warning" label="Obs!" size="compact">
  <p>
    Et deaktivert felt (<span class="highlight">disabled</span>) kan ikke få fokus og blir derfor ofte ikke oppdaget av
    brukere som navigerer med tastatur eller skjermleser. Bruk <span class="highlight">disabled</span> med omhu, og vurder
    å gi en tydelig forklaring i tekst på hvorfor feltet er deaktivert.
  </p>
</nve-message-card>

Bruk attributtet <span class="highlight">disabled</span> for å hindre muligheten for å endre et verdi.

<CodeExamplePreview>

```html
<nve-checkbox disabled value="showDocs">Vis dokumenter</nve-checkbox>
```

</CodeExamplePreview>

### Indeterminate

Bruk <span class="highlight">indeterminate</span> når en overordnet sjekkboks representerer en gruppe der bare noen av valgene er krysset av.
Tilstanden betyr delvis valgt, ikke ja eller nei.

Når den overordnede sjekkboksen klikkes, skal den enten velge alle eller fjerne alle underliggende sjekkbokser.

<CodeExamplePreview>

```html
<nve-checkbox indeterminate value="showDocs">Vis dokumenter</nve-checkbox>
```

</CodeExamplePreview>

## Tilgjengelighet

Når en bruker tabber til sjekkboksen og trykker Space, toggles den valgte tilstanden.

Komponenten bruker et <span class="highlight">&lt;label&gt;</span> -element som wraper både input og tekst, så både det visuelle feltet og teksten er klikkebare.

<span class="highlight">Indeterminate</span>-tilstanden vises visuelt, men Screen readers vil normalt annonsere den som en valgbar tilstand.

<span class="highlight">required</span> er bare tilgjengelig på <a href="./nve-checkbox-group.md">nve-checkbox-group</a>, ikke på individuelle sjekkbokser.
