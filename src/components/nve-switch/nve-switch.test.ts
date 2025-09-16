import { describe, it, expect, afterAll } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveSwitch from './nve-switch.component';

if (!customElements.get('nve-switch')) {
  customElements.define('nve-switch', NveSwitch);
}

describe('nve-switch', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('should have default as default variant', async () => {
    const el = await fixture<NveSwitch>(html`<nve-switch></nve-switch>`);
    expect(el.variant).toBe('default');
    const label = el.shadowRoot?.querySelector('label[part="base"]');
    expect(label?.classList.contains('switch--default')).toBe(true);
  });

  it('should apply primary variant class', async () => {
    const el = await fixture<NveSwitch>(html`<nve-switch variant="primary"></nve-switch>`);
    const label = el.shadowRoot?.querySelector('label[part="base"]');
    expect(el.variant).toBe('primary');
    expect(label?.classList.contains('switch--primary')).toBe(true);
  });

  it('should apply disabled class', async () => {
    const el = await fixture<NveSwitch>(html`<nve-switch disabled></nve-switch>`);
    const label = el.shadowRoot?.querySelector('label[part="base"]');
    expect(el.disabled).toBe(true);
    expect(label?.classList.contains('switch--disabled')).toBe(true);
  });

  it('should have end as default label position', async () => {
    const el = await fixture<NveSwitch>(html`<nve-switch></nve-switch>`);
    const label = el.shadowRoot?.querySelector('label[part="base"]');
    expect(el.labelPosition).toBe('end');
    expect(label?.classList.contains('switch--label-start')).toBe(false);
  });

  it('should apply switch--label-start class when label-position="start"', async () => {
    const el = await fixture<NveSwitch>(html`<nve-switch label-position="start"></nve-switch>`);
    const label = el.shadowRoot?.querySelector('label[part="base"]');
    expect(el.labelPosition).toBe('start');
    expect(label?.classList.contains('switch--label-start')).toBe(true);
  });
});
