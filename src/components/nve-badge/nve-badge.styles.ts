import { css } from 'lit';

export default css`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    padding: var(--spacing-2x-small) var(--spacing-x-small);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius-circle, 50px);
  }

  /* Variant modifiers */
  .badge--brand {
    background-color: var(--color-brand-background-primary);
    color: var(--color-interactive-primary-foreground-default);
  }

  .badge--neutral {
    background-color: var(--color-feedback-background-default-neutral, #e4e5e7);
    color: var(--color-feedback-foreground-default-neutral, #00131c);
  }

  .badge--primary {
    background-color: var(--color-feedback-background-emphasized-info, #1e6fdc);
    color: var(--color-feedback-foreground-emphasized-info, #fff);
  }

  .badge--success {
    background-color: var(--color-feedback-background-emphasized-success, #00814b);
    color: var(--color-feedback-foreground-emphasized-success, #fff);
  }
  .badge--warning {
    background-color: var(--color-feedback-background-emphasized-warning, #ffd046);
    color: var(--color-feedback-foreground-emphasized-warning, #0d0d0e);
  }

  .badge--danger {
    background-color: var(--color-feedback-background-emphasized-error, #c00);
    color: var(--color-feedback-foreground-emphasized-error, #fff);
  }

  /* Lav metningsgrad */
  .saturation--subtle {
    color: var(--color-neutrals-foreground-primary, #00131c);
  }

  .badge--brand.saturation--subtle {
    background-color: var(--color-brand-background-tertiary);
  }

  .badge--neutral.saturation--subtle {
    background-color: var(--color-feedback-background-subtle-neutral, #f7f7f8);
  }

  .badge--primary.saturation--subtle {
    background-color: var(--color-feedback-background-default-info, #ceeaff);
  }

  .badge--success.saturation--subtle {
    background-color: var(--color-feedback-background-default-success, #cbf9cb);
  }
  .badge--warning.saturation--subtle {
    background-color: var(--color-feedback-background-default-warning, #ffe8a5);
  }
  .badge--danger.saturation--subtle {
    background-color: var(--color-feedback-background-default-error, #ffd8de);
  }

  /* Sizing modifiers */
  .badge--small {
    padding: var(--spacing-2x-small, 4px) 6px;
    font-family: 'Source Sans Pro';
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 10px;
  }

  .badge--medium {
    padding: var(--spacing-2x-small) var(--spacing-x-small);
    font: var(--typography-label-x-small);
  }

  .badge--large {
    // 2 piksler per top og bottom for å få 27px høyde
    padding: calc(var(--spacing-2x-small, 4px) + 1px) 10px;
    font: var(--typography-label-small);
  }
`;
