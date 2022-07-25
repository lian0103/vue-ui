import { render, screen } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';

import GButton from '../GButton.vue';

describe('測試GButton', () => {
  it('項目1 基本渲染是否正常', async () => {
    const wrapper = render(GButton);
    expect(wrapper.html()).toContain('gt-btn');
  });

  it('項目2 渲染屬性yellow按鈕', async () => {
    const wrapper = render(GButton, {
      props: { type: 'yellow' },
    });
    expect(wrapper.html()).toContain('gt-btn-yellow');
    expect(wrapper.html()).toContain('gt-btn-round-no-border');
  });

  it('項目3 渲染屬性pill按鈕 ', async () => {
    const wrapper = render(GButton, {
      props: { type: 'white', pill: true },
    });
    expect(wrapper.html()).toContain('gt-btn-pill');
  });

  it('項目4 渲染Slot內容 ', async () => {
    const btnText = '按鈕A';
    const wrapper = render(GButton, {
      slots: { default: btnText },
    });
    expect(wrapper.html()).toContain(btnText);
  });

  it('項目5 渲染有file圖標的按鈕', async () => {
    const wrapper = render(GButton, {
      props: { icon: 'file', type: 'black' },
    });
    expect(wrapper.html()).toContain('gt-btn-black');
    expect(wrapper.html()).toContain('iconBtn');
  });
});
