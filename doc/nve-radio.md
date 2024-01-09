# nve-radio

## Properties

| Property   | Type                             | Description                                      |
|------------|----------------------------------|--------------------------------------------------|
| `checked`  | `boolean`                        |                                                  |
| `dir`      | `string`                         |                                                  |
| `disabled` | `boolean`                        | Disables the radio.                              |
| `lang`     | `string`                         |                                                  |
| `size`     | `"small" \| "medium" \| "large"` | The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this<br />attribute can typically be omitted. |
| `value`    | `string`                         | The radio's value. When selected, the radio group will receive this value. |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `emit`                 | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 113 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<.....` | Emits a custom event with more convenient defaults. |
| `handleCheckedChange`  | `(): void`                                       |                                                  |
| `handleDisabledChange` | `(): void`                                       |                                                  |

## Events

| Event      | Description                           |
|------------|---------------------------------------|
| `sl-blur`  | Emitted when the control loses focus. |
| `sl-focus` | Emitted when the control gains focus. |

## Slots

| Name | Description        |
|------|--------------------|
|      | The radio's label. |

## CSS Shadow Parts

| Part               | Description                                      |
|--------------------|--------------------------------------------------|
| `base`             | The component's base wrapper.                    |
| `checked-icon`     | The checked icon, an `<sl-icon>` element.        |
| `control`          | The circular container that wraps the radio's checked state. |
| `control--checked` | The radio control when the radio is checked.     |
| `label`            | The container that wraps the radio's label.      |
