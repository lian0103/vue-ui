import { render, screen } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';

import GButton from '../GButton.vue';

describe('GButton', () => {
  const btnText = '按鈕A';

  it('render g-button default', async () => {
    const wrapper = render(GButton, {
      props: { type: 'yellow' },
      slots: { default: btnText },
    });
    // console.log(wrapper.html());
    expect(wrapper.html()).toContain(btnText);
    expect(wrapper.html()).toContain('gt-btn-yellow');
    expect(wrapper.html()).toContain('gt-btn-round-no-border');
  });

  it('render g-button pill', async () => {
    const wrapper = render(GButton, {
      props: { type: 'white', pill: true },
      slots: { default: btnText },
    });
    // console.log(wrapper.html());
    expect(wrapper.html()).toContain(btnText);
    expect(wrapper.html()).toContain('gt-btn-white');
    expect(wrapper.html()).toContain('gt-btn-pill');
  });

  it('render g-button file', async () => {
    const wrapper = render(GButton, {
      props: { icon: 'file', type:'black' }
    });
    // console.log(wrapper.html());
    expect(wrapper.html()).toContain('gt-btn-black');
  });
});
