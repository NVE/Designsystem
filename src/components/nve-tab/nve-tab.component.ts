import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-tab.styles';
import { watch } from '../../utils/watch';
import { classMap } from 'lit/directives/class-map.js';

let id = 0;

/**
 * Knapp for å velge en fane.
 *
 * NveTab er selve knappen for å velge fane
 * NveTabPanel er innholdet for hver fane
 * NveTabGroup er den som disse skal ligge i
 * Disse kobles sammen med `panel` på NveTab som skal være det samme som `name` på NveTabPanel
 *
 * @csspart base - Hele komponenten er inne i denne.
 *
 */

@customElement('nve-tab')
export default class NveTab extends LitElement implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
  /** navn på NvePanel som denne er knyttet til */
  @property({ reflect: true, type: String }) panel: string = '';
  /** Setter til insaktiv */
  @property({ reflect: true, type: Boolean }) disabled: boolean = false;
  /** Settes av nve-tab-group */
  @property({ reflect: true, type: Boolean }) active: boolean = false;

  /** Spørring for selve faneknappen */
  @query('.tab') private tab!: HTMLElement;

  static styles = [styles];
  private readonly attrId = ++id;
  private readonly componentId = `nve-tab-${this.attrId}`;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
  }
  @watch('active')
  handleActiveChange() {
    this.setAttribute('aria-selected', this.active ? 'true' : 'false');
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }
  /** Gir faneknappen fokus */
  focus(options?: FocusOptions) {
    this.tab.focus(options);
  }

  /** Fjerner fokus fra faneknapp */
  blur() {
    this.tab.blur();
  }

  render() {
    // Vi må ha en id. Så dersom bruker ikke setter det, så gir vi den en basert på teller
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return html` <div
      part="base"
      class=${classMap({
        tab: true,
        'tab--active': this.active,
        'tab--disabled': this.disabled,
      })}
      tabindex=${this.disabled ? '-1' : '0'}
    >
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tab': NveTab;
  }
}
