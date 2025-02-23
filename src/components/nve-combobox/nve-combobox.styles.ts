import { css } from "lit";

export default css`
  nve-input::part(input) {
    display: none;
  }

  nve-input::part(base) {
    display: flex;
    justify-content: space-between;
    height: unset;
  }

  nve-input::part(prefix) {
    width: 88%;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
  }

  nve-tag[slot="prefix"] {
    margin: 8px;
  }

  .input-prefix[slot="prefix"] {
    border: none;
    min-height: var(--sl-input-height-medium);
    font-size: 16px;
    &[filled] {
      background-color: var(--sl-input-filled-background-color);
    }
    &:focus-visible {
      outline: none;
    }
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
  }

  .select__listbox[filled] {
    background-color: var(--neutrals-background-primary-contrast, #eff8fc);
  }
`;
