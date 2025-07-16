import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-warning-level.styles';
import { classMap } from 'lit/directives/class-map.js';
import triangleIcon from '../../assets/icons/triangle-warning.svg';
import circleIcon from '../../assets/icons/circle-warning.svg';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * DangerLevel-komponenten brukes til å vise gjeldende faregrad ved hjelp av farge og et siffer som representerer nivået.
 * Faregraden angis med et tall fra 1 til 5, eller et spørsmålstegn (?) dersom nivået er ukjent.
 *
 * I tillegg kan faregraden støttes av et ekstra ikon/badge som plasseres nederst til høyre i komponenten.
 * Dette ikonet kan være enten en trekant eller en sirkel (se eksempler nedenfor) for å tiltrekke ekstra oppmerksomhet.
 *
 * Komponenten kan legges inni button- eller a-elementer for å gi ekstra hover-effekter.
 *
 * Tilgjengelighetsmerkingen (aria-label) kan variere ut fra behov, og det anbefales derfor at brukere selv setter verdiene for ariaLabel.
 * Les mer i seksjonen om universel utforming.
 * @csspart base - farenivå kontainer
 * @csspart warning-badge - støtte badge som vises nederst til høyre i faregradskomponenten
 *
 */
@customElement('nve-warning-level')
export default class NveWarningLevel extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Farenivå. Bestemmer farge og tekst i komponenten */
  @property() level: 'unknown' | '1' | '2' | '3' | '4' | '5' = '1';
  /** Om farenivå skal ha en ramme */
  @property({ type: Boolean }) border = false;
  /** Støtte badge type */
  @property({ type: String }) warningBadge: 'triangle' | 'circle' | null = null;
  /** Aria-label tekst for komponenten */
  @property({ type: String, attribute: 'aria-label' }) ariaLabel: string | null = null;

  static styles = [styles];

  constructor() {
    super();
  }

  /**
   * @internal
   * Sjekker om komponent er plassert innen en knapp eller lenke.
   */
  private get isInsideButton(): boolean {
    const parent = this.parentElement;
    if (!parent) return false;
    const tag = parent.tagName.toLowerCase();
    return tag === 'button' || tag === 'a';
  }

  render() {
    return html`
      <div
        class=${classMap({
          'warning-level': true,
          [`warning-level--${this.level}`]: true,
          border: this.border,
          'inside-button': this.isInsideButton,
        })}
        part="base"
        role="img"
        testId=${ifDefined(this.testId)}
        aria-label=${ifDefined(this.ariaLabel)}
      >
        ${this.level === 'unknown' ? '?' : this.level}
        ${this.warningBadge
          ? html`
              <img
                part="warning-badge"
                alt=""
                class=${classMap({
                  'warning-level-badge': true,
                  'warning-leve-badge--circle': this.warningBadge === 'circle',
                  'warning-leve-badge--triangle': this.warningBadge === 'triangle',
                })}
                src=${this.warningBadge === 'triangle' ? triangleIcon : circleIcon}
              />
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-warning-level': NveWarningLevel;
  }
}
