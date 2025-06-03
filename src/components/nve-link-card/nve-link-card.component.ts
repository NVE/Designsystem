import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-link-card.styles';

/**
 * Komponent som brukes til å navigere til interne, eksterne sider, laste ned filer, eller sende e-post.
 */
@customElement('nve-link-card')
export default class NveLinkCard extends LitElement implements INveComponent {
  /** Tittel som vises øverst på kortet */
  @property({ reflect: true }) label: string = '';

  /** Tilleggsbeskrivelse som vises under tittelen */
  @property({ reflect: true }) additionalText?: string;

  /** Størrelse på kortet, kan være 'small', 'medium' eller 'large' */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Variant som bestemmer stilen på kortet: 'primary', 'contrast', eller 'secondary' */
  @property({ reflect: true }) variant: 'primary' | 'contrast' | 'secondary' = 'primary';

  /** Test ID som kan brukes i testing og sporing */
  @property({ reflect: true }) testId: string | undefined = undefined;

  /** Definerer hva som skjer når kortet klikkes: 'internal' (intern lenke), 'download' (nedlasting), 'external' (ekstern lenke), eller 'mail' (e-post) */
  @property({ reflect: true }) clickAction: 'internal' | 'download' | 'external' | 'mail' = 'internal';

  /** Lenken som brukes for handlinger som intern/ekstern navigering eller e-post */
  @property({ reflect: true }) href: string | undefined = undefined;

  /** Valgfri nedlastingsfunksjon som kan overstyres for å implementere spesifikk nedlastingslogikk */
  @property() downloadHandler: () => void = this.defaultDownloadHandler;

  /** Tilpasset klikk-handler som kan brukes til å overstyre standard atferd (f.eks. i Vue med vue-router) */
  @property() customClickHandler?: (event: MouseEvent) => void;

  static styles = [styles];

  /**
   * Standard nedlastingsfunksjon som brukes hvis downloadHandler ikke er overstyrt.
   * Bruker lenken (href) til å laste ned en fil.
   */
  private async defaultDownloadHandler() {
    if (this.href) {
      const fileUrl = this.href;
      const fileName = fileUrl.split('/').pop() || 'download';
      try {
        const response = await fetch(fileUrl, { mode: 'cors' });
        if (!response.ok) throw new Error(`Failed to fetch file: ${response.statusText}`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Download failed:', error);
      }
    }
  }

  /**
   * Denne funksjonen bestemmer hva som skjer når kortet blir klikket, basert på verdien av clickAction.
   * Hvis Ctrl, Shift, Alt eller Meta er trykket, følger vi standard bruksmønstre:
   * Ctrl/Cmd + Klikk: Åpner lenken i en ny fane.
   * Shift + Klikk: Åpner lenken i et nytt vindu.
   * Alt + Klikk: Laster ned lenken (hvis det er en fil).
   * Hvis customClickHandler er definert, overstyres standard klikkatferd.
   */
  private handleClick(event: MouseEvent | KeyboardEvent) {
    // Overstyr standard klikkatferd med customClickHandler om den finnes
    if (this.customClickHandler) {
      if (event instanceof MouseEvent) {
        this.customClickHandler(event);
      }
      return;
    }
    if (this.href && (event.ctrlKey || event.metaKey)) {
      window.open(this.href, '_blank');
      return;
    }
    if (this.href && event.shiftKey) {
      window.open(this.href, '_blank', 'noopener,noreferrer');
      return;
    }
    if (event.altKey && this.clickAction === 'download' && this.href) {
      this.downloadHandler();
      return;
    }
    switch (this.clickAction) {
      case 'internal':
        if (this.href) window.location.href = this.href;
        break;
      case 'download':
        if (this.downloadHandler) this.downloadHandler();
        break;
      case 'external':
        if (this.href) window.open(this.href, '_blank');
        break;
      case 'mail':
        if (this.href) window.location.href = `mailto:${this.href}`;
        break;
    }
  }

  /**
   * Denne er lagt til slik man klikke på cardet ved bruk av tastaturet.
   */
  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.handleClick(event);
    }
  }

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

  render() {
    return html`
      <a
        part="link-card"
        class="link-card link-card--${this.size} link-card--${this.variant}"
        tabindex="0"
        @click="${this.handleClick}"
        @keydown="${this.handleKeyDown}"
      >
        <div class="link-card__content">
          <div part="label" class="link-card__label">${this.label}</div>
          ${this.additionalText
            ? html`<div part="additional-text" class="link-card__additional-text">${this.additionalText}</div>`
            : nothing}
        </div>
        <div>
          <nve-icon slot="suffix" name="${this.getIconName()}" style="font-size: 1.5rem;"></nve-icon>
        </div>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-link-card': NveLinkCard;
  }
}
