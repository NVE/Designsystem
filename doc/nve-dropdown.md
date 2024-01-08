# nve-dropdown

En Shoelace-dropdown i NVE-forkledning.
Se https://shoelace.style/components/dropdown

## Properties

| Property            | Type                                             | Description                                      |
|---------------------|--------------------------------------------------|--------------------------------------------------|
| `containingElement` | `HTMLElement \| undefined`                       | The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other<br />components that use a dropdown internally. |
| `dir`               | `string`                                         |                                                  |
| `disabled`          | `boolean`                                        | Disables the dropdown so the panel will not open. |
| `distance`          | `number`                                         | The distance in pixels from which to offset the panel away from its trigger. |
| `hoist`             | `boolean`                                        | Enable this option to prevent the panel from being clipped when the component is placed inside a container with<br />`overflow: auto\|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. |
| `lang`              | `string`                                         |                                                  |
| `open`              | `boolean`                                        | Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you<br />can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state. |
| `panel`             | `HTMLSlotElement`                                |                                                  |
| `placement`         | `"top" \| "top-start" \| "top-end" \| "bottom" \| "bottom-start" \| "bottom-end" \| "right" \| "right-start" \| "right-end" \| "left" \| "left-start" \| "left-end"` | The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel<br />inside of the viewport. |
| `popup`             | `SlPopup`                                        |                                                  |
| `skidding`          | `number`                                         | The distance in pixels from which to offset the panel along its trigger. |
| `stayOpenOnSelect`  | `boolean`                                        | By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for<br />dropdowns that allow for multiple interactions. |
| `trigger`           | `HTMLSlotElement`                                |                                                  |

## Methods

| Method                    | Type                                             | Description                                      |
|---------------------------|--------------------------------------------------|--------------------------------------------------|
| `addOpenListeners`        | `(): void`                                       |                                                  |
| `emit`                    | `{ <T extends "submit" \| "reset" \| "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| ... 112 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<...` | Emits a custom event with more convenient defaults. |
| `focusOnTrigger`          | `(): void`                                       |                                                  |
| `getMenu`                 | `(): NveMenu \| undefined`                       |                                                  |
| `handleOpenChange`        | `(): Promise<void>`                              |                                                  |
| `handleTriggerClick`      | `(): void`                                       |                                                  |
| `handleTriggerKeyDown`    | `(event: KeyboardEvent): Promise<void>`          |                                                  |
| `handleTriggerKeyUp`      | `(event: KeyboardEvent): void`                   |                                                  |
| `handleTriggerSlotChange` | `(): void`                                       |                                                  |
| `hide`                    | `(): Promise<void>`                              | Hides the dropdown panel                         |
| `removeOpenListeners`     | `(): void`                                       |                                                  |
| `reposition`              | `(): void`                                       | Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu<br />is activated. |
| `show`                    | `(): Promise<void>`                              | Shows the dropdown panel.                        |
| `updateAccessibleTrigger` | `(): void`                                       |                                                  |

## Events

| Event           | Description                                      |
|-----------------|--------------------------------------------------|
| `sl-after-hide` | Emitted after the dropdown closes and all animations are complete. |
| `sl-after-show` | Emitted after the dropdown opens and all animations are complete. |
| `sl-hide`       | Emitted when the dropdown closes.                |
| `sl-show`       | Emitted when the dropdown opens.                 |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | The dropdown's main content.                     |
| `trigger` | The dropdown's trigger, usually a `<sl-button>` element. |

## CSS Shadow Parts

| Part      | Description                                      |
|-----------|--------------------------------------------------|
| `base`    | The component's base wrapper.                    |
| `panel`   | The panel that gets shown when the dropdown is open. |
| `trigger` | The container that wraps the trigger.            |
