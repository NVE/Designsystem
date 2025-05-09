---
layout: component
---

Se også [nve-carousel-item](./nve-carousel-item.html) som brukes inne i `nve-carousel`.

<CodeExamplePreview>

```html
<nve-carousel pagination navigation>
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

Karusellen brukes til å vise innhold i en serie som brukerne kan klikke seg gjennom. Karusellen fyller vidden i elementet den er plassert i.

## Eksempler

### Navigering

Bruk `navigation` for å legge på navigerings-knapper på hver side av bildet i karusellen.
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

### Numerisk visning av aktivt lysbilde

Bruk `pagination-counter` for å legge på en "aktiv / total" visning på elementene i karusellen.

<CodeExamplePreview>

```html
<nve-carousel navigation pagination-counter>
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

Endre fargen på paginerings telleren ved å legge inn en inline style på `--pagination-counter-color`. Under er det brukt i en div for å vise eksempelet, men stylingen kan i praksis settes rett i `nve-carousel`.
<CodeExamplePreview>

```html
<div style="--pagination-counter-color: red;">
  <nve-carousel navigation pagination-counter>
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
</div>
```

</CodeExamplePreview>

Det kan legges til en bakgrunnsfarge på paginerings-telleren. Endre bakgrunnsfargen ved å legge inn en inline style på `--pagination-counter-bg-color`. Under er det brukt i en div for å vise eksempelet, men stylingen kan i praksis settes rett i `nve-carousel`.

<CodeExamplePreview>

```html
<div style="--pagination-counter-bg-color: lightgray;">
  <nve-carousel navigation pagination-counter>
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
</div>
```

</CodeExamplePreview>

### Paginering

Bruk `pagination` for å legge på paginerings-knapper under bildekarusellen. Det er ikke anbefalt å bruke både `pagination` og `pagination-counter` sammen da det strider i mot design-mønstret.

<CodeExamplePreview>

```html
<nve-carousel pagination>
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

### Looping

Bruk `loop` for å kunne bla igjennom bildene fra start flere ganger.

<CodeExamplePreview>

```html
<nve-carousel navigation pagination loop>
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
  <nve-carousel-item>
    <img src="/assets/skogfjordvann.jpg" alt="Skogfjordvann" />
  </nve-carousel-item>
  <nve-carousel-item description="Snødekkeundersøkelse. Foto: Gustav Pless.">
    <img src="/assets/snoedekkeundersoekelse.jpg" alt="Snødekkeundersøkelse" />
  </nve-carousel-item>
</nve-carousel>
```

</CodeExamplePreview>

### Miniatybilder

Bruk `nve-carousel-thumbnail` for å vise miniatyrbilder under karusellen. Definer en lik `id` på `nve-carousel` og `nve-carousel-thumbnail` for å koble komponentene sammen.

<CodeExamplePreview>

```html
<nve-carousel navigation loop id="thumbnail">
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

<nve-carousel-thumbnail carouselId="thumbnail">
  <img src="/assets/transmisjonsnett.jpg" alt="Transmisjonsnett" />
  <img src="/assets/nigardsbreen.jpg" alt="Nigardsbreen" />
  <img src="/assets/tarhalsen_fyr.jpg" alt="Tarhalsen fyr" />
  <img src="/assets/skogfjordvann.jpg" alt="Skogfjordvann" />
</nve-carousel-thumbnail>
```

</CodeExamplePreview>

### Autoplay

Bruk `autoplay` til å rotere mellom bildene i karusellen automatisk. For å endre hvor lenge et lysbilde vises før det går videre, sett `autoplay-interval` til ønsket millisekunder. For best resultat, bruk `loop`-propertien når autoplay er aktivert. Autoplay vil settes på pause mens brukeren samhandler med karusellen.

<CodeExamplePreview>

```html
<nve-carousel pagination loop autoplay>
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

### Flere lysbilder per visning

Bruk `slides-per-page` for å vise flere lysbilder per visning i karusellen. Du kan også bruke `slides-per-move` attributtet for å gå frem mer enn ett lysbilde om gangen, hvis ønskelig.

<CodeExamplePreview>

```html
<nve-carousel pagination navigation slides-per-page="2" slides-per-move="2">
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

### Vertikal scrolling

Bildekarusellen støtter ikke vertikal scrolling per nå.
