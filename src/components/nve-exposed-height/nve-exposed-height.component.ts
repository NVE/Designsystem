import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-exposed-height.styles';

/** Modell for tegning av fjellet */
interface MountainPaths {
  top: string;
  bottom: string;
  middle?: string;
  topClass: string;
  bottomClass: string;
  middleClass?: string;
}

/**
 * Visualisering av utsatt høyde for et skredproblem.
 * Viser et fjell med fargelegging av utsatt høyde i tillegg til piler og høydegrenser.
 * @cssproperty --exposed-height-affected-color - Farge på utsatte høyde. Standard er #d21523.
 * @cssproperty --exposed-height-unaffected-color - Farge på ikke-utsatt høyde. Standard er #e3e3e3.
 * @cssproperty --exposed-height-width - Bredde på hele komponenten. Standard er 150px.
 */
@customElement('nve-exposed-height')
export default class NveExposedHeight extends LitElement implements INveComponent {
  /** Type fyll: 1=over, 2=under, 3=over og under, 4=mellom */
  @property({ type: Number }) variant: 1 | 2 | 3 | 4 = 1;

  /** Første høydeverdi i meter */
  @property({ type: Number }) height1: number = 0;

  /** Andre høydeverdi i meter (for variant 3 og 4) */
  @property({ type: Number }) height2: number = 0;

  /** Språk for aria-label. Blir satt til engelsk om lang starter på 'en'. Standard er norsk. */
  @property({ type: String }) lang: string = 'no';

  @property({ type: String }) testId: string | undefined = undefined;

  static styles = [styles];

  private isEnglish() {
    return this.lang.toLowerCase().startsWith('en');
  }

  /** Tegne-instruksjoner for enten to- eller tre-delt fjell, avhengig av variant */
  private createMountainGeometry(variant: 1 | 2 | 3 | 4) {
    if (variant === 1 || variant === 2) {
      // To-delt fjell
      return {
        top: 'M34.1299,22.8691 L20.1809,1.0741 C19.7079,0.3711 19.1749,0.0461 18.5749,0.0961 C17.9749,0.1461 17.4999,0.5581 17.1459,1.3301 L8.5139,18.9511 C10.8769,18.8161 12.7759,20.6831 12.7759,20.6831 C13.8629,21.6761 14.2179,22.0151 16.1509,22.0291 C19.1399,22.0511 20.0179,20.7691 22.0269,21.4881 C24.3919,22.3371 25.3159,23.3921 27.1709,24.5401 C29.9429,26.2481 31.3449,26.2291 33.0259,25.1611 C33.0259,25.1611 34.6099,24.2071 34.1299,22.8691',
        bottom:
          'M6.4121,23.752 L1.0791,34.822 C0.6321,35.565 0.5661,36.549 0.8771,37.084 C1.1851,37.623 1.7671,38.58 2.6191,38.58 L39.6821,38.58 C40.5341,38.58 41.1151,37.623 41.4251,37.084 C41.7341,36.549 41.6681,35.219 41.2231,34.479 L36.2291,26.217 C36.4201,27.445 34.3141,28.854 34.3141,28.854 C32.6091,29.992 30.3481,29.959 27.8371,28.975 C25.7441,28.152 24.4491,26.895 22.4571,25.955 C20.4671,25.012 19.3401,26.041 16.5901,26.281 C14.9531,26.424 13.9711,26.166 12.6221,25.324 C12.6221,25.324 9.9561,23.752 6.4601,23.752 L6.4121,23.752 Z',
      };
    } else {
      // Tre-delt fjell
      return {
        top: 'M23.917,10.0605 L19.813,2.6985 C19.387,2.0665 18.906,1.7735 18.367,1.8185 C17.826,1.8645 17.4,2.2345 17.08,2.9285 L14.471,8.8895 L14.384,9.0545 C14.384,9.0545 16.84,8.2885 18.863,9.4345 C20.521,10.3725 21.144,11.3805 23.917,10.0605',
        middle:
          'M34.2402,27.625 C34.2402,28.483 33.0472,29.218 33.0472,29.218 C31.3652,30.286 29.3092,30.762 26.6252,28.92 C24.6822,27.587 23.7362,26.562 21.4802,25.868 C19.4402,25.241 18.5942,26.431 15.6052,26.409 C13.6722,26.396 13.2832,25.827 12.2282,25.063 C12.2282,25.063 10.6742,23.747 8.6982,23.268 L8.0602,23.169 L12.9712,12.208 C12.9712,12.208 16.3302,11.472 18.5802,12.745 C20.4222,13.788 23.3102,15.342 25.7672,13.209 L34.2402,27.625',
        bottom:
          'M5.9922,27.7842 L0.8322,39.2022 C0.3852,39.9442 0.3202,40.9292 0.6312,41.4642 C0.9392,42.0032 1.5212,42.9602 2.3732,42.9602 L39.4352,42.9602 C40.2872,42.9602 40.8692,42.0032 41.1782,41.4642 C41.4882,40.9292 41.4222,39.5982 40.9762,38.8582 L36.0102,30.6382 C35.9552,31.7022 34.0682,33.2332 34.0682,33.2332 C32.3632,34.3722 30.1012,34.3392 27.5902,33.3542 C25.4982,32.5322 24.2032,31.2742 22.2112,30.3352 C20.2212,29.3912 19.0942,30.4212 16.3442,30.6612 C14.7072,30.8042 13.7242,30.5462 12.3752,29.7042 C12.3752,29.7042 9.9982,27.7842 6.5022,27.7842 L5.9922,27.7842 Z',
      };
    }
  }

  /**
   * Lager geometri og fargeklasser for tegning av fjellet
   * @param variant hver variant har forskjellig geometri og fargelegging
   * @returns Et objekt som inneholder SVG-paths og tilhørende fargeklasser for aktuell variant
   */
  private createMountainPath(variant: 1 | 2 | 3 | 4): MountainPaths {
    // Fargeklasser for hver variant
    const colorMap = {
      1: { topClass: 'mountain-danger', bottomClass: 'mountain-safe' },
      2: { topClass: 'mountain-safe', bottomClass: 'mountain-danger' },
      3: {
        topClass: 'mountain-danger',
        middleClass: 'mountain-safe',
        bottomClass: 'mountain-danger',
      },
      4: {
        topClass: 'mountain-safe',
        middleClass: 'mountain-danger',
        bottomClass: 'mountain-safe',
      },
    };

    const geometry = this.createMountainGeometry(variant);

    return { ...geometry, ...colorMap[variant] };
  }

  /** Lager geometri for pil */
  private createArrowPath() {
    return 'M11.92,8 L7.96,8 L7.96,16 L3.98,16 L3.98,8 L0,8 L5.96,0 Z';
  }

  /** Lager SVG-elementer for fjellet */
  private renderMountain(paths: MountainPaths) {
    if (this.variant === 3 || this.variant === 4) {
      return svg`
        <path d="${paths.top}" class="${paths.topClass}" stroke-width="0.5" />
        <path d="${paths.middle}" class="${paths.middleClass}" stroke-width="0.5" />
        <path d="${paths.bottom}" class="${paths.bottomClass}" stroke-width="0.5" />
      `;
    } else {
      return svg`
        <path d="${paths.top}" class="${paths.topClass}" stroke-width="0.5" />
        <path d="${paths.bottom}" class="${paths.bottomClass}" stroke-width="0.5" />
      `;
    }
  }

  /** Lager SVG-elementer for piler og etiketter */
  private renderArrowsAndLabels() {
    const mountainYOffset = this.variant === 3 || this.variant === 4 ? -6 : 0;
    const mountainHeight = this.variant === 3 || this.variant === 4 ? 47 : 39;
    const centerY = mountainHeight / 2 + mountainYOffset;

    // Posisjon og rotasjon for pilene, samt tekst og posisjon for etikettene. Hver variant har sin egen konfigurasjon.
    const config = {
      1: {
        groupHeight: 28,
        arrows: [{ y: 0, rotation: 0 }],
        texts: [{ y: 30, text: `${this.height1}m`, xOffset: 5.96, centered: true }],
      },
      2: {
        groupHeight: 28,
        arrows: [{ y: 12, rotation: 180 }],
        texts: [{ y: 8, text: `${this.height1}m`, xOffset: 5.96, centered: true }],
      },
      3: {
        groupHeight: 38,
        arrows: [
          { y: 0, rotation: 0 },
          { y: 22, rotation: 180 },
        ],
        texts: [
          { y: 16, text: `${this.maxHeight}m`, xOffset: 16, centered: false },
          { y: 30, text: `${this.minHeight}m`, xOffset: 16, centered: false },
        ],
      },
      4: {
        groupHeight: 40,
        arrows: [
          { y: 0, rotation: 180 },
          { y: 24, rotation: 0 },
        ],
        texts: [{ y: 22, text: `${this.minHeight}-${this.maxHeight}m`, xOffset: 12, centered: false }], // Venstrejustert
      },
    };

    const { groupHeight, arrows, texts } = config[this.variant];

    return svg`
      <g transform="translate(55, ${centerY - groupHeight / 2})">
        ${arrows.map((arrow) => this.renderArrow(arrow.y, arrow.rotation))}
        ${texts.map((text) => this.renderText(text.y, text.text, text.xOffset, text.centered))}
      </g>
    `;
  }

  /** Lager SVG-element for pil. Hvis rotation er angitt, snus pila på hodet */
  private renderArrow(y: number, rotation: number) {
    const rotate = rotation !== 0 ? ' rotate(180 5.96 8)' : '';
    return svg`
    <g transform="translate(0, ${y})${rotate}">
      <path d="${this.createArrowPath()}" class="arrow" />
    </g>
  `;
  }

  /** Lager SVG-element for tekst */
  private renderText(y: number, text: string, xOffset: number, centered: boolean) {
    const x = xOffset;
    const className = centered ? 'height-label centered' : 'height-label';
    return svg`<text x="${x}" y="${y}" class="${className}">${text}</text>`;
  }

  /** Lager ARIA-label for SVG-elementet */
  private getAriaLabel(): string {
    const prefix = this.isEnglish() ? 'Exposed height' : 'Utsatt høyde';
    const between = this.isEnglish() ? 'Between' : 'Mellom';
    const and = this.isEnglish() ? 'and' : 'og';
    const meter = this.isEnglish() ? 'meters' : 'meter';

    switch (this.variant) {
      case 1:
        return `${prefix}: Over ${this.height1} ${meter}`;
      case 2:
        return `${prefix}: Under ${this.height1} ${meter}`;
      case 3:
        return `${prefix}: Under ${this.minHeight} ${meter} ${and} over ${this.maxHeight} ${meter}`;
      case 4:
        return `${prefix}: ${between} ${this.minHeight} ${and} ${this.maxHeight} ${meter}`;
      default:
        return '';
    }
  }

  /** Returnerer den høyeste av de to høydene */
  private get maxHeight(): number {
    return Math.max(this.height1, this.height2);
  }

  /** Returnerer den laveste av de to høydene */
  private get minHeight(): number {
    return Math.min(this.height1, this.height2);
  }

  /** Tegn komponenten */
  render() {
    const paths = this.createMountainPath(this.variant);
    // Fill 3 og 4 trenger en y-offset på -6 for å vises riktig
    const mountainYOffset = this.variant === 3 || this.variant === 4 ? -6 : 0;

    const isThreePart = this.variant === 3 || this.variant === 4;
    const vbY = isThreePart ? -6 : -2;
    const vbH = isThreePart ? 48 : 46;

    return html`
      <svg
        class="exposed-height"
        viewBox="-2 ${vbY} 120 ${vbH}"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="${this.getAriaLabel()}"
        testid=${this.testId}
      >
        <g transform="translate(0, ${mountainYOffset})">${this.renderMountain(paths)}</g>
        ${this.renderArrowsAndLabels()}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-exposed-height': NveExposedHeight;
  }
}
