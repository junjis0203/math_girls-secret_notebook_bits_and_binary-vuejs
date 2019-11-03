import { mount } from '@vue/test-utils';
import Pixel from '../Pixel';

describe('Pixel', () => {
  it('is a white for value 0', () => {
    const wrapper = mount(Pixel, {
      propsData: {
        value: 0
      }
    });
    expect(wrapper.classes()).toContain('pixel-white');
  });

  it('is a black for value 1', () => {
    const wrapper = mount(Pixel, {
      propsData: {
        value: 1
      }
    });
    expect(wrapper.classes()).toContain('pixel-black');
  });

  it('emits click', () => {
    const wrapper = mount(Pixel, {
      propsData: {
        x: 1,
        y: 2
      }
    });
    const span = wrapper.find('span');
    span.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click[0]).toEqual([{x: 1, y: 2}]);
  });
});
