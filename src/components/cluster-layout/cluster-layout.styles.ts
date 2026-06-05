import { css } from 'lit';

export default css`
  :host {
    display: flex;
    flex-wrap: wrap;
    gap: var(--_cluster-gap, var(--spacing-medium));
    justify-content: var(--_cluster-justify, flex-start);
    align-items: var(--_cluster-align, center);
  }

  :host([size='none']) {
    --_cluster-gap: var(--spacing-none);
  }
  :host([size='2x-small']) {
    --_cluster-gap: var(--spacing-2x-small);
  }
  :host([size='x-small']) {
    --_cluster-gap: var(--spacing-x-small);
  }
  :host([size='small']) {
    --_cluster-gap: var(--spacing-small);
  }
  :host([size='medium']) {
    --_cluster-gap: var(--spacing-medium);
  }
  :host([size='large']) {
    --_cluster-gap: var(--spacing-large);
  }
  :host([size='x-large']) {
    --_cluster-gap: var(--spacing-x-large);
  }
  :host([size='2x-large']) {
    --_cluster-gap: var(--spacing-2x-large);
  }
  :host([size='3x-large']) {
    --_cluster-gap: var(--spacing-3x-large);
  }
  :host([size='4x-large']) {
    --_cluster-gap: var(--spacing-4x-large);
  }
  :host([size='5x-large']) {
    --_cluster-gap: var(--spacing-5x-large);
  }
`;
