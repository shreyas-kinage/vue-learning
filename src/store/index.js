import { createApp } from 'vue';
import Vuex from 'vuex';

import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

const app = createApp({});
app.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
