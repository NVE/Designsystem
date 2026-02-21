export interface EmitOptions {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}

/**
 * Dispatches a custom event from a component
 * @param element - The element to dispatch the event from
 * @param eventName - The name of the event
 * @param detail - Event detail data
 * @param options - Event options (bubbles, cancelable, composed)
 * @returns The dispatched event
 */
export function emit<T>(element: HTMLElement, eventName: string, detail: T, options: EmitOptions = {}): CustomEvent<T> {
  const { bubbles = true, cancelable = false, composed = true } = options;

  const event = new CustomEvent<T>(eventName, {
    bubbles,
    cancelable,
    composed,
    detail,
  });

  element.dispatchEvent(event);
  return event;
}
