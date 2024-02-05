# nve-radio-button

En sl-radio-button med NVE design.
Se https://shoelace.style/components/radio-button

## Properties

| Property      | Type                             | Description                                      |
|---------------|----------------------------------|--------------------------------------------------|
| `checked`     | `boolean`                        |                                                  |
| `dir`         | `string`                         |                                                  |
| `disabled`    | `boolean`                        | Disables the radio button.                       |
| `hiddenInput` | `HTMLInputElement`               |                                                  |
| `input`       | `HTMLInputElement`               |                                                  |
| `lang`        | `string`                         |                                                  |
| `pill`        | `boolean`                        | Draws a pill-style radio button with rounded edges. |
| `size`        | `"small" \| "medium" \| "large"` | The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so<br />this attribute can typically be omitted. |
| `value`       | `string`                         | The radio's value. When selected, the radio group will receive this value. |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `blur`                 | `(): void`                                       | Removes focus from the radio button.             |
| `emit`                 | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 113 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<.....` | Emits a custom event with more convenient defaults. |
| `focus`                | `(options?: FocusOptions \| undefined): void`    | Sets focus on the radio button.                  |
| `handleDisabledChange` | `(): void`                                       |                                                  |

## Events

| Event      | Description                          |
|------------|--------------------------------------|
| `sl-blur`  | Emitted when the button loses focus. |
| `sl-focus` | Emitted when the button gains focus. |

## Slots

| Name     | Description                                      |
|----------|--------------------------------------------------|
|          | The radio button's label.                        |
| `prefix` | A presentational prefix icon or similar element. |
| `suffix` | A presentational suffix icon or similar element. |

## CSS Shadow Parts

| Part              | Description                                      |
|-------------------|--------------------------------------------------|
| `base`            | The component's base wrapper.                    |
| `button`          | The internal `<button>` element.                 |
| `button--checked` | The internal button element when the radio button is checked. |
| `label`           | The container that wraps the radio button's label. |
| `prefix`          | The container that wraps the prefix.             |
| `suffix`          | The container that wraps the suffix.             |
