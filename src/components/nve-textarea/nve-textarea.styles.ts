import { css } from 'lit';

export default css`
  :host {
    display: flex;
    --textarea-required-content: '*Obligatorisk';
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
    font: var(--typography-body-small);
    box-sizing: border-box;
    padding: var(--sizing-4x-small);
    padding-right: var(--sizing-2x-small); /** trenger padding for å vise ikone så at teksten ikke dekker den */
    border-radius: var(--border-radius-small);
    border: var(--border-width-default, 1px) solid var(--color-neutrals-border-default);
    min-height: var(--sizing-2x-small);
    transition: border var(--transition-time) ease-in-out;
    width: 100%;
    &:hover:not(:disabled) {
      border-color: var(--color-neutrals-foreground-primary);
    }

    &:focus-visible {
      outline: var(--sl-focus-ring);
      outline-offset: var(--sl-focus-ring-offset);
    }
  }

  :host([data-user-invalid]) .textarea__control {
    border-color: var(--color-feedback-background-emphasized-error);
  }

  :host([disabled]) .textarea__control {
    opacity: 0.38;
    background: var(--color-neutrals-background-primary-contrast);
  }

  :host([filled]) .textarea__control {
    background: var(--color-neutrals-background-primary-contrast);
    border: var(--border-width-default, 1px) solid var(--color-neutrals-border-subtle);

    &:hover:not(:disabled) {
      border-color: var(--color-neutrals-border-default);
    }
  }

  :host([filled][data-user-invalid]) .textarea__control {
    border-color: var(--color-feedback-background-emphasized-error);
  }

  :host([readonly]) .textarea__control {
    background: var(--color-neutrals-background-secondary);
    color: var(--color-neutrals-foreground-subtle,);
    border: none;
  }

  .textarea__label {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
  }

  :host([required]) nve-label::after {
    content: var(--textarea-required-content);
    font: var(--typography-label-x-small-light);
    margin-left: auto;
    color: var(--color-feedback-background-emphasized-error);
  }

  .textarea__help-text__container {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .textarea__help-text {
    font: var(--typography-label-x-small-light);
    color: var(--sl-input-help-text-color);
  }

  .textarea__help-text--error {
    color: var(--color-feedback-background-emphasized-error);
  }

  .textarea__icon__container {
    position: relative; /** trengs for å posisjonere ikonen */
  }

  .textarea__icon--error {
    position: absolute;
    left: -24px;
    top: 10px;
    color: var(--color-feedback-background-emphasized-error);
  }

  nve-label {
    width: unset;
  }
`;
