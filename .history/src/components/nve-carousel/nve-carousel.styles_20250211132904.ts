import { css } from 'lit';

export default css`

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
    backgroun-color: #ffffff;
}



`