# nve-checkbox-group

## Properties

| Property         | Attribute        | Type                         | Default         | Description                                      |
|------------------|------------------|------------------------------|-----------------|--------------------------------------------------|
| `disabled`       | `disabled`       | `boolean`                    | false           | Deaktiverer alle sjekkbokser hvis 'true'         |
| `errorMessage`   | `errorMessage`   | `string \| undefined`        |                 | Feil melding som vises under gruppe hvis validering feiler |
| `label`          | `label`          | `string \| undefined`        |                 | Viser label til sjekboksgruppen                  |
| `orientation`    | `orientation`    | `"horizontal" \| "vertical"` | "vertical"      | Om gruppen skal rendres horisontalt eller vertikalt |
| `required`       | `required`       | `boolean`                    | false           | Om minst en sjekkboks er sjekket på              |
| `requiredLabel`  | `requiredLabel`  | `string`                     | "*Obligatorisk" | Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard |
| `selectedValues` | `selectedValues` | `string[] \| undefined`      |                 | Returnerer et array av value-attributet til alle sjekkbokser som er valgt |
| `slot`           |                  |                              |                 |                                                  |
| `tooltip`        | `tooltip`        | `string \| undefined`        |                 | Viser i ikone og tooltip tekst ved siden av label. Skal ikke fungere uten label |

## Methods

| Method              | Type                       | Description                                      |
|---------------------|----------------------------|--------------------------------------------------|
| `setCustomValidity` | `(message?: string): void` | En 'fake' metode som gjør custom validering enklere på checkbox-group komponent |

## Events

| Event        |
|--------------|
| `sl-invalid` |
