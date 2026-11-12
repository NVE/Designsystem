import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-segmented-level-indicator.styles';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

const DEFAULT_VALUE = 0;
const DEFAULT_SCALE = 5;

/**
 * Viser en verdi på en oppdelt skala grafisk.
 * Skalaen består av et antall segmenter (firkanter) som fylles basert på verdien.
 * @csspart base Selve hoved-elementet
 * @csspart segments Segmentene
 * @csspart segment Hvert enkelt segment
 * @csspart label Teksten under segmentene
 */
@customElement('nve-segmented-level-indicator')
export default class NveSegmentedLevelIndicator extends LitElement implements INveComponent {
  /** Bruk denne til å identifisere komponenten i tester */
  @property({ type: String, reflect: true }) testId: string | undefined = undefined;

  /** Hvor mange segmenter vi skal fargelegge */
  @property({ type: Number, reflect: true }) value = DEFAULT_VALUE;

  /** Hvor mange segmenter vi skal vise */
  @property({ type: Number, reflect: true }) scale = DEFAULT_SCALE;

  /** Tekst som vises under segmentene */
  @property({ type: String, reflect: true }) label = '';

  /** Språk som brukes av komponenten */
  @property({ type: String, reflect: true }) lang = 'no';

  /** Alternativ tekst som brukes av skjermlesere */
  accessibleLabel = this.ariaLabel || this.label || `${this.value} av ${this.scale}`;

  static styles = [styles];

  static get observedAttributes() {
    return [...super.observedAttributes, 'aria-label'];
  }

  private get currentValue(): number {
    return Number.isInteger(this.value) && this.value >= 0 ? this.value : DEFAULT_VALUE;
  }

  private get currentScale(): number {
    return Number.isInteger(this.scale) && this.scale > 0 ? this.scale : DEFAULT_SCALE;
  }

  private get of() {
    return this.lang?.toLowerCase().startsWith('en') ? 'of' : 'av';
  }

  render() {
    const accessibleLabel = this.ariaLabel || this.label || `${this.value} ${this.of} ${this.scale}`;

    return html`<div
      class="container"
      aria-label="${accessibleLabel}"
      role="img"
      part="base"
      testId=${ifDefined(this.testId)}
    >
      <div class="segments" part="segments">
        ${Array.from(
          { length: this.currentScale },
          (_, index) =>
            html`<span
              class="${classMap({
                segment: true,
                filled: index < this.currentValue,
              })}"
              part="segment"
            ></span>`
        )}
      </div>
      ${this.label ? html`<div class="label" part="label">${this.label}</div>` : nothing}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-segmented-level-indicator': NveSegmentedLevelIndicator;
  }
}
