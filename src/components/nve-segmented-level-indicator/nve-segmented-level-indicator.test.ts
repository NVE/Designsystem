import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveSegmentedLevelIndicator from './nve-segmented-level-indicator.component';

if (!customElements.get('nve-segmented-level-indicator')) {
  customElements.define('nve-segmented-level-indicator', NveSegmentedLevelIndicator);
}

// Bruk denne til å sette attributtverdier med feil type, uten å få advarsel som vi ville fått med å bruke HTML
async function createElementWithAttribute(attribute: string, value: string): Promise<NveSegmentedLevelIndicator> {
  const el = document.createElement('nve-segmented-level-indicator') as NveSegmentedLevelIndicator;
  el.setAttribute(attribute, value);
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

describe('nve-segmented-level-indicator', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('is attached to the DOM', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator></nve-segmented-level-indicator>`
    );
    expect(document.body.contains(el)).toBe(true);
  });

  it('has correct default properties', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator></nve-segmented-level-indicator>`
    );
    expect(el.value).toBe(0);
    expect(el.scale).toBe(5);
    expect(el.label).toBe('');
    expect(el.lang).toBe('no');
  });

  it('renders default scale of 5 segments with none filled', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator></nve-segmented-level-indicator>`
    );
    const segments = el.shadowRoot?.querySelectorAll('.segment');
    const filled = el.shadowRoot?.querySelectorAll('.segment.filled');
    expect(segments?.length).toBe(5);
    expect(filled?.length).toBe(0);
  });

  it('fills the number of segments given by value', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator value="3"></nve-segmented-level-indicator>`
    );
    const filled = el.shadowRoot?.querySelectorAll('.segment.filled');
    expect(filled?.length).toBe(3);
  });

  it('respects the scale attribute', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator scale="2" value="1"></nve-segmented-level-indicator>`
    );
    const segments = el.shadowRoot?.querySelectorAll('.segment');
    const filled = el.shadowRoot?.querySelectorAll('.segment.filled');
    expect(segments?.length).toBe(2);
    expect(filled?.length).toBe(1);
  });

  it('falls back to value 0 when value is "3.14"', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator value="3.14"></nve-segmented-level-indicator>`
    );
    const filled = el.shadowRoot?.querySelectorAll('.segment.filled');
    expect(filled?.length).toBe(0);
  });

  it('falls back to value 0 when value is "-1"', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator value="-1"></nve-segmented-level-indicator>`
    );
    const filled = el.shadowRoot?.querySelectorAll('.segment.filled');
    expect(filled?.length).toBe(0);
  });

  it('falls back to value 0 when value is "fullt"', async () => {
    const el = await createElementWithAttribute('value', 'fullt');
    const filled = el.shadowRoot?.querySelectorAll('.segment.filled');
    expect(filled?.length).toBe(0);
  });

  it('falls back to default scale 5 when scale is "0"', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator scale="0"></nve-segmented-level-indicator>`
    );
    const segments = el.shadowRoot?.querySelectorAll('.segment');
    expect(segments?.length).toBe(5);
  });

  it('falls back to default scale 5 when scale is "3.14"', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator scale="3.14"></nve-segmented-level-indicator>`
    );
    const segments = el.shadowRoot?.querySelectorAll('.segment');
    expect(segments?.length).toBe(5);
  });

  it('falls back to default scale 5 when scale is "-1"', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator scale="-1"></nve-segmented-level-indicator>`
    );
    const segments = el.shadowRoot?.querySelectorAll('.segment');
    expect(segments?.length).toBe(5);
  });

  it('falls back to default scale 5 when scale is "funker ikke"', async () => {
    const el = await createElementWithAttribute('scale', 'funker ikke');
    const segments = el.shadowRoot?.querySelectorAll('.segment');
    expect(segments?.length).toBe(5);
  });

  it('renders label text when label is set', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator label="Ingenting"></nve-segmented-level-indicator>`
    );
    const label = el.shadowRoot?.querySelector('div[part="label"]');
    expect(label?.textContent).toContain('Ingenting');
  });

  it('does not render label when label is not set', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator></nve-segmented-level-indicator>`
    );
    const label = el.shadowRoot?.querySelector('div[part="label"]');
    expect(label).toBeNull();
  });

  it('uses "value av scale" as aria-label in norwegian by default', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator value="2"></nve-segmented-level-indicator>`
    );
    const base = el.shadowRoot?.querySelector('div[part="base"]');
    expect(base?.getAttribute('aria-label')).toBe('2 av 5');
  });

  it('uses "value of scale" as aria-label in english when lang starts with en', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator value="2" lang="en-GB"></nve-segmented-level-indicator>`
    );
    const base = el.shadowRoot?.querySelector('div[part="base"]');
    expect(base?.getAttribute('aria-label')).toBe('2 of 5');
  });

  it('uses label as aria-label when label is set', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator value="4" label="Ganske mye"></nve-segmented-level-indicator>`
    );
    const base = el.shadowRoot?.querySelector('div[part="base"]');
    expect(base?.getAttribute('aria-label')).toBe('Ganske mye');
  });

  it('oppdaterer aria-label på det indre elementet når attributtet endres', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator value="2" aria-label="Første"></nve-segmented-level-indicator>`
    );
    const base = () => el.shadowRoot?.querySelector('div[part="base"]');
    expect(base()?.getAttribute('aria-label')).toBe('Første');

    el.setAttribute('aria-label', 'Andre');
    await el.updateComplete;
    expect(base()?.getAttribute('aria-label')).toBe('Andre');

    el.removeAttribute('aria-label');
    await el.updateComplete;
    expect(base()?.getAttribute('aria-label')).toBe('2 av 5');
  });

  it('bruker validert verdi i aria-label når value er større enn scale', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator value="6"></nve-segmented-level-indicator>`
    );
    const base = el.shadowRoot?.querySelector('div[part="base"]');
    expect(el.shadowRoot?.querySelectorAll('.segment.filled').length).toBe(0);
    expect(base?.getAttribute('aria-label')).toBe('0 av 5');
  });

  it('bruker validert skala i aria-label når scale er ugyldig', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator value="2" scale="0"></nve-segmented-level-indicator>`
    );
    const base = el.shadowRoot?.querySelector('div[part="base"]');
    expect(el.shadowRoot?.querySelectorAll('.segment').length).toBe(5);
    expect(base?.getAttribute('aria-label')).toBe('2 av 5');
  });

  it('falls back to default scale 5 when scale is "0"', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator scale="0"></nve-segmented-level-indicator>`
    );
    const segments = el.shadowRoot?.querySelectorAll('.segment');
    expect(segments?.length).toBe(5);
  });

  it('falls back to default scale 5 when scale is "3.14"', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator scale="3.14"></nve-segmented-level-indicator>`
    );
    const segments = el.shadowRoot?.querySelectorAll('.segment');
    expect(segments?.length).toBe(5);
  });

  it('falls back to default scale 5 when scale is "-1"', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator scale="-1"></nve-segmented-level-indicator>`
    );
    const segments = el.shadowRoot?.querySelectorAll('.segment');
    expect(segments?.length).toBe(5);
  });

  it('falls back to default scale 5 when scale is "funker ikke"', async () => {
    const el = await createElementWithAttribute('scale', 'funker ikke');
    const segments = el.shadowRoot?.querySelectorAll('.segment');
    expect(segments?.length).toBe(5);
  });

  it('fills all segments when value equals scale', async () => {
    const el = await fixture<NveSegmentedLevelIndicator>(
      html`<nve-segmented-level-indicator value="5" scale="5"></nve-segmented-level-indicator>`
    );
    const filled = el.shadowRoot?.querySelectorAll('.segment.filled');
    expect(filled?.length).toBe(5);
  });
});
