import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';

/**
 * En gruppering av nve-details slik at de sammen fungerer som et accordion.
 * Komponenten vil sørge for at kun en nve-details kan være åpen om gangen.
 * Komponenten har ingen egen utforming, den viser kun det som er inni.
 * @slot (default) - legg alle nve-details inne denne for å kontrollere dem
 */
@customElement('nve-accordion')
export default class NveAccordion extends LitElement implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;

  //  lukker evt. andre åpne nve-details når en nve-details åpnes
  private handleShow = (event: Event) => {
    console.log('nve-accordion handleShow');
    if ((event.target as Element)?.localName === 'nve-details') {
      // finn alle under-elementer av typen nve-details
      [...this.querySelectorAll('nve-details')].map((detailsComponent) => {
        // kun elementet som åpnet seg nå skal være åpen, de andre skal lukkes
        detailsComponent.open = event.target === detailsComponent;
      });
    }
  };

  constructor() {
    super();
    console.log('nve-accordion constructor');
  }

  async firstUpdated() {
    console.log('nve-accordion firstUpdated');
    await new Promise((r) => setTimeout(r, 0)); // Gi nettleser en sjanse til å tegne komponenten først
    this.addEventListener('sl-show', (event) => this.handleShow(event)); // få beskjed når et nve-detail åpnes
  }

  protected render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-accordion': NveAccordion;
  }
}
