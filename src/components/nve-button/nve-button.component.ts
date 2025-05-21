import { customElement, property } from 'lit/decorators.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
import styles from './nve-button.styles';
import { INveComponent } from '@interfaces/NveComponent.interface';

/**
 * Selveste NVE-knappen.
 * Bruk href for å gjøre den om til en link.
 * Disse feltene skal ikke brukes:caret og pill
 * Circle attributte skal brukes kun når man viser bare et ikon.
 */
@customElement('nve-button')
export default class NveButton extends SlButton implements INveComponent {
  constructor() {
    super();
  }
  static styles = [SlButton.styles, styles];
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;

  // setter has-icon-only attributtet hvis det er kun ikone i standard sporet. Trengs for riktig styling.
  firstUpdated(): void {
    const defaultSlot = this.shadowRoot?.querySelector('.button__label');
    if (defaultSlot) {
      // Gi meg en liste over element-noder og tekstnoder som ikke er tomme
      const nodes = (defaultSlot as HTMLSlotElement)
        .assignedNodes()
        .filter((node) => node.nodeType === Node.ELEMENT_NODE || node.textContent?.trim?.length);
      // Dersom det kun er en node og den er nve-icon, så setter vi has-icon-only attributtet
      const isOnlyNveIcon = nodes.length === 1 && nodes[0].nodeName.toLowerCase() === 'nve-icon';
      if (isOnlyNveIcon) {
        this.setAttribute('has-icon-only', '');
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
