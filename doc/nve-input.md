# nve-input

En sl-input i NVE-forkledning.
Mer info: https://shoelace.style/components/input

Vil du ha info-ikon med hjelpetekst etter ledeteksten, putt en nve-label i label-slot.
Disse attributtene skal ikke brukes:
- pill

TODO: Felte blir breddere når feil ikone vises. Alt på grunn av at det dukker opp i en slot. Hvis Vi bestemmer oss
å ha en fast verdi på sloten, kan det kanksje påvirke andre elementer som skal vises i sloten.

## Properties

| Property            | Attribute       | Modifiers | Type                                             | Default         | Description                                      |
|---------------------|-----------------|-----------|--------------------------------------------------|-----------------|--------------------------------------------------|
| `autocapitalize`    |                 |           | `"off" \| "none" \| "on" \| "sentences" \| "words" \| "characters"` |                 | Controls whether and how text input is automatically capitalized as it is entered by the user. |
| `autocomplete`      |                 |           | `string`                                         |                 | Specifies what permission the browser has to provide assistance in filling out form field values. Refer to<br />[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. |
| `autocorrect`       |                 |           | `"off" \| "on"`                                  |                 | Indicates whether the browser's autocorrect feature is on or off. |
| `autofocus`         |                 |           | `boolean`                                        |                 | Indicates that the input should receive focus on page load. |
| `checkValidity`     |                 |           | `() => boolean`                                  |                 |                                                  |
| `clearable`         |                 |           | `boolean`                                        |                 | Adds a clear button when the input is not empty. |
| `defaultChecked`    |                 |           | `boolean \| undefined`                           |                 |                                                  |
| `defaultValue`      |                 |           | `string`                                         |                 | The default value of the form control. Primarily used for resetting the form control. |
| `dir`               |                 |           | `string`                                         |                 |                                                  |
| `disabled`          |                 |           | `boolean`                                        |                 | Disables the input.                              |
| `enterkeyhint`      |                 |           | `"enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send"` |                 | Used to customize the label or icon of the Enter key on virtual keyboards. |
| `errorMessage`      | `errorMessage`  |           | `string \| undefined`                            |                 | Brukes til enkel constraint validation til å overskrive default nettleseren melding |
| `filled`            |                 |           | `boolean`                                        |                 | Draws a filled input.                            |
| `form`              |                 |           | `string`                                         |                 | By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you<br />to place the form control outside of a form and associate it with the form that has this `id`. The form must be in<br />the same document or shadow root for this to work. |
| `getForm`           |                 |           | `() => HTMLFormElement \| null`                  |                 |                                                  |
| `helpText`          |                 |           | `string`                                         |                 | The input's help text. If you need to display HTML, use the `help-text` slot instead. |
| `input`             |                 |           | `HTMLInputElement`                               |                 |                                                  |
| `inputmode`         |                 |           | `"text" \| "none" \| "search" \| "decimal" \| "numeric" \| "tel" \| "email" \| "url"` |                 | Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual<br />keyboard on supportive devices. |
| `label`             |                 |           | `string`                                         |                 | The input's label. If you need to display HTML, use the `label` slot instead. |
| `lang`              |                 |           | `string`                                         |                 |                                                  |
| `max`               |                 |           | `string \| number`                               |                 | The input's maximum value. Only applies to date and number input types. |
| `maxlength`         |                 |           | `number`                                         |                 | The maximum length of input that will be considered valid. |
| `min`               |                 |           | `string \| number`                               |                 | The input's minimum value. Only applies to date and number input types. |
| `minlength`         |                 |           | `number`                                         |                 | The minimum length of input that will be considered valid. |
| `name`              |                 |           | `string`                                         |                 | The name of the input, submitted as a name/value pair with form data. |
| `noSpinButtons`     |                 |           | `boolean`                                        |                 | Hides the browser's built-in increment/decrement spin buttons for number inputs. |
| `passwordToggle`    |                 |           | `boolean`                                        |                 | Adds a button to toggle the password's visibility. Only applies to password types. |
| `passwordVisible`   |                 |           | `boolean`                                        |                 | Determines whether or not the password is currently visible. Only applies to password input types. |
| `pattern`           |                 |           | `string`                                         |                 | A regular expression pattern to validate input against. |
| `pill`              |                 |           | `boolean`                                        |                 | Draws a pill-style input with rounded edges.     |
| `placeholder`       |                 |           | `string`                                         |                 | Placeholder text to show as a hint when the input is empty. |
| `readonly`          |                 |           | `boolean`                                        |                 | Makes the input readonly.                        |
| `reportValidity`    |                 |           | `() => boolean`                                  |                 |                                                  |
| `required`          |                 |           | `boolean`                                        |                 | Makes the input a required field.                |
| `requiredLabel`     | `requiredLabel` |           | `string`                                         | "*Obligatorisk" | Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard. |
| `setCustomValidity` |                 |           | `(message: string) => void`                      |                 |                                                  |
| `size`              |                 |           | `"small" \| "medium" \| "large"`                 |                 | The input's size.                                |
| `spellcheck`        |                 |           | `boolean`                                        |                 | Enables spell checking on the input.             |
| `step`              |                 |           | `number \| "any"`                                |                 | Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is<br />implied, allowing any numeric value. Only applies to date and number input types. |
| `title`             |                 |           | `string`                                         |                 |                                                  |
| `type`              |                 |           | `"number" \| "text" \| "search" \| "tel" \| "email" \| "url" \| "date" \| "datetime-local" \| "password" \| "time"` |                 | The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults<br />to `text`. |
| `validationMessage` |                 | readonly  | `string`                                         |                 | Gets the validation message                      |
| `validity`          |                 | readonly  | `ValidityState`                                  |                 | Gets the validity state object                   |
| `value`             |                 |           | `string`                                         |                 | The current value of the input, submitted as a name/value pair with form data. |
| `valueAsDate`       |                 |           | `Date \| null`                                   |                 | Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error. |
| `valueAsNumber`     |                 |           | `number`                                         |                 | Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `blur`                 | `(): void`                                       | Removes focus from the input.                    |
| `checkValidity`        | `(): boolean`                                    | Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. |
| `emit`                 | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 88 more ... \| "wheel">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<...>; ...` | Emits a custom event with more convenient defaults. |
| `focus`                | `(options?: FocusOptions \| undefined): void`    | Sets focus on the input.                         |
| `getForm`              | `(): HTMLFormElement \| null`                    | Gets the associated form, if one exists.         |
| `handleDisabledChange` | `(): void`                                       |                                                  |
| `handleStepChange`     | `(): void`                                       |                                                  |
| `handleValueChange`    | `(): Promise<void>`                              |                                                  |
| `reportValidity`       | `(): boolean`                                    | Checks for validity and shows the browser's validation message if the control is invalid. |
| `select`               | `(): void`                                       | Selects all the text in the input.               |
| `setCustomValidity`    | `(message: string): void`                        | Sets a custom validation message. Pass an empty string to restore validity. |
| `setRangeText`         | `(replacement: string, start?: number \| undefined, end?: number \| undefined, selectMode?: "select" \| "start" \| "end" \| "preserve" \| undefined): void` | Replaces a range of text with a new string.      |
| `setSelectionRange`    | `(selectionStart: number, selectionEnd: number, selectionDirection?: "none" \| "forward" \| "backward" \| undefined): void` | Sets the start and end positions of the text selection (0-based). |
| `showPicker`           | `(): void`                                       | Displays the browser picker for an input element (only works if the browser supports it for the input type). |
| `stepDown`             | `(): void`                                       | Decrements the value of a numeric input type by the value of the step attribute. |
| `stepUp`               | `(): void`                                       | Increments the value of a numeric input type by the value of the step attribute. |

## Events

| Event        | Description                                      |
|--------------|--------------------------------------------------|
| `sl-blur`    | Emitted when the control loses focus.            |
| `sl-change`  | Emitted when an alteration to the control's value is committed by the user. |
| `sl-clear`   | Emitted when the clear button is activated.      |
| `sl-focus`   | Emitted when the control gains focus.            |
| `sl-input`   | Emitted when the control receives input.         |
| `sl-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## Slots

| Name                 | Description                                      |
|----------------------|--------------------------------------------------|
| `clear-icon`         | An icon to use in lieu of the default clear icon. |
| `help-text`          | Text that describes how to use the input. Alternatively, you can use the `help-text` attribute. |
| `hide-password-icon` | An icon to use in lieu of the default hide password icon. |
| `label`              | The input's label. Alternatively, you can use the `label` attribute. |
| `prefix`             | Used to prepend a presentational icon or similar element to the input. |
| `show-password-icon` | An icon to use in lieu of the default show password icon. |
| `suffix`             | Used to append a presentational icon or similar element to the input. |

## CSS Shadow Parts

| Part                     | Description                                      |
|--------------------------|--------------------------------------------------|
| `base`                   | The component's base wrapper.                    |
| `clear-button`           | The clear button.                                |
| `form-control`           | The form control that wraps the label, input, and help text. |
| `form-control-help-text` | The help text's wrapper.                         |
| `form-control-input`     | The input's wrapper.                             |
| `form-control-label`     | The label's wrapper.                             |
| `input`                  | The internal `<input>` control.                  |
| `password-toggle-button` | The password toggle button.                      |
| `prefix`                 | The container that wraps the prefix.             |
| `suffix`                 | The container that wraps the suffix.             |
