import { css } from 'lit';

export default css`

  :host {
    display: block;
    position: relative;
  }

  ::slotted(img) {
    object-fit: contain;
    display: block;
    width: 100%;
  }

// ::slotted(img) {
//     object-fit: contain;
// }
.carousel-item__description {
    background-color: #C8EAF9;
    width: 100%;
    height: auto;
    padding: 8px 16px;
    box-sizing: border-box;
}
`