# nve-alert

En Shoelace-alert med Nve styling
Se https://shoelace.style/components/alert

## Properties

| Property     | Attribute    | Type                                             | Default | Description                                      |
|--------------|--------------|--------------------------------------------------|---------|--------------------------------------------------|
| `base`       |              | `HTMLElement`                                    |         |                                                  |
| `closable`   |              | `boolean`                                        |         | Enables a close button that allows the user to dismiss the alert. |
| `dir`        |              | `string`                                         |         |                                                  |
| `duration`   |              | `number`                                         |         | The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with<br />the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning<br />the alert will not close on its own. |
| `emphasized` | `emphasized` | `boolean`                                        | false   | Bestemmer sterkere bakgrunnsfarge                |
| `lang`       |              | `string`                                         |         |                                                  |
| `leftStroke` | `leftStroke` | `boolean`                                        | false   | Ramme linje til venstre                          |
| `open`       |              | `boolean`                                        |         | Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can<br />use the `show()` and `hide()` methods and this attribute will reflect the alert's open state. |
| `text`       | `text`       | `string`                                         | ""      | Tynnere beskrivelse tekst                        |
| `title`      | `title`      | `string`                                         | ""      | Tykk tekst, vises helt til venstre               |
| `variant`    |              | `"primary" \| "success" \| "neutral" \| "warning" \| "danger"` |         | The alert's theme variant.                       |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `emit`                 | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 88 more ... \| "wheel">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<...>; ...` | Emits a custom event with more convenient defaults. |
| `handleDurationChange` | `(): void`                                       |                                                  |
| `handleOpenChange`     | `(): Promise<void>`                              |                                                  |
| `hide`                 | `(): Promise<void>`                              | Hides the alert                                  |
| `show`                 | `(): Promise<void>`                              | Shows the alert.                                 |
| `toast`                | `(): Promise<void>`                              | Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when<br />dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by<br />calling this method again. The returned promise will resolve after the alert is hidden. |

## Events

| Event           | Description                                      |
|-----------------|--------------------------------------------------|
| `sl-after-hide` | Emitted after the alert closes and all animations are complete. |
| `sl-after-show` | Emitted after the alert opens and all animations are complete. |
| `sl-hide`       | Emitted when the alert closes.                   |
| `sl-show`       | Emitted when the alert opens.                    |

## Slots

| Name   | Description                                      |
|--------|--------------------------------------------------|
|        | The alert's main content.                        |
| `icon` | An icon to show in the alert. Works best with `<sl-icon>`. |

## CSS Shadow Parts

| Part                 | Description                                      |
|----------------------|--------------------------------------------------|
| `base`               | The component's base wrapper.                    |
| `close-button`       | The close button, an `<sl-icon-button>`.         |
| `close-button__base` | The close button's exported `base` part.         |
| `icon`               | The container that wraps the optional icon.      |
| `message`            | The container that wraps the alert's main content. |
