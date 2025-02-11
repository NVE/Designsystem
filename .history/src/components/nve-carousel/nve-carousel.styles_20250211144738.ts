import { css } from 'lit';

export default css`

// :host::part(base) {
// aspect-ratio: 3/2;
//  }

:host::part(base) {
 gap: 1rem 0;
 }

// :host::part(navigation-button) {
//     background-color: #60656C;
//     opacity: 70%;
//     border-radius: 100px;
// }

// :host::part(navigation-button):hover {
// background-color: #7b8189;
//  opacity: 70%;
//   transition: 0.2s;
// }

:host::part(pagination-item) {
    background-color: #a6aab0;

}

:host::part(pagination-item--active) {
    background-color: #ffffff;
    border: 3px solid #a6aab0;
    width: 1rem;
    height: 1rem;
}


`