import { css } from 'lit';
export default css`
  :host {
    padding: 0px;
    margin-top: var(--spacing-xx-small);
    border: none;
    box-shadow: var(--soft);
  }
  ::slotted(nve-label) {
    padding: var(--spacing-small, 0.75rem);
    color: var(--neutrals-foreground-subtle, #006b99);
    font: var(--label-x-small);
  }
`;
