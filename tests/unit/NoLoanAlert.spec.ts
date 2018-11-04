import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NoLoanAlert from '@/components/NoLoanAlert.vue';
import { state, getters } from '@/store';
const localVue = createLocalVue();
localVue.use(Vuex);

describe('NoLoanAlert.vue', () => {
  const NoLoanAlertText = 'With 3 or more current Personal Loans, a new loan application is not possible in this flow';
  it('does not render if the length of the array of loans is less than 3', () => {
    const store = new Vuex.Store({
      state,
      getters,
    });
    const wrapper = shallowMount(NoLoanAlert, {
      store,
      localVue,
    });
    expect(wrapper.element.innerHTML).toBe('<!---->');
  });
  it('renders with the correct text if the length of the array of loans 3 or more', () => {
    const store = new Vuex.Store({
      state: {
        totalPayout: 0,
        loans: [
          {
            balance: 1,
            interest: 1,
            earlyPaymentFee: 1,
            payout: 3,
            topUp: false,
          },
          {
            balance: 2,
            interest: 1,
            earlyPaymentFee: 2,
            payout: 5,
            topUp: false,
          },
          {
            balance: 5,
            interest: 2,
            earlyPaymentFee: 3,
            payout: 10,
            topUp: false,
          },
        ],
      },
      getters,
    });
    const wrapper = shallowMount(NoLoanAlert, {
      store,
      localVue,
    });
    expect(wrapper.find('p').element.innerHTML).toBe(NoLoanAlertText);
  });
});
