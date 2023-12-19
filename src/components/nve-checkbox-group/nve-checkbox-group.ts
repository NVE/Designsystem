import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import styles from './nve-checkbox-group.styles';

@customElement('nve-checkbox-group')
/**
 * Representerer en tilpasset sjekboksgruppekomponent.
 * Denne komponenten burde brukes kun med <nve-checkbox> komponent. isValid property endrer fargene på alle
 * <nve-checkbox> komponenter som er wrappet i <nve-checkbox-group>
 * */
export class NveCheckboxGroup extends LitElement {
  constructor() {
    super();
  }

  @property({ type: Boolean }) isValid = true;
  @property() label?: string;
  @property() tooltip?: string;
  @property() orientation: 'horizontal' | 'vertical' = 'vertical';
  @property() errorMessage?: string;
  @query('slot') slot: any;

  static styles = [styles];

  updated(changedProperties: any) {
    if (changedProperties.has('isValid') && this.isValid !== undefined) {
      // retrieves all elements assigned to the default slot
      const assignedElements: Element[] = this.slot.assignedElements({ flatten: true });
      const nveCheckboxes: Element[] = assignedElements.filter((element) => element.localName === 'nve-checkbox');

      if (this.isValid) {
        nveCheckboxes.forEach((ch) => {
          ch.setAttribute('isValid', 'false');
        });
      } else {
        nveCheckboxes.forEach((ch) => {
          ch.setAttribute('isValid', 'true');
        });
      }
    }
  }

  render() {
    return html`
      <div class="checkbox-group">
        <div class="checkbox-group__label">
          <nve-label value=${this.label} size="small" tooltip=${this.tooltip}></nve-label>
        </div>
        <slot class="checkbox-group__checkboxes"></slot>
        ${!this.isValid ? html`<span class="checkbox-group__error-message">${this.errorMessage || null}</span>` : null}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox-group': NveCheckboxGroup;
  }
}
