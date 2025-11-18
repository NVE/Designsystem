import { css } from 'lit';

export default css`
  .tab-group__nav-container {
    display: flex;
    position: relative;
  }

  .tab-group__nav {
    display: flex;
    position: relative;
    overflow: hidden;
  }

  .tab-group__nav:not(.tab-group__nav--background)::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: var(--color-brand-background-primary);
    width: var(--indicator-width, 0px);
    transform: translateX(var(--indicator-x, 0px)) scaleX(var(--indicator-scale, 1));
    transition:
      transform 0.3s,
      width 0.3s;
    will-change: transform, width;
  }

  @media (prefers-reduced-motion: reduce) {
    .tab-group__nav:not(.tab-group__nav--background)::after {
      display: none;
    }
  }

  .tab-group__nav--background {
    gap: var(--spacing-2x-small);
  }

  @media (max-width: 600px) {
    .tab-group__nav {
      overflow-x: auto;
    }
  }

  .tab-group__nav-button {
    --scroll-button-background: #fff;
    position: absolute;
    background: var(--scroll-button-background);
    width: var(--button-container-width);
    visibility: visible;
    transition: visibility 0.3s ease-in-out;
  }

  .tab-group__nav-button,
  .tab-group__nav-button nve-button,
  .tab-group__nav-button nve-button::part(base) {
    height: 100%;
  }

  .tab-group__nav-button--forward {
    right: 0;
    display: flex;
    justify-content: flex-end;
  }

  .tab-group__nav-button--backward {
    display: flex;
    justify-content: flex-start;
    left: 0;
  }
`;
