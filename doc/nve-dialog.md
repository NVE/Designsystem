# nve-dialog

En sl-dialog i NVE-forkledning.
Mer info: https://shoelace.style/components/dialog

Vil du ha ikon foran tittelen kan du angi navnet på ikonet som attributt "icon".
Skal det ikke være mulig å trykke utenfor for å lukke dialogen, sett på disableDialog attributt

## Properties

| Property            | Attribute           | Type          | Default | Description                                                                                                                                                                                                                                                                                                                                  |
| ------------------- | ------------------- | ------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dialog`            |                     | `HTMLElement` |         |                                                                                                                                                                                                                                                                                                                                              |
| `dir`               |                     | `string`      |         |                                                                                                                                                                                                                                                                                                                                              |
| `disableBackground` | `disableBackground` | `boolean`     | false   | Hvis disableBacground er true, kan man ikke trykke utenfor dialogen for å lukke den.                                                                                                                                                                                                                                                         |
| `icon`              | `icon`              | `string`      | ""      | Ikonet som skal vises                                                                                                                                                                                                                                                                                                                        |
| `label`             |                     | `string`      |         | The dialog's label as displayed in the header. You should always include a relevant label even when using<br />`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.                                                                                                           |
| `lang`              |                     | `string`      |         |                                                                                                                                                                                                                                                                                                                                              |
| `modal`             |                     | `Modal`       |         | Exposes the internal modal utility that controls focus trapping. To temporarily disable focus<br />trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when<br />the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping. |
| `noHeader`          |                     | `boolean`     |         | Disables the header. This will also remove the default close button, so please ensure you provide an easy,<br />accessible way for users to dismiss the dialog.                                                                                                                                                                              |
| `open`              |                     | `boolean`     |         | Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can<br />use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.                                                                                                                       |
| `overlay`           |                     | `HTMLElement` |         |                                                                                                                                                                                                                                                                                                                                              |
| `panel`             |                     | `HTMLElement` |         |                                                                                                                                                                                                                                                                                                                                              |

## Methods

| Method                                                                                   | Type                                                                                                                                                                                                                                                                                                                                            | Description                                         |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `emit`                                                                                   | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 113 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<.....` | Emits a custom event with more convenient defaults. |
| `handleOpenChange`                                                                       | `(): Promise<void>`                                                                                                                                                                                                                                                                                                                             |                                                     |
| `handleRequestClose`                                                                     | `(event: any): void`                                                                                                                                                                                                                                                                                                                            |
| <br />Stjålet fra shoelace eksempel. Hindrer at man lukker dialogen ved å trykke utenfor |
| `hide`                                                                                   | `(): Promise<void>`                                                                                                                                                                                                                                                                                                                             | Hides the dialog                                    |
| `show`                                                                                   | `(): Promise<void>`                                                                                                                                                                                                                                                                                                                             | Shows the dialog.                                   |
| `updateIcon`                                                                             | `(): void`                                                                                                                                                                                                                                                                                                                                      | Oppdaterer ikonet som vises i dialogens tittel.     |

<br />Metoden søker først etter tittel-elementet i komponentens skygge-DOM.
<br />Hvis tittel-elementet finnes og `icon`-egenskapen er satt, oppdateres
<br />tittel-elementets stil for å inkludere det angitte ikonet.
<br />Hvis `icon`-egenskapen ikke er satt, settes ikoninnholdet til 'none'
<br />for å unngå å skape unødvendig mellomrom i layouten. |

## Events

| Event              | Type                                                    | Description                                                                                                                                                                                                                                                                                             |
| ------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sl-after-hide`    |                                                         | Emitted after the dialog closes and all animations are complete.                                                                                                                                                                                                                                        |
| `sl-after-show`    |                                                         | Emitted after the dialog opens and all animations are complete.                                                                                                                                                                                                                                         |
| `sl-hide`          |                                                         | Emitted when the dialog closes.                                                                                                                                                                                                                                                                         |
| `sl-initial-focus` |                                                         | Emitted when the dialog opens and is ready to receive focus. Calling<br />`event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.                                                                                                              |
| `sl-request-close` | `{ source: 'close-button' \| 'keyboard' \| 'overlay' }` | Emitted when the user attempts to<br />close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling<br />`event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in<br />destructive behavior such as data loss. |
| `sl-show`          |                                                         | Emitted when the dialog opens.                                                                                                                                                                                                                                                                          |

## Slots

| Name             | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
|                  | The dialog's main content.                                                  |
| `body`           | hovedinnholdet                                                              |
| `footer`         | feltet i bunden hvor knappene er plassert                                   |
| `header-actions` | Optional actions to add to the header. Works best with `<sl-icon-button>`.  |
| `label`          | teksten som skal vises i overskriften. Eller du kan bruke label-attributtet |

## CSS Shadow Parts

| Part                 | Description                                                                |
| -------------------- | -------------------------------------------------------------------------- |
| `base`               | The component's base wrapper.                                              |
| `body`               | The dialog's body.                                                         |
| `close-button`       | The close button, an `<sl-icon-button>`.                                   |
| `close-button__base` | The close button's exported `base` part.                                   |
| `footer`             | The dialog's footer.                                                       |
| `header`             | The dialog's header. This element wraps the title and header actions.      |
| `header-actions`     | Optional actions to add to the header. Works best with `<sl-icon-button>`. |
| `overlay`            | The overlay that covers the screen behind the dialog.                      |
| `panel`              | The dialog's panel (where the dialog and its content are rendered).        |
| `title`              | The dialog's title.                                                        |

## CSS Custom Properties

| Property           | Description                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| `--body-spacing`   | The amount of padding to use for the body.                                                          |
| `--footer-spacing` | The amount of padding to use for the footer.                                                        |
| `--header-spacing` | The amount of padding to use for the header.                                                        |
| `--width`          | The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. |
