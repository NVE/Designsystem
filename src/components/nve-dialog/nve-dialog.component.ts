import { LitElement, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import '../nve-icon/nve-icon.component';
import styles from './nve-dialog.styles';

/**
 * En dialogboks som bruker native dialog-element.
 * Vil du ha ikon foran overskriften, bruk `icon`.
 * Skal det ikke være mulig å trykke utenfor for å lukke dialogen, bruk `disableBackground`.
 *
 * Bruker native dialog-API:
 * - `cancel`-event fra Escape-tasten (kan forhindres med `preventDefault()`)
 * - `close`-event når dialogen lukkes (fra `dialog.close()`)
 * - `showModal()` viser dialogen
 *
 * @slot label - teksten som skal vises i overskriften. Eller du kan bruke label-attributtet
 * @slot - hovedinnholdet (body)
 * @slot footer - feltet i bunnen hvor knappene er plassert
 * @slot header-actions - valgfrie handlinger i headeren
 *
 * @event cancel - Når brukeren trykker Escape. Kan forhindres med `preventDefault()`
 * @event close - Når dialogen lukkes (fra `dialog.close()`)
 *
 * @csspart base - Dialog-elementet
 * @csspart overlay - Overlegget bak dialogen
 * @csspart panel - Dialogens panel
 * @csspart header - Headeren
 * @csspart title - Tittelen
 * @csspart header-actions - Header handlinger
 * @csspart close-button - Lukk-knappen
 * @csspart body - Innhold
 * @csspart footer - Footer
 *
 * @cssproperty --width - Bredden på dialogen
 * @cssproperty --header-spacing - Padding for headeren
 * @cssproperty --body-spacing - Padding for innholdet
 * @cssproperty --footer-spacing - Padding for footeren
 */
@customElement('nve-dialog')
export default class NveDialog extends LitElement implements INveComponent {
  @property({ reflect: true }) testId: string | undefined = undefined;
  /** Ikonet som skal vises */
  @property({ type: String, reflect: true }) icon = '';
  /** Hvis denne er satt, kan man ikke trykke utenfor dialogen for å lukke den. */
  @property({ type: Boolean, reflect: true }) disableBackground = false;
  /** Om dialogen er åpen. Kan settes som attributt eller via show()/hide(). */
  @property({ type: Boolean, reflect: true }) open = false;
  /** Teksten i overskriften */
  @property({ reflect: true }) label = '';
  /** Skjuler headeren. Sørg for at label fortsatt er satt for tilgjengelighet. */
  @property({ attribute: 'no-header', type: Boolean, reflect: true }) noHeader = false;

  @query('dialog') private dialogEl!: HTMLDialogElement;
  @query('.dialog__panel') private panelEl!: HTMLElement;
  @query('.dialog__overlay') private overlayEl!: HTMLElement;

  @state() private hasFooter = false;

  private originalTrigger: HTMLElement | null = null;

  firstUpdated() {
    if (this.open) {
      this.doOpen();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.dialogEl?.open) {
      this.dialogEl.close();
    }
  }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('open') && changedProperties.get('open') !== undefined) {
      if (this.open) {
        this.doOpen();
      } else {
        this.doClose();
      }
    }
  }

  /** Viser dialogen. */
  async show() {
    if (this.open) return;
    this.open = true;
  }

  /** Skjuler dialogen. */
  async hide() {
    if (!this.open) return;
    this.open = false;
  }

  private doOpen() {
    if (!this.dialogEl || this.dialogEl.open) return;

    this.originalTrigger = document.activeElement as HTMLElement;
    this.dialogEl.showModal();

    this.panelEl?.animate?.(
      [
        { opacity: 0, transform: 'scale(0.8)' },
        { opacity: 1, transform: 'scale(1)' },
      ],
      { duration: 250, easing: 'ease', fill: 'forwards' }
    );

    this.overlayEl?.animate?.([{ opacity: 0 }, { opacity: 1 }], {
      duration: 250,
      easing: 'ease',
      fill: 'forwards',
    });
  }

  private async doClose() {
    if (!this.dialogEl || !this.dialogEl.open) return;

    const panelAnimation = this.panelEl?.animate?.(
      [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0.8)' },
      ],
      { duration: 250, easing: 'ease', fill: 'forwards' }
    );

    this.overlayEl?.animate?.([{ opacity: 1 }, { opacity: 0 }], {
      duration: 250,
      easing: 'ease',
      fill: 'forwards',
    });

    if (panelAnimation) {
      await panelAnimation.finished;
    }

    this.dialogEl.close();

    if (typeof this.originalTrigger?.focus === 'function') {
      setTimeout(() => this.originalTrigger!.focus());
    }
  }

  /** Forhindrer native Escape-lukking slik at vi kan animere før lukking */
  private handleCancel = (event: Event) => {
    event.preventDefault();
    this.hide();
  };

  /** Håndterer klikk på overlegget */
  private handleOverlayClick = () => {
    if (!this.disableBackground) {
      this.hide();
    }
  };

  private handleFooterSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    this.hasFooter = slot.assignedNodes({ flatten: true }).length > 0;
  };

  private renderHeader() {
    if (this.noHeader) return nothing;

    return html`
      <header part="header" class="dialog__header">
        <h2 part="title" class="dialog__title" id="title">
          ${this.icon ? html`<nve-icon name=${this.icon} class="dialog__title-icon"></nve-icon>` : nothing}
          <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
        </h2>
        <div part="header-actions" class="dialog__header-actions">
          <slot name="header-actions"></slot>
          <button part="close-button" class="dialog__close" aria-label="Lukk" @click=${() => this.hide()}>
            <nve-icon name="close"></nve-icon>
          </button>
        </div>
      </header>
    `;
  }

  render() {
    return html`
      <dialog
        part="base"
        class=${classMap({
          dialog: true,
          'dialog--has-footer': this.hasFooter,
        })}
        aria-label=${this.noHeader ? this.label : nothing}
        aria-labelledby=${!this.noHeader ? 'title' : nothing}
        @cancel=${this.handleCancel}
      >
        <div part="overlay" class="dialog__overlay" @click=${this.handleOverlayClick} tabindex="-1"></div>

        <div part="panel" class="dialog__panel" tabindex="-1">
          ${this.renderHeader()}

          <div part="body" class="dialog__body" tabindex="-1">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer" @slotchange=${this.handleFooterSlotChange}></slot>
          </footer>
        </div>
      </dialog>
    `;
  }

  static styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-dialog': NveDialog;
  }
}
