import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import { customElement } from 'lit/decorators.js';
import '../nve-icon/nve-icon.component';

/**
 * Et verktøyhint.
 * TODO: Denne har ingen NVE-styling ennå.
 * TODO: Bør vi skrive noe om at denne ikke funker på pekeskjermer?
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
