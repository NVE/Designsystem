import { customElement, property } from 'lit/decorators.js';
import styles from './nve-box.styles';
import { html, PropertyValues } from 'lit';
import { NveLayoutBase, SpacingToken } from '../nve-layout-base';

/**
 * Pakker innhold i en boks med padding og bakgrunnsfarge.
 * Basert på Box-primitiven fra Every Layout.
 *
 * Arver padding/margin-props fra NveLayoutBase.
 * Bakgrunnsfarge styres av `background`.
 *
 * @property {SpacingToken} padding - Tokenbasert padding (arvet). Standard: medium.
 * @property {string} background - Tokenbasert bakgrunnsfarge.
 */
export type BoxLayoutPadding = SpacingToken;

export type BoxBackground =
  | '--color-neutrals-background-canvas'
  | '--color-neutrals-background-primary'
  | '--color-neutrals-background-primary-contrast'
  | '--color-neutrals-background-secondary'
  | '--color-neutrals-background-secondary-dim'
  | '--color-neutrals-background-tertiary-dim';

/**
 * Validerer at en verdi er en gyldig background-verdi.
 */
function isValidBoxBackground(value: unknown): value is BoxBackground {
  const validBackgrounds: BoxBackground[] = [
    '--color-neutrals-background-canvas',
    '--color-neutrals-background-primary',
    '--color-neutrals-background-primary-contrast',
    '--color-neutrals-background-secondary',
    '--color-neutrals-background-secondary-dim',
    '--color-neutrals-background-tertiary-dim',
  ];
  return validBackgrounds.includes(value as BoxBackground);
}

@customElement('nve-box')
export default class NveBox extends NveLayoutBase {
  static styles = [styles];

  /** Tokenbasert bakgrunnsfarge. */
  @property({ type: String, reflect: true }) background?: BoxBackground;

  override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    // Valider og sett fallback for background
    if (
      changedProperties.has('background') &&
      (changedProperties.get('background') !== undefined || this.background !== undefined)
    ) {
      if (this.background !== undefined && !isValidBoxBackground(this.background)) {
        // eslint-disable-next-line no-console
        console.warn(
          `[nve-box] Ugyldig verdi for 'background': "${this.background}". Bakgrunnsfargen fjernes. Gyldige verdier er: --color-neutrals-background-canvas, --color-neutrals-background-primary, --color-neutrals-background-primary-contrast, --color-neutrals-background-secondary, --color-neutrals-background-secondary-dim, --color-neutrals-background-tertiary-dim.`
        );
        this.background = undefined;
      }

      if (this.background !== undefined) {
        this.style.setProperty('background', `var(${this.background})`);
      } else {
        this.style.removeProperty('background');
      }
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-box': NveBox;
  }
}
