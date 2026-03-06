import { css } from 'lit';

export default css`
  :host {
    --icon: 18px;
  }

  .textarea__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x-small);
  }

  .textarea__control {
    position: relative;
    width: fit-content;
  }

  .textarea {
    display: block;
    padding-block: var(--spacing-small);
    padding-left: var(--spacing-x-small);
    padding-right: calc(var(--spacing-x-small) + var(--icon));
    border-radius: var(--border-radius-small);
    border: var(--border-width-default) solid var(--color-neutrals-border-default);
    transition: border-color 0.3s ease;
  }

  .textarea:hover {
    border-color: var(--color-neutrals-foreground-primary);
  }

  label {
    font: var(--typography-label-small);
    color: var(--color-neutrals-foreground-primary);
  }

  nve-icon {
    position: absolute;
    top: var(--spacing-small);
    right: var(--spacing-x-small);
    --icon-size: var(--icon);
  }

  /* Disabled */
  .textarea__container--disabled {
    .textarea__control > * {
      cursor: not-allowed;
      opacity: 0.38;
    }
    .textarea {
      border: var(--border-width-default, 1px) solid var(--color-neutrals-border-default, #858b93);
      background: var(--color-neutrals-background-primary-contrast, #efeff1);
    }
  }

  /* Error  */
  .textarea__container--error {
    border-left: var(--border-width-strong) solid var(--color-feedback-border-emphasized-error);
    padding-left: var(--spacing-x-small);
    .textarea {
      border-color: var(--color-feedback-border-emphasized-error);
      color: var(--color-feedback-foreground-error);
    }
    nve-icon {
      color: var(--color-feedback-foreground-error);
    }
  }

  .textarea__error-msg {
    font: var(--typography-detailtext-caption);
    color: var(--color-feedback-foreground-error);
  }
`;
