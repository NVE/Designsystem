import SlDialog from '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-dialog-styles';
/**
 * En dialogboks.
 * Vil du ha ikon foran overskriften, bruk `icon`.
 * Skal det ikke være mulig å trykke utenfor for å lukke dialogen, bruk `disableBackground`.
 *
 * @slot label - teksten som skal vises i overskriften. Eller du kan bruke label-attributtet
 * @slot body - hovedinnholdet
 * @slot footer - feltet i bunnen hvor knappene er plassert
 */
@customElement('nve-dialog')
export default class NveDialog extends SlDialog {
  /**
   * Ikonet som skal vises
   */
  @property({ type: String, reflect: true }) icon = '';
  /**
   * Hvis denne er satt, kan man ikke trykke utenfor dialogen for å lukke den.
   */
  @property({ type: Boolean, reflect: true }) disableBackground = false;

  constructor() {
    super();
  }

  /**
   * Stjålet fra shoelace eksempel. Hindrer at man lukker dialogen ved å trykke utenfor
   */
  handleRequestClose(event: CustomEvent) {
    if (this.disableBackground && event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('disableBackground')) {
      this.addEventListener('sl-request-close', this.handleRequestClose);
    }
    this.updateIcon();
  }

  /**
   * Oppdaterer ikonet som vises i dialogens tittel.
   * Metoden søker først etter tittel-elementet i komponentens skygge-DOM.
   * Hvis tittel-elementet finnes og `icon`-egenskapen er satt, oppdateres
   * tittel-elementets stil for å inkludere det angitte ikonet.
   * Hvis `icon`-egenskapen ikke er satt, settes ikoninnholdet til 'none'
   * for å unngå å skape unødvendig mellomrom i layouten.
   */
  updateIcon() {
    const titleElement = this.shadowRoot?.querySelector('.dialog__title');
    if (titleElement instanceof HTMLElement) {
      const iconContent = this.icon ? `"${this.icon}"` : 'none';
      titleElement.style.setProperty('--title-icon', iconContent);
    }
  }

  static styles = [SlDialog.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-dialog': NveDialog;
  }
}
