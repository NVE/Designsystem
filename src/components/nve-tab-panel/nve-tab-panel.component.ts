import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-tab-panel.styles';
import { watch } from '../../utils/watch';
import { classMap } from 'lit/directives/class-map.js';

let id = 0;

@customElement('nve-tab-panel')
export default class NveTabPanel extends LitElement implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
  @property({ reflect: true, type: String }) name: string = '';
  @property({ reflect: true, type: Boolean }) active: boolean = false;

  private readonly attrId = ++id;
  private readonly componentId = `nve-tab-panel-${this.attrId}`;

  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute('role', 'tabpanel');
  }

  @watch('active')
  handleActiveChange() {
    this.setAttribute('aria-hidden', this.active ? 'false' : 'true');
  }

  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
          'tab-panel': true,
          'tab-panel--active': this.active,
        })}
      ></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tab-panel': NveTabPanel;
  }
}
