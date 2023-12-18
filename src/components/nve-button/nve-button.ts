import { customElement } from 'lit/decorators.js';
import { SlButton } from '@shoelace-style/shoelace';
import styles from './nve-button.styles';

/**
 * En Shoelace-knapp i NVE-forkledning.
 * Se https://shoelace.style/components/button
 *
 * TODO: Beskriv hvilke properties / attributter og varianter vi ikke skal bruke
 */
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
