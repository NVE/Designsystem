# nve-tooltip

En sl-tooltip i NVE-uniform. TODO: Denne har ingen NVE-styling ennå.

## Properties

| Property      | Type                                             | Description                                      |
|---------------|--------------------------------------------------|--------------------------------------------------|
| `body`        | `HTMLElement`                                    |                                                  |
| `content`     | `string`                                         | The tooltip's content. If you need to display HTML, use the `content` slot instead. |
| `defaultSlot` | `HTMLSlotElement`                                |                                                  |
| `dir`         | `string`                                         |                                                  |
| `disabled`    | `boolean`                                        | Disables the tooltip so it won't show when triggered. |
| `distance`    | `number`                                         | The distance in pixels from which to offset the tooltip away from its target. |
| `hoist`       | `boolean`                                        | Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with<br />`overflow: auto\|hidden\|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,<br />scenarios. |
| `lang`        | `string`                                         |                                                  |
| `open`        | `boolean`                                        | Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. |
| `placement`   | `"top" \| "top-start" \| "top-end" \| "bottom" \| "bottom-start" \| "bottom-end" \| "right" \| "right-start" \| "right-end" \| "left" \| "left-start" \| "left-end"` | The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip<br />inside of the viewport. |
| `popup`       | `SlPopup`                                        |                                                  |
| `skidding`    | `number`                                         | The distance in pixels from which to offset the tooltip along its target. |
| `trigger`     | `string`                                         | Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple<br />options can be passed by separating them with a space. When manual is used, the tooltip must be activated<br />programmatically. |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `emit`                 | `{ <T extends "submit" \| "reset" \| "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| ... 112 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<...` | Emits a custom event with more convenient defaults. |
| `handleDisabledChange` | `(): void`                                       |                                                  |
| `handleOpenChange`     | `(): Promise<void>`                              |                                                  |
| `handleOptionsChange`  | `(): Promise<void>`                              |                                                  |
| `hide`                 | `(): Promise<void>`                              | Hides the tooltip                                |
| `show`                 | `(): Promise<void>`                              | Shows the tooltip.                               |

## Events

| Event           | Description                                      |
|-----------------|--------------------------------------------------|
| `sl-after-hide` | Emitted after the tooltip has hidden and all animations are complete. |
| `sl-after-show` | Emitted after the tooltip has shown and all animations are complete. |
| `sl-hide`       | Emitted when the tooltip begins to hide.         |
| `sl-show`       | Emitted when the tooltip begins to show.         |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored. |
| `content` | The content to render in the tooltip. Alternatively, you can use the `content` attribute. |

## CSS Shadow Parts

| Part          | Description                                      |
|---------------|--------------------------------------------------|
| `base`        | The component's base wrapper, an `<sl-popup>` element. |
| `base__arrow` | The popup's exported `arrow` part. Use this to target the tooltip's arrow. |
| `base__popup` | The popup's exported `popup` part. Use this to target the tooltip's popup container. |
| `body`        | The tooltip's body where its content is rendered. |

## CSS Custom Properties

| Property       | Description                                      |
|----------------|--------------------------------------------------|
| `--hide-delay` | The amount of time to wait before hiding the tooltip when hovering. |
| `--max-width`  | The maximum width of the tooltip before its content will wrap. |
| `--show-delay` | The amount of time to wait before showing the tooltip when hovering. |
