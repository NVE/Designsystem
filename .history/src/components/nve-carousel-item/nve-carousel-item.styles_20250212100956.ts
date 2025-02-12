import { css } from 'lit';

export default css`

::slotted(img) {
    object-fit: contain;
}
.carousel-item__description {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 0.5rem;
    font-size: 1rem;
    text-align: center;
    display: none;
}
`