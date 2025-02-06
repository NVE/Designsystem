import { customElement } from 'lit/decorators.js';
import SlPopup from '@shoelace-style/shoelace/dist/components/popup/popup.js';

/**
 * TODO: Mangler beskrivelse
 * 
 */
@customElement('nve-popup')
export default class NvePopup extends SlPopup {
  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-popup': NvePopup;
  }
}
