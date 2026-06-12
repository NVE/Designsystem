import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    width: var(--aspect-rose-size, 90px);
    height: var(--aspect-rose-size, 90px);
  }

  text {
    font-family: 'Source Sans 3', sans-serif;
    font-weight: var(--font-weight-regular);
    font-size: 0.67rem;
  }

  .circle-outline {
    stroke: var(--aspect-rose-outline-color, #c6c6c5);
  }
  .sector-affected {
    fill: var(--aspect-rose-affected-color, #d21523);
  }
  .sector-unaffected {
    fill: var(--aspect-rose-unaffected-color, #e3e3e3);
  }
`;
