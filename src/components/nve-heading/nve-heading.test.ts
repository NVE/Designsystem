import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveHeading from './nve-heading.component';

if (!customElements.get('nve-heading')) {
  customElements.define('nve-heading', NveHeading);
}

describe('nve-heading', () => {
  afterAll(() => fixtureCleanup());

  it('should be attached to the DOM', async () => {
    const el = await fixture<NveHeading>(html`<nve-heading></nve-heading>`);
    expect(document.body.contains(el)).toBe(true);
  });

  describe('Heading element', () => {
    const headingLevels = [
      { level: 1, tag: 'h1', defaultSize: 'headingXlarge' },
      { level: 2, tag: 'h2', defaultSize: 'headingLarge' },
      { level: 3, tag: 'h3', defaultSize: 'headingMedium' },
      { level: 4, tag: 'h4', defaultSize: 'headingSmall' },
      { level: 5, tag: 'h5', defaultSize: 'headingXsmall' },
      { level: 6, tag: 'h6', defaultSize: 'headingXsmall' },
    ] as const;

    headingLevels.forEach(({ level, tag, defaultSize }) => {
      it(`should render as ${tag} and apply correct default typography`, async () => {
        const el = await fixture<NveHeading>(html`<nve-heading level="${level}">Heading ${tag}</nve-heading>`);
        const heading = el.shadowRoot?.querySelector(tag);

        expect(heading).toBeTruthy();
        expect(heading?.classList.contains(defaultSize)).toBe(true);
        expect(el.textContent?.trim()).toBe(`Heading ${tag}`);
      });
    });
  });

  describe('size override', () => {
    const headingSizes = ['headingXlarge', 'headingLarge', 'headingMedium', 'headingSmall', 'headingXsmall'] as const;

    headingSizes.forEach((size) => {
      it(`should apply correct class for size="${size}"`, async () => {
        const el = await fixture<NveHeading>(html`<nve-heading size="${size}">Text ${size}</nve-heading>`);
        const heading = el.shadowRoot?.querySelector('h1');

        expect(heading?.classList.contains(size)).toBe(true);
        expect(el.textContent?.trim()).toBe(`Text ${size}`);
      });
    });
  });

  describe('subheading variants', () => {
    const subheadingSizes = ['subheadingLarge', 'subheadingMedium', 'subheadingSmall'] as const;

    subheadingSizes.forEach((size) => {
      it(`should apply correct class for size="${size}"`, async () => {
        const el = await fixture<NveHeading>(html`<nve-heading size="${size}">Text ${size}</nve-heading>`);
        const heading = el.shadowRoot?.querySelector('h1');

        expect(heading?.classList.contains(size)).toBe(true);
      });
    });
  });

  it('should expose CSS part', async () => {
    const el = await fixture<NveHeading>(html`<nve-heading>Test</nve-heading>`);
    const heading = el.shadowRoot?.querySelector('[part="nve-heading"]');
    expect(heading).toBeTruthy();
  });

  it('should set testId when provided', async () => {
    const el = await fixture<NveHeading>(html`<nve-heading testId="my-heading">Test</nve-heading>`);
    const heading = el.shadowRoot?.querySelector('[data-testid="my-heading"]');
    expect(heading).toBeTruthy();
  });

  it('should apply heading class', async () => {
    const el = await fixture<NveHeading>(html`<nve-heading>Test</nve-heading>`);
    const heading = el.shadowRoot?.querySelector('.heading');
    expect(heading).toBeTruthy();
  });
});
