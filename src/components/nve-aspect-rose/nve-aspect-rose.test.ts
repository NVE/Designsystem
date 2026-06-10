import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveAspectRose from './nve-aspect-rose.component';

if (!customElements.get('nve-aspect-rose')) {
  customElements.define('nve-aspect-rose', NveAspectRose);
}

describe('nve-aspect-rose', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('is attached to the DOM', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose></nve-aspect-rose>`);
    expect(document.body.contains(el)).toBe(true);
  });

  it('has correct default properties', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose></nve-aspect-rose>`);
    expect(el.value).toBe('00000000');
    expect(el.lang).toBe('no');
    expect(el.label).toBeUndefined();
  });

  it('renders 8 sectors', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose></nve-aspect-rose>`);
    const paths = el.shadowRoot?.querySelectorAll('path');
    expect(paths?.length).toBe(8);
  });

  it('marks affected sectors with correct css class', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose value="10000001"></nve-aspect-rose>`);
    const paths = el.shadowRoot?.querySelectorAll('path');
    expect(paths?.[0].classList.contains('sector-affected')).toBe(true);
    expect(paths?.[1].classList.contains('sector-unaffected')).toBe(true);
    expect(paths?.[7].classList.contains('sector-affected')).toBe(true);
  });

  it('marks all sectors as unaffected when value is all zeros', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose value="00000000"></nve-aspect-rose>`);
    const paths = el.shadowRoot?.querySelectorAll('path');
    paths?.forEach((path) => {
      expect(path.classList.contains('sector-unaffected')).toBe(true);
    });
  });

  it('marks all sectors as affected when value is all ones', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose value="11111111"></nve-aspect-rose>`);
    const paths = el.shadowRoot?.querySelectorAll('path');
    paths?.forEach((path) => {
      expect(path.classList.contains('sector-affected')).toBe(true);
    });
  });

  it('marks all sectors as unaffected when value is not valid', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose value="1"></nve-aspect-rose>`);
    const paths = el.shadowRoot?.querySelectorAll('path');
    paths?.forEach((path) => {
      expect(path.classList.contains('sector-unaffected')).toBe(true);
    });
  });

  it('shows norwegian direction labels by default', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose></nve-aspect-rose>`);
    const texts = el.shadowRoot?.querySelectorAll('text');
    const labels = Array.from(texts ?? []).map((t) => t.textContent);
    expect(labels).toContain('N');
    expect(labels).toContain('Ø');
    expect(labels).toContain('S');
    expect(labels).toContain('V');
  });

  it('shows norwegian direction labels by default even if lang is set to something else', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose lang="fr"></nve-aspect-rose>`);
    const texts = el.shadowRoot?.querySelectorAll('text');
    const labels = Array.from(texts ?? []).map((t) => t.textContent);
    expect(labels).toContain('N');
    expect(labels).toContain('Ø');
    expect(labels).toContain('S');
    expect(labels).toContain('V');
  });

  it('shows english direction labels when lang is en', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose lang="en"></nve-aspect-rose>`);
    const texts = el.shadowRoot?.querySelectorAll('text');
    const labels = Array.from(texts ?? []).map((t) => t.textContent);
    expect(labels).toContain('N');
    expect(labels).toContain('E');
    expect(labels).toContain('S');
    expect(labels).toContain('W');
  });

  it('uses custom label as aria-label', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose label="Min tittel"></nve-aspect-rose>`);
    const svg = el.shadowRoot?.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('Min tittel');
  });

  it('uses default norwegian label when no label is set', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose></nve-aspect-rose>`);
    const svg = el.shadowRoot?.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('Eksponerte sektorer');
  });

  it('uses default norwegian label when no label is set even if lang is set to something else', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose lang="fr"></nve-aspect-rose>`);
    const svg = el.shadowRoot?.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('Eksponerte sektorer');
  });

  it('uses default english label when lang is en and no label is set', async () => {
    const el = await fixture<NveAspectRose>(html`<nve-aspect-rose lang="en"></nve-aspect-rose>`);
    const svg = el.shadowRoot?.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('Affected aspects');
  });
});
