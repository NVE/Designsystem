import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';

import NveLinkCard from './nve-link-card.component';

if (!customElements.get('nve-link-card')) {
  customElements.define('nve-link-card', NveLinkCard);
}

describe('nve-link-card', () => {
  afterAll(() => fixtureCleanup());

  it('should render with default properties', async () => {
    const el = await fixture<NveLinkCard>(html`<nve-link-card label="Tittel"></nve-link-card>`);
    expect(el.label).toBe('Tittel');
    expect(el.variant).toBe('primary');
    expect(el.size).toBe('medium');
    expect(el.clickAction).toBe('internal');
    expect(el.additionalText).toBeUndefined();
  });

  it('should render correct label', async () => {
    const el = await fixture<NveLinkCard>(html`<nve-link-card label="Tittel"></nve-link-card>`);
    const labelDiv = el.shadowRoot?.querySelector('div[part="label"]');
    expect(labelDiv).not.toBeNull();
    expect(labelDiv?.textContent).toContain('Tittel');
  });

  it('should render additionalText', async () => {
    const el = await fixture<NveLinkCard>(
      html`<nve-link-card label="Tittel" additionalText="Ekstra tekst"></nve-link-card>`
    );
    const additionalDiv = el.shadowRoot?.querySelector('div[part="additional-text"]');
    expect(additionalDiv).not.toBeNull();
    expect(additionalDiv?.textContent).toContain('Ekstra tekst');
  });

  it.each([
    ['secondary', 'large', 'link-card--secondary', 'link-card--large'],
    ['contrast', 'small', 'link-card--contrast', 'link-card--small'],
  ])('should render correct classes for variant %s and size %s', async (variant, size, classVariant, classSize) => {
    const el = await fixture<NveLinkCard>(
      html`<nve-link-card label="Label" variant=${variant} size=${size}></nve-link-card>`
    );
    const a = el.shadowRoot?.querySelector('a[part="link-card"]');
    expect(a?.classList.contains(classVariant)).toBe(true);
    expect(a?.classList.contains(classSize)).toBe(true);
  });

  it('should render icon slot', async () => {
    const el = await fixture<NveLinkCard>(
      html`<nve-link-card label="Tittel"><nve-icon name="info" slot="icon"></nve-icon></nve-link-card>`
    );
    const slot = el.shadowRoot?.querySelector('slot[name="icon"]');
    expect(slot).not.toBeNull();
  });

  it('should render as <a> when not wrapped in link', async () => {
    const el = await fixture<NveLinkCard>(html`<nve-link-card label="Tittel" href="/test"></nve-link-card>`);
    const a = el.shadowRoot?.querySelector('a[part="link-card"]');
    expect(a).not.toBeNull();
    expect(a?.getAttribute('href')).toBe('/test');
  });

  it('should render as <div> when parent is <a>', async () => {
    const wrapper = await fixture(html`<a><nve-link-card label="Tittel"></nve-link-card></a>`);
    const el = wrapper.querySelector('nve-link-card') as NveLinkCard;
    const div = el.shadowRoot?.querySelector('div[part="link-card"]');
    expect(div).not.toBeNull();
  });

  it('should render nve-icon for clickAction', async () => {
    const el = await fixture<NveLinkCard>(html`<nve-link-card label="Tittel"></nve-link-card>`);
    const icon = el.shadowRoot?.querySelector('nve-icon[slot="suffix"]');
    expect(icon).not.toBeNull();
    expect(icon?.getAttribute('name')).toBe('arrow_forward');
    expect(icon?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should set testid attribute', async () => {
    const el = await fixture<NveLinkCard>(html`<nve-link-card label="Tittel" testId="123"></nve-link-card>`);
    const a = el.shadowRoot?.querySelector('[part="link-card"]');
    expect(a?.getAttribute('testid')).toBe('123');
  });

  describe('clickAction', () => {
    it('should render with clickAction="internal"', async () => {
      const el = await fixture<NveLinkCard>(
        html`<nve-link-card label="Tittel" href="/intern" clickAction="internal"></nve-link-card>`
      );
      const a = el.shadowRoot?.querySelector('a.link-card');
      expect(a).not.toBeNull();
      expect(a?.getAttribute('href')).toBe('/intern');
      expect(a?.hasAttribute('download')).toBe(false);
      expect(a?.getAttribute('target')).toBeNull();
      const icon = el.shadowRoot?.querySelector('nve-icon[slot="suffix"]');
      expect(icon?.getAttribute('name')).toBe('arrow_forward');
    });

    it('should render with clickAction="download"', async () => {
      const el = await fixture<NveLinkCard>(
        html`<nve-link-card label="Last ned" href="/fil.pdf" clickAction="download"></nve-link-card>`
      );
      const a = el.shadowRoot?.querySelector('a.link-card');
      expect(a).not.toBeNull();
      expect(a?.getAttribute('href')).toBe('/fil.pdf');
      expect(a?.hasAttribute('download')).toBe(true);
      expect(a?.getAttribute('target')).toBeNull();
      const icon = el.shadowRoot?.querySelector('nve-icon[slot="suffix"]');
      expect(icon?.getAttribute('name')).toBe('download');
    });

    it('should render with clickAction="external"', async () => {
      const el = await fixture<NveLinkCard>(
        html`<nve-link-card label="Ekstern" href="https://nve.no" clickAction="external"></nve-link-card>`
      );
      const a = el.shadowRoot?.querySelector('a.link-card');
      expect(a).not.toBeNull();
      expect(a?.getAttribute('href')).toBe('https://nve.no');
      expect(a?.hasAttribute('download')).toBe(false);
      expect(a?.getAttribute('target')).toBe('_blank');
      const icon = el.shadowRoot?.querySelector('nve-icon[slot="suffix"]');
      expect(icon?.getAttribute('name')).toBe('open_in_new');
    });

    it('should render with clickAction="mail"', async () => {
      const el = await fixture<NveLinkCard>(
        html`<nve-link-card label="E-post" href="test@nve.no" clickAction="mail"></nve-link-card>`
      );
      const a = el.shadowRoot?.querySelector('a.link-card');
      expect(a).not.toBeNull();
      expect(a?.getAttribute('href')).toBe('mailto:test@nve.no');
      expect(a?.hasAttribute('download')).toBe(false);
      expect(a?.getAttribute('target')).toBeNull();
      const icon = el.shadowRoot?.querySelector('nve-icon[slot="suffix"]');
      expect(icon?.getAttribute('name')).toBe('mail');
    });
  });
});
