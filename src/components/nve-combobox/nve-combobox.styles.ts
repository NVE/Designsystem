import { css } from "lit";

export default css`
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

  .select__listbox[disabled] {
    background-color: red;
  }

  .select__listbox[filled] {
    background-color: var(--neutrals-background-primary-contrast, #eff8fc);
  }

  nve-tag {
    margin: 8px;
  }

  nve-input::part(input) {
    display: none;
  }

  nve-input::part(prefix) {
    width: 88%;
    display: flex;
    flex-wrap: wrap;
    background: red;
  }

  /* Feil selector */
  nve-input::part(base) {
    display: flex;
    justify-content: space-between;
    height: unset;
    min-height: var(--sl-input-height-medium);
  }

  .input-prefix {
    max-width: 100%;
    border: none;
    margin: 8px;
  }

  .input-prefix:focus-visible {
    outline: none;
  }
`;
