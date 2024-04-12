import { customElement, property } from 'lit/decorators.js';
import styles from './nve-details.styles';
import { SlDetails } from '@shoelace-style/shoelace';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { LocalizeController } from '@shoelace-style/shoelace/dist/utilities/localize.js';
import '../nve-icon/nve-icon.component';

@customElement('nve-details')
export default class NveDetails extends SlDetails {
  constructor() {
    super();
  }

  @property({ type: Boolean, reflect: true }) leftStroke: boolean = false;
  @property({ reflect: true }) variant: 'brand' | 'neutral' | 'info' | 'error' | 'success' | 'warning' = 'brand';
  static styles = [SlDetails.styles, styles];
  updated(changedProperties: any) {
    super.updated(changedProperties);
  }

  /* disse er kopiert fra SlDetails, siden de er private har vi ikke tilgang til dem ellers */
  private readonly nve_localize = new LocalizeController(this);
  private nve_handleSummaryClick(event: MouseEvent) {
    event.preventDefault();
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
      this.header.focus();
    }
  }

  private nve_handleSummaryKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hide();
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.show();
    }
  }
  /* end kopiering. render er også kopiert, men gjort om en del for å få riktige ikoner og plasseringer */
  render() {
    const isRtl = this.nve_localize.dir() === 'rtl';

    return html`
      <details
        part="base"
        class=${classMap({
          details: true,
          'details--open': this.open,
          'details--disabled': this.disabled,
          'details--rtl': isRtl,
        })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls="content"
          aria-disabled=${this.disabled ? 'true' : 'false'}
          tabindex=${this.disabled ? '-1' : '0'}
          @click=${this.nve_handleSummaryClick}
          @keydown=${this.nve_handleSummaryKeyDown}
        >
          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <nve-icon library="Sharp" name="expand_more"></nve-icon>
            </slot>
            <slot name="collapse-icon">
              <nve-icon library="Sharp" name="expand_more"></nve-icon>
            </slot>
          </span>
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-details': NveDetails;
  }
}
