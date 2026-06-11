import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    height: var(--exposed-height-size, 90px);
  }

  .exposed-height {
    width: 100%;
    height: 100%;
  }

  .mountain-danger {
    fill: var(--exposed-height-affected-color, #d21523);
    stroke: var(--exposed-height-affected-color, #d21523);
  }

  .mountain-safe {
    fill: var(--exposed-height-unaffected-color, #e3e3e3);
    stroke: var(--exposed-height-unaffected-color, #e3e3e3);
  }

  .arrow {
    fill: var(--exposed-height-affected-color, #d21523);
  }

  .height-label {
    font-family: 'Source Sans 3', sans-serif;
    font-weight: var(--font-weight-regular);
    font-size: 0.7rem;
  }

  .height-label.centered {
    text-anchor: middle;
  }
`;
