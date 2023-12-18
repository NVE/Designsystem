import { css } from 'lit';

export default css`
:host {
  --header-spacing: var(--spacing-x-large, 2rem);
  --body-spacing: var(--spacing-x-large, 2rem);
  --footer-spacing: var(--spacing-x-large, 2rem);
}

.dialog__footer {
  display: flex;
  text-align: left;
  gap: 0.75rem;
  padding: var(--spacing-x-large, 2rem);
}

.dialog__title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative; 
  color: var(--neutrals-foreground-primary, #00131C);
  font:var(--header-small);
  line-height: 130%;
  padding: var(--spacing-x-large, 2rem);
}

.dialog__title::before {
  font-family: 'Material Symbols Outlined';
  content: var(--title-icon);
}
.dialog__header-actions sl-icon-button, .dialog__header-actions ::slotted(sl-icon-button) {
  color: var(--neutrals-foreground-primary, #00131C);
  font-family: Source Sans Pro;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: bold;
}
.dialog__body{
  color: var(--neutrals-foreground-primary, #00131C);
  font:var( --body-medium-default);
  line-height: 150%;
  padding: 0 var(--spacing-x-large, 2rem) 0 var(--spacing-x-large, 2rem);
}
.dialog__close {
  display: none;
}
.dialog__overlay {
    opacity: var(--borderWidth-default, 1);
    background-color: rgba(13, 13, 14, 0.40);
  }
`