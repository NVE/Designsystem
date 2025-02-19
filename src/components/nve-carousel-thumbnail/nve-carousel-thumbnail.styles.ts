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
    gap: 5px;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: 5px;
    height: auto;
    width: 85%
}

::slotted(.thumbnail__image) {
    height: 64px !important;
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