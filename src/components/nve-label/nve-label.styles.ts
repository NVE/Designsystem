import { css } from 'lit';

/**
 * Stiler til nve-label
 */
export const styles = css`
  :host {
    color: var(--neutrals-foreground-primary);
    font: var(--label-small);
  }

    /* skriftstørrelser */
    :host([size='x-small']) {
      font: var(--label-x-small);
    }
    :host([size='medium']) {
      font: var(--label-medium);
    }
    :host([size='large']) {
      font: var(--label-large);
    }
  
  
  /* light-variant i standard størrelse */
  :host([light]) {
    font: var(--label-small-light);
  }

  /* light-varianter for de andre størrelsene */
  :host([light][size='x-small']) {
    font: var(--label-x-small-light);
  }
  :host([light][size='medium']) {
    font: var(--label-medium-light);
  }
  :host([light][size='large']) {
    font: var(--label-large-light);
  }

  .nve-info-icon {
    color: var(--neutrals-foreground-subtle);
    align-items: center;
    vertical-align: bottom;
    cursor: pointer;
  }
`;
