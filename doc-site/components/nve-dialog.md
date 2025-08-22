---
layout: component
---

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()" class="open-dialog">Vis dialogen</nve-button>
<nve-dialog label="Overskrift"> Innhold </nve-dialog>
```

</CodeExamplePreview>

## Eksempler

### Ikon foran label

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()" class="open-dialog">Vis dialogen</nve-button>
<nve-dialog label="Overskrift" icon="info"> Innhold </nve-dialog>
```

</CodeExamplePreview>

### Label som eget spor

Du kan legge overskriften inn et eget spor dersom du trenger mer kompleks styling eller struktur. Men merk at den fortsatt legges inn i en &lt;h2&gt;-tag

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()" class="open-dialog">Vis dialogen</nve-button>
<nve-dialog>
  <div slot="label">Denne overskriften er i et eget spor</div>
  Innhold
</nve-dialog>
```

</CodeExamplePreview>

### Knapper ved siden av lukk, og slot for footer

Det er egne spor for å legge innhold ved siden av lukk-knapp og i bunnen av dialogboksen
Sporet ved lukk-knapp skal kun brukes til enkle knapper, alt annet enn `nve-button` med enkelt `nve-icon` i seg vil ikke styles korrekt

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()" class="open-dialog">Vis dialogen</nve-button>
<nve-dialog label="Overskrift">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna sit amet velit tempor accumsan. Interdum
  et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vel ipsum dolor. Nullam a molestie risus, eget
  facilisis nisi. Phasellus eget faucibus mauris, in tincidunt mi. Curabitur urna tortor, semper vel facilisis vel,
  aliquam a risus. Praesent eu sapien ornare, ultrices neque id, tincidunt metus.
  <nve-button variant="ghost" onclick="() => {}" slot="header-actions">
    <nve-icon name="warning" />
  </nve-button>
  <nve-button variant="ghost" onclick="() => {}" slot="header-actions">
    <nve-icon name="open_in_new" />
  </nve-button>
  <div slot="footer">
    <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Ok</nve-button>
    <nve-button disabled>Slett alt</nve-button>
  </div>
</nve-dialog>
```

</CodeExamplePreview>
