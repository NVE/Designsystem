import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveCheckboxDemo from './nve-checkbox-demo.component';
  
if (!customElements.get('nve-checkbox-demo')) {
  customElements.define('nve-checkbox-demo', NveCheckboxDemo);
}

describe('nve-checkbox-demo', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveCheckboxDemo>(html`<nve-checkbox-demo></nve-checkbox-demo>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  