import { css } from 'lit';
export default css`
  :host {
    padding: 0px;
    margin-top: var(--spacing-xx-small);
    border: none;
    box-shadow: var(--soft);
  }
  ::slotted(nve-label) {
    padding: var(--spacing-small);
    color: var(--neutrals-foreground-subtle);
    font: var(--label-x-small);
  }
  ::slotted(nve-divider) {
    border-top: var(--border-width-strong) solid var(--neutrals-border-subtle);
    opacity: 1;
    margin-top: 1px;
    margin-bottom: 1px;
  }
`;
