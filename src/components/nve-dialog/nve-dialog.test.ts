import { describe, it, expect, afterAll, vi } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveDialog from './nve-dialog.component';

if (!customElements.get('nve-dialog')) {
  customElements.define('nve-dialog', NveDialog);
}

const nextFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

describe('nve-dialog', () => {
  afterAll(() => fixtureCleanup());

  it('has correct default properties', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog></nve-dialog>`);
    expect(el.open).toBe(false);
    expect(el.label).toBe('');
    expect(el.icon).toBe('');
    expect(el.disableBackground).toBe(false);
    expect(el.noHeader).toBe(false);
  });

  it('renders a native dialog element', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Test"></nve-dialog>`);
    const dialog = el.shadowRoot?.querySelector('dialog');
    expect(dialog).toBeTruthy();
  });

  it('renders header with label', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Overskrift"></nve-dialog>`);
    const title = el.shadowRoot?.querySelector('.dialog__title');
    expect(title?.textContent?.trim()).toBe('Overskrift');
  });

  it('hides header when no-header is set', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog no-header label="Hidden"></nve-dialog>`);
    const header = el.shadowRoot?.querySelector('.dialog__header');
    expect(header).toBeNull();
  });

  it('renders close button with nve-icon', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Test"></nve-dialog>`);
    const closeButton = el.shadowRoot?.querySelector('.dialog__close');
    expect(closeButton).toBeTruthy();
    const icon = closeButton?.querySelector('nve-icon');
    expect(icon).toBeTruthy();
    expect(icon?.getAttribute('name')).toBe('close');
  });

  it('opens dialog via show() method', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Test"></nve-dialog>`);
    await el.show();
    await nextFrame();
    expect(el.open).toBe(true);
    const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
    expect(dialog?.open).toBe(true);
  });

  it('closes dialog via hide() method', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Test"></nve-dialog>`);
    await el.show();
    await nextFrame();
    await el.hide();
    // Wait for close animation
    await new Promise((r) => setTimeout(r, 300));
    expect(el.open).toBe(false);
  });

  it('emits sl-show when opening', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Test"></nve-dialog>`);
    const handler = vi.fn();
    el.addEventListener('sl-show', handler);
    await el.show();
    await nextFrame();
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('emits sl-hide when closing', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Test"></nve-dialog>`);
    await el.show();
    await nextFrame();
    const handler = vi.fn();
    el.addEventListener('sl-hide', handler);
    await el.hide();
    await new Promise((r) => setTimeout(r, 300));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('emits sl-request-close when close button is clicked', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Test"></nve-dialog>`);
    await el.show();
    await nextFrame();
    const handler = vi.fn();
    el.addEventListener('sl-request-close', handler);
    const closeButton = el.shadowRoot?.querySelector('.dialog__close') as HTMLElement;
    closeButton?.click();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.source).toBe('close-button');
  });

  it('prevents overlay close when disableBackground is set', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Test" disableBackground></nve-dialog>`);
    await el.show();
    await nextFrame();
    const handler = vi.fn();
    el.addEventListener('sl-request-close', handler);
    const overlay = el.shadowRoot?.querySelector('.dialog__overlay') as HTMLElement;
    overlay?.click();
    await nextFrame();
    // Dialog stays open because disableBackground prevents overlay close
    expect(el.open).toBe(true);
    // Event was still dispatched
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('closes on overlay click when disableBackground is not set', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Test"></nve-dialog>`);
    await el.show();
    await nextFrame();
    const overlay = el.shadowRoot?.querySelector('.dialog__overlay') as HTMLElement;
    overlay?.click();
    await new Promise((r) => setTimeout(r, 300));
    expect(el.open).toBe(false);
  });

  it('renders slotted footer content', async () => {
    const el = await fixture<NveDialog>(html`
      <nve-dialog label="Test">
        <div slot="footer">Footer content</div>
      </nve-dialog>
    `);
    const footer = el.shadowRoot?.querySelector('.dialog__footer');
    expect(footer).toBeTruthy();
  });

  it('sets aria-labelledby when header is visible', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog label="Test"></nve-dialog>`);
    const dialog = el.shadowRoot?.querySelector('dialog');
    expect(dialog?.getAttribute('aria-labelledby')).toBe('title');
  });

  it('sets aria-label when no-header is used', async () => {
    const el = await fixture<NveDialog>(html`<nve-dialog no-header label="Hidden label"></nve-dialog>`);
    const dialog = el.shadowRoot?.querySelector('dialog');
    expect(dialog?.getAttribute('aria-label')).toBe('Hidden label');
  });
});
