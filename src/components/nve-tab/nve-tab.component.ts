import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-tab.styles';
import { classMap } from 'lit/directives/class-map.js';
let id = 0;

/**
 * En fane som kan brukes i en nve-tab-group.
 * Fane har ingen egen utforming, den viser kun det som er inni.
 * Hvis ikke angitt får fanen en unik id som kan brukes for å referere til den automatisk.
 * @slot (prefix) - legg inn innhold som skal vises før hovedinnholdet
 * @slot (standard) - legg inn fane teksten
 * @slot (suffix) - legg inn innhold som skal vises etter hovedinnholdet
 *
 * @csspart base Topp-element
 */
@customElement('nve-tab')
export default class NveTab extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Navn på panelet, brukes for å referere til fanen i tab-gruppen */
  @property({ type: String }) panel: string | null = null;
  /** Fane størrelse */
  @property({ type: String }) size: 'large' | 'small' = 'large';
  /** Om fanen skal ha bakgrunn */
  @property({ type: Boolean }) background: boolean = false;

  /** @internal */
  private readonly attrId = ++id;
  /** @internal */
  private readonly componentId = `nve-tab-${this.attrId}`;

  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
  }

  constructor() {
    super();
  }

  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return html`
      <div
        part="base"
        class=${classMap({ tab: true, 'tab--large': this.size === 'large', 'tab--background': this.background })}
      >
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tab': NveTab;
  }
}
