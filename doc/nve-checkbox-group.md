# nve-checkbox-group

## Properties

| Property       | Attribute      | Type                         | Default    | Description                                      |
|----------------|----------------|------------------------------|------------|--------------------------------------------------|
| `disabled`     | `disabled`     | `boolean`                    | false      | Disable eller enable gruppa                      |
| `errorMessage` | `errorMessage` | `string \| undefined`        |            | Viser feil melding under gruppen                 |
| `isValid`      | `isValid`      | `boolean \| undefined`       |            | Bestemmer om sjekkboksgruppe er valid. Hvis ikke alle sjekkbokser i gruppe blir markert som feil |
| `label`        | `label`        | `string \| undefined`        |            | Viser label til en gruppe                        |
| `orientation`  | `orientation`  | `"horizontal" \| "vertical"` | "vertical" | Om gruppen skal rendres horisontalt eller vertikalt |
| `slot`         |                |                              |            |                                                  |
| `tooltip`      | `tooltip`      | `string \| undefined`        |            | Viser i ikone og tooltip tekst ved siden av label. Skal ikke fungere uten label |
