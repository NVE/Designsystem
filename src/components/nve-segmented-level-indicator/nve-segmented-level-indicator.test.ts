import { afterAll, describe, expect, it, } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveSegmentedLevelIndicator from './nve-segmented-level-indicator.component';
  
if (!customElements.get('nve-segmented-level-indicator')) {
  customElements.define('nve-segmented-level-indicator', NveSegmentedLevelIndicator);
}

describe('nve-segmented-level-indicator', () => {
  afterAll(() => {
    fixtureCleanup();
  });
  
  it('is attached to the DOM', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(html`<nve-segmented-level-indicator></nve-segmented-level-indicator>`);
    expect(document.body.contains(el)).toBe(true);
  });
});
  