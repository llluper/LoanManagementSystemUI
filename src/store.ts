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
      balance: 100,
      interest: 1,
      earlyPaymentFee: 10,
      payout: 111,
      topUp: false,
    },
    {
      balance: 200,
      interest: 2,
      earlyPaymentFee: 10,
      payout: 212,
      topUp: false,
    },
    {
      balance: 300,
      interest: 3,
      earlyPaymentFee: 10,
      payout: 313,
      topUp: false,
    },
  ],
};

const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
