import { css } from 'lit';

export default css`
  :host {
    --size: 34px;
    --font-size: 20px;
    width: fit-content;
    display: block;
  }

  .warning-level {
    --background-color: var(--color-dangerlevel-background-default-level1);
    --border-radius: var(--border-radius-small);
    --border-width: 2px;
    display: flex;
    position: relative;
    width: calc(var(--size) - (var(--border-width) * 2));
    height: calc(var(--size) - (var(--border-width) * 2));
    min-width: 20px;
    min-height: 20px;
    max-width: 36px;
    max-height: 36px;
    justify-content: center;
    align-items: center;
    color: var(--color-dangerlevel-foreground-default-level1);
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
    --background-color: var(--color-dangerlevel-background-default-level1);
    &.inside-button:hover {
      --background-color: var(--color-dangerlevel-background-mute-level1);
    }
  }

  .warning-level--2 {
    --background-color: var(--color-dangerlevel-background-default-level2);
    &.inside-button:hover {
      --background-color: var(--color-dangerlevel-background-mute-level2);
    }
  }

  .warning-level--3 {
    --background-color: var(--color-dangerlevel-background-default-level3);
    &.inside-button:hover {
      --background-color: var(--color-dangerlevel-background-mute-level3);
    }
  }

  .warning-level--4 {
    --background-color: var(--color-dangerlevel-background-default-level4);
    &.inside-button:hover {
      --background-color: var(--color-dangerlevel-background-mute-level4);
    }
  }

  .warning-level--5 {
    color: var(--color-dangerlevel-foreground-default-level5);
    --background-color: var(--color-dangerlevel-background-default-level5);
    &.inside-button:hover {
      color: var(--color-dangerlevel-background-default-Level5);
      --background-color: var(--color-dangerlevel-background-mute-level5);
    }
  }

  .warning-level--unknown {
    --background-color: var(--color-neutrals-background-primary-contrast);
    &.inside-button:hover {
      --background-color: var(--color-neutrals-background-secondary,);
    }
  }

  .border {
    border: var(--border-width) solid var(--color-dangerlevel-foreground-default-level1);
  }

  .warning-level-badge {
    position: absolute;
    bottom: -8px;
    right: -9px;
  }

  .warning-level-badge--circle {
    width: calc(var(--size) / 2);
    height: calc(var(--size) / 2);
    max-width: 20px;
    max-height: 20px;
    min-width: 15px;
    min-height: 15px;
  }

  .warning-level-badge--triangle {
    width: calc(var(--size) / 2 + 2px);
    height: calc(var(--size) / 2 + 2px);
    max-width: 22px;
    max-height: 22px;
    min-width: 17px;
    min-height: 17px;
  }
`;
