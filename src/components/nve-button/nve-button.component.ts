import { customElement, property } from 'lit/decorators.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
import styles from './nve-button.styles';

/**
 * Selveste NVE-knappen
 * Bruk `href` for å gjøre den om til en <a>
 *
 * Disse feltene skal ikke brukes:
 * - circle
 * - caret
 * - pill
 */
@customElement('nve-button')
export default class NveButton extends SlButton {
  constructor() {
    super();
  }
  static styles = [SlButton.styles, styles];
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'large';
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
