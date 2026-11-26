import { afterAll, describe, expect, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveAvalancheProblemRiskIndicator from './nve-avalanche-problem-risk-indicator.component';
import NveButton from '../nve-button/nve-button.component';

if (!customElements.get('nve-avalanche-problem-risk-indicator')) {
  customElements.define('nve-avalanche-problem-risk-indicator', NveAvalancheProblemRiskIndicator);
}

describe('nve-avalanche-problem-risk-indicator', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('is attached to the DOM', async () => {
    const el = await fixture<NveAvalancheProblemRiskIndicator>(
      html`<nve-avalanche-problem-risk-indicator></nve-avalanche-problem-risk-indicator>`
    );
    expect(document.body.contains(el)).toBe(true);
  });

  it('has correct default properties', async () => {
    const el = await fixture<NveAvalancheProblemRiskIndicator>(
      html`<nve-avalanche-problem-risk-indicator></nve-avalanche-problem-risk-indicator>`
    );
    expect(el.triggerSensitivityId).toBe('');
    expect(el.propagationId).toBe('');
    expect(el.destructiveSizeId).toBe('');
    expect(el.lang).toBe('no');
  });

  it('shows norwegian label and description for destructiveSize by default', async () => {
    const el = await fixture<NveAvalancheProblemRiskIndicator>(
      html`<nve-avalanche-problem-risk-indicator destructiveSizeId="2"></nve-avalanche-problem-risk-indicator>`
    );
    const indicator = el.shadowRoot?.querySelector('nve-segmented-level-indicator');
    expect(indicator?.getAttribute('label')).toBe('Snøskred kan bli store nok til å begrave en person');
    el.shadowRoot?.querySelector('nve-button')?.click();
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector('p')?.textContent?.trim()).toBe(
      'Kan begrave, skade eller drepe en person. Skredet stopper i bunn av henget. Volum: < 1000 m3'
    );
  });

  it('shows english label and description when lang is en-GB', async () => {
    const el = await fixture<NveAvalancheProblemRiskIndicator>(
      html`<nve-avalanche-problem-risk-indicator
        destructiveSizeId="2"
        lang="en-GB"
      ></nve-avalanche-problem-risk-indicator>`
    );
    const indicator = el.shadowRoot?.querySelector('nve-segmented-level-indicator');
    expect(indicator?.getAttribute('label')).toBe('Avalanches can be large enough to bury a person');
    el.shadowRoot?.querySelector('nve-button')?.click();
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector('p')?.textContent?.trim()).toBe(
      'Can bury, injure, or kill a person. The avalanche reaches the bottom of the slope. Volume: < 1,000 m³'
    );
  });

  it('renders one segmented indicator per id with the level of that id and the correct scale', async () => {
    const el = await fixture<NveAvalancheProblemRiskIndicator>(
      html`<nve-avalanche-problem-risk-indicator
        triggerSensitivityId="5"
        propagationId="2"
        destructiveSizeId="4"
      ></nve-avalanche-problem-risk-indicator>`
    );
    const indicators = el.shadowRoot?.querySelectorAll('nve-segmented-level-indicator');
    expect(indicators?.length).toBe(3);
    expect(indicators?.[0].getAttribute('value')).toBe('4');
    expect(indicators?.[0].getAttribute('scale')).toBe('4');
    expect(indicators?.[1].getAttribute('value')).toBe('2');
    expect(indicators?.[1].getAttribute('scale')).toBe('3');
    expect(indicators?.[2].getAttribute('value')).toBe('4');
    expect(indicators?.[2].getAttribute('scale')).toBe('5');
  });

  it('renders nothing for an unknown id', async () => {
    const el = await fixture<NveAvalancheProblemRiskIndicator>(
      html`<nve-avalanche-problem-risk-indicator destructiveSizeId="99"></nve-avalanche-problem-risk-indicator>`
    );
    expect(el.shadowRoot?.querySelector('nve-segmented-level-indicator')).toBeNull();
    expect(el.shadowRoot?.querySelector('nve-button')).toBeNull();
  });

  it('renders no indicators or button when all ids are empty', async () => {
    const el = await fixture<NveAvalancheProblemRiskIndicator>(
      html`<nve-avalanche-problem-risk-indicator></nve-avalanche-problem-risk-indicator>`
    );
    expect(el.shadowRoot?.querySelectorAll('nve-segmented-level-indicator').length).toBe(0);
    expect(el.shadowRoot?.querySelector('nve-button')).toBeNull();
  });

  it('places the expand button in the first visible row when triggerSensitivity is missing', async () => {
    const el = await fixture<NveAvalancheProblemRiskIndicator>(
      html`<nve-avalanche-problem-risk-indicator
        propagationId="1"
        destructiveSizeId="2"
      ></nve-avalanche-problem-risk-indicator>`
    );
    const firstRow = el.shadowRoot?.querySelector('.indicator__row');
    expect(firstRow?.querySelector('nve-button')).not.toBeNull();
    expect(el.shadowRoot?.querySelectorAll('nve-button').length).toBe(1);
  });

  it('shows no description before the expand button is clicked', async () => {
    const el = await fixture<NveAvalancheProblemRiskIndicator>(
      html`<nve-avalanche-problem-risk-indicator destructiveSizeId="2"></nve-avalanche-problem-risk-indicator>`
    );
    expect(el.shadowRoot?.querySelector('p')).toBeNull();
  });

  it('toggles description and aria-expanded when the expand button is clicked', async () => {
    const el = await fixture<NveAvalancheProblemRiskIndicator>(
      html`<nve-avalanche-problem-risk-indicator destructiveSizeId="2"></nve-avalanche-problem-risk-indicator>`
    );
    const button = el.shadowRoot?.querySelector('nve-button') as NveButton;
    const nativeButton = button.shadowRoot?.querySelector('button[part="base"]');
    expect(nativeButton?.getAttribute('aria-expanded')).toBe('false');
    expect(button.textContent?.trim()).toBe('Vis detaljer');

    button.click();
    await el.updateComplete;
    await button.updateComplete;
    expect(nativeButton?.getAttribute('aria-expanded')).toBe('true');
    expect(button.textContent?.trim()).toBe('Skjul detaljer');
    expect(el.shadowRoot?.querySelector('nve-icon')?.getAttribute('name')).toBe('expand_less');
    expect(el.shadowRoot?.querySelector('p')).not.toBeNull();

    button.click();
    await el.updateComplete;
    await button.updateComplete;
    expect(nativeButton?.getAttribute('aria-expanded')).toBe('false');
    expect(el.shadowRoot?.querySelector('nve-icon')?.getAttribute('name')).toBe('expand_more');
    expect(el.shadowRoot?.querySelector('p')).toBeNull();
  });
});
