import { css } from 'lit';

export default css`
  :host {
    /* Overstyring av shoelace-token-verdier */

    --sl-input-border-width: var(--border-width-default);

    --sl-spacing-3x-small: var(--spacing-xx-small);
    --sl-input-spacing-small: var(--spacing-x-small);
    --sl-input-spacing-medium: var(--spacing-x-small);
    --sl-input-spacing-large: var(--spacing-x-small);

    --sl-input-required-content: '';
    --sl-input-required-content-offset: 0.25rem;
    --sl-input-required-content-color: var(--brand-deep);

    gap: var(--spacing-xx-small, 0.25rem);
  }

  :host::part(form-control),
  :host::part(form-control-input) {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-small);
  }
  :host([data-user-invalid])::after {
    content: var(--radio-group-error-message);
    font: var(--detailtext-caption);
    color: var(--feedback-background-emphasized-error);
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

  :host([required]) .form-control--has-label .form-control__label::after,
  :host([requiredLabel])::part(form-control-label)::after {
    align-self: flex-end;
    font: var(--label-x-small-light);
    color: var(--feedback-background-emphasized-error);
  }

  :host([orientation='vertical'])::part(form-control),
  :host([vertical])::part(form-control) {
    font: var(--label-x-small-light);
    color: var(--neutrals-foreground-mute, #3C3F44);
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
