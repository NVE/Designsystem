import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: fit-content;
    --_border-color: var(--color-interactive-border-secondary-enabled);
    --_img-large-size: var(--font-size-large);
    --_transition-time: 0.3s;
    --nve-icon-color-hover: inherit;
    --nve-icon-color-pressed: inherit;
    --nve-icon-color: inherit;
  }

  .radio-button {
    position: relative;
    padding-inline: unset;
    margin: unset;
    padding-block: unset;
    display: flex;
    background: var(--_button-background, transparent);
    color: var(--_button-color, inherit);
    border: var(--border-width-default) solid var(--_border-color, transparent);
    margin-inline-start: -1px;
    min-height: var(--sizing-fixed-sizing-medium);
    min-width: var(--sizing-fixed-sizing-medium);
    justify-content: center;
    padding: var(--_button-padding, unset);
    height: var(--_button-height, unset);
    font: var(--_button-font, unset);
    align-items: center;
    gap: var(--spacing-x-small);
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition:
      background 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease;
  }

  .radio-button--first {
    border-radius: var(--border-radius-small);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-inline-start: 0;
  }

  .radio-button--last {
    border-radius: var(--border-radius-small);
    border-right-width: var(--border-width-default);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .radio-button--selected {
    --_button-background: var(--color-interactive-background-primary-enabled);
    --_button-color: var(--color-neutrals-background-primary);
    --_border-color: var(--color-interactive-background-primary-enabled);
  }

  .radio-button:hover:not(.radio-button--disabled) {
    --_button-background: var(--color-interactive-background-primary-hover);
    --_button-color: var(--color-interactive-foreground-primary-hover);
    --_border-color: var(--color-interactive-background-primary-hover);
  }

  :host(:focus-visible) .radio-button,
  .radio-button:focus-visible {
    outline: var(--border-width-strong) solid var(--color-interactive-border-accessibility-focus);
    z-index: 1;
  }

  .radio-button--disabled {
    --_button-background: var(--color-interactive-background-primary-disabled);
    --_button-color: var(--color-interactive-foreground-primary-disabled);
    cursor: not-allowed;
  }

  /* Størrelser */
  .radio-button--small {
    padding: 0 var(--spacing-x-small);
    height: calc(var(--spacing-2x-small) * 2 + var(--_img-small-size));
    font: var(--typography-label-x-small);
    line-height: 1em;
    ::slotted(nve-icon) {
      --icon-size: var(--_img-small-size);
    }
    ::slotted(img) {
      width: var(--_img-small-size);
      height: var(--_img-small-size);
    }
  }

  .radio-button--medium {
    padding: 0 var(--spacing-medium);
    height: calc(var(--spacing-x-small) * 2 + var(--_img-large-size));
    font: var(--typography-label-small);
    line-height: 1em;
    ::slotted(nve-icon) {
      --icon-size: var(--_img-large-size);
    }
    ::slotted(img) {
      width: var(--_img-large-size);
      height: var(--_img-large-size);
    }
  }

  .radio-button--large {
    padding: var(--spacing-none) var(--spacing-large);
    height: calc(var(--spacing-small) * 2 + var(--_img-large-size));
    font: var(--typography-label-medium);
    ::slotted(nve-icon) {
      --icon-size: var(--_img-large-size);
    }
    ::slotted(img) {
      width: var(--_img-large-size);
      height: var(--_img-large-size);
    }
  }
`;
