# nve-badge

Importerer ingen styles fra shoelace derfor pill og pulse property skal ikke fungere.

## Properties

| Property  | Attribute | Type                                             | Default  | Description                                  |
|-----------|-----------|--------------------------------------------------|----------|----------------------------------------------|
| `dir`     |           | `string`                                         |          |                                              |
| `lang`    |           | `string`                                         |          |                                              |
| `low`     | `low`     | `boolean`                                        | false    | Viser Low variant, High er default           |
| `pill`    |           | `boolean`                                        |          | Draws a pill-style badge with rounded edges. |
| `pulse`   |           | `boolean`                                        |          | Makes the badge pulsate to draw attention.   |
| `size`    | `size`    | `"small" \| "medium" \| "large"`                 | "medium" | Størrelse på komponenten                     |
| `variant` |           | `"primary" \| "success" \| "neutral" \| "warning" \| "danger"` |          | The badge's theme variant.                   |

## Methods

| Method | Type                                             | Description                                      |
|--------|--------------------------------------------------|--------------------------------------------------|
| `emit` | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 113 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<.....` | Emits a custom event with more convenient defaults. |

## Slots

| Name | Description          |
|------|----------------------|
|      | The badge's content. |

## CSS Shadow Parts

| Part   | Description                   |
|--------|-------------------------------|
| `base` | The component's base wrapper. |
