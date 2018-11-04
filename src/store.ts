import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface StateType {
  totalPayout: number;
}

const state: StateType = {
  totalPayout: 0,
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
