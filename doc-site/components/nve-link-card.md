---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-link-card label="Kommuneplan" href="/components/Komponentoversikt"></nve-link-card>
```

</CodeExamplePreview>

## Varianter

Bruk `variant` for å velge farge. `primary` er standard.

<CodeExamplePreview>

```html
<nve-link-card label="Kommuneplan"></nve-link-card>
<nve-link-card label="Kommuneplan" variant="contrast"></nve-link-card>
<nve-link-card label="Kommuneplan" variant="secondary"></nve-link-card>
```

</CodeExamplePreview>

## Størrelse

Bruk `size` for å endre størrelse. `medium` er standard.

<CodeExamplePreview>

```html
<nve-link-card label="Kommuneplan" additionalText="Additional text." variant="contrast" size="small"></nve-link-card>
<nve-link-card label="Kommuneplan" additionalText="Additional text." variant="contrast" size="medium"></nve-link-card>
<nve-link-card label="Kommuneplan" additionalText="Additional text." variant="contrast" size="large"></nve-link-card>
```

</CodeExamplePreview>

## Ekstra tekst

Du kan legge til en ekstra tekst under hovedlenkens overskrift ved å bruke `additionalText`-egenskapen. Både overskriften og den tilhørende teksten blir lest opp av skjermlesere, så sørg for at teksten er kortfattet og lett å forstå.

<CodeExamplePreview>

```html
<nve-link-card label="Hoved overskrift" additionalText="Ekstra tekst"></nve-link-card>
```

</CodeExamplePreview>

## Klikkhandlinger

Man kan velge mellom fire klikk-handlinger ved bruk av `clickAction`-egenskapen. Handlingen bestemmer både funksjonaliteten og hvilket ikon som vises i kortet. Standardverdi er `internal`.

### Intern

`internal` håndterer intern routing. Brukes når brukeren skal navigere innenfor samme applikasjon. Sett `href` for å definere URL-en.

<CodeExamplePreview>

```html
<nve-link-card
  label="Intern"
  additionalText="Klikk for å gå til intern linke"
  variant="contrast"
  clickAction="internal"
  href="/components/nve-button.html"
>
</nve-link-card>
```

</CodeExamplePreview>

### Eksternal

`external` åpner en ekstern side. Automatisk settes `target="_blank"` på `<a>`-elementet.
Se anbefalinger for eksterne lenker i seksjonen [Tilgjengelighet](#tilgjengelighet).

<CodeExamplePreview>

```html
<nve-link-card
  label="Ekstern (åpnes i en ny fane)"
  variant="contrast"
  clickAction="external"
  href="https://www.nve.no/"
>
</nve-link-card>
```

</CodeExamplePreview>

### Nedlasting

`download` starter nedlasting av en fil. Legger til `download`-attributtet slik at nettleseren forstår at lenken ikke skal navigere videre. Dersom du ønsker spesifikk filhåndtering, kan du implementere det selv med en vanlig `onClick`-metode (avhengig av rammeverket du bruker).

<nve-message-card variant="warning" label="Viktig!" size="compact">
<p>Hvis filen ligger på en annen origin enn applikasjonen, vil lenken ikke laste ned filen, men i stedet åpne adressen fra <b>href</b>-attributtet. I slike tilfeller må du selv håndtere nedlastingen med onClick.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-link-card
  label="Last ned Mardalsfossen bilde (JPEG, 72 KB)"
  variant="contrast"
  href="/assets/mardalsfossen.jpg"
  clickAction="download"
>
</nve-link-card>
```

</CodeExamplePreview>

### Epost

`mail` åpner brukerens e-postklient for å sende e-post til adressen angitt i href.
Se anbefalinger for e-postlenker i seksjonen [Tilgjengelighet](#tilgjengelighet).

<CodeExamplePreview>

```html
<nve-link-card
  label="Send e-post til someone@example.com"
  href="someone@example.com"
  variant="contrast"
  clickAction="mail"
>
</nve-link-card>
```

</CodeExamplePreview>

## Bruk med klient side-routing i SPA-applikasjoner

Når man benytter klientside-routing, for eksempel med `routerLink`, genereres et eget `<a>`-element av rammeverket. I disse tilfellene blir `nve-link-card` pakket inn i en `<a>`. For å unngå ugyldig HTML-struktur med `<a>`-elementer inni hverandre, sjekker `nve-link-card` derfor om dets direkte forelder er et `<a>`. Hvis dette er tilfelle, rendres kortet som et `<div>` i stedet for et `<a>`.

På denne måten beholdes mest funksjonalitet og styling fra `nve-link-card`, samtidig som man unngår semantiske og tekniske problemer med nestede lenker. Eneste som mangler er style på besøket lenker. For det kan du benytte bolsk `visited`- egenskap i `nve-link-card`. Man må skrive en egen logikk for å sjekke hvilke lenker var allerede besøket i SPA-router.

Les mer i seksjonen [Tilgjengelighet](#tilgjengelighet).

## Tilgjengelighet

### Retningslinjer

`nve-link-card` benytter den semantiske HTML-taggen `<a>` med `href`-attributtet. Dette gjør at komponenten automatisk får `role="link"` og dermed oppfører seg som en lenke i alle moderne nettlesere og hjelpe­midler.
Det gir oss flere fordeler ut av boksen som f.eks lenken aktivering med `Enter`, eller åpne lenken i en kontekstmeny med `Shift + F10` eller høyreklikk.

En lenke har fire standardtilstander: aktivert, ubesøkt, besøkt og hover. Alt disse støttes.

Det anbefales ikke å bruke `aria-disabled="true"` på lenker. Årsaken er at skjermlesere både annonserer `aria-disabled`, og samtidig tolker elementet som en lenke basert på href. Dette skaper forvirring for brukere.
Dersom du ønsker at en lenke ikke skal være aktiv, skal du utelate `href`-attributtet. `nve-link-card` håndterer dette på en god måte. Hvis lenken er deaktivert bør du også vurdere å forklare hvorfor den ikke er tilgjengelig, slik at brukeren får riktig kontekst.

### Eksterne lenker - best praksis

Når en lenke åpner i en ny fane, bør brukeren informeres om dette i selve lenketeksten.
For eksempel: `Varsom (åpnes i ny fane)`
Dette er spesielt viktig for skjermleserbrukere, som da vet hva de kan forvente.

### E-postlenker - best praksis

For e-postlenker er det lurt å inkludere adressen direkte i lenketeksten, slik at brukeren forstår hva som skjer ved klikk.
Eksempel: `Gi oss beskjed på support@nve.no`.
Det kan være uønsket å bli tatt i en annen kontekst (epost appen) når man klikker på en epost lenke.

### Nedlastingslenker - best praksis

For lenker som laster ned filer anbefales det å inkludere både filtype og filstørrelse i lenketeksten. Dette gjør at brukere kan vurdere om de har riktig programvare og tilstrekkelig båndbredde før nedlasting.
Eksempel: `Last ned rapport (PDF, 2 MB)`

### Lenker vs. knapper

En lenke skal kun brukes til navigasjon. Hvis du trenger å legge til ekstra funksjonalitet som ikke handler om å navigere til en ny side (`onclick` for eksempel), bør du vurdere å bruke en knapp-komponent i stedet.

### Lenketekst

Unngå å bruke ordet `lenke` i selve lenketeksten. Skjermlesere annonserer allerede at elementet er en lenke. Eksempel:
<b>Dårlig</b>: `Om oss lenke` → Skjermleser sier: `Om oss lenke, lenke`.
<b>Bra</b>: `Om oss`

### Tilgjengelighet i SPA-routing

Ved bruk av SPA-routing (f.eks. Vue Router eller React Router) oppstår et kjent tilgjengelighetsproblem: siden annonserer ikke automatisk ny sidetittel ved navigasjon. For å gi en god opplevelse bør man:

- Flytte fokus til `<main>`-elementet ved navigasjon
- Oppdatere og annonsere sidetittelen, slik at skjermleser informerer brukeren om at de har navigert til en ny side
