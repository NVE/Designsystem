import { customElement, property } from 'lit/decorators.js';
import styles from './nve-badge.styles';
import { SlBadge } from '@shoelace-style/shoelace';

/**
 * Importerer ingen styles fra shoelace derfor pill og pulse property skal ikke fungere.
 * @property {string} size = small, medium eller large
 * @property {boolean} low = viser svakere farger på badgen
 */
@customElement('nve-badge')
export default class NveBadge extends SlBadge {
  static styles = [styles];

  constructor() {
    super();
  }
  /** Størrelse på komponenten */
  @property({ type: String, reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Viser Low variant, High er default */
  @property({ type: Boolean, reflect: true }) low = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-badge': NveBadge;
  }
}
