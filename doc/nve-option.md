# nve-option

En Shoelace-option i NVE-forkledning.
Se https://shoelace.style/components/option

## Properties

| Property      | Type              | Description                                      |
|---------------|-------------------|--------------------------------------------------|
| `current`     | `boolean`         |                                                  |
| `defaultSlot` | `HTMLSlotElement` |                                                  |
| `dir`         | `string`          |                                                  |
| `disabled`    | `boolean`         | Draws the option in a disabled state, preventing selection. |
| `hasHover`    | `boolean`         |                                                  |
| `lang`        | `string`          |                                                  |
| `selected`    | `boolean`         |                                                  |
| `value`       | `string`          | The option's value. When selected, the containing form control will receive this value. The value must be unique<br />from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing<br />multiple values. |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `emit`                 | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 113 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<.....` | Emits a custom event with more convenient defaults. |
| `getTextLabel`         | `(): string`                                     | Returns a plain text label based on the option's content. |
| `handleDisabledChange` | `(): void`                                       |                                                  |
| `handleSelectedChange` | `(): void`                                       |                                                  |
| `handleValueChange`    | `(): void`                                       |                                                  |

## Slots

| Name     | Description                                      |
|----------|--------------------------------------------------|
|          | The option's label.                              |
| `prefix` | Used to prepend an icon or similar element to the menu item. |
| `suffix` | Used to append an icon or similar element to the menu item. |

## CSS Shadow Parts

| Part           | Description                               |
|----------------|-------------------------------------------|
| `base`         | The component's base wrapper.             |
| `checked-icon` | The checked icon, an `<sl-icon>` element. |
| `label`        | The option's label.                       |
| `prefix`       | The container that wraps the prefix.      |
| `suffix`       | The container that wraps the suffix.      |
