import { css } from 'lit';

export default css`
  :host::part(combobox) {
    font: var(--body-small);
    color: var(--neutrals-foreground-primary, #0d0d0e);
    max-width: 300px;
    min-width: 200px;
    border-radius: 0.25rem;
    border: var(--border-width-default, 1px) solid var(--neutrals-border-default, #878c94);
  }

  :host(:hover)::part(combobox) {
    border-color: var(--neutrals-foreground-primary, #00131c);
  }

  :host(:focus-visible)::part(form-control-input) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  :host::part(standard-not-disabled-focused-combobox),
  :host::part(standard-not-disabled-open-combobox) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  :host::part(popup) {
    border-radius: var(--border-radius-small, 0.25rem) !important;
    border: 1px solid var(--neutrals-foreground-subtle, #006b99) !important;
  }

  /* filled*/
  :host([filled])::part(listbox) {
    background-color: var(--neutrals-background-primary-contrast, #eff8fc);
  }
`;
