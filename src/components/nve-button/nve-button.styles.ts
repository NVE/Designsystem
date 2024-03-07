import { css } from 'lit';

export default css`
  /* kan ikke bruke gap fordi den lager rom mellom slots selv om de er tomme */
  /* derfor setter margin på ::part(label) og substraherer margin verdi i horizontal padding i selve .button klassen  */
  .button {
    width: fit-content;
    align-items: center;
    box-sizing: border-box;
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
    margin-right: var(--spacing-x-small);
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

  :host([size='medium'])::part(label) {
    font: var(--label-small);
  }

  :host([size='small'])::part(label) {
    font: var(--label-x-small);
  }

  /** check if has loading if yes apply changes to has-suffix class it shouldnt be fire if loading is not here */

  :host([loading]) .button--has-suffix.button--medium,
  :host([loading]) .button--has-suffix.button--large {
    padding-inline-end: var(--spacing-x-small);
  }

  :host([loading]) .button--has-suffix.button--small {
    padding-inline-end: 0.125rem;
  }

  .button--has-suffix.button--medium {
    padding-inline-end: var(--spacing-medium, 1rem);
  }
  .button--has-suffix.button--large {
    padding-inline-end: var(--spacing-medium, 1rem);
  }

  :host::part(base) {
    gap: var(--spacing-x-small);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--spacing-x-small);
  }

  .button--has-prefix.button--large,
  .button--has-prefix.button--medium {
    padding-inline-start: var(--spacing-medium, 1rem);
  }

  .button--has-label.button--large .button__label,
  .button--has-label.button--small .button__label,
  .button--has-label.button--medium .button__label {
    padding: unset;
  }

  .button--small {
    height: var(--sizing-x-small);
    min-height: unset;
    padding: 0px;
  }
  .button--large {
    height: var(--sizing-medium);
    min-height: unset;
    padding: var(--spacing-medium, 1rem) calc(var(--spacing-medium, 1rem) - var(--spacing-x-small));
  }
  /* fjern gap forskjell på venstre og høyre */
  .button--medium {
    height: var(--sizing-small);
    min-height: unset;
    padding: var(--spacing-medium, 1rem) calc(var(--spacing-medium, 1rem) - var(--spacing-x-small));
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
