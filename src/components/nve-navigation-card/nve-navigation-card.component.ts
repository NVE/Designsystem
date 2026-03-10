import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-navigation-card.styles';
import '../nve-icon/nve-icon.component';

/**
 * Denne komponenten er ment å brukes som hovednavigasjon på sider, for eksempel transportside (i motsetning til `nve-link-card`, som er mindre og brukes der navigasjonen ikke er hovedfokus).
 *
 * Komponenten brukes i grid-oppsett, har minimum og maksimum høyde, og støtter enten ikon (SVG/PNG, kun dekorativt, angis via path) eller tilleggstekst (maks 3 linjer, trunkeres automatisk) – aldri begge samtidig.
 *
 * Ikon angis med `iconPath`-prop og rendres automatisk med aria-hidden. Bruk kun illustrasjonsikoner fra NVE.
 *
 * @csspart navigation-card Topp-elementet for kortet
 * @csspart label Overskriften på kortet
 * @csspart leading-icon Ikonet øverst i kortet
 * @csspart content Innholdet i kortet
 * @csspart additional-text Ekstra tekst under overskriften
 */
@customElement('nve-navigation-card')
export default class NveNavigationCard extends LitElement implements INveComponent {
  /** Test ID som kan brukes i testing og sporing */
  @property({ type: String }) testId: string | undefined = undefined;

  /** Tittel som vises øverst på kortet (må settes) */
  @property({ type: String }) label = '';

  /**
   * Lenke for navigasjon (må settes for at kortet skal være klikkbart).
   * Hvis du bruker komponenten uten å wrappe den i et rammeverks-router-element (f.eks. Vue Router eller React Router), må `href` settes.
   */
  @property({ type: String }) href = '';

  /** Ekstratekst som vises under tittelen (maks 3 linjer, trunkeres) */
  @property({ type: String }) additionalText: string | undefined = undefined;

  /** Definerer hva som skjer når kortet klikkes: 'internal' (intern lenke), 'download' (nedlasting), 'external' (ekstern lenke) */
  @property({ type: String }) clickAction: 'internal' | 'download' | 'external' = 'internal';

  /** Path til ikon som vises øverst i kortet (dekorativt) */
  @property({ type: String }) iconPath: string | undefined = undefined;

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
      default:
        return 'arrow_forward';
    }
  }

  /**
   * Genererer innholdet i kortet.
   * Viser ikon (hvis iconPath), tittel og ev. additionalText.
   */
  private renderContent() {
    return html`
      <div part="content" class="navigation-card__content">
        ${this.iconPath
          ? html`<img
              part="leading-icon"
              src="${this.iconPath}"
              alt=""
              aria-hidden="true"
              class="navigation-card__icon"
            />`
          : nothing}
        <h2 part="label" class="navigation-card__label">${this.label}</h2>
        ${!this.iconPath && this.additionalText
          ? html`<p part="additional-text" class="navigation-card__additional-text">${this.additionalText}</p>`
          : nothing}
      </div>
      <nve-icon
        aria-hidden="true"
        name="${this.getIconName()}"
        class="navigation-card__arrow"
        style="--icon-size: 24px;"
      />
    `;
  }

  /**
   * Rendrer kortet som <a> hvis ikke parent er en lenke,
   * ellers som <div> for å unngå nestede lenker (SPA-routing).
   */
  render() {
    const isParentLink =
      this.parentElement?.tagName.toLowerCase() === 'a' || this.parentElement?.getAttribute('role') === 'link';

    if (isParentLink) {
      return html`
        <div part="navigation-card" class="navigation-card" testid=${ifDefined(this.testId)}>
          ${this.renderContent()}
        </div>
      `;
    }

    return html`
      <a
        testid=${ifDefined(this.testId)}
        ?download=${this.clickAction === 'download'}
        part="navigation-card"
        class="navigation-card"
        href="${ifDefined(this.href)}"
        target=${this.clickAction === 'external' ? '_blank' : nothing}
      >
        ${this.renderContent()}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-navigation-card': NveNavigationCard;
  }
}
