# nve-menu

En sl-menu i NVE-forkledning.
Mer info: https://shoelace.style/components/menu
Man kan bruke nve-label inni sl-menu, f.eks. til å kategorisere menyvalg.
Nve-label får en spesiell styling når den brukes inni nve-menu

## Properties

| Property      | Type              |
|---------------|-------------------|
| `defaultSlot` | `HTMLSlotElement` |
| `dir`         | `string`          |
| `lang`        | `string`          |

## Methods

| Method           | Type                                             | Description                                      |
|------------------|--------------------------------------------------|--------------------------------------------------|
| `emit`           | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 113 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<.....` | Emits a custom event with more convenient defaults. |
| `getAllItems`    | `(): SlMenuItem[]`                               |                                                  |
| `getCurrentItem` | `(): SlMenuItem \| undefined`                    |                                                  |
| `setCurrentItem` | `(item: SlMenuItem): void`                       |                                                  |

## Events

| Event       | Type                   | Description                           |
|-------------|------------------------|---------------------------------------|
| `sl-select` | `{ item: SlMenuItem }` | Emitted when a menu item is selected. |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | The menu's content, including menu items, menu labels, and dividers. |
