import { customElement, property } from 'lit/decorators.js';
import SlRadioButton from '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import styles from './nve-radio-button.styles';

/**
 * En sl-radio-button med NVE design.
 *
 * Merk at denne har ekstra hjørne-styling på første og siste knapp i gruppen.
 * Man må derfor unngå å ha andre elementer blant nve-radio-button
 *
 * I motsetning til vanlig button så har denne støtte for "pill", men gjelder også da kun første og siste knapp
 *
 *  @extends SlRadioButton
 */

@customElement('nve-radio-button')
export default class NveRadioButton extends SlRadioButton {
  constructor() {
    super();
  }
  static styles = [SlRadioButton.styles, styles];
  @property({ reflect: true, type: String }) testId: string = '';
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-button': NveRadioButton;
  }
}
