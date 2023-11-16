import { newE2EPage } from '@stencil/core/testing';

describe('nve-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nve-checkbox></nve-checkbox>');

    const element = await page.find('nve-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
