# nve-textarea

## Properties

| Property         | Attribute        | Type                                             | Default         | Description                                      |
|------------------|------------------|--------------------------------------------------|-----------------|--------------------------------------------------|
| `autocapitalize` | `autocapitalize` | `"off" \| "none" \| "on" \| "sentences" \| "words" \| "characters"` | "off"           | Kontrollerer om og hvordan tekstinnput automatisk blir gjort stor som det blir skrevet inn av brukeren. |
| `autocorrect`    | `autocorrect`    | `string \| undefined`                            |                 | Indikerer om nettleserens autokorrekturfunksjon er på eller av. |
| `disabled`       | `disabled`       | `boolean`                                        | false           | Om textarea er deaktivert                        |
| `errorMessage`   | `errorMessage`   | `string \| undefined`                            |                 | Feil melding som vises under gruppe hvis validering feiler |
| `filled`         | `filled`         | `boolean`                                        | false           | Viser filled variant                             |
| `helpText`       | `helpText`       | `string`                                         | ""              | Hjelpetekst under textarea                       |
| `input`          |                  | `HTMLTextAreaElement`                            |                 | Hoved input felt i nve-textarea komponentet. Brukes til constraint validering |
| `inputmode`      | `inputmode`      | `"text" \| "none" \| "search" \| "decimal" \| "numeric" \| "tel" \| "email" \| "url" \| undefined` |                 | Forteller nettleseren hvilken type data som vil bli skrevet inn av brukeren, slik at den kan vise det passende virtuelle<br />tastaturet på støttede enheter. |
| `label`          | `label`          | `string`                                         | ""              | Label tekst                                      |
| `maxlength`      | `maxlength`      | `number \| undefined`                            |                 | Maksimal lengde på inndata som vil bli betraktet som gyldig. |
| `minlength`      | `minlength`      | `number \| undefined`                            |                 | Den minste lengden på inndata som vil bli betraktet som gyldig. |
| `name`           | `name`           | `string`                                         | ""              | Navnet på tekstområdet, sendt som et navn/verdi-par med skjemadata |
| `placeholder`    | `placeholder`    | `string`                                         | ""              | Placeholder tekst                                |
| `readonly`       | `readonly`       | `boolean`                                        | false           | Om textarea er skrivebeskyttet                   |
| `required`       | `required`       | `boolean`                                        | false           | Om textarea er obligatorisk                      |
| `requiredLabel`  | `requiredLabel`  | `string`                                         | "*Obligatorisk" | Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard. |
| `title`          | `title`          | `string`                                         | ""              |                                                  |
| `tooltip`        | `tooltip`        | `string \| undefined`                            |                 | Indikerer om nettleserens autokorrekturfunksjon er på eller av. |
| `value`          | `value`          | `string`                                         | ""              | Textarea verdi, sendt som et navn/verdi-par med skjemadata |

## Methods

| Method              | Type                       |
|---------------------|----------------------------|
| `setCustomValidity` | `(message?: string): void` |

## Events

| Event        | Description                       |
|--------------|-----------------------------------|
| `sl-blur`    | trigges når textarea mister fokus |
| `sl-change`  | trigges når textarea endrer verdi |
| `sl-input`   | trigges når textarea endrer verdi |
| `sl-invalid` | trigges når textarea er invalid   |

## CSS Shadow Parts

| Part                  | Description                                      |
|-----------------------|--------------------------------------------------|
| `base`                | textarea og ikone container                      |
| `form-control`        | hoved komponent sitt container                   |
| `help-text-container` | container for hjelpetekst<br /><br />Skal brukes til å lage lang tekstfelt. Min høyde er satt opp til --sizing-2x-small. De fleste attributer som brukes på vanlig textarea<br />burde bli støttet her. Hvis det er noe som mangler, bare å legge til.<br />Man kan bruke label og tooltip attributer for å vise label over textarea. Samt med helpText. Trenger ikke noe eksta slots per i dag. Trengs ikke å lage separate slots for det.<br />Siden vi skulle bruke ikoner inn i textarea var det enklere å lage vår egen komponent enn å leke med sl-textarea<br /><br />Validering. Siden textarea ikke er shoelace komponent, constraint valdiering skal ikke fungere så bra med andre shoelace komponenter i formen.<br />Shoelace wrapper alle sine form komponenter i en form kontroll som gjør at alle blir validert samtidig når man bruker constraint validering. Det er ikke en default<br />nettlesersen oppførsel. Submit event stopper på den første feil den møter i formen. Per i dag siden vi blander både shoelace komponenter og våre egne<br />våre komponeter skal bli diskriminert i gruppe validering. Derfor anbefales det å bruke custom validering på textarea med setCustomValidation. |
| `textarea-label`      | label og requiredLabel container                 |
