import { css } from 'lit';

/**
 * Stiler til nve-label
 */
export const styles = css`
  :host {
    color: var(--color-neutrals-foreground-primary);
    font: var(--typography-label-small);
    width: 100%;
    display: flex;
    align-items: center;
    gap: var(--spacing-2x-small);
    position: relative;
  }

  /* skriftstørrelser */
  :host([size='x-small']) {
    font: var(--typography-label-x-small);
  }

  :host([size='medium']) {
    font: var(--typography-label-medium);
  }

  :host([size='large']) {
    font: var(--typography-label-large);
  }

  /* light-variant i standard størrelse */
  :host([light]) {
    font: var(--typography-label-small-light);
  }

  /* light-varianter for de andre størrelsene */
  :host([light][size='x-small']) {
    font: var(--typography-label-x-small-light);
  }

  :host([light][size='medium']) {
    font: var(--typography-label-medium-light);
  }

  :host([light][size='large']) {
    font: var(--typography-label-large-light);
  }

  .nve-info-icon {
    color: var(--color-neutrals-foreground-subtle);
    align-items: center;
    vertical-align: bottom;
    cursor: pointer;
    font-size: var(--font-size-medium);
    line-height: 1;
  }

  :host([iconColor='black']) .nve-info-icon {
    color: var(--color-shades-grey-999, #000000);
  }
`;
