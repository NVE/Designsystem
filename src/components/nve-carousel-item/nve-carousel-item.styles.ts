import { css } from 'lit';

export default css`

::slotted(img) {
    object-fit: contain;
    width: 100%;
    height: fit-content;
}

.carousel-item__description {
    background-color: var(--teal-150);
    color: var(--neutrals-foreground-primary);
    width: 100%;
    object-fit: contain;
    height: auto;
    padding: 0 16px;
}

:host(nve-carousel-item) {
    aspect-ratio: auto;
}
`