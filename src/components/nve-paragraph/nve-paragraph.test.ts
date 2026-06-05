import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveParagraph from './nve-paragraph.component';

if (!customElements.get('nve-paragraph')) {
  customElements.define('nve-paragraph', NveParagraph);
}

describe('nve-paragraph', () => {
  afterAll(() => fixtureCleanup());

  it('should be attached to the DOM', async () => {
    const el = await fixture<NveParagraph>(html`<nve-paragraph></nve-paragraph>`);
    expect(document.body.contains(el)).toBe(true);
  });

  it('should render as p element', async () => {
    const el = await fixture<NveParagraph>(html`<nve-paragraph>Test paragraph</nve-paragraph>`);
    const paragraph = el.shadowRoot?.querySelector('p');

    expect(paragraph).toBeTruthy();
    expect(el.textContent?.trim()).toBe('Test paragraph');
  });

  it('should render without size class when size is not provided', async () => {
    const el = await fixture<NveParagraph>(html`<nve-paragraph>Default paragraph</nve-paragraph>`);
    const paragraph = el.shadowRoot?.querySelector('p');

    expect(paragraph?.classList.contains('paragraph')).toBe(true);
    expect(paragraph?.className.trim()).toBe('paragraph');
  });

  describe('Lead variants', () => {
    const leadSizes = [
      'leadLargeRegular',
      'leadLargeSemibold',
      'leadMediumRegular',
      'leadMediumSemibold',
      'leadSmallRegular',
      'leadSmallSemibold',
    ] as const;

    leadSizes.forEach((size) => {
      it(`should apply correct class for size="${size}"`, async () => {
        const el = await fixture<NveParagraph>(html`<nve-paragraph size="${size}">Lead text</nve-paragraph>`);
        const paragraph = el.shadowRoot?.querySelector('p');

        expect(paragraph?.classList.contains(size)).toBe(true);
      });
    });
  });

  describe('Body variants', () => {
    const bodySizes = [
      'bodyLarge',
      'bodyLargeUnderline',
      'bodyMedium',
      'bodyMediumUnderline',
      'bodySmall',
      'bodySmallUnderline',
      'bodyXSmall',
      'bodyXSmallUnderline',
    ] as const;

    bodySizes.forEach((size) => {
      it(`should apply correct class for size="${size}"`, async () => {
        const el = await fixture<NveParagraph>(html`<nve-paragraph size="${size}">Body text</nve-paragraph>`);
        const paragraph = el.shadowRoot?.querySelector('p');

        expect(paragraph?.classList.contains(size)).toBe(true);
      });
    });
  });

  describe('Body compact variants', () => {
    const compactSizes = [
      'bodyLargeCompact',
      'bodyLargeUnderlineCompact',
      'bodyMediumCompact',
      'bodyMediumUnderlineCompact',
      'bodySmallCompact',
      'bodySmallUnderlineCompact',
      'bodyXSmallCompact',
      'bodyXSmallUnderlineCompact',
    ] as const;

    compactSizes.forEach((size) => {
      it(`should apply correct class for size="${size}"`, async () => {
        const el = await fixture<NveParagraph>(html`<nve-paragraph size="${size}">Compact text</nve-paragraph>`);
        const paragraph = el.shadowRoot?.querySelector('p');

        expect(paragraph?.classList.contains(size)).toBe(true);
      });
    });
  });

  it('should expose CSS part', async () => {
    const el = await fixture<NveParagraph>(html`<nve-paragraph>Test</nve-paragraph>`);
    const paragraph = el.shadowRoot?.querySelector('[part="paragraph"]');
    expect(paragraph).toBeTruthy();
  });

  it('should set testId when provided', async () => {
    const el = await fixture<NveParagraph>(html`<nve-paragraph testId="my-paragraph">Test</nve-paragraph>`);
    const paragraph = el.shadowRoot?.querySelector('[data-testid="my-paragraph"]');
    expect(paragraph).toBeTruthy();
  });

  it('should apply paragraph class', async () => {
    const el = await fixture<NveParagraph>(html`<nve-paragraph>Test</nve-paragraph>`);
    const paragraph = el.shadowRoot?.querySelector('.paragraph');
    expect(paragraph).toBeTruthy();
  });
});
