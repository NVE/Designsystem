import { css } from 'lit';

export default css`
  :host {
    display: flex;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x-small);
    width: 100%;
  }

  .textarea__base {
    display: flex;
  }

  .textarea__control {
    font: var(--body-small);
    box-sizing: border-box;
    padding: var(--sizing-3x-small);
    padding-right: var(--sizing-x-small); /** trenger padding for å vise ikone så at teksten ikke dekker den */
    border-radius: var(--border-radius-small);
    border: var(--border-width-default, 1px) solid var(--neutrals-border-default);
    min-height: var(--sizing-x-small);
    transition: border var(--transition-time) ease-in-out;
    width: 100%;
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

  .textarea__label {
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
    position: relative; /** trengs for å posisjonere ikonen */
  }

  .textarea__icon--error {
    position: absolute;
    left: -24px;
    top: 10px;
    color: var(--feedback-background-emphasized-error);
  }
`;
