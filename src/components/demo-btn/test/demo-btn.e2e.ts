import { newE2EPage } from '@stencil/core/testing';

describe('demo-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-btn></demo-btn>');

    const element = await page.find('demo-btn');
    expect(element).toHaveClass('hydrated');
  });
});
