# nve-button

En Shoelace-knapp i NVE-forkledning.
Se https://shoelace.style/components/button

TODO: Beskriv hvilke properties / attributter og varianter vi ikke skal bruke

## Properties

| Property            | Modifiers | Type                                             | Description                                      |
|---------------------|-----------|--------------------------------------------------|--------------------------------------------------|
| `button`            |           | `HTMLButtonElement \| HTMLLinkElement`           |                                                  |
| `caret`             |           | `boolean`                                        | Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. |
| `checkValidity`     |           | `() => boolean`                                  |                                                  |
| `circle`            |           | `boolean`                                        | Draws a circular icon button. When this attribute is present, the button expects a single `<sl-icon>` in the<br />default slot. |
| `defaultChecked`    |           | `boolean \| undefined`                           |                                                  |
| `defaultValue`      |           | `unknown`                                        |                                                  |
| `dir`               |           | `string`                                         |                                                  |
| `disabled`          |           | `boolean`                                        | Disables the button.                             |
| `download`          |           | `string \| undefined`                            | Tells the browser to download the linked file as this filename. Only used when `href` is present. |
| `form`              |           | `string`                                         | The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The<br />value of this attribute must be an id of a form in the same document or shadow root as the button. |
| `formAction`        |           | `string`                                         | Used to override the form owner's `action` attribute. |
| `formEnctype`       |           | `"application/x-www-form-urlencoded" \| "multipart/form-data" \| "text/plain"` | Used to override the form owner's `enctype` attribute. |
| `formMethod`        |           | `"post" \| "get"`                                | Used to override the form owner's `method` attribute. |
| `formNoValidate`    |           | `boolean`                                        | Used to override the form owner's `novalidate` attribute. |
| `formTarget`        |           | `string`                                         | Used to override the form owner's `target` attribute. |
| `getForm`           |           | `() => HTMLFormElement \| null`                  |                                                  |
| `href`              |           | `string`                                         | When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. |
| `invalid`           |           | `boolean`                                        |                                                  |
| `lang`              |           | `string`                                         |                                                  |
| `loading`           |           | `boolean`                                        | Draws the button in a loading state.             |
| `max`               |           | `string \| number \| Date \| undefined`          |                                                  |
| `maxlength`         |           | `number \| undefined`                            |                                                  |
| `min`               |           | `string \| number \| Date \| undefined`          |                                                  |
| `minlength`         |           | `number \| undefined`                            |                                                  |
| `name`              |           | `string`                                         | The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.<br />This attribute is ignored when `href` is present. |
| `outline`           |           | `boolean`                                        | Draws an outlined button.                        |
| `pattern`           |           | `string \| undefined`                            |                                                  |
| `pill`              |           | `boolean`                                        | Draws a pill-style button with rounded edges.    |
| `rel`               |           | `string`                                         | When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the<br />default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a<br />specific tab/window, this will prevent that from working correctly. You can remove or change the default value by<br />setting the attribute to an empty string or a value of your choice, respectively. |
| `reportValidity`    |           | `() => boolean`                                  |                                                  |
| `required`          |           | `boolean \| undefined`                           |                                                  |
| `setCustomValidity` |           | `(message: string) => void`                      |                                                  |
| `size`              |           | `"small" \| "medium" \| "large"`                 | The button's size.                               |
| `step`              |           | `number \| "any" \| undefined`                   |                                                  |
| `target`            |           | `"_self" \| "_blank" \| "_parent" \| "_top"`     | Tells the browser where to open the link. Only used when `href` is present. |
| `title`             |           | `string`                                         |                                                  |
| `type`              |           | `"button" \| "submit" \| "reset"`                | The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native<br />`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. |
| `validationMessage` | readonly  | `string`                                         | Gets the validation message                      |
| `validity`          | readonly  | `ValidityState`                                  | Gets the validity state object                   |
| `value`             |           | `string`                                         | The value of the button, submitted as a pair with the button's name as part of the form data, but only when this<br />button is the submitter. This attribute is ignored when `href` is present. |
| `variant`           |           | `"default" \| "primary" \| "success" \| "neutral" \| "warning" \| "danger" \| "text"` | The button's theme variant.                      |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `blur`                 | `(): void`                                       | Removes focus from the button.                   |
| `checkValidity`        | `(): boolean`                                    | Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. |
| `click`                | `(): void`                                       | Simulates a click on the button.                 |
| `emit`                 | `{ <T extends "submit" \| "reset" \| "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| ... 112 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<...` | Emits a custom event with more convenient defaults. |
| `focus`                | `(options?: FocusOptions \| undefined): void`    | Sets focus on the button.                        |
| `getForm`              | `(): HTMLFormElement \| null`                    | Gets the associated form, if one exists.         |
| `handleDisabledChange` | `(): void`                                       |                                                  |
| `reportValidity`       | `(): boolean`                                    | Checks for validity and shows the browser's validation message if the control is invalid. |
| `setCustomValidity`    | `(message: string): void`                        | Sets a custom validation message. Pass an empty string to restore validity. |

## Events

| Event        | Description                                      |
|--------------|--------------------------------------------------|
| `sl-blur`    | Emitted when the button loses focus.             |
| `sl-focus`   | Emitted when the button gains focus.             |
| `sl-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## Slots

| Name     | Description                                      |
|----------|--------------------------------------------------|
|          | The button's label.                              |
| `prefix` | A presentational prefix icon or similar element. |
| `suffix` | A presentational suffix icon or similar element. |

## CSS Shadow Parts

| Part      | Description                                      |
|-----------|--------------------------------------------------|
| `base`    | The component's base wrapper.                    |
| `caret`   | The button's caret icon, an `<sl-icon>` element. |
| `label`   | The button's label.                              |
| `prefix`  | The container that wraps the prefix.             |
| `spinner` | The spinner that shows when the button is in the loading state. |
| `suffix`  | The container that wraps the suffix.             |
