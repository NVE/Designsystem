import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: fit-content;
    --_img-small-size: var(--font-size-medium);
    --_img-large-size: var(--font-size-large);
    --_transition-time: 0.3s;
    --nve-icon-color-hover: inherit;
    --nve-icon-color-pressed: inherit;
    --nve-icon-color: inherit;
  }

  .button {
    padding-inline: unset;
    margin: unset;
    padding-block: unset;
    display: flex;
    background: var(--_button-background, transparent);
    color: var(--_button-color, inherit);
    border-radius: var(--border-radius-small);
    border: var(--border-width-default) solid transparent;
    border-color: var(--_button-border-color, transparent);
    box-shadow: var(--_button-box-shadow, unset);
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
      background var(--_transition-time) ease,
      color var(--_transition-time) ease,
      border-color var(--_transition-time) ease,
      box-shadow var(--_transition-time) ease;
  }

  .button:not(.button--loading):not(.button--disabled):hover {
    background: var(--_button-background-hover, transparent);
    color: var(--_button-color-hover, inherit);
    border-color: var(--_button-border-color-hover, transparent);
    box-shadow: var(--_button-box-shadow-hover, unset);
  }

  .button:not(.button--loading):not(.button--disabled):active {
    background: var(--_button-background-pressed, transparent);
    color: var(--_button-color-pressed, inherit);
    box-shadow: var(--_button-box-shadow-pressed, unset);
  }

  .button:focus-visible {
    outline: var(--border-width-strong) solid var(--color-interactive-border-accessibility-focus);
  }

  /* Varianter */
  .button--primary {
    --_button-background: var(--color-interactive-background-primary-enabled);
    --_button-color: var(--color-interactive-foreground-primary-enabled);
    &:hover {
      --_button-background-hover: var(--color-interactive-background-primary-hover);
      --_button-color-hover: var(--color-interactive-foreground-primary-hover);
    }
    &:active {
      --_button-background-pressed: var(--color-interactive-background-primary-pressed);
      --_button-color-pressed: var(--color-interactive-foreground-primary-hover);
    }
  }

  .button--secondary {
    --_button-background: var(--color-interactive-background-secondary-enabled);
    --_button-color: var(--color-interactive-foreground-secondary-enabled);
    &:hover {
      --_button-background-hover: var(--color-interactive-background-secondary-hover);
      --_button-color-hover: var(--color-interactive-foreground-secondary-hover);
    }
    &:active {
      --_button-background-pressed: var(--color-interactive-background-secondary-pressed);
      --_button-color-pressed: var(--color-interactive-foreground-secondary-hover);
    }
  }

  .button--tertiary {
    --_button-background: transparent;
    --_button-border-color: var(--color-interactive-border-secondary-enabled);
    --_button-color: var(--color-interactive-foreground-secondary-enabled);
    &:hover {
      --_button-border-color-hover: var(--color-interactive-border-secondary-hover);
      --_button-color-hover: var(--color-interactive-foreground-secondary-hover);
    }
    &:active {
      --_button-box-shadow-pressed: inset 0 0 0 var(--border-width-default, 1px)
        var(--color-interactive-border-secondary-hover);
      --_button-color-pressed: var(--color-interactive-foreground-secondary-hover);
    }
  }

  .button--ghost {
    --_button-background: transparent;
    --_button-color: var(--color-interactive-foreground-secondary-enabled);
    &:hover {
      --_button-background-hover: var(--color-interactive-background-tertiary-hover);
      --_button-color-hover: var(--color-interactive-foreground-secondary-hover);
    }
    &:active {
      --_button-background-pressed: var(--color-interactive-background-tertiary-pressed);
      --_button-color-pressed: var(--color-interactive-foreground-secondary-hover);
    }
  }
  .button--danger {
    --_button-background: var(--color-feedback-background-emphasized-error);
    --_button-color: var(--color-interactive-foreground-danger-enabled);
    &:hover {
      --_button-background-hover: var(--color-interactive-background-danger-hover);
      --_button-color-hover: var(--color-interactive-foreground-danger-enabled);
    }
    &:active {
      --_button-background-pressed: var(--color-interactive-background-danger-pressed);
      --_button-color-pressed: var(--color-interactive-foreground-danger-enabled);
    }
  }

  /* Størrelser */
  .button--small {
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

  .button--medium {
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

  .button--large {
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

  /* Ikon kun modifikatorer */
  .button.button--small.button--icon-only,
  .button.button--medium.button--icon-only,
  .button.button--large.button--icon-only {
    padding: 0;
    color: var(--nve-icon-color, var(--_button-color));
    &:hover {
      color: var(--nve-icon-color-hover, var(--_button-color-hover));
    }
    &:active {
      color: var(--nve-icon-color-pressed, var(--_button-color-pressed));
    }
  }

  .button--small.button--icon-only {
    width: calc(var(--spacing-2x-small) * 2 + var(--_img-small-size));
  }

  .button--medium.button--icon-only {
    width: calc(var(--spacing-x-small) * 2 + var(--_img-large-size));
  }

  .button--large.button--icon-only {
    width: calc(var(--spacing-small) * 2 + var(--_img-large-size));
  }

  /* Sirkulære knapper */
  .button--medium.button--circle,
  .button--large.button--circle,
  .button--small.button--circle {
    border-radius: var(--border-radius-circle);
  }

  .button--medium.button--circle {
    padding: var(--spacing-x-small);
  }

  .button--large.button--circle {
    padding: var(--spacing-small);
  }

  .button--small.button--circle {
    padding: var(--spacing-2x-small);
  }

  /* Deaktivert */
  .button--disabled {
    cursor: not-allowed;
  }

  .button--primary.button--disabled {
    --_button-background: var(--color-interactive-background-primary-disabled);
    --_button-color: var(--color-interactive-foreground-primary-disabled);
  }

  .button--secondary.button--disabled {
    --_button-background: var(--color-interactive-background-secondary-disabled);
    --_button-color: var(--color-interactive-foreground-secondary-disabled);
  }

  .button--tertiary.button--disabled {
    --_button-border-color: var(--color-interactive-border-secondary-disabled);
    --_button-color: var(--color-interactive-foreground-secondary-disabled);
  }

  .button--ghost.button--disabled {
    --_button-color: var(--color-interactive-foreground-secondary-disabled);
  }

  .button--danger.button--disabled {
    --_button-background: var(--color-interactive-background-danger-disabled);
    --_button-color: var(--color-interactive-foreground-danger-disabled);
  }

  /* Lastende */
  .button--loading {
    cursor: wait;
  }

  .button__spinner {
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-interactive-foreground-secondary-enabled);
    border-color: var(--color-interactive-foreground-secondary-enabled) transparent transparent transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /*
   * Badge
   */
  .button ::slotted(nve-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }
`;
