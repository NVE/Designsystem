import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-message-card.styles';
import '../nve-icon/nve-icon.component';

/**
 * Minner om en nve-alert, men skal fortrinnsvis vises hele tiden, ikke bare som et resultat av en hendelse.
 * Nve-message-card inneholder gjerne mer informasjon enn nve-alert.
 * Den er ment for å hjelpe brukere, for eksempel i skjemaer.
 *
 * @dependency nve-icon
 *
 * @slot subheader - brukes til ekstra tekst over label.
 * @slot footer - brukes til evt. knapperad nederst.
 *
 * @event nve-hide - Emittes når kortet lukkes.
 *
 * @csspart base - hele komponenten.
 * @csspart header - alt som er over brødteksten
 * @csspart subheader - ekstra tekst over label
 * @csspart label - tittel i header-seksjonen.
 * @csspart footer - evt. knapperad nederst.
 */
@customElement('nve-message-card')
export default class NveMessageCard extends LitElement implements INveComponent {
  @property({ reflect: true, type: String }) testId: string = '';
  /** Sett denne for sterkere bakgrunnsfarge */
  @property({ type: String, reflect: false }) saturation: 'emphasized' | null = null;
  /** Sett størrelse på kortet */
  @property({ reflect: true }) size: 'default' | 'compact' | 'simple' = 'default';
  /** Bruk denne for å lukk-knappen i høyre hjørne */
  @property({ type: Boolean, reflect: true }) closable: boolean = false;
  /** Styrer visning av ikon foran label */
  @property({ reflect: true }) showIcon: 'true' | 'false' = 'true';
  /** Tittel / overskrift */
  @property({ reflect: true }) label: string = '';
  /** Bruk denne til å overstyre standard-ikonet foran label */
  @property({ reflect: true }) iconTitle: string = '';
  /** Bestemmer farge */
  @property({ reflect: true }) variant: 'neutral' | 'primary' | 'warning' | 'danger' | 'success' = 'primary';
  //vurdere showheader
  static styles = [styles];

  constructor() {
    super();
  }

  private handleClose() {
    const element = this.shadowRoot?.querySelector('.message-card');

    element?.classList.add('message-card-remove');

    this.dispatchEvent(
      new CustomEvent('nve-hide', {
        detail: { message: 'Message card is being hidden' },
        bubbles: true,
        composed: true,
      })
    );
    // Fjerne fra DOMen etter transition er ferdig
    element?.addEventListener(
      'transitionend',
      () => {
        this.remove();
      },
      { once: true }
    );
  }

  private determineIcon() {
    if (this.iconTitle) {
      return this.iconTitle;
    } else {
      switch (this.variant) {
        case 'neutral':
        case 'primary':
          return 'info';
        case 'warning':
          return 'warning';
        case 'danger':
          return 'error';
        case 'success':
          return 'check_circle';
      }
    }
  }

  render() {
    return html`
      <div
        part="base"
        class="${classMap({
          'message-card': true,
          'message-card--neutral': this.variant === 'neutral',
          'message-card--primary': this.variant === 'primary',
          'message-card--warning': this.variant === 'warning',
          'message-card--danger': this.variant === 'danger',
          'message-card--success': this.variant === 'success',
        })}"
      >
        <div class="message-card__header-container">
          <div part="header" class="message-card__header">
            <slot part="subheader" name="subheader" class="message-card__subheader"></slot>
            <div part="label" class="message-card__header-label">
              ${this.showIcon === 'true' ? html`<nve-icon name=${this.determineIcon()}></nve-icon>` : null}
              ${this.label ? html`<span>${this.label}</span>` : null}
            </div>
          </div>
          ${this.closable
            ? html`<button type="button" class="message-card__close-btn" @click=${this.handleClose}>
                <nve-icon name="close"></nve-icon>
              </button>`
            : null}
        </div>
        ${this.size !== 'simple'
          ? html` <slot part="body" class="message-card__body" aria-live="assertive"></slot>
              <slot name="footer" part="footer"></slot>`
          : null}
      </div>
    `;
  }
}

//skal den også forsvinne etter en bestemt tid?

declare global {
  interface HTMLElementTagNameMap {
    'nve-message-card': NveMessageCard;
  }
}
