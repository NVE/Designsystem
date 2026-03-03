import { LitElement } from 'lit';
import { unsafeStatic, html } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-heading.styles';

@customElement('nve-heading')
export default class NveHeading extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Heading level - Hvilket nivå overskriften skal ha */
  @property({ type: Number, reflect: true }) level: 1 | 2 | 3 | 4 | 5 | 6 = 1;

  /** Typografitype - Kan overstyre det som er standard typografi basert på nivå */
  @property({ type: String, reflect: true }) typographyType?:
    | 'headingXlarge'
    | 'headingLarge'
    | 'headingMedium'
    | 'headingSmall';

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
      default:
        return 'headingSmall';
    }
  }

  render() {
    const tagName = this.getTagName();
    return html`
      <${unsafeStatic(tagName)} part="base" data-testid=${this.testId} class=${this.typographyType ? this.typographyType : this.getDefaultTypographyType()}>
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
