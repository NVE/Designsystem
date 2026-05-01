import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveRadio from './nve-radio.component';

if (!customElements.get('nve-radio')) {
  customElements.define('nve-radio', NveRadio);
}

describe('nve-radio', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('is attached to the DOM', async () => {
    const el = await fixture<NveRadio>(html`<nve-radio></nve-radio>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
