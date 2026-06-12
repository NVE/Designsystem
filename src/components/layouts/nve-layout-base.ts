import { LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Felles spacing-tokens brukt av alle layout-komponenter.
 * Mapper direkte til `--spacing-<verdi>` i designsystemet.
 */
export type SpacingToken =
  | 'none'
  | '2x-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | '2x-large'
  | '3x-large'
  | '4x-large'
  | '5x-large';

export type LayoutJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right';

/**
 * Basisklasse for alle layout-komponenter.
 * Gir felles props for padding og margin låst til spacing-tokenene i designsystemet.
 *
 * Rekkefølge for overstyringsregler:
 * `padding` settes først, deretter `padding-block` og `padding-inline`.
 * Samme prinsipp gjelder for `margin`.
 */
export class NveLayoutBase extends LitElement {
  /** Tokenbasert padding på alle sider. */
  @property({ type: String, reflect: true }) padding?: SpacingToken;

  /** Tokenbasert margin på alle sider. */
  @property({ type: String, reflect: true }) margin?: SpacingToken;

  /** Tokenbasert padding i blokk-retning (topp og bunn). Overstyrer `padding` i blokk-retning. */
  @property({ type: String, reflect: true, attribute: 'padding-block' }) paddingBlock?: SpacingToken;

  /** Tokenbasert padding i inline-retning (venstre og høyre). Overstyrer `padding` i inline-retning. */
  @property({ type: String, reflect: true, attribute: 'padding-inline' }) paddingInline?: SpacingToken;

  /** Tokenbasert margin i blokk-retning (topp og bunn). Overstyrer `margin` i blokk-retning. */
  @property({ type: String, reflect: true, attribute: 'margin-block' }) marginBlock?: SpacingToken;

  /** Tokenbasert margin i inline-retning (venstre og høyre). Overstyrer `margin` i inline-retning. */
  @property({ type: String, reflect: true, attribute: 'margin-inline' }) marginInline?: SpacingToken;

  private _applySpacingProp(cssProp: string, value?: SpacingToken) {
    if (value !== undefined) {
      this.style.setProperty(cssProp, `var(--spacing-${value})`);
    } else {
      this.style.removeProperty(cssProp);
    }
  }

  protected override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    // Sjekk om prop faktisk har endret seg fra en satt verdi, slik at vi ikke fjerner
    // inline-stiler brukeren har satt via style-attributtet ved første render.
    const changed = (key: string) =>
      changedProperties.has(key) &&
      (changedProperties.get(key) !== undefined || (this as Record<string, unknown>)[key] !== undefined);

    if (changed('padding')) this._applySpacingProp('padding', this.padding);
    if (changed('margin')) this._applySpacingProp('margin', this.margin);
    if (changed('paddingBlock')) this._applySpacingProp('padding-block', this.paddingBlock);
    if (changed('paddingInline')) this._applySpacingProp('padding-inline', this.paddingInline);
    if (changed('marginBlock')) this._applySpacingProp('margin-block', this.marginBlock);
    if (changed('marginInline')) this._applySpacingProp('margin-inline', this.marginInline);
  }
}
