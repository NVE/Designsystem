import { css } from 'lit';

export default css`
  .radio-group {
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

  .radio-group[aria-invalid='true'] {
    border-left: var(--border-width-strong) solid var(--color-feedback-border-emphasized-error);
    padding-left: var(--spacing-x-small);
  }

  .radio-group__radios {
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

  legend {
    float: left;
    font: var(--typography-label-small);
    line-height: 100%;
    padding-inline: 0;
    display: flex;
    align-items: center;
    gap: var(--spacing-2x-small);
  }

  /* TODO: move to globals? */
  .label__required-text {
    font: var(--typography-label-small-light);
    color: var(--color-brand-foreground-secondary);
  }

  .radio-group--invalid {
    font: var(--typography-detailtext-caption);
    color: var(--color-feedback-foreground-error);
  }

  nve-icon {
    --icon-size: 20px;
  }
`;
