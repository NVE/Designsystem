import { css } from 'lit';

export default css`
  :host {
    /* Overstyring av shoelace-token-verdier */

    --sl-input-border-width: var(--border-width-default);

    --sl-spacing-3x-small: var(--spacing-2x-small);
    --sl-input-spacing-small: var(--spacing-x-small);
    --sl-input-spacing-medium: var(--spacing-x-small);
    --sl-input-spacing-large: var(--spacing-x-small);

    /** den burde vises alltid når requiredlabel er ikke tom. ikke kun når required prop er med  */
    --sl-input-required-content: '*Obligatorisk';
    --sl-input-required-content-offset: -2px;
    --sl-input-required-content-color: var(--color-brand-foreground-tertiary);
  }
  :host::part(input) {
    font: var(--typography-body-small);
    border-radius: var(--border-radius-small);
  }

  :host::part(base) {
    transition: border var(--transition-time) ease-in-out;
  }

  .input--standard:hover:not(.input--disabled) {
    border-color: var(--color-neutrals-foreground-primary);
  }

  .input--filled:hover:not(.input--disabled) {
    border-color: var(--color-neutrals-border-default);
  }

  :host::after {
    content: var(--nve-input-error-message);
    font: var(--typography-detailtext-caption);
    color: var(--color-feedback-background-emphasized-error);
  }

  :host([required]) .form-control--has-label .form-control__label::after,
  :host([requiredLabel])::part(form-control-label)::after {
    content: var(--sl-input-required-content);
    font: var(--typography-label-x-small-light);
    color: var(--color-feedback-background-emphasized-error);
    padding-left: var(--spacing-2x-small);
  }

  .input--filled {
    border: var(--border-width-default) solid var(--color-neutrals-background-secondary);
  }

  /* Justering av skriftstørrelse og hjørner for andre størrelser av tekstfeltet */
  .input--small {
    font: var(--typography-body-x-small);
  }
  .input--large {
    border-radius: var(--border-radius-large);
    font: var(--typography-body-large);
  }

  .form-control--has-label .form-control__label {
    font: var(--typography-label-small);
    align-items: center;
    margin-bottom: var(--spacing-x-small);
  }

  /* Riktig fokus-markering også i filled-modus */
  .input--standard.input--focused:not(.input--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    box-shadow: unset;
  }

  /* Annen bakgrunnsfarge og ingen ramme når skrivebeskyttet */
  :host([readonly])::part(base),
  :host([readonly]) .input.input--medium.input--standard {
    border-color: transparent !important;
    background: var(--color-neutrals-background-secondary);
  }

  :host([readonly]) .input--standard.input--focused:not(.input--disabled) {
    outline: var(--color-neutrals-background-secondary);
  }

  /* Gir rød ramme ved valideringsfeil  */
  :host([data-user-invalid]:not([noValidation]))::part(base) {
    border-color: var(--color-feedback-background-emphasized-error);
  }

  /* Formaterer "*Obligatorisk" over input-felt når required er satt */
  .form-control--has-label .form-control__label {
    display: flex;
    align-items: center;
    gap: var(--spacing-2x-small);
    margin-inline-start: unset;
  }

  :host::part(clear-button) {
    font-size: var(--font-size-medium);
  }
`;
