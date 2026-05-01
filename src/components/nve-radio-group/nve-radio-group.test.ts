import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveRadioGroup from './nve-radio-group.component';

if (!customElements.get('nve-radio-group')) {
  customElements.define('nve-radio-group', NveRadioGroup);
}

describe('nve-radio-group', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('is attached to the DOM', async () => {
    const el = await fixture<NveRadioGroup>(html`<nve-radio-group></nve-radio-group>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
