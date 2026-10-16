import { afterAll, describe, expect, it, vi } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import NveBox from './nve-box/nve-box.component';
import NveCluster from './nve-cluster/nve-cluster.component';
import NveGrid from './nve-grid/nve-grid.component';
import NveStack from './nve-stack/nve-stack.component';

if (!customElements.get('nve-box')) customElements.define('nve-box', NveBox);
if (!customElements.get('nve-cluster')) customElements.define('nve-cluster', NveCluster);
if (!customElements.get('nve-grid')) customElements.define('nve-grid', NveGrid);
if (!customElements.get('nve-stack')) customElements.define('nve-stack', NveStack);

describe('layout components', () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it('renders the selected native element for each layout component', async () => {
    const stack = await fixture<NveStack>(html`<nve-stack as="section">Stack</nve-stack>`);
    const cluster = await fixture<NveCluster>(html`<nve-cluster as="nav">Cluster</nve-cluster>`);
    const grid = await fixture<NveGrid>(html`<nve-grid as="article">Grid</nve-grid>`);
    const box = await fixture<NveBox>(html`<nve-box as="aside">Box</nve-box>`);

    expect(stack.shadowRoot?.querySelector('.layout')?.localName).toBe('section');
    expect(cluster.shadowRoot?.querySelector('.layout')?.localName).toBe('nav');
    expect(grid.shadowRoot?.querySelector('.layout')?.localName).toBe('article');
    expect(box.shadowRoot?.querySelector('.layout')?.localName).toBe('aside');
  });

  it('forwards ARIA attributes to the selected native element', async () => {
    const stack = await fixture<NveStack>(
      html`<nve-stack as="section" aria-label="Contact details">Content</nve-stack>`
    );

    expect(stack.shadowRoot?.querySelector('.layout')?.getAttribute('aria-label')).toBe('Contact details');

    stack.setAttribute('aria-label', 'Updated details');
    await new Promise((resolve) => setTimeout(resolve));
    expect(stack.shadowRoot?.querySelector('.layout')?.getAttribute('aria-label')).toBe('Updated details');
  });

  it('uses div by default and responds when the selected element changes', async () => {
    const stack = await fixture<NveStack>(html`<nve-stack>Stack</nve-stack>`);

    expect(stack.shadowRoot?.querySelector('.layout')?.localName).toBe('div');

    stack.as = 'section';
    await stack.updateComplete;
    expect(stack.shadowRoot?.querySelector('.layout')?.localName).toBe('section');
  });

  it.each(['div', 'section', 'article', 'aside', 'nav', 'main', 'header', 'footer', 'form', 'ul'])(
    'supports as="%s"',
    async (tag) => {
      const stack = await fixture<NveStack>(html`<nve-stack as=${tag}></nve-stack>`);

      expect(stack.shadowRoot?.querySelector('.layout')?.localName).toBe(tag);
    }
  );

  it('slots list items into ul', async () => {
    const stack = await fixture<NveStack>(html`<nve-stack as="ul"><li>Item</li></nve-stack>`);
    const slot = stack.shadowRoot?.querySelector('ul > slot');

    expect(slot).toBeInstanceOf(HTMLSlotElement);
    expect((slot as HTMLSlotElement).assignedElements()).toEqual([stack.querySelector('li')]);
  });

  it.each(['span', 'ol', 'textarea', 'script', 'unknown-tag'])(
    'warns and falls back to div for unsupported as="%s"',
    async (tag) => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      try {
        const stack = await fixture<NveStack>(html`<nve-stack as=${tag}></nve-stack>`);
        await stack.updateComplete;

        expect(stack.as).toBe('div');
        expect(stack.shadowRoot?.querySelector('.layout')?.localName).toBe('div');
        expect(warn).toHaveBeenCalledWith(
          `[nve-stack] Invalid 'as' value: "${tag}". Falling back to "div".`
        );
      } finally {
        warn.mockRestore();
      }
    }
  );
});
