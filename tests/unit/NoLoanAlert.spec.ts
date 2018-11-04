import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import NoLoanAlert from '@/components/NoLoanAlert.vue';
import { state, getters } from '@/store';
const localVue = createLocalVue();
localVue.use(Vuex);

describe('NoLoanAlert.vue', () => {
  it('does not render if the length of the array of loans < 3', () => {
    const store = new Vuex.Store({
      state,
      getters
    });
    const wrapper = shallowMount(NoLoanAlert, {
      store,
      localVue
    });
    expect(wrapper.element.innerHTML).toBe('<!---->');
  });
});
