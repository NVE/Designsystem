import { css } from 'lit';

export default css`
  .details {
    border: none;
    background-color: var(--_bg-color);
    color: var(--_text-color);
    padding: var(--spacing-medium) var(--spacing-large);
    border-radius: var(--border-radius-small);
  }

  .details__summary {
    padding: 0;
    order: 1;
    margin-inline-start: var(--spacing-2x-small);
  }

  .details__header {
    padding: 0;
    font: var(--typography-label-large);
  }

  .details__content {
    padding: 0;
    padding-top: var(--spacing-small);
  }

  .details:not(.details--disabled) {
    .details__summary-icon:hover {
      background: var(--_hover-bg-color);
      color: var(--_hover-text-color);
    }
  }

  .details__summary-icon {
    /* Overstyrer shoelace sin animasjon. */
    rotate: 90deg;
    border-radius: var(--border-radius-small);
    font-size: var(--font-size-large);
    fill: currentColor;
  }

  .details--open .details__summary-icon {
    rotate: 270deg;
  }

  :host([variant='none']) {
    --_bg-color: transparent;
    --_text-color: var(--color-neutrals-foreground-primary);
    --_hover-bg-color: var(--color-neutrals-background-secondary);
    --_hover-text-color: var(--color-neutrals-foreground-primary);
    --_border-color: var(--color-neutrals-border-default);
    --_left_border-color: var(--color-brand-background-primary);
    .details {
      padding-inline: 0;
    }
  }

  :host([variant='neutral']) {
    --_bg-color: var(--color-neutrals-background-primary);
    --_text-color: var(--color-neutrals-foreground-primary);
    --_hover-bg-color: var(--color-feedback-background-default-neutral);
    --_hover-text-color: var(--color-neutrals-foreground-primary);
    --_border-color: var(--color-neutrals-border-default);
    --_left_border-color: var(--color-brand-background-primary);
  }

  :host([variant='secondary']) {
    --_bg-color: var(--color-feedback-background-subtle-neutral);
    --_text-color: var(--color-feedback-foreground-subtle-neutral);
    --_hover-bg-color: var(--color-feedback-background-default-neutral);
    --_hover-text-color: var(--color-feedback-foreground-default-neutral);
    --_border-color: var(--color-feedback-background-emphasized-neutral);
  }

  :host([variant='success']) {
    --_bg-color: var(--color-feedback-background-subtle-success);
    --_text-color: var(--color-feedback-foreground-subtle-success);
    --_hover-bg-color: var(--color-feedback-background-default-success);
    --_hover-text-color: var(--color-feedback-foreground-default-success);
    --_border-color: var(--color-feedback-background-emphasized-success);
  }

  :host([variant='info']) {
    --_bg-color: var(--color-feedback-background-subtle-info);
    --_text-color: var(--color-feedback-foreground-subtle-info);
    --_hover-bg-color: var(--color-feedback-background-default-info);
    --_hover-text-color: var(--color-feedback-foreground-default-info);
    --_border-color: var(--color-feedback-background-emphasized-info);
  }

  :host([variant='warning']) {
    --_bg-color: var(--color-feedback-background-subtle-warning);
    --_text-color: var(--color-feedback-foreground-subtle-warning);
    --_hover-bg-color: var(--color-feedback-background-default-warning);
    --_hover-text-color: var(--color-feedback-foreground-default-warning);
    --_border-color: var(--color-feedback-background-emphasized-warning);
  }

  :host([variant='error']) {
    --_bg-color: var(--color-feedback-background-subtle-error);
    --_text-color: var(--color-feedback-foreground-subtle-error);
    --_hover-bg-color: var(--color-feedback-background-default-error);
    --_hover-text-color: var(--color-feedback-foreground-default-error);
    --_border-color: var(--color-feedback-background-emphasized-error);
  }

  :host([border]) .details {
    border: 1px solid var(--_border-color, var(--_text-color));
    padding-inline: var(--spacing-large);
  }

  :host([leftStroke]) .details {
    border-left: 5px solid var(--_left_border-color, var(--_border-color, var(--_text-color)));
    padding-inline: var(--spacing-medium);
  }

  :host([compact]) .details {
    padding-inline: 0;
    border-radius: 0;
    border-bottom: 1px solid var(--_border-color, var(--_text-color));
  }
`;
