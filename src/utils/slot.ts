import type { LitElement, ReactiveController, ReactiveControllerHost } from 'lit';
import { applyStyles } from './styles';

/** 
 * A reactive controller that determines when slots exist. 
 * Denne kan du bruke til å sjekke om komponent har en slot og vise det slot'en inneholder. 
 * Kopiert fra kildekoden til Shoelace og lettere modifisert. 
 */
export class HasSlotController implements ReactiveController {
  host: ReactiveControllerHost & Element;
  slotNames: string[] = [];

  constructor(host: ReactiveControllerHost & Element, ...slotNames: string[]) {
    (this.host = host).addController(this);
    this.slotNames = slotNames;
  }

  private hasDefaultSlot() {
    return [...this.host.childNodes].some((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent!.trim() !== '') {
        return true;
      }

      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        const tagName = el.tagName.toLowerCase();

        // Ignore visually hidden elements since they aren't rendered
        if (tagName === 'sl-visually-hidden') {
          return false;
        }

        // If it doesn't have a slot attribute, it's part of the default slot
        if (!el.hasAttribute('slot')) {
          return true;
        }
      }

      return false;
    });
  }

  private hasNamedSlot(name: string): boolean {
    return this.get(name) !== null;
  }

  /**
   * @returns en slot med gitt navn eller null om den ikke finnes
   */
  get(slotName: string): ChildNode | null {
    return this.host.querySelector(`:scope > [slot="${slotName}"]`);
  }

  test(slotName: string): boolean {
    return slotName === '[default]' ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
  }

  hostConnected() {
    this.host.shadowRoot!.addEventListener('slotchange', this.handleSlotChange);
  }

  hostDisconnected() {
    this.host.shadowRoot!.removeEventListener('slotchange', this.handleSlotChange);
  }

  private handleSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;

    if ((this.slotNames.includes('[default]') && !slot.name) || (slot.name && this.slotNames.includes(slot.name))) {
      this.host.requestUpdate();
    }
  };
}

/**
 * Given a slot, this function iterates over all of its assigned element and text nodes and returns the concatenated
 * HTML as a string. This is useful because we can't use slot.innerHTML as an alternative.
 */
export function getInnerHTML(slot: HTMLSlotElement): string {
  const nodes = slot.assignedNodes({ flatten: true });
  let html = '';

  [...nodes].forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      html += (node as HTMLElement).outerHTML;
    }

    if (node.nodeType === Node.TEXT_NODE) {
      html += node.textContent;
    }
  });

  return html;
}

/**
 * Given a slot, this function iterates over all of its assigned text nodes and returns the concatenated text as a
 * string. This is useful because we can't use slot.textContent as an alternative.
 */
export function getTextContent(slot: HTMLSlotElement | undefined | null): string {
  if (!slot) {
    return '';
  }
  const nodes = slot.assignedNodes({ flatten: true });
  let text = '';

  [...nodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });

  return text;
}


/**
 * Bruker tilpassede stiler på spesifikke slots i en LitElement-komponent.
 * 
 * Denne funksjonen analyserer den angitte stilstrengen, trekker ut sporspesifikke stiler,
 * og bruker disse stilene på de tilsvarende sporelementene i komponenten.
 *
 * @param-stiler – En streng som inneholder CSS-stiler med sporspesifikke velgere, f.eks. "slot:prefix { display: none; }; slot:label { padding-left: 8px; }".
 * @param-komponent - LitElement-komponenten som stilene skal brukes på.
 */
export const applySlotStyle = (styles: string,component:LitElement) => {
    const slotStyleRegex = /slot:([^{]+){([^}]+)}/g;
    let match;
    
    while ((match = slotStyleRegex.exec(styles)) !== null) {
      const slotName = match[1].trim();
      const styles = match[2].split(';').filter(style => style.trim()).join(';');
      const slotElement = getSlotElement(slotName, component);

      if (slotElement) {
        applyStyles(slotElement, styles);
      }
    }
  
}

/**
 * Henter HTMLElement knyttet til et spesifikt slot i en LitElement-komponent.
 * 
 * Denne funksjonen identifiserer og returnerer elementet som tilsvarer det gitte spornavnet.
 *
 * @param slotName - Navnet på slot som elementet skal hentes for. Akseptable verdier er prefix, suffix eller label.
 * @param-komponent - LitElement-komponenten som inneholder slot.
 * @returns HTMLElementet som er knyttet til det angitte slot, eller null hvis slot ikke eksisterer.
 */
 const getSlotElement = (slotName: string, component:LitElement): HTMLElement | null => {
  switch (slotName) {
    case 'prefix':
    case 'suffix':
      return component.renderRoot.querySelector(`slot[name="${slotName}"]`) as HTMLElement;
    case 'label':
      return component.renderRoot.querySelector(`slot[part="${slotName}"]`) as HTMLElement;
    default:
      return null;
  }
}
