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
  /** The checkbox's value. When selected, the checkbox group will receive this value. */
  @property({ reflect: true }) value: string | null = null;
  @query('input') input!: HTMLInputElement;
  static styles = [styles];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.label) {
      console.warn(
        'nve-checkbox-demo: label is not set. It is recommended to set a label for each checkbox component for better accessibility.'
      );
    }
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('indeterminate') && this.input) {
      this.input.indeterminate = this.indeterminate;
    }
  }

  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.indeterminate = false;
    //emit event but also tests if native events are emitted at all!
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
      <!-- 
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
      </label> -->
      <label class="class=${classMap(classes)}">
        <input
          type="checkbox"
          .checked=${this.checked}
          value=${this.label}
          name="option"
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <svg
          class="checkbox__checkmark"
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.81667 6.5L0 3.66667L0.833333 2.83333L2.81667 4.8L7.63333 0L8.46667 0.85L2.81667 6.5Z"
            fill="white"
          />
        </svg>
        <svg
          class="checkbox__indeterminate"
          width="8"
          height="2"
          viewBox="0 0 8 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1.2V0H8V1.2H0Z" fill="white" />
        </svg>

        ${ifDefined(this.label) ? html`${this.label}` : html`<slot></slot>`}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox-demo': NveCheckboxDemo;
  }
}
