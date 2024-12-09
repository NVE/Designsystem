import { css } from 'lit';

export default css`
  :host {
    font: var(--body-small);
    --sl-font-sans: var(--font-families-source-sans-pro);
    color: var(--neutrals-foreground-primary, #0d0d0e);
  }
  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--neutrals-background-primary-contrast, #f7f7f8);
  }
  .option--selected:not(.option--disabled) {
    background-color: var(--neutrals-background-secondary, #e4e5e7);
    color: var(--neutrals-foreground-primary, #0d0d0e);
  }

  /* fjerner checkmark siden den er hvit */
  :host::part(checked-icon) {
    display: none !important;
  }

  .option--current,
  .option--current.option--disabled {
    color: var(--neutrals-foreground-primary, #0d0d0e);
    background: var(--neutrals-background-primary-contrast, #eff8fc);
  }

  :host(:focus-visible) .option {
    box-shadow: none;
    background-color: var(--neutrals-background-secondary, #e4e5e7);
  }
  :host(:focus-visible) .option.option--disabled {
    opacity: 0.5;
  }
  /* hvit hover når filled */
  :host([filled]) .option--hover:not(.option--current):not(.option--disabled):hover {
    background-color: var(--neutrals-background-primary, #fff);
  }
`;
