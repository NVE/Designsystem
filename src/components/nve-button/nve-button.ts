import { customElement } from 'lit/decorators.js';
import { SlButton } from '@shoelace-style/shoelace';
import styles from './nve-button.styles';

@customElement('nve-button')
export class NveButton extends SlButton {
  constructor() {
    super();
  }

  static styles = [SlButton.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
