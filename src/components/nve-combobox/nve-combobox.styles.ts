import { css } from 'lit';
// focus error
// nve-tag linjehøyde er feil
// avstand mellom nve-tag
//
export default css`
  nve-input::part(input) {
    display: none;
  }

  nve-input::part(base) {
    display: flex;
    justify-content: space-between;
    height: unset;
  }

  :host([disabled]) nve-input::part(prefix) {
    cursor: not-allowed;
  }
  nve-input::part(prefix) {
    width: 88%;
    display: flex;
    flex-wrap: wrap;
    cursor: text;
    flex-grow: 1;
  }

  nve-input::part(form-control-label) {
    justify-content: space-between;
  }

  sl-tag[slot='prefix'] {
    margin-left: 3px;
  }

  :host nve-input::part(base):focus-within {
    border: 1px solid var(--interactive-links-default);
  }

  :host([data-user-invalid]) nve-input::part(base) {
    border-color: var(--feedback-background-emphasized-error);
  }

  :host([data-user-invalid]) .text--error {
    color: var(--feedback-background-emphasized-error);
  }

  .input-prefix[slot='prefix'] {
    border: none;
    min-height: var(--sl-input-height-medium); // endre input felt størrelse
    font-size: 16px;
    &[filled] {
      background-color: var(--sl-input-filled-background-color);
    }
    &[disabled] {
      cursor: not-allowed;
    }
    &:focus-visible {
      outline: none;
    }
  }

  nve-popup::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;
    max-height: 200px;
    z-index: var(--sl-z-index-dropdown);
  }

  .select__listbox[filled] {
    background-color: var(--neutrals-background-primary-contrast, #eff8fc);
  }
  .open-icon-wrapper {
    margin-right: 18px;
  }
  .open-icon {
    cursor: pointer;
    transition:
      transform 0.1s ease-in-out,
      color 0.1s ease-in-out;
  }
  .open-icon.active {
    transform: rotate(-180deg);
  }
  .open-icon.disabled {
    cursor: not-allowed;
  }
  .text-help {
    font: var(--detailtext-caption);
  }
`;
