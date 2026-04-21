import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveSelectDemo from './nve-select-demo.component';

if (!customElements.get('nve-select-demo')) {
  customElements.define('nve-select-demo', NveSelectDemo);
}

describe('nve-select-demo', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('has field--disabled when disabled attribute is set', async () => {
    const el = await fixture<NveSelectDemo>(html`<nve-select-demo disabled></nve-select-demo>`);
    expect(el?.shadowRoot?.querySelector('.field--disabled')).toBeTruthy();
  });

  it('has field--readonly when readonly attribute is set', async () => {
    const el = await fixture<NveSelectDemo>(html`<nve-select-demo readonly></nve-select-demo>`);
    expect(el?.shadowRoot?.querySelector('.field--readonly')).toBeTruthy();
  });

  it('field__help-text element with correct help text', async () => {
    const el = await fixture<NveSelectDemo>(html`<nve-select-demo helpText="Help text"></nve-select-demo>`);
    const text = el?.shadowRoot?.querySelector('.field__help-text')?.textContent?.trim();

    expect(text).toBe('Help text');
  });

  it('test if selectedIds are removed from the DOM', async () => {
    const options = [
      { id: '1', value: '1', label: 'Option 1' },
      { id: '2', value: '2', label: 'Option 2' },
    ];
    const selectedValues = ['1'];
    const el = await fixture<NveSelectDemo>(
      html`<nve-select-demo .options=${options} .selectedValues=${selectedValues}></nve-select-demo>`
    );
    expect(el.hasAttribute('selectedIds')).toBeFalsy();
  });

  it('has field--filled when filled attribute is set', async () => {
    const el = await fixture<NveSelectDemo>(html`<nve-select-demo filled></nve-select-demo>`);
    expect(el?.shadowRoot?.querySelector('.field--filled')).toBeTruthy();
  });

  it('has combobox__control--medium when default size is set', async () => {
    const el = await fixture<NveSelectDemo>(html`<nve-select-demo></nve-select-demo>`);
    expect(el?.shadowRoot?.querySelector('.combobox__control--medium')).toBeTruthy();
  });

  it('has combobox__control--small when small size is set', async () => {
    const el = await fixture<NveSelectDemo>(html`<nve-select-demo size="small"></nve-select-demo>`);
    expect(el?.shadowRoot?.querySelector('.combobox__control--small')).toBeTruthy();
  });

  it('has combobox__control--large when large size is set', async () => {
    const el = await fixture<NveSelectDemo>(html`<nve-select-demo size="large"></nve-select-demo>`);
    expect(el?.shadowRoot?.querySelector('.combobox__control--large')).toBeTruthy();
  });

  it('has field--error when errorMessage attribute is set', async () => {
    const el = await fixture<NveSelectDemo>(html`<nve-select-demo errorMessage="Error message"></nve-select-demo>`);
    expect(el?.shadowRoot?.querySelector('.field--error')).toBeTruthy();
  });

  it('has field__label with correct text', async () => {
    const el = await fixture<NveSelectDemo>(html`<nve-select-demo label="Label text"></nve-select-demo>`);
    const text = el?.shadowRoot?.querySelector('.field__label')?.textContent?.trim();

    expect(text).toBe('Label text');
  });
});
