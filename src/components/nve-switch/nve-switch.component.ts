import { customElement, property, query } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { CSSResultArray, html, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './nve-switch.styles';
/**
 * En vippe-bryter med støtte for ikoner.
 *
 * @slot - Tekst etter bryteren
 * @slot onicon - Det første ikonet (til venstre). Synlig når status er PÅ
 * @slot officon - Det andre ikonet (til høyre). Synlig når status er AV
 *
 * @event change Bryter endres
 *
 * @csspart base Topp-element
 * @csspart control Element rundt bryteren
 * @csspart thumb Bryter-indikatoren
 * @csspart label Tekst bak bryteren
 */
@customElement('nve-switch')
export default class NveSwitch extends LitElement implements INveComponent {
  constructor() {
    super();
  }
  @property({ type: String }) testId: string = '';
  /** Navn på switch */
  @property() name = '';
  /** Switchens verdi, bruk i forms */
  @property() value: string = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Verdien til switchen. */
  @property({ type: Boolean, reflect: true }) checked = false;
  /** Bestemmer fargevariant */
  @property() variant: 'primary' | 'default' = 'default';
  /** Plassering av label-tekst i forhold til bryteren */
  @property({ attribute: 'label-position' }) labelPosition: 'start' | 'end' = 'end';

  /** Hidden checkbox som holder state */
  @query('input[type="checkbox"]') input!: HTMLInputElement;

  static styles: CSSResultArray = [styles];

  focus(options?: FocusOptions) {
    this.input!.focus(options);
  }

  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
        detail: { value: this.value }, //usikker om vi trenger value her
      })
    );
  }

  render() {
    return html`
      <label
        part="base"
        class=${classMap({
          switch: true,
          'switch--disabled': this.disabled,
          'switch__label--start': this.labelPosition === 'start',
        })}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${ifDefined(this.value)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          role="switch"
          @change=${this.handleChange}
        />
        <span
          part="control"
          class=${classMap({
            switch__control: true,
            'switch--primary': this.variant === 'primary',
          })}
        >
          <span class="switch__icon switch__officon"><slot name="officon"></slot></span>
          <span part="thumb" class="switch__thumb"></span>
          <span class="switch__icon switch__onicon"><slot name="onicon"></slot></span>
        </span>

        <span part="label">
          <slot></slot>
        </span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-switch': NveSwitch;
  }
}
