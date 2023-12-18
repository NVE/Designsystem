# nve-spinner

En Shoelace-spinner i NVE-forkledning.
Se https://shoelace.style/components/spinner

## Properties

| Property | Type     |
|----------|----------|
| `dir`    | `string` |
| `lang`   | `string` |

## Methods

| Method | Type                                             | Description                                      |
|--------|--------------------------------------------------|--------------------------------------------------|
| `emit` | `{ <T extends "submit" \| "reset" \| "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| ... 112 more ... \| "sl-start">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<...` | Emits a custom event with more convenient defaults. |

## CSS Shadow Parts

| Part   | Description                   |
|--------|-------------------------------|
| `base` | The component's base wrapper. |

## CSS Custom Properties

| Property            | Description                                      |
|---------------------|--------------------------------------------------|
| `--indicator-color` | The color of the spinner's indicator.            |
| `--speed`           | The time it takes for the spinner to complete one animation cycle. |
| `--track-color`     | The color of the track.                          |
| `--track-width`     | The width of the track.                          |
