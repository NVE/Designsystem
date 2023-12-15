import { customElement } from 'lit/decorators.js';
import { SlCheckbox } from '@shoelace-style/shoelace';
import styles from './nve-checkbox.styles';

@customElement('nve-checkbox')
export class NveCheckbox extends SlCheckbox {
  constructor() {
    super();
  }
  // checkbox bruker checbkox sl-icon og jeg tror vi kan la den være sånn for nå. hvis design folka sier at vi ikke burde bruke den
  // foreløpig finnes det ikke noe hover styling i skissene så jeg bare slår av hover styling
  static styles = [SlCheckbox.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox': NveCheckbox;
  }
}
