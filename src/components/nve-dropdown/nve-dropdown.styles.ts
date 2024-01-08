import { css } from 'lit';

/* Roterer chevron når dropdown åpner */
export default css`
:host([open]) {
  --icon-rotation: rotate(180deg);
}
`;
