import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveRadioButton from './nve-radio-button.component';
  
if (!customElements.get('nve-radio-button')) {
  customElements.define('nve-radio-button', NveRadioButton);
}

describe('nve-radio-button', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveRadioButton>(html`<nve-radio-button></nve-radio-button>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  