---
layout: component
---

Gå til [nve-carousel](./nve-carousel.html) for mer info om denne komponenten.

<CodeExamplePreview>

```html
<nve-carousel navigation>
  <nve-carousel-item>
    <img src="/assets/transmisjonsnett.jpg" alt="Transmisjonsnett" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="/assets/nigardsbreen.jpg" alt="Nigardsbreen" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="/assets/tarhalsen_fyr.jpg" alt="Tarhalsen fyr" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="/assets/skogfjordvann.jpg" alt="Skogfjordvann" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Bildetekst

Bruk `description` på `nve-carousel-item`for å legge til en bildetekst til hvert bilde om ønskelig. Det er mulig å bare ha bildetekst på noen av bildene.

<CodeExamplePreview>

```html
<nve-carousel navigation pagination loop>
  <nve-carousel-item description="Transmisjonsnett i Sogn og Fjordane. Foto: Velaug Amalie Mook.">
    <img src="/assets/transmisjonsnett.jpg" alt="Transmisjonsnett" />
  </nve-carousel-item>
  <nve-carousel-item description="Snømåling på Nigardsbreen.">
    <img src="/assets/nigardsbreen.jpg" alt="Nigardsbreen" />
  </nve-carousel-item>
  <nve-carousel-item description="Tarhalsen fyr Sørøya. Foto: Stig Storheil.">
    <img src="/assets/tarhalsen_fyr.jpg" alt="Tarhalsen fyr" />
  </nve-carousel-item>
  <nve-carousel-item description="Nivellering Skogsfjordvann.">
    <img src="/assets/skogfjordvann.jpg" alt="Skogfjordvann" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Horisontale og vertikale bilder sammen

Det er mulig å kombinere horistontalt og vertikalt innhold i karusellen, men dette endrer høyden på selve karusellen ettersom den går ut i fra det høyeste innholdet i karusellen.

<CodeExamplePreview>

```html
<nve-carousel pagination navigation loop>
  <nve-carousel-item>
    <img src="/assets/transmisjonsnett.jpg" alt="Transmisjonsnett" />
  </nve-carousel-item>
  <nve-carousel-item>
    <img src="/assets/snoedekkeundersoekelse.jpg" alt="Snødekkeundersøkelse" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Vise noe annet enn bilder

Du kan også legge andre ting enn bilder i `nve-carousel-item`.

<CodeExamplePreview>

```html
<nve-carousel navigation>
  <nve-carousel-item>
    <div>
      <h1>Velg språk / choose language</h1>
      <br />
      <nve-select label="Språk/language">
        <nve-option value="valg1">Norsk</nve-option>
        <nve-option value="valg2">Engelsk</nve-option>
      </nve-select>
    </div>
  </nve-carousel-item>
  <nve-carousel-item>
    <div style="color: green">
      <h1>Du greide det!</h1>
      <p>Nå kan du:</p>
      <ul>
        <li>Finne deg noe godt å spise/drikke</li>
        <li>Lene deg tilbake</li>
        <li>Ta helg</li>
      </ul>
    </div>
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>
