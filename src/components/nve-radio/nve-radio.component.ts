import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-radio.styles';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * En enkel radio som skal brukes i nve-radio-group.
 */
@customElement('nve-radio')
export default class NveRadio extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  @property({ type: String }) value = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) invalid = false;

  @state() size = 'medium';
  @state() checked = false;
  @state() pos: number | null = null;
  @state() setsize: number | null = null;

  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'radio');
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', String(this.checked));
    }
    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', String(this.disabled));
    }
    if (changedProperties.has('invalid')) {
      this.setAttribute('aria-invalid', String(this.invalid));
    }
    if (changedProperties.has('pos') || changedProperties.has('setsize')) {
      this.setAttribute('aria-posinset', String(this.pos));
      this.setAttribute('aria-setsize', String(this.setsize));
    }
  }

  private handleClick() {
    if (this.disabled) return;

    this.dispatchEvent(
      new CustomEvent('radio-select', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
  }

  focus(options?: FocusOptions) {
    super.focus(options);
  }

  render() {
    return html`
      <span
        test-id=${ifDefined(this.testId)}
        class=${classMap({
          radio: true,
          [`radio--${this.size}`]: true,
          'radio--checked': this.checked,
          'radio--disabled': this.disabled,
          'radio--invalid': this.invalid,
        })}
        @click=${this.handleClick}
      >
        <span class="radio__circle" aria-hidden="true"></span>
        <span class="radio__label"><slot></slot></span>
      </span>
    `;
  }
}
