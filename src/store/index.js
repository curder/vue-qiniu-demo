import Vue from 'vue';
import Vuex from 'vuex';
import modules from '@/store/modules/index';

Vue.use(Vuex);

export default new Vuex.Store({
  static: process.env.NODE_ENV !== 'production', // 开启严格模式
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ...modules,
  },
});
