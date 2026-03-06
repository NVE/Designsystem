import { LitElement } from 'lit';
import { unsafeStatic, html } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-heading.styles';

/**
 * nve-heading gir semantisk og tilgjengelig overskrift med riktig typografi fra designsystemet.
 * Brukes for å sikre korrekt heading-hierarki (h1–h6) og typografi, og kan overstyres med variant for heading eller subheading.
 *
 * @slot - tekst - Selve overskriften (innholdet).
 *
 * @csspart nve-heading Hele heading-elementet
 *
 * Se designsystemet for alle varianter og tokens.
 */
@customElement('nve-heading')
export default class NveHeading extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Heading level - Hvilket nivå overskriften skal ha (h1-h6) */
  @property({ type: Number, reflect: true }) level: 1 | 2 | 3 | 4 | 5 | 6 = 1;

  /** Typografitype - Kan overstyre det som er standard typografi basert på nivå */
  @property({ type: String, reflect: true }) size?:
    | 'headingXlarge'
    | 'headingLarge'
    | 'headingMedium'
    | 'headingSmall'
    | 'headingXsmall'
    | 'subheadingLarge'
    | 'subheadingMedium'
    | 'subheadingSmall';

  static styles = [styles];

  constructor() {
    super();
  }
  protected getTagName() {
    if (!this.level || this.level < 1 || this.level > 6 || isNaN(this.level)) {
      return 'h1';
    }
    return `h${this.level}`;
  }

  protected getDefaultTypographyType() {
    switch (this.level) {
      case 1:
        return 'headingXlarge';
      case 2:
        return 'headingLarge';
      case 3:
        return 'headingMedium';
      case 4:
        return 'headingSmall';
      case 5:
        return 'headingXsmall';
      case 6:
        return 'headingXsmall';
      default:
        return 'headingMedium';
    }
  }

  render() {
    const tagName = this.getTagName();
    return html`
      <${unsafeStatic(tagName)} part="nve-heading" data-testid=${this.testId} class="heading ${this.size ? this.size : this.getDefaultTypographyType()}">
        <slot></slot>
      </${unsafeStatic(tagName)}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-heading': NveHeading;
  }
}
