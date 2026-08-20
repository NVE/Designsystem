import { css } from 'lit';

export default css`
  :host {
    --offset: 4px;
    width: fit-content;
    height: fit-content;
  }

  .toggletip__trigger {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    width: 1.875rem;
    height: 1.875rem;
    anchor-name: --nve-toggletip-anchor;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--color-neutrals-foreground-primary);
  }

  nve-icon {
    --icon-size: 1.25rem;
    transition: color 0.3s;
  }

  .toggletip__trigger:hover nve-icon {
    color: var(--color-interactive-background-primary-hover);
  }

  .toggletip {
    --inset-inline-start: 50%;
    box-sizing: border-box;
    padding: var(--spacing-2x-small) var(--spacing-x-small);
    font: var(--typography-label-small-light);
    border-radius: var(--border-radius-small);
    position: fixed;
    overflow: visible;
    width: fit-content;
    max-width: 30ch;
    text-align: center;
    margin-bottom: var(--offset);
    border: var(--border-width-default) solid;
    opacity: 0;
    transition:
      opacity 0.3s,
      transform 0.3s,
      overlay 0.3s allow-discrete,
      display 0.3s allow-discrete;
  }

  @supports (position-area: top) {
    .toggletip__anchor-features {
      position-area: top;
      position-anchor: --nve-toggletip-anchor;
      position-try-fallbacks: flip-block, flip-inline;
      justify-self: anchor-center;
      container-type: anchored;
    }
  }

  .toggletip::after {
    content: '';
    position: absolute;
    inline-size: 8px;
    block-size: 8px;

    border-left: none;
    border-top: none;
    background: inherit;
    border-right: inherit;
    border-bottom: inherit;

    inset-inline-start: var(--inset-inline-start);
    inset-block-end: -5px;

    transform: translateX(-50%) rotate(45deg);
  }

  .toggletip[data-below]::after {
    inset-block-start: -5px;
    inset-block-end: auto;
    border-right: none;
    border-bottom: none;
    border-left: inherit;
    border-top: inherit;
  }

  .toggletip:popover-open {
    opacity: 1;
  }

  @starting-style {
    .toggletip:popover-open {
      opacity: 0;
    }
  }
`;
