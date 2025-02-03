import { customElement, property } from 'lit/decorators.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
import styles from './nve-button.styles';
import { INveComponent } from '@interfaces/NveComponent.interface';

export type SlButtonVariant = SlButton['variant'];
export type SlButtonSize = SlButton['size'];

/** Interface for å definere egenskapene til en button */
export interface NveButtonProps {
  size?: SlButtonSize;
  variant?: SlButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  circle?: boolean;
  testId?: string;
}
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
  testId: string | undefined;
  static styles = [SlButton.styles, styles]; 
  @property({ reflect: true }) size: SlButtonSize = 'medium';
  @property({ reflect: true }) variant: SlButtonVariant = 'default';
  @property({ reflect: true, type: Boolean }) disabled: boolean = false;
  @property({ reflect: true, type: Boolean }) loading: boolean = false;
  @property({ reflect: true, type: Boolean }) circle: boolean = false;


  // setter has-icon-only attributtet hvis det er kun ikone i standard sporet. Trengs for riktig styling.
  firstUpdated(): void {
    const defaultSlot = this.shadowRoot?.querySelector('.button__label');
    if (defaultSlot) {
      const nodes = (defaultSlot as HTMLSlotElement).assignedNodes();
      const isOnlyNveIcon = nodes.length === 1 && nodes[0].nodeName.toLowerCase() === 'nve-icon';
      if (isOnlyNveIcon) {
        this.setAttribute('has-icon-only', '');
      }
    }
  }

  // Hvis man har kun ikone i standard sporet og bruker loading attributtet, fjerner vi ikonet.
  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('loading')) {
      if (this.loading && this.hasAttribute('has-icon-only')) {
        const defaultSlot = this.shadowRoot?.querySelector('.button__label');
        if (defaultSlot) {
          const nodes = (defaultSlot as HTMLSlotElement).assignedNodes();
          const nveIconNode = nodes.find((node) => node.nodeName.toLowerCase() === 'nve-icon');
          if (nveIconNode && nveIconNode.parentNode) {
            nveIconNode.parentNode.removeChild(nveIconNode);
          }
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
