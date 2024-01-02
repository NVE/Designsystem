# nve-checkbox

foreløpig finnes ikke noe hove

## Properties

| Property            | Attribute | Modifiers | Type                                    | Default | Description                                      |
|---------------------|-----------|-----------|-----------------------------------------|---------|--------------------------------------------------|
| `checkValidity`     |           |           | `() => boolean`                         |         |                                                  |
| `checked`           |           |           | `boolean`                               |         | Draws the checkbox in a checked state.           |
| `defaultChecked`    |           |           | `boolean`                               |         | The default value of the form control. Primarily used for resetting the form control. |
| `defaultValue`      |           |           | `unknown`                               |         |                                                  |
| `dir`               |           |           | `string`                                |         |                                                  |
| `disabled`          |           |           | `boolean`                               |         | Disables the checkbox.                           |
| `form`              |           |           | `string`                                |         | By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you<br />to place the form control outside of a form and associate it with the form that has this `id`. The form must be in<br />the same document or shadow root for this to work. |
| `getForm`           |           |           | `() => HTMLFormElement \| null`         |         |                                                  |
| `indeterminate`     |           |           | `boolean`                               |         | Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select<br />all/none" behavior when associated checkboxes have a mix of checked and unchecked states. |
| `input`             |           |           | `HTMLInputElement`                      |         |                                                  |
| `isValid`           | `isValid` |           | `boolean`                               | true    | Checks if input is valid                         |
| `lang`              |           |           | `string`                                |         |                                                  |
| `max`               |           |           | `string \| number \| Date \| undefined` |         |                                                  |
| `maxlength`         |           |           | `number \| undefined`                   |         |                                                  |
| `min`               |           |           | `string \| number \| Date \| undefined` |         |                                                  |
| `minlength`         |           |           | `number \| undefined`                   |         |                                                  |
| `name`              |           |           | `string`                                |         | The name of the checkbox, submitted as a name/value pair with form data. |
| `pattern`           |           |           | `string \| undefined`                   |         |                                                  |
| `reportValidity`    |           |           | `() => boolean`                         |         |                                                  |
| `required`          |           |           | `boolean`                               |         | Makes the checkbox a required field.             |
| `setCustomValidity` |           |           | `(message: string) => void`             |         |                                                  |
| `size`              |           |           | `"small" \| "medium" \| "large"`        |         | The checkbox's size.                             |
| `step`              |           |           | `number \| "any" \| undefined`          |         |                                                  |
| `title`             |           |           | `string`                                |         |                                                  |
| `validationMessage` |           | readonly  | `string`                                |         | Gets the validation message                      |
| `validity`          |           | readonly  | `ValidityState`                         |         | Gets the validity state object                   |
| `value`             |           |           | `string`                                |         | The current value of the checkbox, submitted as a name/value pair with form data. |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `blur`                 | `(): void`                                       | Removes focus from the checkbox.                 |
| `checkValidity`        | `(): boolean`                                    | Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. |
| `click`                | `(): void`                                       | Simulates a click on the checkbox.               |
| `emit`                 | `{ <T extends "submit" \| "reset" \| "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| ... 112 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<...` | Emits a custom event with more convenient defaults. |
| `focus`                | `(options?: FocusOptions \| undefined): void`    | Sets focus on the checkbox.                      |
| `getForm`              | `(): HTMLFormElement \| null`                    | Gets the associated form, if one exists.         |
| `handleDisabledChange` | `(): void`                                       |                                                  |
| `handleStateChange`    | `(): void`                                       |                                                  |
| `reportValidity`       | `(): boolean`                                    | Checks for validity and shows the browser's validation message if the control is invalid. |
| `setCustomValidity`    | `(message: string): void`                        | Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear<br />the custom validation message, call this method with an empty string. |

## Events

| Event        | Description                                      |
|--------------|--------------------------------------------------|
| `sl-blur`    | Emitted when the checkbox loses focus.           |
| `sl-change`  | Emitted when the checked state changes.          |
| `sl-focus`   | Emitted when the checkbox gains focus.           |
| `sl-input`   | Emitted when the checkbox receives input.        |
| `sl-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## Slots

| Name | Description           |
|------|-----------------------|
|      | The checkbox's label. |

## CSS Shadow Parts

| Part                     | Description                                      |
|--------------------------|--------------------------------------------------|
| `base`                   | The component's base wrapper.                    |
| `checked-icon`           | The checked icon, an `<sl-icon>` element.        |
| `control`                | The square container that wraps the checkbox's checked state. |
| `control--checked`       | Matches the control part when the checkbox is checked. |
| `control--indeterminate` | Matches the control part when the checkbox is indeterminate. |
| `indeterminate-icon`     | The indeterminate icon, an `<sl-icon>` element.  |
| `label`                  | The container that wraps the checkbox's label.   |
