import { css } from 'lit';

export default css`
  .container {
    display: flex;
  }
  .stepper {
    margin: auto;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  a {
    cursor: pointer;
    user-select: none;
  }
  .step {
    height: 200px;
    flex-grow: 1;
  }
  button {
    user-select: none;
  }

  .flex-container {
    display: flex;
    padding: 20px 60px 20px 60px;
    flex-grow: 1;
  }

  .button-container {
    width: 120px;
    text-align: center;
  }

  :host {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }

  .scroll-button.prev {
    background: linear-gradient(to right, #ffffff, #ffffff 60%, transparent 100%);
    padding: 20px 80px 20px 20px;
    margin: 0 60px;
    position: absolute;
    z-index: 1;
    left: 0;
  }
  .scroll-button.next {
    background: linear-gradient(to left, #ffffff, #ffffff 60%, transparent 100%);
    padding: 20px 80px 20px 80px;
    position: absolute;
    z-index: 1;
    right: 0;
  }
`;
