import { css } from 'lit';

export default css`
  .field__help-text {
    margin: 0;
    margin-top: calc(var(--spacing-2x-small) - var(--spacing-x-small));
    color: var(--color-neutrals-foreground-subtle);
    font: var(--typography-detailtext-caption);
    text-align: start;
  }

  .field__hint-text {
    margin: 0;
    color: var(--color-neutrals-foreground-primary);
    font: var(--typography-detailtext-caption);
    text-align: start;
  }

  .field--error {
    border-left: var(--border-width-strong) solid var(--color-feedback-border-emphasized-error);
    padding-left: var(--spacing-x-small);
    --_border-color: var(--color-feedback-border-emphasized-error);
    .field__hint-text {
      color: var(--color-feedback-foreground-error);
      width: fit-content;
      padding: var(--spacing-2x-small, 4px) var(--spacing-fixed-spacing-2x-small, 6px);
      border-radius: var(--border-radius-small, 4px);
      background: var(--color-feedback-background-subtle-error, #ffebee);
    }
  }
`;
