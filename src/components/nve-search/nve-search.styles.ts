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

  /*variants */
  /* default */

  .input--standard {
  border-color: white;
  }

  .input--standard:hover {
    border-color: var(--neutrals-border-subtle);
  }

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
