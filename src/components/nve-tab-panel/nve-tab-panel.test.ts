import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveTabPanel from './nve-tab-panel.component';
  
if (!customElements.get('nve-tab-panel')) {
  customElements.define('nve-tab-panel', NveTabPanel);
}

describe('nve-tab-panel', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveTabPanel>(html`<nve-tab-panel></nve-tab-panel>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  