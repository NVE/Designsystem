import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import { afterAll, describe, expect, it, vi } from 'vitest';
import NveTooltip from './nve-tooltip.component';

if (!customElements.get('nve-tooltip')) {
  customElements.define('nve-tooltip', NveTooltip);
}

describe('nve-tooltip', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('has the documented default properties', async () => {
    const el = await fixture<NveTooltip>(html`<nve-tooltip></nve-tooltip>`);

    expect(el.open).toBe(false);
    expect(el.trigger).toBe('hover focus');
    expect(el.placement).toBe('top');
    expect(el.variant).toBe('neutral');
    expect(el.saturation).toBe('emphasized');
  });

  it('renders plain text content and connects aria-describedby to the trigger element', async () => {
    const el = await fixture<NveTooltip>(html`
      <nve-tooltip content="Hjelpetekst">
        <button type="button">Info</button>
      </nve-tooltip>
    `);

    await el.show();

    const trigger = el.querySelector('button');
    const body = el.shadowRoot?.querySelector('.tooltip__body');

    expect(body?.textContent?.trim()).toBe('Hjelpetekst');
    expect(trigger?.getAttribute('aria-describedby')).toBeTruthy();
  });

  it('supports HTML content through the content slot', async () => {
    const el = await fixture<NveTooltip>(html`
      <nve-tooltip open trigger="manual">
        <ul slot="content">
          <li>item1</li>
        </ul>
        <button type="button">Info</button>
      </nve-tooltip>
    `);

    const contentSlot = el.shadowRoot?.querySelector('slot[name="content"]') as HTMLSlotElement | null;
    const [assignedContent] = contentSlot?.assignedElements({ flatten: true }) ?? [];

    expect(assignedContent?.tagName.toLowerCase()).toBe('ul');
    expect(assignedContent?.querySelector('li')?.textContent?.trim()).toBe('item1');
  });

  it('toggles open and closed when trigger is click', async () => {
    const el = await fixture<NveTooltip>(html`
      <nve-tooltip trigger="click" content="Klikk">
        <button type="button">Info</button>
      </nve-tooltip>
    `);

    const trigger = el.querySelector('button');
    trigger?.click();
    await el.updateComplete;

    expect(el.open).toBe(true);

    trigger?.click();
    await el.updateComplete;

    expect(el.open).toBe(false);
  });

  it('dispatches show and hide when shown and hidden programmatically', async () => {
    const el = await fixture<NveTooltip>(html`
      <nve-tooltip content="Visning">
        <button type="button">Info</button>
      </nve-tooltip>
    `);

    const showSpy = vi.fn();
    const hideSpy = vi.fn();

    el.addEventListener('show', showSpy);
    el.addEventListener('hide', hideSpy);

    await el.show();
    await el.hide();

    expect(showSpy).toHaveBeenCalledTimes(1);
    expect(hideSpy).toHaveBeenCalledTimes(1);
  });
});
