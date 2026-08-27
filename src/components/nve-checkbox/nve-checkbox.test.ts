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

  it('dispatches change event with correct value when checkbox is toggled', async () => {
    const el = await fixture<NveCheckbox>(html`<nve-checkbox value="test-value"></nve-checkbox>`);
    const input = el.shadowRoot?.querySelector('input') as HTMLInputElement;
    let changeEventValue: string | undefined;
    el.addEventListener('change', (event: Event) => {
      changeEventValue = (event.target as HTMLInputElement).value;
    });
    input.click();
    expect(changeEventValue).toBe('test-value');
  });

  it('is invalid when required and unchecked', async () => {
    const elError = await fixture<NveCheckbox>(html`<nve-checkbox errorMessage="error message"></nve-checkbox>`);
    const elOk = await fixture<NveCheckbox>(html`<nve-checkbox></nve-checkbox>`);
    const inputError = elError.shadowRoot?.querySelector('input') as HTMLInputElement;
    const inputOk = elOk.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(inputError.hasAttribute('aria-invalid')).toBe(true);
    expect(inputOk.hasAttribute('aria-invalid')).toBe(false);
  });
});
