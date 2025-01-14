import SlOption from '@shoelace-style/shoelace/dist/components/option/option.js';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-option.styles';
import { PropertyValues } from 'lit';
/**
 * Representerer et valg i nve-select.
 */
@customElement('nve-option')
export default class NveOption extends SlOption {
  constructor() {
    super();
  }
  static styles = [SlOption.styles, styles];
  /**
   * Tekst som vises i select når denne er valgt. Default er at all råtekst vises.
   */
  @property() textLabel: string | undefined = undefined;

  /* Setter filled attributt på option når parent-select er filled, for å få annen hover-farge*/
  firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
    const select = this.closest('nve-select');
    if (select?.hasAttribute('filled')) {
      this.toggleAttribute('filled', true);
    } else {
      this.toggleAttribute('filled', false);
    }
  }

  /**
   * Gir tilbake plain-tekst-label som vises i select
   */
  override getTextLabel(): string {
    if (this.textLabel) {
      return this.textLabel;
    }
    return super.getTextLabel();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-option': NveOption;
  }
}
