import { LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';

const layoutElementTags = [
  'div',
  'section',
  'article',
  'aside',
  'nav',
  'main',
  'header',
  'footer',
  'ul',
] as const;

export type LayoutElementTag = (typeof layoutElementTags)[number];

function isValidLayoutElementTag(value: unknown): value is LayoutElementTag {
  return typeof value === 'string' && (layoutElementTags as readonly string[]).includes(value);
}

/**
 * Felles spacing-tokens brukt av alle layout-komponenter.
 * Mapper direkte til `--spacing-<verdi>` i designsystemet.
 */
export const spacingTokens = [
  'none',
  '2x-small',
  'x-small',
  'small',
  'medium',
  'large',
  'x-large',
  '2x-large',
  '3x-large',
  '4x-large',
  '5x-large',
] as const;

export type SpacingToken = (typeof spacingTokens)[number];

export const layoutJustifyValues = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'start',
  'end',
  'left',
  'right',
] as const;

export type LayoutJustify = (typeof layoutJustifyValues)[number];

/**
 * Validerer at en verdi er en gyldig spacing-token.
 */
export function isValidSpacingToken(value: unknown): value is SpacingToken {
  return typeof value === 'string' && (spacingTokens as readonly string[]).includes(value);
}

/**
 * Validerer at en verdi er en gyldig justify-verdi.
 */
export function isValidLayoutJustify(value: unknown): value is LayoutJustify {
  return typeof value === 'string' && (layoutJustifyValues as readonly string[]).includes(value);
}

/**
 * Basisklasse for alle layout-komponenter.
 * Gir felles props for padding og margin låst til spacing-tokenene i designsystemet.
 *
 * Rekkefølge for overstyringsregler:
 * `padding` settes først, deretter `padding-block` og `padding-inline`.
 * Samme prinsipp gjelder for `margin`.
 */
export class NveLayoutBase extends LitElement {
  /** HTML-element som omslutter innholdet i slot-en inne i komponentens shadow DOM. */
  @property({ type: String, reflect: true }) as: LayoutElementTag = 'div';

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

  private _warnInvalidSpacingProp(propName: string, value: unknown) {
    const tagName = this.tagName.toLowerCase();
    // eslint-disable-next-line no-console
    console.warn(
      `[${tagName}] Ugyldig verdi for '${propName}': "${value}". Verdien ignoreres. Gyldige verdier er: ${spacingTokens.join(', ')}.`
    );
  }

  private _applySpacingProp(cssProp: string, value?: SpacingToken) {
    if (value !== undefined) {
      this.style.setProperty(cssProp, `var(--spacing-${value})`);
    } else {
      this.style.removeProperty(cssProp);
    }
  }

  private _attributeObserver?: MutationObserver;

  override connectedCallback() {
    super.connectedCallback();
    this._attributeObserver = new MutationObserver((records) => {
      if (
        records.some(
          ({ attributeName }) =>
            attributeName === 'role' ||
            attributeName === 'aria-label' ||
            attributeName === 'aria-description'
        )
      ) {
        this._syncSemanticAttributes();
      }
    });
    this._attributeObserver.observe(this, { attributes: true });
  }

  override disconnectedCallback() {
    this._attributeObserver?.disconnect();
    this._attributeObserver = undefined;
    super.disconnectedCallback();
  }

  protected renderLayout() {
    const tag = isValidLayoutElementTag(this.as) ? this.as : 'div';
    return staticHtml`<${unsafeStatic(tag)} class="layout"><slot></slot></${unsafeStatic(tag)}>`;
  }

  private _syncSemanticAttributes() {
    const layoutElement = this.shadowRoot?.querySelector('.layout');
    if (!layoutElement) return;

    if (this.hasAttribute('role')) {
      layoutElement.setAttribute('role', 'presentation');
      layoutElement.removeAttribute('aria-label');
      layoutElement.removeAttribute('aria-description');
      return;
    }

    layoutElement.removeAttribute('role');
    for (const attribute of ['aria-label', 'aria-description']) {
      const value = this.getAttribute(attribute);
      if (value === null) {
        layoutElement.removeAttribute(attribute);
      } else {
        layoutElement.setAttribute(attribute, value);
      }
    }
  }

  protected override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    this._syncSemanticAttributes();

    if (changedProperties.has('as') && !isValidLayoutElementTag(this.as)) {
      // eslint-disable-next-line no-console
      console.warn(`[${this.tagName.toLowerCase()}] Invalid 'as' value: "${this.as}". Falling back to "div".`);
      this.as = 'div';
    }

    // Sjekk om prop faktisk har endret seg fra en satt verdi, slik at vi ikke fjerner
    // inline-stiler brukeren har satt via style-attributtet ved første render.
    const changed = (key: string) =>
      changedProperties.has(key) &&
      (changedProperties.get(key) !== undefined || (this as Record<string, unknown>)[key] !== undefined);

    const getSpacingValue = (key: keyof NveLayoutBase): SpacingToken | undefined => {
      const value = this[key] as unknown;
      if (value === undefined) {
        return undefined;
      }

      if (!isValidSpacingToken(value)) {
        this._warnInvalidSpacingProp(key, value);
        (this as Record<string, unknown>)[key] = undefined;
        return undefined;
      }

      return value;
    };

    if (changed('padding')) {
      this._applySpacingProp('padding', getSpacingValue('padding'));
      if (this.paddingBlock !== undefined || changed('paddingBlock')) {
        this._applySpacingProp('padding-block', getSpacingValue('paddingBlock'));
      }
      if (this.paddingInline !== undefined || changed('paddingInline')) {
        this._applySpacingProp('padding-inline', getSpacingValue('paddingInline'));
      }
    } else {
      if (changed('paddingBlock')) this._applySpacingProp('padding-block', getSpacingValue('paddingBlock'));
      if (changed('paddingInline')) this._applySpacingProp('padding-inline', getSpacingValue('paddingInline'));
    }

    if (changed('margin')) {
      this._applySpacingProp('margin', getSpacingValue('margin'));
      if (this.marginBlock !== undefined || changed('marginBlock')) {
        this._applySpacingProp('margin-block', getSpacingValue('marginBlock'));
      }
      if (this.marginInline !== undefined || changed('marginInline')) {
        this._applySpacingProp('margin-inline', getSpacingValue('marginInline'));
      }
    } else {
      if (changed('marginBlock')) this._applySpacingProp('margin-block', getSpacingValue('marginBlock'));
      if (changed('marginInline')) this._applySpacingProp('margin-inline', getSpacingValue('marginInline'));
    }
  }
}
