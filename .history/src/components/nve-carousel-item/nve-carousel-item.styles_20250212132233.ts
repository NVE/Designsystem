import { css } from 'lit';

export default css`
 :host {
    display: block;
    position: relative;
  }

::slotted(img) {
    object-fit: contain;
    width: 100%;
    display: block;
    height: fit-content;
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
    transform-origin: center center;
    display: block;
    margin: auto;
  }
`