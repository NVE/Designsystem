import { css } from 'lit';

export default css`
  :host::part(control) {
    border: var(--border-width-strong) solid var(--neutrals-foreground-primary);
    border-radius: var(--border-radius-small);
    width: 1.1rem;
    height: 1.1rem;
  }

  :host::part(control control--checked),
  :host::part(control control--indeterminate) {
    background-color: var(--neutrals-foreground-primary);
    border-color: var(--neutrals-foreground-primary);
  }

  .checkbox--disabled {
    opacity: 0.38;
  }

  .checkbox {
    align-items: center;
  }

  .checkbox__label {
    font: var(--label-x-small-light);
  }
`;
