import Vue from "vue"
import Vuex from "vuex"
import State from "../types/State"
import TvShow from "../types/TvShow"

Vue.use(Vuex)

const state: State = {
  tvShowsCollection: [],
  hasRendered: false,
  imageCount: 0,
}

export default new Vuex.Store({
  state,
  mutations: {
    setTvShows(state: State, payload: Array<TvShow>) {
      state.tvShowsCollection = payload
    },
    imageCounter(state: State, payload: number) {
      state.imageCount = state.imageCount + payload
      if (state.imageCount === 587) {
        state.hasRendered = true
      }
    },
  },
})
