import { css } from 'lit';
// input felt nativ er for høy

export default css`
  :host {
    /* Brukt for å gjøre feltet like høyt som nve-select */
    --input-size-offset: 4px;
    --input-part-base-border: 1px solid var(--interactive-links-default);
  }

  :host([disabled]) {
    --input-part-base-border: 1px solid var(--sl-input-border-color-disabled);
  }

  :host([size='small']) {
    --input-prefix-slot-min-height: calc(32px - var(--input-size-offset));
    --input-part-base-padding: 2px 2px 2px 4px;
    --input-part-prefix-gap: 2px;
  }
  :host([size='medium']) {
    --input-prefix-slot-min-height: calc(40px - var(--input-size-offset));
    --input-part-base-padding: 3px 6px 3px 4px;
    --input-part-prefix-gap: 3px;
  }
  :host([size='large']) {
    --input-prefix-slot-min-height: calc(48px - var(--input-size-offset));
    --input-part-base-padding: 4px 10px 4px 4px;
    --input-part-prefix-gap: 4px;
  }

  .input-prefix[slot='prefix'] {
    margin-top: calc(-1 * var(--input-part-prefix-gap));
    margin-bottom: calc(-1 * var(--input-part-prefix-gap));
  }

  :host([disabled]) nve-input::part(prefix) {
    cursor: not-allowed;
  }

  :host([data-user-invalid]) nve-input::part(base) {
    border-color: var(--feedback-background-emphasized-error);
  }

  :host([data-user-invalid]) .text--error {
    color: var(--feedback-background-emphasized-error);
  }

  nve-input::part(base) {
    display: flex;
    justify-content: space-between;
    height: unset; /* Gjør det mulig for inputfeltet å vokse > 1 linje */
    padding: var(--input-part-base-padding);
  }

  nve-input::part(input) {
    display: none;
  }
  nve-input::part(prefix) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--input-part-prefix-gap);
    align-items: baseline;
    flex-grow: 1;
    width: 88%;
    cursor: text;
    line-height: 21px;
  }

  .input-prefix[slot='prefix'] {
    min-height: var(--input-prefix-slot-min-height);
  }

  nve-input::part(form-control-label) {
    justify-content: space-between;
  }

  sl-tag[slot='prefix'] {
    margin-left: 0;
    align-self: center;
    cursor: context-menu;
    &[disabled] {
      cursor: not-allowed;
    }
  }

  nve-input::part(base):focus-within {
    border: var(--input-part-base-border);
  }

  .input-prefix[slot='prefix'] {
    border: none;

    font-size: 16px;
    &[filled] {
      background-color: var(--sl-input-filled-background-color);
    }
    &[disabled] {
      cursor: not-allowed;
      background-color: var(--sl-input-background-color-disabled);
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
    font: var(--body-small);
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
    margin-right: var(--sl-spacing-small);
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
