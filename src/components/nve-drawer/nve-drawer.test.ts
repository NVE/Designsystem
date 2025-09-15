import { describe, it, expect, afterAll } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveDrawer from './nve-drawer.component';

if (!customElements.get('nve-drawer')) {
  customElements.define('nve-drawer', NveDrawer);
}

// Helper to wait a frame so requestAnimationFrame in component runs
const nextFrame = () => new Promise<void>(resolve => requestAnimationFrame(() => resolve()));

const mapping: Record<string,string> = {
  start: 'left_panel_close',
  end: 'right_panel_close',
  top: 'top_panel_close',
  bottom: 'bottom_panel_close'
};

describe('nve-drawer', () => {
  afterAll(() => fixtureCleanup());

  ['start','end','top','bottom'].forEach(placement => {
    it(`should render correct close icon for placement="${placement}"`, async () => {
      const el = await fixture<NveDrawer>(html`<nve-drawer placement="${placement}" open></nve-drawer>`);
      await nextFrame();
      const closeButtonPart = el.shadowRoot?.querySelector('[part="close-button"]') as HTMLElement | null;
      const innerButton = closeButtonPart?.shadowRoot?.querySelector('button');
      const nveIcon = innerButton?.querySelector('nve-icon') as HTMLElement | null;
      expect(nveIcon).toBeTruthy();
      expect(nveIcon?.getAttribute('name')).toBe(mapping[placement]);
    });
  });

  it('should default to end mapping when placement is omitted', async () => {
    const el = await fixture<NveDrawer>(html`<nve-drawer open></nve-drawer>`);
    await nextFrame();
    const closeButtonPart = el.shadowRoot?.querySelector('[part="close-button"]') as HTMLElement | null;
    const innerButton = closeButtonPart?.shadowRoot?.querySelector('button');
    const nveIcon = innerButton?.querySelector('nve-icon') as HTMLElement | null;
    expect(nveIcon?.getAttribute('name')).toBe(mapping['end']);
  });
});

