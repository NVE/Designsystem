import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-tab.styles';
import { watch } from '../../utils/watch';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Knapp for å velge en fane.
 *
 * NveTab er selve knappen for å velge fane
 * NveTabPanel er innholdet for hver fane
 * NveTabGroup er den som disse skal ligge i
 * Disse kobles sammen med `panel` på NveTab som skal være det samme som `name` på NveTabPanel
 *
 */

let id = 0;

@customElement('nve-tab')
export default class NveTab extends LitElement implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
  @property({ reflect: true, type: String }) panel: string = '';
  @property({ reflect: true, type: Boolean }) disabled: boolean = false;
  /** Settes av nve-tab-group */
  @property({ reflect: true, type: Boolean }) active: boolean = false;

  @query('.tab') tab!: HTMLElement;

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
  /** Sets focus to the tab. */
  focus(options?: FocusOptions) {
    this.tab.focus(options);
  }

  /** Removes focus from the tab. */
  blur() {
    this.tab.blur();
  }

  render() {
    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
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
