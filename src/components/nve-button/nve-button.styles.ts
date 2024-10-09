import { css } from 'lit';

export default css`
  /* kan ikke bruke gap fordi den lager rom mellom slots selv om de er tomme */
  /* derfor setter margin på ::part(label) og substraherer margin verdi i horizontal padding i selve .button klassen  */
  :host {
    --nve-icon-color: inherit;
  }

  .button {
    width: fit-content;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    border: none;
    min-width: 48px;
    transition: background-color 0.3s ease;
  }

  :host([has-icon-only])::part(base) {
    gap: unset;
  }

  :host([has-icon-only]) .button--small {
    gap: unset;
    padding: var(--spacing-xx-small);
    min-width: unset;
  }

  :host([has-icon-only]) .button--medium {
    gap: unset;
    padding: var(--spacing-x-small);
    min-width: unset;
  }

  :host([has-icon-only][circle])::part(base) {
    width: unset;
  }

  :host([has-icon-only][loading])::part(spinner) {
    margin-right: 0;
  }

  .button ::slotted(nve-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    pointer-events: none;
  }

  :host::part(spinner) {
    --track-color: none;
    --track-width: 2.5px;
    position: relative;
    top: 0;
    font-size: 24px;
    left: 0;
    margin-right: var(--spacing-x-small);
  }

  :host ::slotted(nve-icon) {
    font-size: 24px;
    color: var(--nve-icon-color);
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
  .button:not(.button--has-label) .button__label {
    display: none;
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
  :host([variant='primary']) .button--standard.button {
    background-color: darkgreen;
    animation: blink ls linear infinite;
    color: var(--interactive-primary-foreground-default);
    border: none;
  }
  :host([variant='primary']) .button--standard.button:hover:not(.button--disabled),
  :host([variant='primary']) .button--standard.button:active:not(.button--disabled) {
    background: var(--interactive-primary-background-hover);
    color: var(--interactive-primary-foreground-default);
  }

  /* DEFAULT, aka SECONDARY */
  :host:not([variant]) .button--standard.button,
  :host([variant='secondary']) .button--standard.button,
  :host([variant='default']) .button--standard.button {
    background: var(--interactive-secondary-background-default);
    color: var(--interactive-secondary-foreground-default);
    border: none;
  }
  :host:not([variant]) .button--standard.button:hover:not(.button--disabled),
  :host([variant='secondary']) .button--standard.button:hover:not(.button--disabled),
  :host([variant='default']) .button--standard.button:hover:not(.button--disabled) {
    background: var(--interactive-secondary-background-hover);
    color: var(--interactive-secondary-foreground-hover);
  }

  /* TEXT aka GHOST */
  :host([variant='text']) .button.button--standard,
  :host([variant='ghost']) .button.button--standard {
    color: var(--interactive-ghost-foreground-default);
    background-color: transparent;
    border-radius: var(--border-radius-small, 4px);
    border: none;
  }

  :host([variant='text'][circle]) .button.button--standard,
  :host([variant='ghost'][circle]) .button.button--standard {
    border-radius: 50%;
  }

  :host([variant='text']) .button.button--standard:hover:not(.button--disabled),
  :host([variant='ghost']) .button.button--standard:hover:not(.button--disabled) {
    background-color: var(--interactive-ghost-background-hover);
    color: var(--interactive-ghost-foreground-hover);
  }

  /* NEUTRAL, aka OUTLINE */
  :host([variant='neutral']) .button.button--standard,
  :host([variant='outline']) .button.button--standard,
  :host([outline]) .button.button {
    color: var(--interactive-outlined-foreground-default);
    border-color: var(--interactive-outlined-border-default);
    border-width: var(--border-width-default);
    border-style: solid;
    background-color: transparent;
  }
  :host([variant='neutral']) .button.button--standard:hover:not(.button--disabled),
  :host([variant='outline']) .button.button--standard:hover:not(.button--disabled),
  :host([outline]) .button.button:hover:not(.button--disabled) {
    border-color: var(--interactive-outlined-border-hover);
    color: var(--interactive-outlined-foreground-hover);
    border-width: var(--border-width-default);
    border-style: solid;
    background-color: transparent;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: unset;
  }
`;
