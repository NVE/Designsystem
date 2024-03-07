import { customElement, property } from 'lit/decorators.js';
import styles from './nve-badge.styles';
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

/**
 * En liten etikett som vanligvis vises inne i eller i nærheten av en annen større grensesnittkomponent, som representerer en status, egenskap eller andre metadata.
 * Kan også brukes med knappen som i Shoelace
 * Importerer ingen styles fra shoelace derfor pill og pulse property skal ikke fungere.
 * @property {string} size = small, medium eller large
 * @property {string} variant = primary, success, neutral, warning, danger, brand
 * @property {boolean} low = viser svakere farger på badgen
 */
@customElement('nve-badge')
export default class NveBadge extends LitElement {
  static styles = [styles];
  /** Variant */
  @property({ type: String, reflect: true }) variant:
    | 'primary'
    | 'success'
    | 'neutral'
    | 'warning'
    | 'danger'
    | 'brand' = 'primary';
  /** Størrelse på komponenten */
  @property({ type: String, reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Viser Low variant, High er default */
  @property({ type: Boolean, reflect: true }) low = false;
  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          badge: true,
          'badge--primary': this.variant === 'primary',
          'badge--success': this.variant === 'success',
          'badge--neutral': this.variant === 'neutral',
          'badge--warning': this.variant === 'warning',
          'badge--danger': this.variant === 'danger',
          'badge--brand': this.variant === 'brand',
          'badge--small': this.size === 'small',
          'badge--medium': this.size === 'medium',
          'badge--large': this.size === 'large',
          low: this.low,
        })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-badge': NveBadge;
  }
}
