import { customElement, property } from 'lit/decorators.js';
import { SlButton } from '@shoelace-style/shoelace';
import styles from './nve-button.styles';

/**
 * En Shoelace-knapp i NVE-forkledning.
 * Se https://shoelace.style/components/button
 *
 * For å lage en lenke knapp legg til href på nve-button og den skal automatisk bli gjort om til <a>
 *
 * Vi skal ikke bruke properties:
 * - circle
 * - caret
 * - pill
 */
@customElement('nve-button')
export class NveButton extends SlButton {
  constructor() {
    super();
  }
  @property() hasSuffix = 'false';
  static styles = [SlButton.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
