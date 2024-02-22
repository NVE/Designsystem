import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import { customElement } from 'lit/decorators.js';
import '../nve-icon/nve-icon.component';

/**
 * En sl-tooltip i NVE-uniform.
 * Mer info: https://shoelace.style/components/tooltip
 *
 * TODO: Denne har ingen NVE-styling ennå.
 */
@customElement('nve-tooltip')
export default class NveTooltip extends SlTooltip {
  constructor() {
    super();
  }
  static styles = [SlTooltip.styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tooltip': NveTooltip;
  }
}
