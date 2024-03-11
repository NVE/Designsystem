# nve-popup

En sl-popup med NVE design.
Mer info: https://shoelace.style/components/popup

## Properties

| Property                 | Type                                             | Description                                      |
|--------------------------|--------------------------------------------------|--------------------------------------------------|
| `active`                 | `boolean`                                        | Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn<br />down and the popup will be hidden. |
| `anchor`                 | `string \| Element \| VirtualElement`            | The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor<br />element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the<br />`anchor` slot instead. |
| `arrow`                  | `boolean`                                        | Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and<br />`--arrow-color` custom properties. For additional customizations, you can also target the arrow using<br />`::part(arrow)` in your stylesheet. |
| `arrowPadding`           | `number`                                         | The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,<br />this will prevent it from overflowing the corners. |
| `arrowPlacement`         | `"start" \| "end" \| "center" \| "anchor"`       | The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the<br />anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will<br />align the arrow to the start, end, or center of the popover instead. |
| `autoSize`               | `"horizontal" \| "vertical" \| "both"`           | When set, this will cause the popup to automatically resize itself to prevent it from overflowing. |
| `autoSizeBoundary`       | `Element \| Element[]`                           | The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By<br />default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can<br />change the boundary by passing a reference to one or more elements to this property. |
| `autoSizePadding`        | `number`                                         | The amount of padding, in pixels, to exceed before the auto-size behavior will occur. |
| `dir`                    | `string`                                         |                                                  |
| `distance`               | `number`                                         | The distance in pixels from which to offset the panel away from its anchor. |
| `flip`                   | `boolean`                                        | When set, placement of the popup will flip to the opposite site to keep it in view. You can use<br />`flipFallbackPlacements` to further configure how the fallback placement is determined. |
| `flipBoundary`           | `Element \| Element[]`                           | The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By<br />default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can<br />change the boundary by passing a reference to one or more elements to this property. |
| `flipFallbackPlacements` | `string`                                         | If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a<br />string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip<br />fallback strategy will be used instead. |
| `flipFallbackStrategy`   | `"best-fit" \| "initial"`                        | When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether<br />the popup should be positioned using the best available fit based on available space or as it was initially<br />preferred. |
| `flipPadding`            | `number`                                         | The amount of padding, in pixels, to exceed before the flip behavior will occur. |
| `lang`                   | `string`                                         |                                                  |
| `placement`              | `"top" \| "top-start" \| "top-end" \| "bottom" \| "bottom-start" \| "bottom-end" \| "right" \| "right-start" \| "right-end" \| "left" \| "left-start" \| "left-end"` | The preferred placement of the popup. Note that the actual placement will vary as configured to keep the<br />panel inside of the viewport. |
| `popup`                  | `HTMLElement`                                    | A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. |
| `shift`                  | `boolean`                                        | Moves the popup along the axis to keep it in view when clipped. |
| `shiftBoundary`          | `Element \| Element[]`                           | The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By<br />default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can<br />change the boundary by passing a reference to one or more elements to this property. |
| `shiftPadding`           | `number`                                         | The amount of padding, in pixels, to exceed before the shift behavior will occur. |
| `skidding`               | `number`                                         | The distance in pixels from which to offset the panel along its anchor. |
| `strategy`               | `"absolute" \| "fixed"`                          | Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is<br />clipped, using a `fixed` position strategy can often workaround it. |
| `sync`                   | `"both" \| "width" \| "height"`                  | Syncs the popup's width or height to that of the anchor element. |

## Methods

| Method       | Type                                             | Description                                      |
|--------------|--------------------------------------------------|--------------------------------------------------|
| `emit`       | `{ <T extends "abort" \| "animationcancel" \| "animationend" \| "animationiteration" \| "animationstart" \| "auxclick" \| "beforeinput" \| "blur" \| "cancel" \| "canplay" \| "canplaythrough" \| ... 88 more ... \| "wheel">(name: EventTypeDoesNotRequireDetail<...>, options?: SlEventInit<...> \| undefined): GetCustomEventType<...>; ...` | Emits a custom event with more convenient defaults. |
| `reposition` | `(): void`                                       | Forces the popup to recalculate and reposition itself. |

## Events

| Event           | Description                                      |
|-----------------|--------------------------------------------------|
| `sl-reposition` | Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive<br />operations in your listener or consider debouncing it. |

## Slots

| Name     | Description                                      |
|----------|--------------------------------------------------|
|          | The popup's content.                             |
| `anchor` | The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the<br />`anchor` attribute or property instead. |

## CSS Shadow Parts

| Part    | Description                                      |
|---------|--------------------------------------------------|
| `arrow` | The arrow's container. Avoid setting `top\|bottom\|left\|right` properties, as these values are<br />assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and<br />maybe a border or box shadow. |
| `popup` | The popup's container. Useful for setting a background color, box shadow, etc. |

## CSS Custom Properties

| Property                       | Default                     | Description                                      |
|--------------------------------|-----------------------------|--------------------------------------------------|
| `--arrow-color`                | "var(--sl-color-neutral-0)" | The color of the arrow.                          |
| `--arrow-size`                 | "6px"                       | The size of the arrow. Note that an arrow won't be shown unless the `arrow`<br />attribute is used. |
| `--auto-size-available-height` |                             | A read-only custom property that determines the amount of height the<br />popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only<br />available when using `auto-size`. |
| `--auto-size-available-width`  |                             | A read-only custom property that determines the amount of width the<br />popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only<br />available when using `auto-size`. |
