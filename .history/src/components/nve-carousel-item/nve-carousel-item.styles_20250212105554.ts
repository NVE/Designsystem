import { css } from 'lit';

export default css`

.test {

}
  ::slotted(img) {
    object-fit: contain;
  }

.carousel-item__description {
    background-color: #C8EAF9;
    width: 100%;
    height: auto;
    padding: 8px 16px;
    box-sizing: border-box;
}
`