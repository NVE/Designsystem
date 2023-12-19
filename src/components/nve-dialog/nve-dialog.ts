import { customElement, property } from 'lit/decorators.js';
import { SlDialog } from '@shoelace-style/shoelace';
import { css, html } from 'lit';
import styles from './nve-dialog-styles';
/**
 * En sl-dialog i NVE-forkledning.
 * Mer info: https://shoelace.style/components/dialog
 *
 * Vil du ha ikon foran tittelen kan du angi navnet på ikonet som attributt "icon".
 * Skal det ikke være mulig å trykke utenfor for å lukke dialogen, sett på disableDialog attributt
 * 
 * @slot label - teksten som skal vises i overskriften. Eller du kan bruke label-attributtet
 * @slot body - hovedinnholdet
 * @slot footer - feltet i bunden hvor knappene er plassert
 *
 */
@customElement('nve-dialog')
export class NveDialog extends SlDialog {
    /**
   * Ikonet som skal vises
   */
  @property({ type: String, reflect: true }) icon = '';
  /**
   * Hvis disableBacground er true, kan man ikke trykke utenfor dialogen for å lukke den. 
   */
  @property({ type: Boolean, reflect: true }) disableBackground = false;

  constructor() {
    super();
  }


  handleRequestClose(event: any) {
    if (this.disableBackground && event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }
  
  updated(changedProperties: any) {
    super.updated(changedProperties);
    if(changedProperties.has('disableBackground')){
      this.addEventListener('sl-request-close', this.handleRequestClose);
    }
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
