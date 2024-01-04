# nve-divider

En Shoelace-divider i NVE-forkledning.
Se https://shoelace.style/components/divider

## Properties

| Property   | Type      | Description                                  |
|------------|-----------|----------------------------------------------|
| `dir`      | `string`  |                                              |
| `lang`     | `string`  |                                              |
| `vertical` | `boolean` | Draws the divider in a vertical orientation. |

## Methods

| Method                 | Type                                             | Description                                      |
|------------------------|--------------------------------------------------|--------------------------------------------------|
| `emit`                 | `{ <T extends "submit" \| "reset" \| "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| ... 112 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<...` | Emits a custom event with more convenient defaults. |
| `handleVerticalChange` | `(): void`                                       |                                                  |

## CSS Custom Properties

| Property    | Description                 |
|-------------|-----------------------------|
| `--color`   | The color of the divider.   |
| `--spacing` | The spacing of the divider. |
| `--width`   | The width of the divider.   |
