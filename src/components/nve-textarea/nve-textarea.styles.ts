import { css } from 'lit';

export default css`
  :host {
    width: fit-content;
    display: flex;
  }

  :host::part(form-control) {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x-small);
  }

  :host::part(base) {
    display: flex;
    position: relative; /** trengs for å posisjonere ikonen */
    width: fit-content;
  }

  .textarea__control {
    font: var(--body-small);
    padding: var(--sizing-4x-small);
    padding-right: var(--sizing-2x-small); /** trenger padding for å vise ikone så at teksten ikke dekker den */
    border-radius: var(--border-radius-small);
    border: var(--border-width-default, 1px) solid var(--neutrals-border-default);
    min-height: var(--sizing-2x-small);
    min-width: 30px;
    transition: border var(--transition-time) ease-in-out;

    &:hover:not(:disabled) {
      border-color: var(--neutrals-foreground-primary);
    }

    &:focus-visible {
      outline: var(--sl-focus-ring);
      outline-offset: var(--sl-focus-ring-offset);
    }
  }

  :host([data-user-invalid]) .textarea__control {
    border-color: var(--feedback-background-emphasized-error);
  }

  :host([disabled]) .textarea__control {
    opacity: 0.38;
    background: var(--neutrals-background-primary-contrast);
  }

  :host([filled]) .textarea__control {
    background: var(--neutrals-background-primary-contrast);
    border: var(--border-width-default, 1px) solid var(--neutrals-border-subtle);

    &:hover:not(:disabled) {
      border-color: var(--neutrals-border-default);
    }
  }

  :host([readonly]) .textarea__control {
    background: var(--neutrals-background-secondary);
    color: var(--neutrals-foreground-subtle,);
    border: none;
  }

  :host::part(textarea-label) {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
  }

  .textarea__required-label {
    font: var(--label-x-small-light);
    color: var(--feedback-background-emphasized-error);
  }

  .textarea__help-text__container {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .textarea__help-text {
    font: var(--label-x-small-light);
    color: var(--sl-input-help-text-color);
  }

  .textarea__help-text--error {
    color: var(--feedback-background-emphasized-error);
  }

  .textarea__icon__container {
    position: absolute;
    right: var(--sizing-4x-small);
    top: var(--sizing-4x-small);
  }

  .textarea__icon--error {
    color: var(--feedback-background-emphasized-error);
  }
`;
