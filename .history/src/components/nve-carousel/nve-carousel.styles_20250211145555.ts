import { css } from 'lit';

export default css`

// :host::part(base) {
// aspect-ratio: 3/2;
//  }

:host::part(base) {
 gap: 1rem 0;
 }

:host::part(navigation-button) {
    background-color: var(--neutrals-border-default);
    opacity: 70%;
    border-radius: 100px;
    color: #ffffff;
}

:host::part(navigation-button):hover {
background-color: #7b8189;
 opacity: 70%;
  transition: 0.2s;
    color: #ffffff;
}

:host::part(pagination) {
    display: flex;
    align-items: center;
    gap: 8px;

}

:host::part(pagination-item) {
    background-color: var(--neutrals-border-mute);

}

:host::part(pagination-item--active) {
    background-color: #ffffff;
    border: 3px solid #a6aab0;
    width: 14px;
    height: 14px;
}


`