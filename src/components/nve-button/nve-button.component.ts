import { customElement, property } from 'lit/decorators.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
import styles from './nve-button.styles';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { applyStyles } from '@utils/styles';
import { applySlotStyle } from '@utils/slot';

/**
 * En Shoelace-knapp i NVE-forkledning.
 * Se https://shoelace.style/components/button
 * 
 * For å lage en lenke knapp legg til href på nve-button og den skal automatisk bli gjort om til <a>
 * 
 *  Vi skal ikke bruke properties:
 * - circle
 * - caret
 * - pill
 * 
 * Denne komponenten lar tilpassede stiler brukes på knappen og dens slots.
 * Det inkluderer egenskaper for størrelse, testId, egendefinerte stiler og slot spesifikke stiler.
 */
@customElement('nve-button')
export default class NveButton extends SlButton implements INveComponent {
  constructor() {
    super();
  }
  static styles = [SlButton.styles, styles];

  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'large';
  @property({ reflect: true, type: String }) testId: string = '';

  /** 
  * Egendefinerte stiler som skal brukes på knappen. 
  */
  @property({ reflect: true, type: String }) customStyle?: string;

  /**
    * Egendefinerte stiler som skal brukes på sporene i knappen   
   */
  @property({ reflect: true, type: String }) slotStyle?: string;

    /**
   * Sørger for at customStyle og slotStyle blir satt på, hvis de er tilstede i properties
   * 
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('customStyle') && this.customStyle) {
      const buttonElement = this.renderRoot.querySelector('.button') as HTMLElement;
      if (buttonElement) {
        applyStyles(buttonElement, this.customStyle);
      }
    }
    if (changedProperties.has('slotStyle') && this.slotStyle) {
      applySlotStyle(this.slotStyle, this);
    }
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
