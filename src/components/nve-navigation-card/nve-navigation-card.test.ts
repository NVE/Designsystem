import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveNavigationCard from './nve-navigation-card.component';

if (!customElements.get('nve-navigation-card')) {
  customElements.define('nve-navigation-card', NveNavigationCard);
}

describe('nve-navigation-card', () => {
  afterAll(() => fixtureCleanup());

  it('should render with default properties', async () => {
    const el = await fixture<NveNavigationCard>(html`<nve-navigation-card title="Tittel"></nve-navigation-card>`);
    expect(el.title).toBe('Tittel');
    expect(el.iconPath).toBeUndefined();
    expect(el.additionalText).toBeUndefined();
  });

  it('should render correct title as h2', async () => {
    const el = await fixture<NveNavigationCard>(html`<nve-navigation-card title="Tittel"></nve-navigation-card>`);
    const h2 = el.shadowRoot?.querySelector('h2[part="title"]');
    expect(h2).not.toBeNull();
    expect(h2?.textContent).toContain('Tittel');
  });

  it('should render additionalText when iconPath is not set', async () => {
    const el = await fixture<NveNavigationCard>(
      html`<nve-navigation-card title="Tittel" additionalText="Ekstra tekst"></nve-navigation-card>`
    );
    const p = el.shadowRoot?.querySelector('p[part="additional-text"]');
    expect(p).not.toBeNull();
    expect(p?.textContent).toContain('Ekstra tekst');
  });

  it('should render icon when iconPath is set and hide additionalText', async () => {
    const el = await fixture<NveNavigationCard>(
      html`<nve-navigation-card title="Tittel" iconPath="test.svg" additionalText="Skjules"></nve-navigation-card>`
    );
    const img = el.shadowRoot?.querySelector('img[part="leading-icon"]');
    const p = el.shadowRoot?.querySelector('p[part="additional-text"]');
    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toBe('test.svg');
    expect(img?.getAttribute('aria-hidden')).toBe('true');
    expect(img?.getAttribute('alt')).toBe('');
    expect(p).toBeNull();
  });

  it('should render as <a> when not wrapped in link', async () => {
    const el = await fixture<NveNavigationCard>(
      html`<nve-navigation-card title="Tittel" href="/test"></nve-navigation-card>`
    );
    const a = el.shadowRoot?.querySelector('a[part="navigation-card"]');
    expect(a).not.toBeNull();
    expect(a?.getAttribute('href')).toBe('/test');
  });

  it('should render as <div> when parent is <a>', async () => {
    const wrapper = await fixture(html`<a><nve-navigation-card title="Tittel"></nve-navigation-card></a>`);
    const el = wrapper.querySelector('nve-navigation-card') as NveNavigationCard;
    const div = el.shadowRoot?.querySelector('div[part="navigation-card"]');
    expect(div).not.toBeNull();
  });

  it('should render nve-icon arrow_forward', async () => {
    const el = await fixture<NveNavigationCard>(html`<nve-navigation-card title="Tittel"></nve-navigation-card>`);
    const icon = el.shadowRoot?.querySelector('nve-icon.navigation-card__arrow');
    expect(icon).not.toBeNull();
    expect(icon?.getAttribute('name')).toBe('arrow_forward');
    expect(icon?.getAttribute('aria-hidden')).toBe('true');
    expect(icon?.getAttribute('style')).toContain('--icon-size: 24px;');
  });

  it('should set testid attribute', async () => {
    const el = await fixture<NveNavigationCard>(
      html`<nve-navigation-card title="Tittel" testId="123"></nve-navigation-card>`
    );
    const a = el.shadowRoot?.querySelector('[part="navigation-card"]');
    expect(a?.getAttribute('testid')).toBe('123');
  });

  it('should render only icon and title when iconPath is set', async () => {
    const el = await fixture<NveNavigationCard>(
      html`<nve-navigation-card title="Tittel" iconPath="test.svg"></nve-navigation-card>`
    );
    const img = el.shadowRoot?.querySelector('img[part="leading-icon"]');
    const p = el.shadowRoot?.querySelector('p[part="additional-text"]');
    expect(img).not.toBeNull();
    expect(p).toBeNull();
  });

  describe('clickAction', () => {
    it('should render with clickAction="internal"', async () => {
      const el = await fixture<NveNavigationCard>(
        html`<nve-navigation-card title="Tittel" href="/intern" clickAction="internal"></nve-navigation-card>`
      );
      const a = el.shadowRoot?.querySelector('a.navigation-card');
      expect(a).not.toBeNull();
      expect(a?.getAttribute('href')).toBe('/intern');
      expect(a?.hasAttribute('download')).toBe(false);
      expect(a?.getAttribute('target')).toBeNull();
      const icon = el.shadowRoot?.querySelector('nve-icon.navigation-card__arrow');
      expect(icon?.getAttribute('name')).toBe('arrow_forward');
    });

    it('should render with clickAction="download"', async () => {
      const el = await fixture<NveNavigationCard>(
        html`<nve-navigation-card title="Last ned" href="/fil.pdf" clickAction="download"></nve-navigation-card>`
      );
      const a = el.shadowRoot?.querySelector('a.navigation-card');
      expect(a).not.toBeNull();
      expect(a?.getAttribute('href')).toBe('/fil.pdf');
      expect(a?.hasAttribute('download')).toBe(true);
      expect(a?.getAttribute('target')).toBeNull();
      const icon = el.shadowRoot?.querySelector('nve-icon.navigation-card__arrow');
      expect(icon?.getAttribute('name')).toBe('download');
    });

    it('should render with clickAction="external"', async () => {
      const el = await fixture<NveNavigationCard>(
        html`<nve-navigation-card title="Ekstern" href="https://nve.no" clickAction="external"></nve-navigation-card>`
      );
      const a = el.shadowRoot?.querySelector('a.navigation-card');
      expect(a).not.toBeNull();
      expect(a?.getAttribute('href')).toBe('https://nve.no');
      expect(a?.hasAttribute('download')).toBe(false);
      expect(a?.getAttribute('target')).toBe('_blank');
      const icon = el.shadowRoot?.querySelector('nve-icon.navigation-card__arrow');
      expect(icon?.getAttribute('name')).toBe('open_in_new');
    });
  });
});
