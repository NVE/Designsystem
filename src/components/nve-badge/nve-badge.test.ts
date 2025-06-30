import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveBadge from './nve-badge.component';

if (!customElements.get('nve-badge')) {
  customElements.define('nve-badge', NveBadge);
}

describe('nve-badge', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  it('has correct content', async () => {
    const el = await fixture<NveBadge>(html`<nve-badge>Default</nve-badge>`);
    expect(el?.innerHTML).toContain('Default');
  });
  it('has default properties', async () => {
    const el = await fixture<NveBadge>(html`<nve-badge></nve-badge>`);
    expect(el.variant).toBe('primary');
    expect(el.size).toBe('medium');
    expect(el.saturation).toBeNull();
  });

  it('has correct classes on large size and success variant', async () => {
    const el = await fixture<NveBadge>(html`<nve-badge variant="success" size="large"></nve-badge>`);
    const span = el.shadowRoot?.querySelector('span[part="base"]');
    expect(span?.classList.contains('badge--success')).toBe(true);
    expect(span?.classList.contains('badge--large')).toBe(true);
  });

  it('has correct classes on small size and neutral variant', async () => {
    const el = await fixture<NveBadge>(html`<nve-badge variant="neutral" size="small"></nve-badge>`);
    const span = el.shadowRoot?.querySelector('span[part="base"]');
    expect(span?.classList.contains('badge--neutral')).toBe(true);
    expect(span?.classList.contains('badge--small')).toBe(true);
  });

  it('has correct classes on warning variant', async () => {
    const el = await fixture<NveBadge>(html`<nve-badge variant="warning"></nve-badge>`);
    const span = el.shadowRoot?.querySelector('span[part="base"]');
    expect(span?.classList.contains('badge--warning')).toBe(true);
  });

  it('has correct classes on danger variant', async () => {
    const el = await fixture<NveBadge>(html`<nve-badge variant="danger"></nve-badge>`);
    const span = el.shadowRoot?.querySelector('span[part="base"]');
    expect(span?.classList.contains('badge--danger')).toBe(true);
  });

  it('has correct classes on brand variant', async () => {
    const el = await fixture<NveBadge>(html`<nve-badge variant="brand"></nve-badge>`);
    const span = el.shadowRoot?.querySelector('span[part="base"]');
    expect(span?.classList.contains('badge--brand')).toBe(true);
  });

  it('has correct saturation subtle class', async () => {
    const el = await fixture<NveBadge>(html`<nve-badge saturation="subtle"></nve-badge>`);
    const span = el.shadowRoot?.querySelector('span[part="base"]');
    expect(span?.classList.contains('saturation--subtle')).toBe(true);
  });
});
