import { css } from 'lit';

export default css`
  :host {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  .stepper {
    margin: auto;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: 100%;
  }

  .step {
    height: 200px;
    flex-grow: 1;
  }
  
  button {
    user-select: none;
  }

  .flex-column {
    flex-direction: column;
  }

  .vertical-btn-container {
    display: flex;
    width: 100%;
    padding: 20px 60px;
    justify-content: space-between;
    box-sizing: border-box;
    max-width: 600px;
  }

  .vertical {
    flex-direction: column;
  }

  .steps-container {
    display: flex;
    flex-grow: 1;
  }

  .steps-container-with-buttons {
    padding: 20px 60px;
  }

`;
