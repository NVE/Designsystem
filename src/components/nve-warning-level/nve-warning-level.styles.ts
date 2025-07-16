import { css } from 'lit';

export default css`
  :host {
    --height: 34px;
    --width: 34px;
    --font-size: 20px;
    width: fit-content;
    display: block;
  }

  .warning-level {
    --background-color: var(--dangerlevel-background-default-level1);
    --border-radius: var(--border-radius-small);
    --border-width: 2px;
    display: flex;
    position: relative;
    width: calc(var(--width) - (var(--border-width) * 2));
    height: calc(var(--height) - (var(--border-width) * 2));
    justify-content: center;
    align-items: center;
    color: var(--dangerlevel-foreground-default-level1);
    font-family: 'Source Sans Pro';
    font-size: var(--font-size);
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    border-radius: var(--border-radius-small);
    background: var(--background-color);
    border: var(--border-width) solid transparent;
    transition:
      background-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
  }

  .inside-button {
    cursor: pointer;
  }

  .warning-level--1 {
    --background-color: var(--dangerlevel-background-default-level1);
    &.inside-button:hover {
      --background-color: var(--dangerlevel-background-mute-level1);
    }
  }

  .warning-level--2 {
    --background-color: var(--dangerlevel-background-default-level2);
    &.inside-button:hover {
      --background-color: var(--dangerlevel-background-mute-level2);
    }
  }

  .warning-level--3 {
    --background-color: var(--dangerlevel-background-default-level3);
    &.inside-button:hover {
      --background-color: var(--dangerlevel-background-mute-level3);
    }
  }

  .warning-level--4 {
    --background-color: var(--dangerlevel-background-default-level4);
    &.inside-button:hover {
      --background-color: var(--dangerlevel-background-mute-level4);
    }
  }

  .warning-level--5 {
    color: var(--dangerlevel-foreground-default-level5);
    --background-color: var(--dangerlevel-background-default-level5);
    &.inside-button:hover {
      color: var(--dangerlevel-background-default-Level5);
      --background-color: var(--dangerlevel-background-mute-level5);
    }
  }

  .warning-level--unknown {
    --background-color: var(--neutrals-background-primary-contrast);
    &.inside-button:hover {
      --background-color: var(--neutrals-background-secondary,);
    }
  }

  .border {
    border: var(--border-width) solid var(--dangerlevel-foreground-default-level1);
  }

  .warning-level-badge {
    position: absolute;
    bottom: -8px;
    right: -9px;
  }

  .warning-leve-badge--circle {
    width: 20px;
    height: 20px;
  }

  .warning-leve-badge--triangle {
    width: 22px;
    height: 22px;
  }
`;
