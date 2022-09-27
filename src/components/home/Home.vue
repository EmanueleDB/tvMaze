<template>
  <div class="container">
    <div v-for="collection of sortedByGenres" :key="collection.genre">
      <div>{{ collection.genre }}</div>
      <div class="slider">
        <div
          v-for="tvShow of collection.TvShows"
          :key="tvShow.id"
          class="movie"
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
  name: "Home",
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
        if (response) this.TvShows = response.data
        console.log(this.TvShows)
        this.fetchGenres(this.TvShows)
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
      console.log(this.sortedByGenres)
    },
    //   TVShows.map((TVShow: TVShow) => {
    //     TVShow.genres.map((genre: string) => {
    //       if (!this.sortedByGenres.genre.includes(genre)) {
    //         this.sortedByGenres.genre = genre
    //         this.sortedByGenres.movies.push(TVShow)
    //       } else this.sortedByGenres.movies.push(TVShow)
    //     })
    //   })
    //   console.log(this.sortedByGenres)
    // },
  },
})
</script>

<style lang="scss">
@import "style";
</style>
