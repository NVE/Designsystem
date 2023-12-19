import { customElement, property } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
import { styles } from './nve-label.styles';
import { HasSlotController } from '../../utils/slot';

/**
 * Ledetekst med valgfritt info-ikon
 *
 * @slot label - teksten som skal vises. Eller du kan bruke label-attributtet
 * @slot tooltip - innhold i denne blir vist som en tooltip hvis man svever over info-ikonet
 *
 * TODO: Skal være litt mer plass mellom tekst og info-ikon
 */
@customElement('nve-label')
export class NveLabel extends LitElement {
  private readonly hasSlotController = new HasSlotController(this, 'tooltip');

  /**
   * Teksten som skal vises
   */
  @property({ reflect: true }) value = '';

  /**
   * Størrelse
   */
  @property({ reflect: true }) size: 'x-small' | 'small' | 'medium' | 'large' = 'small';

  /**
   * Sett denne hvis du vil ha litt lettere skriftvekt
   */
  @property({ type: Boolean, reflect: true }) light = false;

  /**
   * Denne teksten blir vist som et verktøyhint hvis man svever over info-ikonet
   */
  @property({ reflect: true }) tooltip?: string = undefined;

  static styles = [styles];

  private renderInfoIconWithTooltip() {
    let tooltipContent: ChildNode | string | undefined | null = this.tooltip;
    if (!tooltipContent?.length) {
      // tooltip-property er ikke satt, vi prøver å se om vi har tooltip i slot i stedet
      tooltipContent = this.hasSlotController.get('tooltip');
    }
    if (tooltipContent) {
      return html`<nve-tooltip placement="top">
        <div slot="content">${tooltipContent}</div>
        <nve-icon class="nve-info-icon" name="Info"></nve-icon>
      </nve-tooltip>`;
    }
    return html``; // tooltip er ikke spesifisert, så vi viser ikke denne delen
  }

  render() {
    return html`
      <label part="form-control-label" class="form-control__label" aria-hidden="false">
        <slot name="label">${this.value}</slot>
      </label>
      ${this.renderInfoIconWithTooltip()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-label': NveLabel;
  }
}
