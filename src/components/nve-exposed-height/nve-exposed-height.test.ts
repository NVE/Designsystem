import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveExposedHeight from './nve-exposed-height.component';

if (!customElements.get('nve-exposed-height')) {
  customElements.define('nve-exposed-height', NveExposedHeight);
}

describe('nve-exposed-height', () => {
  afterAll(() => fixtureCleanup());

  it('is attached to the DOM', async () => {
    const el = await fixture<NveExposedHeight>(html`<nve-exposed-height></nve-exposed-height>`);
    expect(document.body.contains(el)).toBe(true);
  });

  it('has correct default properties', async () => {
    const el = await fixture<NveExposedHeight>(html`<nve-exposed-height></nve-exposed-height>`);
    expect(el.variant).toBe(1);
    expect(el.height1).toBe(0);
    expect(el.height2).toBe(0);
    expect(el.lang).toBe('no');
  });

  // --- aria-label ---

  it('har korrekt aria-label for variant 1 på norsk', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="1" height1="1000"></nve-exposed-height>`
    );
    const svg = el.shadowRoot?.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('Utsatt høyde: Over 1000 meter');
  });

  it('har korrekt aria-label for variant 2 på norsk', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="2" height1="1000"></nve-exposed-height>`
    );
    const svg = el.shadowRoot?.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('Utsatt høyde: Under 1000 meter');
  });

  it('har korrekt aria-label for variant 3 på norsk', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="3" height1="800" height2="1200"></nve-exposed-height>`
    );
    const svg = el.shadowRoot?.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('Utsatt høyde: Under 800 meter og over 1200 meter');
  });

  it('har korrekt aria-label for variant 4 på norsk', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="4" height1="800" height2="1200"></nve-exposed-height>`
    );
    const svg = el.shadowRoot?.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('Utsatt høyde: Mellom 800 og 1200 meter');
  });

  it('has correct aria-label for variant 1 in English', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="1" height1="1000" lang="en-GB"></nve-exposed-height>`
    );
    const svg = el.shadowRoot?.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('Exposed height: Over 1000 meters');
  });

  // --- fjell-grafikk: riktig antall paths og klasser ---

  it('variant 1 har to fjell-paths: topp=danger, bunn=safe', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="1" height1="1000"></nve-exposed-height>`
    );
    const mountainPaths = el.shadowRoot?.querySelectorAll('svg > g:first-child path');
    expect(mountainPaths?.length).toBe(2);
    expect(mountainPaths?.[0].classList.contains('mountain-danger')).toBe(true);
    expect(mountainPaths?.[1].classList.contains('mountain-safe')).toBe(true);
  });

  it('variant 2 har to fjell-paths: topp=safe, bunn=danger', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="2" height1="1000"></nve-exposed-height>`
    );
    const mountainPaths = el.shadowRoot?.querySelectorAll('svg > g:first-child path');
    expect(mountainPaths?.length).toBe(2);
    expect(mountainPaths?.[0].classList.contains('mountain-safe')).toBe(true);
    expect(mountainPaths?.[1].classList.contains('mountain-danger')).toBe(true);
  });

  it('variant 3 har tre fjell-paths: topp=danger, midtre=safe, bunn=danger', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="3" height1="800" height2="1200"></nve-exposed-height>`
    );
    const mountainPaths = el.shadowRoot?.querySelectorAll('svg > g:first-child path');
    expect(mountainPaths?.length).toBe(3);
    expect(mountainPaths?.[0].classList.contains('mountain-danger')).toBe(true);
    expect(mountainPaths?.[1].classList.contains('mountain-safe')).toBe(true);
    expect(mountainPaths?.[2].classList.contains('mountain-danger')).toBe(true);
  });

  it('variant 4 har tre fjell-paths: topp=safe, midtre=danger, bunn=safe', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="4" height1="800" height2="1200"></nve-exposed-height>`
    );
    const mountainPaths = el.shadowRoot?.querySelectorAll('svg > g:first-child path');
    expect(mountainPaths?.length).toBe(3);
    expect(mountainPaths?.[0].classList.contains('mountain-safe')).toBe(true);
    expect(mountainPaths?.[1].classList.contains('mountain-danger')).toBe(true);
    expect(mountainPaths?.[2].classList.contains('mountain-safe')).toBe(true);
  });

  // --- piler ---

  it('variant 1 og 2 viser én pil', async () => {
    for (const variant of [1, 2] as const) {
      const el = await fixture<NveExposedHeight>(
        html`<nve-exposed-height variant="${variant}" height1="1000"></nve-exposed-height>`
      );
      const arrows = el.shadowRoot?.querySelectorAll('.arrow');
      expect(arrows?.length).toBe(1);
    }
  });

  it('variant 3 og 4 viser to piler', async () => {
    for (const variant of [3, 4] as const) {
      const el = await fixture<NveExposedHeight>(
        html`<nve-exposed-height variant="${variant}" height1="800" height2="1200"></nve-exposed-height>`
      );
      const arrows = el.shadowRoot?.querySelectorAll('.arrow');
      expect(arrows?.length).toBe(2);
    }
  });

  // --- høydetekst ---

  it('variant 1 har riktig tekst', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="1" height1="1500"></nve-exposed-height>`
    );
    const labels = el.shadowRoot?.querySelectorAll('text.height-label');
    expect(labels?.[0].textContent).toBe('1500m');
  });

  it('variant 2 har riktig tekst', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="2" height1="1500"></nve-exposed-height>`
    );
    const labels = el.shadowRoot?.querySelectorAll('text.height-label');
    expect(labels?.[0].textContent).toBe('1500m');
  });

  it('variant 3 har høyeste verdi øverst uansett rekkefølge på height1/height2', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="3" height1="1200" height2="800"></nve-exposed-height>`
    );
    const labels = el.shadowRoot?.querySelectorAll('text.height-label');
    expect(labels?.[0].textContent).toBe('1200m'); // max øverst
    expect(labels?.[1].textContent).toBe('800m'); // min nederst
  });

  it('variant 4 har riktig tekst', async () => {
    const el = await fixture<NveExposedHeight>(
      html`<nve-exposed-height variant="4" height1="1200" height2="800"></nve-exposed-height>`
    );
    const labels = el.shadowRoot?.querySelectorAll('text.height-label');
    expect(labels?.[0].textContent).toBe('800-1200m');
  });
});
