import { newSpecPage } from '@stencil/core/testing';
import { StModal } from '../st-modal';

describe('st-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StModal],
      html: `<st-modal></st-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <st-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </st-modal>
    `);
  });
});
