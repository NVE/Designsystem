# nve-menu-item

En sl-menu-item i NVE-forkledning.
Mer info: https://shoelace.style/components/menu-item

## Properties

| Property        | Attribute       | Type                     | Default | Description                                      |
|-----------------|-----------------|--------------------------|---------|--------------------------------------------------|
| `category`      | `category`      | `boolean`                | false   | Gjør at teksten vises som en unclickable kategori |
| `checked`       |                 | `boolean`                |         | Draws the item in a checked state.               |
| `defaultSlot`   |                 | `HTMLSlotElement`        |         |                                                  |
| `dir`           |                 | `string`                 |         |                                                  |
| `disabled`      |                 | `boolean`                |         | Draws the menu item in a disabled state, preventing selection. |
| `dividerBottom` | `dividerBottom` | `boolean`                | false   | Setter en divider på bunnen av item.             |
| `dividerTop`    | `dividerTop`    | `boolean`                | false   | Setter en divider på toppen av item.             |
| `indent`        | `indent`        | `boolean`                | false   | Gjør at teksten blir indent og mindre dominant farge |
| `lang`          |                 | `string`                 |         |                                                  |
| `menuItem`      |                 | `HTMLElement`            |         |                                                  |
| `subtext`       | `subtext`       | `string`                 | ""      | Tekst som vises som subtext(undertekst).         |
| `type`          |                 | `"normal" \| "checkbox"` |         | The type of menu item to render. To use `checked`, this value must be set to `checkbox`. |
| `value`         |                 | `string`                 |         | A unique value to store in the menu item. This can be used as a way to identify menu items when selected. |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `emit`                 | `{ <T extends "submit" \| "reset" \| "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| ... 112 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<...` | Emits a custom event with more convenient defaults. |
| `getTextLabel`         | `(): string`                                     | Returns a text label based on the contents of the menu item's default slot. |
| `handleCheckedChange`  | `(): void`                                       |                                                  |
| `handleDisabledChange` | `(): void`                                       |                                                  |
| `handleTypeChange`     | `(): void`                                       |                                                  |
| `isSubmenu`            | `(): boolean`                                    |                                                  |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | The menu item's label.                           |
| `prefix`  | Used to prepend an icon or similar element to the menu item. |
| `submenu` | Used to denote a nested menu.                    |
| `suffix`  | Used to append an icon or similar element to the menu item. |

## CSS Shadow Parts

| Part           | Description                                      |
|----------------|--------------------------------------------------|
| `base`         | The component's base wrapper.                    |
| `checked-icon` | The checked icon, which is only visible when the menu item is checked. |
| `label`        | The menu item label.                             |
| `prefix`       | The prefix container.                            |
| `submenu-icon` | The submenu icon, visible only when the menu item has a submenu (not yet implemented). |
| `suffix`       | The suffix container.                            |

## CSS Custom Properties

| Property           | Default | Description                                      |
|--------------------|---------|--------------------------------------------------|
| `--submenu-offset` | "-2px"  | The distance submenus shift to overlap the parent menu. |
