import { css } from 'lit';

/**
 * Stiler til nve-step
 */
export default css`
.step-figure {
  position: relative;
  display: flex;
  align-items: center;
  
}

.divider-horizontal {
  height: 2px;
  width: 180px;
  background-color: black;
  flex-grow: 1;
}

.step-title{
  font-size: 18px; 
  font-weight:bold;
}

.selectedInterval {
  height: 4px;
}

.selected {
  font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 1, "opsz" 48 !important;
}

/* :host([selected=true]) {
  font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 1, "opsz" 48 !important;
} */

.hasError {
  color: red;
}

.notStarted {
  color: rgb(184, 184, 184);
}

.evaluated {
  background-color: rgb(184, 184, 184);
}

span {
  cursor: pointer;
  font-size:2rem;
  display:flex;
}

.material-symbols-sharp {
  font-size: 2rem;
  font-variation-settings:
  'FILL' 0,
  'wght' 300,
  'GRAD' 0,
  'opsz' 24
}

`;
