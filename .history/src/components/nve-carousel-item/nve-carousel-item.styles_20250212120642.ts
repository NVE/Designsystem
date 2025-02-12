import { css } from 'lit';

export default css`

  ::slotted(img) {
    object-fit: none;
    width: 100%;
         max-height: fit-content;
  }

.carousel-item__description {
    background-color: #C8EAF9;
    width: 100%;
    height: auto;
    padding: 0 16px;
    display: flex;
}

:host(nve-carousel-item) {
    // height: fit-content;
}
`