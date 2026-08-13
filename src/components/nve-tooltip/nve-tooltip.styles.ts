import { css } from 'lit';

export default css`
  :host {
    --offset: 8px;
  }

  .tooltip__trigger {
    anchor-name: --nve-tooltip-anchor;
    display: inline-flex;
  }

  .tooltip {
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
    p {
      margin: 0;
    }
  }

  @supports (position-area: top) {
    .tooltip__anchor-features {
      position-area: top;
      position-anchor: --nve-tooltip-anchor;
      position-try-fallbacks: flip-block, flip-inline;
      justify-self: anchor-center;
      container-type: anchored;
    }
  }

  /* 
  stottes ikke enda overalt
  @container anchored(fallback: flip-block) {
    .tooltip::after {
      inset-block-start: -5px;
      inset-block-end: auto;
    }
  }
    */

  .tooltip::after {
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

  .tooltip[data-below]::after {
    inset-block-start: -5px;
    inset-block-end: auto;
    border-right: none;
    border-bottom: none;
    border-left: inherit;
    border-top: inherit;
  }

  .tooltip:popover-open {
    opacity: 1;
  }

  @starting-style {
    .tooltip:popover-open {
      opacity: 0;
    }
  }
`;
