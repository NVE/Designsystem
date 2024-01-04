import { css } from 'lit';

export default css`
  :host {
    position: relative; 
  }
    /* Endrer farge på checkbox ikonet til sl-icon */
  :host([type="checkbox"][checked])  sl-icon{
    color: var(--neutrals-background-primary, #FFF);
    opacity: 1;
    background-color: var(--neutrals-foreground-primary, #00131C);
  }
 
  /* Sørger for at checkbox borderen alltid blir vist */
  :host([type="checkbox"]) .menu-item__check {
    display: flex; 
    color: var(--neutrals-background-primary, #FFF);
    border: 2px solid var(--neutrals-foreground-primary, #00131C);
    border-radius: 4px;
    width: 1.125rem;
    visibility: visible;
    margin-right: var(--spacing-small, 0.75rem);
   
  }
  :host([type="checkbox"]) sl-icon {
    opacity: 0;
  }
  .menu-item .menu-item__check {
    display: none; 
  }

  .menu-item{
    display: flex;
    height: 2.625rem;
    align-items: center;
    justify-items: flex-start;
    background: var(--neutrals-background-primary, #FFF);
    padding: var(--spacing-small, 0.75rem) 0px var(--spacing-small, 0.75rem) var(--spacing-small, 0.75rem)
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--spacing-x-small, 0.75rem);
  }
 

  .menu-item__label {

    color: var(--neutrals-foreground-primary, #00131C);
    font: var(--label-small-light);
    

  }
  
  /* Design av subtext  */
  .menu-item__label::after {
    content: var(--nve-menu-item-subtext);
    display: block;
    color: var(--neutrals-foreground-subtle, #006B99);
    font: var(--body-compact-xsmall-compact)
  }

  /* Border i topp  */
  :host([dividerTop]) {
    border-top: var(--borderWidth-strong, 2px) solid var(--Neutrals-Border-Subtle, #C8EAF9);
    opacity: var(--borderWidth-default, 1);
  }
  
  /* Border i bunn  */
  :host([dividerBottom]) {
    border-bottom: var(--borderWidth-strong, 2px) solid var(--Neutrals-Border-Subtle, #C8EAF9);
    opacity: var(--borderWidth-default, 1);
  }
  /* Gjør item unclickable når category property er på*/
  :host([category]) {
    pointer-events: none;

  }

  :host([category]) .menu-item__label{
    color: var(--neutrals-foreground-subtle, #006B99);
    font: var(--label-x-small);
  }
  :host([indent]) .menu-item__label  {
    color: var(--neutrals-foreground-mute, #3C3F44);
  
  }
  :host([indent]) .menu-item  {
    
    padding: 0px 0px 0px var(--spacing-x-large, 2rem);
  }
  :host(:hover:not([aria-disabled="true"], :focus-visible)) .menu-item, .menu-item--submenu-expanded {
    background-color: var(--neutrals-background-secondary);  
  }
    /* Disabled fargen  */
  .menu-item.menu-item--disabled {
    opacity: 0.38;
    border-radius: var(--borderRadius-none, 0rem);
  }
  :host(:focus-visible) .menu-item{
    box-shadow: inset 0 0 0 var(--border-width-strong, 2px) var(--Interactive-Primary-Foreground-Border-Focus, #008ffb); 
    opacity: var(--borderWidth-default, 1);
    color: var(--interactive-outlined-foreground-default);
    background-color: transparent;
  }
    /* Farge på submenu chevron  */
  :host::part(submenu-icon) {
    color:var(--neutrals-foreground-subtle);
  }
`;