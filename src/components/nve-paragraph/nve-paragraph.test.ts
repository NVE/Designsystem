import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveParagraph from './nve-paragraph.component';
  
if (!customElements.get('nve-paragraph')) {
  customElements.define('nve-paragraph', NveParagraph);
}

describe('nve-paragraph', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveParagraph>(html`<nve-paragraph></nve-paragraph>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  