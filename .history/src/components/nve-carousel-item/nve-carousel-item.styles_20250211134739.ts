import { css } from 'lit';

export default css`

:host(sl-carousel-item > img) {
width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire container */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

`