import { css } from 'lit';

export default css`

// :host::part(base) {
//     aspect-ratio: 3/2;
// }

:host::part(base) {
    gap: 1rem 0;
}

:host::part(navigation-button) {
    background-color: var(--neutrals-background-secondary);
    opacity: 70%;
    border-radius: 100px;
    color:  var(--neutrals-background-primary);
}

:host::part(navigation-button):hover {
    background-color: var(--neutrals-border-mute);
    opacity: 70%;
    transition: 0.3s;
    color: var(--neutrals-background-primary);
}

:host::part(pagination) {
    display: flex;
    align-items: center;
    gap: 8px;
}

:host::part(pagination-item) {
    background-color: var(--neutrals-border-mute);

}

:host::part(pagination-item):hover {
    background-color:  var(--neutrals-border-default);
    transition: 0.3s;

}

:host::part(pagination-item--active) {
    background-color: var(--neutrals-background-primary);
    border: 3px solid var(--neutrals-border-mute);
    width: 14px;
    height: 14px;
}

:host::part(pagination-item--active):hover {
    background-color: var(--neutrals-background-primary);
}


`