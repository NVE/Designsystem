import { css } from 'lit';

export default css`
  :host {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-medium);
    justify-content: var(--_cluster-justify, flex-start);
    align-items: var(--_cluster-align, center);
  }

  :host([gap='none']) {
    gap: var(--spacing-none);
  }
  :host([gap='2x-small']) {
    gap: var(--spacing-2x-small);
  }
  :host([gap='x-small']) {
    gap: var(--spacing-x-small);
  }
  :host([gap='small']) {
    gap: var(--spacing-small);
  }
  :host([gap='medium']) {
    gap: var(--spacing-medium);
  }
  :host([gap='large']) {
    gap: var(--spacing-large);
  }
  :host([gap='x-large']) {
    gap: var(--spacing-x-large);
  }
  :host([gap='2x-large']) {
    gap: var(--spacing-2x-large);
  }
  :host([gap='3x-large']) {
    gap: var(--spacing-3x-large);
  }
  :host([gap='4x-large']) {
    gap: var(--spacing-4x-large);
  }
  :host([gap='5x-large']) {
    gap: var(--spacing-5x-large);
  }
`;
