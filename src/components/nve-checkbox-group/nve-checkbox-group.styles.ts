import { css } from 'lit';

export default css`
  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x-small);
  }

  .checkbox-group__label {
    font: var(--label-small);
    display: flex;
    gap: var(--spacing-x-small);
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
    font: var(--body-xsmall);
    color: var(--feedback-background-emphasized-error);
  }
`;
