import { css } from 'lit';

export default css`
  :host(nve-carousel-item) {
    aspect-ratio: 16/9;
    object-fit: contain;
    height: auto;
  }

  ::slotted(img) {
    object-fit: contain;
  }

  .carousel-item__description {
    background-color: var(--color-shades-teal-150);
    color: var(--color-neutrals-foreground-primary);
    width: 100%;
    padding: 0 var(--spacing-medium);
  }
`;
