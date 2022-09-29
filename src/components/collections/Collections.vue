<template>
  <div class="container">
    <div v-for="collection of tvShowsByGenres" :key="collection.genre">
      <h5 class="mt-3">{{ collection.genre }}</h5>
      <Slider :group="collection.TvShows" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import axios from "axios"
import TvShow from "../../types/TvShow"
import Slider from "@/components/slider/Slider.vue"

interface Grouped {
  genre: string
  TvShows: Array<TvShow>
}
export default Vue.extend({
  name: "Collections",
  components: {
    Slider,
  },
  data() {
    return {
      TvShows: [] as Array<TvShow>,
      tvShowsByGenres: [] as Grouped[],
    }
  },
  mounted() {
    this.fetchMovies()
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await axios({
          url: "https://api.tvmaze.com/shows",
          method: "GET",
        })
        if (response) {
          this.fetchGenres(response.data)
          this.$store.commit("setTvShows", response.data)
        }
      } catch (e) {
        console.log(e)
      }
    },

    fetchGenres(TvShows: Array<TvShow>) {
      for (let i = 0; i < TvShows.length; i++) {
        for (let j = 0; j < TvShows[i].genres.length; j++) {
          const index = this.tvShowsByGenres.findIndex(
            (f) => f.genre === TvShows[i].genres[j]
          )
          if (index === -1) {
            const newFinal: Grouped = {
              genre: TvShows[i].genres[j],
              TvShows: [TvShows[i]],
            }
            this.tvShowsByGenres.push(newFinal)
          } else {
            this.tvShowsByGenres[index].TvShows = [
              ...this.tvShowsByGenres[index].TvShows,
              TvShows[i],
            ]
          }
        }
      }
    },
  },
})
</script>

<style lang="scss">
@import "style";
</style>
