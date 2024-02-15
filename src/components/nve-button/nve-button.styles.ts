import { css } from 'lit';

export default css`
  /* kan ikke bruke gap fordi den lager rom mellom slots selv om de er tomme */
  /* derfor setter margin på ::part(label) og substraherer margin verdi i horizontal padding i selve .button klassen  */
  .button {
    width: fit-content;
    align-items: center;
    padding: var(--spacing-medium, 1rem) calc(var(--spacing-large, 1.5rem) - var(--spacing-x-small, 0.5rem));
  }

  .button ::slotted(nve-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host::part(spinner) {
    --track-color: none;
    position: relative;
    top: 0;
    left: 0;
  }

  :host ::slotted(nve-icon) {
    font-size: 24px;
  }

  :host([size='small']) ::slotted(nve-icon) {
    font-size: 20px;
  }

  :host::part(label) {
    font: var(--label-medium);
  }

  :host([size='medium'])::part(spinner),
  :host([size='large'])::part(spinner) {
    margin-right: var(--spacing-small);
  }

  :host::part(base) {
    gap: var(--spacing-x-small);
  }

  :host([size='small'])::part(spinner) {
    margin-right: var(--spacing-x-small);
  }

  :host([size='small'])::part(label) {
    font: var(--label-x-small);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--spacing-x-small);
  }

  .button--has-label.button--large .button__label,
  .button--has-label.button--small .button__label,
  .button--has-label.button--medium .button__label {
    padding: unset;
  }

  .button--has-suffix.button--small,
  .button--has-suffix.button--medium,
  .button--has-suffix.button--large {
    padding-inline-end: unset;
  }

  .button--small {
    height: var(--sizing-x-small);
    padding: var(--spacing-x-small, 0.5rem) 0px;
  }
  .button--large {
    height: var(--sl-input-height-medium);
    padding: var(--spacing-medium, 1rem) var(---spacing-x-small, 0.5rem);
  }
  .button--medium {
    height: var(--sl-input-height-small);
    padding: var(--spacing-small, 0.75rem) var(---spacing-x-small, 0.5rem);
  }

  /* PRIMARY */
  .button--standard.button--primary {
    background-color: var(--interactive-primary-background-default);
    border-color: var(--interactive-primary-background-default);
    color: var(--interactive-primary-foreground-default);
  }
  .button--standard.button--primary:hover:not(.button--disabled),
  .button--standard.button--primary:active:not(.button--disabled) {
    border-color: var(--interactive-primary-background-hover);
    background: var(--interactive-primary-background-hover);
    color: var(--interactive-primary-foreground-default);
  }

  /* SECONDARY */
  .button--standard.button--default {
    border-color: var(--interactive-secondary-background-default);
    background: var(--interactive-secondary-background-default);
    color: var(--interactive-secondary-foreground-default);
  }
  .button--standard.button--default:hover:not(.button--disabled) {
    border-color: var(--interactive-secondary-background-hover);
    background: var(--interactive-secondary-background-hover);
    color: var(--sl-color-neutral-700);
  }

  /* GHOST */
  .button--outline.button--neutral,
  .button--standard.button--neutral {
    color: var(--interactive-ghost-foreground-default);
    background-color: transparent;
  }
  .button--standard.button--neutral {
    border: none;
  }
  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--interactive-ghost-background-hover);
    color: var(--interactive-ghost-foreground-hover);
  }

  /* OUTLINE */
  .button--outline.button--neutral,
  .button--outline.button--neutral:active:not(.button--disabled) {
    color: var(--interactive-outlined-foreground-default);
    border-color: var(--interactive-outlined-border-default);
    background-color: transparent;
  }
  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    border-color: var(--interactive-outlined-border-hover);
    color: var(--interactive-outlined-foreground-default);
    background-color: transparent;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: unset;
  }
`;
