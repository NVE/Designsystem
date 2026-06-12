import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-aspect-rose.styles';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Viser utsatte himmelretninger som en kompassrose.
 * Rosen er delt opp i 8 sektorer. Utsatte sektorer vises i rødt.
 * @cssproperty --aspect-rose-size - Høyde og bredde på komponenten. 90px er standard.
 * @cssproperty --aspect-rose-outline-color - Farge på sirkelens omriss. Standard er #c6c6c5.
 * @cssproperty --aspect-rose-affected-color - Farge på utsatte sektorer. Standard er #d21523.
 * @cssproperty --aspect-rose-unaffected-color - Farge på ikke-utsatte sektorer. Standard er #e3e3e3.
 */
@customElement('nve-aspect-rose')
export default class NveAspectRose extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;

  /**
   * 8-tegns binærtekst som representerer utsatte sektorer.
   * Starter med nordlig sektor og går deretter med klokka.
   * Eksempel: "00111110"
   */
  @property({ type: String }) value: string = '00000000';

  /** Språk for himmelretningene. 'no' for norsk, 'en' for engelsk. */
  @property({ type: String }) lang: 'no' | 'en' = 'no';

  /**
   * Tilgjengelig tittel.
   * Vises som aria-label på SVG-elementet og som <title> i SVG.
   * Standardverdi avhenger av språket: 'Eksponerte sektorer' for norsk, 'Affected aspects' for engelsk.
   * Du kan overstyre denne teksten.
   */
  @property({ type: String }) label: string | undefined = undefined;

  static styles = [styles];

  private get effectiveLabel() {
    return this.label ?? (this.lang === 'en' ? 'Affected aspects' : 'Eksponerte sektorer');
  }

  // Etiketter for de fire himmelretningene. Brukes til å plassere sirklene og teksten inni dem.
  private get directions() {
    return [
      { cx: 45, cy: 9, label: 'N' },
      { cx: 81, cy: 45, label: this.lang === 'en' ? 'E' : 'Ø' },
      { cx: 45, cy: 81, label: 'S' },
      { cx: 9, cy: 45, label: this.lang === 'en' ? 'W' : 'V' },
    ];
  }

  // Gradene for å rotere sektorene slik at de dekker riktig himmelretning. Starter med nordlig sektor og går deretter med klokka.
  private readonly rotations = [-22.5, 22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5];

  render() {
    const value = /^[01]{8}$/.test(this.value) ? this.value : '00000000'; // Ignorer value hvis den ikke er gyldig
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90 90"
        width="100%"
        height="100%"
        role="img"
        aria-label=${this.effectiveLabel}
        testid=${ifDefined(this.testId)}
      >
        ${svg`<title>${this.effectiveLabel}</title>`}
        <g>
          ${this.rotations.map(
            (rot, i) => svg`
              <path
                d="M 45 9 A 36 36 0 0 1 70.45584412271572 19.54415587728429 L 45 45 Z"
                transform="rotate(${rot} 45 45)"
                stroke-width="1"
                stroke="var(--aspect-rose-outline-color, #c6c6c5)"
                class=${value[i] === '1' ? 'sector-affected' : 'sector-unaffected'}
              ></path>
            `
          )}
          <circle cx="45" cy="45" r="36" fill="none" stroke-width="1" class="circle-outline"></circle>
        </g>
        ${this.directions.map(
          ({ cx, cy, label }) => svg`
            <g>
              <circle cx=${cx} cy=${cy} r="7.2" stroke-width="1" stroke="var(--aspect-rose-outline-color, #c6c6c5)" fill="#fff"></circle>
              <text x=${cx} y=${cy} dy="3.168" text-anchor="middle" fill="#6a7a7b">${label}</text>
            </g>
          `
        )}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-aspect-rose': NveAspectRose;
  }
}
