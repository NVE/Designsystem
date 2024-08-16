import { css } from 'lit';

export default css`
  :host::part(base) {
    min-width: 0;
    padding: 0px var(--spacing-small);
    gap: 0;
  }

  :host::part(spinner) {
    margin-right: 0;
    font-size: 24px;
  }

  :host([size='medium'])::part(base) {
    padding: 0px var(--spacing-x-small);
  }

  :host([size='small'])::part(base) {
    padding: 0px var(--spacing-xx-small, 4px);
  }

  :host([size='small']) ::slotted(nve-icon) {
    font-size: 24px;
  }

  :host([circle])::part(base) {
    border-radius: 50%;
  }
`;
