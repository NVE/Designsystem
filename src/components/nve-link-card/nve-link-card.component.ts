import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-link-card.styles';
import '../nve-icon/nve-icon.component';

/**
 * Komponent som brukes til å navigere til interne, eksterne sider, laste ned filer, eller sende e-post.
 * For å bruke komponenten på best og tilgjengelig måte les mer i tilgjengelighet seksjonen.
 *
 * @csspart link-card Topp-element
 * @csspart label Overskriften
 */
@customElement('nve-link-card')
export default class NveLinkCard extends LitElement implements INveComponent {
  /** Tittel som vises øverst på kortet */
  @property() label: string = '';

  /** Tilleggsbeskrivelse som vises under tittelen */
  @property() additionalText?: string;

  /** Størrelse på kortet, kan være 'small', 'medium' eller 'large' */
  @property() size: 'small' | 'medium' | 'large' = 'medium';
  /** Variant som bestemmer stilen på kortet: 'primary', 'contrast', eller 'secondary' */
  @property() variant: 'primary' | 'contrast' | 'secondary' = 'primary';

  /** Test ID som kan brukes i testing og sporing */
  @property() testId: string | undefined = undefined;

  /** Definerer hva som skjer når kortet klikkes: 'internal' (intern lenke), 'download' (nedlasting), 'external' (ekstern lenke), eller 'mail' (e-post) */
  @property({ type: String }) clickAction: 'internal' | 'download' | 'external' | 'mail' = 'internal';

  /** Lenken som brukes for handlinger som intern/ekstern navigering eller e-post */
  @property() href: string | undefined = undefined;

  /** Brukes for å legge :visited style når lenken kommer fra ekstern rammeverk som f.eks RouterLink i Vue */
  @property({ type: Boolean }) visited: boolean = false;
  static styles = [styles];

  /**
   * Returnerer ikonnavnet som vises på kortet basert på clickAction.
   */
  private getIconName() {
    switch (this.clickAction) {
      case 'internal':
        return 'arrow_forward';
      case 'download':
        return 'download';
      case 'external':
        return 'open_in_new';
      case 'mail':
        return 'mail';
      default:
        return 'arrow_forward';
    }
  }

  private renderContent() {
    return html`
      <div class="link-card__content">
        <div part="label" class="link-card__label">${this.label}</div>
        ${this.additionalText
          ? html`<div part="additional-text" class="link-card__additional-text">${this.additionalText}</div>`
          : nothing}
      </div>
      <nve-icon aria-hidden="true" slot="suffix" name="${this.getIconName()}" style="font-size: 1.5rem;"></nve-icon>
    `;
  }

  render() {
    const isParentLink =
      this.parentElement?.tagName.toLowerCase() === 'a' || this.parentElement?.getAttribute('role') === 'link';

    if (isParentLink)
      return html` <div
        part="link-card"
        testId="${ifDefined(this.testId)}"
        class=${classMap({
          'link-card': true,
          'link-card--visited': this.visited,
          [`link-card--${this.size}`]: true,
          [`link-card--${this.variant}`]: true,
        })}
      >
        ${this.renderContent()}
      </div>`;
    else
      return html`
        <a
          testId="${ifDefined(this.testId)}"
          ?download=${this.clickAction === 'download'}
          part="link-card"
          class="link-card link-card--${this.size} link-card--${this.variant}"
          href=${ifDefined(this.clickAction === 'mail' ? `mailto:${this.href}` : this.href)}
          target=${this.clickAction === 'external' ? '_blank' : nothing}
          >${this.renderContent()}
        </a>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-link-card': NveLinkCard;
  }
}
