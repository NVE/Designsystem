import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveRadioGroup from './nve-radio-group.component';
import NveRadio from '../nve-radio/nve-radio.component';

if (!customElements.get('nve-radio-group')) {
  customElements.define('nve-radio-group', NveRadioGroup);
}

if (!customElements.get('nve-radio')) {
  customElements.define('nve-radio', NveRadio);
}

async function waitForSlotWork(el: NveRadioGroup) {
  await el.updateComplete;
  await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
  await el.updateComplete;
}

describe('nve-radio-group', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('is attached to the DOM', async () => {
    const el = await fixture<NveRadioGroup>(html`<nve-radio-group></nve-radio-group>`);
    expect(document.body.contains(el)).toBe(true);
  });

  it('renders the default field and vertical group classes', async () => {
    const el = await fixture<NveRadioGroup>(html`
      <nve-radio-group label="Status">
        <nve-radio value="planned">Planlagt</nve-radio>
        <nve-radio value="current">Pågående</nve-radio>
      </nve-radio-group>
    `);

    const group = el.shadowRoot?.querySelector('.radio-group');

    expect(group?.classList.contains('radio-group--vertical')).toBe(true);
    expect(group?.classList.contains('radio-group--horizontal')).toBe(false);
  });

  it('renders the default field and horizontal group classes', async () => {
    const el = await fixture<NveRadioGroup>(html`
      <nve-radio-group label="Status" orientation="horizontal">
        <nve-radio value="planned">Planlagt</nve-radio>
        <nve-radio value="current">Pågående</nve-radio>
      </nve-radio-group>
    `);

    const group = el.shadowRoot?.querySelector('.radio-group');

    expect(group?.classList.contains('radio-group--vertical')).toBe(false);
    expect(group?.classList.contains('radio-group--horizontal')).toBe(true);
  });

  it('renders helpText and hintText with the correct classes', async () => {
    const el = await fixture<NveRadioGroup>(html`
      <nve-radio-group label="Status" helpText="Hjelpetekst" hintText="Hinttekst">
        <nve-radio value="planned">Planlagt</nve-radio>
      </nve-radio-group>
    `);

    const helpText = el.shadowRoot?.querySelector('.field__help-text');
    const hintText = el.shadowRoot?.querySelector('.field__hint-text');

    expect(helpText).not.toBeNull();
    expect(helpText?.textContent?.trim()).toBe('Hjelpetekst');
    expect(hintText).not.toBeNull();
    expect(hintText?.textContent?.trim()).toBe('Hinttekst');
  });

  it('propagates disabled to child radios that are not already disabled', async () => {
    const el = await fixture<NveRadioGroup>(html`
      <nve-radio-group label="Status" disabled>
        <nve-radio value="planned">Planlagt</nve-radio>
        <nve-radio value="current" disabled>Pågående</nve-radio>
      </nve-radio-group>
    `);

    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const radios: NveRadio[] = Array.from(el.querySelectorAll('nve-radio'));
    const bases = radios.map((radio) => radio.shadowRoot?.querySelector('.radio'));

    expect(radios[0].disabled).toBe(true);
    expect(radios[1].disabled).toBe(true);
    expect(bases[0]?.classList.contains('radio--disabled')).toBe(true);
    expect(bases[1]?.classList.contains('radio--disabled')).toBe(true);
  });

  it('propagates size to child radios', async () => {
    const el = await fixture<NveRadioGroup>(html`
      <nve-radio-group label="Status" size="large">
        <nve-radio value="planned">Planlagt</nve-radio>
        <nve-radio value="current">Pågående</nve-radio>
      </nve-radio-group>
    `);

    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const radios: NveRadio[] = Array.from(el.querySelectorAll('nve-radio'));

    for (const radio of radios) {
      const base = radio.shadowRoot?.querySelector('.radio');
      expect(radio.size).toBe('large');
      expect(base?.classList.contains('radio--large')).toBe(true);
      expect(base?.classList.contains('radio--medium')).toBe(false);
    }
  });

  it('selects the matching radio when value is set initially', async () => {
    const el = await fixture<NveRadioGroup>(html`
      <nve-radio-group label="Status" value="current">
        <nve-radio value="planned">Planlagt</nve-radio>
        <nve-radio value="current">Pågående</nve-radio>
      </nve-radio-group>
    `);

    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const radios: NveRadio[] = Array.from(el.querySelectorAll('nve-radio'));
    expect(radios[0].getAttribute('aria-checked')).toBe('false');
    expect(radios[1].getAttribute('aria-checked')).toBe('true');
  });
});
