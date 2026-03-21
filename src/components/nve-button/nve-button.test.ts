import { afterAll, describe, expect, it, vi } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveButton from './nve-button.component';
import '../nve-icon/nve-icon.component';

if (!customElements.get('nve-button')) {
  customElements.define('nve-button', NveButton);
}

/**
 * Hjelper for å trigge slotchange hendelse i tab group. Trengs for å kalle syncTabsAndPanels i testene.
 */
async function triggerSlotChange(button: NveButton) {
  const slot = button.shadowRoot?.querySelector('slot:not([name])');
  await new Promise<void>((resolve) => {
    slot?.addEventListener(
      'slotchange',
      async () => {
        await button.updateComplete;
        resolve();
      },
      { once: true }
    );
    const child = document.createElement('div');
    child.textContent = 'foo';
    button.appendChild(child);
    button.removeChild(child);
  });
}

describe('nve-button', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('has correct content', async () => {
    const el = await fixture<NveButton>(html`<nve-button>Default</nve-button>`);
    expect(el?.innerHTML).toContain('Default');
  });

  it('has correct default (secondary and medium) properties', async () => {
    const el = await fixture<NveButton>(html`<nve-button></nve-button>`);
    expect(el.variant).toBe('secondary');
    expect(el.size).toBe('medium');
  });

  it('has correct primary variant class', async () => {
    const el = await fixture<NveButton>(html`<nve-button variant="primary"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(button?.classList.contains('button--primary')).toBe(true);
  });

  it('has correct tertiary variant class', async () => {
    const el = await fixture<NveButton>(html`<nve-button variant="tertiary"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(button?.classList.contains('button--tertiary')).toBe(true);
  });

  it('has correct ghost variant class', async () => {
    const el = await fixture<NveButton>(html`<nve-button variant="ghost"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(button?.classList.contains('button--ghost')).toBe(true);
  });

  it('has correct danger variant class', async () => {
    const el = await fixture<NveButton>(html`<nve-button variant="danger"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(button?.classList.contains('button--danger')).toBe(true);
  });

  it('has correct small size property and class', async () => {
    const el = await fixture<NveButton>(html`<nve-button size="small"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(el.size).toBe('small');
    expect(button?.classList.contains('button--small')).toBe(true);
  });

  it('has correct large size property and class', async () => {
    const el = await fixture<NveButton>(html`<nve-button size="large"></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');

    expect(el.size).toBe('large');
    expect(button?.classList.contains('button--large')).toBe(true);
  });

  it('is disabled', async () => {
    const el = await fixture<NveButton>(html`<nve-button disabled></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(el.disabled).toBe(true);
    expect(button?.classList.contains('button--disabled')).toBe(true);
  });

  it('has loading class', async () => {
    const el = await fixture<NveButton>(html`<nve-button loading></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(el.loading).toBe(true);
    expect(button?.classList.contains('button--loading')).toBe(true);
  });

  it('has circle class', async () => {
    const el = await fixture<NveButton>(html`<nve-button circle><nve-icon name="house"></nve-icon></nve-button>`);
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    await triggerSlotChange(el);
    expect(el.circle).toBe(true);
    expect(button?.classList.contains('button--circle')).toBe(true);
  });

  it('has start slot and it finds at correct position', async () => {
    const el = await fixture<NveButton>(
      html`<nve-button disabled>
        Regular text
        <span slot="start">Start</span>
      </nve-button>`
    );
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    const nodes = Array.from(button?.childNodes ?? []);
    const prefix = nodes.find((n) => n instanceof HTMLSlotElement && n.name === 'start') as HTMLSlotElement;
    const regularSlotIndex = nodes.findIndex((n) => n instanceof HTMLSlotElement && n.name === ''); // Vanlig slot
    const prefixIndex = nodes.indexOf(prefix);
    const assignedPrefix = prefix?.assignedElements?.() ?? [];
    expect(assignedPrefix[0]?.textContent).toBe('Start');
    expect(el?.innerHTML).toContain('Regular text');
    expect(prefixIndex).toBeLessThan(regularSlotIndex);
  });

  it('has end slot and it finds at correct position', async () => {
    const el = await fixture<NveButton>(
      html`<nve-button disabled>
        <span slot="end">End</span>
        Regular text
      </nve-button>`
    );
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    const nodes = Array.from(button?.childNodes ?? []);
    const suffix = nodes.find((n) => n instanceof HTMLSlotElement && n.name === 'end') as HTMLSlotElement;
    const regularSlotIndex = nodes.findIndex((n) => n instanceof HTMLSlotElement && n.name === ''); // Vanlig slot
    const suffixIndex = nodes.indexOf(suffix);
    const assignedSuffix = suffix?.assignedElements?.() ?? [];
    expect(assignedSuffix[0]?.textContent).toBe('End');
    expect(el?.innerHTML).toContain('Regular text');
    expect(suffixIndex).toBeGreaterThan(regularSlotIndex);
  });

  it('is inside the form and behaves correctly when type is submit', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form action="/test" method="post">
        <nve-button type="submit" name="action" value="save">Save</nve-button>
      </form>
    `);

    const nveButton = form.querySelector('nve-button') as NveButton;

    const submitSpy = vi.fn((event: SubmitEvent) => {
      event.preventDefault();
      const submitter = event.submitter as HTMLButtonElement | null;
      expect(submitter).not.toBeNull();
      expect(submitter!.name).toBe('action');
      expect(submitter!.value).toBe('save');
      expect(submitter!.type).toBe('submit');
    });

    form.addEventListener('submit', submitSpy);

    // click the internal native button -> handleClick -> constructLightDOMButton
    const innerButton = nveButton.shadowRoot!.querySelector('button') as HTMLButtonElement;
    innerButton.click();

    expect(submitSpy).toHaveBeenCalledTimes(1);
  });

  it('check if aria attributes are set correctly on the native button and removed from the host', async () => {
    const el = await fixture<NveButton>(
      html`<nve-button aria-label="Test" aria-expanded="false" aria-pressed="true"></nve-button>`
    );
    const button = el.shadowRoot?.querySelector('button[part="base"]');
    expect(button?.getAttribute('aria-label')).toBe('Test');
    expect(button?.getAttribute('aria-expanded')).toBe('false');
    expect(button?.getAttribute('aria-pressed')).toBe('true');
    expect(el.hasAttribute('aria-label')).toBe(false);
    expect(el.hasAttribute('aria-expanded')).toBe(false);
    expect(el.hasAttribute('aria-pressed')).toBe(false);
  });

  it('check if link tag is set when href is provided', async () => {
    const el = await fixture<NveButton>(html`<nve-button href="https://example.com">Link</nve-button>`);
    const link = el.shadowRoot?.querySelector('a[part="base"]');
    expect(link?.getAttribute('href')).toBe('https://example.com');
  });
});
