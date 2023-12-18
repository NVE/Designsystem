import { customElement, property } from 'lit/decorators.js';
import { SlDialog } from '@shoelace-style/shoelace';
import { css, html } from 'lit';

@customElement('nve-dialog')
export class NveDialog extends SlDialog{
  @property({ type: String }) variant = '';
  constructor() {
    super();
  }
  injectIcon() {
    if (this.variant !== '') {
      const header = this.shadowRoot?.querySelector('.dialog__title');
      const existingIcon = header?.querySelector('.custom-icon');
    if (!header || existingIcon) {
      return; 
    }
    const icon = document.createElement('nve-icon');
    icon.setAttribute('name', this.variant); 
    icon.classList.add('custom-icon'); 
    header.prepend(icon); 
      
    }
  }

  updated(changedProperties: any) {
    super.updated(changedProperties);
    this.injectIcon();
  }
  static styles = [
    SlDialog.styles,
    css`
    :host{
      --header-spacing: var(--spacing-x-large, 2rem);
      --body-spacing: var(--spacing-x-large, 2rem);
      --footer-spacing: var(--spacing-x-large, 2rem);

    }

    .dialog__footer {
      display: flex;
      text-align: left;
      gap: 0.75rem;

    }
    .custom-icon {
      // Style for the icon
      flex-shrink: 0;  // Prevent the icon from shrinking
      // Add more styling as needed
    }
    .dialog__title{
      display: flex;        
      align-items: center;  
      gap: 0.5rem; 
      color: var(--neutrals-foreground-primary, #00131C);
      font-family: Source Sans Pro;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;
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
      font-family: Source Sans Pro;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
    .dialog__close {
      display: none;
    }
    `,
  ];
  
 
  handleClose() {
    this.hide(); // This method is inherited from SlDialog
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-dialog': NveDialog;
  }
}
