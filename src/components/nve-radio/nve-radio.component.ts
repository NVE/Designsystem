import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-radio.styles';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * En enkel radio som skal brukes i nve-radio-group.
 *
 * @event radio-select Når radio-knappen blir valgt. Inneholder den valgte verdien.
 *
 * @csspart base Hovedcontaineren for radio-knappen, som er en span.
 * @csspart label Innholdet i radio-knappen, vanligvis tekst.
 */
@customElement('nve-radio')
export default class NveRadio extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Verdi for radio-knappen. Skal samsvare med value i nve-radio-group for at knappen skal være valgt. */
  @property({ type: String }) value = '';
  /** Om radio-knappen er deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Om radio-knappen er ugyldig */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /** Størrelse på radio-knappen */
  @state() size = 'medium';
  /** Om radio-knappen er valgt */
  @state() checked = false;
  /** Posisjonen til radio-knappen i gruppen */
  @state() pos: number | null = null;
  /** Størrelsen på gruppen av radio-knapper */
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

  /**
   * Håndterer klikk på radio-knappen. Hvis knappen ikke er deaktivert, sender den en 'radio-select' event
   * med den valgte verdien. Event sendes for intern kontroll i nve-radio-group, og skal ikke håndteres direkte av
   * brukere av nve-radio. For å håndtere endring av valgt radio-knapp, bruk 'change' eventen på nve-radio-group.
   */
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

  /**
   * Gir fokus til radio-knappen.
   * @param options Valgfri fokusinnstillinger.
   */
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
        part="base"
      >
        <span class="radio__circle" aria-hidden="true"></span>
        <span class="radio__label" part="label"><slot></slot></span>
      </span>
    `;
  }
}
