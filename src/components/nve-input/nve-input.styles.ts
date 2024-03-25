import { css } from 'lit';

export default css`
  :host {
    /* Overstyring av shoelace-token-verdier */

    --sl-input-border-width: var(--border-width-default);

    --sl-spacing-3x-small: var(--spacing-xx-small);
    --sl-input-spacing-small: var(--spacing-x-small);
    --sl-input-spacing-medium: var(--spacing-x-small);
    --sl-input-spacing-large: var(--spacing-x-small);

    /** den burde vises alltid når requiredlabel er ikke tom. ikke kun når required prop er med  */
    --sl-input-required-content: '*Obligatorisk';
    --sl-input-required-content-offset: -2px;
    --sl-input-required-content-color: var(--brand-deep);
  }
  :host::part(input) {
    font: var(--body-small);
    border-radius: var(--border-radius-small);
  }

  :host::part(base) {
    transition: border var(--transition-time) ease-in-out;
  }

  .input--standard:hover:not(.input--disabled) {
    border-color: var(--neutrals-foreground-primary) !important;
  }

  .input--filled:hover:not(.input--disabled) {
    border-color: var(--neutrals-border-default) !important;
  }

  :host::after {
    content: var(--nve-input-error-message);
    font: var(--detailtext-caption);
    color: var(--feedback-background-emphasized-error);
  }

  :host([required]) .form-control--has-label .form-control__label::after,
  :host([requiredLabel])::part(form-control-label)::after {
    content: var(--sl-input-required-content);
    font: var(--label-x-small-light);
    color: var(--feedback-background-emphasized-error);
  }

  .input--filled {
    border: var(--border-width-default) solid var(--neutrals-background-secondary);
  }

  /* Justering av skriftstørrelse og hjørner for andre størrelser av tekstfeltet */
  .input--small {
    font: var(--body-xsmall);
  }
  .input--large {
    border-radius: var(--border-radius-large);
    font: var(--body-large);
  }

  .form-control label {
    font: var(--label-medium);
    align-items: center;
  }

  /* Riktig fokus-markering også i filled-modus */
  .input--standard.input--focused:not(.input--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    box-shadow: unset;
  }

  /* Annen bakgrunnsfarge og ingen ramme når skrivebeskyttet */
  :host([readonly])::part(base) {
    border-color: var(--neutrals-background-secondary);
    background: var(--neutrals-background-secondary);
  }

  /* Gir rød ramme ved valideringsfeil  */
  :host([data-user-invalid])::part(base) {
    border-color: var(--feedback-background-emphasized-error);
  }

  /* Formaterer "*Obligatorisk" over input-felt og til høyre riktig når required er satt */
  .form-control--has-label .form-control__label {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-inline-start: unset;
  }
`;
