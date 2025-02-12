import { css } from 'lit';

export default css`

  :host {
    display: block;
    position: relative;
  }

::slotted(img) {
    object-fit: contain;
}
.carousel-item__description {
    background-color: #C8EAF9;
    width: 100%;
    height: auto;
    padding: 16px;
    box-sizing: border-box;
}
`