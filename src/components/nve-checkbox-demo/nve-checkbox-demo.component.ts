import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-checkbox-demo.styles';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('nve-checkbox-demo')
export default class NveCheckboxDemo extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  @property() size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: String }) label = '';
  @property({ type: Boolean }) invalid = false;
  @property({ type: Boolean, reflect: true }) indeterminate = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) checked = false;
  @query('input') input!: HTMLInputElement;
  static styles = [styles];

  constructor() {
    super();
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('indeterminate') && this.input) {
      this.input.indeterminate = this.indeterminate;
    }
  }

  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.indeterminate = false;
    console.log`Checked: ${input.checked}`;
  }

  render() {
    const classes = {
      checkbox: true,
      [`checkbox--${this.size}`]: true,
      'checkbox--disabled': this.disabled,
      'checkbox--invalid': this.invalid,
    };
    //TODO: should i keep input inside the label or otuside?
    return html`
      <label class=${classMap(classes)} testId=${ifDefined(this.testId)}>
        <input
          class="checkbox__input"
          type="checkbox"
          .checked=${this.checked}
          value=${this.label}
          name="option"
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        ${ifDefined(this.label) ? html`<span class="checkbox__label">${this.label}</span>` : html`<slot></slot>`}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox-demo': NveCheckboxDemo;
  }
}
