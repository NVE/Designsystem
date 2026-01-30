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
    background-color: var(--color-brand-background-secondary);
    color: var(--color-brand-foreground-primary-on-bg);
  }

  .badge--neutral {
    background-color: var(--color-feedback-background-emphasized-neutral);
    color: var(--color-feedback-foreground-on-bg-emphasized-neutral);
  }

  .badge--primary {
    background-color: var(--color-feedback-background-emphasized-info);
    color: var(--color-feedback-foreground-on-bg-emphasized-info);
  }

  .badge--success {
    background-color: var(--color-feedback-background-emphasized-success);
    color: var(--color-feedback-foreground-on-bg-emphasized-success);
  }

  .badge--danger {
    background-color: var(--color-feedback-background-emphasized-error);
    color: var(--color-feedback-foreground-on-bg-emphasized-error);
  }
  .badge--warning {
    background-color: var(--color-feedback-background-emphasized-warning);
    color: var(--color-feedback-foreground-on-bg-emphasized-warning);
  }

  /* Lav metningsgrad */
  .badge--brand.saturation--subtle {
    background-color: var(--color-brand-background-tertiary);
    color: var(--color-brand-foreground-secondary-on-bg);
  }

  .badge--neutral.saturation--subtle {
    background-color: var(--color-feedback-background-default-neutral);
    color: var(--color-feedback-foreground-on-bg-subtle-neutral);
  }

  .badge--primary.saturation--subtle {
    background-color: var(--color-feedback-background-default-info);
    color: var(--color-feedback-foreground-on-bg-subtle-info);
  }

  .badge--success.saturation--subtle {
    background-color: var(--color-feedback-background-default-success);
    color: var(--color-feedback-foreground-on-bg-subtle-success);
  }
  .badge--danger.saturation--subtle {
    background-color: var(--color-feedback-background-default-error);
    color: var(--color-feedback-foreground-on-bg-subtle-error);
  }
  .badge--warning.saturation--subtle {
    background-color: var(--color-feedback-background-default-warning);
    color: var(--color-feedback-foreground-on-bg-subtle-warning);
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
