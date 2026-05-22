import { afterAll, describe, expect, it, vi } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveInput from './nve-input.component';

if (!customElements.get('nve-input')) {
  customElements.define('nve-input', NveInput);
}

describe('nve-textarea', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('is attached to the DOM', async () => {
    const el = await fixture<NveInput>(html`<nve-input label="Saskbehandlers navn"></nve-input>`);
    expect(document.body.contains(el)).toBe(true);
  });

  it('associates label "for" with the internal input id', async () => {
    const el = await fixture<NveInput>(html`<nve-input label="Saskbehandlers navn"></nve-input>`);

    const label = el.shadowRoot?.querySelector<HTMLLabelElement>('label.field__label');
    const input = el.shadowRoot?.querySelector<HTMLInputElement>('input.input__control');

    expect(label).not.toBeNull();
    expect(input).not.toBeNull();
    expect(input?.id).toBeTruthy();
    expect(label?.getAttribute('for')).toBe(input?.id);
  });

  it('renders helpText and hint text when provided', async () => {
    const el = await fixture<NveInput>(html`
      <nve-input label="Saskbehandlers navn" helpText="Hjelpetekst" hint="Hinttekst"></nve-input>
    `);

    const helpText = el.shadowRoot?.querySelector('.field__help-text');
    const hintText = el.shadowRoot?.querySelector('.field__hint-text');

    expect(helpText?.textContent?.trim()).toBe('Hjelpetekst');
    expect(hintText?.textContent?.trim()).toBe('Hinttekst');
  });

  it('toggles modifier classes from properties (filled, disabled, readonly)', async () => {
    const el = await fixture<NveInput>(html`<nve-input label="Saskbehandlers navn"></nve-input>`);

    el.filled = true;
    el.disabled = true;
    el.readonly = true;
    await el.updateComplete;

    const field = el.shadowRoot?.querySelector('.field');
    const input = el.shadowRoot?.querySelector<HTMLInputElement>('input.input__control');

    expect(field?.classList.contains('field--filled')).toBe(true);
    expect(field?.classList.contains('field--disabled')).toBe(true);
    expect(field?.classList.contains('field--readonly')).toBe(true);
    expect(input?.disabled).toBe(true);
    expect(input?.readOnly).toBe(true);
  });

  it('applies input--large when size is small', async () => {
    const el = await fixture<NveInput>(html`<nve-input label="Saskbehandlers navn" size="small"></nve-input>`);
    expect(el?.shadowRoot?.querySelector('.input--small')).toBeTruthy();
  });

  it('applies input--large when size is large', async () => {
    const el = await fixture<NveInput>(html`<nve-input label="Saskbehandlers navn" size="large"></nve-input>`);
    expect(el?.shadowRoot?.querySelector('.input--large')).toBeTruthy();
  });

  it('uses edit_off icon when readonly and not disabled/error', async () => {
    const el = await fixture<NveInput>(html`<nve-input label="Saskbehandlers navn" readonly></nve-input>`);

    const icon = el.shadowRoot?.querySelector('nve-icon');
    expect(icon?.getAttribute('name')).toBe('edit_off');
  });

  it('uses lock icon when disabled and not readonly/error', async () => {
    const el = await fixture<NveInput>(html`<nve-input label="Saskbehandlers navn" disabled></nve-input>`);

    const icon = el.shadowRoot?.querySelector('nve-icon');
    expect(icon?.getAttribute('name')).toBe('lock');
  });

  it('builds aria-describedby as a space-separated list of existing ids', async () => {
    const el = await fixture<NveInput>(html`
      <nve-input label="Saskbehandlers navn" helpText="Hjelpetekst" hint="Hinttekst"></nve-input>
    `);

    const input = el.shadowRoot?.querySelector<HTMLInputElement>('input.input__control');
    expect(input).not.toBeNull();

    const describedBy = input?.getAttribute('aria-describedby') ?? '';
    const tokens = describedBy.split(/\s+/).filter(Boolean);

    expect(describedBy.includes(',')).toBe(false);
    expect(tokens.length).toBe(2);
    for (const token of tokens) {
      const node = el.shadowRoot?.getElementById(token);
      expect(node).not.toBeNull();
    }
  });

  it('emits a custom change event with the input value as detail', async () => {
    const el = await fixture<NveInput>(html`<nve-input label="Saskbehandlers navn"></nve-input>`);

    const input = el.shadowRoot?.querySelector<HTMLInputElement>('input.input__control');
    expect(input).not.toBeNull();

    const eventPromise = new Promise<CustomEvent<string>>((resolve) => {
      el.addEventListener(
        'change',
        (event) => {
          resolve(event as CustomEvent<string>);
        },
        { once: true }
      );
    });

    input!.value = 'Ny verdi';
    input!.dispatchEvent(new Event('change', { bubbles: true, composed: true }));

    const event = await eventPromise;
    expect(event.detail).toBe('Ny verdi');
  });

  it('clear button removes value', async () => {
    const el = await fixture<NveInput>(
      html`<nve-input label="Saskbehandlers navn" value="Test value" clearable></nve-input>`
    );

    const input = el.shadowRoot?.querySelector<HTMLInputElement>('input.input__control');
    expect(input).not.toBeNull();
    const onChange = vi.fn((event: Event) => event as CustomEvent<string>);
    el.addEventListener('change', onChange);
    const clearButton = el.shadowRoot?.querySelector('button.input__clear-button') as HTMLButtonElement;
    expect(clearButton).not.toBeNull();

    clearButton.click();

    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0][0] as CustomEvent<string>;
    expect(event.detail).toBe('');
    expect(el.value).toBe('');
  });

  it('step up increases number value, step down decreases number value', async () => {
    const el = await fixture<NveInput>(html`<nve-input label="Antall saker" value="1" type="number"></nve-input>`);

    const input = el.shadowRoot?.querySelector<HTMLInputElement>('input.input__control');
    expect(input).not.toBeNull();

    input?.stepUp();
    await el.updateComplete;
    expect(input?.value).toBe('2');

    input?.stepDown();
    input?.stepDown();
    await el.updateComplete;
    expect(input?.value).toBe('0');
  });
});
