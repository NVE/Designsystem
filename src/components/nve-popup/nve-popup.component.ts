import { customElement } from 'lit/decorators.js';
import SlPopup from '@shoelace-style/shoelace/dist/components/popup/popup.js';

/**
 * En sl-popup med NVE design.
 * Mer info: https://shoelace.style/components/popup
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
