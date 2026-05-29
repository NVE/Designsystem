import { css } from 'lit';

export default css`
  :host {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--_grid-min, 250px), 1fr));
    gap: var(--_grid-gap, var(--spacing-medium));
  }

  :host([size='none']) {
    --_grid-gap: var(--spacing-none);
  }
  :host([size='2x-small']) {
    --_grid-gap: var(--spacing-2x-small);
  }
  :host([size='x-small']) {
    --_grid-gap: var(--spacing-x-small);
  }
  :host([size='small']) {
    --_grid-gap: var(--spacing-small);
  }
  :host([size='medium']) {
    --_grid-gap: var(--spacing-medium);
  }
  :host([size='large']) {
    --_grid-gap: var(--spacing-large);
  }
  :host([size='x-large']) {
    --_grid-gap: var(--spacing-x-large);
  }
  :host([size='2x-large']) {
    --_grid-gap: var(--spacing-2x-large);
  }
  :host([size='3x-large']) {
    --_grid-gap: var(--spacing-3x-large);
  }
  :host([size='4x-large']) {
    --_grid-gap: var(--spacing-4x-large);
  }
  :host([size='5x-large']) {
    --_grid-gap: var(--spacing-5x-large);
  }
`;
