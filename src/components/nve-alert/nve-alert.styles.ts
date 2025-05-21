import { css } from 'lit';

export default css`
  /* have to use class cause icon button also has base part that got impacted */
  .alert {
    /*display: flex;*/
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
    font: var(--body-medium);
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
  }

  sl-icon-button::part(base) {
    margin-left: var(--spacing-medium, 1rem);
    padding: var(--spacing-xx-small);
    border-radius: 50%;
    stroke: var(--neutrals-foreground-primary);
    transition: background-color var(--transition-time) ease;
  }

  :host::part(message)::after {
    content: var(--nve-alert-text);
    font: var(--body-medium);
  }

  .alert__message::before {
    content: var(--nve-alert-title);
    font: var(--label-large);
    white-space: nowrap;
  }
  .alert__message::after {
    content: var(--nve-alert-text);
    font: var(--body-medium);
  }

  /*variants */
  .alert--primary {
    background-color: var(--feedback-background-default-info);
    & sl-icon-button::part(base):hover {
      background: var(--feedback-background-subtle-info);
    }
  }
  .alert--danger {
    background-color: var(--feedback-background-default-error);
    & sl-icon-button::part(base):hover {
      background: var(--feedback-background-subtle-error);
    }
  }
  .alert--success {
    background-color: var(--feedback-background-default-success);
    & sl-icon-button::part(base):hover {
      background: var(--feedback-background-subtle-success);
    }
  }

  .alert--neutral {
    background-color: var(--neutrals-foreground-subtle);
    color: var(--interactive-primary-foreground-default);
    & sl-icon-button::part(base):hover {
      background: var(--varsom-blue-200);
    }
  }
  .alert--warning {
    background-color: var(--feedback-background-default-warning);
    & sl-icon-button::part(base):hover {
      background: var(--feedback-background-subtle-warning);
    }
  }

  /* Styling for høyere metningsgrad */
  :host([variant='neutral']) .alert,
  :host([saturation='emphasized']) .alert {
    color: var(--interactive-primary-foreground-default);
    .alert__icon {
      color: var(--interactive-primary-foreground-default) !important;
    }
    & sl-icon-button::part(base) {
      stroke: var(--interactive-primary-foreground-default) !important;
    }
  }
  :host([saturation='emphasized'][variant='warning']) .alert {
    color: var(--feedback-foreground-emphasized-warning);
    .alert__icon {
      color: var(--feedback-foreground-emphasized-warning) !important;
    }
    & sl-icon-button::part(base) {
      stroke: var(--feedback-foreground-emphasized-warning) !important;
    }
  }
  :host([saturation='emphasized']) .alert--primary {
    background-color: var(--feedback-background-emphasized-info);
    & sl-icon-button::part(base):hover {
      background: var(--feedback-background-subtle-info);
      stroke: var(--feedback-background-emphasized-info) !important;
    }
  }
  :host([saturation='emphasized']) .alert--danger {
    background-color: var(--feedback-background-emphasized-error);
    & sl-icon-button::part(base):hover {
      background: var(--feedback-background-subtle-error);
      stroke: var(--feedback-background-emphasized-error) !important;
    }
  }
  :host([saturation='emphasized']) .alert--success {
    background-color: var(--feedback-background-emphasized-success);
    & sl-icon-button::part(base):hover {
      background: var(--feedback-background-subtle-success);
      stroke: var(--feedback-background-emphasized-success) !important;
    }
  }
  :host([saturation='emphasized']) .alert--neutral {
    background-color: var(--neutrals-foreground-primary);
    & sl-icon-button::part(base):hover {
      background: var(--feedback-background-subtle-neutral, #f7f7f8);
      stroke: var(--neutrals-foreground-primary) !important;
    }
  }
  :host([saturation='emphasized']) .alert--warning {
    background-color: var(--feedback-background-emphasized-warning);
  }

  /* leftStroke */
  :host([leftStroke][saturation='emphasized']) .alert,
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
  :host([leftStroke][saturation='emphasized']) .alert--primary {
    border-color: var(--feedback-background-default-info);
  }
  :host([leftStroke][saturation='emphasized']) .alert--danger {
    border-color: var(--feedback-background-default-error);
  }
  :host([leftStroke][saturation='emphasized']) .alert--success {
    border-color: var(--feedback-background-subtle-success);
  }
  :host([leftStroke][saturation='emphasized']) .alert--neutral {
    border-color: var(--neutrals-foreground-subtle);
  }
  :host([leftStroke][saturation='emphasized']) .alert--warning {
    border-color: var(--feedback-background-default-warning);
  }

  /* lukk-knapp. Overstyrer sl-icon-button sin border-radius */
  sl-icon-button::part(base) {
    border-radius: var(--border-radius-small);
  }
`;
