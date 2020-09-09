import { newSpecPage } from '@stencil/core/testing';
import { StFooter } from '../st-footer';

describe('st-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StFooter],
      html: `<st-footer></st-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <st-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </st-footer>
    `);
  });
});
