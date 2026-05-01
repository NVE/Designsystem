import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-radio.styles';
import { classMap } from 'lit/directives/class-map.js';
import '../nve-label/nve-label.component';
import { ifDefined } from 'lit/directives/if-defined.js';
@customElement('nve-radio')
export default class NveRadio extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** The radio's value. it's used to identify which radio button in a group is selected. */
  @property({ type: String }) value: string = '';
  /** Størrelse på radio-knappen */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Om radio-knappen er deaktivert */
  @property({ type: Boolean }) disabled = false;
  /** Om radio-knappen er ugyldig */
  @property({ type: Boolean }) invalid = false;
  @query('input') input!: HTMLInputElement;
  /** Om radio-knappen er valgt. Brukes i inputfeltet for å synkronisere elementets property */
  @state() checked = false;

  @state() name = '';

  static styles = [styles];

  constructor() {
    super();
  }

  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement;

    if (!input.checked) return;

    this.dispatchEvent(
      new CustomEvent('radio-select', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
  }

  /**
   * Fokus radio-knappen.
   * @param options
   */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  render() {
    return html`
      <label
        test-id=${ifDefined(this.testId)}
        class=${classMap({
          radio: true,
          [`radio--${this.size}`]: true,
          'radio--disabled': this.disabled,
          'radio--invalid': this.invalid,
        })}
      >
        <input
          class="radio__input"
          type="radio"
          .checked=${this.checked}
          aria-setsize="3"
          aria-posinset="1"
          value=${this.value}
          ?disabled=${this.disabled}
          tabindex="-1"
          name=${this.name}
          @change=${this.handleChange}
          aria-invalid=${ifDefined(this.invalid ? 'true' : undefined)}
        />
        <div class="radio__circle"></div>
        <slot></slot>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio': NveRadio;
  }
}
