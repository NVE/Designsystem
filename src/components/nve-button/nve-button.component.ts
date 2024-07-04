import { customElement, property } from 'lit/decorators.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
import styles from './nve-button.styles';

/**
 * Selveste NVE-knappen.
 * Bruk href for å gjøre den om til en link.
 * Disse feltene skal ikke brukes: circle, caret og pill
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
