import { css } from 'lit';

export default css`
  :host {
    position: relative;
  }

  /* Endrer farge på checkbox ikonet til sl-icon */
  :host([type='checkbox'][checked]) sl-icon {
    color: var(--neutrals-background-primary, #fff);
    opacity: 1;
    background-color: var(--neutrals-foreground-primary, #00131c);
  }

  /* Sørger for at checkbox borderen alltid blir vist */
  :host([type='checkbox']) .menu-item__check {
    display: flex;
    color: var(--neutrals-background-primary, #fff);
    border: 2px solid var(--neutrals-foreground-primary, #00131c);
    border-radius: 4px;
    width: 1.125rem;
    visibility: visible;
    margin-right: var(--spacing-small, 0.75rem);
  }

  :host([type='checkbox']) sl-icon {
    opacity: 0;
  }

  ::slotted(nve-icon) {
    --icon-size: var(--font-size-medium);
  }

  .menu-item .menu-item__check {
    display: none;
  }

  .menu-item {
    display: flex;
    height: 2.625rem;
    align-items: center;
    justify-items: flex-start;
    background: var(--neutrals-background-primary, #fff);
    padding: var(--spacing-small, 0.75rem) 0px var(--spacing-small, 0.75rem) var(--spacing-small, 0.75rem);
    color: var(--neutrals-foreground-primary, #00131c);
    font: var(--label-small-light);
    fill: var(--neutrals-foreground-primary, #00131c);
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--spacing-x-small, 0.75rem);
  }

  /* Design av subtext  */
  .menu-item__label::after {
    content: var(--nve-menu-item-subtext);
    display: block;
    color: var(--neutrals-foreground-subtle, #006b99);
    font: var(--body-compact-xsmall-compact);
  }

  /* Gjør item unclickable når category property er på */
  :host([category]) {
    pointer-events: none;
  }

  :host([category]) .menu-item__label {
    color: var(--neutrals-foreground-subtle, #006b99);
    font: var(--label-x-small);
  }

  :host([indent]) .menu-item__label {
    color: var(--neutrals-foreground-primary);
  }

  :host([indent]) .menu-item {
    padding: 0px 0px 0px var(--spacing-x-large, 2rem);
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--neutrals-background-secondary);
    color: var(--neutrals-foreground-primary, #00131c);
  }

  /* Disabled fargen  */
  .menu-item.menu-item--disabled {
    opacity: 0.38;
    border-radius: var(--borderRadius-none, 0rem);
  }

  :host(:focus-visible) .menu-item {
    box-shadow: inset 0 0 0 var(--border-width-strong, 2px) var(--Interactive-Primary-Foreground-Border-Focus, #008ffb);
    opacity: var(--borderWidth-default, 1);
    color: var(--interactive-outlined-foreground-default);
    background-color: transparent;
  }
`;
