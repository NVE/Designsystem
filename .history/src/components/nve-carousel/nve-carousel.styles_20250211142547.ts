import { css } from 'lit';

export default css`
:host::part(base) {
    position: relative;
    width: atuo;
    height: full;
}

:host::part(scroll-container) {
   width: 125%;
   margin: -13%;
   height: auto;
   aspect-ratio: auto;
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