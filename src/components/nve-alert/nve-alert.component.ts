import { LitElement, PropertyValues, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-alert.styles';
import { classMap } from 'lit/directives/class-map.js';
import { animateTo } from '../../utils/animation';
import '../nve-icon/nve-icon.component';

/**
 * Brukes til å vise viktige beskjeder som toast. Dette er en komponent som bruker alert-rollen.
 * Hvis du trenger å vise en statisk varsling med mer informasjon, bruk nve-message-card.
 * Les mer i seksjonen om universel utforming.
 *
 * @slot - tekst - Hoved teksten i alerten.
 * @slot icon - Det første ikonet (til venstre).
 * @slot label - Overskriften for alerten.
 *
 * @event sl-after-hide Etter allerten er skjult
 * @event sl-after-show Etter allerten er vist
 * @event sl-show Når alerten blir vist
 * @event sl-hide Når alerten blir skjult
 *
 * @csspart base Topp-element
 * @csspart icon Ikonet til venstre
 * @csspart label Overskriften
 * @csspart message Hoved tekst
 *
 */
@customElement('nve-alert')
export default class NveAlert extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Overskriften */
  @property() label?: string;
  /** Hoved tekst */
  @property() text?: string;
  /** Bestemmer sterkere bakgrunnsfarge */
  @property() saturation?: 'emphasized';
  /** Ramme linje til venstre  */
  @property({ type: Boolean }) leftStroke: boolean = false;
  /** Bestemmer hvilken variant av alerten som skal brukes. */
  @property() variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';
  /** Om lukk knapp skal vises */
  @property({ type: Boolean }) closable = false;
  /** Om alerten er åpen. Hvis sant alerten vises, ellers er den skjult. */
  @property({ type: Boolean, reflect: true }) open = false;
  /** Hvor lenge alerten skal være åpen før den lukkes automatisk, i millisekunder. Altid er standard */
  @property({ type: Number }) duration = Infinity;
  /** Aria label på knapp med kun ikone. Lukk er standard. */
  @property({ type: String }) buttonLabel?: string = 'Lukk';
  /** Navnet på ikonet som skal vises til venstre siden av alerten.*/
  @property({ type: String }) iconName?: string;
  /** Om variant ikonen skal vises*/
  @property({ type: String }) showIcon: 'true' | 'false' = 'true';

  /**
   * @internal
   */
  @query('[part~="base"]') base?: HTMLElement; // referanse til base elementet for animasjoner og styling.
  /**
   * @internal
   */
  private _autoHideTimeout: ReturnType<typeof setTimeout> | undefined; // for å holde styr på auto-hide timeren når duration er gitt.
  private static currentToastStack: HTMLDivElement; //for å sørge at vi har en stack for toast alerts.
  /** Oppretter toast-stack hvis den ikke finnes. Returnerer toast-stack */
  private static get toastStack() {
    if (!this.currentToastStack) {
      this.currentToastStack = Object.assign(document.createElement('div'), {
        className: 'toast-stack',
      });
    }
    return this.currentToastStack;
  }
  static styles = [styles];

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.clearAutoHideTimer();
  }

  protected firstUpdated(): void {
    if (this.base) {
      this.base.hidden = !this.open;
    }
  }

  async updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('open')) {
      if (this.open) {
        this.dispatchEvent(new CustomEvent('sl-show', { bubbles: true, composed: true }));
      } else {
        this.dispatchEvent(new CustomEvent('sl-hide', { bubbles: true, composed: true }));
      }
    }
    if (changedProperties.has('duration') && this.open) {
      this.startAutoHideTimer();
    }
  }

  // Hvis duration er gitt, starter vi en timer for å lukke alerten automatisk.
  private startAutoHideTimer() {
    this.clearAutoHideTimer();
    if (this.duration !== Infinity && this.duration > 0) {
      this._autoHideTimeout = setTimeout(() => {
        this.hide();
      }, this.duration);
    }
  }

  private clearAutoHideTimer() {
    if (this._autoHideTimeout) {
      clearTimeout(this._autoHideTimeout);
      this._autoHideTimeout = undefined;
    }
  }

  private async handleCloseClick() {
    await this.hide();
  }
  /**
   * Viser alerten med animasjon.
   * Setter `open` til true, kjører visningsanimasjonen, og starter eventuell auto-hide timer.
   * Sender ut eventen `sl-after-show` når animasjonen er ferdig.
   *
   * @returns Promise som løses når animasjonen og oppdateringen er ferdig.
   */
  async show() {
    if (this.open) {
      return undefined;
    }
    this.open = true; // alert blir ikke display:none lenger

    // etter alert blir vist, kjører vi animasjonen.
    await animateTo(this.base!, this.getKeyframes().show, { easing: 'ease' });
    await this.updateComplete;
    this.dispatchEvent(new CustomEvent('sl-after-show', { bubbles: true, composed: true }));
    this.startAutoHideTimer();
  }

  /**
   * Skjuler alerten med animasjon.
   * Kjører skjuleanimasjonen før `open` settes til false.
   * Sender ut eventen `sl-after-hide` når animasjonen og oppdateringen er ferdig.
   * Stopper eventuell auto-hide timer.
   *
   * @returns Promise som løses når animasjonen og oppdateringen er ferdig.
   */
  async hide() {
    if (!this.open) {
      return undefined;
    }
    //vi kjører animasjonen før alert blir skjult.
    await animateTo(this.base!, this.getKeyframes().hide, { easing: 'ease' });
    this.open = false; // alert blir display:none
    await this.updateComplete;
    this.dispatchEvent(new CustomEvent('sl-after-hide', { bubbles: true, composed: true }));
    this.clearAutoHideTimer();
  }

  /**
   * Viser alerten som en toast-melding.
   * Legger alerten i toast-stacken, venter til den er rendret, og viser den med animasjon.
   * Fjerner alerten fra toast-stacken når den skjules, og fjerner stacken hvis det ikke er flere alerts igjen.
   *
   * @returns Promise som løses når alerten er skjult og fjernet fra DOM.
   */
  async toast() {
    return new Promise<void>((resolve) => {
      if (NveAlert.toastStack.parentElement === null) {
        document.body.append(NveAlert.toastStack);
      }

      NveAlert.toastStack.appendChild(this);

      // Venter når alert er lagt til i DOM med appencChild, og deretter kaller show metoden for å vise den med animasjon.
      requestAnimationFrame(() => {
        this.show();
      });

      this.addEventListener(
        'sl-after-hide',
        () => {
          NveAlert.toastStack.removeChild(this);
          resolve();

          // Fjerne toastStack hvis det ikke er flere alerts igjen.
          if (NveAlert.toastStack.querySelector('nve-alert') === null) {
            NveAlert.toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }

  private getVariantIconName() {
    if (this.showIcon === 'false') return '';
    if (this.iconName) {
      return this.iconName;
    }
    switch (this.variant) {
      case 'primary':
        return 'info';
      case 'success':
        return 'check_circle';
      case 'neutral':
        return 'info';
      case 'warning':
        return 'warning';
      case 'danger':
        return 'error';
      default:
        return '';
    }
  }

  /**
   * Returnerer keyframes for visnings- og skjuleanimasjoner.
   * Kan utvides med flere animasjoner hvis det trengs.
   *
   * @returns {object} Et objekt med keyframes for 'show' og 'hide'-animasjoner.
   */
  private getKeyframes() {
    return {
      show: [
        { opacity: 0, transform: 'scale(0.8)' },
        { opacity: 1, transform: 'scale(1)' },
      ],
      hide: [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0.8)' },
      ],
    };
  }

  render() {
    return html`
      <div
        role="alert"
        part="base"
        class=${classMap({
          alert: true,
          'alert--hidden': !this.open,
          'alert--primary': this.variant === 'primary',
          'alert--success': this.variant === 'success',
          'alert--neutral': this.variant === 'neutral',
          'alert--warning': this.variant === 'warning',
          'alert--danger': this.variant === 'danger',
          'alert--left-stroke': this.leftStroke,
          'alert--emphasized': this.saturation === 'emphasized',
        })}
      >
        <div part="icon" class="alert__icon">
          ${this.showIcon === 'true'
            ? html`
                <div part="icon" class="alert__icon">
                  ${!this.getVariantIconName()
                    ? html`<slot name="icon"></slot>`
                    : html`<nve-icon name="${this.getVariantIconName()}"></nve-icon>`}
                </div>
              `
            : nothing}
        </div>
        <div part="label">
          ${this.label ? html` <label part="label">${this.label}</label>` : html`<slot name="label"></slot>`}
        </div>
        <div part="message" class="alert__message">${!this.text ? html`<slot></slot>` : this.text}</div>
        ${this.closable
          ? html`
              <button
                @click=${this.handleCloseClick}
                class="alert__button"
                title=${this.buttonLabel}
                aria-label=${this.buttonLabel}
              >
                <nve-icon name="close"></nve-icon>
              </button>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-alert': NveAlert;
  }
}
