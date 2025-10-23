import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveForm from './nve-form.component';
  
if (!customElements.get('nve-form')) {
  customElements.define('nve-form', NveForm);
}

describe('nve-form', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveForm>(html`<nve-form></nve-form>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  