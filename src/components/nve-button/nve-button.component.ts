import { customElement, property } from 'lit/decorators.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
import styles from './nve-button.styles';
import { INveComponent } from '@interfaces/NveComponent.interface';

/**
 * Selveste NVE-knappen.
 * Bruk href for å gjøre den om til en link.
 * Disse feltene skal ikke brukes: circle, caret og pill
 */
@customElement('nve-button')
export default class NveButton extends SlButton implements INveComponent {
  constructor() {
    super();
  }
  static styles = [SlButton.styles, styles];
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'large';
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
