import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveOptionDemo from './nve-option-demo.component';
  
if (!customElements.get('nve-option-demo')) {
  customElements.define('nve-option-demo', NveOptionDemo);
}

describe('nve-option-demo', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveOptionDemo>(html`<nve-option-demo></nve-option-demo>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  