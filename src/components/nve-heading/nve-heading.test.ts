import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveHeading from './nve-heading.component';
  
if (!customElements.get('nve-heading')) {
  customElements.define('nve-heading', NveHeading);
}

describe('nve-heading', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveHeading>(html`<nve-heading></nve-heading>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  