import Vue from 'vue';
import Vuex from 'vuex';
import { state, mutations } from './state';
import * as actions from './actions';
import * as getters from './getters';
import * as types from './mutation-types';
import plugins from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins
});
