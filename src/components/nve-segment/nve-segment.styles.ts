import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    --_border-left-width: 0;
    --_border-radius: 0;
    width: fit-content;
    outline: none;
  }
  :host(:first-of-type) {
    --_border-left-width: var(--border-width-default);
    --_border-radius: 4px 0px 0px 4px;
  }

  :host(:last-of-type) {
    --_border-radius: 0px 4px 4px 0px;
  }

  :host(:first-of-type:last-of-type) {
    --_border-radius: 4px;
  }

  :host([pill]:first-of-type) {
    --_border-left-width: var(--border-width-default);
    --_border-radius: var(--border-radius-pill) 0px 0px var(--border-radius-pill);
  }

  :host([pill]:last-of-type) {
    --_border-radius: 0px var(--border-radius-pill) var(--border-radius-pill) 0px;
  }

  :host([pill]:first-of-type:last-of-type) {
    --_border-radius: var(--border-radius-pill);
  }

  .segment {
    display: inline-flex;
    gap: var(--spacing-2x-small);
    align-items: center;
    justify-content: center;
    padding: var(--_padding, var(--spacing-small));
    font: var(--typography-label-small-light);
    line-height: 1rem;
    color: var(--_color, var(--color-interactive-foreground-secondary-enabled));
    min-height: var(--_min-height, var(--sizing-fixed-sizing-large));
    min-width: 3em;
    border-color: var(--_border-color, var(--color-neutrals-border-subtle));
    border-style: solid;
    border-top-width: var(--border-width-default);
    border-bottom-width: var(--border-width-default);
    border-left-width: var(--_border-left-width, 0);
    border-right-width: var(--border-width-default);
    border-radius: var(--_border-radius);
    background: var(--_bg-color, var(--color-neutrals-background-primary));
    cursor: pointer;
  }

  .segment:not(.segment--checked):not(.segment--disabled):hover {
    --_bg-color: var(--color-interactive-background-tertiary-hover);
    --_border-color: var(--color-interactive-background-tertiary-hover);
  }

  .segment--small {
    --_padding: var(--spacing-2x-small);
    --_min-height: var(--sizing-fixed-sizing-medium);
    ::slotted(nve-icon) {
      --icon-size: var(--font-size-medium);
    }
  }

  .segment--medium {
    --_padding: var(--spacing-x-small);
    --_min-height: var(--sizing-fixed-sizing-large);
  }

  .segment--large {
    --_padding: var(--spacing-small);
    --_min-height: var(--sizing-fixed-sizing-x-large);
    font-size: var(--typography-label-large-light);
  }

  .segment--disabled {
    --_bg-color: var(--color-interactive-background-tertiary-disabled);
    --_color: var(--color-interactive-foreground-secondary-disabled);
    cursor: not-allowed;
  }

  .segment--checked {
    --_bg-color: var(--color-interactive-background-primary-enabled);
    --_color: var(--color-interactive-foreground-primary-enabled);
    --_border-color: var(--color-interactive-background-primary-enabled);
  }

  :host(:focus-visible) {
    position: relative;
    z-index: 1;
  }

  :host(:focus-visible) .segment {
    outline: 2px solid var(--color-interactive-border-accessibility-focus);
    outline-offset: 1px;
  }
`;
