import { css } from 'lit';

export default css`
  .error {
    border-color: var(--feedback-background-emphasized-error) !important;
  }
  .error-hover {
    &:hover {
    }
  }

  :host::part(control),
  :host([disabled]:hover)::part(control) {
    border: var(--border-width-strong) solid var(--neutrals-foreground-primary);
    border-radius: var(--border-radius-small);
    width: 1.1rem;
    height: 1.1rem;
    transition: all 0.3s ease-in;
  }

  :host::part(control control--checked),
  :host::part(control control--indeterminate),
  :host([disabled]:hover)::part(control control--checked),
  :host([disabled]:hover)::part(control control--indeterminate) {
    background: var(--neutrals-foreground-primary);
    border-color: var(--neutrals-foreground-primary);
  }

  :host([data-invalid])::part(control),
  :host([disabled][data-user-invalid]:hover)::part(control) {
    border-color: var(--feedback-background-emphasized-error);
  }
  :host([data-invalid])::part(control control--checked),
  :host([data-user-invalid])::part(control control--indeterminate),
  :host([disabled][data-user-invalid]:hover)::part(control control--checked),
  :host([disabled][data-user-invalid]:hover)::part(control control--indeterminate) {
    background: var(--feedback-background-emphasized-error);
  }

  :host(:hover)::part(control) {
    border-color: var(--neutrals-foreground-subtle, #006b99);
  }

  sl-icon::part(checked-icon svg) {
    color: var(--grey-000);
  }

  sl-icon::part(checked-icon svg) > * {
    stroke: blue;
  }

  :host(:hover)::part(control control--checked),
  :host(:hover)::part(control control--indeterminate) {
    background: var(--neutrals-foreground-subtle, #006b99);
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
