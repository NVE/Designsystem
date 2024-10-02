import { css } from 'lit';

export default css`
  /* Brukes i dropdown. Eneste måten å override shadow dom for å rotere expand_more ikonet når menyen åpner */
  :host([name='expand_more']) {
    transform: var(--icon-rotation, none);
    transition: transform var(--transition-time) ease;
  }

  /* prevent icon beeing highlighted */
  :host {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
  :host {
    display: flex;
  }

  /* we need it to center the icon */
  :is(span) {
    display: inline-flex;
    line-height: 24px;
    font-weight: var(--font-weight-regular);
  }

  .placeholder {
    display: inline-block;
    width: 24px; 
    height: 24px; 
    background-color: transparent;  
  }
`;
