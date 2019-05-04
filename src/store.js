import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDesktop: null
  },
  mutations: {
    setScreensize(state, payload) {
      state.isDesktop = payload;
    }
  },
  actions: {

  }
})
