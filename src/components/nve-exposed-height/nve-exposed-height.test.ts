import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveExposedHeight from './nve-exposed-height.component';
  
if (!customElements.get('nve-exposed-height')) {
  customElements.define('nve-exposed-height', NveExposedHeight);
}

describe('nve-exposed-height', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveExposedHeight>(html`<nve-exposed-height></nve-exposed-height>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  