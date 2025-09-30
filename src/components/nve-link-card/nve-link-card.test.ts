import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveLinkCard from './nve-link-card.component';

if (!customElements.get('nve-link-card')) {
  customElements.define('nve-link-card', NveLinkCard);
}

describe('nve-link-card', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  it('has default properties', async () => {
    const el = await fixture<NveLinkCard>(html`<nve-link-card label="Label"></nve-link-card>`);
    expect(el.variant).toBe('primary');
    expect(el.size).toBe('medium');
  });
  it('has correct label', async () => {
    const label = 'Example label';
    const el = await fixture<NveLinkCard>(html`<nve-link-card label=${label}></nve-link-card>`);
    const div = el.shadowRoot?.querySelector('div[part="label"]');
    expect(div).not.toBeNull();
    expect(div?.textContent).toContain(label);
  });
  it('has correct additional text', async () => {
    const label = 'Example label';
    const additionalText = 'Additional text';
    const el = await fixture<NveLinkCard>(
      html`<nve-link-card label=${label} additionalText=${additionalText}></nve-link-card>`
    );
    const div = el.shadowRoot?.querySelector('div[part="additional-text"]');
    expect(div).not.toBeNull();
    expect(div?.textContent).toContain(additionalText);
  });
  it.each([
    ['secondary', 'large', 'link-card--secondary', 'link-card--large'],
    ['contrast', 'small', 'link-card--contrast', 'link-card--small'],
  ])('has correct classes for variant %s and size %s', async (variant, size, classVariant, classSize) => {
    const el = await fixture<NveLinkCard>(
      html`<nve-link-card label="Label" variant=${variant} size=${size}></nve-link-card>`
    );
    const a = el.shadowRoot?.querySelector('a[part="link-card"]');
    expect(a?.classList.contains(classVariant)).toBe(true);
    expect(a?.classList.contains(classSize)).toBe(true);
  });
  it('has no href attribute when no href given', async () => {
    const el = await fixture<NveLinkCard>(html`<nve-link-card label="Label"></nve-link-card>`);
    const a = el.shadowRoot?.querySelector('a[part="link-card"]');
    expect(a?.hasAttribute('href')).toBe(false);
  });
  it('has mailto in href when clickAction mail', async () => {
    const el = await fixture<NveLinkCard>(
      html`<nve-link-card clickAction="mail" href="support@gmail.com" label="Label"></nve-link-card>`
    );
    const a = el.shadowRoot?.querySelector('a[part="link-card"]');
    expect(a?.getAttribute('href')).toContain('mailto:');
  });
  it('has target blank when clickAction external', async () => {
    const el = await fixture<NveLinkCard>(
      html`<nve-link-card clickAction="external" href="test.com" label="Label"></nve-link-card>`
    );
    const a = el.shadowRoot?.querySelector('a[part="link-card"]');
    expect(a?.getAttribute('target')).toContain('_blank');
  });
  it('has download property when clickAction download', async () => {
    const el = await fixture<NveLinkCard>(
      html`<nve-link-card clickAction="download" href="/assets/image.jpg" label="Label"></nve-link-card>`
    );
    const a = el.shadowRoot?.querySelector('a[part="link-card"]');
    expect(a?.hasAttribute('download')).toBe(true);
  });
  it('part="link-card" renders as <div> when parent is <a>', async () => {
    const wrapper = await fixture(html`<a><nve-link-card label="Label"></nve-link-card></a>`);
    const el = wrapper.querySelector('nve-link-card') as NveLinkCard;
    const linkCard = el.shadowRoot?.querySelector('[part="link-card"]');
    expect(linkCard?.tagName.toLowerCase()).toBe('div');
  });
});
