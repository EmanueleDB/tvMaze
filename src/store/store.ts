import Vue from "vue"
import Vuex from "vuex"
import State from "../types/State"
import TvShow from "../types/TvShow"

Vue.use(Vuex)

const state: State = {
  tvShowsCollection: [],
  hasRendered: false,
}

export default new Vuex.Store({
  state,
  mutations: {
    setTvShows(state: State, payload: Array<TvShow>) {
      state.tvShowsCollection = payload
    },
    isRendering(state: State, payload: boolean) {
      console.log(payload)
      state.hasRendered = payload
    },
  },
})
