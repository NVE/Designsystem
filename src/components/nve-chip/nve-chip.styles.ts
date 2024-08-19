import { css } from 'lit';

export default css`
  .chip {
    display: flex;
    gap: var(--spacing-xx-small);
    padding-inline: var(--spacing-x-small);
    align-items: center;
    border-radius: var(--border-radius-small);
    color: var(--_text-color);
    background: var(--_bg-color);
    width: fit-content;
    white-space: nowrap;
  }
  :host::part(text) {
    font: var(--label-x-small);
  }
  :host::part(extra) {
    font: var(--label-x-small-light);
  }
  ::slotted(nve-icon) {
    font-size: var(--font-size-small);
  }
  .chip--medium {
    height: var(--sizing-x-small);
  }
  .chip--small {
    height: var(--sizing-2x-small);
  }
  .chip-close {
    border: none;
    color: var(--_text_color);
    background: transparent;
  }
  .chip-close:focus-visible {
    outline: none;
  }
  .chip:has(.chip-close:focus-visible) {
    outline: var(--_text-color) auto 1px;
  }

  .chip.chip--emphasis-emphasized:has(.chip-close:focus-visible) {
    outline-color: var(--neutrals-foreground-primary);
  }

  .chip.chip--emphasis-emphasized.chip--neutral:has(.chip-close:focus-visible) {
    outline-color: var(--interactive-primary-foreground-border-focus);
  }

  .chip:has(.chip-close:hover) {
    background: var(--_hover-bg-color);
    color: var(--_hover-text-color);
  }
`;
