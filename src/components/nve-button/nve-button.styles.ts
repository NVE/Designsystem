import { css } from 'lit';

export default css`
  .button {
    font: var(--label-medium);
    width: fit-content;
  }
  .button__label {
    display: flex;
    align-items: center;
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
`;
