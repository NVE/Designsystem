import { LitElement, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import '../nve-button/nve-button.component';
import styles from './nve-modal.styles';
import { ifDefined } from 'lit/directives/if-defined.js';

let openModalCount = 0; // Teller hvor mange modaler som er åpne. Hvis det er mer enn 0, skal vi låse scrollingen på siden.
let scrollY = 0; // Lagrer den opprinnelige scrollposisjonen på siden før vi låser scrollingen. Når modalen lukkes, skal vi rulle tilbake til denne posisjonen.

/**
 * Låser siden for scrolling når en modal er åpen.
 */
function lockPageScroll() {
  if (openModalCount++ > 0) return;

  scrollY = window.scrollY;

  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
}

/**
 * Låser opp siden for scrolling når alle modaler er lukket.
 */
function unlockPageScroll() {
  if (--openModalCount > 0) return;

  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';

  window.scrollTo(0, scrollY);
}

/**
 * En modal dialog for å vise viktig innhold eller handlinger som krever brukerens oppmerksomhet.
 * Kan brukes til bekreftelser, skjemaer, ekstra informasjon eller andre oppgaver som skal løses
 * før brukeren går videre.
 *
 * Komponenten bruker det native dialog-elementet med showModal(), låser siden mens den er åpen
 * og viser et backdrop bak innholdet.
 *
 * @slot  hovedinnholdet (body)
 * @slot end-icon  ikon etter overskriften
 * @slot start-icon  ikon foran overskriften
 * @slot footer  feltet i bunnen hvor knappene er plassert
 * @slot header-actions  valgfrie handlinger i headeren
 *
 * @event cancel  Når brukeren trykker Escape. Kan forhindres med `preventDefault()`
 * @event close  Når dialogen lukkes (fra `dialog.close()`)
 *
 * @csspart base  Dialog-elementet
 * @csspart overlay  Overlegget bak dialogen - den skal ikke styles
 * @csspart panel  Dialogens panel
 * @csspart header  Headeren
 * @csspart title  Tittelen
 * @csspart header-actions  Header handlinger
 * @csspart close-button  Lukk-knappen
 * @csspart body  Innhold
 * @csspart footer  Footer
 *
 * @dependency nve-button
 */
@customElement('nve-modal')
export default class NveModal extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Teksten i overskriften. Den er påkrevd */
  @property({ type: String }) label: string = '';
  /** Bestemmer hvordan modalen kan lukkes. Standard er 'closerequest' som er satt opp når modalen åpnes */
  @property({ type: String }) closedBy?: 'any' | 'none' | 'closerequest' = undefined;
  /** Sett størrelse på kortet */
  @property({ type: String }) size: 'default' | 'compact' = 'default';
  @query('.modal') private dialogEl!: HTMLDialogElement;
  /** Om dialogen har en footer */
  @state() private hasFooter = false;

  static styles = styles;

  /** Den skal ikke være en property fordi det ikke er anbefalt å åpne modalen med open-property lenger. */
  @state() private _open = false;

  /** Om modalen er åpen. Kun lesbar. */
  get open(): boolean {
    return this._open;
  }

  private setOpenState(isOpen: boolean) {
    this._open = isOpen;
    this.toggleAttribute('open', isOpen);
  }

  firstUpdated() {
    if (!this.label) {
      console.warn(
        'Accessibility warning: nve-modal should have a label for screen readers. Set the label attribute or add a slot="label".'
      );
    }
  }

  disconnectedCallback() {
    if (this.dialogEl?.open) {
      this.dialogEl.close();
    }
    super.disconnectedCallback();
  }
  /** Viser dialogen */
  async show() {
    this.dialogEl.showModal();
    this.setOpenState(true);
    lockPageScroll();
    await this.focusAutofocusTarget();
  }

  /**
   * Modalen fokuserer vanligvis det første elementet med `autofocus`, men det kan være vanskelig med webkomponenter, siden de:
   * kjører `autofocus` første gang de dukker opp i DOM-en, og da er ikke modalen åpen ennå.
   * derfor venter vi til modalen er åpen og kjører `autofocus` på nytt.
   */
  private async focusAutofocusTarget() {
    await this.updateComplete;

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => resolve());
    });

    const autofocusTarget = this.querySelector<HTMLElement>('[autofocus]');
    if (!autofocusTarget) {
      return;
    }

    autofocusTarget.focus();
  }

  /** Skjuler dialogen. */
  async close() {
    this.closeWithAnimation();
  }

  /**
   * Sender en forespørsel om å lukke dialogen.
   * Emitter cancel-eventet for å indikere at lukking er forespurt og close-eventet når dialogen faktisk lukkes.
   */
  async requestClose() {
    this.dialogEl.requestClose();
  }

  /** Lukker dialogen med en animasjon. */
  private async closeWithAnimation() {
    if (!this.dialogEl || !this.dialogEl.open) return;

    this.dialogEl.classList.add('modal--closing');

    await new Promise((resolve) => setTimeout(resolve, 250));

    this.dialogEl.classList.remove('modal--closing');
    this.dialogEl.close();
    this.setOpenState(false);
    unlockPageScroll();
  }

  /** Håndterer endringer i footer-slotten for å oppdatere hasFooter-tilstanden. */
  private handleFooterSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    this.hasFooter = slot.assignedNodes({ flatten: true }).length > 0;
  };

  /** Håndterer cancel-eventet fra dialogen. Emitter cancel-eventet videre for å indikere at lukking er forespurt. */
  private handleCancel = (event: Event) => {
    event.preventDefault(); // Forhindre at dialogen lukkes
    this.closeWithAnimation();
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
  };

  /** Håndterer close-eventet fra dialogen. Emitter close-eventet videre for å indikere at dialogen faktisk er lukket. */
  private handleClose = () => {
    this.setOpenState(false);
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  };

  private renderHeader() {
    return html`
      <header part="header" class="modal__header">
        <slot name="start-icon"></slot>
        ${this.label.length > 0 ? html`<h2 part="title" id="title" class="modal__title">${this.label}</h2>` : nothing}
        <div part="header-actions" class="modal__header-actions">
          <slot name="end-icon"></slot>
          <nve-button variant="ghost" @click=${this.close} part="close-button" aria-label="Lukk modalen">
            <nve-icon name="close"></nve-icon>
          </nve-button>
        </div>
      </header>
    `;
  }

  /* 
  If a dialog contains the final step in a process that is not easily reversible, such as deleting data or completing a financial transaction, it may be advisable to set focus on the least destructive action, especially if undoing the action is difficult or impossible. The Alert Dialog Pattern is often employed in such circumstances.
  */
  render() {
    return html`
      <dialog
        part="base"
        class=${classMap({
          modal: true,
          'modal--has-footer': this.hasFooter,
        })}
        closedby=${ifDefined(this.closedBy)}
        aria-labelledby="title"
        @cancel=${this.handleCancel}
        @close=${this.handleClose}
      >
        <div
          part="panel"
          class=${classMap({
            modal__panel: true,
            'modal__panel--default': this.size === 'default',
            'modal__panel--compact': this.size === 'compact',
          })}
        >
          ${this.renderHeader()}

          <div part="body" class="modal__body">
            <slot></slot>
          </div>

          <footer part="footer" class="modal__footer">
            <slot name="footer" @slotchange=${this.handleFooterSlotChange}></slot>
          </footer>
        </div>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-modal': NveModal;
  }
}
