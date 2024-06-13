import { css } from 'lit';

export default css`
  :host::part(base) {
    background: var(--bg-color);
    color: var(--text-color);
  }

  :host([left-stroke])::part(base) {
    border-left: 4px solid var(--border-left-color);
  }

  :host([variant='brand']) {
    --bg-color: var(--neutrals-background-primary);
    --border-left-color: var(--brand-primary);
    --text-color: var(--neutrals-foreground-primary);
  }
  :host([variant='neutral']) {
    --bg-color: var(--neutrals-background-secondary);
    --border-left-color: var(--neutrals-foreground-primary);
    --text-color: var(--neutrals-foreground-primary);
  }
  :host([variant='info']) {
    --bg-color: var(--feedback-background-subtle-info);
    --border-left-color: var(--feedback-background-emphasized-info);
    --text-color: var(--neutrals-foreground-primary);
  }
  :host([variant='error']) {
    --bg-color: var(--feedback-background-subtle-error);
    --border-left-color: var(--feedback-background-emphasized-error);
    --text-color: var(--neutrals-foreground-primary);
  }

  :host([variant='success']) {
    --bg-color: var(--feedback-background-subtle-success);
    --border-left-color: var(--feedback-background-emphasized-success);
    --text-color: var(--neutrals-foreground-primary);
  }
  :host([variant='warning']) {
    --bg-color: var(--feedback-background-subtle-warning);
    --border-left-color: var(--feedback-background-emphasized-warning);
    --text-color: var(--neutrals-foreground-primary);
  }
  :host([variant='subtle']) {
    --bg-color: var(--neutrals-background-primary-contrast);
    --border-left-color: var(--neutrals-foreground-primary);
    --text-color: var(--neutrals-foreground-primary);
  }

  :host::part(header) {
    font: var(--header-x-small);
  }

  :host::part(summary-icon) {
    font-size: 1.5rem;
    transition:
      scale var(--sl-transition-medium) ease-in-out,
      top var(--sl-transition-medium) ease-in-out;
    scale: 1 1;
    position: relative;
    top: 0;
    left: calc(var(--sizing-4x-small) * -1);
  }
  :host([open])::part(summary-icon) {
    rotate: 0deg;
    scale: 1 -1;
    top: -1px;
  }
  .details__content {
    padding-block-start: 8px;
    font: var(--body-small);
  }
`;
