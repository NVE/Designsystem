import { css } from 'lit';

export default css`
:host::part(base) {
  position: absolute;
  top: 0;
  left: 0;
width: 100%;
height: 100%;
}

:host::part(navigation-button) {
    background-color: #60656C;
    opacity: 70%;
    border-radius: 100px;
}

:host::part(navigation-button):hover {
 background-color: #7b8189;
 opacity: 70%;
  transition: 0.2s;
}

:host::part(pagination-item--active) {
    background-color: #ffffff;
    border: 3px solid #a6aab0;
}



`