# nve-radio-group

En sl-radio-group i NVE-forkledning.
Se https://shoelace.style/components/radio-group
Denne komponenten tillater bruk av nve-radio og nve-radio-button elementer inne i <nve-radio-group></nve-radio-group>
ved å overstyre noen private metoder i SlRadioGroup.

## Examples

```html
<nve-radio-group horizontal value="1"><nve-radio value="1">Value 1 (checked)</nve-radio></nve-radio-group>
```

```html
<nve-radio-group vertical value="1"><nve-radio value="1">Value 1 (checked)</nve-radio></nve-radio-group>
```

## Properties

| Property            | Attribute       | Modifiers | Type                                    | Default         | Description                                      |
|---------------------|-----------------|-----------|-----------------------------------------|-----------------|--------------------------------------------------|
| `checkValidity`     |                 |           | `() => boolean`                         |                 |                                                  |
| `defaultChecked`    |                 |           | `boolean \| undefined`                  |                 |                                                  |
| `defaultSlot`       |                 |           | `HTMLSlotElement`                       |                 |                                                  |
| `defaultValue`      |                 |           | `string`                                |                 |                                                  |
| `dir`               |                 |           | `string`                                |                 |                                                  |
| `disabled`          | `disabled`      |           | `boolean`                               | false           | Deaktivere alle radio knapper i gruppen          |
| `errorMessage`      | `errorMessage`  |           | `string \| undefined`                   |                 | Feil melding som vises under radiogruppe. Vi har ikke tilgang til SlRadioGroup errorMessage så må overskrive med vår egen |
| `form`              |                 |           | `string`                                |                 | By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you<br />to place the form control outside of a form and associate it with the form that has this `id`. The form must be in<br />the same document or shadow root for this to work. |
| `getForm`           |                 |           | `() => HTMLFormElement \| null`         |                 |                                                  |
| `helpText`          |                 |           | `string`                                |                 | The radio groups's help text. If you need to display HTML, use the `help-text` slot instead. |
| `label`             |                 |           | `string`                                |                 | The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot<br />instead. |
| `lang`              |                 |           | `string`                                |                 |                                                  |
| `max`               |                 |           | `string \| number \| Date \| undefined` |                 |                                                  |
| `maxlength`         |                 |           | `number \| undefined`                   |                 |                                                  |
| `min`               |                 |           | `string \| number \| Date \| undefined` |                 |                                                  |
| `minlength`         |                 |           | `number \| undefined`                   |                 |                                                  |
| `name`              |                 |           | `string`                                |                 | The name of the radio group, submitted as a name/value pair with form data. |
| `orientation`       | `orientation`   |           | `"horizontal" \| "vertical"`            | "vertical"      | Om radio knapper skal vises horisontalt eller vertikalt |
| `pattern`           |                 |           | `string \| undefined`                   |                 |                                                  |
| `reportValidity`    |                 |           | `() => boolean`                         |                 |                                                  |
| `required`          |                 |           | `boolean`                               |                 | Ensures a child radio is checked before allowing the containing form to submit. |
| `requiredLabel`     | `requiredLabel` |           | `string`                                | "*Obligatorisk" | Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard. |
| `setCustomValidity` |                 |           | `(message: string) => void`             |                 |                                                  |
| `size`              |                 |           | `"small" \| "medium" \| "large"`        |                 | The radio group's size. This size will be applied to all child radios and radio buttons. |
| `step`              |                 |           | `number \| "any" \| undefined`          |                 |                                                  |
| `validationInput`   |                 |           | `HTMLInputElement`                      |                 |                                                  |
| `validationMessage` |                 | readonly  | `string`                                |                 | Gets the validation message                      |
| `validity`          |                 | readonly  | `ValidityState`                         |                 | Gets the validity state object                   |
| `value`             |                 |           | `string`                                |                 | The current value of the radio group, submitted as a name/value pair with form data. |

## Methods

| Method              | Type                                             | Description                                      |
|---------------------|--------------------------------------------------|--------------------------------------------------|
| `checkValidity`     | `(): boolean`                                    | Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. |
| `emit`              | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 113 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<.....` | Emits a custom event with more convenient defaults. |
| `getForm`           | `(): HTMLFormElement \| null`                    | Gets the associated form, if one exists.         |
| `handlePropChange`  | `(oldValue: any, newValue: any): boolean`        |                                                  |
| `handleSizeChange`  | `(): void`                                       |                                                  |
| `handleValueChange` | `(): void`                                       |                                                  |
| `reportValidity`    | `(): boolean`                                    | Checks for validity and shows the browser's validation message if the control is invalid. |
| `setCustomValidity` | `(message?: string \| undefined): void`          | Sets a custom validation message. Pass an empty string to restore validity. |

## Events

| Event        | Description                                      |
|--------------|--------------------------------------------------|
| `sl-change`  | Emitted when the radio group's selected value changes. |
| `sl-input`   | Emitted when the radio group receives user input. |
| `sl-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## Slots

| Name    | Description                                      |
|---------|--------------------------------------------------|
|         | Standard slot hvor `<nve-radio>` eller `<nve-radio-button>` plasseres |
| `label` | The radio group's label. Required for proper accessibility. Alternatively, you can use the `label`<br />attribute. |

## CSS Shadow Parts

| Part                     | Description                                      |
|--------------------------|--------------------------------------------------|
| `button-group`           | The button group that wraps radio buttons.       |
| `button-group__base`     | The button group's `base` part.                  |
| `form-control`           | The form control that wraps the label, input, and help text. |
| `form-control-help-text` | The help text's wrapper.                         |
| `form-control-input`     | The input's wrapper.                             |
| `form-control-label`     | The label's wrapper.                             |
