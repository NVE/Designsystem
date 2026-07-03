import { describe, it, expect, afterAll } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveModal from './nve-modal.component';

if (!customElements.get('nve-modal')) {
  customElements.define('nve-modal', NveModal);
}

const nextFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

describe('nve-modal', () => {
  afterAll(() => fixtureCleanup());

  it('renders a native dialog element', async () => {
    const el = await fixture<NveModal>(html`<nve-modal label="Test"></nve-modal>`);
    const dialog = el.shadowRoot?.querySelector('dialog');
    expect(dialog).toBeTruthy();
  });

  it('renders header with label', async () => {
    const el = await fixture<NveModal>(html`<nve-modal label="Overskrift"></nve-modal>`);
    const title = el.shadowRoot?.querySelector('.modal__title');
    expect(title?.textContent?.trim()).toBe('Overskrift');
  });

  it('sets property open when show() is called', async () => {
    const el = await fixture<NveModal>(html`<nve-modal label="Test"></nve-modal>`);
    await el.show();
    await nextFrame();
    expect(el.open).toBe(true);
    const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
    expect(dialog?.open).toBe(true);
  });

  it('sets property open to false when close() is called', async () => {
    const el = await fixture<NveModal>(html`<nve-modal label="Test"></nve-modal>`);
    await el.show();
    await nextFrame();
    await el.close();
    // Wait for close animation
    await new Promise((r) => setTimeout(r, 300));
    expect(el.open).toBe(false);
  });

  it('closes modal when close button is clicked', async () => {
    const el = await fixture<NveModal>(html`<nve-modal label="Test"></nve-modal>`);
    await el.show();
    await nextFrame();
    const closeButton = el.shadowRoot?.querySelector('[part="close-button"]') as HTMLElement;
    closeButton?.click();
    // Wait for close animation
    await new Promise((r) => setTimeout(r, 300));
    expect(el.open).toBe(false);
  });

  it('renders slotted footer content', async () => {
    const el = await fixture<NveModal>(html`
      <nve-modal label="Test">
        <div slot="footer">Footer content</div>
      </nve-modal>
    `);
    const footer = el.shadowRoot?.querySelector('.modal__footer');
    expect(footer).toBeTruthy();
  });

  it('sets aria-labelledby', async () => {
    const el = await fixture<NveModal>(html`<nve-modal label="Test"></nve-modal>`);
    const dialog = el.shadowRoot?.querySelector('dialog');
    expect(dialog?.getAttribute('aria-labelledby')).toBe('title');
  });

  it('dispatches close event when close() is called', async () => {
    const el = await fixture<NveModal>(html`<nve-modal label="Test"></nve-modal>`);
    await el.show();
    await nextFrame();

    const closeEventPromise = new Promise<Event>((resolve) => {
      el.addEventListener('close', resolve, { once: true });
    });

    await el.close();

    const closeEvent = await closeEventPromise;

    expect(closeEvent).toBeTruthy();
    expect(el.open).toBe(false);
  });
});
