import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveTextareaDemo from './nve-textarea-demo.component';
  
if (!customElements.get('nve-textarea-demo')) {
  customElements.define('nve-textarea-demo', NveTextareaDemo);
}

describe('nve-textarea-demo', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveTextareaDemo>(html`<nve-textarea-demo></nve-textarea-demo>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  