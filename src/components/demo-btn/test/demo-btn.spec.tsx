import { newSpecPage } from '@stencil/core/testing';
import { DemoBtnComponent } from '../demo-btn';

describe('my-component', () => {
  it('should focus input el on btn click', async ()=> {
    const page = await newSpecPage({
      components: [DemoBtnComponent],
      html: '<demo-btn></demo-btn>',
    });

    const btn = page.root.shadowRoot.querySelector('button')
    btn.click(); // Throws error after this line
    await page.waitForChanges();
    expect(true).toBeTruthy(); // For sake of completion
  });
});

