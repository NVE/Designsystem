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

  :host::part(form-control),
  :host::part(form-control-input) {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x-small, 0.5rem);
  }

  :host::part(form-control-input) {
    align-items: flex-start;
  }

  :host::part(form-control-label) {
    display: flex;
    color: var(--neutrals-foreground-mute);
    font: var(--label-small-light);
    margin-bottom: unset;
    text-align: left;
  }

  :host([orientation='vertical'])::part(form-control),
  :host([vertical])::part(form-control) {
    align-items: flex-start;
  }

  :host([orientation='horizontal'])::part(form-control-input),
  :host([horizontal])::part(form-control-input) {
    flex-direction: row;
  }
  :host([orientation='vertical'])::part(form-control-input),
  :host([vertical])::part(form-control-input) {
    flex-direction: column;
  }
`;
