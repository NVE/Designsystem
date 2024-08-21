import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './nve-chip.styles';
/**
 * En chip/tag som brukes for å vise litt info eller for filtre. Har en valgfri lukke-knapp
 *
 * @property {string} variant Fargen på chip. neutral, success, info, warning, error
 * @property {string} saturation Hvor sterk fargen på bakgrunnen er. emphasized, subtle, default
 * @property {string} size Størrelse. small, medium
 *
 * @slot - Tekst på tag
 * @slot extra - Ekstra tekst etter hovedteksten. Vises som standard med slankere tekst
 * @slot prefix - Før teksten. Brukes til ikon
 *
 * @event nve-close Bruker klikket på lukk-knappen
 *
 * @csspart base Topp-element
 * @csspart text Hoved-teksten
 * @csspart extra Ekstra-tekst
 * @csspart close Lukk-ikon
 *
 */
@customElement('nve-chip')
export default class NveChip extends LitElement {
  static styles = [styles];
  /** Variant */
  @property({ type: String, reflect: true }) variant: 'neutral' | 'success' | 'info' | 'warning' | 'error' = 'neutral';
  /** Saturation - Hvor mettet fargen på chip er */
  @property({ type: String, reflect: true }) saturation: 'emphasized' | 'subtle' | 'default' = 'default';
  /** Størrelse på komponenten */
  @property({ type: String, reflect: true }) size: 'small' | 'medium' = 'medium';
  /** Ekstra tekst */
  @property({ type: String, reflect: false, attribute: true }) 'extra-text' = '';
  /** Viser dot-ikon i prefix */
  @property({ type: Boolean, reflect: false }) dot: boolean = false;
  /** Viser lukke-knapp */
  @property({ type: Boolean, reflect: false }) 'closeable': boolean = false;
  /** aria-label på lukke-knapp */
  @property({ type: String, reflect: false }) 'close-aria-label': string = 'Lukk';

  private closeButtonClick() {
    const event = new CustomEvent('nve-close', {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {},
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          chip: true,
          'chip--neutral': this.variant === 'neutral',
          'chip--info': this.variant === 'info',
          'chip--success': this.variant === 'success',
          'chip--warning': this.variant === 'warning',
          'chip--error': this.variant === 'error',
          'chip--small': this.size === 'small',
          'chip--medium': this.size === 'medium',
          'chip--saturation-emphasized': this.saturation === 'emphasized',
          'chip--saturation-subtle': this.saturation === 'subtle',
          'chip--saturation-default': this.saturation === 'default',
        })}
      >
        <slot name="prefix"
          >${this.dot
            ? html`<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5" r="5" fill="currentcolor" />
              </svg> `
            : nothing}</slot
        >
        <slot part="text"></slot>
        <slot name="extra" part="extra">${this['extra-text']}</slot>
        ${this['closeable']
          ? html`<button
              part="close"
              class="chip-close"
              aria-label="${this['close-aria-label']}"
              @click=${this.closeButtonClick}
            >
              <nve-icon name="close" library="Sharp"></nve-icon>
            </button>`
          : nothing}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-chip': NveChip;
  }
}
