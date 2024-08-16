import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-icon-button.styles';
import '../nve-icon/nve-icon.component';
import { ifDefined } from 'lit/directives/if-defined.js';
import NveButton from '../nve-button/nve-button.component';

/**
 * Knapp som viser kun ikon. Den har de samme egenskapene som en vanlig nve-button.
 *
 * @dependency nve-icon
 * @dependency nve-button
 */
@customElement('nve-icon-button')
export default class NveIconButton extends NveButton implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
  /** Navnet på ikonet som skal vises */
  @property({ reflect: true, type: String }) iconName: string = '';
  /** Den blir lest av hjelpemidler. Bruk den for optimal universell utforming og beskriv hva knappen gjør */
  @property({ reflect: true, type: String }) label: string | undefined = undefined;
  static styles = [styles];

  constructor() {
    super();
  }

  render() {
    return html`
      <nve-button
        aria-label=${ifDefined(this.label ? this.label : undefined)}
        loading=${ifDefined(this.loading ? true : undefined)}
        disabled=${ifDefined(this.disabled ? true : undefined)}
        size=${this.size}
        variant=${this.variant}
        testId=${ifDefined(this.testId ? this.testId : undefined)}
      >
        ${ifDefined(this.loading)
          ? ''
          : html`<nve-icon
              testId=${ifDefined(this.testId ? 'icon-${this.testId}' : undefined)}
              name=${this.iconName}
            ></nve-icon>`}
      </nve-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-icon-button': NveIconButton;
  }
}
