import { css } from 'lit';

export default css`
  :host {
    /* Overstyring av shoelace-token-verdier */

    --sl-input-border-width: var(--border-width-default);

    --sl-spacing-3x-small: var(--spacing-xx-small);
    --sl-input-spacing-small: var(--spacing-x-small);
    --sl-input-spacing-medium: var(--spacing-x-small);
    --sl-input-spacing-large: var(--spacing-x-small);

    --sl-input-required-content: '*Obligatorisk';
    --sl-input-required-content-offset: -2px;
    --sl-input-required-content-color: var(--brand-deep);
  }
  :host::part(input) {
    font: var(--body-small);
    border-radius: var(--border-radius-small);
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
  :host([data-invalid])::part(base),
  :host([data-user-invalid])::part(base) {
    border-color: var(--feedback-background-emphasized-error);
  }
  :host([data-invalid])::part(input),
  :host([data-user-invalid])::part(input) {
    color: var(--feedback-background-emphasized-error);
  }

  /* Formaterer "*Obligatorisk" over input-felt og til høyre riktig når required er satt */
  .form-control--has-label .form-control__label {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-inline-start: unset;
  }
  ::after {
    font-weight: var(--font-weight-regular);
    margin-inline-start: unset;
  }
`;
