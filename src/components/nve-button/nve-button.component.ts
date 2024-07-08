import { customElement, property } from 'lit/decorators.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
import styles from './nve-button.styles';
import { INveComponent } from '@interfaces/NveComponent.interface';

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
export default class NveButton extends SlButton implements INveComponent{
  constructor() {
    super();
  }
  static styles = [SlButton.styles, styles];
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'large';
  @property({reflect: true, type: String}) testId: string = '';

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
