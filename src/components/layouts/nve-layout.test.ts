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

  it('uses native semantics when no explicit role is provided', async () => {
    const stack = await fixture<NveStack>(
      html`<nve-stack as="nav" aria-label="Contact details">Content</nve-stack>`
    );

    const layout = stack.shadowRoot?.querySelector('.layout');
    expect(stack.getAttribute('aria-label')).toBe('Contact details');
    expect(stack.hasAttribute('role')).toBe(false);
    expect(layout?.hasAttribute('aria-label')).toBe(false);
    expect(layout?.hasAttribute('role')).toBe(false);

    stack.setAttribute('aria-label', 'Updated details');
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(stack.getAttribute('aria-label')).toBe('Updated details');
    expect(stack.hasAttribute('role')).toBe(false);
  });

  it('keeps explicit roles on the host instead of duplicating them internally', async () => {
    const stack = await fixture<NveStack>(
      html`<nve-stack as="nav" role="navigation" aria-label="Main menu">Content</nve-stack>`
    );
    const layout = stack.shadowRoot?.querySelector('.layout');

    expect(stack.getAttribute('role')).toBe('navigation');
    expect(layout?.getAttribute('role')).toBe('presentation');
    expect(layout?.hasAttribute('aria-label')).toBe(false);
  });

  it('keeps ID-reference ARIA attributes usable from the light DOM', async () => {
    const container = await fixture(
      html`<div>
        <span id="menu-title">Main menu</span>
        <nve-stack as="nav" role="navigation" aria-labelledby="menu-title">Content</nve-stack>
      </div>`
    );
    const stack = container.querySelector('nve-stack');

    expect(stack?.getAttribute('aria-labelledby')).toBe('menu-title');
    expect(stack?.getAttribute('role')).toBe('navigation');
    expect(stack?.shadowRoot?.querySelector('.layout')?.getAttribute('role')).toBe('presentation');
    expect(stack?.shadowRoot?.querySelector('.layout')?.hasAttribute('aria-labelledby')).toBe(false);
  });

  it('restores native semantics when an explicit role is removed', async () => {
    const stack = await fixture<NveStack>(
      html`<nve-stack as="nav" role="navigation" aria-label="Main menu">Content</nve-stack>`
    );
    const layout = stack.shadowRoot?.querySelector('.layout');
    expect(layout?.getAttribute('role')).toBe('presentation');

    stack.removeAttribute('role');
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(layout?.hasAttribute('role')).toBe(false);
  });

  it('revalidates rejected stack justification values after unrelated updates', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      const stack = await fixture<NveStack>(
        html`<nve-stack justify="safe center" gap="small">Content</nve-stack>`
      );

      expect(stack.style.getPropertyValue('--_stack-justify')).toBe('');
      stack.gap = 'large';
      await stack.updateComplete;

      expect(stack.style.getPropertyValue('--_stack-justify')).toBe('');
      expect(warn).toHaveBeenCalledTimes(1);
    } finally {
      warn.mockRestore();
    }
  });

  it('revalidates rejected cluster alignment and justification after unrelated updates', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      const cluster = await fixture<NveCluster>(
        html`<nve-cluster justify="safe center" align="normal" gap="small">Content</nve-cluster>`
      );

      expect(cluster.style.getPropertyValue('--_cluster-justify')).toBe('');
      expect(cluster.style.getPropertyValue('--_cluster-align')).toBe('');
      cluster.gap = 'large';
      await cluster.updateComplete;

      expect(cluster.style.getPropertyValue('--_cluster-justify')).toBe('');
      expect(cluster.style.getPropertyValue('--_cluster-align')).toBe('');
      expect(warn).toHaveBeenCalledTimes(2);
    } finally {
      warn.mockRestore();
    }
  });

  it('reapplies directional spacing overrides when shorthand spacing changes', async () => {
    const stack = await fixture<NveStack>(
      html`<nve-stack padding-block="small" margin-inline="x-small"></nve-stack>`
    );
    stack.padding = 'large';
    stack.margin = 'large';
    await stack.updateComplete;

    expect(stack.style.getPropertyValue('padding')).toBe('var(--spacing-large)');
    expect(stack.style.getPropertyValue('padding-block')).toBe('var(--spacing-small)');
    expect(stack.style.getPropertyValue('margin')).toBe('var(--spacing-large)');
    expect(stack.style.getPropertyValue('margin-inline')).toBe('var(--spacing-x-small)');
  });

  it('uses div by default and responds when the selected element changes', async () => {
    const stack = await fixture<NveStack>(html`<nve-stack>Stack</nve-stack>`);

    expect(stack.shadowRoot?.querySelector('.layout')?.localName).toBe('div');

    stack.as = 'section';
    await stack.updateComplete;
    expect(stack.shadowRoot?.querySelector('.layout')?.localName).toBe('section');
  });

  it.each(['div', 'section', 'article', 'aside', 'nav', 'main', 'header', 'footer', 'ul'])(
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

  it.each(['span', 'ol', 'form', 'textarea', 'script', 'unknown-tag'])(
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
