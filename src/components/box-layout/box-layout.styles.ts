import { css } from 'lit';

export default css`
  :host {
    display: block;
    padding: var(--_box-padding, var(--spacing-medium));
    background: var(--_box-background, transparent);
  }

  :host([size='none']) {
    --_box-padding: var(--spacing-none);
  }
  :host([size='2x-small']) {
    --_box-padding: var(--spacing-2x-small);
  }
  :host([size='x-small']) {
    --_box-padding: var(--spacing-x-small);
  }
  :host([size='small']) {
    --_box-padding: var(--spacing-small);
  }
  :host([size='medium']) {
    --_box-padding: var(--spacing-medium);
  }
  :host([size='large']) {
    --_box-padding: var(--spacing-large);
  }
  :host([size='x-large']) {
    --_box-padding: var(--spacing-x-large);
  }
  :host([size='2x-large']) {
    --_box-padding: var(--spacing-2x-large);
  }
  :host([size='3x-large']) {
    --_box-padding: var(--spacing-3x-large);
  }
  :host([size='4x-large']) {
    --_box-padding: var(--spacing-4x-large);
  }
  :host([size='5x-large']) {
    --_box-padding: var(--spacing-5x-large);
  }

  :host([background='none']) {
    --_box-background: transparent;
  }
  :host([background='neutral']) {
    --_box-background: var(--color-feedback-background-default-neutral);
  }
  :host([background='neutral-subtle']) {
    --_box-background: var(--color-feedback-background-subtle-neutral);
  }
  :host([background='info']) {
    --_box-background: var(--color-feedback-background-default-info);
  }
  :host([background='info-subtle']) {
    --_box-background: var(--color-feedback-background-subtle-info);
  }
  :host([background='success']) {
    --_box-background: var(--color-feedback-background-default-success);
  }
  :host([background='success-subtle']) {
    --_box-background: var(--color-feedback-background-subtle-success);
  }
  :host([background='warning']) {
    --_box-background: var(--color-feedback-background-default-warning);
  }
  :host([background='warning-subtle']) {
    --_box-background: var(--color-feedback-background-subtle-warning);
  }
  :host([background='error']) {
    --_box-background: var(--color-feedback-background-default-error);
  }
  :host([background='error-subtle']) {
    --_box-background: var(--color-feedback-background-subtle-error);
  }
`;
