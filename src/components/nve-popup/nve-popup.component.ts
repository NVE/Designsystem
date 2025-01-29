import { customElement } from 'lit/decorators.js';
import SlPopup from '@shoelace-style/shoelace/dist/components/popup/popup.js';

/**
 * Popup er et verktøy som lar deg deklarativt forankre "popup"-beholdere til et annet element.
 * Popup gir ingen stiler - bare posisjonering! 
 * Popup-vinduets foretrukne plassering, avstand og skrens (offset) kan konfigureres ved hjelp av attributter. 
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
