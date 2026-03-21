import { LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-button.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { html, literal } from 'lit/static-html.js';

/**
 * Knapp-komponenten brukes til å utføre handlinger eller starte hendelser i grensesnittet.
 * Den gir brukerne en tydelig og gjenkjennelig måte å samhandle med systemet på, for eksempel ved å sende inn skjemaer,
 * bekrefte valg eller gå videre til neste steg i en prosess.
 *
 * Knappen er utformet for å være tydelige, konsistente og tilgjengelige, slik at brukere enkelt kan identifisere og bruke
 * viktige handlinger på tvers av ulike enheter og kontekster. For mer informasjon om tilgjengelighet, se seksjonen om tilgjengelighet.
 * Veiledning om når og hvordan knapper bør brukes finner du i retningslinjene.
 *
 * @slot start - Innhold som vises før hovedinnholdet i knappen, for eksempel et ikon.
 * @slot end - Innhold som vises etter hovedinnholdet i knappen, for eksempel et ikon.
 *
 * @csspart base Topp-elementet, enten <button> eller <a>.
 * @csspart label Hoved innholdet i knappen, vanligvis tekst.
 * @csspart spinner Spinneren som vises når knappen er i loading-tilstand.
 * @csspart start Innholdet i start-slottet, for eksempel et ikon.
 * @csspart end Innholdet i end-slottet, for eksempel et ikon.
 */
@customElement('nve-button')
export default class NveButton extends LitElement implements INveComponent {
  /* Våre custom properties */

  @property({ type: String }) testId: string | undefined = undefined;

  /** Om knappen skal være rund. Fungerer kun når det ikke finnes noe tekst og bare et ikon vises */
  @property({ type: Boolean }) circle = false;
  /** Loader tilstanden på knappen */
  @property({ type: Boolean, reflect: true }) loading = false;
  /** Størrelsen på knappen */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Varianter av knappen */
  @property({ type: String, reflect: true }) variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' =
    'secondary';

  /* Native link properties - siden knappen kan også fungere som en lenke */
  /** Filnavnet for nedlasting når `href` er tilstede. */
  @property({ type: String }) download?: string;
  /** URL-en som knappen skal navigere til når den klikkes. */
  @property({ type: String }) href?: string;
  /** Språket for den lenkede ressursen. */
  @property({ type: String }) hreflang?: string;
  /** Hvordan referereren skal håndteres når lenken følges. */
  @property({ type: String }) referrerpolicy?: string;
  /** rel-attributtet for lenken når `href` er tilstede. */
  @property({ type: String }) rel?: string;
  /** Hvor lenken skal åpnes. Kun brukt når `href` er tilstede. */
  @property({ type: String }) target?: '_blank' | '_parent' | '_self' | '_top';

  /* Skjema properties */
  /** ID-en til skjemaet som knappen er tilknyttet. */
  @property({ type: String }) form?: string;
  /** URL-en som skjemaet skal sendes til når knappen klikkes. */
  @property({ type: String }) formAction?: string;
  /** Hvordan skjemaet skal kodes når det sendes. */
  @property({ type: String }) formEnctype?: string;
  /** HTTP-metoden som skal brukes når skjemaet sendes. */
  @property({ type: String }) formMethod?: string;
  /** Om skjemaet skal valideres før sending. */
  @property({ type: Boolean }) formNoValidate = false;
  /** Hvor skjemaet skal åpnes når det sendes. */
  @property({ type: String }) formTarget?: 'self' | '_blank' | '_parent' | '_top';
  /** Navnet på knappen når den brukes i et skjema. */
  @property({ type: String }) name?: string;

  /* Native Button properties */
  /** Om knappen skal være i fokus når siden lastes. */
  @property({ type: Boolean, reflect: true }) autofocus = false;
  /** Om knappen skal være deaktivert. */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Typen av knappen. */
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';
  /** Verdien til knappen. */
  @property({ type: String }) value?: string;

  /* Arias */
  /*  Selv om LitElement eksponerer ganske mange av de, når de blir endret i DOM-en oppdateres de ikke via updated() 
  metoden på button native el */
  /**
   * @internal
   */
  @property({ type: String, attribute: 'aria-controls' }) ariaControls?: string;
  /**
   * @internal
   */
  @property({ type: String, attribute: 'aria-expanded' }) ariaExpanded: 'true' | 'false' | null = null;
  /**
   * @internal
   */
  @property({ type: String, attribute: 'aria-haspopup' }) ariaHaspopup: 'true' | 'false' | null = null;
  /**
   * @internal
   */
  @property({ type: String, attribute: 'aria-label' }) ariaLabel: string | null = null;
  /**
   * @internal
   */
  @property({ type: String, attribute: 'aria-pressed' }) ariaPressed: 'true' | 'false' | 'mixed' | null = null;

  @state() private hasIconOrImgOnly = false;
  /**
   * @internal
   */
  @query('.button') button!: HTMLButtonElement | HTMLLinkElement;

  static styles = [styles];

  /** Finn tilknyttet skjema, enten via [form] eller nærmeste <form>-forfader. */
  private getForm(): HTMLFormElement | null {
    if (this.form) {
      // Den sjekker hele domen, ikke bare nærmeste form-element.
      const root = this.getRootNode() as Document | ShadowRoot;
      const form = root.getElementById(this.form);
      if (form instanceof HTMLFormElement) return form;
    }

    return this.closest('form') as HTMLFormElement | null;
  }

  private constructLightDOMButton(): HTMLButtonElement {
    const button = document.createElement('button');

    // Grunnleggende knappesemantikk
    button.type = this.type;
    if (this.name) button.name = this.name;
    button.value = this.value ?? '';
    if (this.disabled || this.loading) button.disabled = true;

    // Skjema‑relaterte attributter
    if (this.form) button.setAttribute('form', this.form);
    if (this.formAction) button.formAction = this.formAction;
    if (this.formEnctype) button.formEnctype = this.formEnctype;
    if (this.formMethod) button.formMethod = this.formMethod;
    if (this.formNoValidate) button.formNoValidate = true;
    if (this.formTarget) button.formTarget = this.formTarget;

    // Visuelt skjult (påvirker ikke layout)
    button.style.position = 'absolute';
    button.style.width = '0';
    button.style.height = '0';
    button.style.clipPath = 'inset(50%)';
    button.style.overflow = 'hidden';
    button.style.whiteSpace = 'nowrap';

    return button;
  }

  private handleClick(event: PointerEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    // Emuler kun native oppførsel for submit/reset.
    // Siden den reelle klikkbare knappen ligger i shadow DOM, fanges den ikke opp av nettleserens skjemalogikk.
    // Den skjulte knappen i light DOM er et kompromiss: vi klikker den, og nettleseren behandler den som "submitter".
    if (this.type === 'submit' || this.type === 'reset') {
      const form = this.getForm();
      if (!form) return;
      const lightButton = this.constructLightDOMButton();
      form.appendChild(lightButton);
      lightButton.click();
      lightButton.remove();
    }
  }

  private handleDefaultSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const nodes = slot.assignedNodes({ flatten: true });

    const hasText = nodes.some((node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim());

    if (hasText) {
      return;
    }

    const elements = nodes.filter((n) => n.nodeType === Node.ELEMENT_NODE) as HTMLElement[];

    if (elements.length === 1) {
      this.hasIconOrImgOnly = elements.some((el) => {
        const tag = el.tagName.toLowerCase();
        return tag === 'img' || tag === 'nve-icon';
      });
    }
  }

  /** Simulerer et klikk på knappen. */
  click() {
    this.button.click();
  }

  /** Setter fokus på knappen. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Fjerner fokus fra knappen. */
  blur() {
    this.button.blur();
  }

  private isLink() {
    return !!this.href;
  }

  // Vi ønsker at ARIA‑attributter kun skal ligge på den native knappen, ikke på host.
  private forwardAriaAttributes(el: HTMLElement) {
    for (const name of this.getAttributeNames()) {
      if (name.startsWith('aria-')) {
        const value = this.getAttribute(name);
        if (value !== null) {
          el.setAttribute(name, value);
          this.removeAttribute(name);
        }
      }
    }
  }

  constructor() {
    super();
  }

  updated() {
    if (this.button) {
      this.forwardAriaAttributes(this.button);
    }
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    if (this.autofocus) {
      this.focus();
    }
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`button`;
    return html`
      <${tag}
        part="base"
        @click=${this.handleClick}
        class=${classMap({
          button: true,
          'button--small': this.size === 'small',
          'button--medium': this.size === 'medium',
          'button--large': this.size === 'large',
          'button--primary': this.variant === 'primary',
          'button--secondary': this.variant === 'secondary',
          'button--tertiary': this.variant === 'tertiary',
          'button--ghost': this.variant === 'ghost',
          'button--danger': this.variant === 'danger',
          'button--loading': this.loading,
          'button--icon-only': this.hasIconOrImgOnly,
          'button--circle': this.circle && this.hasIconOrImgOnly,
          'button--disabled': this.disabled,
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : this.type)}
        name=${ifDefined(isLink ? undefined : this.name)}
        value=${ifDefined(isLink ? undefined : this.value)}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        testid=${ifDefined(this.testId)}
        form=${ifDefined(!isLink ? this.form : undefined)}
        formaction=${ifDefined(!isLink ? this.formAction : undefined)}
        formenctype=${ifDefined(!isLink ? this.formEnctype : undefined)}
        formtarget=${ifDefined(!isLink ? this.formTarget : undefined)}
        rel=${ifDefined(isLink && this.rel ? this.rel : undefined)}
        aria-disabled=${ifDefined(isLink && this.disabled ? 'true' : undefined)}
        tabindex=${ifDefined(isLink && this.disabled ? '-1' : undefined)}
      >
        <slot part="start" name="start"></slot>

        ${
          this.loading && this.hasIconOrImgOnly
            ? nothing
            : html`<slot part="label" @slotchange=${this.handleDefaultSlotChange}> </slot>`
        }
        ${this.loading ? html`<div part="spinner" class="button__spinner"></div>` : nothing}
        ${!this.loading ? html`<slot part="end" name="end"></slot>` : nothing}
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
