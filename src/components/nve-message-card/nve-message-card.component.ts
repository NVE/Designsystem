import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-message-card.styles';
import '../nve-icon/nve-icon.component';

/** 
Brukes som veiledning i skjemaer eller som en informasjon til brukere. 
*
*
* Hvis du skal vise en popup som er et resultat av brukerinteraksjon (som for eksempel varsler, feil, osv.), 
* bør du gjerne bruke nve-alert. Nve-message-card skal inneholde mer informasjon og skal i utgangspunktet være 
* en statisk komponent. Den er ment for å hjelpe brukere, for eksempel i skjemaer.
* @dependency nve-icon
*
* @slot subheader - Ekstra informasjon i header seksjonen
* @slot footer - Ekstra informasjon i footer seksjonen
*
* @event nve-hide - Emittes når kortet lukkes.
*
* @csspart base - hoved komponent kontainer.
* @csspart header - header seksjonen.
* @csspart subheader - subheader seksjonen.
* @csspart label - tittel i header seksjonen.
* @csspart footer - footer seksjonen.
*/
@customElement('nve-message-card')
export default class NveMessageCard extends LitElement implements INveComponent {
  @property({ reflect: true, type: String }) testId: string = '';
  /** Bestemmer sterkere bakgrunnsfarge */
  @property({ type: String, reflect: false }) saturation: 'emphasized' | null = null;
  /** Bestemmer om størrelsen */
  @property({ reflect: true }) size: 'default' | 'compact' | 'simple' = 'default';
  /** Bestemmer om kort skal vise lukk knappen i høyre hjørnet */
  @property({ type: Boolean, reflect: true }) closable: boolean = false;
  /** Viser ikonen ved siden i header seksjonen */
  @property({ reflect: true }) showIcon: 'true' | 'false' = 'true';
  /** Tittel i header seksjonen */
  @property({ reflect: true }) label: string = '';
  /** Beskrivelse tekst under tittelen */
  @property({ reflect: true }) text: string = '';
  /** Man kan velge ikon i headeren, enten kommer en default en */
  @property({ reflect: true }) iconTitle: string = '';
  /** Bestemmer variant farge */
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
