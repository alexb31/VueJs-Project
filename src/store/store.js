import Vue from 'vue';
import Vuex from 'vuex';
import stock from './modules/stocks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stock
  }
});