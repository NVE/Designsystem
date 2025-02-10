
import styles from './nve-carousel.styles';
import { customElement, property, query } from 'lit/decorators.js';
import { PropertyValues } from 'lit';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { SlCarousel } from '@shoelace-style/shoelace';

  @customElement('nve-carousel')
  export default class NveCarousel extends SlCarousel implements INveComponent {

  /* Fjerne? */
  @property({reflect: true, type: String}) testId: string | undefined = undefined;
  /* Bildebeskrivelse */
  @property({ type: String, reflect: true }) description = '';
  /* Slot til innhold i karusellen */
  @query('slot') slot: any;

  static styles = [styles];

  constructor() {
    super();
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('title')) {
      this.style.setProperty('--nve-carousel-description', `"${this.description}"`);
    }
  }

  render() {
      return html`
        <fieldset
          class="checkbox-group"
          aria-required=${this.required}
          aria-labelledby="label"
          aria-describedby="error-message"
          aria-errormessage="error-message"
        >
          ${this.label
          ? html`<div class="checkbox-group__label">
                <nve-label id="label" value=${this.label} size="small" tooltip=${this.tooltip!}></nve-label>
              </div>`
          : null}
          <slot class="checkbox-group__checkboxes"></slot>
          ${this.showErrorMessage
          ? html`<span role="alert" id="error-message" class="checkbox-group__error-message"
                >${this.errorMessage || null}</span
              >`
          : null}
        </fieldset>
      `;
    }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel': NveCarousel;
  }
}