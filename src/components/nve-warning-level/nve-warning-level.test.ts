import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveWarningLevel from './nve-warning-level.component';

if (!customElements.get('nve-warning-level')) {
  customElements.define('nve-warning-level', NveWarningLevel);
}

describe('nve-warning-level', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('is attached to the DOM', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level></nve-warning-level>`);
    expect(document.body.contains(el)).toBe(true);
  });

  it('has correct default properties', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level></nve-warning-level>`);
    expect(el.level).toBe('1');
    expect(el.border).toBe(false);
  });

  it('has correct warning level 1 css class', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level></nve-warning-level>`);
    const div = el.shadowRoot?.querySelector('div[part="base"]');
    expect(div?.classList.contains('warning-level--1')).toBe(true);
  });

  it('has correct warning level 2 css class', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level level="2"></nve-warning-level>`);
    const div = el.shadowRoot?.querySelector('div[part="base"]');
    expect(div?.classList.contains('warning-level--2')).toBe(true);
  });

  it('has correct warning level 3 css class', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level level="3"></nve-warning-level>`);
    const div = el.shadowRoot?.querySelector('div[part="base"]');
    expect(div?.classList.contains('warning-level--3')).toBe(true);
  });

  it('has correct warning level 4 css class', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level level="4"></nve-warning-level>`);
    const div = el.shadowRoot?.querySelector('div[part="base"]');
    expect(div?.classList.contains('warning-level--4')).toBe(true);
  });

  it('has correct warning level 5 css class', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level level="5"></nve-warning-level>`);
    const div = el.shadowRoot?.querySelector('div[part="base"]');
    expect(div?.classList.contains('warning-level--5')).toBe(true);
  });

  it('has correct warning level unknown css class', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level level="unknown"></nve-warning-level>`);
    const div = el.shadowRoot?.querySelector('div[part="base"]');
    expect(div?.classList.contains('warning-level--unknown')).toBe(true);
  });

  it('has border css class', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level border></nve-warning-level>`);
    const div = el.shadowRoot?.querySelector('div[part="base"]');
    expect(div?.classList.contains('border')).toBe(true);
  });

  it('has inside-button css class', async () => {
    const el = await fixture<NveWarningLevel>(html`<button><nve-warning-level></nve-warning-level></button>`);
    const nve = el.querySelector('nve-warning-level');
    const div = nve?.shadowRoot?.querySelector('div[part="base"]');
    expect(div?.classList.contains('inside-button')).toBe(true);
  });

  it('is triangle badge present', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level warningBadge="triangle"></nve-warning-level>`);
    const div = el.shadowRoot?.querySelector('div[part="base"]');
    const img = div?.querySelector('img.warning-level-badge--triangle');
    expect(img).toBeTruthy();
  });

  it('is circle badge present', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level warningBadge="circle"></nve-warning-level>`);
    const div = el.shadowRoot?.querySelector('div[part="base"]');
    const img = div?.querySelector('img.warning-level-badge--circle');
    expect(img).toBeTruthy();
  });

  it('has aria-label attribute', async () => {
    const el = await fixture<NveWarningLevel>(html`<nve-warning-level aria-label="Farenivå 1"></nve-warning-level>`);
    const div = el.shadowRoot?.querySelector('div[part="base"]');
    expect(div?.getAttribute('aria-label')).toBe('Farenivå 1');
  });
});
