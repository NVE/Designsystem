import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-paragraph.styles';

/**
 * nve-paragraph gir fleksibel og tilgjengelig typografi for avsnitt i designsystemet.
 * Brukes til brødtekst, mengdetekst og ingress (lead), og gir riktig styling basert på designsystemets tokens.
 *
 * Du styrer typografivariant med size-prop, og kan velge mellom ulike varianter for brødtekst (body), ingress (lead) og kompakt tekst (body-compact).
 *
 * @slot - tekst - Selve avsnittet (innholdet).
 *
 * @csspart paragraph Hele paragraph-elementet
 *
 * Se designsystemet for alle varianter og tokens.
 */
@customElement('nve-paragraph')
export default class NveParagraph extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;

  /** Typografivariant for paragrafen */
  @property({ type: String, reflect: true }) size?:
    | 'leadLargeRegular'
    | 'leadLargeSemibold'
    | 'leadMediumRegular'
    | 'leadMediumSemibold'
    | 'leadSmallRegular'
    | 'leadSmallSemibold'
    | 'bodyLarge'
    | 'bodyLargeUnderline'
    | 'bodyMedium'
    | 'bodyMediumUnderline'
    | 'bodySmall'
    | 'bodySmallUnderline'
    | 'bodyXSmall'
    | 'bodyXSmallUnderline'
    | 'bodyLargeCompact'
    | 'bodyLargeUnderlineCompact'
    | 'bodyMediumCompact'
    | 'bodyMediumUnderlineCompact'
    | 'bodySmallCompact'
    | 'bodySmallUnderlineCompact'
    | 'bodyXSmallCompact'
    | 'bodyXSmallUnderlineCompact';

  static styles = [styles];

  render() {
    const variantClass = this.size ? `${this.size}` : '';
    return html`
      <p class="paragraph ${variantClass}" part="paragraph" data-testid="${this.testId}">
        <slot></slot>
      </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-paragraph': NveParagraph;
  }
}
