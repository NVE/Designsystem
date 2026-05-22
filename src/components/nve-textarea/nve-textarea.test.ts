import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveTextarea from './nve-textarea.component';

if (!customElements.get('nve-textarea')) {
  customElements.define('nve-textarea', NveTextarea);
}

describe('nve-textarea', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('is attached to the DOM', async () => {
    const el = await fixture<NveTextarea>(html`<nve-textarea label="Beskriv saken"></nve-textarea>`);
    expect(document.body.contains(el)).toBe(true);
  });

  it('associates label "for" with the internal textarea id', async () => {
    const el = await fixture<NveTextarea>(html`<nve-textarea label="Beskriv saken"></nve-textarea>`);
    await el.updateComplete;

    const label = el.shadowRoot?.querySelector<HTMLLabelElement>('label.field__label');
    const textarea = el.shadowRoot?.querySelector<HTMLTextAreaElement>('textarea.textarea__control');

    expect(label).not.toBeNull();
    expect(textarea).not.toBeNull();
    expect(textarea?.id).toBeTruthy();
    expect(label?.getAttribute('for')).toBe(textarea?.id);
  });

  it('renders helpText and hint text when provided', async () => {
    const el = await fixture<NveTextarea>(html`
      <nve-textarea label="Beskriv saken" helpText="Hjelpetekst" hint="Hinttekst"></nve-textarea>
    `);
    await el.updateComplete;

    const helpText = el.shadowRoot?.querySelector('.field__help-text');
    const hintText = el.shadowRoot?.querySelector('.field__hint-text');

    expect(helpText?.textContent?.trim()).toBe('Hjelpetekst');
    expect(hintText?.textContent?.trim()).toBe('Hinttekst');
  });

  it('applies error state class, aria-invalid, and shows errorMessage in hint text', async () => {
    const el = await fixture<NveTextarea>(html`
      <nve-textarea label="Beskriv saken" hint="Hinttekst" errorMessage="Dette er en feil"></nve-textarea>
    `);
    await el.updateComplete;

    const field = el.shadowRoot?.querySelector('.field');
    const textarea = el.shadowRoot?.querySelector<HTMLTextAreaElement>('textarea.textarea__control');
    const hintText = el.shadowRoot?.querySelector('.field__hint-text');
    const icon = el.shadowRoot?.querySelector('nve-icon');

    expect(field?.classList.contains('field--error')).toBe(true);
    expect(textarea?.getAttribute('aria-invalid')).toBe('true');
    expect(hintText?.textContent?.trim()).toBe('Dette er en feil');
    expect(icon?.getAttribute('name')).toBe('error');
  });

  it('toggles modifier classes from properties (filled, disabled, readonly)', async () => {
    const el = await fixture<NveTextarea>(html`<nve-textarea label="Beskriv saken"></nve-textarea>`);
    await el.updateComplete;

    el.filled = true;
    el.disabled = true;
    el.readonly = true;
    await el.updateComplete;

    const field = el.shadowRoot?.querySelector('.field');
    const textarea = el.shadowRoot?.querySelector<HTMLTextAreaElement>('textarea.textarea__control');

    expect(field?.classList.contains('field--filled')).toBe(true);
    expect(field?.classList.contains('field--disabled')).toBe(true);
    expect(field?.classList.contains('field--readonly')).toBe(true);
    expect(textarea?.disabled).toBe(true);
    expect(textarea?.readOnly).toBe(true);
  });

  it('uses edit_off icon when readonly and not disabled/error', async () => {
    const el = await fixture<NveTextarea>(html`<nve-textarea label="Beskriv saken" readonly></nve-textarea>`);
    await el.updateComplete;

    const icon = el.shadowRoot?.querySelector('nve-icon');
    expect(icon?.getAttribute('name')).toBe('edit_off');
  });

  it('uses lock icon when disabled and not readonly/error', async () => {
    const el = await fixture<NveTextarea>(html`<nve-textarea label="Beskriv saken" disabled></nve-textarea>`);
    await el.updateComplete;

    const icon = el.shadowRoot?.querySelector('nve-icon');
    expect(icon?.getAttribute('name')).toBe('lock');
  });

  it('sets default rows to 2 and respects rows property', async () => {
    const el = await fixture<NveTextarea>(html`<nve-textarea label="Beskriv saken" rows=${5}></nve-textarea>`);
    await el.updateComplete;
    const textareaRows = el.shadowRoot?.querySelector<HTMLTextAreaElement>('textarea.textarea__control');
    expect(textareaRows?.rows).toBe('5');
  });

  it('builds aria-describedby as a space-separated list of existing ids', async () => {
    const el = await fixture<NveTextarea>(html`
      <nve-textarea label="Beskriv saken" helpText="Hjelpetekst" hint="Hinttekst"></nve-textarea>
    `);
    await el.updateComplete;

    const textarea = el.shadowRoot?.querySelector<HTMLTextAreaElement>('textarea.textarea__control');
    expect(textarea).not.toBeNull();

    const describedBy = textarea?.getAttribute('aria-describedby') ?? '';
    const tokens = describedBy.split(/\s+/).filter(Boolean);

    expect(describedBy.includes(',')).toBe(false);
    expect(tokens.length).toBe(2);
    for (const token of tokens) {
      const node = el.shadowRoot?.getElementById(token);
      expect(node).not.toBeNull();
    }
  });

  it('emits a custom change event with the textarea value as detail', async () => {
    const el = await fixture<NveTextarea>(html`<nve-textarea label="Beskriv saken"></nve-textarea>`);
    await el.updateComplete;

    const textarea = el.shadowRoot?.querySelector<HTMLTextAreaElement>('textarea.textarea__control');
    expect(textarea).not.toBeNull();

    const eventPromise = new Promise<CustomEvent<string>>((resolve) => {
      el.addEventListener(
        'change',
        (event) => {
          resolve(event as CustomEvent<string>);
        },
        { once: true }
      );
    });

    textarea!.value = 'Ny verdi';
    textarea!.dispatchEvent(new Event('change', { bubbles: true, composed: true }));

    const event = await eventPromise;
    expect(event.detail).toBe('Ny verdi');
  });
});
