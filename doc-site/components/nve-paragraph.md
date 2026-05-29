---
layout: component
---

<CodeExamplePreview>

```html
<nve-paragraph size="bodyLarge">Dette er et vanlig avsnitt</nve-paragraph>
```

</CodeExamplePreview>

## Eksempler

Eksemplene viser hvordan du kan bruke paragraph-komponenten med ulike typografivarianter for å tilpasse tekst til innhold og kontekst.

### Lead-varianter

Lead-varianter brukes typisk som ingress, altså et kortfattet sammendrag mellom heading og brødtekst.

<CodeExamplePreview>

```html
<nve-paragraph size="leadLargeRegular">Lead Large Regular</nve-paragraph>
<nve-paragraph size="leadMediumRegular">Lead Medium Regular</nve-paragraph>
<nve-paragraph size="leadSmallRegular">Lead Small Regular</nve-paragraph>
<nve-paragraph size="leadLargeSemibold">Lead Large Semibold</nve-paragraph>
<nve-paragraph size="leadMediumSemibold">Lead Medium Semibold</nve-paragraph>
<nve-paragraph size="leadSmallSemibold">Lead Small Semibold</nve-paragraph>
```

</CodeExamplePreview>

### Body-varianter

Body-varianter brukes til vanlig brødtekst i artikler, hjelpetekster og lignende.

<CodeExamplePreview>

```html
<nve-paragraph size="bodyLarge">Body Large</nve-paragraph>
<nve-paragraph size="bodyMedium">Body Medium</nve-paragraph>
<nve-paragraph size="bodySmall">Body Small</nve-paragraph>
<nve-paragraph size="bodyXSmall">Body XSmall</nve-paragraph>
<nve-paragraph size="bodyLargeUnderline">Body Large Underline</nve-paragraph>
<nve-paragraph size="bodyMediumUnderline">Body Medium Underline</nve-paragraph>
<nve-paragraph size="bodySmallUnderline">Body Small Underline</nve-paragraph>
<nve-paragraph size="bodyXSmallUnderline">Body XSmall Underline</nve-paragraph>
```

</CodeExamplePreview>

### Body-compact-varianter

Body-compact-varianter gir ekstra kompakt brødtekst, egnet for tabeller, lister eller områder med begrenset plass.

<CodeExamplePreview>

```html
<nve-paragraph size="bodyLargeCompact">Body Compact Large</nve-paragraph>
<nve-paragraph size="bodyMediumCompact">Body Compact Medium</nve-paragraph>
<nve-paragraph size="bodySmallCompact">Body Compact Small</nve-paragraph>
<nve-paragraph size="bodyXSmallCompact">Body Compact XSmall</nve-paragraph>
<nve-paragraph size="bodyLargeUnderlineCompact">Body Compact Large Underline</nve-paragraph>
<nve-paragraph size="bodyMediumUnderlineCompact">Body Compact Medium Underline</nve-paragraph>
<nve-paragraph size="bodySmallUnderlineCompact">Body Compact Small Underline</nve-paragraph>
<nve-paragraph size="bodyXSmallUnderlineCompact">Body Compact XSmall Underline</nve-paragraph>
```

</CodeExamplePreview>

## Retningslinjer

Paragraph brukes til å formidle løpende tekst, mengdetekst og ingress på en tydelig og strukturert måte. Del opp innholdet i avsnitt for å gjøre det lettere å lese og forstå.

### Brukes til

- Avsnitt i artikler
- Mengdetekst
- Ingress (lead-varianter)

### Brukes ikke til

- Inline tekst
- Annen semantisk tekst: overskrift, liste, ledetekst, tabelltittel.

### Varianter

Det finnes stiler for brødtekst og ingress. Du velger selv hvilken stil (størrelse og vekt) du skal bruke: body-stiler for brødtekst og lead-stiler for ingress. "Medium" er standard størrelse for tekst. Bruk andre størrelser om teksten skal fremheves eller tones ned.

### Hvilken stil?

Navn på stilene kombinerer semantisk element (avsnitt eller ingress) og størrelse. Velg variant ut fra hvor teksten skal brukes og hvor mye oppmerksomhet den skal få.

### Struktur og lesbarhet

Hold avsnitt fokuserte og godt strukturerte, og del opp lange tekstblokker i mindre deler for å gjøre innholdet lettere å skanne og forstå. Sørg for at linjelengde og luft rundt teksten bidrar til god leseflyt.

Brødtekst skal være tydelig, konsis og skrevet i klart språk. Start med det viktigste innholdet slik at brukerne raskt forstår sammenhengen. Hvert avsnitt bør handle om ett tema eller én idé av gangen.

Lead brukes typisk som ingress, altså et kortfattet sammendrag mellom heading og brødtekst.

## Tilgjengelighet

- Paragraph-komponenten bruker `<p>`-tag for korrekt semantikk.
- Teksten legges i slot, slik at den er tilgjengelig for skjermlesere.
- Sørg for god fargekontrast mellom tekst og bakgrunn, i tråd med WCAG-krav. Det er ditt ansvar som designer eller utvikler å sikre at kontrasten oppfyller kravene.
- Del opp lange tekstblokker for å gjøre innholdet lettere å lese og forstå for alle brukere.

Se designsystemet for alle varianter og tokens.
