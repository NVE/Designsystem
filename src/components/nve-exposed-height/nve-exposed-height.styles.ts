import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    width: var(--exposed-height-width, 150px);
  }

  .exposed-height {
    width: 100%;
    height: auto; /* auto = maintains aspect ratio from intrinsic width/height */
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
    font-size: 0.67rem;
  }

  .height-label.centered {
    text-anchor: middle;
  }
`;
