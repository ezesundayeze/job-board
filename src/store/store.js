import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs:{},
    details:{}
  },
  mutations: {
    ADD_JOB(state, payload){
      state.jobs=payload
    },
    ADD_DETAIL(state, payload){
      state.details = payload
    }

  },
  actions: {
    addJobs({commit}, job){
      commit("ADD_JOB", job)
    },
    addDetail({commit}, detail){
      commit("ADD_DETAIL", detail)
    }

  }
})
