import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveRadioDemo from './nve-radio-demo.component';
  
if (!customElements.get('nve-radio-demo')) {
  customElements.define('nve-radio-demo', NveRadioDemo);
}

describe('nve-radio-demo', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveRadioDemo>(html`<nve-radio-demo></nve-radio-demo>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  