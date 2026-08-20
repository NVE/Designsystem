import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveToggletip from './nve-toggletip.component';

if (!customElements.get('nve-toggletip')) {
  customElements.define('nve-toggletip', NveToggletip);
}

async function waitForSlotWork(el: NveToggletip) {
  await el.updateComplete;
  await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
  await el.updateComplete;
}

describe('nve-toggletip', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('has the documented default properties', async () => {
    const el = await fixture<NveToggletip>(html`<nve-toggletip></nve-toggletip>`);
    expect(el.variant).toBe('neutral');
    expect(el.saturation).toBe('emphasized');
    expect(el.iconName).toBe('info');
  });

  it('has correct neutral variant class', async () => {
    const el = await fixture<NveToggletip>(html`<nve-toggletip variant="neutral"></nve-toggletip>`);
    const content = el.shadowRoot?.querySelector('div[part="content"]');
    expect(content?.classList.contains('feedback--neutral')).toBe(true);
  });

  it('has correct success variant class', async () => {
    const el = await fixture<NveToggletip>(html`<nve-toggletip variant="success"></nve-toggletip>`);
    const content = el.shadowRoot?.querySelector('div[part="content"]');
    expect(content?.classList.contains('feedback--success')).toBe(true);
  });

  it('has correct error variant class', async () => {
    const el = await fixture<NveToggletip>(html`<nve-toggletip variant="error"></nve-toggletip>`);
    const content = el.shadowRoot?.querySelector('div[part="content"]');
    expect(content?.classList.contains('feedback--error')).toBe(true);
  });

  it('has correct info variant class', async () => {
    const el = await fixture<NveToggletip>(html`<nve-toggletip variant="info"></nve-toggletip>`);
    const content = el.shadowRoot?.querySelector('div[part="content"]');
    expect(content?.classList.contains('feedback--info')).toBe(true);
  });

  it('has correct warning variant class', async () => {
    const el = await fixture<NveToggletip>(html`<nve-toggletip variant="warning"></nve-toggletip>`);
    const content = el.shadowRoot?.querySelector('div[part="content"]');
    expect(content?.classList.contains('feedback--warning')).toBe(true);
  });

  it('sets aria-label from the host on the trigger button', async () => {
    const el = await fixture<NveToggletip>(html`<nve-toggletip aria-label="Info toggletip"></nve-toggletip>`);
    const trigger = el.shadowRoot?.querySelector('button[part="trigger"]');
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);
    expect(trigger?.getAttribute('aria-label')).toBe('Info toggletip');
  });
});
