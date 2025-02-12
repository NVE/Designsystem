import { css } from 'lit';

export default css`

::slotted(img) {
    object-fit: contain;
    height: 100%;
}
.carousel-item__description {
    background-color: #C8EAF9;
    width: 100%;
    height: auto;
    padding: 16px;
    box-sizing: border-box;
}
`