import Vue from "vue"
import Vuex from "vuex"
import State from "../models/State"
import TvShow from "../models/TvShow"

Vue.use(Vuex)

const state: State = {
  tvShowsCollection: [],
}

export default new Vuex.Store({
  state,
  mutations: {
    setTvShows(state: State, payload: Array<TvShow>) {
      state.tvShowsCollection = payload
    },
  },
  actions: {},
  modules: {},
})
