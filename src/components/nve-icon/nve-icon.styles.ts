import { css } from 'lit';

export default css`
  /* Brukes i dropdown. Eneste måten å override shadow dom for å rotere expand_more ikonet når menyen åpner */
  :host([name='expand_more']) {
    transform: var(--icon-rotation, none);
    transition: transform var(--transition-time) ease;
  }

  /* prevent icon beeing highlighted */
  :host {
    display: flex;
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    --icon-size: var(--font-size-large);
    font-size: var(--icon-size);
    line-height: var(--icon-size);
  }

  :is(img) {
    width: var(--icon-size);
    height: var(--icon-size);
  }

  /* we need it to center the icon */
  :is(span) {
    display: inline-flex;
    font-size: inherit;
    line-height: inherit;
    font-weight: var(--font-weight-regular);
  }

  .placeholder::part(indicator) {
    width: var(--icon-size);
    height: var(--icon-size);
    border-radius: 4px;
  }

  .material-outlined {
    font-family: 'Material Symbols Outlined';
  }

  .material-sharp {
    font-family: 'Material Symbols Sharp';
  }
  
  svg {
    fill: currentColor;
  }
`;
