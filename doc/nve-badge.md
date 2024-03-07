# nve-badge

En liten etikett som vanligvis vises inne i eller i nærheten av en annen større grensesnittkomponent, som representerer en status, egenskap eller andre metadata.
Kan også brukes med knappen som i Shoelace
Importerer ingen styles fra shoelace derfor pill og pulse property skal ikke fungere.

## Properties

| Property  | Attribute | Type                                             | Default   | Description                        |
|-----------|-----------|--------------------------------------------------|-----------|------------------------------------|
| `low`     | `low`     | `boolean`                                        | false     | Viser Low variant, High er default |
| `size`    | `size`    | `"small" \| "medium" \| "large"`                 | "medium"  | Størrelse på komponenten           |
| `variant` | `variant` | `"primary" \| "success" \| "neutral" \| "warning" \| "danger" \| "brand"` | "primary" | Variant                            |
