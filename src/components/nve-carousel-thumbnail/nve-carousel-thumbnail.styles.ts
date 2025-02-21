import { css } from 'lit';

export default css`
.thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
}

.thumbnail__scroller {
    display: flex;
    justify-content: center;
    alight-items: center;
    gap: var(spacing-xx-small);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(spacing-xx-small);
    height: auto;
    width: 85%
}

::slotted(.thumbnail__image) {
    height: var(spacing-3x-large) !important;
    aspect-ratio: 3/2;
    object-fit: cover;
    opacity: 0.3;
    will-change: opacity;
    transition: 250ms opacity;
    cursor: pointer;
}

::slotted(.thumbnail__image--active) {
    opacity: 1;
}
`