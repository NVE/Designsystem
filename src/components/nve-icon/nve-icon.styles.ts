import { css } from 'lit';

export default css`
  :host {
    /* Apply Material Icons font-family to the Shadow DOM */
    font-family: 'Material Symbols Outlined';
  }
  /* Brukes i dropdown. Eneste måten å override shadow dom for å rotere expand_more ikonet når menyen åpner */
  :host([name='expand_more']) {
    transform: var(--icon-rotation, none);
    transition: transform 0.3s ease;
  }

  /* we need it to center the icon */
  :is(span) {
    display: inline-flex;
    line-height: 24px;
    font-weight: var(--font-weight-regular);
  }
`;
