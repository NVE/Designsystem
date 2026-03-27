import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveSelectDemo from './nve-select-demo.component';
  
if (!customElements.get('nve-select-demo')) {
  customElements.define('nve-select-demo', NveSelectDemo);
}

describe('nve-select-demo', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveSelectDemo>(html`<nve-select-demo></nve-select-demo>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  