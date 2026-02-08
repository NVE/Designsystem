import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveCheckboxGroupDemo from './nve-checkbox-group-demo.component';
  
if (!customElements.get('nve-checkbox-group-demo')) {
  customElements.define('nve-checkbox-group-demo', NveCheckboxGroupDemo);
}

describe('nve-checkbox-group-demo', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveCheckboxGroupDemo>(html`<nve-checkbox-group-demo></nve-checkbox-group-demo>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  