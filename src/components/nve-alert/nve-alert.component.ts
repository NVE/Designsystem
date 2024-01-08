import { SlAlert } from '@shoelace-style/shoelace';
import styles from './nve-alert.styles';
import { customElement, property } from 'lit/decorators.js';

@customElement('nve-alert')
export default class NveAlert extends SlAlert {
  constructor() {
    super();
  }
  @property({ reflect: true }) title: string = '';
  @property({ reflect: true }) text: string = '';
  @property({ type: Boolean, reflect: true }) emphasized: boolean = false;
  @property({ type: Boolean, reflect: true }) leftStroke: boolean = false;

  static styles = [
    SlAlert.styles, // we have to have this otherwise closable is not working
    styles,
  ];

  updated(changedProperties: any) {
    if (changedProperties.has('title')) {
      this.style.setProperty('--nve-alert-title', `"${this.title}"`);
    }
    if (changedProperties.has('text')) {
      this.style.setProperty('--nve-alert-text', `"${this.text}"`);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-alert': NveAlert;
  }
}
