import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveSegmentGroup from './nve-segment-group.component';
import NveSegment from '../nve-segment/nve-segment.component';

if (!customElements.get('nve-segment-group')) {
  customElements.define('nve-segment-group', NveSegmentGroup);
}

if (!customElements.get('nve-segment')) {
  customElements.define('nve-segment', NveSegment);
}

async function waitForSlotWork(el: NveSegmentGroup) {
  await el.updateComplete;
  await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
  await el.updateComplete;
}

describe('nve-segment-group', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('is attached to the DOM', async () => {
    const el = await fixture<NveSegmentGroup>(html`<nve-segment-group></nve-segment-group>`);
    expect(document.body.contains(el)).toBe(true);
  });

  it('renders helpText and hint with the correct classes', async () => {
    const el = await fixture<NveSegmentGroup>(html`
      <nve-segment-group label="Status" helpText="Hjelpetekst" hint="Hinttekst">
        <nve-segment value="planned">Planlagt</nve-segment>
      </nve-segment-group>
    `);

    const helpText = el.shadowRoot?.querySelector('.field__help-text');
    const hintText = el.shadowRoot?.querySelector('.field__hint-text');

    expect(helpText).not.toBeNull();
    expect(helpText?.textContent?.trim()).toBe('Hjelpetekst');
    expect(hintText).not.toBeNull();
    expect(hintText?.textContent?.trim()).toBe('Hinttekst');
  });

  it('propagates disabled to child segments that are not already disabled', async () => {
    const el = await fixture<NveSegmentGroup>(html`
      <nve-segment-group label="Status" disabled>
        <nve-segment value="planned">Planlagt</nve-segment>
        <nve-segment value="current" disabled>Pågående</nve-segment>
      </nve-segment-group>
    `);

    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot:not([name])');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const segments: NveSegment[] = Array.from(el.querySelectorAll('nve-segment'));
    const bases = segments.map((segment) => segment.shadowRoot?.querySelector('.segment'));

    expect(segments[0].disabled).toBe(true);
    expect(segments[1].disabled).toBe(true);
    expect(bases[0]?.classList.contains('segment--disabled')).toBe(true);
    expect(bases[1]?.classList.contains('segment--disabled')).toBe(true);
  });

  it('propagates size to child segments', async () => {
    const el = await fixture<NveSegmentGroup>(html`
      <nve-segment-group label="Status" size="large">
        <nve-segment value="planned">Planlagt</nve-segment>
        <nve-segment value="current">Pågående</nve-segment>
      </nve-segment-group>
    `);

    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot:not([name])');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const segments: NveSegment[] = Array.from(el.querySelectorAll('nve-segment'));

    for (const segment of segments) {
      const base = segment.shadowRoot?.querySelector('.segment');
      expect(segment.size).toBe('large');
      expect(base?.classList.contains('segment--large')).toBe(true);
      expect(base?.classList.contains('segment--medium')).toBe(false);
    }
  });

  it('selects the matching segment when value is set initially', async () => {
    const el = await fixture<NveSegmentGroup>(html`
      <nve-segment-group label="Status" value="current">
        <nve-segment value="planned">Planlagt</nve-segment>
        <nve-segment value="current">Pågående</nve-segment>
      </nve-segment-group>
    `);

    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot:not([name])');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const segments: NveSegment[] = Array.from(el.querySelectorAll('nve-segment'));
    expect(segments[0].getAttribute('aria-checked')).toBe('false');
    expect(segments[1].getAttribute('aria-checked')).toBe('true');
  });

  describe('validate method', () => {
    it('returns true when no validation rules are set', async () => {
      const el = await fixture<NveSegmentGroup>(
        html` <nve-segment-group label="Status" value="current">
          <nve-segment value="planned">Planlagt</nve-segment>
          <nve-segment value="current">Pågående</nve-segment>
        </nve-segment-group>`
      );
      const isValid = el.validate();
      expect(isValid).toBe(true);
      expect(el.internalValidationMessage).toBe('');
    });

    it('returns false and sets internalValidationMessage when a validation rule fails', async () => {
      const el = await fixture<NveSegmentGroup>(html`
        <nve-segment-group
          label="Status"
          value="current"
          .validationRules=${[(value: string) => (value.trim() === '' ? 'Feltet kan ikke være tomt' : true)]}
        >
          <nve-segment value="planned">Planlagt</nve-segment>
          <nve-segment value="current">Pågående</nve-segment>
        </nve-segment-group>
      `);

      el.value = '';
      const isValid = el.validate();
      expect(isValid).toBe(false);
      expect(el.internalValidationMessage).toBe('Feltet kan ikke være tomt');
    });

    it('returns true and clears internalValidationMessage when all validation rules pass', async () => {
      const el = await fixture<NveSegmentGroup>(html`
        <nve-segment-group
          label="Status"
          value="current"
          .validationRules=${[(value: string) => (value.trim() === '' ? 'Feltet kan ikke være tomt' : true)]}
        >
          <nve-segment value="planned">Planlagt</nve-segment>
          <nve-segment value="current">Pågående</nve-segment>
        </nve-segment-group>
      `);

      el.value = 'Valid value';
      const isValid = el.validate();
      expect(isValid).toBe(true);
      expect(el.internalValidationMessage).toBe('');
    });
  });
});
