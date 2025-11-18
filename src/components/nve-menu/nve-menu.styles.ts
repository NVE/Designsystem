import { css } from 'lit';
export default css`
  :host {
    padding: 0px;
    margin-top: var(--spacing-2x-small);
    border: none;
    box-shadow: var(--box-shadow-soft);
    background: var(--color-neutrals-background-primary);
  }
  ::slotted(nve-label) {
    padding: var(--spacing-small);
    color: var(--color-neutrals-foreground-subtle);
    font: var(--typography-label-x-small);
  }
  ::slotted(nve-divider) {
    border-top: var(--border-width-strong) solid var(--color-neutrals-border-subtle);
    opacity: 1;
    margin-top: 1px;
    margin-bottom: 1px;
  }
`;
