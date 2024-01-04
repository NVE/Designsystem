import { customElement, property } from 'lit/decorators.js';
import { SlCheckbox } from '@shoelace-style/shoelace';
import styles from './nve-checkbox.styles';

// checkbox bruker checbkox sl-icon og jeg tror vi kan la den være sånn for nå. hvis design folka sier at vi ikke burde bruke den
// må vi mest sannsynligvis skrive vår egen checkbox (wrapping vil ikke hjelpe fordi sl-icon er hjemt i sl-checkbox så vi må forke den for å tilpasse).

/**
 * foreløpig finnes ikke noe hove
 */
@customElement('nve-checkbox')
export default class NveCheckbox extends SlCheckbox {
  constructor() {
    super();
  }

  /** Checks if input is valid */
  @property({ type: Boolean, reflect: true }) invalid = false;
  static styles = [SlCheckbox.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox': NveCheckbox;
  }
}
