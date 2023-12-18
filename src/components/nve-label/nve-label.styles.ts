import { css } from 'lit';

/**
 * Stiler til nve-label
 */
export const styles = css`
  /* light-varianter for de forskjellige størrelsene */
  :host([light]),
  :host([size='x-small']) {
    font: var(--label-x-small-light);
  }
  :host([light]),
  :host([size='small']) {
    font: var(--label-small-light);
  }
  :host([light]),
  :host([size='medium']) {
    font: var(--label-medium-light);
  }
  :host([light]),
  :host([size='large']) {
    font: var(--label-large-light);
  }

  /* størrelser men uten "light" */
  :host([size='x-small']) {
    font: var(--label-x-small);
  }
  :host([size='small']) {
    font: var(--label-small);
  }
  :host([size='medium']) {
    font: var(--label-medium);
  }
  :host([size='large']) {
    font: var(--label-large);
  }

  .nve-info-icon {
    color: var(--neutrals-foreground-subtle);
    align-items: center;
    vertical-align: bottom;
    cursor: pointer;
  }
`;
