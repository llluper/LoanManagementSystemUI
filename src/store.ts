import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface StateType {
  totalPayout: number;
  loans: {
    balance: number;
    interest: number;
    earlyPaymentFee: number;
    payout: number;
    topUp: boolean;
  }[];
}

const state: StateType = {
  totalPayout: 0,
  loans: [],
};

const mutations = {
  topUp(state: StateType, index: any) {
    state.loans[index].topUp = !state.loans[index].topUp;
    state.totalPayout += state.loans[index].topUp ? state.loans[index].payout : -state.loans[index].payout;
  },
};

const actions = {
  topUp: (context: any, payload: any) => context.commit('topUp', payload),
};

const getters = {
  loanCount: (state: StateType) => state.loans.length,
  loanCountThreeOrMore: (state: StateType) => state.loans.length >= 3,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
