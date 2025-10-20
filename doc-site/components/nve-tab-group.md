---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-tab-group>
  <nve-tab slot="nav" panel="panel-1">Fane 1</nve-tab>
  <nve-tab slot="nav" panel="panel-2">Fane 2</nve-tab>

  <nve-tab-panel name="panel-1">Dette er innholdspanel for fane 1</nve-tab-panel>
  <nve-tab-panel name="panel-2">Dette er innholdspanel for fane 2</nve-tab-panel>
</nve-tab-group>
```

</CodeExamplePreview>

## Eksempler

### Størrelse

Størrelse kan settes enten direkte på hver `nve-tab` eller kan man sette en global størrelse på `nve-tab-group`.
Unngå å bruke forskjelige størrelser på fanene i samme gruppe. Små faner har mindre padding.
`large` er standard.

<CodeExamplePreview>

```html
<nve-tab-group size="small">
  <nve-tab slot="nav" panel="panel-1">Liten fane 1</nve-tab>
  <nve-tab slot="nav" panel="panel-2">Liten fane 2</nve-tab>

  <nve-tab-panel name="panel-1">Dette er innholdspanel for liten fane 1</nve-tab-panel>
  <nve-tab-panel name="panel-2">Dette er innholdspanel for liten fane 2</nve-tab-panel>
</nve-tab-group>

<nve-tab-group>
  <nve-tab slot="nav" panel="panel-1">Stor fane 1</nve-tab>
  <nve-tab slot="nav" panel="panel-2">Stor fane 2</nve-tab>

  <nve-tab-panel name="panel-1">Dette er innholdspanel for fane 1</nve-tab-panel>
  <nve-tab-panel name="panel-2">Dette er innholdspanel for fane 2</nve-tab-panel>
</nve-tab-group>
```

</CodeExamplePreview>

### Bakgrunn

Bakgrunn kan settes enten direkte på hver `nve-tab` ved å legge `background`-attributtet på elementet, eller man kan sette et globalt attribut på `nve-tab-group`.
Ingen bakgrunn er standard.

<CodeExamplePreview>

```html
<div style="padding:20px; background: #e8e4e4">
  <nve-tab-group background>
    <nve-tab slot="nav" panel="panel-1">Fane 1</nve-tab>
    <nve-tab slot="nav" panel="panel-2">Fane 2</nve-tab>

    <nve-tab-panel style="background: #fff" name="panel-1">Dette er innholdspanel for fane 1</nve-tab-panel>
    <nve-tab-panel style="background: #fff" name="panel-2">Dette er innholdspanel for fane 2</nve-tab-panel>
  </nve-tab-group>
</div>
```

</CodeExamplePreview>

### Skroll ved flere faner (og mobil støtte)

Hvis det er flere faner i gruppe enn det som vises på skjermen, blir kontrollknappene synlige. Knappene flytter til neste usynlige fane. Kontrollknappene vises både til høyre og venstre så lenge det fortsatt er faner skjult i noen av retningene.
På mobil kan man også bruke fingeren til å flytte fanene.
<nve-message-card variant="warning" label="Obs!" size="compact">
Kontrollknappene er kun tilgjengelige for musbrukere. Tastaturbrukere skal ikke kunne tabbe til knappene for å unngå forvirring og for å bevare vanlig tab-navigasjon i tab-funksjonaliteten.
</nve-message-card>

Vi bruker nve-button med text-variant som skrollknapper. Siden denne varianten ikke har noen bakgrunnsfarge, wrapper vi den med en tab-group\_\_nav-button-div. Fargen på denne kan settes via CSS-variabelen `--scroll-button-background`. Den bør ha samme farge som bakgrunnen til containeren der du plasserer fanene.

<CodeExamplePreview>

```html
<nve-tab-group>
  <nve-tab slot="nav" panel="panel-1">Fane 1</nve-tab>
  <nve-tab slot="nav" panel="panel-2">Fane 2</nve-tab>
  <nve-tab slot="nav" panel="panel-3">Fane 3</nve-tab>
  <nve-tab slot="nav" panel="panel-4">Fane 4</nve-tab>
  <nve-tab slot="nav" panel="panel-5">Fane 5</nve-tab>
  <nve-tab slot="nav" panel="panel-6">Fane 6</nve-tab>
  <nve-tab slot="nav" panel="panel-7">Fane 7</nve-tab>
  <nve-tab slot="nav" panel="panel-8">Fane 8</nve-tab>
  <nve-tab slot="nav" panel="panel-9">Fane 9</nve-tab>
  <nve-tab slot="nav" panel="panel-10">Fane 10</nve-tab>
  <nve-tab slot="nav" panel="panel-11">Fane 11</nve-tab>
  <nve-tab slot="nav" panel="panel-12">Fane 12</nve-tab>

  <nve-tab-panel name="panel-1">Dette er innholdspanel for fane 1</nve-tab-panel>
  <nve-tab-panel name="panel-2">Dette er innholdspanel for fane 2</nve-tab-panel>
  <nve-tab-panel name="panel-3">Dette er innholdspanel for fane 3</nve-tab-panel>
  <nve-tab-panel name="panel-4">Dette er innholdspanel for fane 4</nve-tab-panel>
  <nve-tab-panel name="panel-5">Dette er innholdspanel for fane 5</nve-tab-panel>
  <nve-tab-panel name="panel-6">Dette er innholdspanel for fane 6</nve-tab-panel>
  <nve-tab-panel name="panel-7">Dette er innholdspanel for fane 7</nve-tab-panel>
  <nve-tab-panel name="panel-8">Dette er innholdspanel for fane 8</nve-tab-panel>
  <nve-tab-panel name="panel-9">Dette er innholdspanel for fane 9</nve-tab-panel>
  <nve-tab-panel name="panel-10">Dette er innholdspanel for fane 10</nve-tab-panel>
  <nve-tab-panel name="panel-11">Dette er innholdspanel for fane 11</nve-tab-panel>
  <nve-tab-panel name="panel-12">Dette er innholdspanel for fane 12</nve-tab-panel>
</nve-tab-group>
```

</CodeExamplePreview>

### Bestemme aktiv fane på forhånd

`activeTab`-attributtet bestemmer hvilken fane som er aktiv ved oppstart. Hvis den ikke er satt, blir den første fanen aktiv.

<CodeExamplePreview>

```html
<nve-tab-group activeTab="panel-2">
  <nve-tab slot="nav" panel="panel-1">Fane 1</nve-tab>
  <nve-tab slot="nav" panel="panel-2">Fane 2</nve-tab>

  <nve-tab-panel name="panel-1">Dette er innholdspanel for fane 1</nve-tab-panel>
  <nve-tab-panel name="panel-2">Dette er innholdspanel for fane 2</nve-tab-panel>
</nve-tab-group>
```

</CodeExamplePreview>

### Synlig ledetekst for fanegruppe

Hvis fanegruppe har en synlig ledetekst som beskriver hva gruppe inneholder er det anbefalt å bruke `aria-labelledby` på diven med `tablist` rollen. Bruk `aria-labelledby` direkte på `nve-tab-group`. Husk å legge til kun `id` på selve ledetekst. Hvis det ikke finnes noe ledetekst bruk gjerne vanlig `aria-label` på selve `nve-tab-group`-elementet.

<CodeExamplePreview>

```html
<div>
  <span id="inventors-header"><b>Oppfinnere</b></span>
  <nve-tab-group aria-labelledby="inventors-header">
    <nve-tab slot="nav" panel="panel-1">Benjamin Franklin</nve-tab>
    <nve-tab slot="nav" panel="panel-2">Maria Sklodowska-Curie</nve-tab>

    <nve-tab-panel name="panel-1"
      >Benjamin Franklin var en amerikansk journalist, forfatter, filantrop, vitenskapsmann, oppfinner og diplomat,
      blant mye annet. Han var også en av lederne av den amerikanske revolusjonen. Han huskes også for sine
      eksperimenter med elektrisitet. Som oppfinner er han mest kjent for lynavlederen, bifokale
      brilleglass</nve-tab-panel
    >
    <nve-tab-panel name="panel-2"
      >Maria Sklodowska-Curie var en polsk-fransk kjemiker og fysiker. Hun var den første kvinnelige nobelprisvinner
      innen naturvitenskap og den første som fikk nobelprisen to ganger – nobelprisen i fysikk (1903) og nobelprisen i
      kjemi (1911). Hun var også den første person som mottok nobelprisen innen to vitenskaper.</nve-tab-panel
    >
  </nve-tab-group>
</div>
```

</CodeExamplePreview>

### Fane som er disabled

Man kan ha tilfeller hvor man ønsker at en fane er synlig, men ikke klikkbar. Dette gjør man ved å sette `disabled` på den aktuelle fanen

<CodeExamplePreview>

```html
<nve-tab-group>
  <nve-tab slot="nav" panel="panel-1">Fane 1</nve-tab>
  <nve-tab slot="nav" panel="panel-2" disabled>Fane 2</nve-tab>
  <nve-tab slot="nav" panel="panel-3">Fane 3</nve-tab>
  <nve-tab slot="nav" panel="panel-4">Fane 4</nve-tab>
  <nve-tab slot="nav" panel="panel-5">Fane 5</nve-tab><nve-tab slot="nav" panel="panel-6" disabled>Fane 6</nve-tab>

  <nve-tab-panel name="panel-1">Dette er innholdspanel for fane 1</nve-tab-panel>
  <nve-tab-panel name="panel-2">Dette er innholdspanel for fane 2</nve-tab-panel>
  <nve-tab-panel name="panel-3">Dette er innholdspanel for fane 3</nve-tab-panel>
  <nve-tab-panel name="panel-4">Dette er innholdspanel for fane 4</nve-tab-panel>
  <nve-tab-panel name="panel-5">Dette er innholdspanel for fane 5</nve-tab-panel>
  <nve-tab-panel name="panel-6">Dette er innholdspanel for fane 6</nve-tab-panel>
</nve-tab-group>
```

</CodeExamplePreview>

### Dynamisk visning av fane innhold med `nve-tab-change`-eventet

Ofte ønsker man at innholdet i en fane ikke skal rendres før den er aktivert. Dette gjelder spesielt når innholdet kommer fra API-kall, og man kun ønsker å hente data når fanen er aktiv. I slike tilfeller anbefales det å vise innholdet kun når fanen er aktiv. For å sjekke hvilken fane som er aktiv og hvilket innhold som skal vises, kan man bruke `nve-tab-change`-eventet. Dette trigges hver gang man bytter fane og returnerer navnet på det aktive fanepanelet. Under kan du se hvordan dette fungerer i en VUE-app:

<SandboxPreview>

```

<template>
  <nve-tab-group aria-label="joga posisjoner" @nve-tab-change="changeActiveTab">
    <nve-tab slot="nav" panel="savasana">Savasana</nve-tab>
    <nve-tab slot="nav" panel="tadasana">Tadasana</nve-tab>
    <nve-tab-panel name="savasana">
      <div v-if="activeTab==='savasana'">
      Savasana, also known as the Corpse Pose, is a restorative posture practiced at the end of a yoga session. In this position, you lie flat on your back with your arms relaxed at your sides, palms facing upward, and your legs slightly apart. The purpose of Savasana is deep relaxation, allowing the body and mind to integrate the benefits of the practice. It calms the nervous system, reduces stress, and promotes mental clarity.
      </div>
    </nve-tab-panel>
    <nve-tab-panel name="tadasana">
       <div v-if="activeTab==='tadasana'">
       Tadasana, or Mountain Pose, is a foundational standing posture that emphasizes alignment and stability. To practice it, you stand upright with your feet together or hip-width apart, press your feet firmly into the ground, lengthen your spine, and roll your shoulders back and down while keeping your gaze forward. Tadasana improves posture, strengthens the legs, and enhances balance and body awareness, serving as a starting point for many standing poses.
       </div>
    </nve-tab-panel>
  </nve-tab-group>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "nve-designsystem/components/nve-tab-group/nve-tab-group.component.js";
import "nve-designsystem/components/nve-tab/nve-tab.component.js";
import "nve-designsystem/components/nve-tab-panel/nve-tab-panel.component.js";

const activeTab = ref<'savasana' | 'tadasana'>('savasana');

const changeActiveTab = (event: CustomEvent) => {
  const panelName = event.detail;
  activeTab.value = panelName;
}
</script>

```

</SandboxPreview>

## Tilgjengelighet

### Aria-roller, og attributter

Fanekomponenten følger [WAI-ARIA sine retningslinjer](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#:~:text=of%20the%20page.-,WAI%2DARIA%20Roles%2C%20States%2C%20and%20Properties,-The%20element%20that) for tilgjengelige fanesett, og er utformet for å støtte skjermlesere og tastaturnavigasjon. Følgende funksjoner er implementert:

- Elementet som fungerer som container for fanene har `role="tablist"` for å identifisere det som et fanesett.
- Hver fane har `role="tab"` og ligger inne i tablist-elementet.
- Hvert tilhørende innholdspanel har `role="tabpanel"`.
- Hver fane har aria-controls som refererer til id-en til det tilknyttede tabpanel-elementet.
- Den aktive fanen har aria-selected="true", mens alle inaktive faner har aria-selected="false".
- Hvert tabpanel har aria-labelledby som refererer til tilhørende fane, slik at skjermlesere kan forstå sammenhengen mellom fane og panel.

Denne funksjonen må man huske på å implementere selv:

- Dersom fanesettet har en [synlig tittel](#synlig-ledetekst-for-fanegruppe), brukes aria-labelledby på tablist-elementet for å referere til tittel-elementet. Dette må settes på nve-tab-group komponent ved bruk av `aaria-labelledby`-attributet. Hvis synlig tittel finnes ikke, bruk `aria-label` på nve-tab-group for å gi en programmatisk tittel.

Disse rollene og attributtene sikrer at brukere med hjelpemiddelteknologi kan navigere og forstå grensesnittet på en trygg og forutsigbar måte.

### Tastaturnavigasjon

Når fokus flyttes inn i fanelisten fokus settes automatisk på den aktive fanen.
Når fokus er på en fane i en horisontal faneliste:

- venstre pil flytter fokus til forrige fane. (Hvis fokus er på første fane, flyttes det til siste fane.)
- høyre pil flytter fokus til neste fane. (Hvis fokus er på siste fane, flyttes det til første fane.)
- `Space` eller `Enter` aktiverer den fokuserte fanen.
- `Home` flytter fokus til første fane.
- `End` flytter fokus til siste fane.

<nve-message-card variant="warning" label="Din innsats er også viktig!" size="compact">
<span>Når fokus er på en fane og brukeren trykker <b>Tab</b> for å navigere videre i tabulatorrekkefølgen, flyttes fokus som regel til det tilhørende innholdspanelet <em>(nve-tab-panel)</em>. Dersom dette panelet inneholder fokuserbare elementer som knapper eller lenker, vil fokus automatisk gå til det første tilgjengelige elementet.</span>

<span>Men dersom innholdet i nve-tab-panel ikke har noen naturlige fokusmål, er det viktig at selve panelet gjøres fokusbart ved å sette <b>tabindex="0"</b>. Dette sikrer at brukeren ikke "hopper over" innholdet i panelet ved tastaturnavigasjon.</span>

<span>Vi har valgt å ikke implementere automatisk håndtering av dette i komponenten, da det ville krevd omfattende og ytelseskrevende DOM-inspeksjon. I stedet forventer vi at utviklere selv vurderer behovet og legger til <b>tabindex="0"</b> der det er hensiktsmessig.</span>
</nve-message-card>

### Støtte for redusert bevegelse

Komponenten tar hensyn til brukerens preferanser for redusert bevegelse ved å respektere `prefers-reduced-motion: reduce`. Dette påvirker animasjonen av indikatorlinjen for aktive faner (gjelder kun faner uten bakgrunn). Når denne preferansen er aktivert, vil indikatoren ikke bevege seg, men i stedet vises med en rolig og diskret overgang – uten raske eller forstyrrende bevegelser.

### Andre viktige valg i komponentens struktur

Det er bevisst valgt ikke å aktivere faner automatisk når man navigerer mellom dem med tastatur. Dette valget er tatt for å unngå utilsiktet bruk som kan gå utover tilgjengelighet og brukeropplevelse. Les gjerne mer [her](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_selection_follows_focus) for utdyping. Dersom det likevel er et sterkt behov for slik funksjonalitet, kan det vurderes å introdusere en egenskap for å støtte dette.

Selv om det er støttet, så bør man sterkt vurdere å ikke bruke `disabled`-faner i komponenten. Begrunnelsen er at deaktiverte faner ikke gir brukeren tilstrekkelig informasjon om hvorfor fanen ikke er tilgjengelig. Deaktiverte elementer kan ikke motta fokus, noe som medfører at skjermlesere ofte hopper over disse, slik at brukere aldri blir oppmerksomme på deres eksistens. I tillegg kan det for enkelte brukere være uklart at en fane er deaktivert, noe som kan føre til frustrasjon dersom de forsøker å aktivere fanen uten respons.
<nve-message-card label="Tips!" size="compact">
Vi anbefaler derfor at alle faner holdes aktiverte. Dersom en fane ikke skal vise innhold — eller det foreligger annen grunn til at en fane ikke skal kunne brukes — er det bedre å la fanen være aktiv, men vise en tydelig melding i det tilhørende innholdspanelet som forklarer situasjonen for brukeren.</nve-message-card>

```

```
