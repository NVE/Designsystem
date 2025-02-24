import { css } from 'lit';

export default css`
:host(nve-carousel) {
    height: fit-content;
}

:host::part(base) {
    gap: 0rem 10px;
    height: auto;
}

:host::part(scroll-container) {
    aspect-ratio: auto;
    object-fit: contain;
    height: 500px; //sette høyden på karusellen
}

:host::part(navigation-button) {
    background-color: var(--neutrals-background-secondary);
    opacity: 70%;
    padding: var(--spacing-x-small);
    border-radius: var(--dimension-25x);
}

:host::part(navigation-button):hover {
    background-color: var(--interactive-secondary-background-hover);
    opacity: 70%;
    transition: 0.3s;
    color: var(--neutrals-background-primary);
}

:host::part(pagination) {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 1rem;
}

:host::part(pagination-item) {
    background-color: var(--neutrals-border-mute);
    width: var(--spacing-x-small);
    height: var(--spacing-x-small);
}

:host::part(pagination-item):hover {
    background-color:  var(--neutrals-border-default);
    transition: 0.3s;
}

:host::part(pagination-item--active) {
    background-color: var(--neutrals-background-primary);
    border: 3px solid var(--neutrals-border-mute);
    width: var(--spacing-small);
    height: var(--spacing-small);
}

:host::part(pagination-item--active):hover {
    background-color: var(--neutrals-background-primary);
}

`