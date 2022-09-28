<template>
  <div class="container">
    <div v-for="collection of sortedByGenres" :key="collection.genre">
      <h5 class="mt-3">{{ collection.genre }}</h5>
      <div class="container__slider">
        <div
          v-for="tvShow of collection.TvShows"
          :key="tvShow.id"
          class="container__slider__movie"
        >
          <img :src="tvShow.image.original" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import axios from "axios"
import TvShow from "../../models/tvShow"

interface Grouped {
  genre: string
  TvShows: Array<TvShow>
}
export default Vue.extend({
  name: "Collections",
  data() {
    return {
      TvShows: [] as Array<TvShow>,
      sortedByGenres: [] as Grouped[],
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
        if (response) this.fetchGenres(response.data)
        console.log(response.data)
      } catch (e) {
        console.log(e)
      }
    },

    fetchGenres(TvShows: Array<TvShow>) {
      for (let i = 0; i < TvShows.length; i++) {
        for (let j = 0; j < TvShows[i].genres.length; j++) {
          const index = this.sortedByGenres.findIndex(
            (f) => f.genre === TvShows[i].genres[j]
          )
          if (index === -1) {
            const newFinal: Grouped = {
              genre: TvShows[i].genres[j],
              TvShows: [TvShows[i]],
            }
            this.sortedByGenres.push(newFinal)
          } else {
            this.sortedByGenres[index].TvShows = [
              ...this.sortedByGenres[index].TvShows,
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
