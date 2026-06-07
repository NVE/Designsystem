import { LitElement, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import '../nve-icon/nve-icon.component';
import '../nve-button/nve-button.component';
import styles from './nve-dialog.styles';
import { ifDefined } from 'lit/directives/if-defined.js';

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
  /** Teksten i overskriften */
  @property({ type: String }) label = '';
  @property({ type: String }) closedBy?: 'any' | 'none' | 'closerequest' = undefined; // this is not supported yet, but we can add it later if needed. requestclose is the standard
  @query('dialog') private dialogEl!: HTMLDialogElement;

  @state() private hasFooter = false;

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

  returnvalue could be interesting

  read more about requestclose

  evenct cancel and close


  write that this is not possible 
  Modal dialogs using invoker commands
Modal dialogs can be declaratively opened and closed using the Invoker Commands API HTML attributes commandfor and command, which can be set on <button> elements.
The command attribute sets the particular command that is to be sent when the <button> element is clicked, while commandfor sets the id of the target dialog. The commands that can be sent for dialogs are "show-modal", "close", and "request-close".

also this
Non-modal dialogs can be declaratively opened, closed, and toggled using the Popover API HTML attributes popovertarget and popovertargetaction, which can be defined on <button> and <input> elements.

and this one 
There are numerous ways to close a dialog:
Submitting the form within the <dialog> element with method="dialog" set on the <form> element (see the Using the dialog open attribute example).

The autofocus attribute should be added to the element the user is expected to interact with immediately upon opening a modal dialog. If no other element involves more immediate interaction, it is recommended to add autofocus to the close button inside the dialog, or the dialog itself if the user is expected to click/activate it to dismiss.

Do not add the tabindex property to the <dialog> element as it is not interactive and does not receive focus. The dialog's contents, including the close button contained in the dialog, can receive focus and be interactive.
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

  // vi skal ikke bruke disse metodene, de skal kalles pa selve dialogen for a vaere native akkurat na er de ikke det
  /** Viser dialogen.
   * The show() method of the HTMLDialogElement interface displays the dialog as a non-modal dialog.

A non-modal dialog is one where users can interact with content outside/behind the open dialog.
   * 
   * 
   */
  async show() {
    this.dialogEl.showModal();
  }

  /** Skjuler dialogen. */
  async hide() {
    this.doClose();
  }

  private async doClose() {
    if (!this.dialogEl || !this.dialogEl.open) return;

    this.dialogEl.classList.add('dialog--closing');

    await new Promise((resolve) => setTimeout(resolve, 250));

    this.dialogEl.classList.remove('dialog--closing');
    this.dialogEl.close();
  }

  private handleFooterSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    this.hasFooter = slot.assignedNodes({ flatten: true }).length > 0;
  };

  private renderHeader() {
    return html`
      <header part="header" class="dialog__header">
        <!-- Ikon skal være slot -->
        <slot name="start-header-icon"></slot>
        ${this.label.length > 0 ? html`<h2 part="title" id="title" class="dialog__title">${this.label}</h2>` : nothing}
        <div part="header-actions" class="dialog__header-actions">
          <slot name="end-header-icon"></slot>
          <nve-button variant="ghost" @click=${this.hide} part="close-button" aria-label="Close dialog">
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
          dialog: true,
          'dialog--has-footer': this.hasFooter,
        })}
        closedby=${ifDefined(this.closedBy)}
        aria-labelledby="title"
      >
        <div part="panel" class="dialog__panel">
          ${this.renderHeader()}

          <div part="body" class="dialog__body">
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
