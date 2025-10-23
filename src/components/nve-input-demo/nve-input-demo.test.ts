import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveInputDemo from './nve-input-demo.component';
  
if (!customElements.get('nve-input-demo')) {
  customElements.define('nve-input-demo', NveInputDemo);
}

describe('nve-input-demo', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveInputDemo>(html`<nve-input-demo></nve-input-demo>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  