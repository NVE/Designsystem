import { css } from 'lit';

export default css`

:host(nve-carousel-item) {
    aspect-ratio: auto;
    object-fit: contain;
    height: auto;
}

::slotted(img) {
    object-fit: contain;
}

.carousel-item__description {
    background-color: var(--teal-150);
    color: var(--neutrals-foreground-primary);
    width: 100%;
    padding: 0 var(--spacing-medium);
}
`