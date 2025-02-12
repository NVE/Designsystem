import { css } from 'lit';

export default css`

  ::slotted(img) {
    object-fit: contain;
  }

.carousel-item__description {
    background-color: #C8EAF9;
    width: 100%;
    height: auto;
    padding: 0 16px;
}

nve-carousel-item {
    width: 300px;
}
`