---
layout: component
outline: [2, 3]
---

<nve-message-card variant="warning" label="Obs!" size="compact">
  <p>
    <span class="highlight">nve-segment</span> skal kun brukes i
    <a href="./nve-segment-group"><span class="highlight">nve-segment-group</span></a>.
    Se eksempler og anbefalt bruk der.
  </p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-segment value="segment" pill>Segment</nve-segment>
```

</CodeExamplePreview>

<nve-message-card variant="primary" label="Info" size="compact">
 <p><span class="highlight">nve-segment</span> er ikke bygget med native <span class="highlight">input</span> og <span class="highlight">label</span>. Det er et bevisst valg for å kunne legge <span class="highlight">role="radio"</span> direkte på host-elementet og styre tilgjengeligheten mer presist med <span class="highlight">aria-setsize</span>, <span class="highlight">aria-posinset</span> og <span class="highlight">aria-checked</span>. Les mer i <a href="./nve-segment-group#tilgjengelighet">tilgjengelighet</a> seksjonen i nve-segment-group.</p>

<p>
  <span class="highlight">nve-segment</span> har interne tilstander for <span class="highlight">size</span> og
  <span class="highlight">checked</span>, men disse styres normalt av
  <span class="highlight">nve-segment-group</span>. Komponenten er ikke ment å brukes alene: gruppen sørger for at kun ett
  alternativ kan være valgt, oppdaterer ARIA-attributter, og håndterer fokus/tastaturnavigasjon (piltaster).
</p>
</nve-message-card>

## Eksempler

### Start og end spor

Bruk <span class="highlight">start</span> og <span class="highlight">end</span> spor for å legge til ikoner.

<CodeExamplePreview>

```html
<nve-segment><nve-icon slot="start" name="computer"></nve-icon>Datamaskin</nve-segment>
```

</CodeExamplePreview>

<CodeExamplePreview>

```html
<nve-segment><nve-icon slot="end" name="phone"></nve-icon>Mobil</nve-segment>
```

</CodeExamplePreview>
