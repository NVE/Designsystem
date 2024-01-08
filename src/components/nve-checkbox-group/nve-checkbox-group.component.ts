import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '../nve-label/nve-label.component';
import styles from './nve-checkbox-group.styles';

@customElement('nve-checkbox-group')
/**
 * Representerer en tilpasset sjekboksgruppekomponent.
 * Denne komponenten burde brukes kun med <nve-checkbox> komponent. isValid property endrer fargene på alle
 * <nve-checkbox> komponenter som er wrappet i <nve-checkbox-group>
 * @slot default - innholder alle nve-checkbox komponenter for global style styring og validering
 * */
export default class NveCheckboxGroup extends LitElement {
  constructor() {
    super();
  }

  /**
   * Bestemmer om sjekkboksgruppe er valid. Hvis ikke alle sjekkbokser i gruppe blir markert som feil
   */
  @property({ type: Boolean, reflect: true }) invalid = false;
  /**
   * Disable eller enable gruppa
   */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /**
   * Viser label til en gruppe
   */
  @property() label?: string;
  /**
   * Viser i ikone og tooltip tekst ved siden av label. Skal ikke fungere uten label
   */
  @property() tooltip?: string;
  /**
   * Om gruppen skal rendres horisontalt eller vertikalt
   */
  @property() orientation: 'horizontal' | 'vertical' = 'vertical';
  /**
   * Viser feil melding under gruppen
   */
  @property() errorMessage?: string;
  @query('slot') slot: any;

  static styles = [styles];

  updated(changedProperties: any) {
    const assignedElements: Element[] = this.slot.assignedElements({ flatten: true });
    const nveCheckboxes: Element[] = assignedElements.filter((element) => element.localName === 'nve-checkbox');
    if (changedProperties.has('invalid') && this.invalid !== undefined) {
      // retrieves all elements assigned to the default slot

      if (this.invalid) {
        nveCheckboxes.forEach((ch) => {
          ch.setAttribute('invalid', '');
        });
      } else {
        nveCheckboxes.forEach((ch) => {
          ch.removeAttribute('invalid');
        });
      }
    }

    if (changedProperties.has('disabled')) {
      if (this.disabled) {
        nveCheckboxes.forEach((ch) => {
          ch.setAttribute('disabled', '');
        });
      } else {
        nveCheckboxes.forEach((ch) => {
          ch.removeAttribute('disabled');
        });
      }
    }
  }

  render() {
    return html`
      <div class="checkbox-group">
        ${this.label
          ? html`<div class="checkbox-group__label">
              <nve-label value=${this.label} size="small" tooltip=${this.tooltip!}></nve-label>
            </div>`
          : null}
        <slot class="checkbox-group__checkboxes"></slot>
        ${this.invalid ? html`<span class="checkbox-group__error-message">${this.errorMessage || null}</span>` : null}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox-group': NveCheckboxGroup;
  }
}
