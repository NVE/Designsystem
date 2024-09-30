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
  ::slotted(nve-divider) {
    border-top: var(--borderWidth-strong, 2px) solid var(--Neutrals-Border-Subtle, #c8eaf9);
    opacity: var(--borderWidth-default, 1);
    margin: 1px;
  }
`;
