import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import { customElement, property } from 'lit/decorators.js';
import '../nve-icon/nve-icon.component';
import styles from './nve-tooltip.styles';

/**
 * Et verktøyhint. Kan åpnes og lukkes programmatisk eller automatisk med ulike hendelser. Kan ha ulik farge og metning.
 *
 * @property {string} variant Fargen på tag. neutral, success, info, warning, error
 * @property {string} saturation Hvor sterk fargen på bakgrunnen er. emphasized, subtle, default
 */
@customElement('nve-tooltip')
export default class NveTooltip extends SlTooltip {
  constructor() {
    super();
  }
  /** Variant */
  @property({ type: String, reflect: true }) variant: 'neutral' | 'success' | 'info' | 'warning' | 'error' = 'neutral';
  /** Saturation - Hvor mettet fargen på tooltip er */
  @property({ type: String, reflect: true }) saturation: 'emphasized' | 'subtle' | 'default' = 'emphasized';

  static styles = [SlTooltip.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tooltip': NveTooltip;
  }
}
