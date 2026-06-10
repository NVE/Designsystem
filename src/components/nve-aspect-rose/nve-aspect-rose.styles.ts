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
  }

  .circle-outline {
    stroke: #c6c6c5;
  }

  .sector--affected {
    fill: #d21523;
  }

  .sector--unaffected {
    fill: #e3e3e3;
  }
`;
