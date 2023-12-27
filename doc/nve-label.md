# nve-label

Ledetekst med valgfritt info-ikon

## Properties

| Property  | Attribute | Type                                          | Default     | Description                                      |
|-----------|-----------|-----------------------------------------------|-------------|--------------------------------------------------|
| `light`   | `light`   | `boolean`                                     | false       | Sett denne hvis du vil ha litt lettere skriftvekt |
| `size`    | `size`    | `"small" \| "medium" \| "large" \| "x-small"` | "small"     | Størrelse                                        |
| `tooltip` | `tooltip` | `string \| undefined`                         | "undefined" | Denne teksten blir vist som et verktøyhint hvis man svever over info-ikonet |
| `value`   | `value`   | `string`                                      | ""          | Teksten som skal vises                           |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
| `label`   | teksten som skal vises. Eller du kan bruke label-attributtet |
| `tooltip` | innhold i denne blir vist som en tooltip hvis man svever over info-ikonet<br /><br />TODO: Skal være litt mer plass mellom tekst og info-ikon |
