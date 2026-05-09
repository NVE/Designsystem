import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-radio-button.styles';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * En enkel radio som skal brukes i nve-radio-group.
 */
@customElement('nve-radio-button')
export default class NveRadioButton extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  @property({ type: String }) value = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) invalid = false;

  @state() size = 'medium';
  @state() checked = false;
  @state() pos: number | null = null;
  @state() setsize: number | null = null;
  /**
   * @internal
   */
  @query('.radio-button') button!: HTMLButtonElement | HTMLLinkElement;

  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'radio');
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
    this.button.focus(options);
  }

  render() {
    return html`
      <button
        tabindex="-1"
        test-id=${ifDefined(this.testId)}
        class=${classMap({
          'radio-button': true,
          [`radio-button--${this.size}`]: true,
          'radio-button--selected': this.checked,
          'radio-button--disabled': this.disabled,
          'radio-button--invalid': this.invalid,
          'radio-button--first': this.pos === 1,
          'radio-button--last': this.setsize !== null && this.pos === this.setsize,
          'aria-checked': this.checked,
          'aria-disabled': this.disabled,
          'aria-invalid': this.invalid,
          'aria-posinset': this.pos !== null ? this.pos : false,
          'aria-setsize': this.setsize !== null ? this.setsize : false,
        })}
        @click=${this.handleClick}
        part="base"
        role="radio"
      >
        <slot name="start"></slot>
        <span class="radio__label"><slot></slot></span>
        <slot name="end"></slot>
      </button>
    `;
  }
}
