import { afterAll, describe, expect, it, vi } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveButton from './nve-button.component';

if (!customElements.get('nve-button')) {
  customElements.define('nve-button', NveButton);
}

describe('nve-button', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  it('has correct content', async () => {
    const el = await fixture<NveButton>(html`<nve-button>Default</nve-button>`);
    expect(el?.innerHTML).toContain('Default');
  });

  it('has correct default properties', async () => {
    const el = await fixture<NveButton>(html`<nve-button></nve-button>`);
    expect(el.variant).toBe('default');
    expect(el.size).toBe('medium');
  });

  it('has correct primary variant class', async () => {
    const el = await fixture<NveButton>(html`<nve-button variant="primary"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(button?.classList.contains('button--primary')).toBe(true);
  });

  it('has correct neutral variant class', async () => {
    const el = await fixture<NveButton>(html`<nve-button variant="neutral"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(button?.classList.contains('button--neutral')).toBe(true);
  });

  it('has correct text variant class', async () => {
    const el = await fixture<NveButton>(html`<nve-button variant="text"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(button?.classList.contains('button--text')).toBe(true);
  });

  it('has correct danger variant class', async () => {
    const el = await fixture<NveButton>(html`<nve-button variant="danger"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(button?.classList.contains('button--danger')).toBe(true);
  });

  it('has correct small size property and class', async () => {
    const el = await fixture<NveButton>(html`<nve-button size="small"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(el.size).toBe('small');
    expect(button?.classList.contains('button--small')).toBe(true);
  });

  it('has correct large size property and class', async () => {
    const el = await fixture<NveButton>(html`<nve-button size="large"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(el.size).toBe('large');
    expect(button?.classList.contains('button--large')).toBe(true);
  });

  it('is disabled', async () => {
    const el = await fixture<NveButton>(html`<nve-button disabled></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(el.disabled).toBe(true);
    expect(button?.classList.contains('button--disabled')).toBe(true);
  });

  it('has prefix and it finds at correct position', async () => {
    const el = await fixture<NveButton>(
      html`<nve-button disabled>
        Regular text
        <span slot="prefix">Prefix</span>
      </nve-button>`
    );
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    const nodes = Array.from(button?.childNodes ?? []);
    const prefix = nodes.find((n) => n instanceof HTMLSlotElement && n.name === 'prefix') as HTMLSlotElement;
    const regularSlotIndex = nodes.findIndex((n) => n instanceof HTMLSlotElement && n.name === ''); // Vanlig slot
    const prefixIndex = nodes.indexOf(prefix);
    const assignedPrefix = prefix?.assignedElements?.() ?? [];
    expect(assignedPrefix[0]?.textContent).toBe('Prefix');
    expect(el?.innerHTML).toContain('Regular text');
    expect(prefixIndex).toBeLessThan(regularSlotIndex);
  });

  it('has suffix and it finds at correct position', async () => {
    const el = await fixture<NveButton>(
      html`<nve-button disabled>
        <span slot="suffix">Suffix</span>
        Regular text
      </nve-button>`
    );
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    const nodes = Array.from(button?.childNodes ?? []);
    const suffix = nodes.find((n) => n instanceof HTMLSlotElement && n.name === 'suffix') as HTMLSlotElement;
    const regularSlotIndex = nodes.findIndex((n) => n instanceof HTMLSlotElement && n.name === ''); // Vanlig slot
    const suffixIndex = nodes.indexOf(suffix);
    const assignedSuffix = suffix?.assignedElements?.() ?? [];
    expect(assignedSuffix[0]?.textContent).toBe('Suffix');
    expect(el?.innerHTML).toContain('Regular text');
    expect(suffixIndex).toBeGreaterThan(regularSlotIndex);
  });

  it('loading includes sl-spinner', async () => {
    const el = await fixture<NveButton>(html`<nve-button loading></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    const spinner = button?.querySelector('sl-spinner');
    expect(spinner).toBeTruthy();
  });

  it('sl-focus is triggered on button focus', async () => {
    const el = await fixture<NveButton>(html`<nve-button></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]') as HTMLElement;
    const handler = vi.fn();
    el.addEventListener('sl-focus', handler);

    button?.focus();

    expect(handler).toHaveBeenCalled();
  });
});
