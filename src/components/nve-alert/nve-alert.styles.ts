import { css } from 'lit';

export default css`
  /* have to use class cause icon button also has base part that got impacted */
  .alert {
    display: flex;
    padding: var(--spacing-medium, 1rem) var(--spacing-large, 1.5rem);
    align-items: center;
    border: none;
    border-radius: var(--border-radius-small, 0.25rem);
    color: var(--neutrals-foreground-primary);
  }
  :host::part(message) {
    flex-grow: 1;
    display: flex;
    padding: 0;
    align-items: center;
    margin-left: var(--spacing-x-small, 0.5rem);
    gap: var(--spacing-medium, 1rem);
  }
  :host::part(--sl-input-icon-color-hover) {
    font-size: 24px;
    font-weight: 300;
    padding-inline-start: unset;
    display: flex;
    align-items: center;
    gap: var(--spacing-medium, 1rem);
    color: var(--neutrals-foreground-primary);
  }

  :host::part(icon) {
    font: var(--header-small);
    color: var(--neutrals-foreground-primary) !important;
    padding-inline-start: unset;
  }

  :host::part(close-button) {
    padding-inline-end: unset;
    margin-left: var(--spacing-medium, 1rem);
    height: 24px;
    stroke: var(--neutrals-foreground-primary);
  }

  :host::part(message)::after {
    content: var(--nve-alert-text);
    font: var(--body-medium-default);
  }

  :host::part(message)::before {
    content: var(--nve-alert-title);
    font: var(--header-small);
    white-space: nowrap;
  }
  .alert--primary {
    background-color: var(--feedback-background-default-info);
  }
  .alert--danger {
    background-color: var(--feedback-background-default-error);
  }
  .alert--success {
    background-color: var(--feedback-background-subtle-success);
  }
  .alert--neutral {
    background-color: var(--neutrals-foreground-subtle);
    color: var(--interactive-primary-foreground-default);
  }
  .alert--warning {
    background-color: var(--feedback-background-default-warning);
  }

  /* emphasized */
  :host([variant='neutral']) .alert,
  :host([emphasized]) .alert {
    color: var(--interactive-primary-foreground-default);
    .alert__icon {
      color: var(--interactive-primary-foreground-default) !important;
    }
    .alert__close-button {
      stroke: var(--interactive-primary-foreground-default) !important;
    }
  }
  :host([emphasized]) .alert--primary {
    background-color: var(--feedback-background-emphasized-info);
  }
  :host([emphasized]) .alert--danger {
    background-color: var(--feedback-background-emphasized-error);
  }
  :host([emphasized]) .alert--success {
    background-color: var(--feedback-background-emphasized-success);
  }
  :host([emphasized]) .alert--neutral {
    background-color: var(--neutrals-foreground-primary);
  }
  :host([emphasized]) .alert--warning {
    background-color: var(--feedback-background-emphasized-warning);
  }

  /* leftStroke */
  :host([leftStroke][emphasized]) .alert,
  :host([leftStroke]) .alert {
    border-left: 6px solid;
  }
  :host([leftStroke]) .alert--primary {
    border-color: var(--feedback-background-emphasized-info);
  }
  :host([leftStroke]) .alert--danger {
    border-color: var(--feedback-background-emphasized-error);
  }
  :host([leftStroke]) .alert--success {
    border-color: var(--feedback-background-emphasized-success);
  }
  :host([leftStroke]) .alert--neutral {
    border-color: var(--neutrals-foreground-primary);
  }
  :host([leftStroke]) .alert--warning {
    border-color: var(--feedback-background-emphasized-warning);
  }

  /* leftStroke and emphasized */
  :host([leftStroke][emphasized]) .alert--primary {
    border-color: var(--feedback-background-default-info);
  }
  :host([leftStroke][emphasized]) .alert--danger {
    border-color: var(--feedback-background-default-error);
  }
  :host([leftStroke][emphasized]) .alert--success {
    border-color: var(--feedback-background-subtle-success);
  }
  :host([leftStroke][emphasized]) .alert--neutral {
    border-color: var(--neutrals-foreground-subtle);
  }
  :host([leftStroke][emphasized]) .alert--warning {
    border-color: var(--feedback-background-default-warning);
  }
`;
