import { css } from 'lit';

export default css`
  .error {
    border-color: var(--feedback-background-emphasized-error) !important;
  }
  .error-hover {
    &:hover {
    }
  }

  :host::part(control) {
    border: var(--border-width-strong) solid var(--neutrals-foreground-primary);
    border-radius: var(--border-radius-small);
    width: 1.1rem;
    height: 1.1rem;
    transition: all var(--transition-time) ease-in;
  }

  :host::part(control control--checked),
  :host::part(control control--indeterminate) {
    background: var(--neutrals-foreground-primary) !important;
    border-color: var(--neutrals-foreground-primary) !important;
  }

  :host([data-invalid])::part(control) {
    border-color: var(--feedback-background-emphasized-error);
  }
  :host([data-invalid])::part(control control--checked),
  :host([data-user-invalid])::part(control control--indeterminate) {
    background: var(--feedback-background-emphasized-error);
  }

  :host(:not([disabled]):hover)::part(control) {
    border-color: var(--neutrals-foreground-subtle, #006b99) !important;
  }

  sl-icon {
    --sl-color-neutral-0: var(--neutrals-background-primary);
    color: var(--neutrals-background-primary);
  }

  :host(:hover)::part(control control--checked),
  :host(:hover)::part(control control--indeterminate) {
    background: var(--neutrals-foreground-subtle, #006b99);
  }

  .checkbox {
    align-items: center;
  }
  .checkbox__label {
    font: var(--label-x-small-light);
  }
`;
