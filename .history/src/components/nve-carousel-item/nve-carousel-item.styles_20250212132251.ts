import { css } from 'lit';

export default css`

::slotted(img) {
    object-fit: contain;
    width: 100%;
    height: fit-content;
    transform: rotate(90deg);
}

.carousel-item__description {
    background-color: #C8EAF9;
    width: 100%;
    object-fit: contain;
    height: auto;
    padding: 0 16px;
}

:host(nve-carousel-item) {
    aspect-ratio: auto;
}

.rotate-horizontal {
    transform: rotate(90deg);
  }
`