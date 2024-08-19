import { css } from 'lit';

export default css`
  .chip {
    display: flex;
    gap: var(--spacing-xx-small);
    padding: var(--spacing-x-small);
    align-items: center;
    border-radius: var(--border-radius-small);
    color: var(--_text-color);
    background: var(--_bg-color);
    width: fit-content;
  }
  :host::part(text) {
    font: var(--label-x-small);
  }
  :host::part(extra) {
    font: var(--label-x-small-light);
  }
  .chip--medium {
    min-height: var(--sizing-2x-small);
  }
  .chip--small {
    padding: 2px var(--spacing-x-small);
    min-height: var(--font-size-small);
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
  .chip:has(.chip-close:hover) {
    background: var(--_hover-bg-color);
    color: var(--_hover-text-color);
  }
`;
