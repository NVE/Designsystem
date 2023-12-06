import { customElement, property } from 'lit/decorators.js';
import { SlMenuItem } from '@shoelace-style/shoelace';
import { css, html } from 'lit';

@customElement('nve-menu-item')
export class NveMenuItem extends SlMenuItem {
  @property({ type: String, reflect: true }) subtext: string;
  @property({ type: Boolean, reflect: true }) dividerTop: boolean = false;
  @property({ type: Boolean, reflect: true }) dividerBottom: boolean = false;
  @property({ type: Boolean, reflect: true }) level2: boolean = false;
  @property({ type: Boolean, reflect: true }) category: boolean = false;

  constructor() {
    super();
    this.subtext = '';
  }

  updated(changedProperties: any) {
    super.updated(changedProperties);
    if (changedProperties.has('dividerTop')) {
      this.handleDividerTopChange();
    }
    if (changedProperties.has('dividerBottom')) {
      this.handleDividerBottomChange();
    }
    if (changedProperties.has('level2')) {
      this.handleLevel2Change();
    }
    if (changedProperties.has('category')) {
      this.handleCategoryChange();
    }
    if (changedProperties.has('subtext')) {
      this.style.setProperty('--nve-menu-item-subtext', `"${this.subtext}"`);
    }
  }
  handleCategoryChange() {
    if (this.category) {
      this.classList.add('category');
    } else {
      this.classList.remove('category');
    }
  }
  handleLevel2Change() {
    if (this.level2) {
      this.classList.add('level2');
    } else {
      this.classList.remove('level2');
    }
  }

  private handleDividerTopChange() {
    if (this.dividerTop) {
      this.classList.add('divider-top');
    } else {
      this.classList.remove('divider-top');
    }
  }
  private handleDividerBottomChange() {
    if (this.dividerBottom) {
      this.classList.add('divider-bottom');
    } else {
      this.classList.remove('divider-bottom');
    }
  }


  static get styles() {
    return [
      super.styles,
      css`
      :host {
        position: relative; 
      }

      :host([type="checkbox"][checked])  sl-icon{
        color: var(--neutrals-background-primary, #FFF);
        background-color: var(--neutrals-foreground-primary, #00131C);
      }

      :host([type="checkbox"]) .menu-item__check {
        display: flex; 
        color: var(--neutrals-background-primary, #FFF);
        border: 2px solid var(--neutrals-foreground-primary, #00131C);
        border-radius: 4px;
        width: 1.125rem;
        height: 1.125rem;
        visibility: visible;
        margin-left: var(--spacing-small, 0.75rem);
      }
      .menu-item{
        display: flex;
        height: 2.825rem;
        align-items: center;
        
       /* border-radius: var(--border-radius-small, 0.25rem);*/
       justify-items: flex-start;
        background: var(--neutrals-background-primary, #FFF);
      }
      .menu-item .menu-item__check {
        display: none; 
      }
      .menu-item .menu-item__prefix::slotted(*) {
        margin-left: var(--spacing-small, 0.75rem);
        margin-inline-end:0px;
      }
      .menu-item__label {

        color: var(--neutrals-foreground-primary, #00131C);
        font-family: Source Sans Pro;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%;
        padding: var(--spacing-small, 0.75rem) 0px var(--spacing-small, 0.75rem) var(--spacing-small, 0.75rem)

      }
      .menu-item__label::after {
        content: var(--nve-menu-item-subtext);
        display: block;
        color: var(--neutrals-foreground-subtle, #006B99);
        font-size: 0.875rem;
      }
      :host(.divider-top) {
        border-top: 2px solid var(--neutrals-border-subtle, #C8EAF9);
      }
      :host(.divider-bottom) {
        border-bottom: 2px solid var(--neutrals-border-subtle, #C8EAF9);
      }
      :host(.category) {
        pointer-events: none;

      }
      :host(.category) .menu-item__label{
        color: var(--neutrals-foreground-subtle, #006B99);
        font-size: 0.875rem;
        font-weight: 600;
      }
      :host(.level2) .menu-item__label  {
        color: var(--neutrals-foreground-mute, #3C3F44);
        padding: var(--spacing-small, 0.75rem) 0px var(--spacing-small, 0.75rem) var(--spacing-x-large, 2rem);
      }
      `
    ];
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-menu-item': NveMenuItem;
  }
}
