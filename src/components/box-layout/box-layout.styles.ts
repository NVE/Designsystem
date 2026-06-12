import { css } from 'lit';

export default css`
  :host {
    display: block;
    padding: var(--spacing-medium);
    background: transparent;
  }

  :host([padding='none']) {
    padding: var(--spacing-none);
  }
  :host([padding='2x-small']) {
    padding: var(--spacing-2x-small);
  }
  :host([padding='x-small']) {
    padding: var(--spacing-x-small);
  }
  :host([padding='small']) {
    padding: var(--spacing-small);
  }
  :host([padding='medium']) {
    padding: var(--spacing-medium);
  }
  :host([padding='large']) {
    padding: var(--spacing-large);
  }
  :host([padding='x-large']) {
    padding: var(--spacing-x-large);
  }
  :host([padding='2x-large']) {
    padding: var(--spacing-2x-large);
  }
  :host([padding='3x-large']) {
    padding: var(--spacing-3x-large);
  }
  :host([padding='4x-large']) {
    padding: var(--spacing-4x-large);
  }
  :host([padding='5x-large']) {
    padding: var(--spacing-5x-large);
  }

  :host([background='none']) {
    background: transparent;
  }
  :host([background='neutral']) {
    background: var(--color-feedback-background-default-neutral);
  }
  :host([background='neutral-subtle']) {
    background: var(--color-feedback-background-subtle-neutral);
  }
  :host([background='info']) {
    background: var(--color-feedback-background-default-info);
  }
  :host([background='info-subtle']) {
    background: var(--color-feedback-background-subtle-info);
  }
  :host([background='success']) {
    background: var(--color-feedback-background-default-success);
  }
  :host([background='success-subtle']) {
    background: var(--color-feedback-background-subtle-success);
  }
  :host([background='warning']) {
    background: var(--color-feedback-background-default-warning);
  }
  :host([background='warning-subtle']) {
    background: var(--color-feedback-background-subtle-warning);
  }
  :host([background='error']) {
    background: var(--color-feedback-background-default-error);
  }
  :host([background='error-subtle']) {
    background: var(--color-feedback-background-subtle-error);
  }
`;
