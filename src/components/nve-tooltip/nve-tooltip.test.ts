import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import { afterAll, describe, expect, it, vi } from 'vitest';
import NveTooltip from './nve-tooltip.component';

if (!customElements.get('nve-tooltip')) {
  customElements.define('nve-tooltip', NveTooltip);
}

async function waitForSlotWork(el: NveTooltip) {
  await el.updateComplete;
  await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
  await el.updateComplete;
}

describe('nve-tooltip', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('has the documented default properties', async () => {
    const el = await fixture<NveTooltip>(html`<nve-tooltip></nve-tooltip>`);
    expect(el.variant).toBe('neutral');
    expect(el.saturation).toBe('default');
  });

  it('has correct neutral variant class', async () => {
    const el = await fixture<NveTooltip>(html`<nve-tooltip variant="neutral"></nve-tooltip>`);
    const tooltip = el.shadowRoot?.querySelector('div[part="tooltip"]');
    expect(tooltip?.classList.contains('feedback--neutral')).toBe(true);
  });

  it('has correct success variant class', async () => {
    const el = await fixture<NveTooltip>(html`<nve-tooltip variant="success"></nve-tooltip>`);
    const tooltip = el.shadowRoot?.querySelector('div[part="tooltip"]');
    expect(tooltip?.classList.contains('feedback--success')).toBe(true);
  });

  it('has correct error variant class', async () => {
    const el = await fixture<NveTooltip>(html`<nve-tooltip variant="error"></nve-tooltip>`);
    const tooltip = el.shadowRoot?.querySelector('div[part="tooltip"]');
    expect(tooltip?.classList.contains('feedback--error')).toBe(true);
  });

  it('has correct info variant class', async () => {
    const el = await fixture<NveTooltip>(html`<nve-tooltip variant="info"></nve-tooltip>`);
    const tooltip = el.shadowRoot?.querySelector('div[part="tooltip"]');
    expect(tooltip?.classList.contains('feedback--info')).toBe(true);
  });

  it('has correct warning variant class', async () => {
    const el = await fixture<NveTooltip>(html`<nve-tooltip variant="warning"></nve-tooltip>`);
    const tooltip = el.shadowRoot?.querySelector('div[part="tooltip"]');
    expect(tooltip?.classList.contains('feedback--warning')).toBe(true);
  });

  it('sets title on the link', async () => {
    const el = await fixture<NveTooltip>(
      html`<nve-tooltip variant="warning" content="This is link"><a class="link" href="#">Link</a></nve-tooltip>`
    );
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const link = el.querySelector('a.link');
    expect(link?.getAttribute('title')).toBe('This is link');
  });

  it('sets aria-label on the link', async () => {
    const el = await fixture<NveTooltip>(
      html`<nve-tooltip variant="warning" content="This is link"><a class="link" href="#"></a></nve-tooltip>`
    );
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const link = el.querySelector('a.link');
    expect(link?.getAttribute('aria-label')).toBe('This is link');
  });

  it('sets title on the button', async () => {
    const el = await fixture<NveTooltip>(
      html`<nve-tooltip variant="warning" content="This is button"><button class="button">Button</button></nve-tooltip>`
    );
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const button = el.querySelector('button.button');
    expect(button?.getAttribute('title')).toBe('This is button');
  });

  it('sets aria-label on the button', async () => {
    const el = await fixture<NveTooltip>(
      html`<nve-tooltip variant="warning" content="This is button"><button class="button"></button></nve-tooltip>`
    );
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const button = el.querySelector('button.button');
    expect(button?.getAttribute('aria-label')).toBe('This is button');
  });

  it('calls showPopover when the trigger receives focus', async () => {
    const el = await fixture<NveTooltip>(html`
      <nve-tooltip content="Tooltip content">
        <button>Trigger</button>
      </nve-tooltip>
    `);

    const tooltip = el.shadowRoot!.querySelector('.tooltip') as HTMLDivElement;

    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot');
    slot?.dispatchEvent(new Event('slotchange'));
    await waitForSlotWork(el);

    const trigger = el.querySelector('button')!;
    tooltip.showPopover = vi.fn();

    trigger.focus();

    expect(tooltip.showPopover).toHaveBeenCalledOnce();
  });
});
