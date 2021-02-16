import Vue from "vue";
import Vuex from "vuex";
import lorem from "./modules/lorem.store";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lorem
  }
});
