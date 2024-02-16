# nve-label

Ledetekst med valgfritt verktøy-hint (og tilhørende info-ikon)

Kan brukes med inn i nve-menu (hvor den har en spesiell styling) som kategori skiller.

## Properties

| Property    | Attribute   | Type                                          | Default     | Description                                      |
|-------------|-------------|-----------------------------------------------|-------------|--------------------------------------------------|
| `iconColor` | `iconColor` | `"default" \| "black"`                        | "default"   | Ikon farge                                       |
| `iconLeft`  | `iconLeft`  | `boolean`                                     | false       | Om tooltip ikone skal vises på venstre siden     |
| `light`     | `light`     | `boolean`                                     | false       | Sett denne hvis du vil ha litt lettere skriftvekt |
| `size`      | `size`      | `"small" \| "medium" \| "large" \| "x-small"` | "small"     | Størrelse                                        |
| `tooltip`   | `tooltip`   | `string \| undefined`                         | "undefined" | Denne teksten blir vist som et verktøyhint hvis man svever over info-ikonet |
| `value`     | `value`     | `string`                                      | ""          | Teksten som skal vises                           |

## Slots

| Name        | Description                                      |
|-------------|--------------------------------------------------|
| `(default)` | teksten som skal vises. Eller du kan bruke value-attributtet |
| `tooltip`   | innhold i denne blir vist som en tooltip hvis man svever over info-ikonet<br /><br />TODO: Skal være litt mer plass mellom tekst og info-ikon<br />TODO: Hvis du angir både value og innhold i slot, er det value som vises. Det bør være motsatt. |
