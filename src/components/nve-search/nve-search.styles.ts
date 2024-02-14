import { css } from 'lit';

export default css`
  :host {
    /* Overstyring av shoelace-token-verdier */

    --sl-input-border-width: var(--border-width-default);

    --sl-spacing-3x-small: var(--spacing-xx-small);
    --sl-input-spacing-small: var(--spacing-x-small);
    --sl-input-spacing-medium: var(--spacing-small);
    --sl-input-spacing-large: var(--spacing-x-small);
  }

  :host::part(input)::placeholder{
    color: var(--neutrals-foreground-primary);
  }

  :host::part(input) {
    font: var(--body-small);
    border-radius: var(--border-radius-small);
    padding: var(--spacing-medium) var(--spacing-x-small);
  }

  :host::after {
    content: var(--nve-input-error-message);
    font: var(--detailtext-caption);
    color: var(--feedback-background-emphasized-error);
  }

  :host([required]) .form-control--has-label .form-control__label::after,
  :host([requiredLabel])::part(form-control-label)::after {
    content: var(--sl-input-required-content);
    margin-top: var(--spacing-xx-small);
    font: var(--label-x-small-light);
    color: var(--feedback-background-emphasized-error);
  }

  .input--filled {
    border: var(--border-width-default) solid var(--neutrals-background-secondary);
  }

  .input--standard {
  border-color: white;
  }

  .input--standard:hover {
    border-color: var(--neutrals-border-subtle);
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
  .input--medium {
    font-size: 20px;
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

  /*variants */
  /* grey */
  :host([variant='grey'])::part(base) {
    background-color: var(--neutrals-background-canvas);
  }

  :host([variant='grey']) :hover {
    border-color: var(--neutrals-border-default);
  }

  /* grey-outlined */
  :host([variant='grey-outlined'])::part(base) {
    background-color: var(--neutrals-background-canvas);
    border-color: var(--neutrals-border-subtle); 
  }

  :host([variant='grey-outlined']) :hover {
    border-color: var(--neutrals-border-default) !important;
  }
`;
