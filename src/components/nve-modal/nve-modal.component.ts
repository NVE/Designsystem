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
 * Komponenten bruker det native `<dialog>`-elementet med `showModal()`, låser siden mens den er åpen
 * og viser et backdrop bak innholdet.
 *
 * @slot - hovedinnholdet (body)
 * @slot end-icon - ikon etter overskriften
 * @slot start-icon - ikon foran overskriften
 * @slot footer - feltet i bunnen hvor knappene er plassert
 * @slot header-actions - valgfrie handlinger i headeren
 *
 * @event cancel - Når brukeren trykker Escape. Kan forhindres med `preventDefault()`
 * @event close - Når dialogen lukkes (fra `dialog.close()`)
 *
 * @csspart base - Dialog-elementet
 * @csspart overlay - Overlegget bak dialogen - den skal ikke styles
 * @csspart panel - Dialogens panel
 * @csspart header - Headeren
 * @csspart title - Tittelen
 * @csspart header-actions - Header handlinger
 * @csspart close-button - Lukk-knappen
 * @csspart body - Innhold
 * @csspart footer - Footer
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

  @state() private _open = false;

  /** Om modalen er åpen. Kun lesbar. */
  get open(): boolean {
    return this._open;
  }

  private setOpenState(isOpen: boolean) {
    this._open = isOpen;
    this.toggleAttribute('open', isOpen);
  }

  //private originalTrigger: HTMLElement | null = null; // trenger ikke det, dialog fikser det selv

  /* 
  TODOS:
  - use close nve-button ghost instead of a custom
  - fikse layout
  - mangler scroll lock styling 
  - vurdere a bruke closedby (any, none, closerequest) closerequest is standard
  - ikon skal vaere slot
  - check if autofocus will work on the buttons
  - test height with tons of text (scrolling)

  returnvalue we wont support it casue it requires a lot of custom logic, and is just simpler for developers
  to write logic directly there in the code where they use dialog

  read more about requestclose

  evenct cancel and close


  write that this is not possible 
  Modal dialogs using invoker commands
Modal dialogs can be declaratively opened and closed using the Invoker Commands API HTML attributes commandfor and command, which can be set on <button> elements.
The command attribute sets the particular command that is to be sent when the <button> element is clicked, while commandfor sets the id of the target dialog. The commands that can be sent for dialogs are "show-modal", "close", and "request-close".

and this one 
There are numerous ways to close a dialog:
Submitting the form within the <dialog> element with method="dialog" set on the <form> element (see the Using the dialog open attribute example).

The autofocus attribute should be added to the element the user is expected to interact with immediately upon opening a modal dialog. If no other element involves more immediate interaction, it is recommended to add autofocus to the close button inside the dialog, or the dialog itself if the user is expected to click/activate it to dismiss.

Do not add the tabindex property to the <dialog> element as it is not interactive and does not receive focus. The dialog's contents, including the close button contained in the dialog, can receive focus and be interactive.
  */

  /*
Correct docs: 
this component is gonna be a modal only, not a dialog. So all functionality regarding modal should be in place.
- dialog opens with showModal() - done 
- dialog has closedby closerequest since its opened by showModal - should be automatic (https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#:~:text=If%20the%20%3Cdialog%3E%20element%20does%20not%20have%20a%20valid%20closedby%20value%20specified%2C%20then)
- Modal dialog boxes block interaction with other UI elements, making the rest of the page inert
- The dialog box can be closed using the close() method. Modal dialogs can also be closed by pressing the Esc key.
- Modal dialogs can be declaratively opened and closed using the Invoker Commands API HTML attributes commandfor and command - this wont work
- Submitting the form within the <dialog> element with method="dialog" set on the <form> element (see the Using the dialog open attribute example). - we wont support it
- The autofocus attribute should be added to the element the user is expected to interact with immediately upon opening a modal dialog. If no other element involves more immediate interaction, it is recommended to add autofocus to the close button inside the dialog, or the dialog itself if the user is expected to click/activate it to dismiss. - retninglinjer
- Do not add the tabindex property to the <dialog> element as it is not interactive and does not receive focus. The dialog's contents, including the close button contained in the dialog, can receive focus and be interactive.
-  When implementing modal dialogs, everything other than the <dialog> and its contents should be rendered inert using the inert attribute. When using <dialog> along with the HTMLDialogElement.showModal() method, this behavior is provided by the browser.

closedBy any means both buttons or click outside, closerequest means only buttons, none only methods, or form methods

IMPORTANT when we open the modal with the keyboard first button in the dialog gets focused. however when you open the modal with the mouse,
and then click the tab, it doesnt focus the first button but the first focusbale element in the browser. it will eventually reach the button but it stops on
all the browser buttons first 

events:
cancel - done both esc and click on the backdrop call it
close - done

mthods:
showModal, -done
close, -done
requestclose - done

properties:
only closedby native is supported
open is not supported as its not recommended to be used by html specification https://html.spec.whatwg.org/multipage/interactive-elements.html#note-dialog-remove-open-attribute
returnValue is not supported. devs have to use close programatically in their apps anyway to close the dialog, so this doesnt need to be supported.

TEST
multiple modals opened - works
scroll lock - works
autofocus - works

write about moving focus otuside the modal but not within the page, tabbing happens in the browser and its buttons, those cant be blocked!
*/

  firstUpdated() {
    if (!this.label) {
      console.warn(
        'Accessibility warning: nve-dialog should have a label for screen readers. Set the label attribute or add a slot="label".'
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

  private async focusAutofocusTarget() {
    await this.updateComplete;

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => resolve());
    });

    const autofocusTarget = this.querySelector<HTMLElement>('[autofocus]');
    console.log('autofocusTarget', autofocusTarget);
    if (!autofocusTarget) {
      return;
    }

    autofocusTarget.focus();
  }

  /** Skjuler dialogen. */
  async close() {
    this.closeWithAnimation();
  }

  /** Sender en forespørsel om å lukke dialogen.
   * Emitter cancel-eventet for å indikere at lukking er forespurt og close-eventet når dialogen faktisk lukkes. */
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
