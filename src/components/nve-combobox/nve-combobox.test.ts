import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveCombobox from './nve-combobox.component';

if (!customElements.get('nve-combobox')) {
  customElements.define('nve-combobox', NveCombobox);
}

describe('nve-combobox', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('has field--disabled when disabled attribute is set', async () => {
    const el = await fixture<NveCombobox>(html`<nve-combobox disabled></nve-combobox>`);
    expect(el?.shadowRoot?.querySelector('.field--disabled')).toBeTruthy();
  });

  it('has field--readonly when readonly attribute is set', async () => {
    const el = await fixture<NveCombobox>(html`<nve-combobox readonly></nve-combobox>`);
    expect(el?.shadowRoot?.querySelector('.field--readonly')).toBeTruthy();
  });

  it('field__help-text element with correct help text', async () => {
    const el = await fixture<NveCombobox>(html`<nve-combobox helpText="Help text"></nve-combobox>`);
    const text = el?.shadowRoot?.querySelector('.field__help-text')?.textContent?.trim();

    expect(text).toBe('Help text');
  });

  it('test if selectedValues are removed from the DOM', async () => {
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ];
    const selectedValues = ['1'];
    const el = await fixture<NveCombobox>(
      html`<nve-combobox .options=${options} .selectedValues=${selectedValues}></nve-combobox>`
    );
    expect(el.hasAttribute('selectedValues')).toBeFalsy();
  });

  it('has field--filled when filled attribute is set', async () => {
    const el = await fixture<NveCombobox>(html`<nve-combobox filled></nve-combobox>`);
    expect(el?.shadowRoot?.querySelector('.field--filled')).toBeTruthy();
  });

  it('has combobox__control--medium when default size is set', async () => {
    const el = await fixture<NveCombobox>(html`<nve-combobox></nve-combobox>`);
    expect(el?.shadowRoot?.querySelector('.combobox__control--medium')).toBeTruthy();
  });

  it('has combobox__control--small when small size is set', async () => {
    const el = await fixture<NveCombobox>(html`<nve-combobox size="small"></nve-combobox>`);
    expect(el?.shadowRoot?.querySelector('.combobox__control--small')).toBeTruthy();
  });

  it('has combobox__control--large when large size is set', async () => {
    const el = await fixture<NveCombobox>(html`<nve-combobox size="large"></nve-combobox>`);
    expect(el?.shadowRoot?.querySelector('.combobox__control--large')).toBeTruthy();
  });

  it('has field--error when errorMessage attribute is set', async () => {
    const el = await fixture<NveCombobox>(html`<nve-combobox errorMessage="Error message"></nve-combobox>`);
    expect(el?.shadowRoot?.querySelector('.field--error')).toBeTruthy();
  });

  it('has field__label with correct text', async () => {
    const el = await fixture<NveCombobox>(html`<nve-combobox label="Label text"></nve-combobox>`);
    const text = el?.shadowRoot?.querySelector('.field__label')?.textContent?.trim();

    expect(text).toBe('Label text');
  });

  describe('validate method', () => {
    it('returns true when no validation rules are set', async () => {
      const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ];
      const el = await fixture<NveCombobox>(html`<nve-combobox .options=${options}></nve-combobox>`);
      const isValid = el.validate();
      expect(isValid).toBe(true);
      expect(el.internalValidationMessage).toBe('');
    });

    it('returns false and sets internalValidationMessage when a validation rule fails', async () => {
      const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ];
      const el = await fixture<NveCombobox>(
        html`<nve-combobox
          .options=${options}
          .validationRules=${[(value: string[]) => value.length > 0 || 'Feltet kan ikke være tomt']}
        ></nve-combobox>`
      );

      const isValid = el.validate();
      expect(isValid).toBe(false);
      expect(el.internalValidationMessage).toBe('Feltet kan ikke være tomt');
    });

    it('returns true and clears internalValidationMessage when all validation rules pass', async () => {
      const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ];
      const el = await fixture<NveCombobox>(
        html`<nve-combobox
          .options=${options}
          .selectedValues=${['1']}
          .validationRules=${[(value: string[]) => value.length > 0 || 'Feltet kan ikke være tomt']}
        ></nve-combobox>`
      );

      const isValid = el.validate();
      expect(isValid).toBe(true);
      expect(el.internalValidationMessage).toBe('');
    });
  });
});
