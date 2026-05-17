---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-checkbox>Vis dokumenter</nve-checkbox>
```

sjekkboks kan bli brukt alene og når brukt i en gruppe, den skal ikke annonsere sit posisjon i listen (f.eks 1 av 3) derfor
kan det enklest gjøres med input element inn i label element. slik sørger vi at label sjekker eller avsjekker sjekkboksen.

skjekkboks støtter alle input-native atttributer plus value og checked. vi støtter ikke switch siden det er en ny property og
støttes ikke i alle nettlesere. i tillegg støtter vi disabled, readonly,

form og navn støttes ikke fordi vi ikke støtter form submission
required støttes ikke på enkelte sjekkbokser, den støttes kun på checkbox gruppen.

<nve-message-card variant="primary" label="Native textarea-attributter" size="compact">
  <p>
    <span class="highlight">nve-checkbox</span> bygger på et native <span class="highlight">&lt;input&gt;</span>-element
    med type <span class="highlight">checkbox</span> og støtter derfor de fleste vanlige input-attributter som passer med checkbox:  </p>
    <ul>
      <li><span class="highlight">checked</span></li>
      <li><span class="highlight">disabled</span></li>
      <li><span class="highlight">readonly</span></li>
      <li><span class="highlight">value</span></li>
    </ul>
<br>
  <p> Komponentens hendelser bobler også ut fra komponenten; vi bruker spesielt:  </p>
    <ul>
      <li><span class="highlight">change</span>- når verdien endres</li> 
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

</CodeExamplePreview>

## Retningslinjer

- Bruk <span class="highlight">indeterminate</span>-propertyen bare for en overordnet sjekkboks (med flere sjekkbokser under), og kun når noen av barna er valgt.
- Bruk sjekkboks når valget skal få effekt med én gang. Hvis avhuking utløser en asynkron operasjon, ikke vent med å oppdatere <span class="highlight">checked</span> til etter await – gi umiddelbar tilbakemelding og rull tilbake ved feil.
- Gi alltid feltet en tydelig <span class="highlight">label</span>.

## Eksempler

### Checked

`checked` er satt hvis boksen er krysset av og motsatt.
Bruk `indeterminate` for å vise at man ikke har tatt stilling ennå.

<CodeExamplePreview>

```html
<nve-checkbox checked>checked</nve-checkbox>
<nve-checkbox>unchecked</nve-checkbox>
<nve-checkbox indeterminate>indeterminate</nve-checkbox>
```

</CodeExamplePreview>

### Disabled

Bruk `disabled` for å deaktivere boksen.

<CodeExamplePreview>

```html
<nve-checkbox disabled>Disabled</nve-checkbox> <nve-checkbox>Enabled</nve-checkbox>
```

</CodeExamplePreview>
