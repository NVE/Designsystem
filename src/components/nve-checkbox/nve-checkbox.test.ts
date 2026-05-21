import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveCheckbox from './nve-checkbox.component';

if (!customElements.get('nve-checkbox')) {
  customElements.define('nve-checkbox', NveCheckbox);
}

describe('nve-checkbox', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('has checkbox--disabled when disabled attribute is set', async () => {
    const el = await fixture<NveCheckbox>(html`<nve-checkbox disabled></nve-checkbox>`);
    const checkbox = el.shadowRoot?.querySelector('.checkbox');
    expect(checkbox?.classList.contains('checkbox--disabled')).toBe(true);
  });

  it('has checkbox--small when size attribute is set to small', async () => {
    const el = await fixture<NveCheckbox>(html`<nve-checkbox size="small"></nve-checkbox>`);
    const checkbox = el.shadowRoot?.querySelector('.checkbox');
    expect(checkbox?.classList.contains('checkbox--small')).toBe(true);
  });

  it('has checkbox--large when size attribute is set to large', async () => {
    const el = await fixture<NveCheckbox>(html`<nve-checkbox size="large"></nve-checkbox>`);
    const checkbox = el.shadowRoot?.querySelector('.checkbox');
    expect(checkbox?.classList.contains('checkbox--large')).toBe(true);
  });

  it('input element has correct value attribute', async () => {
    const el = await fixture<NveCheckbox>(html`<nve-checkbox value="test-value"></nve-checkbox>`);
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.getAttribute('value')).toBe('test-value');
  });
});
