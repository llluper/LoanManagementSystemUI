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

export const state: StateType = {
  totalPayout: 0,
  loans: [],
};

export const mutations = {
  topUp(state: StateType, index: any) {
    state.loans[index].topUp = !state.loans[index].topUp;
    state.totalPayout += state.loans[index].topUp ? state.loans[index].payout : -state.loans[index].payout;
  },
  saveLoans(state: StateType, loans: any) {
    state.loans = [...loans];
  },
};

export const actions = {
  topUp: (context: any, payload: any) => context.commit('topUp', payload),
  saveLoans: (context: any, payload: any) => context.commit('saveLoans', payload),
};

export const getters = {
  loanCount: (state: StateType) => state.loans.length,
  loanCountThreeOrMore: (state: StateType) => state.loans.length >= 3,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
