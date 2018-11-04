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
  loans: [
    {
      balance: 1100,
      interest: 1,
      earlyPaymentFee: 10,
      payout: 1111,
      topUp: false,
    },
    {
      balance: 11200,
      interest: 2,
      earlyPaymentFee: 10,
      payout: 11212,
      topUp: false,
    },
    {
      balance: 222300,
      interest: 3,
      earlyPaymentFee: 10,
      payout: 222313,
      topUp: false,
    },
  ],
};

const mutations = {};
const actions = {};
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
