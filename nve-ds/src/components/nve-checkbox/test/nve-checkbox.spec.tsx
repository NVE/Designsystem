import { newSpecPage } from '@stencil/core/testing';
import { NveCheckbox } from '../nve-checkbox';

describe('nve-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NveCheckbox],
      html: `<nve-checkbox></nve-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <nve-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nve-checkbox>
    `);
  });
});
