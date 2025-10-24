import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveRadioGroupDemo from './nve-radio-group-demo.component';
  
if (!customElements.get('nve-radio-group-demo')) {
  customElements.define('nve-radio-group-demo', NveRadioGroupDemo);
}

describe('nve-radio-group-demo', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveRadioGroupDemo>(html`<nve-radio-group-demo></nve-radio-group-demo>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  