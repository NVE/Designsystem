import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-relative-time.styles';
import { SlRelativeTime } from '@shoelace-style/shoelace';

/**
 * En enkel wrapper rundt SlRelativeTime. Bruker <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat" class="external-link" rel="noopener noreferrer" target="_blank"><code>Intl.RelativeTimeFormat</code> API'et</a> for å formattere dato og vise tekst på valgte språk.
 *
 * */

@customElement('nve-relative-time')
export default class NveRelativeTime extends SlRelativeTime implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
  /** Setter språket som brukes. Bruk 'nn' eller 'nb' for norsk, 'en' for engelsk.
   * Dersom denne ikke settes (og heller ikke arves) så er det browseren sitt språk som brukes */
  @property({ reflect: true, type: String }) lang: string = '';
  static styles = [styles]; /* (!) SlRelativeTime.styles finnes ikke, så trenger ikke arve derfra */

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-relative-time': NveRelativeTime;
  }
}
