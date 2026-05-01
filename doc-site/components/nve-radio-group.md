---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-radio-group label="Hvilken seksjon er best i IKTI?">
  <nve-radio value="IUR-1">Kanskje IUR</nve-radio>
  <nve-radio value="IUR-2">Må være IUR</nve-radio>
  <nve-radio value="IUR-3">IUR?</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

<nve-message-card variant="primary" label="Hvorfor bruker vi ikke name-attributtet" size="compact">

<p><span class="highlight">nve-radio-group</span> og <span class="highlight">nve-radio</span> bruker ikke <span class="highlight">name</span>-attributtet slik vanlige HTML-radiofelter gjør. Komponenten støtter ikke native <span class="highlight">form submission</span>, så <span class="highlight">name</span> blir ikke brukt til å sende inn en verdi i et skjema.</p>

<p><span class="highlight">name</span> er heller ikke nødvendig for å gruppere radio-knappene. Gruppelogikken styres av <span class="highlight">nve-radio-group</span>, som sørger for at bare ett alternativ kan være valgt om gangen og emitterer valgt verdi via komponentens <span class="highlight">change</span>-hendelse.</p>

<p>For denne komponenten er det derfor <span class="highlight">value</span> på valgt <span class="highlight">nve-radio</span> og <span class="highlight">change</span>-hendelsen fra <span class="highlight">nve-radio-group</span> som brukes for å lese brukerens valg.</p>
</nve-message-card>

Write about no name because we dont support form submission, and also we dont need it for grouping

<CodeExamplePreview>

```html
<nve-radio-group label="Test" tooltip="test" value="test3">
  <nve-radio value="test2" size="large">test 2</nve-radio>
  <nve-radio value="test3" size="small">test 3</nve-radio>
  <nve-radio value="test4" disabled size="small">test 4</nve-radio>
</nve-radio-group>
<nve-radio-group label="test" orientation="horizontal" required requiredvalue="Obligatorisk">
  <nve-radio value="test2" size="large">test2</nve-radio>
  <nve-radio value="test3" size="small">test3</nve-radio>
  <nve-radio value="test3" size="small">test3</nve-radio>
</nve-radio-group>

<nve-radio-group label="test" orientation="vertical" errorMessage="should be better">
  <nve-radio value="test2" size="large"></nve-radio>
  <nve-radio value="test3" size="small"></nve-radio>
  <nve-radio value="test3" size="small"></nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>
