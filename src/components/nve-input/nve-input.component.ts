import { customElement, property } from 'lit/decorators.js';
import { SlInput } from '@shoelace-style/shoelace';
import styles from './nve-input.styles';

/**
 * En sl-input i NVE-forkledning.
 * Mer info: https://shoelace.style/components/input
 *
 * Vil du ha info-ikon med hjelpetekst etter ledeteksten, putt en nve-label i label-slot.
 *
 * Disse attributtene skal ikke brukes:
 * - pill
 *
 * TODO: Utropstegn-ikon ved valideringsfeil
 * TODO: Vise valideringsfeil med rød tekst under tekstfeltet
 */
@customElement('nve-input')
export default class NveInput extends SlInput {
  /**
   * Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard.
   */
  @property() requiredLabel = '*Obligatorisk';

  constructor() {
    super();
  }

  static styles = [SlInput.styles, styles];

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('requiredLabel')) {
      this.style.setProperty('--sl-input-required-content', `"${this.requiredLabel}"`);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-input': NveInput;
  }
}
