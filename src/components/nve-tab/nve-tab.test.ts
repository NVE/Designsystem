import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveTab from './nve-tab.component';

if (!customElements.get('nve-tab')) {
  customElements.define('nve-tab', NveTab);
}

describe('nve-tab', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('has large default size and no background', async () => {
    const el = await fixture<NveTab>(html`<nve-tab></nve-tab>`);
    expect(el.size).toBe('large');
    expect(el.background).toBe(false);
  });

  it('has small size and proper css class', async () => {
    const tab = await fixture<NveTab>(html`<nve-tab size="small"></nve-tab>`);
    const tabBase = tab.shadowRoot?.querySelector('div[part="base"]');
    expect(tab.size).toBe('small');
    expect(tabBase?.classList.contains('tab--large')).toBe(false);
  });

  it('has background and proper css class', async () => {
    const tab = await fixture<NveTab>(html`<nve-tab background></nve-tab>`);
    const tabBase = tab.shadowRoot?.querySelector('div[part="base"]');
    expect(tab.background).toBe(true);
    expect(tabBase?.classList.contains('tab--background')).toBe(true);
  });

  it('has has role tab', async () => {
    const tab = await fixture<NveTab>(html`<nve-tab></nve-tab>`);
    expect(tab.getAttribute('role')).toBe('tab');
  });

  it('renders prefix slot before main content and suffix slot after main content', async () => {
    const tab = await fixture<NveTab>(
      html`<nve-tab>
        <div slot="prefix">icon-prefix</div>
        Tab with suffix
        <div slot="suffix">icon-suffix</div>
      </nve-tab>`
    );

    const tabBase = tab.shadowRoot?.querySelector('div[part="base"]');

    const prefixSlot = tab.shadowRoot?.querySelector('slot[name="prefix"]') as HTMLSlotElement;
    const defaultSlot = tab.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
    const suffixSlot = tab.shadowRoot?.querySelector('slot[name="suffix"]') as HTMLSlotElement;

    const mainContent = (defaultSlot?.assignedNodes({ flatten: true }) ?? [])
      .map((node) => node.textContent)
      .join('')
      .trim();

    // Sjekke rekkefølgen i DOMen
    const children = Array.from(tabBase?.childNodes ?? []);
    const prefixIndex = children.findIndex(
      (node) =>
        node.nodeType === Node.ELEMENT_NODE &&
        (node as Element).tagName === 'SLOT' &&
        (node as Element).getAttribute('name') === 'prefix'
    );
    const defaultIndex = children.findIndex(
      (node) =>
        node.nodeType === Node.ELEMENT_NODE &&
        (node as Element).tagName === 'SLOT' &&
        !(node as Element).hasAttribute('name')
    );
    const suffixIndex = children.findIndex(
      (node) =>
        node.nodeType === Node.ELEMENT_NODE &&
        (node as Element).tagName === 'SLOT' &&
        (node as Element).getAttribute('name') === 'suffix'
    );

    expect(mainContent).toBe('Tab with suffix');
    expect(prefixSlot).toBeDefined();
    expect(suffixSlot).toBeDefined();
    expect(prefixIndex).toBeLessThan(defaultIndex);
    expect(defaultIndex).toBeLessThan(suffixIndex);
  });
});
