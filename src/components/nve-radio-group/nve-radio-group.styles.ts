import { css } from 'lit';

export default css`
  .field {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    gap: var(--spacing-x-small);
    min-inline-size: unset;
    margin-inline: 0;
    border-width: 0;
    border-style: none;
    border-color: none;
    border-image: none;
    padding-block: 0;
    padding-inline: 0;
  }

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
    .field__hint-text {
      color: var(--color-feedback-foreground-error);
    }
  }

  .radio-group {
    display: flex;
    gap: var(--spacing-small);
  }

  .radio-group--vertical {
    flex-direction: column;
  }

  .radio-group--horizontal {
    flex-direction: row;
    align-items: center;
  }

  nve-icon {
    --icon-size: 20px;
  }
`;
