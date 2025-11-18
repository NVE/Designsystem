import { css } from 'lit';

export default css`
  :host {
    --sl-checkbox-required-content: '*Obligatorisk';
  }

  fieldset {
    border: none;
    padding: unset;
    margin: unset;
    gap: var(--spacing-x-small);
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
  }

  .checkbox-group__label {
    font: var(--typography-label-small);
    display: flex;
    gap: var(--spacing-x-small);
  }

  :host([required]) nve-label::after {
    content: var(--sl-checkbox-required-content);
    font: var(--typography-label-x-small-light);
    margin-left: auto;
    color: var(--color-feedback-background-emphasized-error);
  }

  /* shoelace legger til styling når hele gruppa er disabled, så må overskrive den her */
  :host([disabled]) {
    opacity: 1 !important;
    cursor: unset !important;
  }

  .checkbox-group__checkboxes {
    display: flex;
    gap: var(--spacing-small);
  }

  :host([orientation='vertical']) .checkbox-group__checkboxes {
    flex-direction: column;
  }

  .checkbox-group__error-message {
    font: var(--typography-body-x-small);
    color: var(--color-feedback-background-emphasized-error);
  }

  nve-label {
    width: unset;
  }
`;
