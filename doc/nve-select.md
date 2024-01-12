# nve-select

En Shoelace-select i NVE-forkledning.
Se https://shoelace.style/components/select

## Properties

| Property            | Modifiers | Type                                             | Description                                      |
|---------------------|-----------|--------------------------------------------------|--------------------------------------------------|
| `checkValidity`     |           | `() => boolean`                                  |                                                  |
| `clearable`         |           | `boolean`                                        | Adds a clear button when the select is not empty. |
| `combobox`          |           | `HTMLSlotElement`                                |                                                  |
| `currentOption`     |           | `SlOption`                                       |                                                  |
| `defaultChecked`    |           | `boolean \| undefined`                           |                                                  |
| `defaultValue`      |           | `string \| string[]`                             | The default value of the form control. Primarily used for resetting the form control. |
| `dir`               |           | `string`                                         |                                                  |
| `disabled`          |           | `boolean`                                        | Disables the select control.                     |
| `displayInput`      |           | `HTMLInputElement`                               |                                                  |
| `displayLabel`      |           | `string`                                         |                                                  |
| `filled`            |           | `boolean`                                        | Draws a filled select.                           |
| `form`              |           | `string`                                         | By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you<br />to place the form control outside of a form and associate it with the form that has this `id`. The form must be in<br />the same document or shadow root for this to work. |
| `getForm`           |           | `() => HTMLFormElement \| null`                  |                                                  |
| `getTag`            |           | `(option: SlOption, index: number) => string \| HTMLElement \| TemplateResult` | A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second<br />is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at<br />the specified value. |
| `helpText`          |           | `string`                                         | The select's help text. If you need to display HTML, use the `help-text` slot instead. |
| `hoist`             |           | `boolean`                                        | Enable this option to prevent the listbox from being clipped when the component is placed inside a container with<br />`overflow: auto\|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. |
| `label`             |           | `string`                                         | The select's label. If you need to display HTML, use the `label` slot instead. |
| `lang`              |           | `string`                                         |                                                  |
| `listbox`           |           | `HTMLSlotElement`                                |                                                  |
| `max`               |           | `string \| number \| Date \| undefined`          |                                                  |
| `maxOptionsVisible` |           | `number`                                         | The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to<br />indicate the number of additional items that are selected. Set to 0 to remove the limit. |
| `maxlength`         |           | `number \| undefined`                            |                                                  |
| `min`               |           | `string \| number \| Date \| undefined`          |                                                  |
| `minlength`         |           | `number \| undefined`                            |                                                  |
| `multiple`          |           | `boolean`                                        | Allows more than one option to be selected.      |
| `name`              |           | `string`                                         | The name of the select, submitted as a name/value pair with form data. |
| `open`              |           | `boolean`                                        | Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can<br />use the `show()` and `hide()` methods and this attribute will reflect the select's open state. |
| `pattern`           |           | `string \| undefined`                            |                                                  |
| `pill`              |           | `boolean`                                        | Draws a pill-style select with rounded edges.    |
| `placeholder`       |           | `string`                                         | Placeholder text to show as a hint when the select is empty. |
| `placement`         |           | `"top" \| "bottom"`                              | The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox<br />inside of the viewport. |
| `popup`             |           | `SlPopup`                                        |                                                  |
| `reportValidity`    |           | `() => boolean`                                  |                                                  |
| `required`          |           | `boolean`                                        | The select's required attribute.                 |
| `selectedOptions`   |           | `SlOption[]`                                     |                                                  |
| `setCustomValidity` |           | `(message: string) => void`                      |                                                  |
| `size`              |           | `"small" \| "medium" \| "large"`                 | The select's size.                               |
| `step`              |           | `number \| "any" \| undefined`                   |                                                  |
| `validationMessage` | readonly  | `string`                                         | Gets the validation message                      |
| `validity`          | readonly  | `ValidityState`                                  | Gets the validity state object                   |
| `value`             |           | `string \| string[]`                             | The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the<br />value attribute will be a space-delimited list of values based on the options selected, and the value property will<br />be an array. **For this reason, values must not contain spaces.** |
| `valueInput`        |           | `HTMLInputElement`                               |                                                  |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `blur`                 | `(): void`                                       | Removes focus from the control.                  |
| `checkValidity`        | `(): boolean`                                    | Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. |
| `emit`                 | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 113 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<.....` | Emits a custom event with more convenient defaults. |
| `focus`                | `(options?: FocusOptions \| undefined): void`    | Sets focus on the control.                       |
| `getForm`              | `(): HTMLFormElement \| null`                    | Gets the associated form, if one exists.         |
| `handleDisabledChange` | `(): void`                                       |                                                  |
| `handleOpenChange`     | `(): Promise<void>`                              |                                                  |
| `handleValueChange`    | `(): void`                                       |                                                  |
| `hide`                 | `(): Promise<void>`                              | Hides the listbox.                               |
| `reportValidity`       | `(): boolean`                                    | Checks for validity and shows the browser's validation message if the control is invalid. |
| `setCustomValidity`    | `(message: string): void`                        | Sets a custom validation message. Pass an empty string to restore validity. |
| `show`                 | `(): Promise<void>`                              | Shows the listbox.                               |

## Events

| Event           | Description                                      |
|-----------------|--------------------------------------------------|
| `sl-after-hide` | Emitted after the select's menu closes and all animations are complete. |
| `sl-after-show` | Emitted after the select's menu opens and all animations are complete. |
| `sl-blur`       | Emitted when the control loses focus.            |
| `sl-change`     | Emitted when the control's value changes.        |
| `sl-clear`      | Emitted when the control's value is cleared.     |
| `sl-focus`      | Emitted when the control gains focus.            |
| `sl-hide`       | Emitted when the select's menu closes.           |
| `sl-input`      | Emitted when the control receives input.         |
| `sl-invalid`    | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |
| `sl-show`       | Emitted when the select's menu opens.            |

## Slots

| Name          | Description                                      |
|---------------|--------------------------------------------------|
|               | The listbox options. Must be `<sl-option>` elements. You can use `<sl-divider>` to group items visually. |
| `clear-icon`  | An icon to use in lieu of the default clear icon. |
| `expand-icon` | The icon to show when the control is expanded and collapsed. Rotates on open and close. |
| `help-text`   | Text that describes how to use the input. Alternatively, you can use the `help-text` attribute. |
| `label`       | The input's label. Alternatively, you can use the `label` attribute. |
| `prefix`      | Used to prepend a presentational icon or similar element to the combobox. |

## CSS Shadow Parts

| Part                       | Description                                      |
|----------------------------|--------------------------------------------------|
| `clear-button`             | The clear button.                                |
| `combobox`                 | The container the wraps the prefix, combobox, clear icon, and expand button. |
| `display-input`            | The element that displays the selected option's label, an `<input>` element. |
| `expand-icon`              | The container that wraps the expand icon.        |
| `form-control`             | The form control that wraps the label, input, and help text. |
| `form-control-help-text`   | The help text's wrapper.                         |
| `form-control-input`       | The select's wrapper.                            |
| `form-control-label`       | The label's wrapper.                             |
| `listbox`                  | The listbox container where options are slotted. |
| `prefix`                   | The container that wraps the prefix slot.        |
| `tag`                      | The individual tags that represent each multiselect option. |
| `tag__base`                | The tag's base part.                             |
| `tag__content`             | The tag's content part.                          |
| `tag__remove-button`       | The tag's remove button.                         |
| `tag__remove-button__base` | The tag's remove button base part.               |
| `tags`                     | The container that houses option tags when `multiselect` is used. |
