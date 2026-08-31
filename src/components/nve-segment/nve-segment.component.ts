import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-segment.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { IRadioControl } from '@interfaces/radiocontrol';

/**
 * En enkel segment som skal brukes i nve-segment-group. Segment er bygget på
 * radio-knapp prinsippet. Segment kan ha en start- og end-slot for å legge til ikoner eller andre elementer.
 *
 * @event segment-select Når segment-knappen blir valgt. Inneholder den valgte verdien.
 *
 * @csspart base Hovedcontaineren for segment-knappen, som er en span.
 * @csspart label Innholdet i segment-knappen, vanligvis tekst.
 */
@customElement('nve-segment')
export default class NveSegment extends LitElement implements INveComponent, IRadioControl {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Verdi for segment-knappen. Skal samsvare med value i nve-segment-group for at knappen skal være valgt. */
  @property({ type: String }) value = '';
  /** Om segment-knappen er deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Om segment-knappen skal ha pill-stil */
  @property({ type: Boolean, reflect: true }) pill = false;
  /** Om segment-knappen er ugyldig */
  @property({ type: Boolean, reflect: true }) invalid = false; //TODO: vurder om vi trenger det

  /** Størrelse på segment-knappen */
  @state() size = 'medium';
  /** Om segment-knappen er valgt */
  @state() checked = false;
  /** Posisjonen til segment-knappen i gruppen */
  @state() pos: number | null = null;
  /** Størrelsen på gruppen av segment-knapper */
  @state() setsize: number | null = null;

  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'radio');
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', String(this.checked));
    }
    if (changedProperties.has('disabled')) {
      this.toggleAttribute('aria-disabled', this.disabled);
    }

    if (changedProperties.has('invalid')) {
      this.toggleAttribute('aria-invalid', this.invalid);
    }

    if (changedProperties.has('pos')) {
      if (this.pos !== null) {
        this.setAttribute('aria-posinset', String(this.pos));
      } else {
        this.removeAttribute('aria-posinset');
      }
    }

    if (changedProperties.has('setsize')) {
      if (this.setsize !== null) {
        this.setAttribute('aria-setsize', String(this.setsize));
      } else {
        this.removeAttribute('aria-setsize');
      }
    }
  }

  /**
   * Håndterer klikk på segment-knappen. Hvis knappen ikke er deaktivert, sender den en 'segment-select' event
   * med den valgte verdien. Event sendes for intern kontroll i nve-segment-group, og skal ikke håndteres direkte av
   * brukere av nve-segment. For å håndtere endring av valgt segment-knapp, bruk 'change' eventen på nve-segment-group.
   */
  private handleClick() {
    if (this.disabled) return;

    this.dispatchEvent(
      new CustomEvent('segment-select', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
  }

  render() {
    return html`
      <span
        test-id=${ifDefined(this.testId)}
        class=${classMap({
          segment: true,
          [`segment--${this.size}`]: true,
          'segment--checked': this.checked,
          'segment--disabled': this.disabled,
          'segment--invalid': this.invalid,
          'segment--pill': this.pill,
        })}
        part="base"
      >
        <slot name="start"> </slot>
        <span class="segment__label" part="label"><slot></slot></span>
        <slot name="end"> </slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-segment': NveSegment;
  }
}
