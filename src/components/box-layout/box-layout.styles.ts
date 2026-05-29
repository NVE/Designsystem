import { css } from 'lit';

export default css`
  :host {
    display: block;
    padding: var(--_box-padding, var(--spacing-medium));
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
`;
