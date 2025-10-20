import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-tab-panel.styles';
let id = 0;

/**
 * En panel som brukes i en nve-tab-group for å vise innhold relatert til en fane.
 * Kan ikke brukes utenfor en nve-tab-group.
 * Hvis ikke angitt får panelet en unik id som kan brukes for å referere til det automatisk.
 * @slot (default) - legg inn innholdet som skal vises
 * @csspart base - hoved kontainer
 */

@customElement('nve-tab-panel')
export default class NveTabPanel extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Navn på panelet, brukes for å referere til panelet i faner */
  @property({ type: String }) name: string | null = null;

  /** @internal */
  private readonly attrId = ++id;
  /** @internal */
  private readonly componentId = `nve-panel-${this.attrId}`;

  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tabpanel');
    if (this.name) {
      this.setAttribute('name', this.name);
    }
  }

  constructor() {
    super();
  }

  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return html`<div class="tab-panel" part="base" role="tabpanel">
      <slot></slot>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tab-panel': NveTabPanel;
  }
}
