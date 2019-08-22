import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs:{}
  },
  mutations: {
    ADD_JOB(state, payload){
      state.jobs=payload
    }

  },
  actions: {
    addJobs({commit}, job){
      commit("ADD_JOB", job)
    }

  }
})
