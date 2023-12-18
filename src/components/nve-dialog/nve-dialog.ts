import { customElement, property } from 'lit/decorators.js';
import { SlDialog } from '@shoelace-style/shoelace';
import { css, html } from 'lit';
import styles from './nve-dialog-styles';
/**
 * En sl-dialog i NVE-forkledning.
 * Mer info: https://shoelace.style/components/dialog
 *
 * Vil du ha ikon foran tittelen kan du angi navnet på ikonet som attributt "icon"
 * 
 * @slot label - teksten som skal vises. Eller du kan bruke label-attributtet
 * @slot body - hovedinnholdet
 * @slot footer - i bunden hvor knappene er plassert
 *
 */
@customElement('nve-dialog')
export class NveDialog extends SlDialog {
    /**
   * Ikonet som skal vises
   */
  @property({ type: String, reflect: true }) icon = '';

  constructor() {
    super();
  }

  updated(changedProperties: any) {
    super.updated(changedProperties);
    this.updateIcon();
    
    
  }
  updateIcon() {
    const titleElement = this.shadowRoot?.querySelector('.dialog__title');
    if (titleElement instanceof HTMLElement) { 
      const iconContent = this.icon ? `"${this.icon}"` : 'none'; //contentet blir satt til none så det ikke lager mellomrom
      titleElement.style.setProperty('--title-icon', iconContent);
    }
  }

  static styles = [
    SlDialog.styles,
    styles
  ];
  
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-dialog': NveDialog;
  }
}
