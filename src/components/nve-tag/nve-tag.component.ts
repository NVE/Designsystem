import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './nve-tag.styles';
/**
 * En tag som brukes for å vise litt info eller for filtre. Har en valgfri lukke-knapp
 *
 * @property {string} variant Fargen på tag. neutral, success, info, warning, error
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
@customElement('nve-tag')
export default class NveTag extends LitElement {
  static styles = [styles];
  /** Variant */
  @property({ type: String, reflect: true }) variant: 'neutral' | 'success' | 'info' | 'warning' | 'error' = 'neutral';
  /** Saturation - Hvor mettet fargen på tag er */
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
          tag: true,
          'tag--neutral': this.variant === 'neutral',
          'tag--info': this.variant === 'info',
          'tag--success': this.variant === 'success',
          'tag--warning': this.variant === 'warning',
          'tag--error': this.variant === 'error',
          'tag--small': this.size === 'small',
          'tag--medium': this.size === 'medium',
          'tag--saturation-emphasized': this.saturation === 'emphasized',
          'tag--saturation-subtle': this.saturation === 'subtle',
          'tag--saturation-default': this.saturation === 'default',
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
              class="tag-close"
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
    'nve-tag': NveTag;
  }
}
