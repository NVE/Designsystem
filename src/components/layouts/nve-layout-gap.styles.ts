import { css } from 'lit';

/**
 * Delt gap-attributt-selector-stiler for layout-komponenter som eksponerer en `gap`-prop.
 * Brukes av nve-stack, nve-cluster og nve-grid.
 */
export const gapStyles = css`
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
